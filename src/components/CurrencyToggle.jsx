import { useState } from 'react';
import { motion } from 'framer-motion';

export const CURRENCIES = { USD: 'USD', INR: 'INR' };
const DEFAULT_RATE = 83; // 1 USD ≈ 83 INR

export function useCurrency() {
  const [currency, setCurrency] = useState(CURRENCIES.USD);
  return { currency, setCurrency, rate: DEFAULT_RATE };
}

export function formatPrice(amountUSD, currency, rate = DEFAULT_RATE) {
  if (currency === CURRENCIES.INR) {
    const inr = Math.round(amountUSD * rate);
    return `₹${inr.toLocaleString('en-IN')}`;
  }
  return `$${typeof amountUSD === 'number' ? amountUSD.toLocaleString() : amountUSD}`;
}

/** For price objects from services: { usd, inr } */
export function formatPriceFromObj(priceObj, currency) {
  if (!priceObj) return '—';
  if (currency === CURRENCIES.INR) return `₹${Number(priceObj.inr).toLocaleString('en-IN')}`;
  return `$${Number(priceObj.usd).toLocaleString()}`;
}

export default function CurrencyToggle({ currency, setCurrency }) {
  return (
    <div className="inline-flex rounded-xl glass p-1 border border-white/10">
      {[CURRENCIES.USD, CURRENCIES.INR].map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {currency === c && (
            <motion.span
              layoutId="currency-bg"
              className="absolute inset-0 bg-[#F97316] rounded-lg"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className={`relative z-10 ${currency === c ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
            {c}
          </span>
        </button>
      ))}
    </div>
  );
}
