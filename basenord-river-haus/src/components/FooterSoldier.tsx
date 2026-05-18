import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function FooterSoldier({ footerRef }: { footerRef: React.RefObject<HTMLElement | null> }) {
  const [soldierState, setSoldierState] = useState({ 
    isInside: false, 
    mouseX: 0, 
    mouseY: 0,
    targetX: 100,
    targetY: 50,
    facingRight: true
  });

  const springConfig = { stiffness: 60, damping: 20 };
  const posX = useSpring(100, springConfig);
  const posY = useSpring(50, springConfig);

  const [legPhase, setLegPhase] = useState(0);
  const [flagWavePhase, setFlagWavePhase] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let phase = 0;
    let wavePhase = 0;

    const tick = () => {
      const vx = posX.getVelocity();
      const vy = posY.getVelocity();
      const speed = Math.sqrt(vx * vx + vy * vy);
      
      if (speed > 5) {
        phase += speed * 0.015;
        setLegPhase(phase);
      }
      
      wavePhase += 0.05 + Math.min(speed * 0.005, 0.2);
      setFlagWavePhase(wavePhase);

      animationFrame = requestAnimationFrame(tick);
    };
    
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [posX, posY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const isInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      const radius = 30; 
      
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      
      x = Math.max(radius, Math.min(x, rect.width - radius));
      y = Math.max(radius, Math.min(y, rect.height - radius));

      const currentX = posX.get();
      const facingRight = x >= currentX;

      setSoldierState(prev => {
        return {
          isInside,
          mouseX: e.clientX,
          mouseY: e.clientY,
          targetX: isInside ? x : prev.targetX,
          targetY: isInside ? y : prev.targetY,
          facingRight: isInside ? facingRight : prev.facingRight
        };
      });
      
      if (isInside) {
        posX.set(x);
        posY.set(y);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [footerRef, posX, posY]);

  const vx = posX.getVelocity();
  const vy = posY.getVelocity();
  const speed = Math.sqrt(vx * vx + vy * vy);
  
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <motion.div
        style={{ 
          position: 'absolute', 
          x: posX, 
          y: posY,
          marginTop: -60,
          marginLeft: -40,
        }}
        className="z-50 w-[80px] h-[120px] flex items-center justify-center"
      >
        <motion.div 
          animate={{ scaleX: soldierState.facingRight ? 1 : -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <SideViewSoldier legPhase={legPhase} flagWavePhase={flagWavePhase} speed={speed} />
        </motion.div>
      </motion.div>
    </div>
  );
}

const SideViewSoldier = ({ legPhase, flagWavePhase, speed }: { legPhase: number, flagWavePhase: number, speed: number }) => {
  const clampedSpeed = Math.min(speed, 500); 
  
  const leg1 = Math.sin(legPhase) * 15;
  const leg2 = Math.sin(legPhase + Math.PI) * 15;
  
  const windVelocity = clampedSpeed * 0.08;
  const flagWind = Math.min(25, windVelocity); 
  
  const flagWave1 = Math.sin(flagWavePhase) * 3;
  const flagWave2 = Math.sin(flagWavePhase + 1) * 3;
  const flagWave3 = Math.sin(flagWavePhase + 2) * 3;

  return (
    <div style={{ width: 120, height: 120, position: 'relative' }}>
      <svg width="120" height="120" viewBox="-60 -60 120 120" style={{ overflow: 'visible' }}>
        {/* Horse Back Legs (darker) */}
        <g stroke="#A9A9A9" strokeWidth="6" strokeLinecap="round">
          <line x1={-15 + leg2 * 0.5} y1="20" x2={-15 + leg2} y2="40" />
          <line x1={15 + leg1 * 0.5} y1="20" x2={15 + leg1} y2="40" />
        </g>
        {/* Horse Back Hooves */}
        <g stroke="#333" strokeWidth="6" strokeLinecap="round">
          <line x1={-15 + leg2} y1="40" x2={-15 + leg2 + 2} y2="42" />
          <line x1={15 + leg1} y1="40" x2={15 + leg1 + 2} y2="42" />
        </g>

        {/* Horse Tail */}
        <path d="M -25 0 Q -40 -5 -45 10 Q -40 20 -30 10 Z" fill="#F0F0F0" />
        
        {/* Horse Body */}
        <ellipse cx="0" cy="10" rx="30" ry="18" fill="#FFFFFF" />
        
        {/* Saddle/Saddlecloth area */}
        <path d="M -15 0 L 15 0 L 20 15 L -10 15 Z" fill="#005B9F" />
        <path d="M -15 -2 L 15 -2 L 18 10 L -12 10 Z" fill="#FFD700" />
        
        {/* Horse Neck */}
        <path d="M 20 10 Q 35 0 35 -15 L 20 -5 Z" fill="#FFFFFF" />
        {/* Horse Head */}
        <ellipse cx="35" cy="-20" rx="14" ry="8" fill="#FFFFFF" transform="rotate(30 35 -20)" />
        <circle cx="42" cy="-25" r="2" fill="#1A1A1A" />
        {/* Halter */}
        <path d="M 33 -15 L 43 -26 M 38 -25 L 35 -10 M 20 0 L 35 -10" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M 28 -30 L 24 -24 L 30 -26" fill="#FFFFFF" />

        {/* Soldier Left Leg (Dark Blue) */}
        <path d="M 5 0 L 10 20 L 14 20" stroke="#004A81" strokeWidth="6" strokeLinecap="round" fill="none" />
        <line x1="10" y1="20" x2="14" y2="20" stroke="#333" strokeWidth="6" strokeLinecap="round" />

        {/* Soldier Body */}
        <path d="M -5 -25 L 5 -25 L 10 5 L -5 5 Z" fill="#005B9F" />
        <line x1="-5" y1="-25" x2="8" y2="-5" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Soldier Head */}
        <circle cx="0" cy="-35" r="8" fill="#FFD1B3" />
        {/* Helmet */}
        <path d="M -8 -37 A 8 8 0 0 1 8 -37 Z" fill="#1A1A1A" />
        <path d="M -4 -37 A 4 4 0 0 1 4 -37 Z" fill="#FFD700" />
        {/* Spike */}
        <path d="M 0 -37 L 0 -48" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
        <path d="M 8 -37 Q 12 -33 8 -33" fill="#1A1A1A" />

        {/* Right Arm (Holding flag) */}
        <path d="M 2 -20 Q -5 -10 -15 -15" fill="none" stroke="#005B9F" strokeWidth="5" strokeLinecap="round" />
        <circle cx="-15" cy="-15" r="3" fill="#FFD1B3" />

        {/* Left Arm (Holding reins) */}
        <path d="M 5 -20 Q 15 -10 20 0" fill="none" stroke="#004A81" strokeWidth="5" strokeLinecap="round" />
        
        {/* Flag Pole (held at cx=-15, cy=-15), tilted backward */}
        <line x1="-10" y1="10" x2="-25" y2="-50" stroke="#B8860B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-25" cy="-50" r="3" fill="#FFD700" />
        
        {/* Flag */}
        <path 
           d={`M -22 -38 
               Q ${-40 - flagWind + flagWave1} ${-38 - flagWave2} ${-60 - flagWind} ${-33 - flagWave3}
               L ${-55 - flagWind} ${-15 - flagWave1}
               Q ${-40 - flagWind*0.5 + flagWave2} ${-20 - flagWave1} -18 -22 Z`} 
           fill="#005293" 
        />
        {/* Yellow cross */}
        <path 
           d={`M -20 -30 Q ${-40 - flagWind*0.8} ${-29 - flagWave2} ${-57 - flagWind} ${-24 - flagWave3}`} 
           stroke="#FECB00" strokeWidth="4" fill="none"
        />
        <path 
           d={`M ${-35 - flagWind*0.3} -37 Q ${-35 - flagWind*0.3 + flagWave1} -27 ${-32 - flagWind*0.3} -19`} 
           stroke="#FECB00" strokeWidth="4" fill="none"
        />

        {/* Horse Front Legs (lighter, closer) */}
        <g stroke="#E8E8E8" strokeWidth="6" strokeLinecap="round">
          <line x1={-15 + leg1 * 0.5} y1="20" x2={-15 + leg1} y2="40" />
          <line x1={15 + leg2 * 0.5} y1="20" x2={15 + leg2} y2="40" />
        </g>
        {/* Horse Front Hooves */}
        <g stroke="#333" strokeWidth="6" strokeLinecap="round">
          <line x1={-15 + leg1} y1="40" x2={-15 + leg1 + 2} y2="42" />
          <line x1={15 + leg2} y1="40" x2={15 + leg2 + 2} y2="42" />
        </g>

      </svg>
    </div>
  );
}
