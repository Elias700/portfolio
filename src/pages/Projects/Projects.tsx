import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    { id: 1, name: "Site Batman", description: "Site do Batman", imageUrl: "" },
    { id: 2, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "" },
    { id: 2, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "" },
    { id: 2, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "" },
    { id: 2, name: "Calculadora IMC", description: "Calcular IMC", imageUrl: "" },

  ];

  return (
    <section className="p-6">
      <h1 className="mb-6 text-center text-4xl text-[#00B58C] p-12 ">Meus Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
