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
        <main className='mt-24'>
            <div className='p-5'>
                <h2 className='text-center text-3xl text-[#00B58C]'>{t('learning.title')}</h2>
                <h1 className='text-center text-7xl text-emerald-50'>{t('learning.subtitle')}</h1>
            </div>
            <section className='h-[50vh] flex flex-wrap justify-center gap-20 p-15'>
                {skills.map((skill) => (
                <div key={skill.title} className='bg-[#1d1f24] hover:shadow-2xl hover:shadow-[#00B58C] rounded-2xl transition hover:scale-[1.02]'>
                    <div className='flex flex-col items-center p-10 w-100 text-center cursor-pointer '>
                        <skill.icon size={44} color="#00B58C"/> 
                        <h3 className="text-xl font-semibold text-[#eef4f2] p-5">{skill.title}</h3>
                        <p className='text-[#aaafae] text-sm'>{skill.description}</p>
                    </div>
                </div>
                ))}
            </section> 
        </main>
    )
};

export default LearningSkills;