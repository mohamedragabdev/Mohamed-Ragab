import React, { useEffect, useState } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check coarse pointer / touch and reduced motion
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasFinePointer && !prefersReducedMotion) {
      setIsEnabled(true);

      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (!isEnabled || !position) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.04), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};
