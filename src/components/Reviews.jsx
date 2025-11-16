import React, { useEffect, useState } from 'react'

const Reviews = ({ t, lang }) => {
  const [reviews, setReviews] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/api/reviews?lang=${lang}`)
      .then(r => r.json())
      .then(setReviews)
      .catch(()=>{})
  }, [lang])

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="reviews">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1220]">{t.reviews.title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5">
            <div className="text-sm text-amber-700 font-medium">{r.source}</div>
            <div className="mt-2 text-[#0b1220] font-semibold">{r.author}</div>
            <div className="mt-1 text-amber-600">{'★'.repeat(Math.round(r.rating))}</div>
            <p className="mt-3 text-[#0b1220]/80 text-sm leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
