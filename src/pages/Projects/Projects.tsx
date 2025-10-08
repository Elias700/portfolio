import ProjectCard from "./ProjectCard";
import { useTranslation } from "../../i18n/LanguageContext.tsx";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    { id: 1, name: t('projects.item.bmi.name'), description: t('projects.item.bmi.desc'), imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png"},
    { id: 2, name: t('projects.item.bmi.name'), description: t('projects.item.bmi.desc'), imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 3, name: t('projects.item.bmi.name'), description: t('projects.item.bmi.desc'), imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 5, name: t('projects.item.bmi.name'), description: t('projects.item.bmi.desc'), imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 6, name: t('projects.item.bmi.name'), description: t('projects.item.bmi.desc'), imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
  ];

  return (
    <section className="relative bg-[--body-bg]">
        <div className="max-w-6xl mx-auto px-6 py-8 md:px-10 md:py-12">
          <h2 className='text-center text-2xl md:text-3xl text-[var(--heading-color)]'>{t('projects.title')}</h2>
          <h1 className='text-center text-4xl md:text-6xl lg:text-7xl text-[var(--subtitle-color)]'>{t('projects.subtitle')}</h1>
        </div>
      <div className="max-w-6xl mx-auto px-4 pb-16 md:px-10 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-16 cursor-pointer">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
