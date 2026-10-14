import React from 'react'
import { THEMES, PAKETS, cardCls } from './constants.js'
export default function StepTema({ form, set, notify }) {
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Pilih Tema & Paket</h2>
      <p className="text-[14px] text-on-surface-variant -mt-3">Tema mengontrol warna live preview ponsel di kanan.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {THEMES.map((t) => (
          <button key={t.id} onClick={() => { set('tema', t.id); notify('Tema aktif: ' + t.name) }}
            className={`text-left rounded-2xl overflow-hidden border-2 ${form.tema === t.id ? 'border-primary shadow-md' : 'border-transparent shadow-sm'}`}>
            <div className={`h-20 bg-gradient-to-br ${t.swatch} relative`}>
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-[11px] font-bold">{t.badge}</span>
              {form.tema === t.id && <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center"><span className="material-symbols-outlined text-primary text-[16px]">check</span></span>}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-24 rounded-t-full bg-white/90" />
            </div>
            <div className="p-3 bg-white"><div className="text-[14px] font-bold">{t.name}</div><div className="text-[12px] text-on-surface-variant">{t.desc}</div></div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PAKETS.map((p) => (
          <button key={p.id} onClick={() => set('paket', p.id)} className={`p-4 rounded-2xl text-left border-2 ${form.paket === p.id ? 'border-primary bg-[#e3f2fd]/60' : 'border-surface-container bg-surface-container-low'}`}>
            <div className="font-bold text-[15px]">{p.name} • <span className="text-primary">{p.price}</span></div>
            <ul className="mt-1 text-[12px] text-on-surface-variant">{p.feat.map((f) => <li key={f}>✓ {f}</li>)}</ul>
          </button>
        ))}
      </div>
    </div>
  )
}
