import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal - Modern viewport reveal container using IntersectionObserver
 * 
 * Features:
 * - Smooth compositor-accelerated opacity & transform reveal
 * - Staggered delays for child cards
 * - Respects prefers-reduced-motion
 * - Threshold triggers smoothly right as element enters the viewport
 * - Works identically across desktop & mobile without layout shift
 */
export default function Reveal({
  children,
  variant = 'fade-up', // 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay = 0,           // milliseconds
  duration = 600,      // milliseconds
  distance = 28,       // pixels for slide
  threshold = 0.12,    // viewport trigger ratio
  className = '',
  as: Component = 'div',
  triggerOnce = true,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px' // triggers slightly before scrolling fully past bottom margin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  // Initial hidden transforms based on variant
  const getHiddenTransform = () => {
    switch (variant) {
      case 'fade-up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'fade-down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'fade-left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'fade-right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'zoom-in':
        return `scale(0.94) translate3d(0, ${distance / 2}px, 0)`;
      case 'fade-in':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getHiddenTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth natural easeOutExpo curve
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal-wrapper ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
