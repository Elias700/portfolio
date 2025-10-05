import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from "../../assets/eliass.png"
import imageBackground from '../../assets/blurry-gradient-haikei.png';
import { motion } from "framer-motion";
import { useTranslation } from '../../i18n/LanguageContext.tsx';

const Home = () => {
    const { t } = useTranslation();
    // Definindo as variantes para as animações de texto
    const textVariants = {
        hidden: { opacity: 0, x: -50 }, // Estado inicial, invisível e deslocado para a esquerda
        visible: { opacity: 1, x: 0 }, // Estado final, visível na posição original
    };

    // Variantes para animar cada linha de texto em sequência
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Adiciona um atraso de 0.3s entre cada animação de filho
            },
        },
    };

    return (
        <section
            id="home"
            className="relative bg-cover bg-center min-h-[88vh] px-6 md:px-10 py-8 pb-12"
            style={{ backgroundImage: `url(${imageBackground})` }}
        >
            <div className="mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-24">
            {/* Bloco de texto */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-xl w-full"
            >
                <motion.p className="text-2xl md:text-3xl lg:text-4xl text-[#CBCCD1]" variants={textVariants}>
                    <strong className="text-3xl md:text-4xl lg:text-5xl text-[#CBCCD1]">{t('home.hello')}</strong>
                    {" "}{t('home.myNameIs')}
                </motion.p>
                <motion.h2 className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-bl from-[#6EE7B7] via-[#3FAE8B] to-[#0F766E] bg-clip-text text-transparent" variants={textVariants}>
                    Elias Ribeiro
                </motion.h2>
                <motion.p className="text-2xl md:text-3xl lg:text-4xl text-[#CBCCD1]" variants={textVariants}>
                    {t('home.role')}
                </motion.p>

                <div className="flex gap-4 md:gap-5 py-5">
                    <a href="https://github.com/Elias700?tab=overview&from=2025-09-01&to=2025-09-24" target="blanck">
                        <FaGithubSquare className="text-3xl md:text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                    
                    <a href="">
                        <MdEmail className="text-3xl md:text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/elias-ribeiro700/" target="blanck">
                        <FaLinkedin className="text-3xl md:text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                </div>
                
                <button
                    className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-5 md:px-6 py-2 text-sm md:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-[#00B58C] cursor-pointer w-52 md:w-60"
                >
                      <a href="file:///C:/Users/elias/Downloads/Curriculo_EliasRibeiro%20(1).pdf" target="blanck">
                          <span className="text-base md:text-lg">{t('home.resume')}</span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                            <div className="relative h-full w-10 bg-[#00B58C]"></div>
                        </div>
                      </a>
                </button>

            </motion.div>

            <div className="relative flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <img
                    src={image}
                    alt="Elias Ribeiro"
                    className="relative z-10 w-56 sm:w-72 md:w-[22rem] lg:w-[28rem] h-auto object-contain"
                />
            </div>
            </div>
        </section>
    );
};

export default Home;