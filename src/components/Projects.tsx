import './Projects.css';
import image from '../assets/baixados.jfif'

const Projects = () => {
    // 1. Interface
    interface Project {
        id: number;
        name: string;
        image: string;
    }

    // 2. Variável 'projects' com P minúsculo (camelCase)
    const projects: Project[] = [
        { id: 1, name: 'Projects', image: image },
        { id: 2, name: 'Projects', image: image },
        { id: 3, name: 'Projects', image: image },
        { id: 4, name: 'Projects', image: image },
        { id: 5, name: 'Projects', image: image },
        { id: 6, name: 'Projects', image: image },
    ];

    return (
        <div className="container3">
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} className='image1'/>
                </div>
            ))}
        </div>
    );
};

export default Projects;