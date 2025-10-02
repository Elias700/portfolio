import { DiHtml5, DiCss3, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTypescript, SiFigma, SiGithub, SiReact, SiTailwindcss } from 'react-icons/si';

// Tipo ajustado
type Icon = {
  title: string,
  description: string,
  icon: any // Mudei de [] para any para aceitar o componente
}

const icons: Icon[] = [
  {
    title: 'React', 
    description: 'Construção de interfaces de usuário interativas e reativas com componentes reutilizáveis.', 
    icon: SiReact // Apenas o nome da importação, sem parênteses ou aspas
  },
  {
    title: 'TypeScript', 
    description: 'Desenvolvimento de código robusto com tipagem estática avançada para maior segurança e manutenibilidade.', 
    icon: SiTypescript
  },
  {
    title: 'JavaScript', 
    description: 'Linguagem de programação versátil para desenvolvimento web full-stack.', 
    icon: DiJsBadge
  },
  {
    title: 'Tailwind CSS', 
    description: 'Framework CSS utilitário para criação de designs responsivos de forma eficiente.', 
    icon: SiTailwindcss
  },
  {
    title: 'HTML 5', 
    description: 'Estruturação semântica e acessível de conteúdo para a web moderna.', 
    icon: DiHtml5
  },
  {
    title: 'CSS 3', 
    description: 'Estilização avançada com animações, flexbox, grid e design responsivo.', 
    icon: DiCss3
  },
  {
    title: 'GitHub', 
    description: 'Plataforma essencial para versionamento de código e trabalho em equipe.', 
    icon: SiGithub
  },
  {
    title: 'Git', 
    description: 'Plataforma essencial para versionamento de código e trabalho em equipe.', 
    icon: DiGit
  },
  {
    title: 'Figma', 
    description: 'Ferramenta de design e prototipagem para criar a interface do usuário.', 
    icon: SiFigma
  },
];

const Skills = () => {
  return (
     <main className='h-[130vh] bg-[#2E3138] '>
        <div className='p-5'>
          <h2 className='text-center text-3xl text-[#00B58C]'>Habilidades</h2>
          <h1 className='text-center text-7xl text-emerald-50'>Principais Habilidades</h1>
        </div>
          <div className='h-[50vh] flex flex-wrap justify-center gap-20 p-15'>
          {icons.map((item) => (
          <main key={item.title} className='bg-[#1d1f24] rounded-2xl transition hover:scale-[1.02]'>
            <section className='flex flex-col items-center p-10 w-100 text-center cursor-pointer '>
                <item.icon size={44} color="#00B58C"/> 
                <h3 className="text-xl font-semibold text-[#eef4f2] p-5">{item.title}</h3>
                <p className='text-[#aaafae] text-sm'>{item.description}</p>
            </section>
          </main>
          ))}
        </div> 
     </main>
  );
};

export default Skills;







 