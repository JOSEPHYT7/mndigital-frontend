import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClickSpark({ children, className = '' }) {
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setSparks((s) => [...s.slice(-8), { id, x, y }]);
    setTimeout(() => setSparks((s) => s.filter((p) => p.id !== id)), 600);
  };

  return (
    <div className={`relative inline-block ${className}`} onClick={handleClick}>
      {children}
      {sparks.map(({ id, x, y }) => (
        <motion.div
          key={id}
          className="absolute pointer-events-none w-2 h-2 rounded-full bg-[#F97316]"
          style={{ left: x, top: y, marginLeft: -4, marginTop: -4 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}
