import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const TermsPage = () => {
  const { language } = useLanguage();

  const content = {
    lv: {
      title: 'Lietošanas noteikumi',
      subtitle: 'Vietnes izmantošanas nosacījumi',
      lastUpdate: 'Pēdējais atjauninājums: 2025. gada janvāris',
      intro: 'Izmantojot šo vietni, jūs piekrītat šiem lietošanas noteikumiem. Lūdzu, izlasiet tos uzmanīgi.',
      sections: [
        {
          title: 'Par vietni',
          text: 'Šī vietne ir bezmaksas informatīvs resurss par kravu pārvadājumiem Latvijā. Mēs sniedzam informāciju par vinjetēm, maršrutiem, stāvvietām, noteikumiem un citiem jautājumiem, kas saistīti ar kravas automobiļu vadītājiem.',
          type: 'info'
        },
        {
          title: 'Informācijas precizitāte',
          text: 'Mēs cenšamies nodrošināt precīzu un aktuālu informāciju, taču nevaram garantēt tās pilnīgu pareizību. Tarifi, noteikumi un cita informācija var mainīties. Vienmēr pārbaudiet informāciju oficiālajos avotos pirms lēmumu pieņemšanas.',
          type: 'warning'
        },
        {
          title: 'Atbildības ierobežojums',
          text: 'Vietne un tās saturs tiek nodrošināts "kā ir" bez jebkādām garantijām. Mēs neuzņemamies atbildību par jebkādiem zaudējumiem, kas radušies, izmantojot šajā vietnē sniegto informāciju.',
          type: 'warning'
        },
        {
          title: 'Aizliegtas darbības',
          text: 'Aizliegts: vietnes satura kopēšana komerciāliem nolūkiem bez atļaujas; mēģinājumi traucēt vietnes darbību; maldinošas informācijas izplatīšana, atsaucoties uz šo vietni.',
          type: 'error'
        },
        {
          title: 'Intelektuālais īpašums',
          text: 'Vietnes dizains un oriģinālais saturs ir aizsargāts ar autortiesībām. Informācija var tikt izmantota personīgiem, nekomerciāliem nolūkiem ar atsauci uz avotu.',
          type: 'info'
        },
        {
          title: 'Saites uz citām vietnēm',
          text: 'Vietne var saturēt saites uz trešo pušu resursiem. Mēs neesam atbildīgi par šo vietņu saturu vai privātuma politikām.',
          type: 'info'
        },
        {
          title: 'Noteikumu izmaiņas',
          text: 'Mēs paturam tiesības jebkurā laikā mainīt šos noteikumus. Turpinot izmantot vietni pēc izmaiņām, jūs piekrītat jaunajiem noteikumiem.',
          type: 'info'
        }
      ],
      acceptance: 'Izmantojot šo vietni, jūs apliecināt, ka esat izlasījis un piekrītat šiem lietošanas noteikumiem.'
    },
    en: {
      title: 'Terms of Use',
      subtitle: 'Website usage conditions',
      lastUpdate: 'Last updated: January 2025',
      intro: 'By using this website, you agree to these terms of use. Please read them carefully.',
      sections: [
        {
          title: 'About the website',
          text: 'This website is a free informational resource about trucking in Latvia. We provide information about vignettes, routes, parking, regulations, and other topics relevant to truck drivers.',
          type: 'info'
        },
        {
          title: 'Information accuracy',
          text: 'We strive to provide accurate and up-to-date information, but we cannot guarantee its complete correctness. Prices, regulations, and other information may change. Always verify information from official sources before making decisions.',
          type: 'warning'
        },
        {
          title: 'Limitation of liability',
          text: 'The website and its content are provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information provided on this website.',
          type: 'warning'
        },
        {
          title: 'Prohibited activities',
          text: 'Prohibited: copying website content for commercial purposes without permission; attempting to disrupt website operation; spreading misleading information referencing this website.',
          type: 'error'
        },
        {
          title: 'Intellectual property',
          text: 'Website design and original content are protected by copyright. Information may be used for personal, non-commercial purposes with source attribution.',
          type: 'info'
        },
        {
          title: 'Links to other websites',
          text: 'The website may contain links to third-party resources. We are not responsible for the content or privacy policies of these websites.',
          type: 'info'
        },
        {
          title: 'Changes to terms',
          text: 'We reserve the right to modify these terms at any time. By continuing to use the website after changes, you agree to the new terms.',
          type: 'info'
        }
      ],
      acceptance: 'By using this website, you confirm that you have read and agree to these terms of use.'
    },
    ru: {
      title: 'Условия использования',
      subtitle: 'Условия пользования сайтом',
      lastUpdate: 'Последнее обновление: январь 2025',
      intro: 'Используя данный сайт, вы соглашаетесь с настоящими условиями использования. Пожалуйста, внимательно прочитайте их.',
      sections: [
        {
          title: 'О сайте',
          text: 'Данный сайт является бесплатным информационным ресурсом о грузоперевозках в Латвии. Мы предоставляем информацию о виньетках, маршрутах, стоянках, правилах и других вопросах, касающихся водителей грузовых автомобилей.',
          type: 'info'
        },
        {
          title: 'Точность информации',
          text: 'Мы стремимся предоставлять точную и актуальную информацию, однако не можем гарантировать её полную достоверность. Тарифы, правила и другая информация могут меняться. Всегда проверяйте информацию в официальных источниках перед принятием решений.',
          type: 'warning'
        },
        {
          title: 'Ограничение ответственности',
          text: 'Сайт и его содержимое предоставляются "как есть" без каких-либо гарантий. Мы не несём ответственности за любые убытки, возникшие в результате использования информации, представленной на данном сайте.',
          type: 'warning'
        },
        {
          title: 'Запрещённые действия',
          text: 'Запрещено: копирование содержимого сайта в коммерческих целях без разрешения; попытки нарушить работу сайта; распространение вводящей в заблуждение информации со ссылкой на данный сайт.',
          type: 'error'
        },
        {
          title: 'Интеллектуальная собственность',
          text: 'Дизайн сайта и оригинальный контент защищены авторским правом. Информация может использоваться в личных, некоммерческих целях с указанием источника.',
          type: 'info'
        },
        {
          title: 'Ссылки на другие сайты',
          text: 'Сайт может содержать ссылки на ресурсы третьих сторон. Мы не несём ответственности за содержание или политику конфиденциальности этих сайтов.',
          type: 'info'
        },
        {
          title: 'Изменение условий',
          text: 'Мы оставляем за собой право изменять данные условия в любое время. Продолжая использовать сайт после внесения изменений, вы соглашаетесь с новыми условиями.',
          type: 'info'
        }
      ],
      acceptance: 'Используя данный сайт, вы подтверждаете, что прочитали и согласны с настоящими условиями использования.'
    }
  };

  const c = content[language] || content.lv;

  const getIcon = (type) => {
    switch(type) {
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      default: return CheckCircle;
    }
  };

  const getColor = (type) => {
    switch(type) {
      case 'warning': return 'text-[#EBA937] bg-[#EBA937]/10';
      case 'error': return 'text-[#9D2235] bg-[#9D2235]/10';
      default: return 'text-[#2D4F1E] bg-[#2D4F1E]/10';
    }
  };

  return (
    <div data-testid="terms-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#4A8C94] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {c.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{c.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Update & Intro */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-4">{c.lastUpdate}</p>
          <p className="text-gray-700">{c.intro}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {c.sections.map((section, index) => {
              const Icon = getIcon(section.type);
              const colorClass = getColor(section.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-bold text-[#2D4F1E] mb-2">{section.title}</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Acceptance */}
          <div className="mt-12 bg-[#2D4F1E] text-white p-6 rounded-2xl text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-3 text-[#EBA937]" />
            <p>{c.acceptance}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
