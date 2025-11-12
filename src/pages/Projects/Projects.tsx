import ProjectCard from "./ProjectCard";
import { useTranslation } from "../../i18n/LanguageContext.tsx";
import Nikel from "../../assets/projeto-nikel.png";
import Batman from "../../assets/projeto-batman.png";
import RotaDoMar from '../../assets/projeto-rotadomar.png'
import ProjetoEmAndamento from '../../assets/projetoEmAndamento.png'

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    { 
      id: 1, 
      name: t('projects.item.nikel.name'), 
      description: t('projects.item.nikel.desc'), 
      imageUrl: Nikel,
      deployUrl: "https://nikel-mx1qow612-elias700s-projects.vercel.app/",
      githubUrl: "https://github.com/Elias700/Nikel"
    }, 
    { 
      id: 2, 
      name: t('projects.item.batman.name'), 
      description: t('projects.item.batman.desc'), 
      imageUrl: Batman,
      deployUrl: "https://site-batman-roe9a5tt4-elias700s-projects.vercel.app/",
      githubUrl: "https://github.com/Elias700/Site-Batman" 
    },
    { 
      id: 3, 
      name: t('projects.item.rotadomar.name'), 
      description: t('projects.item.rotadomar.desc'), 
      imageUrl: RotaDoMar,
      deployUrl: "https://rota-do-mar.vercel.app/",
      githubUrl: "https://github.com/Elias700/Rota-do-Mar"
     },
    { 
      id: 4, 
      name: t('projects.item.filmesdev.name'), 
      description: t('projects.item.filmesdev.desc'), 
      imageUrl: ProjetoEmAndamento,
      deployUrl: "",
      githubUrl: ""
    },
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
              deployUrl={project.deployUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;