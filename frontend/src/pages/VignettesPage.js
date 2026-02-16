import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CreditCard, AlertTriangle, MapPin, Fuel, Globe, Smartphone, Shield, AlertCircle, CheckCircle, Route } from 'lucide-react';

export const VignettesPage = () => {
  const { t, language } = useLanguage();

  const content = {
    lv: {
      titles: {
        prices: 'Tarifi',
        category: 'Kategorija',
        day: '1 diena',
        week: '1 nedēļa',
        month: '1 mēnesis',
        year: '1 gads',
        where: 'Kur iegādāties',
        why: 'Kāpēc nepieciešama vinjete?',
        fines: 'Sodi par pārkāpumiem',
        roads: 'Kur nepieciešama vinjete?'
      },
      whyText: 'Vinjete ir obligāta maksa par Latvijas valsts autoceļu izmantošanu kravas automobiļiem ar pilnu masu virs 3,5 tonnām. Iegūtie līdzekļi tiek izmantoti ceļu uzturēšanai un remontam.',
      finesList: [
        { fine: '400-700 EUR', desc: 'Par braukšanu bez derīgas vinjetes' },
        { fine: '150-350 EUR', desc: 'Par nepareizi noformētu vinjeti' },
        { fine: '700-1400 EUR', desc: 'Par atkārtotu pārkāpumu 12 mēnešu laikā' }
      ],
      roadsInfo: 'Vinjete obligāta uz visiem A klases autoceļiem (automaģistrālēm) Latvijā. Tas ietver galvenos tranzīta koridorus: Via Baltica (A1, A7), Rīga-Maskava (A6), Rīga-Liepāja (A9), Rīga-Ventspils (A10).',
      locations: [
        { icon: Globe, text: 'Tiešsaistē portālā latviasvinjete.lv' },
        { icon: Fuel, text: 'Circle K, Neste, Viada degvielas uzpildes stacijās' },
        { icon: MapPin, text: 'Robežpunktos' },
        { icon: Smartphone, text: 'Mobilajā lietotnē' }
      ],
      note: 'Pārliecinieties, ka vinjete ir aktīva pirms iebraukšanas A klases ceļā. Vinjeti var iegādāties līdz 30 dienām pirms tās derīguma sākuma.'
    },
    en: {
      titles: {
        prices: 'Prices',
        category: 'Category',
        day: '1 day',
        week: '1 week',
        month: '1 month',
        year: '1 year',
        where: 'Where to purchase',
        why: 'Why is a vignette required?',
        fines: 'Fines for violations',
        roads: 'Where is a vignette required?'
      },
      whyText: 'A vignette is a mandatory fee for using Latvian state roads for trucks with a total mass over 3.5 tons. The collected funds are used for road maintenance and repairs.',
      finesList: [
        { fine: '400-700 EUR', desc: 'For driving without a valid vignette' },
        { fine: '150-350 EUR', desc: 'For incorrectly issued vignette' },
        { fine: '700-1400 EUR', desc: 'For repeated violation within 12 months' }
      ],
      roadsInfo: 'Vignette is mandatory on all A-class roads (highways) in Latvia. This includes main transit corridors: Via Baltica (A1, A7), Riga-Moscow (A6), Riga-Liepaja (A9), Riga-Ventspils (A10).',
      locations: [
        { icon: Globe, text: 'Online at latviasvinjete.lv' },
        { icon: Fuel, text: 'At Circle K, Neste, Viada gas stations' },
        { icon: MapPin, text: 'At border crossings' },
        { icon: Smartphone, text: 'Via mobile app' }
      ],
      note: 'Make sure the vignette is active before entering an A-class road. Vignettes can be purchased up to 30 days before validity starts.'
    },
    ru: {
      titles: {
        prices: 'Тарифы',
        category: 'Категория',
        day: '1 день',
        week: '1 неделя',
        month: '1 месяц',
        year: '1 год',
        where: 'Где приобрести',
        why: 'Зачем нужна виньетка?',
        fines: 'Штрафы за нарушения',
        roads: 'Где требуется виньетка?'
      },
      whyText: 'Виньетка — обязательный сбор за использование государственных дорог Латвии для грузовых автомобилей с полной массой более 3,5 тонн. Собранные средства направляются на содержание и ремонт дорог.',
      finesList: [
        { fine: '400-700 EUR', desc: 'За движение без действующей виньетки' },
        { fine: '150-350 EUR', desc: 'За неправильно оформленную виньетку' },
        { fine: '700-1400 EUR', desc: 'За повторное нарушение в течение 12 месяцев' }
      ],
      roadsInfo: 'Виньетка обязательна на всех дорогах класса A (автомагистралях) Латвии. Это включает основные транзитные коридоры: Via Baltica (A1, A7), Рига-Москва (A6), Рига-Лиепая (A9), Рига-Вентспилс (A10).',
      locations: [
        { icon: Globe, text: 'Онлайн на сайте latviasvinjete.lv' },
        { icon: Fuel, text: 'На заправках Circle K, Neste, Viada' },
        { icon: MapPin, text: 'На пограничных пунктах' },
        { icon: Smartphone, text: 'Через мобильное приложение' }
      ],
      note: 'Убедитесь, что виньетка активна перед въездом на дорогу класса A. Виньетку можно приобрести за 30 дней до начала срока действия.'
    }
  };

  const c = content[language] || content.lv;

  return (
    <div data-testid="vignettes-page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#9D2235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              >
                {t.vignettes.title}
              </motion.h1>
              <p className="text-white/80 text-lg">{t.vignettes.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EBA937]/10 border-l-4 border-[#EBA937] p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#EBA937] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#2D4F1E] font-semibold mb-2">{t.vignettes.important}</p>
                <p className="text-gray-700">{t.vignettes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vignette */}
      <section className="py-12 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#2D4F1E] mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-[#2D4F1E]" />
            {c.titles.why}
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed">{c.whyText}</p>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#2D4F1E] mb-8 text-center">
            {c.titles.prices}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#2D4F1E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{c.titles.category}</th>
                  <th className="px-6 py-4 text-center font-semibold">{c.titles.day}</th>
                  <th className="px-6 py-4 text-center font-semibold">{c.titles.week}</th>
                  <th className="px-6 py-4 text-center font-semibold">{c.titles.month}</th>
                  <th className="px-6 py-4 text-center font-semibold">{c.titles.year}</th>
                </tr>
              </thead>
              <tbody>
                {t.vignettes.priceList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-[#2D4F1E]">{item.category}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.day}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.week}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#9D2235]">{item.month}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#EBA937]">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fines */}
      <section className="py-16 bg-[#9D2235]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#9D2235] mb-8 flex items-center gap-3">
            <AlertCircle className="w-7 h-7" />
            {c.titles.fines}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.finesList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#9D2235]"
              >
                <div className="text-3xl font-display font-bold text-[#9D2235] mb-2">{item.fine}</div>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roads Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#2D4F1E] mb-6 flex items-center gap-3">
            <Route className="w-7 h-7 text-[#2D4F1E]" />
            {c.titles.roads}
          </h2>
          <div className="bg-[#2D4F1E]/5 p-6 rounded-2xl border border-[#2D4F1E]/20">
            <p className="text-gray-700 text-lg leading-relaxed">{c.roadsInfo}</p>
          </div>
        </div>
      </section>

      {/* Where to Purchase */}
      <section className="py-16 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#2D4F1E] mb-8 text-center">
            {c.titles.where}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#2D4F1E] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#EBA937]" />
                  </div>
                  <p className="text-gray-700">{location.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-[#2D4F1E] flex-shrink-0 mt-1" />
            <p className="text-gray-700">{c.note}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
