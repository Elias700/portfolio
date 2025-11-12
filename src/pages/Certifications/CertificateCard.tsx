import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext.tsx';
import useScrollVisibility from '../../hooks/useScrollVisibility.ts'; // <-- importa o hook

export type CertificateProps = {
    name: string;
    issuer: string;
    imageUrl: string;
    credentialUrl: string;
    issuedDate?: string;
    onVerifyClick: (imageUrl: string) => void;
};

const CertificateCard: React.FC<CertificateProps> = ({ 
    name, 
    issuer, 
    imageUrl, 
    credentialUrl, 
    issuedDate,
    onVerifyClick
}) => {
    const { t } = useTranslation();

    // ✅ Usa o hook para detectar visibilidade
    const { elementRef, isVisible } = useScrollVisibility<HTMLDivElement>(0.8);

    const fullCertificateUrl = credentialUrl;

    return (
        <div
            ref={elementRef} // referência para o hook
            className={`relative flex flex-col rounded-xl bg-clip-border shadow-md transition-all duration-700 ease-out transform
                ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100'  // visível
                    : 'opacity-0 translate-y-10 scale-95'   // escondido
                }
                hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C] bg-[var(--card-bg)]
            `}
        >
            {/* Imagem / Logo */}
            <div 
                className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[16/9] sm:aspect-[4/3] flex items-center justify-center p-4"
            >
                <img
                    src={imageUrl}
                    alt={`Logo da ${issuer}`}
                    className="w-full h-full object-contain"
                />
            </div>
            
            {/* Corpo */}
            <div className="px-5 py-4 md:p-6">
                <h5 
                    className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-[var(--card-title-color)]" 
                    style={{ textShadow: 'var(--card-title-shadow)' }}
                >
                    {name}
                </h5>
                <p className="block font-sans text-sm md:text-base font-light leading-relaxed antialiased text-[var(--card-desc-color)]">
                    <strong>{t('certificates.issuer') || 'Emissor'}:</strong> {issuer}
                </p>
            </div>
            
            {/* Rodapé */}
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 flex gap-10 justify-between items-center mt-auto">
                <button 
                    onClick={() => onVerifyClick(fullCertificateUrl)}
                    className="select-none rounded-lg bg-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[var(--primary-500)]/20 transition-all hover:bg-[var(--primary-400)] hover:shadow-lg hover:shadow-[var(--primary-400)]/40 focus:opacity-90 active:opacity-90 cursor-pointer"
                >
                    {t('certificates.verify') || 'Verificar Certificado'}
                </button>

                {issuedDate && (
                    <span className="font-sans text-sm font-semibold text-[var(--text-muted)]">
                        {issuedDate}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;
