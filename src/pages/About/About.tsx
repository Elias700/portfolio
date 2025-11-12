import image from '../../assets/elias.jpg'
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

const About = () => {
  const { t } = useTranslation();

  // 1. TÍTULO: (div) - Ativação no 90% da tela (dispara cedo)
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollVisibility<HTMLDivElement>(0.9);

  // 2. TEXTO/BOTÃO: (div) - Ativação no 70% da tela (Slide-in da Esquerda)
  // Tipagem explícita como HTMLDivElement
  const { elementRef: textRef, isVisible: textVisible } = useScrollVisibility<HTMLDivElement>(0.7);

  // 3. IMAGEM: (img) - Ativação no 60% da tela (Slide-in da Direita)
  // Tipagem explícita como HTMLImageElement
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollVisibility<HTMLImageElement>(0.6);

  // URL do WhatsApp com seu número e mensagem de rascunho codificada
  const whatsappUrl = "https://wa.me/5571984231897?text=Ol%C3%A1%2C%20vim%20do%20portfólio%20e%20gostaria%20de%20conversar.";

  // === Classes de Animação Tailwind ===

  // Animação para o Título (Fade-up suave)
  const titleAnimationClasses = `
    transition-all duration-700 ease-out 
    ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
  `;

  // Animação para o Bloco de Texto (Slide-in da Esquerda)
  const textAnimationClasses = `
    transition-all duration-1000 ease-out delay-200
    ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
  `;

  // Animação para a Imagem (Slide-in da Direita)
  const imageAnimationClasses = `
    transition-all duration-1000 ease-out delay-300
    ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
  `;

  return (
    <div
      className="relative min-h-[90vh] pb-8 md:pb-12 mb-6 md:mb-10 overflow-hidden bg-[--body-bg]"
    >
      {/* TÍTULO: Aplica a ref e as classes de animação */}
      <div
        ref={titleRef} // <-- Ref do Título (HTMLDivElement)
        className={`p-10 ${titleAnimationClasses}`}
      >
        <h2 className="text-center text-3xl text-[var(--heading-color)]">{t('about.title')}</h2>
        <h1 className="text-center text-7xl text-[var(--subtitle-color)]">{t('about.subtitle')}</h1>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 p-6 md:p-10">

        {/* BLOCO DE TEXTO E BOTÃO: Aplica a ref e as classes de animação */}
        <div
          ref={textRef} // <-- Ref do Texto (HTMLDivElement)
          className={`max-w-lg rounded-2xl flex flex-col justify-center items-center gap-10 ${textAnimationClasses}`}
        >
          <p className="bg-transparent text-[var(--text-primary)] text-lg text-center">
            {t('about.paragraph')}
          </p>

          {/* O elemento <a> (Botão) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[color-mix(in_oklab,var(--card-bg)_90%,transparent)] backdrop-blur-lg px-6 py-2 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-[var(--primary-700)]/40 border border-[var(--primary-500)] cursor-pointer w-60">
            <span className="text-lg">{t('about.button')}</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-[var(--primary-500)]"></div>
            </div>
          </a>
        </div>

        {/* IMAGEM: Aplica a ref e as classes de animação */}
        <img
          ref={imageRef} // <-- Ref da Imagem (HTMLImageElement)
          src={image}
          alt="Elias Ribeiro"
          // Adicionamos classes de TRANSITION e HOVER do Tailwind para substituir o whileHover
          className={`w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${imageAnimationClasses}`}
        />
      </section>
    </div>
  );
};

export default About;