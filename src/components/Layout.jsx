import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import LenisScroll from './LenisScroll';
import CookieBanner from './CookieBanner';
import CookieSettings from './CookieSettings';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <LenisScroll />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <CookieSettings />
    </div>
  );
}
