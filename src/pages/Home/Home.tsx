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
                <div className="flex gap-5 py-5">
                    <FaGithubSquare className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer"/>
                    <MdEmail className="text-4xl text-[#00B58C] hover:text-[#CBCCD1]  transition duration-[600ms] cursor-pointer"/>
                    <FaLinkedin className="text-4xl text-[#00B58C] hover:text-[#CBCCD1] transition duration-[600ms] cursor-pointer"/>
                </div>
                <button className="bg-[#00B58C] py-4 px-15 text-3xl text-[#CBCCD1] rounded-[5px] cursor-pointer hover:bg-[#28816c] transition duration-[700ms] hover:text-[#f1f1f5]">Curriculo</button>
            </div>
           
           <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="absolute inset-0 z-0 h-100"
                >
                    <path
                    fill="#24A148"
                    d="M60.9,-45.7C74.3,-31.8,77.4,-6.7,69.7,11.5C62,29.7,43.6,41,25.9,46.9C8.2,52.7,-8.8,53.2,-18.1,45.6C-27.4,38.1,-29,22.5,-37.7,3.2C-46.4,-16.1,-62.2,-39.1,-57.1,-51.1C-52,-63.2,-26,-64.2,-1.1,-63.3C23.8,-62.4,47.5,-59.6,60.9,-45.7Z"
                    transform="translate(100 100)"
                    />
                </svg>

                <img
                    src={image}
                    alt="Elias Ribeiro"
                    className="relative z-10 h-100"
                />
            </div>

        </div>
    )
};

export default Home;