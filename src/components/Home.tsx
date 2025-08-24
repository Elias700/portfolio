import './Home.css'
import { FaGlobe } from 'react-icons/fa';

const Home = () => {
    return (
        <header>  
            <nav className='navegacao'>
                 <p className='logo'>Portfolio <span>¨</span></p>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>About me</li>
                    < FaGlobe className='icon'/> 
                </ul>
            </nav>
        </header>
    )
};

export default Home;