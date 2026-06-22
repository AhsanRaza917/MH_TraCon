import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return [ref, isVisible];
}

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal();

  const dirMap = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(-30px)',
    right: 'translateX(30px)',
    none: 'none'
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0)' : (dirMap[direction] || dirMap.up),
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
