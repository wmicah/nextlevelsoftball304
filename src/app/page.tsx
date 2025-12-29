"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center py-12 md:py-20 overflow-hidden bg-[#0E0F11]">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3AAFFF]">
                BIOMECHANICALLY INFORMED PITCHING DEVELOPMENT
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F5F7FA]">
                Biomechanics + Coaching That Builds Elite Pitchers.
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-[#A7B1BA] leading-relaxed">
                Expert coaching that combines biomechanical analysis, strength development, and personalized feedback to help pitchers throw harder, move more efficiently, and compete at the next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#coaching-info"
                  className="inline-flex items-center justify-center rounded-lg bg-[#3AAFFF] px-8 py-3.5 text-sm font-semibold text-[#0E0F11] transition-all hover:bg-[#74C9FF] hover:shadow-[0_0_16px_rgba(58,175,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3AAFFF] focus:ring-offset-2 focus:ring-offset-[#0E0F11]"
                >
                  View Coaching Options
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-[#2A2E33] px-8 py-3.5 text-sm font-medium text-[#A7B1BA] transition-colors hover:text-[#F5F7FA] hover:border-[#3AAFFF] focus:outline-none focus:ring-2 focus:ring-[#3AAFFF] focus:ring-offset-2 focus:ring-offset-[#0E0F11]"
                >
                  How the evaluation works
                </Link>
              </div>
            </div>
            
            {/* Right: Biomechanical Visualization */}
            <div className="relative w-full aspect-[4/5] md:aspect-square rounded-xl bg-[#121417] border border-[#2A2E33] overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D21] to-[#121417]" />
              
              {/* Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(58,175,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(58,175,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Pitching Motion Diagram */}
              <svg className="absolute inset-0 w-full h-full" viewBox="50 50 300 350" preserveAspectRatio="xMidYMid meet">
                {/* Reference lines */}
                <line x1="200" y1="50" x2="200" y2="400" stroke="#2A2E33" strokeWidth="1.5" opacity="0.3" />
                <line x1="50" y1="350" x2="350" y2="350" stroke="#2A2E33" strokeWidth="1.5" opacity="0.3" />
                
                {/* Ground line */}
                <line x1="50" y1="390" x2="350" y2="390" stroke="#3AAFFF" strokeWidth="3" opacity="0.5" />
                
                {/* Pitcher silhouette (simplified stick figure) - LARGER */}
                {/* Body */}
                <line x1="200" y1="100" x2="200" y2="320" stroke="#3AAFFF" strokeWidth="5" opacity="0.7" />
                
                {/* Head */}
                <circle cx="200" cy="75" r="25" fill="none" stroke="#3AAFFF" strokeWidth="3" opacity="0.7" />
                
                {/* Legs */}
                <line x1="200" y1="320" x2="175" y2="390" stroke="#3AAFFF" strokeWidth="5" opacity="0.7" />
                <line x1="200" y1="320" x2="225" y2="390" stroke="#3AAFFF" strokeWidth="5" opacity="0.7" />
                
                {/* Arm circle path (full rotation) - LARGER */}
                <path
                  d="M 200 120 Q 280 170 300 240 Q 280 310 200 360 Q 120 310 100 240 Q 120 170 200 120"
                  fill="none"
                  stroke="#3AAFFF"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                  opacity="0.5"
                />
                
                {/* Arm positions (key points in motion) - LARGER */}
                {/* 12 o'clock */}
                <circle cx="200" cy="120" r="6" fill="#3AAFFF" opacity="0.9" />
                <line x1="200" y1="120" x2="200" y2="145" stroke="#3AAFFF" strokeWidth="3" opacity="0.6" />
                
                {/* 3 o'clock */}
                <circle cx="300" cy="240" r="6" fill="#3AAFFF" opacity="0.9" />
                <line x1="300" y1="240" x2="275" y2="240" stroke="#3AAFFF" strokeWidth="3" opacity="0.6" />
                
                {/* 6 o'clock */}
                <circle cx="200" cy="360" r="6" fill="#3AAFFF" opacity="0.9" />
                <line x1="200" y1="360" x2="200" y2="335" stroke="#3AAFFF" strokeWidth="3" opacity="0.6" />
                
                {/* 9 o'clock */}
                <circle cx="100" cy="240" r="6" fill="#3AAFFF" opacity="0.9" />
                <line x1="100" y1="240" x2="125" y2="240" stroke="#3AAFFF" strokeWidth="3" opacity="0.6" />
                
                {/* Release point (highlighted) - LARGER */}
                <circle cx="280" cy="220" r="8" fill="#00E5FF" opacity="0.95" />
                <circle cx="280" cy="220" r="14" fill="none" stroke="#00E5FF" strokeWidth="3" opacity="0.6" />
                
                {/* Velocity vector (ball path) - LARGER */}
                <line
                  x1="280"
                  y1="220"
                  x2="330"
                  y2="150"
                  stroke="#00E5FF"
                  strokeWidth="4"
                  opacity="0.9"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Arrow marker - LARGER */}
                <defs>
                  <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#00E5FF" opacity="0.9" />
                  </marker>
                </defs>
                
                {/* Data points / measurement markers - LARGER */}
                <g opacity="0.6">
                  <line x1="200" y1="120" x2="215" y2="105" stroke="#3AAFFF" strokeWidth="2" />
                  <text x="220" y="110" fill="#3AAFFF" fontSize="12" fontFamily="monospace" fontWeight="600">0°</text>
                  
                  <line x1="300" y1="240" x2="315" y2="240" stroke="#3AAFFF" strokeWidth="2" />
                  <text x="320" y="245" fill="#3AAFFF" fontSize="12" fontFamily="monospace" fontWeight="600">90°</text>
                  
                  <line x1="200" y1="360" x2="215" y2="375" stroke="#3AAFFF" strokeWidth="2" />
                  <text x="220" y="380" fill="#3AAFFF" fontSize="12" fontFamily="monospace" fontWeight="600">180°</text>
                  
                  <line x1="100" y1="240" x2="85" y2="240" stroke="#3AAFFF" strokeWidth="2" />
                  <text x="70" y="245" fill="#3AAFFF" fontSize="12" fontFamily="monospace" fontWeight="600">270°</text>
                </g>
                
                {/* Stride measurement - LARGER */}
                <line x1="200" y1="390" x2="175" y2="390" stroke="#74C9FF" strokeWidth="3" strokeDasharray="3 3" />
                <line x1="200" y1="385" x2="200" y2="395" stroke="#74C9FF" strokeWidth="3" />
                <line x1="175" y1="385" x2="175" y2="395" stroke="#74C9FF" strokeWidth="3" />
                <text x="187" y="380" fill="#74C9FF" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="600">Stride</text>
              </svg>
              
              {/* Data visualization overlay (bottom right) */}
              <div className="absolute bottom-4 right-4 w-36 h-24 rounded-lg bg-[#1A1D21]/95 border border-[#2A2E33] p-2 backdrop-blur-sm">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  {/* Graph axes */}
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#2A2E33" strokeWidth="1.5" />
                  <line x1="10" y1="50" x2="10" y2="10" stroke="#2A2E33" strokeWidth="1.5" />
                  
                  {/* Velocity trend line */}
                  <polyline
                    points="10,45 25,42 40,38 55,35 70,32 85,30"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2.5"
                  />
                  
                  {/* Data points */}
                  <circle cx="10" cy="45" r="2" fill="#3AAFFF" />
                  <circle cx="25" cy="42" r="2" fill="#3AAFFF" />
                  <circle cx="40" cy="38" r="2" fill="#3AAFFF" />
                  <circle cx="55" cy="35" r="2" fill="#3AAFFF" />
                  <circle cx="70" cy="32" r="2" fill="#3AAFFF" />
                  <circle cx="85" cy="30" r="2.5" fill="#00E5FF" />
                  
                  {/* Labels */}
                  <text x="50" y="58" fill="#A7B1BA" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="500">Time</text>
                  <text x="4" y="30" fill="#A7B1BA" fontSize="6" fontFamily="monospace" fontWeight="500">MPH</text>
                </svg>
              </div>
              
              {/* Stat Tag */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-[#1A1D21]/95 border border-[#2A2E33] px-4 py-2.5 backdrop-blur-sm">
                <p className="text-xs font-medium text-[#A7B1BA] mb-1 leading-tight">Average Velocity Gain</p>
                <p className="text-lg font-bold text-[#3AAFFF] leading-tight">+3–5 MPH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section id="why-this-works" className="py-20 md:py-32 bg-[#121417]">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3AAFFF] mb-4">
              WHY THIS WORKS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#F5F7FA]">
              Biomechanics Backed by Real Coaching.
            </h2>
            <p className="text-lg text-[#A7B1BA] leading-relaxed">
              Our approach combines scientific analysis with practical coaching experience. Every pitcher receives personalized attention to their unique movement patterns, strength needs, and performance goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Mechanics Optimization */}
            <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8 transition-all hover:-translate-y-1 hover:border-[#3AAFFF]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="w-16 h-16 rounded-lg bg-[#121417] border border-[#2A2E33] flex items-center justify-center mb-6">
                <svg className="w-full h-full p-2" viewBox="0 0 64 64">
                  {/* Video frame */}
                  <rect x="8" y="8" width="48" height="36" fill="none" stroke="#3AAFFF" strokeWidth="2" rx="2" />
                  {/* Play button overlay */}
                  <circle cx="32" cy="26" r="8" fill="#3AAFFF" fillOpacity="0.2" stroke="#3AAFFF" strokeWidth="1.5" />
                  <path d="M 29 23 L 29 29 L 35 26 Z" fill="#3AAFFF" />
                  {/* Motion analysis lines */}
                  <path d="M 12 20 Q 20 18, 28 20 T 44 20" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
                  <path d="M 12 28 Q 20 26, 28 28 T 44 28" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
                  {/* Data points */}
                  <circle cx="20" cy="20" r="1.5" fill="#00E5FF" />
                  <circle cx="28" cy="20" r="1.5" fill="#00E5FF" />
                  <circle cx="36" cy="20" r="1.5" fill="#00E5FF" />
                  <circle cx="44" cy="20" r="1.5" fill="#00E5FF" />
                  {/* Analysis grid overlay */}
                  <line x1="20" y1="8" x2="20" y2="44" stroke="#2A2E33" strokeWidth="0.5" opacity="0.5" />
                  <line x1="32" y1="8" x2="32" y2="44" stroke="#2A2E33" strokeWidth="0.5" opacity="0.5" />
                  <line x1="44" y1="8" x2="44" y2="44" stroke="#2A2E33" strokeWidth="0.5" opacity="0.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F5F7FA]">
                Mechanics Optimization
              </h3>
              <p className="text-[#A7B1BA] leading-relaxed">
                Detailed video analysis breaks down arm circle, stride length, posture, and timing. We identify inefficiencies and provide targeted drills to improve movement quality and reduce injury risk.
              </p>
            </div>
            
            {/* Card 2: Strength & Power Development */}
            <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8 transition-all hover:-translate-y-1 hover:border-[#3AAFFF]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="w-16 h-16 rounded-lg bg-[#121417] border border-[#2A2E33] flex items-center justify-center mb-6">
                <svg className="w-full h-full p-2" viewBox="0 0 64 64">
                  {/* Progress chart */}
                  <rect x="8" y="8" width="48" height="48" fill="none" stroke="#2A2E33" strokeWidth="1" rx="2" />
                  {/* Axes */}
                  <line x1="12" y1="52" x2="52" y2="52" stroke="#2A2E33" strokeWidth="1" />
                  <line x1="12" y1="52" x2="12" y2="12" stroke="#2A2E33" strokeWidth="1" />
                  {/* Strength progression line */}
                  <polyline
                    points="12,48 20,42 28,35 36,28 44,20 52,14"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2.5"
                  />
                  {/* Data points */}
                  <circle cx="12" cy="48" r="2" fill="#3AAFFF" />
                  <circle cx="20" cy="42" r="2" fill="#3AAFFF" />
                  <circle cx="28" cy="35" r="2" fill="#3AAFFF" />
                  <circle cx="36" cy="28" r="2" fill="#3AAFFF" />
                  <circle cx="44" cy="20" r="2" fill="#3AAFFF" />
                  <circle cx="52" cy="14" r="2" fill="#00E5FF" />
                  {/* Power indicator */}
                  <rect x="40" y="16" width="8" height="8" fill="#00E5FF" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
                  <text x="44" y="22" fill="#00E5FF" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">+</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F5F7FA]">
                Strength & Power Development
              </h3>
              <p className="text-[#A7B1BA] leading-relaxed">
                Pitcher-specific strength progressions build the foundation for safe velocity gains. We focus on developing power through proper movement patterns, not just lifting heavier weights.
              </p>
            </div>
            
            {/* Card 3: Ongoing Coaching & Feedback */}
            <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8 transition-all hover:-translate-y-1 hover:border-[#3AAFFF]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="w-16 h-16 rounded-lg bg-[#121417] border border-[#2A2E33] flex items-center justify-center mb-6">
                <svg className="w-full h-full p-2" viewBox="0 0 64 64">
                  {/* Communication network diagram */}
                  {/* Central node */}
                  <circle cx="32" cy="32" r="8" fill="#3AAFFF" fillOpacity="0.2" stroke="#3AAFFF" strokeWidth="2" />
                  <circle cx="32" cy="32" r="4" fill="#3AAFFF" />
                  
                  {/* Connected nodes */}
                  <circle cx="16" cy="16" r="5" fill="#00E5FF" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="2.5" fill="#00E5FF" />
                  
                  <circle cx="48" cy="16" r="5" fill="#00E5FF" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="48" cy="16" r="2.5" fill="#00E5FF" />
                  
                  <circle cx="16" cy="48" r="5" fill="#00E5FF" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="16" cy="48" r="2.5" fill="#00E5FF" />
                  
                  <circle cx="48" cy="48" r="5" fill="#00E5FF" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="48" cy="48" r="2.5" fill="#00E5FF" />
                  
                  {/* Connection lines */}
                  <line x1="32" y1="32" x2="16" y2="16" stroke="#3AAFFF" strokeWidth="1.5" opacity="0.4" />
                  <line x1="32" y1="32" x2="48" y2="16" stroke="#3AAFFF" strokeWidth="1.5" opacity="0.4" />
                  <line x1="32" y1="32" x2="16" y2="48" stroke="#3AAFFF" strokeWidth="1.5" opacity="0.4" />
                  <line x1="32" y1="32" x2="48" y2="48" stroke="#3AAFFF" strokeWidth="1.5" opacity="0.4" />
                  
                  {/* Data flow indicators */}
                  <circle cx="24" cy="24" r="1.5" fill="#00E5FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="40" cy="24" r="1.5" fill="#00E5FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F5F7FA]">
                Ongoing Coaching & Feedback
              </h3>
              <p className="text-[#A7B1BA] leading-relaxed">
                Regular check-ins and updated training plans ensure continuous progress. You&apos;ll always know what to work on next, with clear communication and support throughout your development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Coach / Philosophy Section */}
      <section id="about" className="py-20 md:py-32 bg-[#0E0F11]">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Biomechanical Analysis Visualization */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl bg-[#121417] border border-[#2A2E33] overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D21] to-[#121417]" />
              
              {/* Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(58,175,255,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(58,175,255,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              />
              
              {/* Biomechanical Analysis Diagram */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
                {/* Analysis frame */}
                <rect x="50" y="50" width="300" height="400" fill="none" stroke="#2A2E33" strokeWidth="2" opacity="0.5" />
                
                {/* Side view pitcher silhouette */}
                {/* Head */}
                <ellipse cx="200" cy="100" rx="25" ry="30" fill="none" stroke="#3AAFFF" strokeWidth="2" opacity="0.4" />
                
                {/* Torso */}
                <rect x="185" y="130" width="30" height="120" fill="none" stroke="#3AAFFF" strokeWidth="2" opacity="0.4" rx="5" />
                
                {/* Legs */}
                <line x1="195" y1="250" x2="190" y2="380" stroke="#3AAFFF" strokeWidth="3" opacity="0.4" />
                <line x1="205" y1="250" x2="210" y2="380" stroke="#3AAFFF" strokeWidth="3" opacity="0.4" />
                
                {/* Pitching arm (extended) */}
                <line x1="200" y1="150" x2="280" y2="200" stroke="#3AAFFF" strokeWidth="4" opacity="0.6" />
                <circle cx="280" cy="200" r="8" fill="#00E5FF" opacity="0.8" />
                
                {/* Arm angle measurement */}
                <path
                  d="M 200 150 L 200 120 L 280 200"
                  fill="none"
                  stroke="#74C9FF"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                  opacity="0.5"
                />
                <text x="240" y="140" fill="#74C9FF" fontSize="11" fontFamily="monospace" opacity="0.7">Release Angle</text>
                
                {/* Joint markers */}
                <circle cx="200" cy="150" r="5" fill="#3AAFFF" opacity="0.8" />
                <circle cx="200" cy="180" r="4" fill="#3AAFFF" opacity="0.6" />
                <circle cx="200" cy="250" r="4" fill="#3AAFFF" opacity="0.6" />
                
                {/* Kinematic chain visualization */}
                <g opacity="0.3">
                  <line x1="200" y1="100" x2="200" y2="150" stroke="#3AAFFF" strokeWidth="1" />
                  <line x1="200" y1="150" x2="200" y2="180" stroke="#3AAFFF" strokeWidth="1" />
                  <line x1="200" y1="180" x2="200" y2="250" stroke="#3AAFFF" strokeWidth="1" />
                  <line x1="200" y1="250" x2="200" y2="380" stroke="#3AAFFF" strokeWidth="1" />
                </g>
                
                {/* Force vectors */}
                <g opacity="0.6">
                  {/* Ground reaction force */}
                  <line x1="200" y1="380" x2="200" y2="360" stroke="#00E5FF" strokeWidth="3" markerEnd="url(#forceArrow)" />
                  <text x="210" y="365" fill="#00E5FF" fontSize="9" fontFamily="monospace">GRF</text>
                  
                  {/* Rotational force */}
                  <path
                    d="M 200 200 A 30 30 0 0 1 230 185"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2"
                    markerEnd="url(#forceArrow)"
                  />
                  <text x="235" y="180" fill="#3AAFFF" fontSize="9" fontFamily="monospace">Torque</text>
                </g>
                
                {/* Arrow marker for forces */}
                <defs>
                  <marker id="forceArrow" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
                    <polygon points="0 0, 8 2, 0 4" fill="#00E5FF" />
                  </marker>
                </defs>
                
                {/* Analysis data panel (bottom) */}
                <rect x="60" y="420" width="280" height="60" fill="#1A1D21" fillOpacity="0.8" stroke="#2A2E33" strokeWidth="1" rx="4" />
                
                {/* Data labels */}
                <text x="70" y="440" fill="#A7B1BA" fontSize="9" fontFamily="monospace">Arm Speed: 2,400°/s</text>
                <text x="70" y="455" fill="#A7B1BA" fontSize="9" fontFamily="monospace">Knee Flex: 45°</text>
                <text x="70" y="470" fill="#A7B1BA" fontSize="9" fontFamily="monospace">Trunk Rotation: 85°</text>
                
                <text x="200" y="440" fill="#3AAFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Velocity: 58 MPH</text>
                <text x="200" y="455" fill="#3AAFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Spin Rate: 1,850 RPM</text>
                <text x="200" y="470" fill="#3AAFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Efficiency: 87%</text>
              </svg>
              
              {/* Corner accent - kinetic energy visualization */}
              <div className="absolute top-4 right-4 w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 80 80">
                  {/* Energy wave pattern */}
                  <path
                    d="M 10 40 Q 20 30, 30 40 T 50 40 T 70 40"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <path
                    d="M 10 50 Q 20 40, 30 50 T 50 50 T 70 50"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <path
                    d="M 10 60 Q 20 50, 30 60 T 50 60 T 70 60"
                    fill="none"
                    stroke="#3AAFFF"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  
                  {/* Center point */}
                  <circle cx="40" cy="50" r="3" fill="#00E5FF" opacity="0.8" />
                </svg>
              </div>
            </div>
            
            {/* Right: Text Content */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3AAFFF]">
                THE COACH
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA]">
                A Coach Who Blends Science With Real Experience.
              </h2>
              
              <div className="space-y-4 text-lg text-[#A7B1BA] leading-relaxed">
                <p>
                  My coaching philosophy centers on understanding each pitcher as an individual. Biomechanics provides the foundation, but it&apos;s the combination of scientific analysis with practical coaching experience that drives real results.
                </p>
                <p>
                  I believe in long-term athlete development. That means building strength safely, refining mechanics progressively, and maintaining open communication throughout the process. Every pitcher has unique strengths and areas for improvement—my job is to identify both and create a clear path forward.
                </p>
                <p>
                  The goal isn&apos;t just to throw harder today. It&apos;s to develop pitchers who can compete at the next level, stay healthy, and continue improving for years to come.
                </p>
              </div>
              
              {/* Credibility bullets */}
              <ul className="space-y-2 pt-4">
                <li className="flex items-center text-[#A7B1BA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3AAFFF] mr-3" />
                  Years of coaching experience across multiple levels
                </li>
                <li className="flex items-center text-[#A7B1BA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3AAFFF] mr-3" />
                  Biomechanics-focused approach to pitching development
                </li>
                <li className="flex items-center text-[#A7B1BA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3AAFFF] mr-3" />
                  Focus on long-term athlete health and performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Development Works Section */}
      <section id="how-it-works" className="bg-[#121417] py-20 md:py-32">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3AAFFF] mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#F5F7FA]">
              A Clear Plan From Evaluation to Ongoing Coaching.
            </h2>
            <p className="text-lg text-[#A7B1BA] leading-relaxed">
              The development process is straightforward: evaluate, plan, and refine. Each step builds on the previous one to create lasting improvement.
            </p>
          </div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold text-[#3AAFFF] opacity-20 mb-3">01</div>
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">Evaluate</h3>
              </div>
              <p className="text-base text-[#A7B1BA] leading-relaxed">
                We start with a comprehensive evaluation—either through video analysis or in-person assessment. This includes mechanics breakdown, movement quality assessment, and understanding your current strength and performance goals.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold text-[#3AAFFF] opacity-20 mb-3">02</div>
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">Build the Plan</h3>
              </div>
              <p className="text-base text-[#A7B1BA] leading-relaxed">
                Based on the evaluation, I create a customized development plan that addresses mechanics improvements, strength progressions, and specific drills tailored to your needs. The plan is clear, actionable, and prioritized.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold text-[#3AAFFF] opacity-20 mb-3">03</div>
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">Train & Refine</h3>
              </div>
              <p className="text-base text-[#A7B1BA] leading-relaxed">
                Ongoing coaching includes regular check-ins, video review, and plan adjustments as you progress. This ensures continuous improvement and keeps you on track toward your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Proof Section */}
      <section id="results" className="py-20 md:py-32 bg-[#0E0F11]">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Testimonial */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3AAFFF] mb-4">
                RESULTS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#F5F7FA]">
                Real Progress for Serious Pitchers.
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-[#A7B1BA] leading-relaxed italic">
                  &quot;The biomechanical analysis helped us understand exactly what needed to change. Within a few months, we saw smoother mechanics, increased velocity, and most importantly, more confidence on the mound. The ongoing feedback made all the difference.&quot;
                </p>
                <div className="pt-4 border-t border-[#2A2E33]">
                  <p className="font-semibold text-[#F5F7FA]">Parent of 16U Pitcher</p>
                  <p className="text-sm text-[#A7B1BA]">High School Level</p>
                </div>
              </div>
            </div>
            
            {/* Right: Stat Cards */}
            <div className="space-y-6">
              {/* Stat Card 1 */}
              <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A7B1BA] mb-2">
                  Average Velocity Gain
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#3AAFFF] mb-3">+3–5 MPH</p>
                <p className="text-sm text-[#A7B1BA]">
                  Typical improvement range for pitchers following the program consistently
                </p>
              </div>
              
              {/* Stat Card 2 */}
              <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A7B1BA] mb-2">
                  Improved Strike Percentage
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#3AAFFF] mb-3">+12%</p>
                <p className="text-sm text-[#A7B1BA]">
                  Better mechanics lead to improved control and consistency
                </p>
              </div>
              
              {/* Stat Card 3 */}
              <div className="rounded-xl bg-[#1A1D21] border border-[#2A2E33] p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A7B1BA] mb-2">
                  Confidence & Consistency
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#3AAFFF] mb-3">Measurable</p>
                <p className="text-sm text-[#A7B1BA]">
                  Pitchers report increased confidence and more consistent performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section id="coaching-info" className="py-20 md:py-32 bg-[#121417]">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA]">
              Ready to Help Your Pitcher Reach Their Potential?
            </h2>
            <p className="text-lg md:text-xl text-[#A7B1BA] leading-relaxed">
              Get started with a comprehensive evaluation and personalized development plan designed specifically for your pitcher&apos;s needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3AAFFF] px-8 py-3.5 text-sm font-semibold text-[#0E0F11] transition-all hover:bg-[#74C9FF] hover:shadow-[0_0_16px_rgba(58,175,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3AAFFF] focus:ring-offset-2 focus:ring-offset-[#121417]"
              >
                Get Coaching Info
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-sm font-medium text-[#A7B1BA] transition-colors hover:text-[#3AAFFF] focus:outline-none focus:ring-2 focus:ring-[#3AAFFF] focus:ring-offset-2 focus:ring-offset-[#121417] rounded-lg px-4 py-2"
              >
                Questions? Ask about fit first.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
