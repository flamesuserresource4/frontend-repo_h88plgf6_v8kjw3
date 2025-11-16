import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useLang } from './LanguageContext'
import { Globe2 } from 'lucide-react'

const navClass = ({ isActive }) => `px-3 py-2 rounded-full text-sm transition-colors ${isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white'}`

export default function Layout() {
  const { t, lang, setLang } = useLang()
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a26] via-[#0c2230] to-[#0e2433] text-white">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-wide">{t.brand}</Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navClass}>{t.nav.home}</NavLink>
            <NavLink to="/rooms" className={navClass}>{t.nav.rooms}</NavLink>
            <NavLink to="/offers" className={navClass}>{t.nav.offers}</NavLink>
            <NavLink to="/spa" className={navClass}>{t.nav.spa}</NavLink>
            <NavLink to="/restaurants" className={navClass}>{t.nav.restaurants}</NavLink>
            <NavLink to="/events" className={navClass}>{t.nav.events}</NavLink>
            <NavLink to="/gallery" className={navClass}>{t.nav.gallery}</NavLink>
            <NavLink to="/location" className={navClass}>{t.nav.location}</NavLink>
            <NavLink to="/contact" className={navClass}>{t.nav.contact}</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : lang === 'fr' ? 'ar' : 'en')} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20">
              <Globe2 size={18} /> <span className="uppercase text-sm">{lang}</span>
            </button>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/70 flex justify-between">
          <p>© {new Date().getFullYear()} {t.brand}. All rights reserved.</p>
          <p>Golden Tulip Gammarth • Mediterranean Luxury</p>
        </div>
      </footer>
    </div>
  )
}
