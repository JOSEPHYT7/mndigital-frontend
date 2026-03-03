import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsentContext } from '../context/CookieConsentContext';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const { hasChosen, setConsent, openCookieSettings } = useCookieConsentContext();

  return (
    <AnimatePresence>
      {!hasChosen && (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-800/95 border border-white/10 shadow-xl shadow-black/20 backdrop-blur-sm px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We use cookies to improve your experience, analyze traffic, and support marketing where permitted by law. 
                By choosing below you consent in line with our{' '}
                <Link to="/cookie-policy" className="text-[#F97316] hover:text-[#ea580c] underline underline-offset-2">
                  Cookie Policy
                </Link>
                .
              </p>
              <button
                type="button"
                onClick={openCookieSettings}
                className="mt-2 text-slate-500 hover:text-slate-400 text-sm underline underline-offset-2"
              >
                Manage Cookies
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:flex-shrink-0">
              <button
                type="button"
                onClick={() => setConsent('accepted')}
                className="px-5 py-2.5 rounded-xl bg-[#F97316] text-white font-medium text-sm hover:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => setConsent('rejected')}
                className="px-5 py-2.5 rounded-xl border border-white/20 text-slate-300 font-medium text-sm hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => setConsent('necessary')}
                className="px-5 py-2.5 rounded-xl text-slate-400 font-medium text-sm hover:bg-white/5 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors"
              >
                Only Necessary
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
