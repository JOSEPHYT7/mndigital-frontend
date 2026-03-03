import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the page to top when the route changes.
 * Fixes the issue where clicking a link at the bottom of a page
 * would open the new page still scrolled to the bottom.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Also clear scroll on document in case a nested scroll container is used
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
