import { motion } from 'framer-motion';

export default function ProfileCard({
  name,
  role,
  quote,
  image,
  className = '',
  delay = 0,
}) {
  return (
    <motion.div
      className={`rounded-2xl glass-card border border-white/10 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6, borderColor: 'rgba(249, 115, 22, 0.4)', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5)' }}
    >
      <div className="p-8">
        {image ? (
          <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-slate-600" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F97316]/30 to-slate-700 mx-auto border border-slate-600 flex items-center justify-center text-2xl text-[#F97316] font-bold">
            {name.charAt(0)}
          </div>
        )}
        <h3 className="mt-4 text-lg font-semibold text-white text-center">{name}</h3>
        <p className="text-slate-400 text-sm text-center">{role}</p>
        {quote && <p className="mt-4 text-slate-300 text-sm italic text-center">"{quote}"</p>}
      </div>
    </motion.div>
  );
}
