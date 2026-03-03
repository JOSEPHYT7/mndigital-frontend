import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Subtle crosshair / target cursor that follows mouse (optional, use sparingly).
 */
export default function Crosshair({ className = '', size = 20 }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className={`fixed pointer-events-none z-[9999] mix-blend-difference ${className}`}
      style={{ left: pos.x, top: pos.y, width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.6, scale: 1 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-px h-full bg-[#F97316] opacity-60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-px w-full bg-[#F97316] opacity-60" />
      </div>
      <div className="absolute inset-0 rounded-full border border-[#F97316] opacity-40" />
    </motion.div>
  );
}
