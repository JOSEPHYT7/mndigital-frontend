import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Stack of cards that scale and reveal on scroll (depth effect).
 */
export default function ScrollStack({ children, className = '', itemDistance = 40, scaleAmount = 0.05 }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.2;
      const end = windowHeight * 0.7;
      const t = Math.max(0, Math.min(1, (rect.top - end) / (start - end)));
      setProgress(t);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={`relative ${className}`}>
      {items.map((child, i) => {
        const depth = i * itemDistance;
        const scale = 1 - (items.length - 1 - i) * scaleAmount + progress * scaleAmount * (items.length - 1 - i);
        const y = (1 - progress) * depth * 0.5;
        const z = i * 10;
        return (
          <motion.div
            key={i}
            className="absolute inset-0 origin-center"
            style={{
              scale,
              y: -y,
              zIndex: z,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
          >
            {child}
          </motion.div>
        );
      })}
      <div className="relative" style={{ minHeight: itemDistance * (items.length - 1) + 200 }} />
    </div>
  );
}

/** Single card for use inside ScrollStack */
export function ScrollStackCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-700/80 bg-slate-800/60 backdrop-blur-xl p-8 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
