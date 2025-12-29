"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollLockedContainerProps {
  children: ReactNode[];
  className?: string;
}

export function ScrollLockedContainer({
  children,
  className = "",
}: ScrollLockedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress through the container (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollTop - containerTop + window.innerHeight * 0.5) / containerHeight)
      );

      // Determine which child should be active based on scroll progress
      const newActiveIndex = Math.min(
        children.length - 1,
        Math.floor(scrollProgress * children.length)
      );

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
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
  }, [children.length, activeIndex]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${children.length * 100}vh` }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{
            opacity: activeIndex === index ? 1 : 0,
            transform: `translateY(${activeIndex === index ? 0 : 50}px) scale(${
              activeIndex === index ? 1 : 0.95
            })`,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            pointerEvents: activeIndex === index ? "auto" : "none",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}




