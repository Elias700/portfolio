
import { useState } from 'react';
import CertificateCard from "./CertificateCard";
import { useTranslation } from "../../i18n/LanguageContext.tsx";

import CertificadoResidencia from '../../assets/CertificationResidencia.png';
import CertificationProfissao from '../../assets/CertificationProfissaoProgramador.png';
import CertificationHoradecodar from '../../assets/certificationCSS-HoraDeCodar.png';
import CertificationUnifel from '../../assets/CertificationUnifel.png';
import CertificationFigma from '../../assets/Certification-Figma.png';
import CertificationGit from '../../assets/Certification-GiteVersionamento.png';
import CertificationGithub from '../../assets/CertificationGit.png';
import CertificationAlura from '../../assets/Certification-alura.png';
import CertificationAlura2 from '../../assets/CertificationAlura2.png';
import CertificationReact from '../../assets/CertificationReact.png';

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
            imageUrl: CertificadoResidencia,
            credentialUrl: CertificadoResidencia,
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
            imageUrl: CertificationHoradecodar,
            credentialUrl: CertificationHoradecodar,
            issuedDate: "Jan 2025"
        },
        {
            id: 4,
            name: "Front-end",
            issuer: "Salvador Tech - Unifel",
            imageUrl: CertificationUnifel,
            credentialUrl: CertificationUnifel,
            issuedDate: "Abril 2024"
        },
        {
            id: 5,
            name: "Figma para Devs",
            issuer: "Ada Tech",
            imageUrl: CertificationFigma,
            credentialUrl: CertificationFigma,
            issuedDate: "Jan 2025"
        },
        {
            id: 6,
            name: "Git e Versionamento",
            issuer: "Ada Tech",
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
        },
        {
            id: 8,
            name: "HTML e CSS",
            issuer: "Alura",
            imageUrl: CertificationAlura2,
            credentialUrl: CertificationAlura2,
            issuedDate: "Ago 2025"
        },
        {
            id: 9,
            name: "Git e Github",
            issuer: "Alura",
            imageUrl: CertificationAlura,
            credentialUrl: CertificationAlura,
            issuedDate: "Ago 2025"
        },
        {
            id: 10,
            name: "React",
            issuer: "Ada Tech",
            imageUrl: CertificationReact,
            credentialUrl: CertificationReact,
            issuedDate: "Jan 2025"
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
                            className="absolute top-2 right-2 text-[var(--error)] text-4xl font-bold bg-transparent border-none p-2 cursor-pointer transition hover:text-[var(--primary-500)]"
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