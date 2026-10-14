import React from 'react'
import PhoneHero from './PhoneHero.jsx'
import PhoneBody from './PhoneBody.jsx'
import { useCountdown } from './hooks.js'
export default function PhoneFrame({ form }) {
  const cd = useCountdown(form.tanggal)
  const pastel = form.tema === 'pastel'
  const navy = pastel ? '#002c4f' : '#001945'
  const softBg = pastel ? '#e9f1e9' : '#e3f2fd'
  const grad = pastel ? 'from-[#e8f0e8] via-[#faf8ff] to-[#ffffff]' : 'from-[#e3f2fd] via-[#faf8ff] to-[#ffffff]'
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div className="relative w-[390px] max-w-full h-[800px] rounded-[52px] bg-on-surface shadow-[0_24px_60px_-15px_rgba(13,71,161,0.35)] p-3">
      <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#faf8ff] flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-on-surface rounded-full z-50" />
        <div className="absolute top-0 left-0 w-full px-6 pt-2 flex justify-between z-40 text-[12px] font-semibold pointer-events-none"><span>09:41</span><span>5G ▮▮▮</span></div>
        <div className="w-full h-full overflow-y-auto pb-24 pt-10 scrollbar-none">
          <div id="pv-sampul"><PhoneHero form={form} navy={navy} softBg={softBg} grad={grad} /></div>
          <div id="pv-acara"><PhoneBody form={form} navy={navy} softBg={softBg} cd={cd} /></div>
        </div>
        <div className="absolute bottom-20 left-4 z-40 px-3 py-2 rounded-full bg-[#2196f3] text-white shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] animate-spin" style={{ animationDuration: '4s' }}>album</span>
          <span className="text-[11px] font-semibold truncate max-w-[110px]">{form.musik}</span>
        </div>
        <nav className="absolute bottom-0 left-0 w-full px-4 py-2.5 flex justify-between text-white z-40" style={{ background: navy }}>
          {[['mark_email_read', 'Sampul', 'pv-sampul'], ['calendar_today', 'Acara', 'pv-acara'], ['payments', 'Amplop', 'pv-acara'], ['rate_review', 'Ucapan', 'pv-acara']].map(([i, l, id]) => (
            <button key={l} onClick={() => go(id)} className="flex flex-col items-center text-primary-fixed">
              <span className="material-symbols-outlined text-[20px]">{i}</span><span className="text-[10px] font-semibold">{l}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
