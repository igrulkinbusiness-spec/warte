export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      vignettes: 'Виньетки',
      routes: 'Маршруты',
      parking: 'Стоянки',
      rules: 'Правила',
      map: 'Карта',
      tolls: 'Платные дороги',
      borders: 'Границы',
      fuel: 'АЗС',
      weights: 'Габариты',
      rest: 'Отдых',
      services: 'Сервисы',
      weather: 'Погода',
      contacts: 'Контакты',
      about: 'О нас'
    },
    home: {
      title: 'Грузоперевозки Латвия',
      subtitle: 'Всё для водителей грузовиков',
      description: 'Виньетки, маршруты, стоянки, правила и полезная информация для дальнобойщиков',
      explore: 'Подробнее',
      totalRoads: 'Км дорог',
      trucks: 'Стоянок',
      borders: 'Погранпереходов',
      km: ''
    },
    vignettes: {
      title: 'Виньетки Латвии',
      subtitle: 'Электронная система оплаты дорог для грузовиков',
      description: 'С 2024 года в Латвии действует система виньеток для грузовых автомобилей свыше 3.5 тонн',
      prices: 'Тарифы',
      priceList: [
        { category: 'Грузовики 3.5-12 тонн', day: '8 EUR', week: '25 EUR', month: '55 EUR', year: '400 EUR' },
        { category: 'Грузовики > 12 тонн (2 оси)', day: '12 EUR', week: '40 EUR', month: '85 EUR', year: '650 EUR' },
        { category: 'Грузовики > 12 тонн (3+ оси)', day: '15 EUR', week: '50 EUR', month: '110 EUR', year: '850 EUR' }
      ],
      howToBuy: 'Как купить',
      buySteps: [
        'Онлайн на сайте latviasvinjete.lv',
        'На заправках Circle K, Neste, Viada',
        'На пограничных пунктах',
        'Через мобильное приложение'
      ],
      important: 'Важно: виньетка обязательна на всех магистралях A-класса'
    },
    routes: {
      title: 'Маршруты для грузовиков',
      subtitle: 'Оптимальные пути через Латвию',
      mainRoutes: [
        { code: 'E67', name: 'Via Baltica', from: 'Литва', to: 'Эстония', length: '310 км', desc: 'Главный транзитный коридор' },
        { code: 'E22', name: 'Рига - Москва', from: 'Рига', to: 'Граница РФ', length: '279 км', desc: 'Восточный коридор через Резекне' },
        { code: 'A9', name: 'Рига - Лиепая', from: 'Рига', to: 'Лиепая', length: '207 км', desc: 'К порту Лиепая' },
        { code: 'A10', name: 'Рига - Вентспилс', from: 'Рига', to: 'Вентспилс', length: '189 км', desc: 'К крупнейшему порту' }
      ]
    },
    parking: {
      title: 'Стоянки для грузовиков',
      subtitle: 'Безопасные места отдыха',
      features: ['Охраняемая территория', 'Душ и туалет', 'Кафе/столовая', 'WiFi', 'Ремонт'],
      parkingList: [
        { name: 'TruckStop Riga', location: 'Рига, Краста', spaces: '120', services: 'Полный сервис', price: '15 EUR/ночь' },
        { name: 'Baltic Truck Park', location: 'Саласпилс', spaces: '80', services: 'Охрана, душ', price: '12 EUR/ночь' },
        { name: 'Via Baltica Park', location: 'Бауска', spaces: '60', services: 'Охрана, кафе', price: '10 EUR/ночь' },
        { name: 'Ventspils Truck', location: 'Вентспилс', spaces: '45', services: 'Порт, охрана', price: '12 EUR/ночь' }
      ]
    },
    rules: {
      title: 'Правила для грузовиков',
      subtitle: 'ПДД и ограничения в Латвии',
      sections: [
        { title: 'Скоростной режим', items: ['В населённых пунктах: 50 км/ч', 'Вне населённых пунктов: 80 км/ч', 'На автомагистралях: 90 км/ч (грузовики > 7.5т)'] },
        { title: 'Габариты', items: ['Максимальная высота: 4.0 м', 'Максимальная ширина: 2.55 м', 'Максимальная длина: 16.5 м (автопоезд: 18.75 м)'] },
        { title: 'Весовые ограничения', items: ['Максимальная масса: 40 тонн', 'Нагрузка на ось: до 11.5 тонн', 'Разрешения для негабарита в VSIA'] },
        { title: 'Запреты движения', items: ['Воскресенье: 00:00-24:00 (> 7.5т)', 'Праздники: движение запрещено', 'Летом ограничения в жару'] }
      ]
    },
    map: {
      title: 'Карта для грузовиков',
      subtitle: 'Маршруты, стоянки, АЗС',
      legend: {
        highways: 'Магистрали',
        parking: 'Стоянки',
        fuel: 'АЗС'
      }
    },
    tolls: {
      title: 'Платные дороги',
      subtitle: 'Система оплаты в Латвии',
      description: 'В Латвии нет классических платных дорог с шлагбаумами. Оплата осуществляется через систему виньеток.',
      roads: [
        { name: 'A1 Via Baltica (юг)', toll: 'Виньетка', length: '88 км' },
        { name: 'A2 Рига-Эстония', toll: 'Виньетка', length: '175 км' },
        { name: 'A6 Рига-Даугавпилс', toll: 'Виньетка', length: '279 км' },
        { name: 'A7 Via Baltica (через Бауску)', toll: 'Виньетка', length: '90 км' }
      ]
    },
    borders: {
      title: 'Пограничные переходы',
      subtitle: 'Информация для грузоперевозчиков',
      crossings: [
        { name: 'Гренцтале', country: 'Литва', type: 'EU внутренний', wait: '0-15 мин', hours: '24/7' },
        { name: 'Терехова', country: 'Россия', type: 'Таможня', wait: '2-8 часов', hours: '24/7' },
        { name: 'Виентули', country: 'Литва', type: 'EU внутренний', wait: '0-15 мин', hours: '24/7' },
        { name: 'Айнажи', country: 'Эстония', type: 'EU внутренний', wait: '0-10 мин', hours: '24/7' }
      ]
    },
    fuel: {
      title: 'АЗС для грузовиков',
      subtitle: 'Заправки с дизелем и сервисом',
      stations: [
        { brand: 'Circle K', count: '85+', diesel: 'Да', adblue: 'Да', parking: 'Да' },
        { brand: 'Neste', count: '45+', diesel: 'Да', adblue: 'Да', parking: 'Да' },
        { brand: 'Viada', count: '35+', diesel: 'Да', adblue: 'Частично', parking: 'Да' },
        { brand: 'Gotika', count: '25+', diesel: 'Да', adblue: 'Да', parking: 'Да' }
      ],
      avgPrice: 'Средняя цена дизеля: ~1.45 EUR/л'
    },
    weights: {
      title: 'Габариты и вес',
      subtitle: 'Ограничения для грузовиков',
      limits: [
        { param: 'Максимальная высота', value: '4.0 м' },
        { param: 'Максимальная ширина', value: '2.55 м (рефрижератор: 2.6 м)' },
        { param: 'Максимальная длина (одиночка)', value: '12.0 м' },
        { param: 'Максимальная длина (автопоезд)', value: '16.5 м' },
        { param: 'Максимальная длина (седельный)', value: '18.75 м' },
        { param: 'Максимальная масса', value: '40 тонн (44т с разрешением)' },
        { param: 'Нагрузка на ось (одиночная)', value: '10 тонн' },
        { param: 'Нагрузка на ось (двойная)', value: '11.5 тонн' }
      ]
    },
    rest: {
      title: 'Режим труда и отдыха',
      subtitle: 'Требования ЕС для водителей',
      rules: [
        { rule: 'Ежедневное вождение', value: 'Макс. 9 часов (2 раза в неделю - 10ч)' },
        { rule: 'Недельное вождение', value: 'Макс. 56 часов' },
        { rule: 'Двухнедельное вождение', value: 'Макс. 90 часов' },
        { rule: 'Перерыв', value: '45 мин после 4.5 часов (можно 15+30)' },
        { rule: 'Ежедневный отдых', value: '11 часов (или 9ч сокращённый)' },
        { rule: 'Еженедельный отдых', value: '45 часов (или 24ч сокращённый)' }
      ]
    },
    services: {
      title: 'Сервисы для грузовиков',
      subtitle: 'Ремонт, шиномонтаж, помощь',
      serviceList: [
        { name: 'MAN Сервис Рига', type: 'Официальный дилер', phone: '+371 67 800 100' },
        { name: 'Scania Latvia', type: 'Официальный дилер', phone: '+371 67 802 700' },
        { name: 'Volvo Trucks Рига', type: 'Официальный дилер', phone: '+371 67 505 050' },
        { name: 'TruckHelp 24/7', type: 'Эвакуация', phone: '+371 26 000 000' }
      ]
    },
    weather: {
      title: 'Погода и дороги',
      subtitle: 'Актуальные условия движения',
      tips: [
        'Зимняя резина обязательна: 1 декабря - 1 марта',
        'Цепи разрешены при снеге/гололёде',
        'Проверяйте прогноз перед рейсом',
        'Следите за ограничениями в жару (>30°C)'
      ]
    },
    contacts: {
      title: 'Полезные контакты',
      subtitle: 'Экстренные службы и информация',
      numbers: [
        { name: 'Экстренные службы', number: '112' },
        { name: 'Полиция', number: '110' },
        { name: 'Дорожная информация', number: '+371 67 025 555' },
        { name: 'Таможня', number: '+371 67 028 300' },
        { name: 'VSIA (разрешения)', number: '+371 67 025 777' }
      ]
    },
    about: {
      title: 'О проекте',
      subtitle: 'Информационный портал для дальнобойщиков',
      description: 'Этот сайт создан для водителей грузовых автомобилей, совершающих рейсы через Латвию. Мы собрали всю необходимую информацию о виньетках, маршрутах, стоянках и правилах.',
      disclaimer: 'Информация носит справочный характер. Уточняйте актуальные данные в официальных источниках.'
    },
    footer: {
      rights: 'Информационный портал для грузоперевозчиков',
      disclaimer: 'Данные носят справочный характер'
    }
  },
  lv: {
    nav: {
      home: 'Sākums',
      vignettes: 'Vinjetes',
      routes: 'Maršruti',
      parking: 'Stāvvietas',
      rules: 'Noteikumi',
      map: 'Karte',
      tolls: 'Maksas ceļi',
      borders: 'Robežas',
      fuel: 'DUS',
      weights: 'Gabarīti',
      rest: 'Atpūta',
      services: 'Servisi',
      weather: 'Laikapstākļi',
      contacts: 'Kontakti',
      about: 'Par mums'
    },
    home: {
      title: 'Kravas pārvadājumi Latvijā',
      subtitle: 'Viss kravas auto vadītājiem',
      description: 'Vinjetes, maršruti, stāvvietas, noteikumi un noderīga informācija tālbraucējiem',
      explore: 'Uzzināt vairāk',
      totalRoads: 'Km ceļu',
      trucks: 'Stāvvietas',
      borders: 'Robežpunkti',
      km: ''
    },
    vignettes: {
      title: 'Latvijas vinjetes',
      subtitle: 'Elektroniskā ceļu maksas sistēma kravas auto',
      description: 'No 2024. gada Latvijā darbojas vinjetes sistēma kravas automobiļiem virs 3.5 tonnām',
      prices: 'Tarifi',
      priceList: [
        { category: 'Kravas auto 3.5-12 tonnas', day: '8 EUR', week: '25 EUR', month: '55 EUR', year: '400 EUR' },
        { category: 'Kravas auto > 12 t (2 asis)', day: '12 EUR', week: '40 EUR', month: '85 EUR', year: '650 EUR' },
        { category: 'Kravas auto > 12 t (3+ asis)', day: '15 EUR', week: '50 EUR', month: '110 EUR', year: '850 EUR' }
      ],
      howToBuy: 'Kā iegādāties',
      buySteps: [
        'Tiešsaistē latviasvinjete.lv',
        'Circle K, Neste, Viada degvielas uzpildes stacijās',
        'Robežpunktos',
        'Mobilajā lietotnē'
      ],
      important: 'Svarīgi: vinjete obligāta uz visām A-klases maģistrālēm'
    },
    routes: {
      title: 'Kravas auto maršruti',
      subtitle: 'Optimālie ceļi caur Latviju',
      mainRoutes: [
        { code: 'E67', name: 'Via Baltica', from: 'Lietuva', to: 'Igaunija', length: '310 km', desc: 'Galvenais tranzīta koridors' },
        { code: 'E22', name: 'Rīga - Maskava', from: 'Rīga', to: 'Krievijas robeža', length: '279 km', desc: 'Austrumu koridors caur Rēzekni' },
        { code: 'A9', name: 'Rīga - Liepāja', from: 'Rīga', to: 'Liepāja', length: '207 km', desc: 'Uz Liepājas ostu' },
        { code: 'A10', name: 'Rīga - Ventspils', from: 'Rīga', to: 'Ventspils', length: '189 km', desc: 'Uz lielāko ostu' }
      ]
    },
    parking: {
      title: 'Kravas auto stāvvietas',
      subtitle: 'Drošas atpūtas vietas',
      features: ['Apsargāta teritorija', 'Duša un tualete', 'Kafejnīca', 'WiFi', 'Remonts'],
      parkingList: [
        { name: 'TruckStop Riga', location: 'Rīga, Krasta', spaces: '120', services: 'Pilns serviss', price: '15 EUR/nakts' },
        { name: 'Baltic Truck Park', location: 'Salaspils', spaces: '80', services: 'Apsardze, duša', price: '12 EUR/nakts' },
        { name: 'Via Baltica Park', location: 'Bauska', spaces: '60', services: 'Apsardze, kafejnīca', price: '10 EUR/nakts' },
        { name: 'Ventspils Truck', location: 'Ventspils', spaces: '45', services: 'Osta, apsardze', price: '12 EUR/nakts' }
      ]
    },
    rules: {
      title: 'Noteikumi kravas auto',
      subtitle: 'CSN un ierobežojumi Latvijā',
      sections: [
        { title: 'Ātruma režīms', items: ['Apdzīvotās vietās: 50 km/h', 'Ārpus apdzīvotām vietām: 80 km/h', 'Uz automaģistrālēm: 90 km/h (kravas auto > 7.5t)'] },
        { title: 'Gabarīti', items: ['Maksimālais augstums: 4.0 m', 'Maksimālais platums: 2.55 m', 'Maksimālais garums: 16.5 m (autovilciens: 18.75 m)'] },
        { title: 'Svara ierobežojumi', items: ['Maksimālā masa: 40 tonnas', 'Slodze uz asi: līdz 11.5 tonnām', 'Atļaujas lielgabarītam VSIA'] },
        { title: 'Kustības aizliegumi', items: ['Svētdienās: 00:00-24:00 (> 7.5t)', 'Svētku dienās: kustība aizliegta', 'Vasarā ierobežojumi karstumā'] }
      ]
    },
    map: {
      title: 'Karte kravas auto',
      subtitle: 'Maršruti, stāvvietas, DUS',
      legend: {
        highways: 'Maģistrāles',
        parking: 'Stāvvietas',
        fuel: 'DUS'
      }
    },
    tolls: {
      title: 'Maksas ceļi',
      subtitle: 'Maksājumu sistēma Latvijā',
      description: 'Latvijā nav klasisko maksas ceļu ar barjerām. Maksājumi tiek veikti caur vinjetes sistēmu.',
      roads: [
        { name: 'A1 Via Baltica (dienvidi)', toll: 'Vinjete', length: '88 km' },
        { name: 'A2 Rīga-Igaunija', toll: 'Vinjete', length: '175 km' },
        { name: 'A6 Rīga-Daugavpils', toll: 'Vinjete', length: '279 km' },
        { name: 'A7 Via Baltica (caur Bausku)', toll: 'Vinjete', length: '90 km' }
      ]
    },
    borders: {
      title: 'Robežpunkti',
      subtitle: 'Informācija kravu pārvadātājiem',
      crossings: [
        { name: 'Grenctāle', country: 'Lietuva', type: 'ES iekšējā', wait: '0-15 min', hours: '24/7' },
        { name: 'Terehova', country: 'Krievija', type: 'Muita', wait: '2-8 stundas', hours: '24/7' },
        { name: 'Vientuļi', country: 'Lietuva', type: 'ES iekšējā', wait: '0-15 min', hours: '24/7' },
        { name: 'Ainaži', country: 'Igaunija', type: 'ES iekšējā', wait: '0-10 min', hours: '24/7' }
      ]
    },
    fuel: {
      title: 'DUS kravas auto',
      subtitle: 'Degvielas uzpildes ar dīzeļdegvielu un servisu',
      stations: [
        { brand: 'Circle K', count: '85+', diesel: 'Jā', adblue: 'Jā', parking: 'Jā' },
        { brand: 'Neste', count: '45+', diesel: 'Jā', adblue: 'Jā', parking: 'Jā' },
        { brand: 'Viada', count: '35+', diesel: 'Jā', adblue: 'Daļēji', parking: 'Jā' },
        { brand: 'Gotika', count: '25+', diesel: 'Jā', adblue: 'Jā', parking: 'Jā' }
      ],
      avgPrice: 'Vidējā dīzeļdegvielas cena: ~1.45 EUR/l'
    },
    weights: {
      title: 'Gabarīti un svars',
      subtitle: 'Ierobežojumi kravas auto',
      limits: [
        { param: 'Maksimālais augstums', value: '4.0 m' },
        { param: 'Maksimālais platums', value: '2.55 m (refrižerators: 2.6 m)' },
        { param: 'Maksimālais garums (atsevišķi)', value: '12.0 m' },
        { param: 'Maksimālais garums (autovilciens)', value: '16.5 m' },
        { param: 'Maksimālais garums (puspiekabe)', value: '18.75 m' },
        { param: 'Maksimālā masa', value: '40 tonnas (44t ar atļauju)' },
        { param: 'Slodze uz ass (viena)', value: '10 tonnas' },
        { param: 'Slodze uz ass (dubulta)', value: '11.5 tonnas' }
      ]
    },
    rest: {
      title: 'Darba un atpūtas režīms',
      subtitle: 'ES prasības vadītājiem',
      rules: [
        { rule: 'Ikdienas braukšana', value: 'Maks. 9 stundas (2x nedēļā - 10st)' },
        { rule: 'Nedēļas braukšana', value: 'Maks. 56 stundas' },
        { rule: 'Divu nedēļu braukšana', value: 'Maks. 90 stundas' },
        { rule: 'Pārtraukums', value: '45 min pēc 4.5 stundām (var 15+30)' },
        { rule: 'Ikdienas atpūta', value: '11 stundas (vai 9st saīsināta)' },
        { rule: 'Iknedēļas atpūta', value: '45 stundas (vai 24st saīsināta)' }
      ]
    },
    services: {
      title: 'Servisi kravas auto',
      subtitle: 'Remonts, riepas, palīdzība',
      serviceList: [
        { name: 'MAN Serviss Rīga', type: 'Oficiālais dīleris', phone: '+371 67 800 100' },
        { name: 'Scania Latvia', type: 'Oficiālais dīleris', phone: '+371 67 802 700' },
        { name: 'Volvo Trucks Rīga', type: 'Oficiālais dīleris', phone: '+371 67 505 050' },
        { name: 'TruckHelp 24/7', type: 'Evakuācija', phone: '+371 26 000 000' }
      ]
    },
    weather: {
      title: 'Laikapstākļi un ceļi',
      subtitle: 'Aktuālie kustības apstākļi',
      tips: [
        'Ziemas riepas obligātas: 1. decembris - 1. marts',
        'Ķēdes atļautas sniega/apledojuma gadījumā',
        'Pārbaudiet prognozi pirms reisa',
        'Sekojiet ierobežojumiem karstumā (>30°C)'
      ]
    },
    contacts: {
      title: 'Noderīgi kontakti',
      subtitle: 'Ārkārtas dienesti un informācija',
      numbers: [
        { name: 'Ārkārtas dienesti', number: '112' },
        { name: 'Policija', number: '110' },
        { name: 'Ceļu informācija', number: '+371 67 025 555' },
        { name: 'Muita', number: '+371 67 028 300' },
        { name: 'VSIA (atļaujas)', number: '+371 67 025 777' }
      ]
    },
    about: {
      title: 'Par projektu',
      subtitle: 'Informatīvs portāls tālbraucējiem',
      description: 'Šī vietne izveidota kravas automobiļu vadītājiem, kuri veic reisus caur Latviju. Esam apkopojuši visu nepieciešamo informāciju par vinjetēm, maršrutiem, stāvvietām un noteikumiem.',
      disclaimer: 'Informācija ir uzziņas rakstura. Precizējiet aktuālos datus oficiālajos avotos.'
    },
    footer: {
      rights: 'Informatīvs portāls kravu pārvadātājiem',
      disclaimer: 'Dati ir uzziņas rakstura'
    }
  },
  en: {
    nav: {
      home: 'Home',
      vignettes: 'Vignettes',
      routes: 'Routes',
      parking: 'Truck Stops',
      rules: 'Regulations',
      map: 'Map',
      tolls: 'Toll Roads',
      borders: 'Border Crossings',
      fuel: 'Fuel Stations',
      weights: 'Weight Limits',
      rest: 'Rest Times',
      services: 'Services',
      weather: 'Weather',
      contacts: 'Contacts',
      about: 'About'
    },
    home: {
      title: 'Trucking in Latvia',
      subtitle: 'Everything for truck drivers',
      description: 'Vignettes, routes, truck stops, regulations and useful information for truckers',
      explore: 'Learn More',
      totalRoads: 'Km of roads',
      trucks: 'Truck stops',
      borders: 'Border crossings',
      km: ''
    },
    vignettes: {
      title: 'Latvia Vignettes',
      subtitle: 'Electronic road toll system for trucks',
      description: 'Since 2024, Latvia has a vignette system for trucks over 3.5 tons',
      prices: 'Prices',
      priceList: [
        { category: 'Trucks 3.5-12 tons', day: '8 EUR', week: '25 EUR', month: '55 EUR', year: '400 EUR' },
        { category: 'Trucks > 12t (2 axles)', day: '12 EUR', week: '40 EUR', month: '85 EUR', year: '650 EUR' },
        { category: 'Trucks > 12t (3+ axles)', day: '15 EUR', week: '50 EUR', month: '110 EUR', year: '850 EUR' }
      ],
      howToBuy: 'How to Buy',
      buySteps: [
        'Online at latviasvinjete.lv',
        'At Circle K, Neste, Viada gas stations',
        'At border crossings',
        'Via mobile app'
      ],
      important: 'Important: vignette is mandatory on all A-class highways'
    },
    routes: {
      title: 'Truck Routes',
      subtitle: 'Optimal routes through Latvia',
      mainRoutes: [
        { code: 'E67', name: 'Via Baltica', from: 'Lithuania', to: 'Estonia', length: '310 km', desc: 'Main transit corridor' },
        { code: 'E22', name: 'Riga - Moscow', from: 'Riga', to: 'Russia border', length: '279 km', desc: 'Eastern corridor via Rezekne' },
        { code: 'A9', name: 'Riga - Liepaja', from: 'Riga', to: 'Liepaja', length: '207 km', desc: 'To Liepaja port' },
        { code: 'A10', name: 'Riga - Ventspils', from: 'Riga', to: 'Ventspils', length: '189 km', desc: 'To largest port' }
      ]
    },
    parking: {
      title: 'Truck Parking',
      subtitle: 'Safe rest areas',
      features: ['Secured area', 'Shower & toilet', 'Restaurant', 'WiFi', 'Repair'],
      parkingList: [
        { name: 'TruckStop Riga', location: 'Riga, Krasta', spaces: '120', services: 'Full service', price: '15 EUR/night' },
        { name: 'Baltic Truck Park', location: 'Salaspils', spaces: '80', services: 'Security, shower', price: '12 EUR/night' },
        { name: 'Via Baltica Park', location: 'Bauska', spaces: '60', services: 'Security, cafe', price: '10 EUR/night' },
        { name: 'Ventspils Truck', location: 'Ventspils', spaces: '45', services: 'Port, security', price: '12 EUR/night' }
      ]
    },
    rules: {
      title: 'Truck Regulations',
      subtitle: 'Traffic rules and restrictions in Latvia',
      sections: [
        { title: 'Speed Limits', items: ['In urban areas: 50 km/h', 'Outside urban areas: 80 km/h', 'On highways: 90 km/h (trucks > 7.5t)'] },
        { title: 'Dimensions', items: ['Maximum height: 4.0 m', 'Maximum width: 2.55 m', 'Maximum length: 16.5 m (road train: 18.75 m)'] },
        { title: 'Weight Limits', items: ['Maximum weight: 40 tons', 'Axle load: up to 11.5 tons', 'Oversize permits at VSIA'] },
        { title: 'Driving Bans', items: ['Sundays: 00:00-24:00 (> 7.5t)', 'Public holidays: driving prohibited', 'Summer restrictions in heat'] }
      ]
    },
    map: {
      title: 'Truck Map',
      subtitle: 'Routes, parking, fuel stations',
      legend: {
        highways: 'Highways',
        parking: 'Truck stops',
        fuel: 'Fuel stations'
      }
    },
    tolls: {
      title: 'Toll Roads',
      subtitle: 'Payment system in Latvia',
      description: 'Latvia has no classic toll roads with barriers. Payment is made through the vignette system.',
      roads: [
        { name: 'A1 Via Baltica (south)', toll: 'Vignette', length: '88 km' },
        { name: 'A2 Riga-Estonia', toll: 'Vignette', length: '175 km' },
        { name: 'A6 Riga-Daugavpils', toll: 'Vignette', length: '279 km' },
        { name: 'A7 Via Baltica (via Bauska)', toll: 'Vignette', length: '90 km' }
      ]
    },
    borders: {
      title: 'Border Crossings',
      subtitle: 'Information for freight carriers',
      crossings: [
        { name: 'Grenctale', country: 'Lithuania', type: 'EU internal', wait: '0-15 min', hours: '24/7' },
        { name: 'Terehova', country: 'Russia', type: 'Customs', wait: '2-8 hours', hours: '24/7' },
        { name: 'Vientuli', country: 'Lithuania', type: 'EU internal', wait: '0-15 min', hours: '24/7' },
        { name: 'Ainazi', country: 'Estonia', type: 'EU internal', wait: '0-10 min', hours: '24/7' }
      ]
    },
    fuel: {
      title: 'Truck Fuel Stations',
      subtitle: 'Gas stations with diesel and services',
      stations: [
        { brand: 'Circle K', count: '85+', diesel: 'Yes', adblue: 'Yes', parking: 'Yes' },
        { brand: 'Neste', count: '45+', diesel: 'Yes', adblue: 'Yes', parking: 'Yes' },
        { brand: 'Viada', count: '35+', diesel: 'Yes', adblue: 'Partial', parking: 'Yes' },
        { brand: 'Gotika', count: '25+', diesel: 'Yes', adblue: 'Yes', parking: 'Yes' }
      ],
      avgPrice: 'Average diesel price: ~1.45 EUR/l'
    },
    weights: {
      title: 'Dimensions & Weight',
      subtitle: 'Truck restrictions',
      limits: [
        { param: 'Maximum height', value: '4.0 m' },
        { param: 'Maximum width', value: '2.55 m (refrigerator: 2.6 m)' },
        { param: 'Maximum length (single)', value: '12.0 m' },
        { param: 'Maximum length (road train)', value: '16.5 m' },
        { param: 'Maximum length (semi-trailer)', value: '18.75 m' },
        { param: 'Maximum weight', value: '40 tons (44t with permit)' },
        { param: 'Single axle load', value: '10 tons' },
        { param: 'Double axle load', value: '11.5 tons' }
      ]
    },
    rest: {
      title: 'Driving & Rest Times',
      subtitle: 'EU requirements for drivers',
      rules: [
        { rule: 'Daily driving', value: 'Max. 9 hours (2x per week - 10h)' },
        { rule: 'Weekly driving', value: 'Max. 56 hours' },
        { rule: 'Bi-weekly driving', value: 'Max. 90 hours' },
        { rule: 'Break', value: '45 min after 4.5 hours (can be 15+30)' },
        { rule: 'Daily rest', value: '11 hours (or 9h reduced)' },
        { rule: 'Weekly rest', value: '45 hours (or 24h reduced)' }
      ]
    },
    services: {
      title: 'Truck Services',
      subtitle: 'Repair, tires, assistance',
      serviceList: [
        { name: 'MAN Service Riga', type: 'Official dealer', phone: '+371 67 800 100' },
        { name: 'Scania Latvia', type: 'Official dealer', phone: '+371 67 802 700' },
        { name: 'Volvo Trucks Riga', type: 'Official dealer', phone: '+371 67 505 050' },
        { name: 'TruckHelp 24/7', type: 'Towing', phone: '+371 26 000 000' }
      ]
    },
    weather: {
      title: 'Weather & Roads',
      subtitle: 'Current driving conditions',
      tips: [
        'Winter tires mandatory: December 1 - March 1',
        'Chains allowed in snow/ice conditions',
        'Check forecast before trip',
        'Watch for restrictions in heat (>30°C)'
      ]
    },
    contacts: {
      title: 'Useful Contacts',
      subtitle: 'Emergency services and information',
      numbers: [
        { name: 'Emergency services', number: '112' },
        { name: 'Police', number: '110' },
        { name: 'Road information', number: '+371 67 025 555' },
        { name: 'Customs', number: '+371 67 028 300' },
        { name: 'VSIA (permits)', number: '+371 67 025 777' }
      ]
    },
    about: {
      title: 'About',
      subtitle: 'Information portal for truckers',
      description: 'This website is created for truck drivers traveling through Latvia. We have collected all necessary information about vignettes, routes, parking and regulations.',
      disclaimer: 'Information is for reference only. Verify current data from official sources.'
    },
    footer: {
      rights: 'Information portal for freight carriers',
      disclaimer: 'Data is for reference purposes'
    }
  }
};
