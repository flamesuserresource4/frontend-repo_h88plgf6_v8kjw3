import React from 'react'
import { Globe, Phone, MessageCircleMore } from 'lucide-react'

const Navbar = ({ t, lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0b1220]/80 to-transparent backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-white font-semibold tracking-wide text-lg">
          <span className="text-amber-400">Golden</span> Carthage
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/90 text-sm">
          <a href="#home" className="hover:text-white">{t.nav.home}</a>
          <a href="#rooms" className="hover:text-white">{t.nav.rooms}</a>
          <a href="#offers" className="hover:text-white">{t.nav.offers}</a>
          <a href="#spa" className="hover:text-white">{t.nav.spa}</a>
          <a href="#restaurants" className="hover:text-white">{t.nav.restaurants}</a>
          <a href="#events" className="hover:text-white">{t.nav.events}</a>
          <a href="#gallery" className="hover:text-white">{t.nav.gallery}</a>
          <a href="#location" className="hover:text-white">{t.nav.location}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={()=>window.open('https://wa.me/21600000000','_blank')} className="hidden sm:inline-flex items-center gap-2 text-white/90 hover:text-white">
            <MessageCircleMore size={18} /> WhatsApp
          </button>
          <a href="tel:+21600000000" className="hidden sm:inline-flex items-center gap-2 text-white/90 hover:text-white">
            <Phone size={18} /> +216 00 000 000
          </a>
          <div className="relative">
            <select value={lang} onChange={(e)=>setLang(e.target.value)} className="rounded-full bg-white/90 text-[#0b1220] text-sm px-3 py-1.5 flex items-center gap-2">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
