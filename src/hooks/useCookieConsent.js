import { useState, useEffect, useRef, useCallback } from 'react';
import {
  getStoredConsent,
  setStoredConsent,
  applyConsentScripts,
} from '../utils/cookieScripts';

const VALID_VALUES = ['accepted', 'rejected', 'necessary'];

export function useCookieConsent() {
  const [consent, setConsentState] = useState(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    setConsentState(getStoredConsent());
  }, []);

  useEffect(() => {
    if (consent !== 'accepted' || loadedRef.current) return;
    loadedRef.current = true;
    applyConsentScripts('accepted');
  }, [consent]);

  const setConsent = useCallback((value) => {
    if (!VALID_VALUES.includes(value)) return;
    setStoredConsent(value);
    setConsentState(value);
    if (value === 'accepted') {
      loadedRef.current = true;
      applyConsentScripts('accepted');
    }
  }, []);

  const hasChosen = consent !== null;

  return {
    consent,
    setConsent,
    hasChosen,
    hasAnalytics: consent === 'accepted',
    hasMarketing: consent === 'accepted',
  };
}
