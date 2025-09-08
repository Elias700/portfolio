import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from '../../assets/elias2-removebg-preview.png';
import imageBackground from '../../assets/blurry-gradient-haikei.png';

const Home = () => {
    return (
        <div
  className="flex justify-center gap-40 items-center bg-cover bg-center h-[88vh]"
  style={{ backgroundImage: `url(${imageBackground})` }}
>
            <div>
                <p className="text-4xl text-[#CBCCD1]"><strong className="text-5xl text-[#00B58C]">Olá!</strong>Me chamo</p>
                <h2 className="text-7xl text-[#00B58C]">Elias Ribeiro</h2>
                <p className="text-4xl text-[#00B58C]">Desenvolvedor <strong className="text-[#CBCCD1]">Front-end</strong></p>
                <div className="flex gap-2 py-5">
                    <FaGithubSquare className="text-4xl text-[#00B58C]"/>
                    <MdEmail className="text-4xl text-[#00B58C]"/>
                    <FaLinkedin className="text-4xl text-[#00B58C]"/>
                </div>
                <button className="bg-[#00B58C] py-4 px-15 text-3xl text-[#CBCCD1] rounded-[5px] cursor-pointer hover:bg-[#28816c] transition duration-[700ms] hover:text-[#f1f1f5]">Curriculo</button>
            </div>
            <img src={image} alt="Elias Ribeiro" className="h-100"/>
        </div>
    )
};

export default Home;