import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Cookie, Database, Mail } from 'lucide-react';

export const PrivacyPage = () => {
  const { language } = useLanguage();

  const content = {
    lv: {
      title: 'Privātuma politika',
      subtitle: 'Jūsu datu aizsardzība',
      lastUpdate: 'Pēdējais atjauninājums: 2025. gada janvāris',
      sections: [
        {
          icon: Database,
          title: 'Kādu informāciju mēs vācam',
          text: 'Šī vietne ir informatīvs resurss un nevāc personisko informāciju no apmeklētājiem. Mēs neglabājam e-pasta adreses, vārdus vai citu personisko informāciju. Vietne neprasa reģistrāciju vai pieteikšanos.'
        },
        {
          icon: Cookie,
          title: 'Sīkdatnes (Cookies)',
          text: 'Mēs izmantojam tikai tehniskās sīkdatnes, kas nepieciešamas vietnes pareizai darbībai (piemēram, valodas izvēles saglabāšanai). Mēs neizmantojam izsekošanas vai reklāmas sīkdatnes. Jūs varat atspējot sīkdatnes savā pārlūkprogrammā.'
        },
        {
          icon: Shield,
          title: 'Datu drošība',
          text: 'Tā kā mēs nevācam personiskos datus, nav datu, ko aizsargāt vai nodot trešajām pusēm. Visa vietnē publicētā informācija ir publiski pieejama un paredzēta tikai informatīviem nolūkiem.'
        },
        {
          icon: Mail,
          title: 'Kontaktinformācija',
          text: 'Ja jums ir jautājumi par šo privātuma politiku, lūdzu, sazinieties ar mums, izmantojot kontaktu lapu.'
        }
      ],
      disclaimer: 'Šī vietne ir neatkarīgs informatīvs resurss un nav saistīta ar valdības iestādēm vai komerciāliem pakalpojumu sniedzējiem. Visa informācija tiek sniegta "kā ir" bez garantijām.'
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your data protection',
      lastUpdate: 'Last updated: January 2025',
      sections: [
        {
          icon: Database,
          title: 'What information we collect',
          text: 'This website is an informational resource and does not collect personal information from visitors. We do not store email addresses, names, or other personal information. The website does not require registration or login.'
        },
        {
          icon: Cookie,
          title: 'Cookies',
          text: 'We only use technical cookies necessary for the proper functioning of the website (for example, to save language preferences). We do not use tracking or advertising cookies. You can disable cookies in your browser.'
        },
        {
          icon: Shield,
          title: 'Data Security',
          text: 'Since we do not collect personal data, there is no data to protect or share with third parties. All information published on the website is publicly available and intended for informational purposes only.'
        },
        {
          icon: Mail,
          title: 'Contact Information',
          text: 'If you have questions about this privacy policy, please contact us through the contacts page.'
        }
      ],
      disclaimer: 'This website is an independent informational resource and is not affiliated with government agencies or commercial service providers. All information is provided "as is" without warranties.'
    },
    ru: {
      title: 'Политика конфиденциальности',
      subtitle: 'Защита ваших данных',
      lastUpdate: 'Последнее обновление: январь 2025',
      sections: [
        {
          icon: Database,
          title: 'Какую информацию мы собираем',
          text: 'Этот сайт является информационным ресурсом и не собирает личную информацию посетителей. Мы не храним адреса электронной почты, имена или другую личную информацию. Сайт не требует регистрации или входа в систему.'
        },
        {
          icon: Cookie,
          title: 'Файлы cookie',
          text: 'Мы используем только технические cookie-файлы, необходимые для корректной работы сайта (например, для сохранения выбора языка). Мы не используем отслеживающие или рекламные cookie. Вы можете отключить cookie в своём браузере.'
        },
        {
          icon: Shield,
          title: 'Безопасность данных',
          text: 'Поскольку мы не собираем личные данные, нет данных для защиты или передачи третьим лицам. Вся информация на сайте является общедоступной и предназначена только для информационных целей.'
        },
        {
          icon: Mail,
          title: 'Контактная информация',
          text: 'Если у вас есть вопросы о данной политике конфиденциальности, пожалуйста, свяжитесь с нами через страницу контактов.'
        }
      ],
      disclaimer: 'Данный сайт является независимым информационным ресурсом и не связан с государственными органами или коммерческими поставщиками услуг. Вся информация предоставляется "как есть" без каких-либо гарантий.'
    }
  };

  const c = content[language] || content.lv;

  return (
    <div data-testid="privacy-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D4F1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EBA937] rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#2D4F1E]" />
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

      {/* Last Update */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">{c.lastUpdate}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {c.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D4F1E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#2D4F1E]" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-[#2D4F1E] mb-3">{section.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-[#EBA937]/10 border border-[#EBA937]/30 p-6 rounded-2xl">
            <p className="text-gray-700 text-sm">{c.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
