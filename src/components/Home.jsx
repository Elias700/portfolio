

import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";      



const Home = ({ Img }) => {
    return (
        <div className='container-home'>
            <img src={Img} alt="Elias Ribeiro" className="profile-image" />
                <div className='text'>
                    <h1>Olá, me chamo <span>Elias Ribeiro</span></h1>
                    <p><span className='front'>Desenvolvedor Front-end</span> apaixonado por criar experiências digitais incríveis e interfaces intuitivas.</p>
                </div>
                <div className='btts'>
                    <button className="btn">Curriculo</button>
                    <button className="btn">Contato</button>
                </div>
                <div className='icons'>
                    <FaLinkedin className="icon" />
                    <FaGithub className="icon" />
                    <MdEmail className="icon" />
                </div>
        </div>
        
    )
};

export default Home;


