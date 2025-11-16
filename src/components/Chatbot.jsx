import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLang } from './LanguageContext'

export default function Chatbot(){
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'bot', text: lang === 'fr' ? 'Bonjour, comment puis-je vous aider ?' : lang === 'ar' ? 'مرحباً، كيف يمكنني المساعدة؟' : 'Hello, how may I assist?' }])
  const [loading, setLoading] = useState(false)

  async function send(){
    if(!input.trim()) return
    const text = input
    setMessages(m=>[...m, { role: 'user', text }])
    setInput('')
    setLoading(true)
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/concierge`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang })
      })
      const data = await res.json()
      setMessages(m=>[...m, { role: 'bot', text: data.reply }])
    }catch(e){ setMessages(m=>[...m, { role: 'bot', text: 'Connection issue, please try again.' }]) }
    finally{ setLoading(false) }
  }

  return (
    <div className="fixed z-50 bottom-6 right-6">
      {!open && (
        <button onClick={()=>setOpen(true)} className="rounded-full p-4 bg-[#D4AF37] text-black shadow-2xl hover:scale-105 transition-transform">
          <MessageCircle/>
        </button>
      )}
      {open && (
        <div className="w-80 sm:w-96 h-96 bg-[#0f2636] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between bg-white/5">
            <div className="font-semibold">Concierge</div>
            <button onClick={()=>setOpen(false)} className="p-1 rounded hover:bg-white/10"><X size={18}/></button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {messages.map((m,i)=> (
              <div key={i} className={`max-w-[85%] px-3 py-2 rounded-xl ${m.role==='bot'? 'bg-white/10' : 'bg-[#D4AF37] text-black ml-auto'}`}>{m.text}</div>
            ))}
          </div>
          <div className="p-3 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} placeholder={lang==='fr'?'Écrire un message...': lang==='ar'?'اكتب رسالة...':'Type a message...'} className="flex-1 bg-white/10 rounded-xl px-3 py-2 outline-none"/>
            <button onClick={send} disabled={loading} className="px-4 py-2 bg-[#D4AF37] text-black rounded-xl disabled:opacity-60">{loading?'...':'Send'}</button>
          </div>
        </div>
      )}
    </div>
  )
}
