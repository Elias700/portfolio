import { DiMysql, DiJava } from "react-icons/di";
import { FaNetworkWired } from 'react-icons/fa';
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';
import { FaCubes } from 'react-icons/fa';
import { SiIntellijidea } from "react-icons/si";


const LearningSkills = () => {
    const { t } = useTranslation();

    type Skills = {
        title: string,
        description: string,
        icon: any
    };

    const skills: Skills[] = [
        { title: 'MySQL Workbench', description: t('learning.mysql.desc'), icon: DiMysql },
        { title: 'Java', description: t('learning.java.desc'), icon: DiJava },
        { title: 'Api Rest', description: t('learning.apirest.desc'), icon: FaNetworkWired },
        { title: 'POO', description: t('learning.poo.desc'), icon: FaCubes },
        { title: 'IntelliJ IDEA', description: t('projects.item.intellij.desc'), icon: SiIntellijidea },
    ];

    const { elementRef: titleRef, isVisible: titleVisible } = useScrollVisibility<HTMLDivElement>(0.8);

    const titleAnimationClasses = `
      transition-all duration-700 ease-out 
      ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `;

    const cardRefs = skills.map(() => useScrollVisibility<HTMLDivElement>(0.6));


    return (
        <main className='mt-16 md:mt-24 bg-[var(--body-bg)]'>

            <div
                ref={titleRef}
                className={`px-6 py-4 md:p-5 ${titleAnimationClasses}`}
            >
                <h2 className='text-center text-2xl md:text-3xl text-[var(--heading-color)]'>{t('learning.title')}</h2>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl text-[var(--subtitle-color)]'>{t('learning.subtitle')}</h1>
            </div>

            <section className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 px-4 md:px-6 p-10'>
                {skills.map((skill, index) => {
                    const { elementRef, isVisible } = cardRefs[index];
                    const staggerDelay = index * 100;

                    const cardAnimationClasses = `
                        transition-all duration-700 ease-out 
                        ${isVisible
                            ? `opacity-100 translate-y-0 delay-[${staggerDelay}ms]`
                            : 'opacity-0 translate-y-10'}
                    `;

                    return (
                        <div
                            key={skill.title}
                            ref={elementRef}
                            className={`
                                rounded-2xl transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C] bg-[var(--card-bg)]
                                ${cardAnimationClasses}
                            `}
                        >
                            <div className='flex flex-col items-center p-6 md:p-8 lg:p-10 w-full sm:w-72 md:w-80 text-center cursor-pointer'>
                                <skill.icon size={44} color="#00B58C" />
                                <h3 className="text-lg md:text-xl font-semibold p-4 md:p-5 text-[var(--card-title-color)]" style={{ textShadow: 'var(--card-title-shadow)' }}>{skill.title}</h3>
                                <p className='text-[var(--card-desc-color)] text-sm md:text-base' >{skill.description}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    )
};

export default LearningSkills;