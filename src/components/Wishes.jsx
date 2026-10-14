import React from 'react'
import { wishes } from '../data/widgets.js'

export default function Wishes() {
  const [liked, setLiked] = React.useState({})
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">favorite</span>
            <h2 className="font-display text-[22px] text-on-surface">Doa & Ucapan Tamu Terkini</h2>
          </div>
          <p className="text-[14px] text-on-surface-variant">Koleksi restu langsung dari tamu yang mengisi formulir buku tamu digital.</p>
        </div>
        <button className="inline-flex items-center gap-1 text-primary hover:text-on-secondary-container text-[14px] font-semibold">
          <span>Lihat 284 Ucapan Lengkap</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishes.map((w, i) => (
          <div key={w.name} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${w.bg} flex items-center justify-center font-bold text-[12px]`}>{w.initials}</div>
                  <div>
                    <div className="text-[14px] font-bold text-on-surface">{w.name}</div>
                    <div className="text-xs text-on-surface-variant">{w.rel}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">Hadir</span>
              </div>
              <p className="font-display text-[16px] text-on-surface italic leading-relaxed">"{w.text}"</p>
            </div>
            <div className="flex items-center justify-between pt-2 text-xs text-on-surface-variant">
              <span>{w.time}</span>
              <button onClick={() => setLiked((s) => ({ ...s, [i]: !s[i] }))} className="flex items-center gap-1 text-primary font-semibold">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span>{w.likes + (liked[i] ? 1 : 0)}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
