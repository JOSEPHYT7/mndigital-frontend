import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      className={`rounded-2xl glass-card border border-white/10 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4, borderColor: 'rgba(249, 115, 22, 0.5)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.4)' } : undefined}
    >
      {children}
    </motion.div>
  );
}
