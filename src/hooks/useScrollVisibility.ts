import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * Hook que detecta quando um elemento entra no viewport (visível na rolagem)
 * Usa IntersectionObserver, com threshold e rootMargin opcionais.
 */
const useScrollVisibility = <T extends HTMLElement>(
  threshold: number = 0.8,
  rootMargin: string = '0px'
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ✅ só observa uma vez
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { elementRef: elementRef as RefObject<T>, isVisible };
};

export default useScrollVisibility;
