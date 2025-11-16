import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero3D() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 80])
  const y2 = useTransform(scrollY, [0, 600], [0, 40])
  const scale = useTransform(scrollY, [0, 600], [1, 1.05])

  useEffect(() => {
    const canvas = document.getElementById('ocean')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, t = 0
    const dpr = window.devicePixelRatio || 1

    function resize() {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', resize)
    resize()

    function wave() {
      ctx.clearRect(0,0,w,h)
      const grad = ctx.createLinearGradient(0,0,0,h)
      grad.addColorStop(0, '#032030')
      grad.addColorStop(1, '#083a52')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,w,h)

      ctx.beginPath()
      for (let x=0; x<=w; x++) {
        const y = h*0.65 + Math.sin((x + t) * 0.015) * 8 + Math.sin((x + t*1.5) * 0.008) * 12
        x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y)
      }
      ctx.lineTo(w,h)
      ctx.lineTo(0,h)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255,255,255,0.08)'
      ctx.fill()

      t += 1.1
      requestAnimationFrame(wave)
    }
    wave()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3RlbHxlbnwwfDB8fHwxNzYzMzI2NTkyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hotel" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0c2230]"/>
      </motion.div>
      <motion.canvas id="ocean" style={{ y: y1 }} className="absolute bottom-0 left-0 right-0 h-1/2 w-full"/>
      <motion.div style={{ y: y2 }} className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight drop-shadow-xl">
            Golden Carthage
            <span className="block text-white/80 text-2xl sm:text-3xl mt-4">Mediterranean Resort Luxury</span>
          </h1>
          <p className="max-w-xl mt-6 text-white/80">
            Wake to shimmering sea, curated gastronomy, and a spa sanctuary. Designed for privacy, serenity, and effortless moments.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
