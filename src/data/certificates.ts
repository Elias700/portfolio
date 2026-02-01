
// src/data/certificates.ts

import CertificadoResidenciaFase1 from '../assets/CertificationResidencia.png';
import CertificadoResidenciaFase2 from '../assets/certificado-cepedi-fase2.png';
import CertificationProfissao from '../assets/CertificationProfissaoProgramador.png';
import CertificationHoradecodar from '../assets/certificationCSS-HoraDeCodar.png';
import CertificationUnifel from '../assets/CertificationUnifel.png';
import CertificationFigma from '../assets/Certification-Figma.png';
import CertificationGit from '../assets/Certification-GiteVersionamento.png';
import CertificationGithub from '../assets/CertificationGit.png';
import CertificationAlura from '../assets/Certification-alura.png';
import CertificationAlura2 from '../assets/CertificationAlura2.png';
import CertificationReact from '../assets/CertificationReact.png';
import CertificationNucleoAcademy from '../assets/CertificationNucleoAcademy.png';

import type { Certificate } from '../types/certificate';

export const certificates: Certificate[] = [
    {
        id: 1,
        name: "Residência de Software - Fase 1",
        issuer: "Cepedi",
        imageUrl: CertificadoResidenciaFase1,
        credentialUrl: CertificadoResidenciaFase1,
        issuedDate: "Jul 2024"
    },
    {
        id: 2,
        name: "Residência de Software - Fase 2",
        issuer: "Cepedi",
        imageUrl: CertificadoResidenciaFase2,
        credentialUrl: CertificadoResidenciaFase2,
        issuedDate: "Ja 2025"
    },
    {
        id: 3,
        name: "HTML e CSS",
        issuer: "Profissão Programador",
        imageUrl: CertificationProfissao,
        credentialUrl: CertificationProfissao,
        issuedDate: "Maio 2024"
    },
    {
        id: 4,
        name: "Curso básico de CSS",
        issuer: "Hora de Codar",
        imageUrl: CertificationHoradecodar,
        credentialUrl: CertificationHoradecodar,
        issuedDate: "Jan 2025"
    },
    {
        id: 5,
        name: "Front-end",
        issuer: "Salvador Tech - Unifel",
        imageUrl: CertificationUnifel,
        credentialUrl: CertificationUnifel,
        issuedDate: "Abril 2024"
    },
    {
        id: 6,
        name: "Figma para Devs",
        issuer: "Ada Tech",
        imageUrl: CertificationFigma,
        credentialUrl: CertificationFigma,
        issuedDate: "Jan 2025"
    },
    {
        id: 7,
        name: "Git e Versionamento",
        issuer: "Ada Tech",
        imageUrl: CertificationGit,
        credentialUrl: CertificationGit,
        issuedDate: "Dez 2024"
    },
    {
        id: 8,
        name: "Git e Github",
        issuer: "CPDS",
        imageUrl: CertificationGithub,
        credentialUrl: CertificationGithub,
        issuedDate: "Out 2024"
    },
    {
        id: 9,
        name: "HTML e CSS",
        issuer: "Alura",
        imageUrl: CertificationAlura2,
        credentialUrl: CertificationAlura2,
        issuedDate: "Ago 2025"
    },
    {
        id: 10,
        name: "Git e Github",
        issuer: "Alura",
        imageUrl: CertificationAlura,
        credentialUrl: CertificationAlura,
        issuedDate: "Ago 2025"
    },
    {
        id: 11,
        name: "React",
        issuer: "Ada Tech",
        imageUrl: CertificationReact,
        credentialUrl: CertificationReact,
        issuedDate: "Jan 2025"
    },
    {
        id: 12,
        name: "Introdução à programação - SER + TECH",
        issuer: "Núcleo Academy",
        imageUrl: CertificationNucleoAcademy,
        credentialUrl: CertificationNucleoAcademy,
        issuedDate: "Jan 2025"
    }
];
