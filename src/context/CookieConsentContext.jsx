import { createContext, useContext, useState } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieConsentContext = createContext(null);

export function useCookieConsentContext() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsentContext must be used within CookieConsentProvider');
  return ctx;
}

export function CookieConsentProvider({ children }) {
  const consentData = useCookieConsent();
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const value = {
    ...consentData,
    isSettingsOpen,
    openCookieSettings: () => setSettingsOpen(true),
    closeCookieSettings: () => setSettingsOpen(false),
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
