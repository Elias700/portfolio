import { useTranslation } from '../../i18n/LanguageContext';
import useScrollVisibility from '../../hooks/useScrollVisibility';
import { LinkButton } from '../../components/UI/Buttons/LinkButton';

import type { ProjectCardProps } from '../../types/projects';

const ProjectCard = ({
    name,
    description,
    imageUrl,
    deployUrl,
    githubUrl,
    figmaUrl,
    index,
    threshold = 0.5,
}: ProjectCardProps) => {
    const { t } = useTranslation();

    const { elementRef, isVisible } =
        useScrollVisibility<HTMLDivElement>(
            threshold,
            '0px 0px -10% 0px'
        );

    const staggerDelay = index * 150;

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${staggerDelay}ms`,
                willChange: 'transform, opacity',
            }}
            className={`
                relative
                flex
                flex-col
                rounded-xl
                bg-clip-border
                shadow-md
                transition-all
                duration-300
                ease-out
                transform
                hover:scale-[1.02]
                hover:shadow-2xl
                hover:shadow-[#00B58C]
                bg-[var(--card-bg)]
                max-w-[380px]        
                w-full
                mx-auto 
                cursor-pointer
                ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }
            `}
        >

            <div
                className="
                    relative
                    mx-4
                    mt-6
                    overflow-hidden
                    rounded-xl
                    bg-clip-border
                    shadow-lg
                    aspect-[16/9]
                    sm:aspect-[4/3]
                "
            >
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-5 py-4 md:p-6">
                <h5
                    className="
                        mb-2
                        font-sans
                        text-lg
                        md:text-xl
                        font-semibold
                        leading-snug
                        tracking-normal
                        text-[var(--card-title-color)]
                    "
                    style={{ textShadow: 'var(--card-title-shadow)' }}
                >
                    {name}
                </h5>

                <p
                    className="
                        font-sans
                        text-sm
                        md:text-base
                        font-light
                        leading-relaxed
                        antialiased
                        text-[var(--card-desc-color)]
                    "
                >
                    {description}
                </p>
            </div>

            <div
                className="
                    px-5
                    pb-5
                    md:px-6
                    md:pb-6
                    pt-0
                    flex
                    justify-between
                "
            >
                <LinkButton
                    href={deployUrl}
                    variant="primary"
                    disabled={!deployUrl}
                >
                    {t('projects.deploy')}
                </LinkButton>

                <LinkButton
                    href={githubUrl}
                    disabled={!githubUrl}
                >
                    {t('projects.github')}
                </LinkButton>

                <LinkButton
                    href={figmaUrl}
                    disabled={!figmaUrl}
                >
                    Figma
                </LinkButton>

            </div>
        </div>
    );
};

export default ProjectCard;
