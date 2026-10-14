import React, { useState } from 'react'
import Compare from './studio/Compare.jsx'
import Gallery from './studio/Gallery.jsx'
import WizardTop from './studio/WizardTop.jsx'
import WizardBottom from './studio/WizardBottom.jsx'
import { STORIES } from './studio/options.js'
export default function StudioCustom({ notify }) {
  const [filter, setFilter] = useState('all')
  const [art, setArt] = useState('flat_vector')
  const [attire, setAttire] = useState('jawa')
  const [palette, setPalette] = useState('navy')
  const show = (m) => notify?.(m)
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-secondary-fixed/40 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-80 -right-24 w-80 h-80 bg-primary-fixed/50 blur-[90px] pointer-events-none rounded-full" />
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-14 text-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-on-secondary-container text-white shadow-sm mb-6">
          <span className="material-symbols-outlined text-sm text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="text-[11px] tracking-[0.12em] font-bold uppercase">Undigital Creative Studio</span>
        </div>
        <h1 className="font-display text-[30px] leading-[40px] md:text-[46px] md:leading-[56px] text-on-secondary-container max-w-4xl mx-auto mb-4 font-semibold">Custom Wedding Illustration Studio</h1>
        <p className="text-[18px] leading-[28px] text-on-surface-variant max-w-2xl mx-auto">Ubah foto kebersamaan Anda menjadi karya seni ilustrasi pernikahan tradisional dan modern yang eksklusif.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {['100% Karya Ilustrator Berpengalaman', 'Revisi Cepat 3x Gratis', 'Resolusi 4K Siap Cetak & Web'].map((t) => (
            <div key={t} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container" /><span className="text-[12px] font-semibold text-on-surface-variant">{t}</span></div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full"><Compare /><Gallery filter={filter} setFilter={setFilter} /></section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_16px_48px_-12px_rgba(13,71,161,0.12)]">
          <WizardTop art={art} setArt={setArt} attire={attire} setAttire={setAttire} palette={palette} setPalette={setPalette} show={show} />
          <WizardBottom art={art} notify={notify} />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-primary uppercase tracking-widest">Kisah Bahagia Klien</span>
          <h2 className="font-display text-[28px] text-on-secondary-container mt-1 mb-3 font-semibold">Dicintai Lebih dari 1.800+ Pasangan Pengantin</h2>
          <p className="text-[14px] text-on-surface-variant">Pengalaman nyata pasangan yang mempercayakan ilustrasi sakral mereka pada Studio UNDIGITAL.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-primary-container mb-3">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>))}</div>
                <p className="text-[16px] leading-[24px] text-on-surface-variant italic mb-6">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
                <div className="w-10 h-10 rounded-full bg-cover bg-center bg-surface-container" style={{ backgroundImage: `url('${t.img}')` }} />
                <div><p className="text-[12px] font-bold text-on-secondary-container">{t.name}</p><p className="text-xs text-on-surface-variant">{t.meta}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-on-secondary-container text-white flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-2xl">support_agent</span></div>
            <div><h4 className="font-display text-[20px] text-on-secondary-container">Punya Permintaan Adat Khusus atau Busana Daerah Lain?</h4><p className="text-[14px] text-on-surface-variant">Tim ilustrator kami menguasai lebih dari 30+ ragam busana adat dari Sabang sampai Merauke.</p></div>
          </div>
          <button onClick={() => show('Membuka chat WhatsApp studio...')} className="px-6 py-2.5 rounded-full bg-white text-on-secondary-container text-[12px] font-semibold shadow-sm hover:bg-surface-variant whitespace-nowrap">Konsultasi WhatsApp Gratis</button>
        </div>
      </section>
    </div>
  )
}
