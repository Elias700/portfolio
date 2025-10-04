import { DiHtml5, DiCss3, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTypescript, SiFigma, SiGithub, SiReact, SiTailwindcss } from 'react-icons/si';
import LearningSkills from './LearningSkills';

// Tipo ajustado
type Skills = {
  title: string,
  description: string,
  icon: any // Mudei de [] para any para aceitar o componente
}

const icons: Skills[] = [
  {
    title: 'React', 
    description: 'Construção de interfaces de usuário interativas e reativas com componentes reutilizáveis. Utiliza o Virtual DOM e arquitetura baseada em componentes.', 
    icon: SiReact // Apenas o nome da importação, sem parênteses ou aspas
  },
  {
    title: 'TypeScript', 
    description: 'Superset do JavaScript que adiciona tipagem estática e recursos avançados, tornando o código mais seguro, escalável e fácil de manter.', 
    icon: SiTypescript
  },
  {
    title: 'JavaScript', 
    description: 'Linguagem de programação que dá interatividade e dinamismo às páginas web. É a base do desenvolvimento front-end moderno e também usada no back-end com Node.js.', 
    icon: DiJsBadge
  },
  {
    title: 'Tailwind CSS', 
    description: 'O Tailwind CSS é um framework utilitário-first que fornece classes prontas para estilização, permitindo montar layouts direto no HTML sem escrever muito CSS customizado.', 
    icon: SiTailwindcss
  },
  {
    title: 'HTML 5', 
    description: 'A linguagem de marcação padrão da web, responsável por estruturar o conteúdo de páginas, como títulos, parágrafos, links, imagens e formulários.', 
    icon: DiHtml5
  },
  {
    title: 'CSS 3', 
    description: 'Linguagem usada para estilizar páginas web, controlando cores, fontes, espaçamentos e layouts, tornando os sites mais atraentes e responsivos.', 
    icon: DiCss3
  },
  {
    title: 'GitHub', 
    description: 'Plataforma que hospeda repositórios Git e oferece recursos de colaboração, versionamento e integração, sendo essencial para projetos open-source e trabalho em equipe.', 
    icon: SiGithub
  },
  {
    title: 'Git', 
    description: 'Sistema de controle de versão distribuído, que permite acompanhar mudanças no código, trabalhar em equipe e gerenciar diferentes versões de um projeto.', 
    icon: DiGit
  },
  {
    title: 'Figma', 
    description: 'Ferramenta de design de interfaces colaborativa e online, muito usada para prototipação, criação de layouts e integração entre designers e desenvolvedores.', 
    icon: SiFigma
  },
];

const Skills = () => {
  return (
    <>
      <main className='min-h-[100vh] bg-[#2E3138]'>
        <div className='p-5'>
          <h2 className='text-center text-3xl text-[#00B58C]'>Habilidades</h2>
          <h1 className='text-center text-7xl text-emerald-50'>Principais Habilidades</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-20 p-15'>
          {icons.map((item) => (
            <main key={item.title} className='bg-[#1d1f24] hover:shadow-2xl hover:shadow-[#00B58C] rounded-2xl transition hover:scale-[1.02]'>
              <section className='flex flex-col items-center p-10 w-100 text-center cursor-pointer '>
                <item.icon size={44} color="#00B58C"/>
                <h3 className="text-xl font-semibold text-[#eef4f2] p-5">{item.title}</h3>
                <p className='text-[#aaafae] text-sm'>{item.description}</p>
              </section>
            </main>
          ))}
        </div>
      </main>

      {/* Section spacing between Skills and LearningSkills */}
      <div className='bg-[#2E3138]'>
        <div className='h-10'></div>
        <LearningSkills />
        <div className='h-10'></div>
      </div>
    </>
  );
};

export default Skills;

 