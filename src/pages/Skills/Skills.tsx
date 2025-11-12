import { DiHtml5, DiCss3, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTypescript, SiFigma, SiGithub, SiReact, SiTailwindcss } from 'react-icons/si';
import LearningSkills from './LearningSkills';
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts'; // Importe o Hook

// Tipo ajustado
type SkillsItem = {
  title: string,
  descKey: string,
  icon: any
}

const icons: SkillsItem[] = [
  {
    title: 'React',
    descKey: 'skills.desc.react',
    icon: SiReact
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
  
  // 1. Hook para o TÍTULO (dispara cedo)
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollVisibility<HTMLDivElement>(0.8);
  
  // === Classes de Animação Tailwind para o TÍTULO ===
  const titleAnimationClasses = `
    transition-all duration-700 ease-out 
    ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
  `;

  // Hook individual para cada card de skill principal
  const cardRefs = icons.map(() => useScrollVisibility<HTMLDivElement>(0.6));
  
  return (
    <>
      <main className='min-h-[100vh]'>
        {/* TÍTULO: Aplica a ref e as classes de animação */}
        <div 
          ref={titleRef}
          className={`px-6 py-6 md:py-8 ${titleAnimationClasses}`}
        >
          <h2 className='text-center text-2xl md:text-3xl text-[var(--heading-color)]'>{t('skills.title')}</h2>
          <h1 className='text-center text-4xl md:text-6xl lg:text-7xl text-[var(--subtitle-color)]'>{t('skills.subtitle')}</h1>
        </div>
        
        <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 px-4 md:px-6 p-10'>
          {icons.map((item, index) => {
            const { elementRef, isVisible } = cardRefs[index];
            const staggerDelay = index * 100; // 100ms de atraso entre cada card

            const cardAnimationClasses = `
                transition-all duration-700 ease-out 
                ${isVisible 
                  ? `opacity-100 translate-y-0 delay-[${staggerDelay}ms]` 
                  : 'opacity-0 translate-y-10'}
            `;

            return (
              <div 
                key={item.title} 
                ref={elementRef} // <-- Anexa a Ref
                className={`
                    rounded-2xl transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C] w-full sm:w-72 md:w-80 bg-[var(--card-bg)]
                    ${cardAnimationClasses}
                `} 
              >
                <section className='flex flex-col items-center p-6 md:p-8 text-center cursor-pointer'>
                  <item.icon size={44} color="#00B58C" />
                  <h3 className="text-lg md:text-xl font-semibold p-4 md:p-5 text-[var(--card-title-color)]" style={{ textShadow: 'var(--card-title-shadow)' }}>{item.title}</h3>
                  <p className='text-[var(--card-desc-color)] text-sm md:text-base' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{t(item.descKey as any)}</p>
                </section>
              </div>
            );
          })}
        </div>
      </main>

      {/* Section spacing between Skills and LearningSkills */}
      <div style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className='h-10'></div>
        <LearningSkills />
        <div className='h-10'></div>
      </div>
    </>
  );
};

export default Skills;