import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

type ProjectProps = {
    name: string;
    description: string;
    imageUrl: string;
    deployUrl?: string; 
    githubUrl?: string; 
    // Novas props para o Scroll Reveal
    index: number;
    threshold: number;
};

const ProjectCard = ({ name, description, imageUrl, deployUrl, githubUrl, index, threshold }: ProjectProps) => {
    const { t } = useTranslation();

    // 1. Hook de Visibilidade: Definido com o threshold passado pelo componente pai
    // Tipagem explícita como HTMLDivElement
    const { elementRef, isVisible } = useScrollVisibility<HTMLDivElement>(threshold);
    
    // 2. Cálculo do Stagger (Atraso Sequencial)
    // Cada card terá um atraso maior que o anterior (0ms, 100ms, 200ms, etc.)
    const staggerDelay = index * 150; // Atraso de 150ms entre cada item

    // 3. Classes de Animação
    const cardAnimationClasses = `
        transition-all duration-700 ease-out 
        ${isVisible 
          ? `opacity-100 translate-y-0 delay-[${staggerDelay}ms]` // Visível com o delay calculado
          : 'opacity-0 translate-y-10'} // Oculto (10 unidades para baixo)
    `;
    
    return (
        <div 
            ref={elementRef} // <-- Anexa a Ref para monitorar a visibilidade
            // Combina as classes fixas e as classes dinâmicas de animação
            className={`
                relative flex flex-col rounded-xl bg-clip-border shadow-md 
                transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C] bg-[var(--card-bg)]
                ${cardAnimationClasses}
            `}
        >
            <div 
              className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[16/9] sm:aspect-[4/3]"
            >
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            
            <div className="px-5 py-4 md:p-6">
                <h5 className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-[var(--card-title-color)]" style={{ textShadow: 'var(--card-title-shadow)' }}>
                    {name}
                </h5>
                <p className="block font-sans text-sm md:text-base font-light leading-relaxed antialiased text-[var(--card-desc-color)]">
                    {description}
                </p>
            </div>
            
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 flex gap-10 md:gap-10 justify-between">
                
                {deployUrl && (
                    <button>
                        <a 
                            href={deployUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="select-none rounded-lg bg-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[var(--primary-500)]/20 transition-all hover:bg-[var(--primary-400)] hover:shadow-lg hover:shadow-[var(--primary-400)]/40 focus:opacity-90 active:opacity-90 cursor-pointer"
                        >
                            {t('projects.deploy')}
                        </a>
                    </button>
                )}

                {githubUrl && (
                    <button>
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none rounded-lg border border-[var(--primary-500)] text-[var(--primary-400)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-transparent hover:bg-[var(--primary-800)] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            {t('projects.github')}
                        </a>
                    </button>
                )}
            </div>

        </div>
    );
};

export default ProjectCard;