// src/hooks/useScrollVisibility.ts

import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react'; // Importa o tipo RefObject para clareza

/**
 * Hook customizado para detectar quando um elemento HTML entra no viewport durante a rolagem.
 * @param threshold O ponto de visibilidade (0.0 a 1.0) para acionar o efeito.
 * @returns Um objeto contendo a referência (Ref) para o elemento e um booleano de visibilidade.
 */
// T é o tipo genérico, que deve estender HTMLElement (ex: HTMLDivElement, HTMLImageElement)
const useScrollVisibility = <T extends HTMLElement>(threshold = 0.8) => {
    const [isVisible, setIsVisible] = useState(false);
    // A Ref agora é do tipo genérico T
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Usamos elementRef.current, que terá o tipo T
            if (elementRef.current && !isVisible) {
                const { top } = elementRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight * threshold) {
                    setIsVisible(true);
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible, threshold]);

    // Forçamos o retorno da RefObject<T> para que seja compatível com a tipagem do React
    return { elementRef: elementRef as RefObject<T>, isVisible };
};

export default useScrollVisibility;