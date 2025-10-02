import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    { id: 1, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png"},
    { id: 2, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 3, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 4, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 5, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
    { id: 6, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "https://becode.com.br/wp-content/uploads/2018/03/landing-page-ex-1.png" },
  ];

  return (
    <section className="h-[110vh] bg-[#2E3138] p-5">
      <h1 className="mb-6 text-center text-4xl text-[#00B58C] p-12">Meus Projetos</h1>
      <div className="flex justify-center flex-wrap p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 cursor-pointer">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
