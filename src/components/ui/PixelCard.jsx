import { motion } from 'framer-motion';

/**
 * Pixel-style card: blocky, stepped corners (8-bit aesthetic).
 * Uses box-shadow to create a pixel border effect.
 */
export default function PixelCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`pixel-card glass-card border border-white/10 rounded-2xl transition-all hover:border-[#F97316]/50 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ boxShadow: '4px 4px 0 0 rgba(0,0,0,0.3)' }}
      style={{
        boxShadow: '4px 4px 0 0 rgba(0,0,0,0.4)',
      }}
    >
      {children}
      <style>{`
        .pixel-card {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </motion.div>
  );
}
