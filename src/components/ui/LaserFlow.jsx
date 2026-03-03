import { motion } from 'framer-motion';

/**
 * Horizontal laser/line sweep effect.
 */
export default function LaserFlow({ className = '' }) {
  return (
    <div className={`relative h-px overflow-hidden bg-slate-800 rounded-full ${className}`}>
      <motion.div
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-80"
        animate={{ left: ['-128px', '100%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
