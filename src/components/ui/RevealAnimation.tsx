
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  distance?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const RevealAnimation = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 30,
  duration = 700,
  triggerOnce = true,
  threshold = 0.1,
}: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold,
    };

    const startStyles = () => {
      if (!currentRef) return;
      
      currentRef.style.opacity = '0';
      currentRef.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
      currentRef.style.transitionDelay = `${delay}ms`;
      
      switch (direction) {
        case 'up':
          currentRef.style.transform = `translateY(${distance}px)`;
          break;
        case 'down':
          currentRef.style.transform = `translateY(-${distance}px)`;
          break;
        case 'left':
          currentRef.style.transform = `translateX(${distance}px)`;
          break;
        case 'right':
          currentRef.style.transform = `translateX(-${distance}px)`;
          break;
        case 'scale':
          currentRef.style.transform = `scale(0.95)`;
          break;
        case 'fade':
        default:
          currentRef.style.transform = 'none';
          break;
      }
    };

    const endStyles = () => {
      if (!currentRef) return;
      currentRef.style.opacity = '1';
      currentRef.style.transform = 'none';
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isInView.current || !triggerOnce) {
            endStyles();
            isInView.current = true;
            if (triggerOnce) {
              observer.unobserve(currentRef);
            }
          }
        } else if (!triggerOnce) {
          isInView.current = false;
          startStyles();
        }
      });
    }, observerOptions);

    startStyles();
    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [direction, delay, distance, duration, triggerOnce, threshold]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default RevealAnimation;
