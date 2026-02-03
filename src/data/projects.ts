
import Nikel from '../assets/projeto-nikel.png';
import Batman from '../assets/projeto-batman.png';
import RotaDoMar from '../assets/projeto-rotadomar.png';
import ProjetoEmAndamento from '../assets/projetoEmAndamento.png';

import type { Project } from '../types/projects';

export const projects: Project[] = [
    {
        id: 1,
        imageUrl: Nikel,
        deploy: {
            url: 'https://nikel.vercel.app',
        },
        github: {
            url: 'https://github.com/Elias700/Nikel',
        },
    },
    {
        id: 2,
        imageUrl: Batman,
        deploy: {
            url: 'https://site-batman.vercel.app',
        },
        github: {
            url: 'https://github.com/Elias700/Site-Batman',
        },
    },
    {
        id: 3,
        imageUrl: RotaDoMar,
        deploy: {
            url: 'https://rota-do-mar.vercel.app',
        },
        github: {
            url: 'https://github.com/Elias700/Rota-do-Mar',
        },
    },
    {
        id: 4,
        imageUrl: ProjetoEmAndamento,
        github: {
            url: 'https://github.com/Elias700/MoneyTrack',
        },
        figma: {
            url: 'https://www.figma.com/proto/U8meuPnj6bH074s6CCPZi6/MoneyTrack?node-id=61-85&t=PGOEw1nMZFY1XyDt-0&scaling=contain&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=61%3A85&show-proto-sidebar=1',
        }
    },
];
