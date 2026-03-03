import { motion } from 'framer-motion';

const DEFAULT_LOGOS = [
  { name: 'Client', width: 100 },
  { name: 'Partner', width: 100 },
  { name: 'Brand', width: 100 },
  { name: 'Trusted', width: 100 },
  { name: 'Award', width: 100 },
  { name: 'Growth', width: 100 },
];

export default function LogoLoop({ logos = DEFAULT_LOGOS, className = '', speed = 30 }) {
  const list = [...logos, ...logos];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: [0, -((logos.length * 120) + 16 * logos.length)] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {list.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-10 px-6 flex items-center justify-center rounded-lg bg-slate-800/60 border border-slate-700/80 text-slate-500 font-semibold text-sm"
            style={{ minWidth: logo.width || 100 }}
          >
            {logo.name || 'Logo'}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
