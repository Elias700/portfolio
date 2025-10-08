import image from '../../assets/elias.jpg'
import { motion } from "framer-motion";
import { useTranslation } from '../../i18n/LanguageContext.tsx';

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-[90vh] pb-8 md:pb-12 mb-6 md:mb-10 overflow-hidden bg-[--body-bg]"
    >
      <div className="p-10">
        <h2 className="text-center text-3xl text-[#00B58C]">{t('about.title')}</h2>
        <h1 className="text-center text-7xl text-emerald-50">{t('about.subtitle')}</h1>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-50 p-10">
        <div className="max-w-lg rounded-2xl flex flex-col justify-center items-center gap-10">
          <p className="bg-transparent text-[#00B58C] text-lg text-center">
            {t('about.paragraph')}
          </p>

          <button 
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-[#00B58C] border border-[#0f745c] cursor-pointer w-60">
            <span className="text-lg">{t('about.button')}</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-[#00B58C]"></div>
            </div>
          </button>
        </div>

        {/* Imagem: apenas fade-in + hover */}
        <motion.img
          src={image}
          alt="Elias Ribeiro"
          className="h-120 rounded-lg hover:cursor-pointer"
          initial={{ opacity: 0, y: 20 }} // começa levemente abaixo e invisível
          animate={{ opacity: 1, y: 0 }}  // aparece e sobe levemente (uma única vez)
          transition={{
            opacity: { duration: 0.9, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" }
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,181,140,0.25)"
          }}
          style={{ willChange: "transform, opacity" }}
        />
      </section>
    </div>
  );
};

export default About;
