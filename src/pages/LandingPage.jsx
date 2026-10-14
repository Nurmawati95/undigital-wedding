import React, { useEffect, useState } from 'react'
import PhoneHero from './landing/PhoneHero.jsx'
import PhoneAcara from './landing/PhoneAcara.jsx'
import PhoneAmplop from './landing/PhoneAmplop.jsx'
import PhoneRsvp from './landing/PhoneRsvp.jsx'
import { initialWishes } from './landing/constants.js'
export default function LandingPage({ notify }) {
  const [theme, setTheme] = useState('royal')
  const [zoomed, setZoomed] = useState(false)
  const [toast, setToast] = useState('')
  const [secs, setSecs] = useState(30)
  const [playing, setPlaying] = useState(true)
  const [wishes, setWishes] = useState(initialWishes)
  const [form, setForm] = useState({ name: '', attend: 'pasti_hadir', count: '1', wish: '' })
  const pastel = theme === 'pastel'
  const navy = pastel ? '#002c4f' : '#001945'
  const softBg = pastel ? '#e9f1e9' : '#e3f2fd'
  const grad = pastel ? 'from-[#e8f0e8] via-[#faf8ff] to-[#ffffff]' : 'from-[#e3f2fd] via-[#faf8ff] to-[#ffffff]'
  const show = (m) => { setToast(m); notify?.(m) }
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 2400); return () => clearTimeout(t) }, [toast])
  useEffect(() => { const t = setInterval(() => setSecs((s) => (s <= 0 ? 59 : s - 1)), 1000); return () => clearInterval(t) }, [])
  const copy = async (t, n) => { try { await navigator.clipboard.writeText(t) } catch {} show(`Nomor ${n} disalin!`) }
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const submit = (e) => {
    e.preventDefault(); if (!form.name.trim()) return
    const nm = form.name.trim()
    const att = form.attend === 'pasti_hadir' ? 'Hadir' : form.attend === 'masih_ragu' ? 'Ragu' : 'Berhalangan'
    setWishes((w) => [{ id: Date.now(), initials: nm.substring(0, 2).toUpperCase(), bg: 'bg-primary-container text-white', name: nm, time: 'Baru saja', text: form.wish.trim() || 'Selamat!', meta: `${att} (${form.count} Tamu)` }, ...w])
    setForm({ name: '', attend: 'pasti_hadir', count: '1', wish: '' })
    show('Terima kasih! RSVP terkirim.')
  }
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-surface-variant opacity-60 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 w-full flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-primary-fixed text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">phone_iphone</span></span>
            <div><div className="flex items-center gap-2"><b className="text-[14px]">Live Device Preview</b><span className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[12px] font-bold">iPhone 15 Pro</span></div>
            <p className="text-[13px] text-on-surface-variant">UNDIGITAL Mobile Invitation Engine</p></div>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <div className="inline-flex p-1 bg-surface-container-low rounded-full">
              <button onClick={() => { setTheme('royal'); show('Tema: Royal Blue') }} className={'px-3 py-1 text-[12px] font-bold rounded-full ' + (theme === 'royal' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant')}>Royal Blue</button>
              <button onClick={() => { setTheme('pastel'); show('Tema: Sage Navy') }} className={'px-3 py-1 text-[12px] font-bold rounded-full ' + (theme === 'pastel' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant')}>Sage Navy</button>
            </div>
            <button onClick={() => setZoomed((z) => !z)} className="px-3 py-1.5 rounded-full bg-surface-container-low text-[12px] font-bold">{zoomed ? '106%' : '100%'}</button>
            <button onClick={async () => { try { await navigator.clipboard.writeText(window.location.href) } catch {} show('Tautan disalin!') }} className="px-3 py-1.5 rounded-full bg-surface-container-low text-[12px] font-bold">Salin Tautan</button>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center py-4">
          <div className="relative w-[390px] max-w-full h-[820px] rounded-[52px] bg-on-surface shadow-xl p-3 transition-transform duration-300" style={{ transform: zoomed ? 'scale(1.06)' : 'scale(1)' }}>
            <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#faf8ff] flex flex-col">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-on-surface rounded-full z-50" />
              <div className="absolute top-0 left-0 w-full px-6 pt-2 flex justify-between z-40 text-[12px] font-semibold pointer-events-none"><span>09:41</span><span>5G</span></div>
              <div className="w-full h-full overflow-y-auto pb-24 pt-10 scrollbar-none">
                <PhoneHero navy={navy} softBg={softBg} grad={grad} secs={secs} onCalendar={() => show('Ditambahkan ke Calendar')} />
                <PhoneAcara navy={navy} softBg={softBg} />
                <PhoneAmplop navy={navy} softBg={softBg} onCopy={copy} />
                <PhoneRsvp navy={navy} softBg={softBg} wishes={wishes} form={form} setForm={setForm} onSubmit={submit} />
              </div>
              <div className="absolute bottom-20 left-4 z-40"><button onClick={() => { setPlaying((p) => !p); show(playing ? 'Musik dijeda' : 'Memutar musik') }} className="px-3 py-2 rounded-full bg-[#2196f3] text-white shadow-lg flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">album</span><span className="text-[11px] font-bold">A Thousand Years</span></button></div>
              <nav className="absolute bottom-0 left-0 w-full px-4 py-2.5 flex justify-between text-white z-40" style={{ background: navy }}>
                {[['mark_email_read', 'Sampul', 'section-sampul'], ['favorite', 'Mempelai', 'section-sampul'], ['calendar_today', 'Acara', 'section-acara'], ['payments', 'Amplop', 'section-amplop'], ['rate_review', 'Ucapan', 'section-ucapan']].map(([i, l, id]) => (
                  <button key={l + id} onClick={() => go(id)} className="flex flex-col items-center text-primary-fixed"><span className="material-symbols-outlined text-[20px]">{i}</span><span className="text-[10px] font-semibold">{l}</span></button>
                ))}
              </nav>
              <div className={'absolute top-12 left-1/2 -translate-x-1/2 w-11/12 max-w-xs py-2 px-4 rounded-full text-white text-center text-[12px] font-semibold shadow-xl z-50 ' + (toast ? 'opacity-100' : 'opacity-0 pointer-events-none')} style={{ background: navy }}>{toast || 'OK'}</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[['speed', 'Mobile Optimized', 'Navigasi bawah + instan.'], ['security', 'Amplop QRIS Aman', 'Cashless tanpa potongan.'], ['mark_chat_read', 'RSVP Realtime', 'Masuk dashboard.']].map(([i, t, d]) => (
            <div key={t} className="p-5 rounded-2xl bg-white shadow-sm flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[28px]">{i}</span><div><h4 className="text-[14px] font-bold">{t}</h4><p className="text-[13px] text-on-surface-variant">{d}</p></div></div>
          ))}
        </div>
      </div>
    </div>
  )
}
