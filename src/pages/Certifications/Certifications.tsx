
import { useState } from 'react';
import CertificateCard from "./CertificateCard";
import { useTranslation } from "../../i18n/LanguageContext.tsx";
import type { FC } from 'react';

import { certificates } from '../../data/certificates';

const Certifications: FC = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedCertificateUrl, setSelectedCertificateUrl] = useState<string>('');

    const openCertificateModal = (certificateUrl: string): void => {
        setSelectedCertificateUrl(certificateUrl);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        setSelectedCertificateUrl('');
    };

    return (
        <section className="relative bg-[--body-bg]">

            <div
                className="
                        max-w-6xl 
                        mx-auto 
                        px-6 py-8 
                        md:px-10 
                        md:py-12
                    "
            >
                <h2
                    className="
                        text-center 
                        text-2xl 
                        md:text-3xl 
                        text-[var(--heading-color)]
                    "
                >
                    {t('certifications.title')}
                </h2>
                <h1
                    className="
                            text-center 
                            text-4xl 
                            md:text-6xl 
                            lg:text-7xl 
                            text-[var(--subtitle-color)]
                        "
                >
                    {t('certifications.subtitle')}
                </h1>
            </div>

            <div
                className="
                    max-w-6xl 
                    mx-auto 
                    px-4 pb-16 
                    md:px-10 p-10
                "
            >
                <div
                    className="
                        grid grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-10 
                        sm:gap-12 
                        md:gap-14 
                        lg:gap-16
                    "
                >
                    {certificates.map((certificate) => (
                        <CertificateCard
                            key={certificate.id}
                            name={certificate.name}
                            issuer={certificate.issuer}
                            imageUrl={certificate.imageUrl}
                            credentialUrl={certificate.credentialUrl}
                            issuedDate={certificate.issuedDate}
                            onVerifyClick={openCertificateModal}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="
                        fixed 
                        inset-0 z-50 
                        flex 
                        items-center 
                        justify-center 
                        bg-black 
                        bg-opacity-80 
                        transition-opacity
                    "
                    onClick={closeModal}
                >
                    <div
                        className="
                                relative 
                                max-w-5xl 
                                max-h-[90vh] 
                                p-4
                            "
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                    >
                        <img
                            src={selectedCertificateUrl}
                            alt="Certificado em tamanho maior"
                            className="w-full h-full object-contain shadow-2xl rounded-lg"
                        />

                        <button
                            className="
                                absolute 
                                top-2 
                                right-2 
                                text-[var(--error)] 
                                text-4xl 
                                font-bold 
                                bg-transparent 
                                border-none 
                                p-2 
                                cursor-pointer 
                                transition 
                                hover:text-[var(--primary-500)]
                            "
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