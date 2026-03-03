import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35 },
  }),
};

/**
 * List with staggered entrance (slide + fade).
 */
export default function AnimatedList({
  items,
  renderItem,
  className = '',
  variants = defaultVariants,
  direction = 'column',
}) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      style={{ display: 'flex', flexDirection: direction === 'row' ? 'row' : 'column', flexWrap: direction === 'row' ? 'wrap' : 'nowrap', gap: direction === 'row' ? '1rem' : '1.5rem', listStyle: 'none', padding: 0, margin: 0 }}
    >
      {items.map((item, i) => (
        <motion.li key={item?.id ?? i} variants={variants} custom={i}>
          {typeof renderItem === 'function' ? renderItem(item, i) : item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
