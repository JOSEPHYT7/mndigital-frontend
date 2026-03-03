/**
 * Animated electric/energy border using CSS keyframes.
 */
export default function ElectricBorder({ children, className = '' }) {
  return (
    <div className={`electric-border-wrapper relative rounded-2xl p-[1px] ${className}`}>
      <div className="relative rounded-2xl bg-[#0F172A] p-6 sm:p-8 border border-slate-700/50">
        {children}
      </div>
      <style>{`
        .electric-border-wrapper {
          background: linear-gradient(90deg, #0F172A, #F97316 25%, #fbbf24 50%, #F97316 75%, #0F172A);
          background-size: 200% 100%;
          animation: electricBorder 4s ease-in-out infinite;
        }
        @keyframes electricBorder {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
