import { useTranslation } from '../../i18n/LanguageContext.tsx';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import imagee from '../../assets/eliasss.png'
// Importe o CSS local se ele contiver a classe 'animate-float'
// import './Home.css'; 

// Importe o Hook para o Scroll Reveal (ajuste o caminho se necessário)
import useScrollVisibility from '../../hooks/useScrollVisibility.ts';

const Home = () => {
  const { t } = useTranslation();

  // 1. Hook para o bloco de TEXTO (dispara quando 80% da tela está visível)
  // Especificando o tipo <HTMLDivElement>
  const { elementRef: textRef, isVisible: textVisible } = useScrollVisibility<HTMLDivElement>(0.8);

  // 2. Hook para o bloco de IMAGEM (dispara quando 60% da tela está visível)
  // Especificando o tipo <HTMLDivElement> (já que a ref é colocada na div wrapper da imagem)
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollVisibility<HTMLDivElement>(0.6);

  // === Classes Dinâmicas do Tailwind para o Scroll Reveal ===

  // Slide-in da Esquerda para o Texto
  const textAnimationClasses = `
    transition-all duration-1000 ease-out 
    ${textVisible
      ? 'opacity-100 translate-x-0' // Estado Visível
      : 'opacity-0 -translate-x-1/2'} // Estado Inicial Oculto
  `;

  // Fade-up para a Imagem + Float Contínuo
  const imageAnimationClasses = `
    transition-all duration-1000 ease-out delay-300
    ${imageVisible
      ? 'opacity-100 translate-y-0' // Estado Visível
      : 'opacity-0 translate-y-12'} // Estado Inicial Oculto (12px para baixo)
  `;

  // A classe 'animate-float' deve vir do seu CSS (style.css)
  const imageFloatClass = 'animate-float';

  return (
    <section
      id="home"
      className="bg-[var(--body-bg)] min-h-[88vh] px-6 md:px-10 py-8 pb-12"
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-24">

        {/* 1. TEXTO: Adiciona a Ref e as classes dinâmicas */}
        <div
          ref={textRef} // <-- Ref do tipo HTMLDivElement
          className={`max-w-xl w-full ${textAnimationClasses}`}
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

          <div className="flex gap-4 md:gap-5 py-5">
            <a
              href="https://www.linkedin.com/in/elias-ribeiro700/"
              target="blanck"
            >
              <IoLogoLinkedin size={50} className="text-3xl md:text-4xl text-[var(--primary-500)] 
              hover:text-[var(--text-muted)] transition duration-[600ms] cursor-pointer"
              />
            </a>

            <a href="https://github.com/Elias700"
              target="blanck"
            >
              <IoLogoGithub size={50} className="text-3xl md:text-4xl text-[var(--primary-500)] 
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

        {/* 2. IMAGEM: Adiciona a Ref, as classes dinâmicas e o float contínuo */}
        <div
          ref={imageRef} // <-- Ref do tipo HTMLDivElement
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