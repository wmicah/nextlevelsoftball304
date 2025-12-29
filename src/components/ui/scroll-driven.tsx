"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollDrivenProps {
  children: React.ReactNode;
  index: number;
  totalSteps: number;
  className?: string;
}

export function ScrollDriven({
  children,
  index,
  totalSteps,
  className = "",
}: ScrollDrivenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !container) return;

      const containerRect = container.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when this section starts and ends
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const sectionHeight = sectionRect.height;

      // Calculate scroll progress through the entire container (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - containerTop) / containerHeight
      ));

      // Each step should appear at different progress points
      // Step 0 appears at 0-0.33, Step 1 at 0.33-0.66, Step 2 at 0.66-1.0
      const stepStart = index / totalSteps;
      const stepEnd = (index + 1) / totalSteps;
      const stepProgress = totalSteps; // Total number of "sections" to scroll through

      // Calculate if this step should be visible based on scroll position
      const viewportCenter = windowHeight * 0.5;
      const sectionCenter = sectionRect.top + sectionRect.height / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      
      // Show when section is near viewport center
      const shouldShow = distanceFromCenter < windowHeight * 0.6;

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [index, totalSteps, isVisible]);

  const opacity = isVisible ? 1 : 0;
  const translateY = isVisible ? 0 : 60;
  const scale = isVisible ? 1 : 0.9;

  return (
    <div ref={sectionRef} className={className}>
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}




