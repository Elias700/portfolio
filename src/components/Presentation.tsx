import './presentation.css'
import image from '../assets/elias2-removebg-preview.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Presentation = () => {
    return (
        <div className="container">
            <p>My name is <strong>Elias</strong> and I am a programmer</p>
            <h2>Desenvolvedor</h2>
            <h1>Front-end</h1>
            <img src={image} alt="Imagem de Elias" />
            <div className="btts">
                <button className='btn1'>Curriculum</button>
                <button className='btn2'>Contact</button>
            </div>
            <div className="redes">
                <FaGithub className='icons' />
                <FaLinkedin className='icons' />
                <FaEnvelope className='icons' />
            </div>
        </div>
    )
}

export default Presentation;