import { motion } from 'framer-motion';

/**
 * Border with orbiting star/sparkle dots and subtle glow.
 */
export default function StarBorder({ children, className = '', color = '#F97316' }) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${className}`} style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent, ${color}40, transparent)` }}>
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.span
          className="absolute w-2 h-2 rounded-full bg-[#F97316] shadow-[0_0_10px_2px_rgba(249,115,22,0.6)]"
          style={{ top: '8px', left: '10%' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.span
          className="absolute w-2 h-2 rounded-full bg-amber-400"
          style={{ top: '8px', right: '20%' }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.span
          className="absolute w-2 h-2 rounded-full bg-[#F97316]"
          style={{ bottom: '8px', left: '30%' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        />
        <motion.span
          className="absolute w-2 h-2 rounded-full bg-amber-300"
          style={{ bottom: '8px', right: '15%' }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
        />
      </div>
      <div className="relative rounded-2xl glass-card p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
