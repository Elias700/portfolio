import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext.tsx';

// 1. Definição do Tipo de Propriedades (Adicionando a função de clique do botão)
export type CertificateProps = {
    name: string;
    issuer: string;
    imageUrl: string;
    credentialUrl: string; // Manter, mas será usado para a imagem grande
    issuedDate?: string;
    onVerifyClick: (imageUrl: string) => void; // NOVO: Função chamada ao clicar no botão
};

const CertificateCard: React.FC<CertificateProps> = ({ 
    name, 
    issuer, 
    imageUrl, 
    credentialUrl, 
    issuedDate,
    onVerifyClick // NOVO: Função passada pelo pai
}) => {
    const { t } = useTranslation();
 
    // Usaremos 'credentialUrl' como o caminho para a imagem grande do certificado
    const fullCertificateUrl = credentialUrl;

    return (
        <div 
            className="relative flex flex-col rounded-xl bg-clip-border shadow-md transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00B58C] bg-[var(--card-bg)]"
        >
            {/* 2. Área da Imagem/Logo (Continua não clicável) */}
            <div 
                className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[16/9] sm:aspect-[4/3] flex items-center justify-center p-4"
            >
                <img
                    src={imageUrl} // Imagem da logo/miniatura
                    alt={`Logo da ${issuer}`}
                    className="w-full h-full object-contain" 
                />
            </div>
            
            {/* 3. Corpo do Card */}
            <div className="px-5 py-4 md:p-6">
                <h5 
                    className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-[var(--card-title-color)]" 
                    style={{ textShadow: 'var(--card-title-shadow)' }}
                >
                    {name}
                </h5>
                <p className="block font-sans text-sm md:text-base font-light leading-relaxed antialiased text-[var(--card-desc-color)]">
                    **{t('certificates.issuer') || 'Emissor'}:** {issuer}
                </p>
            </div>
            
            {/* 4. Rodapé (Botão de Verificação e Data) */}
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 flex gap-10 justify-between items-center mt-auto">
                {/* Botão de Verificação que abre o Modal */}
                <button 
                    onClick={() => onVerifyClick(fullCertificateUrl)} // CHAMA O MODAL COM A URL DO CERTIFICADO
                    className="select-none rounded-lg bg-[var(--primary-500)] py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[var(--primary-500)]/20 transition-all hover:bg-[var(--primary-400)] hover:shadow-lg hover:shadow-[var(--primary-400)]/40 focus:opacity-90 active:opacity-90 cursor-pointer"
                >
                    {t('certificates.verify') || 'Verificar Certificado'}
                </button>

                {/* Data de Emissão */}
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