import { useCallback, useEffect, useState } from 'react';

export const useSmoothScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToElement = useCallback((elementId, offset = 80) => {
    try {
      const element = document.getElementById(elementId);
      if (!element) return;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      setIsScrolling(true);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling state after animation
      const timeoutId = setTimeout(() => setIsScrolling(false), 1000);
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.warn('Scroll error:', error);
      setIsScrolling(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    try {
      setIsScrolling(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      const timeoutId = setTimeout(() => setIsScrolling(false), 1000);
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.warn('Scroll to top error:', error);
      setIsScrolling(false);
    }
  }, []);

  const scrollToSection = useCallback((sectionRef, offset = 80) => {
    try {
      if (!sectionRef?.current) return;

      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      setIsScrolling(true);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const timeoutId = setTimeout(() => setIsScrolling(false), 1000);
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.warn('Scroll to section error:', error);
      setIsScrolling(false);
    }
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToSection,
    isScrolling
  };
};

// Simple scroll animation hook without external dependencies
export const useScrollAnimation = (threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  const observeElement = useCallback((element) => {
    if (!element || !window.IntersectionObserver) return;

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set(prev).add(entry.target.id));
              
              // Add smooth animation classes
              entry.target.classList.remove('opacity-0', 'translate-y-8');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }
          });
        },
        { 
          threshold,
          rootMargin: '0px 0px -50px 0px' 
        }
      );

      observer.observe(element);

      // Return cleanup function
      return () => {
        try {
          observer.unobserve(element);
          observer.disconnect();
        } catch (error) {
          console.warn('Observer cleanup error:', error);
        }
      };
    } catch (error) {
      console.warn('Observer setup error:', error);
      return null;
    }
  }, [threshold]);

  return { visibleElements, observeElement };
};