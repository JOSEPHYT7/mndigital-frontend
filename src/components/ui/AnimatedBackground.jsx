import { motion } from 'framer-motion';

/**
 * Animated background for hero/sections: moving gradients and subtle grid.
 */
export default function AnimatedBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Slow-moving gradient orbs */}
      <motion.div
        className="absolute w-[80vmax] h-[80vmax] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)',
          left: '-20vmax',
          top: '-20vmax',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[60vmax] h-[60vmax] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)',
          right: '-15vmax',
          bottom: '-10vmax',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
        animate={{ x: [0, 60], y: [0, 60] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
