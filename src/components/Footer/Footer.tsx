import image from '../../assets/elias2-removebg-preview.png';
import { 
    FaPhone, FaMapMarkerAlt, FaEnvelope,
    FaLinkedinIn, FaGithub
} from 'react-icons/fa';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

const Footer = () => {
    const { t } = useTranslation();
    const bgColor = '#2E3138'; 
    const itemColor = 'text-gray-700'; 
    const iconSize = 18; 

    return (
        <footer className={`w-full bg-[${bgColor}] pt-8 pb-4`}>

            <h1 className="text-center text-3xl font-semibold mb-6 text-[#00B58C]">
                &lt;/&gt; Elias Ribeiro
            </h1>


            <div className={`
                flex flex-col md:flex-row 
                justify-around md:justify-between 
                items-center 
                max-w-7xl mx-auto 
                px-4 sm:px-6 lg:px-8
            `}>
                
                <div className="mb-8 md:mb-0 md:mr-8">
                    <img 
                        src={image} 
                        alt="Elias" 
                        className={`
                            h-60 w-60 object-cover 
                            rounded-full 
                            border-4 border-[#00B58C]
                            shadow-xl cursor-pointer
                        `}
                    />
                </div>

                <div className={`flex flex-col justify-center space-y-3 ${itemColor} text-lg mb-8 md:mb-0`}>
                    
                    <div className="flex items-center gap-3">
                        <FaPhone size={iconSize} className="text-[#00B58C]" />
                        <p className='text-gray-500'>(71) 9 8423-1897</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt size={iconSize} className="text-[#00B58C]" />
                        <p className='text-gray-500'>Salvador - BA</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaEnvelope size={iconSize} className="text-[#00B58C]" />
                        <p className='text-gray-500'>elias_ribeiro07@outlook.com.br</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-[#00B58C] p-2 rounded-3xl">
                    <a 
                        href="https://www.linkedin.com/in/elias-ribeiro700/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5]  transition hover:scale-[1.10]"
                    >
                        <FaLinkedinIn size={20} color="#ffffff"/>
                    </a>
                    
                    <a 
                        href="https://github.com/Elias700" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 transition hover:scale-[1.10]"
                    >
                        <FaGithub size={20} color="#ffffff" />
                    </a>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#00B58C] text-center">
                <p className="text-gray-500 text-sm">{t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;