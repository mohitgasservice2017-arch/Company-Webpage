import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function TiltCard({ children, className, tiltMax = 10, tiltSpeed = 400, tiltGlare = false, tiltMaxGlare = 0.2, tiltScale = 1 }: { children: React.ReactNode, className?: string, tiltMax?: number, tiltSpeed?: number, tiltGlare?: boolean, tiltMaxGlare?: number, tiltScale?: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: tiltMax,
        speed: tiltSpeed,
        glare: tiltGlare,
        "max-glare": tiltMaxGlare,
        scale: tiltScale,
      });
    }
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [tiltMax, tiltSpeed, tiltGlare, tiltMaxGlare, tiltScale]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
