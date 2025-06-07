import React, { useEffect, useRef } from 'react';

const MetaballBackground: React.FC = () => {
  const cursorMetaballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorMetaballRef.current) {
        const metaball = cursorMetaballRef.current;
        metaball.style.left = `${e.clientX - 40}px`;
        metaball.style.top = `${e.clientY - 40}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Static metaballs */}
      <div className="metaball metaball-1" />
      <div className="metaball metaball-2" />
      <div className="metaball metaball-3" />
      
      {/* Cursor-following metaball */}
      <div
        ref={cursorMetaballRef}
        className="metaball cursor-metaball fixed"
        style={{
          background: 'radial-gradient(circle, rgba(249, 196, 22, 0.4) 0%, rgba(212, 175, 55, 0.2) 50%, transparent 100%)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
};

export default MetaballBackground;