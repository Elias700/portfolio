
import Nikel from '../assets/projeto-nikel.png';
import Batman from '../assets/projeto-batman.png';
import RotaDoMar from '../assets/projeto-rotadomar.png';
import ProjetoEmAndamento from '../assets/projetoEmAndamento.png';

import type { Project } from '../types/projects';

export const projects: Project[] = [
    {
        id: 1,
        imageUrl: Nikel,
        deployUrl: 'https://nikel-mx1qow612-elias700s-projects.vercel.app/',
        githubUrl: 'https://github.com/Elias700/Nikel',
        figmaUrl: '',
    },
    {
        id: 2,
        imageUrl: Batman,
        deployUrl: 'https://site-batman-roe9a5tt4-elias700s-projects.vercel.app/',
        githubUrl: 'https://github.com/Elias700/Site-Batman',
        figmaUrl: '',
    },
    {
        id: 3,
        imageUrl: RotaDoMar,
        deployUrl: 'https://rota-do-mar.vercel.app/',
        githubUrl: 'https://github.com/Elias700/Rota-do-Mar',
        figmaUrl: '',
    },
    {
        id: 4,
        imageUrl: ProjetoEmAndamento,
        githubUrl: 'https://github.com/Elias700/MoneyTrack',
        figmaUrl: '',
    },
];

