import image from '../../assets/elias.jpg'
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

const About = () => {
  const { t } = useTranslation();

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollVisibility<HTMLDivElement>(0.95);
  const { elementRef: textRef, isVisible: textVisible } = useScrollVisibility<HTMLDivElement>(0.85);
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollVisibility<HTMLImageElement>(0.8);

  const whatsappUrl = "https://wa.me/5571984231897?text=Ol%C3%A1%2C%20vim%20do%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

  const titleAnimationClasses = `
    transition-all duration-700 ease-out 
    ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
  `;

  const textAnimationClasses = `
    transition-all duration-1000 ease-out delay-200
    ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
  `;

  const imageAnimationClasses = `
    transition-all duration-1000 ease-out delay-300
    ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
  `;

  return (
    <div className="relative min-h-[90vh] pb-8 md:pb-12 mb-6 md:mb-10 overflow-hidden bg-[--body-bg]">

      <div
        ref={titleRef}
        className={`p-10 text-center ${titleAnimationClasses}`}
      >
        <h2 className="text-3xl text-[var(--heading-color)]">{t('about.title')}</h2>
        <h1 className="text-6xl md:text-7xl text-[var(--subtitle-color)]">{t('about.subtitle')}</h1>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 p-6 md:p-10">

        <div
          ref={textRef}
          className={`max-w-lg rounded-2xl flex flex-col justify-center items-center gap-10 text-center ${textAnimationClasses}`}
        >
          <p className="bg-transparent text-[var(--text-primary)] text-lg leading-relaxed">
            {t('about.paragraph')}
          </p>

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

        <img
          ref={imageRef}
          src={image}
          alt="Elias Ribeiro"
          className={`w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${imageAnimationClasses}`}
        />
      </section>
    </div>
  );
};

export default About;
