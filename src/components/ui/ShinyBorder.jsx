export default function ShinyBorder({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-r from-slate-600 via-[#F97316]/80 to-slate-600 ${className}`}>
      <div className="rounded-2xl bg-[#0F172A] p-6 sm:p-8 h-full">
        {children}
      </div>
    </div>
  );
}
