"use client";

import { useEffect, useRef, useState } from "react";

interface ConnectedNodeProps {
  label: string;
  value: string;
  position: { top: string; left?: string; right?: string };
  delay?: number;
  connectTo?: { x: number; y: number };
}

export function ConnectedNode({ label, value, position, delay = 0, connectTo }: ConnectedNodeProps) {
  const [nodePosition, setNodePosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (nodeRef.current) {
        const time = Date.now() * 0.001 + delay;
        const x = Math.sin(time) * 1.5;
        const y = Math.cos(time * 0.7) * 1.5;
        setNodePosition({ x, y });
      }
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      ref={nodeRef}
      className="absolute rounded-lg bg-[#2D2F33] px-3 py-1.5 border border-[#34363B] backdrop-blur-sm whitespace-nowrap z-20"
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        transform: `translate(${nodePosition.x}px, ${nodePosition.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="text-xs font-mono text-[#4BB8FF]">
        {label} <span className="text-[#D9D9DF]">•</span> {value}
      </div>
    </div>
  );
}




