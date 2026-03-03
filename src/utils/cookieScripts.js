const STORAGE_KEY = 'mn_cookie_consent';

export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'accepted' || v === 'rejected' || v === 'necessary' ? v : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {}
}

/**
 * Load analytics scripts. Only call when user has consented ("accepted").
 * Replace with your actual analytics (e.g. Google Analytics, Plausible).
 */
export function loadAnalytics() {
  if (typeof window === 'undefined') return;
  // Example: inject Google Analytics or other analytics script
  // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  // Or load script: const s = document.createElement('script'); s.src = '...'; document.head.appendChild(s);
}

/**
 * Load marketing / advertising scripts. Only call when user has consented ("accepted").
 * Replace with your actual marketing pixels (e.g. Meta, LinkedIn).
 */
export function loadMarketingScripts() {
  if (typeof window === 'undefined') return;
  // Example: inject marketing pixels
  // const s = document.createElement('script'); s.src = '...'; document.head.appendChild(s);
}

/**
 * Apply consent: load or do not load scripts based on choice.
 */
export function applyConsentScripts(consent) {
  if (consent === 'accepted') {
    loadAnalytics();
    loadMarketingScripts();
  }
  // "rejected" and "necessary": do not load analytics or marketing
}
