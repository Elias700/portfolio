
import './Habilidades.css'

const Habilidades = () => {

    const Habilidades = [
        { nome: "HTML", classe: "html" },
        { nome: "CSS", classe: "css"},
        { nome: "JAVASCRIPT", classe: "javascript" },
        { nome: "REACT", classe: "react" },
        { nome: "ANGULAR", classe: "angular" },
        { nome: "TYPESCRIPT", classe: "typescript" },
        { nome: "WORDPRESS", classe: "wordpress" },
        { nome: "FIGMA", classe: "figma" },
    ];

    return (
        <div className='habilidades-container'>
            <h1>Habilidades</h1>
            <div className="container-habilidades">
                {Habilidades.map((habilidade, index) => (
                    <span key={index}  className={`habilidade ${habilidade.classe}`}>{habilidade.nome}</span>
                ))}
            </div>
        </div>
    )
};

export default Habilidades;