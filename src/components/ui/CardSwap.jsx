import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ClickSpark from './ClickSpark';

/**
 * Card swap: one featured card at a time with prev/next. Text-only, dotted border → solid on hover (React Bits style).
 */
export default function CardSwap({ items, getLink, getTitle, getDescription }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  const go = (dir) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return items.length - 1;
      if (next >= items.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#F97316]/50"
        >
          <Link to={getLink(item)} className="block p-8 sm:p-12 group">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{getTitle(item)}</h3>
            <p className="mt-3 text-slate-400 max-w-xl">{getDescription(item)}</p>
            <span className="mt-6 inline-flex items-center text-[#F97316] font-semibold">
              View pricing & details →
            </span>
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <ClickSpark>
          <button
            type="button"
            onClick={() => go(-1)}
            className="cursor-target w-12 h-12 rounded-full glass border border-white/10 text-white hover:border-[#F97316]/50 hover:bg-[#F97316]/10 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        </ClickSpark>
        <span className="text-slate-500 text-sm font-medium">
          {index + 1} / {items.length}
        </span>
        <ClickSpark>
          <button
            type="button"
            onClick={() => go(1)}
            className="w-12 h-12 rounded-full glass border border-white/10 text-white hover:border-[#F97316]/50 hover:bg-[#F97316]/10 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </ClickSpark>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-[#F97316]' : 'bg-slate-600 hover:bg-slate-500'}`}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
