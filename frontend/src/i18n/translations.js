export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      history: 'История',
      highways: 'Автомагистрали',
      regional: 'Региональные',
      local: 'Местные',
      rules: 'ПДД',
      map: 'Карта',
      attractions: 'Достопримечательности',
      safety: 'Безопасность',
      statistics: 'Статистика',
      winter: 'Зимние дороги',
      cycling: 'Велодорожки',
      historic: 'Торговые пути',
      bridges: 'Мосты',
      about: 'О проекте'
    },
    home: {
      title: 'Дороги Латвии',
      subtitle: 'Откройте для себя дорожную сеть Балтии',
      description: 'Информационный портал о дорогах, истории и инфраструктуре Латвии',
      explore: 'Исследовать',
      totalRoads: 'Всего дорог',
      highways: 'Автомагистралей',
      bridges: 'Мостов',
      km: 'км'
    },
    history: {
      title: 'История дорог Латвии',
      subtitle: 'От древних торговых путей до современных магистралей',
      timeline: [
        { year: '1200', title: 'Ганзейские торговые пути', desc: 'Формирование первых торговых маршрутов через Ригу' },
        { year: '1561', title: 'Ливонская конфедерация', desc: 'Развитие почтовых дорог между городами' },
        { year: '1795', title: 'Российская империя', desc: 'Строительство государственных трактов' },
        { year: '1918', title: 'Независимость', desc: 'Создание национальной дорожной сети' },
        { year: '1940', title: 'Советский период', desc: 'Реконструкция и расширение дорог' },
        { year: '1991', title: 'Восстановление независимости', desc: 'Модернизация по европейским стандартам' },
        { year: '2004', title: 'Вступление в ЕС', desc: 'Масштабные инвестиции в инфраструктуру' }
      ]
    },
    highways: {
      title: 'Автомагистрали Латвии',
      subtitle: 'Основные транспортные артерии страны',
      roads: [
        { code: 'A1', name: 'Рига - граница Литвы (Via Baltica)', length: '88 км', desc: 'Главная магистраль на юг' },
        { code: 'A2', name: 'Рига - граница Эстонии', length: '175 км', desc: 'Путь в северную Балтику' },
        { code: 'A3', name: 'Инчукалнс - Валмиера - граница Эстонии', length: '137 км', desc: 'Восточный маршрут в Эстонию' },
        { code: 'A4', name: 'Рига - граница Литвы (Bauska)', length: '66 км', desc: 'Альтернативный путь на юг' },
        { code: 'A5', name: 'Рижское шоссе - Саласпилс - Бабите', length: '29 км', desc: 'Южная объездная Риги' },
        { code: 'A6', name: 'Рига - Даугавпилс - граница Беларуси', length: '279 км', desc: 'Восточный коридор' },
        { code: 'A7', name: 'Рига - Бауска - граница Литвы', length: '90 км', desc: 'Via Baltica через Бауску' },
        { code: 'A8', name: 'Рига - Елгава - граница Литвы', length: '68 км', desc: 'Западный маршрут в Литву' },
        { code: 'A9', name: 'Рига - Лиепая', length: '207 км', desc: 'Путь к Балтийскому морю' },
        { code: 'A10', name: 'Рига - Вентспилс', length: '189 км', desc: 'К крупнейшему порту' }
      ]
    },
    regional: {
      title: 'Региональные дороги',
      subtitle: 'P-дороги соединяющие города и районы',
      description: 'Региональные дороги (P-дороги) образуют сеть, связывающую районные центры и важные населённые пункты. Общая протяжённость составляет более 5 000 км.',
      features: [
        'Двухполосное движение',
        'Асфальтовое покрытие',
        'Ограничение скорости 90 км/ч',
        'Соединение районных центров'
      ]
    },
    local: {
      title: 'Местные дороги',
      subtitle: 'Сеть дорог местного значения',
      description: 'Местные дороги обеспечивают доступ к населённым пунктам, сельскохозяйственным угодьям и объектам. Протяжённость превышает 14 000 км.',
      types: [
        { name: 'Дороги с твёрдым покрытием', percent: '45%' },
        { name: 'Гравийные дороги', percent: '40%' },
        { name: 'Грунтовые дороги', percent: '15%' }
      ]
    },
    rules: {
      title: 'Правила дорожного движения',
      subtitle: 'Основные правила для водителей в Латвии',
      sections: [
        { title: 'Скоростной режим', items: ['В населённых пунктах: 50 км/ч', 'За пределами населённых пунктов: 90 км/ч', 'На автомагистралях: 110-130 км/ч'] },
        { title: 'Освещение', items: ['Ближний свет обязателен круглый год', 'Противотуманные фары в условиях тумана', 'Дневные ходовые огни разрешены'] },
        { title: 'Ремни безопасности', items: ['Обязательны для всех пассажиров', 'Детские кресла до 150 см роста', 'Штраф за нарушение: до 80 EUR'] },
        { title: 'Алкоголь', items: ['Допустимый уровень: 0.5 промилле', 'Для новичков: 0.2 промилле', 'Серьёзные штрафы за превышение'] }
      ]
    },
    map: {
      title: 'Интерактивная карта',
      subtitle: 'Дорожная сеть Латвии',
      legend: {
        highways: 'Автомагистрали',
        regional: 'Региональные',
        cities: 'Города'
      }
    },
    attractions: {
      title: 'Достопримечательности',
      subtitle: 'Интересные места вдоль дорог Латвии',
      places: [
        { name: 'Сигулда', route: 'A2', desc: 'Швейцария Латвии, замки и пещеры' },
        { name: 'Рундальский дворец', route: 'A7', desc: 'Барочный шедевр XVIII века' },
        { name: 'Юрмала', route: 'A10', desc: 'Курортный город на берегу Балтики' },
        { name: 'Кулдига', route: 'P108', desc: 'Самый широкий водопад Европы' },
        { name: 'Цесис', route: 'A3', desc: 'Средневековый замок и старый город' },
        { name: 'Лиепая', route: 'A9', desc: 'Город ветров на побережье' }
      ]
    },
    safety: {
      title: 'Безопасность на дорогах',
      subtitle: 'Советы и статистика безопасности',
      tips: [
        'Соблюдайте дистанцию - минимум 2 секунды',
        'Остерегайтесь диких животных на лесных участках',
        'Проверяйте состояние шин перед дальней поездкой',
        'Используйте зимнюю резину с 1 декабря по 1 марта',
        'Не пользуйтесь телефоном за рулём'
      ],
      emergency: {
        title: 'Экстренные номера',
        police: 'Полиция: 110',
        ambulance: 'Скорая помощь: 113',
        roadside: 'Дорожная помощь: 1888'
      }
    },
    statistics: {
      title: 'Статистика и факты',
      subtitle: 'Цифры о дорожной сети Латвии',
      facts: [
        { label: 'Общая протяжённость дорог', value: '20 229 км' },
        { label: 'Государственные дороги', value: '7 782 км' },
        { label: 'Местные дороги', value: '12 447 км' },
        { label: 'Автомагистрали (A)', value: '1 647 км' },
        { label: 'Региональные дороги (P)', value: '5 321 км' },
        { label: 'Мосты', value: '958' },
        { label: 'Туннели', value: '3' }
      ]
    },
    winter: {
      title: 'Зимние дороги',
      subtitle: 'Особенности вождения зимой в Латвии',
      requirements: [
        'Зимняя резина обязательна с 1 декабря по 1 марта',
        'Минимальная глубина протектора: 4 мм',
        'Шипованная резина разрешена с 1 октября по 30 апреля',
        'Скребок и щётка должны быть в автомобиле'
      ],
      services: {
        title: 'Зимнее обслуживание дорог',
        items: ['Уборка снега на магистралях', 'Посыпка солью и песком', 'Круглосуточное дежурство служб']
      }
    },
    cycling: {
      title: 'Велодорожки',
      subtitle: 'Велоинфраструктура Латвии',
      routes: [
        { name: 'EuroVelo 10', length: '497 км', desc: 'Маршрут Балтийского моря' },
        { name: 'EuroVelo 11', length: '301 км', desc: 'Восточно-Европейский маршрут' },
        { name: 'Рижские велодорожки', length: '143 км', desc: 'Городская сеть столицы' }
      ],
      tips: [
        'Шлем рекомендуется для всех возрастов',
        'Фонари обязательны в тёмное время',
        'Отражатели на педалях и колёсах'
      ]
    },
    historic: {
      title: 'Исторические торговые пути',
      subtitle: 'Древние маршруты через Латвию',
      routes: [
        { name: 'Янтарный путь', period: 'С бронзового века', desc: 'Торговля янтарём с Балтики на юг' },
        { name: 'Путь из варяг в греки', period: 'IX-XI века', desc: 'Скандинавия - Византия через Двину' },
        { name: 'Ганзейские пути', period: 'XIII-XVII века', desc: 'Торговые маршруты Ганзейского союза' },
        { name: 'Почтовые тракты', period: 'XVIII-XIX века', desc: 'Государственные почтовые дороги' }
      ]
    },
    bridges: {
      title: 'Мосты Латвии',
      subtitle: 'Архитектурные сооружения над реками',
      notable: [
        { name: 'Вантовый мост', location: 'Рига', year: '1981', length: '625 м' },
        { name: 'Каменный мост', location: 'Рига', year: '1957', length: '503 м' },
        { name: 'Островной мост', location: 'Рига', year: '2004', length: '812 м' },
        { name: 'Южный мост', location: 'Рига', year: '2008', length: '803 м' },
        { name: 'Кирпичный мост', location: 'Кулдига', year: '1874', length: '164 м' }
      ]
    },
    about: {
      title: 'О проекте',
      subtitle: 'Информационный портал о дорогах Латвии',
      description: 'Этот некоммерческий проект создан для предоставления актуальной информации о дорожной инфраструктуре Латвии. Наша цель — помочь водителям, туристам и всем интересующимся лучше узнать дорожную сеть страны.',
      disclaimer: 'Информация носит справочный характер. Для актуальных данных обращайтесь к официальным источникам.',
      sources: ['Latvijas Valsts ceļi', 'CSDD', 'Eurostat', 'Открытые данные']
    },
    footer: {
      rights: 'Некоммерческий информационный проект',
      disclaimer: 'Информация носит справочный характер'
    }
  },
  lv: {
    nav: {
      home: 'Sākums',
      history: 'Vēsture',
      highways: 'Automaģistrāles',
      regional: 'Reģionālie',
      local: 'Vietējie',
      rules: 'CSN',
      map: 'Karte',
      attractions: 'Apskates vietas',
      safety: 'Drošība',
      statistics: 'Statistika',
      winter: 'Ziemas ceļi',
      cycling: 'Veloceliņi',
      historic: 'Tirdzniecības ceļi',
      bridges: 'Tilti',
      about: 'Par projektu'
    },
    home: {
      title: 'Latvijas Ceļi',
      subtitle: 'Atklājiet Baltijas ceļu tīklu',
      description: 'Informatīvs portāls par Latvijas ceļiem, vēsturi un infrastruktūru',
      explore: 'Izpētīt',
      totalRoads: 'Kopā ceļu',
      highways: 'Automaģistrāļu',
      bridges: 'Tiltu',
      km: 'km'
    },
    history: {
      title: 'Latvijas ceļu vēsture',
      subtitle: 'No senajiem tirdzniecības ceļiem līdz mūsdienu maģistrālēm',
      timeline: [
        { year: '1200', title: 'Hanzas tirdzniecības ceļi', desc: 'Pirmo tirdzniecības maršrutu veidošanās caur Rīgu' },
        { year: '1561', title: 'Livonijas konfederācija', desc: 'Pasta ceļu attīstība starp pilsētām' },
        { year: '1795', title: 'Krievijas impērija', desc: 'Valsts traktu būvniecība' },
        { year: '1918', title: 'Neatkarība', desc: 'Nacionālā ceļu tīkla izveide' },
        { year: '1940', title: 'Padomju periods', desc: 'Ceļu rekonstrukcija un paplašināšana' },
        { year: '1991', title: 'Neatkarības atjaunošana', desc: 'Modernizācija pēc Eiropas standartiem' },
        { year: '2004', title: 'Iestāšanās ES', desc: 'Liela mēroga investīcijas infrastruktūrā' }
      ]
    },
    highways: {
      title: 'Latvijas automaģistrāles',
      subtitle: 'Galvenās transporta artērijas',
      roads: [
        { code: 'A1', name: 'Rīga - Lietuvas robeža (Via Baltica)', length: '88 km', desc: 'Galvenā maģistrāle uz dienvidiem' },
        { code: 'A2', name: 'Rīga - Igaunijas robeža', length: '175 km', desc: 'Ceļš uz ziemeļu Baltiju' },
        { code: 'A3', name: 'Inčukalns - Valmiera - Igaunijas robeža', length: '137 km', desc: 'Austrumu maršruts uz Igauniju' },
        { code: 'A4', name: 'Rīga - Lietuvas robeža (Bauska)', length: '66 km', desc: 'Alternatīvs ceļš uz dienvidiem' },
        { code: 'A5', name: 'Rīgas šoseja - Salaspils - Babīte', length: '29 km', desc: 'Rīgas dienvidu apvedceļš' },
        { code: 'A6', name: 'Rīga - Daugavpils - Baltkrievijas robeža', length: '279 km', desc: 'Austrumu koridors' },
        { code: 'A7', name: 'Rīga - Bauska - Lietuvas robeža', length: '90 km', desc: 'Via Baltica caur Bausku' },
        { code: 'A8', name: 'Rīga - Jelgava - Lietuvas robeža', length: '68 km', desc: 'Rietumu maršruts uz Lietuvu' },
        { code: 'A9', name: 'Rīga - Liepāja', length: '207 km', desc: 'Ceļš uz Baltijas jūru' },
        { code: 'A10', name: 'Rīga - Ventspils', length: '189 km', desc: 'Uz lielāko ostu' }
      ]
    },
    regional: {
      title: 'Reģionālie ceļi',
      subtitle: 'P-ceļi, kas savieno pilsētas un rajonus',
      description: 'Reģionālie ceļi (P-ceļi) veido tīklu, kas savieno rajonu centrus un svarīgas apdzīvotas vietas. Kopējais garums pārsniedz 5 000 km.',
      features: [
        'Divjoslu satiksme',
        'Asfalta segums',
        'Ātruma ierobežojums 90 km/h',
        'Rajonu centru savienojums'
      ]
    },
    local: {
      title: 'Vietējie ceļi',
      subtitle: 'Vietējās nozīmes ceļu tīkls',
      description: 'Vietējie ceļi nodrošina piekļuvi apdzīvotām vietām, lauksaimniecības zemēm un objektiem. Garums pārsniedz 14 000 km.',
      types: [
        { name: 'Ceļi ar cieto segumu', percent: '45%' },
        { name: 'Grants ceļi', percent: '40%' },
        { name: 'Zemes ceļi', percent: '15%' }
      ]
    },
    rules: {
      title: 'Ceļu satiksmes noteikumi',
      subtitle: 'Galvenie noteikumi autovadītājiem Latvijā',
      sections: [
        { title: 'Ātruma režīms', items: ['Apdzīvotās vietās: 50 km/h', 'Ārpus apdzīvotām vietām: 90 km/h', 'Automaģistrālēs: 110-130 km/h'] },
        { title: 'Apgaismojums', items: ['Tuvās gaismas obligātas visu gadu', 'Miglas lukturi miglā', 'Dienas gaitas gaismas atļautas'] },
        { title: 'Drošības jostas', items: ['Obligātas visiem pasažieriem', 'Bērnu sēdekļi līdz 150 cm augumam', 'Sods par pārkāpumu: līdz 80 EUR'] },
        { title: 'Alkohols', items: ['Pieļaujamais līmenis: 0,5 promiles', 'Iesācējiem: 0,2 promiles', 'Nopietni sodi par pārsniegšanu'] }
      ]
    },
    map: {
      title: 'Interaktīvā karte',
      subtitle: 'Latvijas ceļu tīkls',
      legend: {
        highways: 'Automaģistrāles',
        regional: 'Reģionālie',
        cities: 'Pilsētas'
      }
    },
    attractions: {
      title: 'Apskates vietas',
      subtitle: 'Interesantas vietas gar Latvijas ceļiem',
      places: [
        { name: 'Sigulda', route: 'A2', desc: 'Latvijas Šveice, pilis un alas' },
        { name: 'Rundāles pils', route: 'A7', desc: 'XVIII gadsimta baroka šedevrs' },
        { name: 'Jūrmala', route: 'A10', desc: 'Kūrortpilsēta pie Baltijas jūras' },
        { name: 'Kuldīga', route: 'P108', desc: 'Eiropas platākais ūdenskritums' },
        { name: 'Cēsis', route: 'A3', desc: 'Viduslaiku pils un vecpilsēta' },
        { name: 'Liepāja', route: 'A9', desc: 'Vēju pilsēta piekrastē' }
      ]
    },
    safety: {
      title: 'Drošība uz ceļiem',
      subtitle: 'Padomi un drošības statistika',
      tips: [
        'Ievērojiet distanci - vismaz 2 sekundes',
        'Uzmanieties no savvaļas dzīvniekiem meža posmos',
        'Pārbaudiet riepu stāvokli pirms tāla brauciena',
        'Izmantojiet ziemas riepas no 1. decembra līdz 1. martam',
        'Nelietojiet tālruni pie stūres'
      ],
      emergency: {
        title: 'Ārkārtas numuri',
        police: 'Policija: 110',
        ambulance: 'Ātrā palīdzība: 113',
        roadside: 'Ceļa palīdzība: 1888'
      }
    },
    statistics: {
      title: 'Statistika un fakti',
      subtitle: 'Skaitļi par Latvijas ceļu tīklu',
      facts: [
        { label: 'Kopējais ceļu garums', value: '20 229 km' },
        { label: 'Valsts ceļi', value: '7 782 km' },
        { label: 'Vietējie ceļi', value: '12 447 km' },
        { label: 'Automaģistrāles (A)', value: '1 647 km' },
        { label: 'Reģionālie ceļi (P)', value: '5 321 km' },
        { label: 'Tilti', value: '958' },
        { label: 'Tuneļi', value: '3' }
      ]
    },
    winter: {
      title: 'Ziemas ceļi',
      subtitle: 'Braukšanas īpatnības ziemā Latvijā',
      requirements: [
        'Ziemas riepas obligātas no 1. decembra līdz 1. martam',
        'Minimālais protektora dziļums: 4 mm',
        'Radžu riepas atļautas no 1. oktobra līdz 30. aprīlim',
        'Skrāpim un sukām jābūt automašīnā'
      ],
      services: {
        title: 'Ceļu ziemas uzturēšana',
        items: ['Sniega tīrīšana uz maģistrālēm', 'Kaisīšana ar sāli un smiltīm', 'Diennakts dienestu dežūras']
      }
    },
    cycling: {
      title: 'Veloceliņi',
      subtitle: 'Latvijas veloinfrastruktūra',
      routes: [
        { name: 'EuroVelo 10', length: '497 km', desc: 'Baltijas jūras maršruts' },
        { name: 'EuroVelo 11', length: '301 km', desc: 'Austrumeiropas maršruts' },
        { name: 'Rīgas veloceliņi', length: '143 km', desc: 'Galvaspilsētas tīkls' }
      ],
      tips: [
        'Ķivere ieteicama visiem vecumiem',
        'Lukturi obligāti tumsā',
        'Atstarotāji uz pedāļiem un riteņiem'
      ]
    },
    historic: {
      title: 'Vēsturiskie tirdzniecības ceļi',
      subtitle: 'Senie maršruti caur Latviju',
      routes: [
        { name: 'Dzintara ceļš', period: 'No bronzas laikmeta', desc: 'Dzintara tirdzniecība no Baltijas uz dienvidiem' },
        { name: 'Ceļš no varjagiem uz grieķiem', period: 'IX-XI gs.', desc: 'Skandināvija - Bizantija caur Daugavu' },
        { name: 'Hanzas ceļi', period: 'XIII-XVII gs.', desc: 'Hanzas savienības tirdzniecības maršruti' },
        { name: 'Pasta trakti', period: 'XVIII-XIX gs.', desc: 'Valsts pasta ceļi' }
      ]
    },
    bridges: {
      title: 'Latvijas tilti',
      subtitle: 'Arhitektūras būves pār upēm',
      notable: [
        { name: 'Vanšu tilts', location: 'Rīga', year: '1981', length: '625 m' },
        { name: 'Akmens tilts', location: 'Rīga', year: '1957', length: '503 m' },
        { name: 'Salu tilts', location: 'Rīga', year: '2004', length: '812 m' },
        { name: 'Dienvidu tilts', location: 'Rīga', year: '2008', length: '803 m' },
        { name: 'Ķieģeļu tilts', location: 'Kuldīga', year: '1874', length: '164 m' }
      ]
    },
    about: {
      title: 'Par projektu',
      subtitle: 'Informatīvs portāls par Latvijas ceļiem',
      description: 'Šis nekomerciālais projekts ir izveidots, lai sniegtu aktuālu informāciju par Latvijas ceļu infrastruktūru. Mūsu mērķis ir palīdzēt autovadītājiem, tūristiem un visiem interesentiem labāk iepazīt valsts ceļu tīklu.',
      disclaimer: 'Informācija ir uzziņas raksturs. Aktuāliem datiem vērsieties oficiālajos avotos.',
      sources: ['Latvijas Valsts ceļi', 'CSDD', 'Eurostat', 'Atvērtie dati']
    },
    footer: {
      rights: 'Nekomerciāls informatīvs projekts',
      disclaimer: 'Informācija ir uzziņas rakstura'
    }
  },
  en: {
    nav: {
      home: 'Home',
      history: 'History',
      highways: 'Highways',
      regional: 'Regional',
      local: 'Local',
      rules: 'Traffic Rules',
      map: 'Map',
      attractions: 'Attractions',
      safety: 'Safety',
      statistics: 'Statistics',
      winter: 'Winter Roads',
      cycling: 'Cycling',
      historic: 'Trade Routes',
      bridges: 'Bridges',
      about: 'About'
    },
    home: {
      title: 'Roads of Latvia',
      subtitle: 'Discover the Baltic Road Network',
      description: 'Information portal about roads, history and infrastructure of Latvia',
      explore: 'Explore',
      totalRoads: 'Total Roads',
      highways: 'Highways',
      bridges: 'Bridges',
      km: 'km'
    },
    history: {
      title: 'History of Latvian Roads',
      subtitle: 'From ancient trade routes to modern highways',
      timeline: [
        { year: '1200', title: 'Hanseatic Trade Routes', desc: 'Formation of first trade routes through Riga' },
        { year: '1561', title: 'Livonian Confederation', desc: 'Development of postal roads between cities' },
        { year: '1795', title: 'Russian Empire', desc: 'Construction of state highways' },
        { year: '1918', title: 'Independence', desc: 'Creation of national road network' },
        { year: '1940', title: 'Soviet Period', desc: 'Road reconstruction and expansion' },
        { year: '1991', title: 'Restored Independence', desc: 'Modernization to European standards' },
        { year: '2004', title: 'EU Accession', desc: 'Large-scale infrastructure investments' }
      ]
    },
    highways: {
      title: 'Latvian Highways',
      subtitle: 'Main transport arteries of the country',
      roads: [
        { code: 'A1', name: 'Riga - Lithuanian Border (Via Baltica)', length: '88 km', desc: 'Main highway south' },
        { code: 'A2', name: 'Riga - Estonian Border', length: '175 km', desc: 'Route to northern Baltic' },
        { code: 'A3', name: 'Inčukalns - Valmiera - Estonian Border', length: '137 km', desc: 'Eastern route to Estonia' },
        { code: 'A4', name: 'Riga - Lithuanian Border (Bauska)', length: '66 km', desc: 'Alternative southern route' },
        { code: 'A5', name: 'Riga Road - Salaspils - Babīte', length: '29 km', desc: 'Riga southern bypass' },
        { code: 'A6', name: 'Riga - Daugavpils - Belarus Border', length: '279 km', desc: 'Eastern corridor' },
        { code: 'A7', name: 'Riga - Bauska - Lithuanian Border', length: '90 km', desc: 'Via Baltica through Bauska' },
        { code: 'A8', name: 'Riga - Jelgava - Lithuanian Border', length: '68 km', desc: 'Western route to Lithuania' },
        { code: 'A9', name: 'Riga - Liepāja', length: '207 km', desc: 'Route to the Baltic Sea' },
        { code: 'A10', name: 'Riga - Ventspils', length: '189 km', desc: 'To the largest port' }
      ]
    },
    regional: {
      title: 'Regional Roads',
      subtitle: 'P-roads connecting cities and districts',
      description: 'Regional roads (P-roads) form a network connecting district centers and important settlements. Total length exceeds 5,000 km.',
      features: [
        'Two-lane traffic',
        'Asphalt surface',
        'Speed limit 90 km/h',
        'District center connections'
      ]
    },
    local: {
      title: 'Local Roads',
      subtitle: 'Local significance road network',
      description: 'Local roads provide access to settlements, agricultural lands and facilities. Length exceeds 14,000 km.',
      types: [
        { name: 'Paved roads', percent: '45%' },
        { name: 'Gravel roads', percent: '40%' },
        { name: 'Dirt roads', percent: '15%' }
      ]
    },
    rules: {
      title: 'Traffic Rules',
      subtitle: 'Main rules for drivers in Latvia',
      sections: [
        { title: 'Speed Limits', items: ['In populated areas: 50 km/h', 'Outside populated areas: 90 km/h', 'On highways: 110-130 km/h'] },
        { title: 'Lighting', items: ['Low beam mandatory year-round', 'Fog lights in foggy conditions', 'Daytime running lights allowed'] },
        { title: 'Seat Belts', items: ['Mandatory for all passengers', 'Child seats up to 150 cm height', 'Fine for violation: up to 80 EUR'] },
        { title: 'Alcohol', items: ['Permissible level: 0.5 per mille', 'For beginners: 0.2 per mille', 'Serious fines for exceeding'] }
      ]
    },
    map: {
      title: 'Interactive Map',
      subtitle: 'Road Network of Latvia',
      legend: {
        highways: 'Highways',
        regional: 'Regional',
        cities: 'Cities'
      }
    },
    attractions: {
      title: 'Attractions',
      subtitle: 'Interesting places along Latvian roads',
      places: [
        { name: 'Sigulda', route: 'A2', desc: 'Switzerland of Latvia, castles and caves' },
        { name: 'Rundāle Palace', route: 'A7', desc: '18th century baroque masterpiece' },
        { name: 'Jūrmala', route: 'A10', desc: 'Resort city on the Baltic coast' },
        { name: 'Kuldīga', route: 'P108', desc: 'Widest waterfall in Europe' },
        { name: 'Cēsis', route: 'A3', desc: 'Medieval castle and old town' },
        { name: 'Liepāja', route: 'A9', desc: 'City of winds on the coast' }
      ]
    },
    safety: {
      title: 'Road Safety',
      subtitle: 'Tips and safety statistics',
      tips: [
        'Keep distance - at least 2 seconds',
        'Watch for wildlife on forest sections',
        'Check tire condition before long trips',
        'Use winter tires from December 1 to March 1',
        'Do not use phone while driving'
      ],
      emergency: {
        title: 'Emergency Numbers',
        police: 'Police: 110',
        ambulance: 'Ambulance: 113',
        roadside: 'Roadside Assistance: 1888'
      }
    },
    statistics: {
      title: 'Statistics and Facts',
      subtitle: 'Numbers about Latvian road network',
      facts: [
        { label: 'Total road length', value: '20,229 km' },
        { label: 'State roads', value: '7,782 km' },
        { label: 'Local roads', value: '12,447 km' },
        { label: 'Highways (A)', value: '1,647 km' },
        { label: 'Regional roads (P)', value: '5,321 km' },
        { label: 'Bridges', value: '958' },
        { label: 'Tunnels', value: '3' }
      ]
    },
    winter: {
      title: 'Winter Roads',
      subtitle: 'Winter driving specifics in Latvia',
      requirements: [
        'Winter tires mandatory from December 1 to March 1',
        'Minimum tread depth: 4 mm',
        'Studded tires allowed from October 1 to April 30',
        'Scraper and brush must be in the car'
      ],
      services: {
        title: 'Winter Road Maintenance',
        items: ['Snow clearing on highways', 'Salt and sand spreading', '24-hour service duty']
      }
    },
    cycling: {
      title: 'Cycling Routes',
      subtitle: 'Latvian cycling infrastructure',
      routes: [
        { name: 'EuroVelo 10', length: '497 km', desc: 'Baltic Sea Route' },
        { name: 'EuroVelo 11', length: '301 km', desc: 'Eastern European Route' },
        { name: 'Riga Cycling Paths', length: '143 km', desc: 'Capital city network' }
      ],
      tips: [
        'Helmet recommended for all ages',
        'Lights mandatory in darkness',
        'Reflectors on pedals and wheels'
      ]
    },
    historic: {
      title: 'Historic Trade Routes',
      subtitle: 'Ancient routes through Latvia',
      routes: [
        { name: 'Amber Road', period: 'Since Bronze Age', desc: 'Amber trade from Baltic to south' },
        { name: 'Varangian to Greek Route', period: '9th-11th century', desc: 'Scandinavia - Byzantium via Daugava' },
        { name: 'Hanseatic Routes', period: '13th-17th century', desc: 'Hanseatic League trade routes' },
        { name: 'Postal Highways', period: '18th-19th century', desc: 'State postal roads' }
      ]
    },
    bridges: {
      title: 'Bridges of Latvia',
      subtitle: 'Architectural structures over rivers',
      notable: [
        { name: 'Vanšu Bridge', location: 'Riga', year: '1981', length: '625 m' },
        { name: 'Stone Bridge', location: 'Riga', year: '1957', length: '503 m' },
        { name: 'Island Bridge', location: 'Riga', year: '2004', length: '812 m' },
        { name: 'Southern Bridge', location: 'Riga', year: '2008', length: '803 m' },
        { name: 'Brick Bridge', location: 'Kuldīga', year: '1874', length: '164 m' }
      ]
    },
    about: {
      title: 'About the Project',
      subtitle: 'Information portal about Latvian roads',
      description: 'This non-commercial project was created to provide current information about Latvian road infrastructure. Our goal is to help drivers, tourists and all interested parties better understand the country\'s road network.',
      disclaimer: 'Information is for reference only. For current data, refer to official sources.',
      sources: ['Latvijas Valsts ceļi', 'CSDD', 'Eurostat', 'Open Data']
    },
    footer: {
      rights: 'Non-commercial information project',
      disclaimer: 'Information is for reference purposes'
    }
  }
};
