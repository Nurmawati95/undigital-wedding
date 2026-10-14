import React from 'react'
import { cardCls, inputCls, labelCls, slugify } from './constants.js'
export default function StepTautan({ form, set, autoSlug, onCopy, onTestWA }) {
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Musik & Tautan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={labelCls}>Backsound</label><input className={inputCls} value={form.musik} onChange={(e) => set('musik', e.target.value)} /></div>
        <div><label className={labelCls}>Slug tautan</label>
          <div className="flex gap-2">
            <input className={inputCls} value={form.slug} onChange={(e) => set('slug', slugify(e.target.value))} />
            <button onClick={() => set('slug', autoSlug)} className="px-3 rounded-xl bg-surface-container-low text-[13px] font-bold shrink-0">Auto</button>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm">
          <span className="material-symbols-outlined text-[18px]">link</span>
          <span className="text-[14px] truncate flex-1">undigital.id/to/{form.slug || autoSlug}</span>
          <button onClick={() => onCopy(`https://undigital.id/to/${form.slug || autoSlug}`, 'Tautan tersalin!')} className="text-primary"><span className="material-symbols-outlined">content_copy</span></button>
        </div>
        <div className="flex gap-2">
          <input className={inputCls + ' !bg-white'} value={form.tamuContoh} onChange={(e) => set('tamuContoh', e.target.value)} placeholder="Nama tamu" />
          <button onClick={onTestWA} className="px-4 py-2 rounded-full bg-[#25D366] text-white text-[13px] font-bold shrink-0">Test WA</button>
        </div>
      </div>
    </div>
  )
}
