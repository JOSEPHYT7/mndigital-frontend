import { motion } from 'framer-motion';

export default function BlurText({ text, className = '' }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ filter: 'blur(12px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.span>
  );
}
