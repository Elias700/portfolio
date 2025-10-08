
type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

import { useTranslation } from '../../i18n/LanguageContext.tsx';

const ProjectCard = ({ name, description, imageUrl }: ProjectProps) => {
  const { t } = useTranslation();
  return (
    <div 
      className="relative flex flex-col  rounded-xl bg-clip-border text-gray-700 shadow-md transition hover:scale-[1.02] bg-gradient-to-br from-[#0a0f0e] via-[var(--primary-800)] to-[var(--primary-600)]"
      >
      <div 
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg"
        >
        <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
      </div>
      <div className="px-5 py-4 md:p-6">
        <h5 className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-white">
        {name}
        </h5>
        <p className="block font-sans text-sm md:text-base font-light leading-relaxed antialiased text-white">
        {description}
        </p>
      </div>
      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 flex gap-10 md:gap-10 justify-between">
          <button 
            type="button"
            className="select-none rounded-lg bg-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[var(--primary-500)]/20 transition-all hover:bg-[var(--primary-400)] hover:shadow-lg hover:shadow-[var(--primary-400)]/40 focus:opacity-90 active:opacity-90 cursor-pointer">
            {t('projects.deploy')}
          </button>

          <button 
            type="button"
            className="select-none rounded-lg border border-[var(--primary-500)] text-[var(--primary-400)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-transparent hover:bg-[var(--primary-800)] hover:text-white transition-all duration-300 cursor-pointer">
            {t('projects.github')}
          </button>
        </div>

    </div>
  );
};

export default ProjectCard;


