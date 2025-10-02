import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from "../../assets/eliass.png"
import imageBackground from '../../assets/blurry-gradient-haikei.png';
import { motion } from "framer-motion";

const Home = () => {
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
        <div
            className="flex justify-center gap-40 items-center bg-cover bg-center h-[88vh]"
            style={{ backgroundImage: `url(${imageBackground})` }}
        >
            {/* Bloco de texto */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.p className="text-4xl text-[#CBCCD1]" variants={textVariants}>
                    <strong className="text-5xl text-[#CBCCD1]">Olá!</strong>
                    Me chamo
                </motion.p>
                <motion.h2 className="text-7xl bg-gradient-to-bl from-[#6EE7B7] via-[#3FAE8B] to-[#0F766E] bg-clip-text text-transparent" variants={textVariants}>
                    Elias Ribeiro
                </motion.h2>
                <motion.p className="text-4xl text-[#CBCCD1]" variants={textVariants}>
                    Desenvolvedor <strong className="text-[#CBCCD1]">Front-end</strong>
                </motion.p>

                <div className="flex gap-5 py-5">
                    <a href="https://github.com/Elias700?tab=overview&from=2025-09-01&to=2025-09-24" target="blanck">
                        <FaGithubSquare className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                    
                    <a href="">
                        <MdEmail className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/elias-ribeiro700/" target="blanck">
                        <FaLinkedin className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    </a>
                </div>
                
                <button
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#00B58C] rounded-md group cursor-pointer"
                >
                    <span
                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#085140] rounded group-hover:-mr-4 group-hover:-mt-4"
                    >
                        <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                        ></span>
                    </span>
                    <span
                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#085140] rounded group-hover:-ml-4 group-hover:-mb-4"
                    >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                    </span>
                    <span
                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#085140] rounded-md group-hover:translate-x-0"
                    ></span>
                    <span
                    className="relative w-full text-left text-white transition-colors p-2 duration-200 ease-in-out group-hover:text-white"
                    >Curriculo
                    </span>
                
                </button>

            </motion.div>
            
            <div className="relative">
                
                <img
                    src={image}
                    alt="Elias Ribeiro"
                    className="relative z-10 h-200"
                />
            </div>
        </div>
    );
};

export default Home;