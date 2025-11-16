import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    brand: 'Golden Carthage',
    nav: {
      home: 'Home', rooms: 'Rooms', offers: 'Offers', spa: 'Spa', restaurants: 'Restaurants', events: 'Events / MICE', gallery: 'Gallery', location: 'Location', contact: 'Contact'
    },
    booking: {
      title: 'Book your stay', checkIn: 'Check-in', checkOut: 'Check-out', guests: 'Guests', adults: 'Adults', children: 'Children', room: 'Room type', book: 'Book Now'
    },
    rooms: 'Rooms',
    offers: 'Offers',
    spa: 'Spa',
    restaurants: 'Restaurants',
    events: 'Events / MICE',
    gallery: 'Gallery',
    location: 'Location',
    contact: 'Contact',
    concierge: { title: 'AI Concierge', placeholder: 'Ask about spa, dining, or bookings...', send: 'Send' },
    reviews: { title: 'Guest Reviews', ta: 'TripAdvisor', google: 'Google' }
  },
  fr: {
    brand: 'Golden Carthage',
    nav: {
      home: 'Accueil', rooms: 'Chambres', offers: 'Offres', spa: 'Spa', restaurants: 'Restaurants', events: 'Événements / MICE', gallery: 'Galerie', location: 'Localisation', contact: 'Contact'
    },
    booking: {
      title: 'Réservez votre séjour', checkIn: 'Arrivée', checkOut: 'Départ', guests: 'Voyageurs', adults: 'Adultes', children: 'Enfants', room: 'Type de chambre', book: 'Réserver'
    },
    rooms: 'Chambres',
    offers: 'Offres',
    spa: 'Spa',
    restaurants: 'Restaurants',
    events: 'Événements / MICE',
    gallery: 'Galerie',
    location: 'Localisation',
    contact: 'Contact',
    concierge: { title: 'Concierge IA', placeholder: 'Demandez le spa, la restauration, ou une réservation...', send: 'Envoyer' },
    reviews: { title: 'Avis clients', ta: 'TripAdvisor', google: 'Google' }
  },
  ar: {
    brand: 'جولدن قرطاج',
    nav: {
      home: 'الرئيسية', rooms: 'الغرف', offers: 'العروض', spa: 'السبا', restaurants: 'المطاعم', events: 'الفعاليات', gallery: 'المعرض', location: 'الموقع', contact: 'اتصل بنا'
    },
    booking: {
      title: 'احجز إقامتك', checkIn: 'تسجيل الوصول', checkOut: 'تسجيل المغادرة', guests: 'الضيوف', adults: 'بالغون', children: 'أطفال', room: 'نوع الغرفة', book: 'احجز الآن'
    },
    rooms: 'الغرف',
    offers: 'العروض',
    spa: 'السبا',
    restaurants: 'المطاعم',
    events: 'الفعاليات',
    gallery: 'المعرض',
    location: 'الموقع',
    contact: 'اتصل بنا',
    concierge: { title: 'الكونسيرج الذكي', placeholder: 'اسأل عن السبا أو المطاعم أو الحجز...', send: 'إرسال' },
    reviews: { title: 'آراء النزلاء', ta: 'تريب أدفايزر', google: 'جوجل' }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  useEffect(() => { document.documentElement.dir = dir }, [dir])
  const t = translations[lang]
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() { return useContext(LanguageContext) }
