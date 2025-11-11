
import { useState } from 'react'; 
import CertificateCard from "./CertificateCard";
import { useTranslation } from "../../i18n/LanguageContext.tsx";
// Importe as imagens dos seus certificados
import CertificationCepedi from '../../assets/certificado-cepedi.png';
import CertificationProfissao from '../../assets/certificado-profissao-programador.png';
import CertificationsHoraDeCodar from '../../assets/certifications-horaDeCodar.png';
import CertificationsUnifel from '../../assets/Certifications-Unifel.png';
import CertificationAdaTech from '../../assets/Certifications-adatech.png';
import CertificationGit from '../../assets/Certification-git.png'
import CertificationGithub from '../../assets/CertificationGithub.png'

const Certifications = () => {
    const { t } = useTranslation();

    // 1. ESTADO PARA O MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Este estado armazena a URL da imagem do certificado em tamanho real
    const [selectedCertificateUrl, setSelectedCertificateUrl] = useState(''); 

    // 2. FUNÇÃO PARA ABRIR O MODAL (passada como onVerifyClick)
    const openCertificateModal = (certificateUrl: string) => {
        setSelectedCertificateUrl(certificateUrl);
        setIsModalOpen(true);
    };

    // 3. FUNÇÃO PARA FECHAR O MODAL
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificateUrl('');
    };

    const certificates = [
        { 
            id: 1, 
            name: "Residência de Software", 
            issuer: "Cepedi", 
            imageUrl: CertificationCepedi, 
            credentialUrl: CertificationCepedi, 
            issuedDate: "Jul 2024" 
        }, 
        { 
            id: 2, 
            name: "HTML e CSS", 
            issuer: "Profissão Programador", 
            imageUrl: CertificationProfissao, 
            credentialUrl: CertificationProfissao, 
            issuedDate: "Maio 2024" 
        }, 
        { 
            id: 3, 
            name: "Curso básico de CSS", 
            issuer: "Hora de Codar", 
            imageUrl: CertificationsHoraDeCodar, 
            credentialUrl: CertificationsHoraDeCodar, 
            issuedDate: "Jan 2025" 
        }, 
        { 
            id: 4, 
            name: "Front-end", 
            issuer: "Salvador Tech - Unifel", 
            imageUrl: CertificationsUnifel, 
            credentialUrl: CertificationsUnifel, 
            issuedDate: "Abril 2024" 
        },
        { 
            id: 5, 
            name: "Curso básico de CSS", 
            issuer: "Hora de Codar", 
            imageUrl: CertificationAdaTech, 
            credentialUrl: CertificationAdaTech, 
            issuedDate: "Jan 2025" 
        },
        { 
            id: 6, 
            name: "Curso básico de CSS", 
            issuer: "Hora de Codar", 
            imageUrl: CertificationGit, 
            credentialUrl: CertificationGit, 
            issuedDate: "Dez 2024" 
        },
        { 
            id: 7, 
            name: "Git e Github", 
            issuer: "CPDS", 
            imageUrl: CertificationGithub, 
            credentialUrl: CertificationGithub, 
            issuedDate: "Out 2024" 
        }
    ];

    return (
        <section className="relative bg-[--body-bg]">
        
            <div className="max-w-6xl mx-auto px-6 py-8 md:px-10 md:py-12">
                <h2 className='text-center text-2xl md:text-3xl text-[var(--heading-color)]'>{t('certifications.title')}</h2>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl text-[var(--subtitle-color)]'>{t('certifications.subtitle')}</h1>
            </div>
            
            <div className="max-w-6xl mx-auto px-4 pb-16 md:px-10 p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-16">
                    {certificates.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            name={cert.name}
                            issuer={cert.issuer}
                            imageUrl={cert.imageUrl}
                            credentialUrl={cert.credentialUrl}
                            issuedDate={cert.issuedDate}
                            onVerifyClick={openCertificateModal} 
                        />
                    ))}
                </div>
            </div>

            {/* 5. O COMPONENTE MODAL (Lightbox) */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity"
                    onClick={closeModal} // Fecha ao clicar fora
                >
                    <div className="relative max-w-5xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedCertificateUrl} 
                            alt="Certificado em tamanho maior" 
                            className="w-full h-full object-contain shadow-2xl rounded-lg" 
                        />
                        {/* Botão de Fechar */}
                        <button 
                            className="absolute top-2 right-2 text-red-700 text-4xl font-bold bg-transparent border-none p-2 cursor-pointer transition hover:text-[var(--primary-500)]"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Certifications;