import ProjectCard from './ProjectCard';
import { useTranslation } from '../../i18n/LanguageContext';
import useScrollVisibility from '../../hooks/useScrollVisibility';

import { projects } from '../../data/projects';

const Projects = () => {
  const { t } = useTranslation();

  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollVisibility<HTMLDivElement>(0.8);

  const titleAnimationClasses = `
    transition-all duration-700 ease-out
    ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
  `;

  const getKey = (
    id: number
  ): 'nikel' | 'batman' | 'rotadomar' | 'moneytrack' => {
    switch (id) {
      case 1:
        return 'nikel';
      case 2:
        return 'batman';
      case 3:
        return 'rotadomar';
      case 4:
        return 'moneytrack';
      default:
        throw new Error(`Invalid project id: ${id}`);
    }
  };

  return (
    <section
      id="projects"
      className="
        relative 
        bg-[--body-bg]
      "
    >

      <div
        ref={titleRef}
        className={`
          max-w-6xl 
          mx-auto 
          px-6 py-8 
          md:px-10 
          md:py-12 
          ${titleAnimationClasses}
        `}
      >
        <h2
          className="
            text-center 
            text-2xl 
            md:text-3xl 
            text-[var(--heading-color)]
          "
        >
          {t('projects.title')}
        </h2>

        <h1
          className="
            text-center 
            text-4xl 
            md:text-6xl 
            lg:text-7xl 
            text-[var(--subtitle-color)]
          "
        >
          {t('projects.subtitle')}
        </h1>
      </div>

      <div
        className="
          max-w-6xl 
          mx-auto 
          px-4 pb-16 p-10
          md:px-10
        "
      >
        <div 
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={t(`projects.item.${getKey(project.id)}.name`)}
              description={t(`projects.item.${getKey(project.id)}.desc`)}
              imageUrl={project.imageUrl}
              deployUrl={project.deployUrl}
              githubUrl={project.githubUrl}
              figmaUrl={project.figmaUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
