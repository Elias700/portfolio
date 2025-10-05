import { DiHtml5, DiCss3, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTypescript, SiFigma, SiGithub, SiReact, SiTailwindcss } from 'react-icons/si';
import LearningSkills from './LearningSkills';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

// Tipo ajustado
type Skills = {
  title: string,
  descKey: string,
  icon: any // Mudei de [] para any para aceitar o componente
}

const icons: Skills[] = [
  {
    title: 'React', 
    descKey: 'skills.desc.react', 
    icon: SiReact // Apenas o nome da importação, sem parênteses ou aspas
  },
  {
    title: 'TypeScript', 
    descKey: 'skills.desc.ts', 
    icon: SiTypescript
  },
  {
    title: 'JavaScript', 
    descKey: 'skills.desc.js', 
    icon: DiJsBadge
  },
  {
    title: 'Tailwind CSS', 
    descKey: 'skills.desc.tailwind', 
    icon: SiTailwindcss
  },
  {
    title: 'HTML 5', 
    descKey: 'skills.desc.html5', 
    icon: DiHtml5
  },
  {
    title: 'CSS 3', 
    descKey: 'skills.desc.css3', 
    icon: DiCss3
  },
  {
    title: 'GitHub', 
    descKey: 'skills.desc.github', 
    icon: SiGithub
  },
  {
    title: 'Git', 
    descKey: 'skills.desc.git', 
    icon: DiGit
  },
  {
    title: 'Figma', 
    descKey: 'skills.desc.figma', 
    icon: SiFigma
  },
];

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className='min-h-[100vh] bg-[#2E3138]'>
        <div className='p-5'>
          <h2 className='text-center text-3xl text-[#00B58C]'>{t('skills.title')}</h2>
          <h1 className='text-center text-7xl text-emerald-50'>{t('skills.subtitle')}</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-20 p-15'>
          {icons.map((item) => (
            <main key={item.title} className='bg-[#1d1f24] hover:shadow-2xl hover:shadow-[#00B58C] rounded-2xl transition hover:scale-[1.02]'>
              <section className='flex flex-col items-center p-10 w-100 text-center cursor-pointer '>
                <item.icon size={44} color="#00B58C"/>
                <h3 className="text-xl font-semibold text-[#eef4f2] p-5">{item.title}</h3>
                <p className='text-[#aaafae] text-sm'>{t(item.descKey as any)}</p>
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

 