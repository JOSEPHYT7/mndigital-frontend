import { motion } from 'framer-motion';

export default function GradientText({ children, className = '', delay = 0 }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#F97316] via-amber-400 to-[#F97316] bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.span>
  );
}
