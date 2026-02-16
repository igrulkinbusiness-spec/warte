# Latvijas Ceļi - Инструкция по установке на сервер

## Требования
- Ubuntu 20.04+ / Debian 11+
- Node.js 18+
- Python 3.10+
- MongoDB 6.0+
- Nginx

## Быстрая установка

### 1. Установите зависимости
```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Yarn
npm install -g yarn

# Python
sudo apt install -y python3 python3-pip python3-venv

# MongoDB
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Nginx
sudo apt install -y nginx
```

### 2. Скопируйте проект на сервер
```bash
# Создайте папку
sudo mkdir -p /var/www/latvijas-celi
cd /var/www/latvijas-celi

# Скопируйте файлы (через scp, git или архив)
```

### 3. Настройте Backend
```bash
cd /var/www/latvijas-celi/backend

# Создайте виртуальное окружение
python3 -m venv venv
source venv/bin/activate

# Установите зависимости
pip install -r requirements.txt

# Настройте .env
cat > .env << EOF
MONGO_URL="mongodb://localhost:27017"
DB_NAME="latvijas_celi"
CORS_ORIGINS="*"
EOF
```

### 4. Настройте Frontend
```bash
cd /var/www/latvijas-celi/frontend

# Установите зависимости
yarn install

# Настройте .env (замените YOUR_DOMAIN на ваш домен)
cat > .env << EOF
REACT_APP_BACKEND_URL=https://YOUR_DOMAIN
EOF

# Соберите production версию
yarn build
```

### 5. Настройте Nginx
```bash
sudo nano /etc/nginx/sites-available/latvijas-celi
```

Вставьте (замените YOUR_DOMAIN):
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN;

    # Frontend
    location / {
        root /var/www/latvijas-celi/frontend/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Активируйте:
```bash
sudo ln -s /etc/nginx/sites-available/latvijas-celi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Создайте systemd сервис для Backend
```bash
sudo nano /etc/systemd/system/latvijas-backend.service
```

Вставьте:
```ini
[Unit]
Description=Latvijas Celi Backend
After=network.target mongod.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/latvijas-celi/backend
Environment="PATH=/var/www/latvijas-celi/backend/venv/bin"
ExecStart=/var/www/latvijas-celi/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
```

Запустите:
```bash
sudo systemctl daemon-reload
sudo systemctl start latvijas-backend
sudo systemctl enable latvijas-backend
```

### 7. SSL сертификат (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
```

## Проверка
```bash
# Статус сервисов
sudo systemctl status mongod
sudo systemctl status latvijas-backend
sudo systemctl status nginx

# Логи backend
sudo journalctl -u latvijas-backend -f
```

## Готово!
Откройте https://YOUR_DOMAIN в браузере.
