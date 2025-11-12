import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

type ProjectProps = {
    name: string;
    description: string;
    imageUrl: string;
    deployUrl?: string;
    githubUrl?: string;
    index: number;
    threshold?: number;
};

const ProjectCard = ({
    name,
    description,
    imageUrl,
    deployUrl,
    githubUrl,
    index,
    threshold = 0.5,
}: ProjectProps) => {
    const { t } = useTranslation();
    const { elementRef, isVisible } = useScrollVisibility<HTMLDivElement>(
        threshold,
        '0px 0px -10% 0px'
    );

    const staggerDelay = index * 150; // ms

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${staggerDelay}ms`,
                willChange: 'transform, opacity',
            }}
            className={`
        relative flex flex-col rounded-xl bg-clip-border shadow-md
        transition-all duration-700 ease-out transform
        hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C]
        bg-[var(--card-bg)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
        >
            {/* Imagem */}
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[16/9] sm:aspect-[4/3]">
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Texto */}
            <div className="px-5 py-4 md:p-6">
                <h5
                    className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-[var(--card-title-color)]"
                    style={{ textShadow: 'var(--card-title-shadow)' }}
                >
                    {name}
                </h5>
                <p className="block font-sans text-sm md:text-base font-light leading-relaxed antialiased text-[var(--card-desc-color)]">
                    {description}
                </p>
            </div>

            {/* Botões */}
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 flex gap-10 md:gap-10 justify-between">
                {deployUrl ? (
                    <a
                        href={deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="select-none rounded-lg bg-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[var(--primary-50)] shadow-md shadow-[var(--primary-500)]/20 transition-all hover:bg-[var(--primary-700)] hover:shadow-lg hover:shadow-[var(--primary-400)]/40 focus:opacity-90 active:opacity-90"
                    >
                        {t('projects.deploy')}
                    </a>
                ) : (
                    <div />
                )}

                {githubUrl ? (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="select-none rounded-lg border border-[var(--primary-500)] text-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-transparent hover:bg-[var(--primary-800)] hover:text-white transition-all duration-300"
                    >
                        {t('projects.github')}
                    </a>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
