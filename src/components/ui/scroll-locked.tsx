"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollLockedProps {
  children: React.ReactNode;
  index: number;
  total: number;
  className?: string;
}

export function ScrollLocked({
  children,
  index,
  total,
  className = "",
}: ScrollLockedProps) {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when animation should start (when element enters viewport)
      const startPoint = windowHeight * 0.7; // Start when element is 70% down viewport
      const endPoint = windowHeight * 0.2; // Finish when element is 20% down viewport
      
      // Calculate progress based on element position
      let newProgress = 0;
      
      if (rect.top < startPoint && rect.top > endPoint) {
        // Element is in the animation range
        newProgress = 1 - (rect.top - endPoint) / (startPoint - endPoint);
      } else if (rect.top <= endPoint) {
        // Element has passed the animation point
        newProgress = 1;
      }
      
      // Add staggered delay based on index
      const staggerDelay = index * 0.25; // Each step starts 25% later
      const adjustedProgress = Math.max(0, (newProgress - staggerDelay) / (1 - staggerDelay));
      
      setProgress(Math.max(0, Math.min(1, adjustedProgress)));
    };

    // Use requestAnimationFrame for smoother performance
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
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [index]);

  // Smooth easing function
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(progress);

  const opacity = Math.min(1, easedProgress * 1.2);
  const translateY = (1 - easedProgress) * 80;
  const scale = 0.85 + easedProgress * 0.15;

  return (
    <div ref={elementRef} className={className}>
      <div
        style={{
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

