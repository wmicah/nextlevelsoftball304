"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollSequenceProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export function ScrollSequence({
  children,
  index,
  className = "",
}: ScrollSequenceProps) {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalItems = 3; // We know there are 3 steps
    
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const section = sectionRef.current;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section
      const sectionHeight = section.offsetHeight;
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      
      // Calculate progress (0 to 1) as we scroll through the section
      // Start animating when section enters viewport
      let newProgress = (scrollTop + windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5);
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      // Stagger each item - each one starts animating after the previous
      const staggerAmount = 0.25; // Each item starts 25% later
      const startOffset = index * staggerAmount;
      const endOffset = Math.min(1, startOffset + (1 - staggerAmount * (totalItems - 1)));
      
      // Adjust progress to account for stagger
      if (newProgress < startOffset) {
        newProgress = 0;
      } else if (newProgress > endOffset) {
        newProgress = 1;
      } else if (endOffset > startOffset) {
        newProgress = (newProgress - startOffset) / (endOffset - startOffset);
      }
      
      setProgress(newProgress);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [index]);

  // Easing function for smooth animation
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  const easedProgress = easeOutQuart(progress);

  // Animation values
  const opacity = Math.min(1, easedProgress * 1.5);
  const translateY = (1 - easedProgress) * 100;
  const scale = 0.8 + easedProgress * 0.2;

  return (
    <div 
      ref={sectionRef} 
      className="relative flex items-center justify-center"
      style={{ 
        height: "200vh",
        minHeight: "100vh",
      }}
    >
      <div
        ref={contentRef}
        className={`sticky top-0 flex items-center justify-center w-full ${className}`}
        style={{
          height: "100vh",
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

