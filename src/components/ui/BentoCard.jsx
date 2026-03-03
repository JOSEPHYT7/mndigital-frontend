import { motion } from 'framer-motion';

export default function BentoCard({ title, description, icon, href, className = '', size = 'normal', delay = 0 }) {
  const sizeClass = size === 'large' ? 'md:col-span-2 md:row-span-2' : '';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 sm:p-8 overflow-hidden ${sizeClass} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        {icon && <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 text-[#F97316] flex items-center justify-center text-2xl mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">{description}</p>
        {href && (
          <span className="mt-4 inline-flex items-center text-[#F97316] font-medium text-sm group-hover:underline">
            Learn more →
          </span>
        )}
      </div>
    </motion.div>
  );
}
