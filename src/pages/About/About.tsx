import image from '../../assets/elias.jpg'

const About = () => {
    return (
        <div className={`bg-[#20272F] h-[90vh]`}> 
            <div className='p-10'>
                <h2 className={`text-center text-3xl text-[#00B58C]`}>
                    Sobre
                </h2>
                <h1 className={`text-center text-7xl text-emerald-50`}>
                    Um pouco sobre mim
                </h1>
            </div>
            <section className="flex flex-col md:flex-row justify-center items-center gap-50 px-4 ">
                <div className='max-w-lg rounded-2xl flex flex-col justify-center items-center gap-10'>
                    <p className={`bg-transparent text-[#00B58C] text-lg text-center`}>
                        Minha trajetória profissional é uma fusão estratégica entre Pedagogia e Tecnologia.

                        Formado em Licenciatura em Pedagogia, adquiri uma base sólida em lógica, comunicação e foco na experiência do usuário, habilidades que hoje aplico diretamente na construção de soluções digitais.

                        Atualmente, sou Desenvolvedor Frontend e estou consolidando uma transição de carreira na graduação em Análise e Desenvolvimento de Sistemas pela Fundação Visconde de Cairu.

                        Tenho domínio das ferramentas essenciais do frontend: HTML, CSS, JavaScript, TypeScript, ReactJs e Figma.

                        Sou um profissional adaptável, voltado à resolução de problemas e empenhado em transformar ideias em interfaces funcionais e intuitivas.
                    </p>
                    <button
                        className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-[#00B58C] cursor-pointer w-60"
                    >
                        <span className="text-lg">Contato</span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                            <div className="relative h-full w-10 bg-[#00B58C]"></div>
                        </div>
                    </button>
                </div>
                <img src={image} alt="Elias Riberio" className='h-120 rounded-lg '/>
            </section>
            
        </div>
    )
};

export default About;