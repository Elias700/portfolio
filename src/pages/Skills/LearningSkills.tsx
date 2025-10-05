import { DiMysql, DiJava, DiLinux } from "react-icons/di";
import { useTranslation } from '../../i18n/LanguageContext.tsx';

const LearningSkills = () => {
    const { t } = useTranslation();

    type Skills = {
        title: string,
        description: string,
        icon: any
    };

    const skills: Skills[] = [
        {title: 'MySQL Workbench', description: t('learning.mysql.desc'), icon: DiMysql},
        {title: 'Java', description: t('learning.java.desc'), icon: DiJava},
        {title: 'Linux', description: t('learning.linux.desc'), icon: DiLinux}
    ];

    return (
        <main className='mt-16 md:mt-24'>
            <div className='px-6 py-4 md:p-5'>
                <h2 className='text-center text-2xl md:text-3xl text-[#00B58C]'>{t('learning.title')}</h2>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl text-emerald-50'>{t('learning.subtitle')}</h1>
            </div>
            <section className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 px-4 md:px-6 pb-10'>
                {skills.map((skill) => (
                <div key={skill.title} className='rounded-2xl transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C]' style={{ backgroundColor: 'var(--card-bg)' }}>
                    <div className='flex flex-col items-center p-6 md:p-8 lg:p-10 w-72 sm:w-80 text-center cursor-pointer'>
                        <skill.icon size={44} color="#00B58C"/> 
                        <h3 className="text-lg md:text-xl font-semibold text-[#eef4f2] p-4 md:p-5">{skill.title}</h3>
                        <p className='text-[#aaafae] text-sm md:text-base' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{skill.description}</p>
                    </div>
                </div>
                ))}
            </section> 
        </main>
    )
};

export default LearningSkills;