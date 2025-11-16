import React, { useEffect, useState } from 'react'
import { CalendarDays, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'

const roomTypes = [
  { id: 'deluxe', name: 'Deluxe Sea View' },
  { id: 'suite', name: 'Junior Suite' },
  { id: 'family', name: 'Family Room' },
  { id: 'presidential', name: 'Presidential Suite' },
]

export default function BookingBar({ t }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [room, setRoom] = useState('deluxe')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1)
    setCheckIn(today.toISOString().slice(0,10))
    setCheckOut(tomorrow.toISOString().slice(0,10))
  }, [])

  async function submit(e){
    e.preventDefault()
    setLoading(true); setMessage('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/book`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ check_in: checkIn, check_out: checkOut, adults, children, room_type: room })
      })
      const data = await res.json()
      if (data.success) setMessage('Reservation received. We will confirm shortly.')
      else setMessage('Please try again later.')
    } catch(err){ setMessage('Network error. Try again.') }
    finally { setLoading(false) }
  }

  return (
    <motion.form onSubmit={submit} initial={{ y: 20, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="fixed z-40 bottom-4 inset-x-0 mx-auto max-w-5xl px-4">
      <div className="backdrop-blur bg-white/10 border border-white/15 rounded-2xl shadow-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-3">
          <label className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <CalendarDays size={18}/>
            <input required type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="bg-transparent outline-none w-full" aria-label={t.booking.checkIn}/>
          </label>
          <label className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <CalendarDays size={18}/>
            <input required type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} className="bg-transparent outline-none w-full" aria-label={t.booking.checkOut}/>
          </label>
          <label className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <Users2 size={18}/>
            <input type="number" min="1" value={adults} onChange={e=>setAdults(parseInt(e.target.value))} className="bg-transparent outline-none w-full" aria-label={t.booking.adults}/>
          </label>
          <label className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <Users2 size={18}/>
            <input type="number" min="0" value={children} onChange={e=>setChildren(parseInt(e.target.value))} className="bg-transparent outline-none w-full" aria-label={t.booking.children}/>
          </label>
          <label className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 col-span-2 sm:col-span-1">
            <select value={room} onChange={e=>setRoom(e.target.value)} className="bg-transparent outline-none w-full">
              {roomTypes.map(r=> <option key={r.id} value={r.id} className="bg-slate-800">{r.name}</option>)}
            </select>
          </label>
        </div>
        <button type="submit" disabled={loading} className="bg-[#D4AF37] hover:bg-[#c29c2f] text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors">
          {loading ? '...' : t.booking.book}
        </button>
      </div>
      {message && <p className="mt-2 text-center text-white/90">{message}</p>}
    </motion.form>
  )
}
