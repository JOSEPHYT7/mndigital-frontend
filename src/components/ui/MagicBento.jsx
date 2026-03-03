import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Bento grid with magnetic-style hover: cards tilt and glow toward cursor.
 */
export default function MagicBento({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function MagicBentoCard({ children, className = '', colSpan = 1, rowSpan = 1 }) {
  const ref = useRef(null);
  const [xy, setXy] = useState([0, 0]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setXy([x * 12, y * 12]);
  };

  const handleMouseLeave = () => setXy([0, 0]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-2xl border border-slate-700/80 bg-slate-800/40 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:border-[#F97316]/40 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] ${className}`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        transform: `perspective(800px) rotateX(${-xy[1]}deg) rotateY(${xy[0]}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative p-6 sm:p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
}
