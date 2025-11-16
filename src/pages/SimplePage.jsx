import React from 'react'

export default function SimplePage({ title, image, children }){
  return (
    <div>
      <section className="h-[40vh] relative overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"/>
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-4 pb-10">
            <h1 className="text-4xl font-semibold">{title}</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </section>
    </div>
  )
}
