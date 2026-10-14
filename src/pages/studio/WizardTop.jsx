import React from 'react'
import { ART_STYLES, ATTIRES, PALETTES } from './options.js'
export default function WizardTop({ art, setArt, attire, setAttire, palette, setPalette, show }) {
  const artLabel = ART_STYLES.find((a) => a.id === art)?.title
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-primary text-[12px] font-semibold mb-2"><span className="material-symbols-outlined text-base">draw</span><span>Kustomisasi Ilustrasi Sesuai Impian</span></div>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-tight text-on-secondary-container font-semibold">Atur Pesanan Ilustrasi Anda</h2>
        </div>
        <p className="text-[14px] text-on-surface-variant max-w-sm">Ilustrator kami akan menggambar manual sesuai panduan foto dan busana adat yang Anda pilih di bawah ini.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 bg-surface-container-low p-2 rounded-2xl">
        {[['1', 'Tahap 1', 'Pilih Gaya Seni', true], ['2', 'Tahap 2', 'Busana Adat & Tema', false], ['3', 'Tahap 3', 'Unggah Foto & Catatan', false]].map(([n, t, d, a]) => (
          <div key={n} className={'flex items-center gap-3 p-3 rounded-2xl ' + (a ? 'bg-white shadow-sm' : '')}>
            <div className={'w-8 h-8 rounded-full text-[14px] font-bold flex items-center justify-center ' + (a ? 'bg-on-secondary-container text-white' : 'bg-surface-variant text-on-secondary-container')}>{n}</div>
            <div><p className={'text-[11px] uppercase font-bold tracking-wider ' + (a ? 'text-primary' : 'text-on-surface-variant')}>{t}</p><p className="text-[14px] font-semibold text-on-secondary-container">{d}</p></div>
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-on-secondary-container text-white text-xs flex items-center justify-center font-bold">1</span><h3 className="font-display text-[22px] text-on-secondary-container">Pilih Gaya Ilustrasi Visual</h3></div>
          <span className="text-[12px] text-primary font-semibold">Gaya {artLabel} Terpilih</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ART_STYLES.map((s) => (
            <button key={s.id} type="button" onClick={() => { setArt(s.id); show(`Gaya dipilih: ${s.title}`) }} className={'p-5 rounded-2xl text-left transition-all ' + (art === s.id ? 'bg-surface-container shadow-md ring-2 ring-primary-container' : 'bg-surface-container-low hover:bg-surface-container')}>
              <div className="flex items-start justify-between mb-3"><span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span><span className={'w-6 h-6 rounded-full flex items-center justify-center ' + (art === s.id ? 'bg-primary-container text-white' : 'border-2 border-outline-variant text-transparent')}><span className="material-symbols-outlined text-sm font-bold">check</span></span></div>
              {s.fav && <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider mb-2">Paling Favorit 85%</div>}
              <h4 className="text-[14px] font-bold text-on-secondary-container mb-1">{s.title}</h4>
              <p className="text-[14px] text-on-surface-variant mb-4">{s.desc}</p>
              <div className="h-28 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('${s.img}')` }} />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-2 pt-6 border-t border-surface-container">
        <div className="flex items-center gap-2 mb-4"><span className="w-6 h-6 rounded-full bg-on-secondary-container text-white text-xs flex items-center justify-center font-bold">2</span><h3 className="font-display text-[22px] text-on-secondary-container">Pilih Busana Tradisional atau Modern</h3></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {ATTIRES.map((a) => (
            <button key={a.id} onClick={() => { setAttire(a.id); show(`Busana: ${a.label}`) }} className={'p-3.5 rounded-2xl text-left flex flex-col justify-between h-24 ' + (attire === a.id ? 'bg-on-secondary-container text-white' : 'bg-surface-container text-on-secondary-container hover:bg-surface-variant')}>
              <span className="material-symbols-outlined text-xl">{a.icon}</span><span className="text-[12px] font-bold">{a.label}</span>
            </button>
          ))}
        </div>
        <p className="text-[12px] text-on-surface-variant mb-2 font-medium">Palet Warna Utama Busana Pasangan:</p>
        <div className="flex flex-wrap items-center gap-2.5">
          {PALETTES.map((p) => (
            <button key={p.id} onClick={() => setPalette(p.id)} className={'px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-2 ' + (palette === p.id ? 'bg-surface-container-high text-on-secondary-container ring-2 ring-primary-container' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high')}>
              <span className="w-3.5 h-3.5 rounded-full" style={{ background: p.dot }} /><span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
