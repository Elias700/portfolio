import { DiHtml5, DiCss3, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTypescript, SiFigma, SiGithub, SiReact, SiTailwindcss } from 'react-icons/si';
import { motion, type Variants } from 'framer-motion';

// Variante para o contêiner principal
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Atraso de 0.1s entre cada ícone
    },
  },
};

// Variante que define o movimento de "onda" para cada ícone
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Estado inicial, antes da animação
  visible: {
    y: [0, -20, 0], // Move para cima 20px e volta
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    } as const, // AQUI está a correção para o TypeScript
  },
};

const Skills = () => {
  return (
    <div className='bg-[#2E3138] h-[80vh] '>
      <h1 className='mb-6 text-center text-4xl text-[#00B58C] p-12'>Skills</h1>
      <motion.div
        className='flex justify-center gap-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={itemVariants}>
          <DiHtml5 size={70} color="#E34F26" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DiCss3 size={70} color="#1572B6" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DiJsBadge size={60} color="#F7DF1E" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SiTypescript size={60} color="#3178C6" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SiReact size={60} color="#61DAFB" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SiTailwindcss size={60} color="#06B6D4" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SiGithub size={60} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DiGit size={60} color="#F05032" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SiFigma size={60} color="#F24E1E" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;