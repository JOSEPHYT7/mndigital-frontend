import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = 'primary', className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#0F172A]';
  const variants = {
    primary: 'bg-[#F97316] text-white px-6 py-3 hover:bg-[#ea580c]',
    secondary: 'bg-slate-700 text-white px-6 py-3 hover:bg-slate-600 border border-slate-600',
    outline: 'border-2 border-[#F97316] text-[#F97316] px-6 py-3 hover:bg-[#F97316]/10',
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
