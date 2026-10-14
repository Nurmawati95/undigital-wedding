import React from 'react'
import { FILTERS, GALLERY } from './data.js'
export default function Gallery({ filter, setFilter }) {
  const list = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.cat === filter)
  const show = list.length ? list : GALLERY
  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-[22px] text-on-secondary-container">Eksplorasi Gaya Budaya Nusantara</h3>
          <span className="text-[12px] text-primary hidden sm:inline-block font-semibold">6 Gaya Ilustrasi Populer</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FILTERS.map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)} className={'px-4 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap ' + (filter === f.id ? 'bg-on-secondary-container text-white' : 'bg-surface-container text-on-secondary-container hover:bg-surface-variant')}>{f.label}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
        {show.map((c) => (
          <div key={c.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="relative h-72 overflow-hidden bg-surface-container">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 rounded-full text-[11px] font-bold text-on-secondary-container uppercase tracking-wider">{c.badge}</div>
              <div className="absolute bottom-3 right-3 bg-on-secondary-container/85 text-white px-2 py-0.5 rounded text-[12px] font-semibold">{c.tech}</div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-1"><span className="material-symbols-outlined text-sm">palette</span><span>{c.team}</span></div>
                <h4 className="font-display text-[18px] leading-6 text-on-secondary-container mb-2">{c.title}</h4>
                <p className="text-[14px] leading-[20px] text-on-surface-variant line-clamp-2">{c.desc}</p>
              </div>
              <div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between text-[12px] font-semibold text-on-surface-variant"><span>{c.meta}</span><span className="text-primary font-bold">{c.orders}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
