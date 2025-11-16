import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SimplePage from './pages/SimplePage'
import { LanguageProvider } from './components/LanguageContext'

export default function App(){
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="rooms" element={<SimplePage title="Rooms" image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop">Explore spacious rooms and suites overlooking the Mediterranean. Elegant textures, artisan details, and private terraces.</SimplePage>} />
          <Route path="offers" element={<SimplePage title="Offers" image="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2000&auto=format&fit=crop">Seasonal escapes and direct booking privileges.</SimplePage>} />
          <Route path="spa" element={<SimplePage title="Spa" image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop">Hammam rituals, sea-inspired therapies, and tranquil pools.</SimplePage>} />
          <Route path="restaurants" element={<SimplePage title="Restaurants" image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop">From Tunisian classics to contemporary Mediterranean cuisine.</SimplePage>} />
          <Route path="events" element={<SimplePage title="Events / MICE" image="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop">Ballrooms, sea-view terraces, and bespoke planning for up to 600 guests.</SimplePage>} />
          <Route path="gallery" element={<SimplePage title="Gallery" image="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=2000&auto=format&fit=crop">High-resolution photography with optional 360° tours.</SimplePage>} />
          <Route path="location" element={<SimplePage title="Location" image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop">On the Gammarth coastline, minutes from Sidi Bou Saïd and Carthage.</SimplePage>} />
          <Route path="contact" element={<SimplePage title="Contact" image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop">We are here to assist 24/7.</SimplePage>} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
