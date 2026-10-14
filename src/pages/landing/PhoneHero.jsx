import React from 'react'
import { COUPLE_IMG } from './constants.js'
export default function PhoneHero({ navy, softBg, grad, secs, onCalendar }) {
  return (
    <section id="section-sampul" className={`relative px-5 pt-4 pb-8 flex flex-col items-center text-center bg-gradient-to-b ${grad}`}>
      <div className="w-16 h-1 mb-3 rounded-full bg-secondary-fixed-dim" />
      <span className="text-[11px] tracking-[0.25em] text-[#0061a4] uppercase font-bold mb-2">The Wedding Celebration of</span>
      <h1 className="font-display text-[40px] leading-[52px] font-semibold tracking-tight my-2" style={{ color: navy }}>
        Raden Arya <br /><span className="text-secondary text-[24px] italic font-normal">&amp;</span><br />Annisa Larasati
      </h1>
      <div className="flex items-center justify-center gap-2 my-2 text-on-surface-variant text-[14px]">
        <span className="material-symbols-outlined text-primary text-[18px]">favorite</span><span>Menuju Hari Bahagia</span><span className="material-symbols-outlined text-primary text-[18px]">favorite</span>
      </div>
      <div className="relative my-4 p-2.5 rounded-3xl bg-white shadow-md">
        <div className="relative w-64 h-72 rounded-2xl overflow-hidden bg-surface-container-high">
          <img className="w-full h-full object-cover" alt="mempelai" src={COUPLE_IMG} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001945]/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[12px] font-semibold shadow-sm" style={{ color: navy }}>#AryaLarasatiMoment</span>
          </div>
        </div>
        <span className="material-symbols-outlined absolute -top-1.5 -left-1.5 text-primary-fixed-dim text-[20px]">flare</span>
        <span className="material-symbols-outlined absolute -top-1.5 -right-1.5 text-primary-fixed-dim text-[20px]">flare</span>
      </div>
      <div className="mt-2 mb-4 px-4 py-1.5 rounded-full text-[14px] font-semibold flex items-center gap-2 shadow-sm" style={{ background: softBg, color: navy }}>
        <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span><span>Sabtu, 18 Oktober 2025</span>
      </div>
      <div className="w-full max-w-xs grid grid-cols-4 gap-2 my-3">
        {[['124', 'Hari'], ['18', 'Jam'], ['45', 'Menit'], [String(secs).padStart(2, '0'), 'Detik']].map(([v, l]) => (
          <div key={l} className="rounded-2xl p-2.5 flex flex-col items-center shadow-md text-white" style={{ background: navy }}>
            <span className="font-display text-[22px] font-bold leading-none">{v}</span>
            <span className="text-[12px] text-primary-fixed mt-1">{l}</span>
          </div>
        ))}
      </div>
      <button onClick={onCalendar} className="mt-3 px-5 py-2.5 rounded-full bg-white text-[14px] font-semibold shadow-sm flex items-center gap-2" style={{ color: navy }}>
        <span className="material-symbols-outlined text-primary text-[18px]">event_upcoming</span><span>Save to Calendar</span>
      </button>
    </section>
  )
}
