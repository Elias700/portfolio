import { DiMysql, DiJava, DiLinux } from "react-icons/di";

const LearningSkills = () => {

    type Skills = {
        title: string,
        description: string,
        icon: any
    };

    const skills: Skills[] = [
        {title: 'MySQL Workbench', description: 'O MySQL Workbench é uma ferramenta gráfica oficial do MySQL usada para modelagem, desenvolvimento e administração de bancos de dados. Ele permite criar e gerenciar esquemas, executar consultas SQL e visualizar relações entre tabelas de forma intuitiva.', icon: DiMysql},
        {title: 'Java', description: 'Java é uma linguagem de programação robusta e orientada a objetos, amplamente utilizada no desenvolvimento de aplicações web, desktop e mobile. Sua principal característica é a portabilidade.', icon: DiJava},
        {title: 'Linux', description: 'O Linux é um sistema operacional de código aberto conhecido por sua estabilidade, segurança e flexibilidade. É amplamente utilizado em servidores, desenvolvimento de software e ambientes de programação, sendo uma das bases mais importantes do ecossistema tecnológico atual.', icon: DiLinux}
    ];

    return (
        <main className='mt-24'>
            <div className='p-5'>
                <h2 className='text-center text-3xl text-[#00B58C]'>Habilidades</h2>
                <h1 className='text-center text-7xl text-emerald-50'>Habilidades em aprendizado</h1>
            </div>
            <section className='h-[50vh] flex flex-wrap justify-center gap-20 p-15'>
                {skills.map((skill) => (
                <div key={skill.title} className='bg-[#1d1f24] hover:shadow-2xl hover:shadow-[#00B58C] rounded-2xl transition hover:scale-[1.02]'>
                    <div className='flex flex-col items-center p-10 w-100 text-center cursor-pointer '>
                        <skill.icon size={44} color="#00B58C"/> 
                        <h3 className="text-xl font-semibold text-[#eef4f2] p-5">{skill.title}</h3>
                        <p className='text-[#aaafae] text-sm'>{skill.description}</p>
                    </div>
                </div>
                ))}
            </section> 
        </main>
    )
};

export default LearningSkills;