// Animation utility functions and hooks
import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for scroll animations
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Stagger animation for lists
export const useStaggerAnimation = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [ref, isVisible] = useScrollAnimation({ once: true });

  useEffect(() => {
    if (isVisible) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, i * delay);
      }
    }
  }, [isVisible, itemCount, delay]);

  return [ref, visibleItems];
};

// Animation variants for different effects
export const animationVariants = {
  fadeIn: 'opacity-0 animate-fade-in',
  slideUp: 'translate-y-8 opacity-0 transition-all duration-700 ease-out',
  slideUpVisible: 'translate-y-0 opacity-100',
  slideLeft: 'translate-x-8 opacity-0 transition-all duration-700 ease-out',
  slideLeftVisible: 'translate-x-0 opacity-100',
  slideRight: '-translate-x-8 opacity-0 transition-all duration-700 ease-out',
  slideRightVisible: 'translate-x-0 opacity-100',
  scaleIn: 'scale-95 opacity-0 transition-all duration-700 ease-out',
  scaleInVisible: 'scale-100 opacity-100',
  fadeInUp: 'translate-y-4 opacity-0 transition-all duration-500 ease-out',
  fadeInUpVisible: 'translate-y-0 opacity-100'
};

// Counter animation
export const useCountAnimation = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [ref, isVisible] = useScrollAnimation({ once: true });

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [ref, count];
};