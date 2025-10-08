import image from '../../assets/elias2-removebg-preview.png';
import { 
    FaPhone, FaMapMarkerAlt, FaEnvelope,
    FaLinkedinIn, FaGithub
} from 'react-icons/fa';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer 
            className="w-full pt-8 pb-4 bg-[var(--card-bg)]"
        >
            <h1 className="text-center text-3xl font-semibold mb-6 text-[var(--heading-color)]">
                &lt;Dev Elias/&gt;
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
                        w-32 h-auto sm:w-40 md:w-48 lg:w-60 object-cover 
                        rounded-full 
                        border-4 border-[var(--primary-500)]
                        shadow-xl cursor-pointer
                    `}
                />
            </div>

                <div className={`flex flex-col justify-center space-y-3  text-lg mb-8 md:mb-0`}>
                    
                    <div className="flex items-center gap-3">
                        <FaPhone size={20} className="text-[var(--primary-500)]" />
                        <p className='text-[var(--text-muted)]'>(71) 9 8423-1897</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt size={20} className="text-[var(--primary-500)]" />
                        <p className='text-[var(--text-muted)]'>Salvador - BA</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaEnvelope size={20} className="text-[var(--primary-500)]" />
                        <p className='text-[var(--text-muted)]'>elias_ribeiro07@outlook.com.br</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-[var(--primary-500)] p-2 rounded-3xl">
                    <a 
                        href="https://www.linkedin.com/in/elias-ribeiro700/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] transition hover:scale-[1.10]"
                    >
                        <FaLinkedinIn size={20} color="#ffffff"/>
                    </a>
                    
                    <a 
                        href="https://github.com/Elias700" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--card-bg)] transition hover:scale-[1.10]"
                    >
                        <FaGithub size={20} color="var(--text-primary)" />
                    </a>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--primary-500)] text-center">
                <p className="text-[var(--text-muted)] text-sm">{t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;