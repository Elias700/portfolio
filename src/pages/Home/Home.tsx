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
                    <strong className="text-5xl text-[#00B58C]">Olá!</strong>
                    Me chamo
                </motion.p>
                <motion.h2 className="text-7xl text-[#00B58C]" variants={textVariants}>
                    Elias Ribeiro
                </motion.h2>
                <motion.p className="text-4xl text-[#00B58C]" variants={textVariants}>
                    Desenvolvedor <strong className="text-[#CBCCD1]">Front-end</strong>
                </motion.p>

                <div className="flex gap-5 py-5">
                    <FaGithubSquare className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    <MdEmail className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                    <FaLinkedin className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer" />
                </div>
                <button className="bg-[#00B58C] py-4 px-15 text-3xl text-[#CBCCD1] rounded-[5px] cursor-pointer hover:bg-[#28816c] transition duration-[700ms] hover:text-[#f1f1f5]">Curriculo</button>
            </motion.div>
            
            {/* Bloco da imagem e SVG */}
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="absolute inset-0 z-0 h-100"
                >
                    <path
                        fill="#24A148"
                        d="M60.9,-45.7C74.3,-31.8,77.4,-6.7,69.7,11.5C62,29.7,43.6,41,25.9,46.9C8.2,52.7,-8.8,53.2,-18.1,45.6C-27.4,38.1,-29,22.5,-37.7,3.2C-46.4,-16.1,-62.2,-39.1,-57.1,-51.1C-52,-63.2,-26,-64.2,-1.1,-63.3C23.8,-62.4,47.5,-59.6,60.9,-45.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
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