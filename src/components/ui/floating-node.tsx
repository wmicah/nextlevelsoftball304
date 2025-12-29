"use client";

import { useEffect, useRef, useState } from "react";

interface FloatingNodeProps {
  label: string;
  value: string;
  initialX?: number;
  initialY?: number;
  delay?: number;
}

export function FloatingNode({ label, value, initialX = 0, initialY = 0, delay = 0 }: FloatingNodeProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (nodeRef.current) {
        const time = Date.now() * 0.001 + delay;
        const x = initialX + Math.sin(time) * 2;
        const y = initialY + Math.cos(time * 0.7) * 2;
        setPosition({ x, y });
      }
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [initialX, initialY, delay]);

  return (
    <div
      ref={nodeRef}
      className="rounded-lg bg-[#2D2F33] px-3 py-1.5 border border-[#34363B] backdrop-blur-sm whitespace-nowrap"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="text-xs font-mono text-[#4BB8FF]">
        {label} <span className="text-[#D9D9DF]">•</span> {value}
      </div>
    </div>
  );
}

