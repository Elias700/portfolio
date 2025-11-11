import { motion } from "framer-motion";
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import imagee from '../../assets/eliasss.png'

const Home = () => {
  const { t } = useTranslation();

  // Variantes para o texto
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="bg-[var(--body-bg)] min-h-[88vh] px-6 md:px-10 py-8 pb-12"
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-24">

        {/* Texto */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-xl w-full"
        >
          <motion.p className="text-2xl md:text-3xl lg:text-4xl text-[var(--hero-text)]" variants={textVariants}>
            <strong className="text-3xl md:text-4xl lg:text-5xl text-[var(--hero-text)]">{t('home.hello')}</strong>
            {t('home.myNameIs')}
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-bl from-[var(--primary-300)]
            via-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent"
            variants={textVariants}
          >
            Elias Ribeiro
          </motion.h2>

          <motion.p className="text-2xl md:text-3xl lg:text-4xl text-[var(--hero-text)]" variants={textVariants}>
            {t('home.role')}
          </motion.p>

          <div className="flex gap-4 md:gap-5 py-5">
            <a
              href="https://www.linkedin.com/in/elias-ribeiro700/"
              target="blanck"
            >
              <IoLogoLinkedin size={50} className="text-3xl md:text-4xl text-[var(--primary-500)] 
              hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>

            <a href="https://github.com/Elias700" target="blanck">
              <IoLogoGithub size={50} className="text-3xl md:text-4xl text-[var(--primary-500)] 
              hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>

            <a href="mailto:elias_ribeiro07@outlook.com.br">
              <IoMailOutline 
                size={55} 
                className="text-3xl md:text-4xl text-[var(--primary-500)] 
                hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>
          </div>

          <button
            className="group/button relative inline-flex items-center justify-center overflow-hidden
            rounded-md bg-[color-mix(in_oklab,var(--card-bg)_90%,transparent)] backdrop-blur-lg px-5 
            md:px-6 py-2 text-sm md:text-base font-semibold text-[var(--text-primary)] transition-all 
            duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[var(--primary-700)]/40 
            border border-[var(--primary-500)] cursor-pointer w-52 md:w-60"
          >
            <a href="file:///C:/Users/elias/Downloads/Curriculo_EliasRibeiro%20(1).pdf" target="blanck">
              <span className="text-base md:text-lg">{t('home.resume')}</span>
              <div className="absolute inset-0 flex h-full w-full justify-center 
              [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000
              group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
              >
                <div className="relative h-full w-10 bg-[var(--primary-500)]"></div>
              </div>
            </a>
          </button>
        </motion.div>

        {/* Imagem com efeito de subir e descer */}
        <motion.div
          className="relative flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -12], // movimento de sobe e desce
          }}
          transition={{
            opacity: { duration: 0.9, ease: "easeOut" },
            y: {
              duration: 2.2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0,
            },
          }}
        >
          <img
            src={imagee}
            alt="Elias Ribeiro"
            className="relative z-10 w-56 sm:w-72 md:w-[22rem] lg:w-[28rem] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
