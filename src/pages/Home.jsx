import React, { useEffect, useState } from 'react'
import Hero3D from '../components/Hero3D'
import BookingBar from '../components/BookingBar'
import { Highlights, Reviews, ContactStrip } from '../components/Sections'

export default function Home(){
  const [reviews, setReviews] = useState(null)
  useEffect(()=>{ (async()=>{
    try{ const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/reviews`); const data = await res.json(); setReviews(data) }catch(e){}
  })() },[])
  return (
    <>
      <Hero3D/>
      <BookingBar t={{ booking: { checkIn: 'Check-in', checkOut: 'Check-out', adults: 'Adults', children: 'Children', room: 'Room type', book: 'Book Now' } }} />
      <Highlights/>
      {reviews && <Reviews ta={reviews.tripadvisor} google={reviews.google}/>}    
      <ContactStrip/>
    </>
  )
}
