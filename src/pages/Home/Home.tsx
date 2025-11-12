import { useTranslation } from '../../i18n/LanguageContext.tsx';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import imagee from '../../assets/eliasss.png';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

const Home = () => {
  const { t } = useTranslation();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { elementRef: textRef, isVisible: textVisible } = useScrollVisibility<HTMLDivElement>(0.8);
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollVisibility<HTMLDivElement>(0.6);

  const showText = isMobile ? true : textVisible;
  const showImage = isMobile ? true : imageVisible;

  const textAnimationClasses = `
    transition-all duration-1000 ease-out 
    ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'}
  `;

  const imageAnimationClasses = `
    transition-all duration-1000 ease-out delay-300
    ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `;

  const imageFloatClass = 'animate-float';

  return (
    <section
      id="home"
      className="bg-[var(--body-bg)] min-h-[88vh] px-6 md:px-10 py-8 pb-12"
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-24">

        <div
          ref={textRef}
          className={`max-w-xl w-full text-center md:text-left ${textAnimationClasses}`}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--hero-text)]">
            <strong className="text-3xl md:text-4xl lg:text-5xl text-[var(--hero-text)]">{t('home.hello')}</strong>
            {t('home.myNameIs')}
          </p>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-bl from-[var(--primary-300)]
            via-[var(--primary-500)] to-[var(--primary-700)] bg-clip-text text-transparent"
          >
            Elias Ribeiro
          </h2>

          <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--hero-text)]">
            {t('home.role')}
          </p>

          <div className="flex justify-center md:justify-start gap-4 md:gap-5 py-5">
            <a
              href="https://www.linkedin.com/in/elias-ribeiro700/"
              target="blank"
            >
              <IoLogoLinkedin
                size={50}
                className="text-3xl md:text-4xl text-[var(--primary-500)] 
                hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>

            <a href="https://github.com/Elias700" target="blank">
              <IoLogoGithub
                size={50}
                className="text-3xl md:text-4xl text-[var(--primary-500)] 
                hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>

            <a href="mailto:elias_ribeiro07@outlook.com.br">
              <IoMailOutline
                size={55}
                className="text-3xl md:text-4xl text-[var(--primary-500)] 
                hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`relative flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ${imageAnimationClasses} ${imageFloatClass}`}
        >
          <img
            src={imagee}
            alt="Elias Ribeiro"
            className="relative z-10 w-56 sm:w-72 md:w-[22rem] lg:w-[28rem] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
