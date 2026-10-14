import React from 'react'
import { cardCls, inputCls, labelCls } from './constants.js'
export default function StepMempelai({ form, set }) {
  const onFoto = (e) => {
    const f = e.target.files?.[0]; if (!f) return
    const r = new FileReader(); r.onload = () => set('foto', r.result); r.readAsDataURL(f)
  }
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Data Mempelai</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={labelCls}>Mempelai Pria</label><input className={inputCls} value={form.pria} onChange={(e) => set('pria', e.target.value)} /></div>
        <div><label className={labelCls}>Mempelai Wanita</label><input className={inputCls} value={form.wanita} onChange={(e) => set('wanita', e.target.value)} /></div>
        <div><label className={labelCls}>Putra dari</label><input className={inputCls} value={form.ortuPria} onChange={(e) => set('ortuPria', e.target.value)} /></div>
        <div><label className={labelCls}>Putri dari</label><input className={inputCls} value={form.ortuWanita} onChange={(e) => set('ortuWanita', e.target.value)} /></div>
        <div><label className={labelCls}>Hashtag (tanpa spasi)</label><input className={inputCls} value={form.hashtag} onChange={(e) => set('hashtag', e.target.value.replace(/\s/g, ''))} /></div>
        <div><label className={labelCls}>Kalimat Pembuka</label><input className={inputCls} value={form.salam} onChange={(e) => set('salam', e.target.value)} /></div>
      </div>
      <label className="flex items-center gap-3 p-3 rounded-2xl border-2 border-dashed border-surface-variant cursor-pointer bg-surface-container-low/50">
        <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"><span className="material-symbols-outlined text-primary">upload</span></span>
        <span className="text-[13px]">{form.foto ? 'Foto terpasang — klik untuk ganti' : 'Unggah foto sampul (JPG/PNG)'}</span>
        <input type="file" accept="image/*" className="hidden" onChange={onFoto} />
      </label>
    </div>
  )
}
