
import './Projetos.css'

const Projetos = () => {

    const projetos = [
        {titulo: 'Batman', classe: 'batman', img: 'https://cdn.europosters.eu/image/1300/the-batman-2022-i122127.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, natus amet? Corporis perferendis ut fugiat iure quidem ullam dolore dicta soluta maiores debitis. Beatae hic esse expedita, perferendis delectus voluptates.'},
        {titulo: 'Lista de Compras', classe: 'lista', img: 'https://cdn.bichopapel.com/wp-content/uploads/2020/10/lista_compras_candy_color_arquivo_digital_miolo_encadernacao_cozinha_casa-scaled-scaled.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, natus amet? Corporis perferendis ut fugiat iure quidem ullam dolore dicta soluta maiores debitis. Beatae hic esse expedita, perferendis delectus voluptates.'},
        {titulo: 'Hamburgueria Dev', classe: 'hamburgueria', img: 'https://cdn.deliway.com.br/blog/base/dc5/f43/ce4/melhores-hamburgueria-sao-paulo.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, natus amet? Corporis perferendis ut fugiat iure quidem ullam dolore dicta soluta maiores debitis. Beatae hic esse expedita, perferendis delectus voluptates.'},
        {titulo: 'Saúde e Cuidados', classe: 'videos', img: 'https://guiadafarmacia.com.br/wp-content/uploads/2019/09/shutterstock_1281020671.png', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, natus amet? Corporis perferendis ut fugiat iure quidem ullam dolore dicta soluta maiores debitis. Beatae hic esse expedita, perferendis delectus voluptates.'},
    ];

    return (
        <div className='container'>
            <h2>Projetos</h2>
            <div className="container-projetos">
                {projetos.map((projeto, index) => (
                    <div key={index} className="projetos">
                        <img src={projeto.img} alt={projeto.titulo} />
                        <h2>{projeto.titulo}</h2>
                        <p>{projeto.descricao}</p>
                        <div className="btts">
                            <button>GitHub</button>
                            <button>Deploy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projetos;


