import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsentContext } from '../context/CookieConsentContext';
import { Link } from 'react-router-dom';

function Backdrop({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
      onClick={onClick}
      aria-hidden
    />
  );
}

export default function CookieSettings() {
  const {
    consent,
    setConsent,
    isSettingsOpen,
    closeCookieSettings,
  } = useCookieConsentContext();

  if (!isSettingsOpen) return null;

  const handleSave = (value) => {
    setConsent(value);
    closeCookieSettings();
  };

  return (
    <Fragment>
      <Backdrop onClick={closeCookieSettings} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed left-1/2 top-1/2 z-[101] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="rounded-2xl bg-slate-800 border border-white/10 shadow-xl shadow-black/30 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 id="cookie-settings-title" className="text-xl font-semibold text-white">
                Cookie preferences
              </h2>
              <button
                type="button"
                onClick={closeCookieSettings}
                className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Choose how we use cookies. You can read more in our{' '}
              <Link to="/cookie-policy" className="text-[#F97316] hover:text-[#ea580c] underline underline-offset-2" onClick={closeCookieSettings}>
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => handleSave('accepted')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  consent === 'accepted'
                    ? 'bg-[#F97316] text-white ring-2 ring-[#F97316] ring-offset-2 ring-offset-slate-800'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="block font-medium">Accept All</span>
                <span className="block mt-0.5 text-slate-400 text-xs">Analytics and marketing cookies enabled.</span>
              </button>
              <button
                type="button"
                onClick={() => handleSave('rejected')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  consent === 'rejected'
                    ? 'bg-[#F97316] text-white ring-2 ring-[#F97316] ring-offset-2 ring-offset-slate-800'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="block font-medium">Reject All</span>
                <span className="block mt-0.5 text-slate-400 text-xs">Only essential cookies.</span>
              </button>
              <button
                type="button"
                onClick={() => handleSave('necessary')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  consent === 'necessary'
                    ? 'bg-[#F97316] text-white ring-2 ring-[#F97316] ring-offset-2 ring-offset-slate-800'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="block font-medium">Only Necessary</span>
                <span className="block mt-0.5 text-slate-400 text-xs">Essential cookies only; no analytics or marketing.</span>
              </button>
            </div>
            <p className="mt-5 text-slate-500 text-xs">
              Your choice is saved in this browser. Clearing site data will show the banner again.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
}
