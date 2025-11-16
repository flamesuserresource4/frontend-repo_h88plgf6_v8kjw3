import React from 'react'
import { motion } from 'framer-motion'
import { Star, Sparkles, MapPin, MessageSquare } from 'lucide-react'

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-3 gap-8">
      {[{
        title: 'Seafront Serenity', desc: 'Private beach, infinity pools and Mediterranean sunsets.'
      },{
        title: 'Culinary Journeys', desc: 'North African flavors and global classics, crafted to perfection.'
      },{
        title: 'Spa & Wellness', desc: 'Thermal circuits, hammam, and signature rituals for deep relaxation.'
      }].map((i,idx)=> (
        <motion.div key={idx} initial={{ y: 20, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx*0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
          <Sparkles className="text-[#D4AF37]"/>
          <h3 className="mt-4 text-xl font-semibold">{i.title}</h3>
          <p className="mt-2 text-white/70">{i.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}

export function Reviews({ ta = { rating: 4.6, count: 1200 }, google = { rating: 4.5, count: 2300 } }){
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><Star className="text-[#D4AF37]"/> Guest Reviews</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {[{name:'TripAdvisor', ...ta}, {name:'Google', ...google}].map((r,idx)=> (
            <div key={idx} className="bg-white/5 rounded-xl p-6">
              <p className="text-white/80">{r.name}</p>
              <p className="text-3xl font-semibold mt-2">{r.rating} <span className="text-base text-white/60">({r.count})</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactStrip(){
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white/80"><MapPin/> BP 720, 2070 La Marsa, Tunis</div>
        <div className="flex gap-3">
          <a href="https://wa.me/21600000000" target="_blank" className="px-4 py-2 rounded-xl bg-green-500/90 hover:bg-green-500 text-white">WhatsApp</a>
          <a href="#livechat" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">Live Chat</a>
        </div>
      </div>
    </section>
  )
}
