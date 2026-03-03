import { Link } from 'react-router-dom';
import { useCookieConsentContext } from '../context/CookieConsentContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openCookieSettings } = useCookieConsentContext();

  return (
    <footer className="glass-panel border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="M&N Digital logo"
                className="h-10 w-10 rounded-lg shadow-sm shadow-black/30"
              />
              <span className="text-xl font-bold text-white">
                M&N Digital
              </span>
            </Link>
            <p className="mt-3 text-slate-400 text-sm max-w-md">
              AI-powered digital growth agency. We deliver faster, smarter solutions through automation and strategy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Quick links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-400 hover:text-[#F97316] text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-[#F97316] text-sm">Pricing</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-[#F97316] text-sm">About</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-[#F97316] text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-slate-400 hover:text-[#F97316] text-sm">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-slate-400 hover:text-[#F97316] text-sm">Cookie Policy</Link></li>
              <li><button type="button" onClick={openCookieSettings} className="text-slate-400 hover:text-[#F97316] text-sm">Manage Cookies</button></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-[#F97316] text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          © {currentYear} M&N Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
