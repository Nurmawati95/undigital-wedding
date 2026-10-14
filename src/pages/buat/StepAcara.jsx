import React from 'react'
import { cardCls, inputCls, labelCls, formatTanggalID } from './constants.js'
export default function StepAcara({ form, set }) {
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Waktu & Tempat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div><label className={labelCls}>Tanggal</label><input type="date" className={inputCls} value={form.tanggal} onChange={(e) => set('tanggal', e.target.value)} /></div>
        <div><label className={labelCls}>Jam Akad</label><input className={inputCls} value={form.jamAkad} onChange={(e) => set('jamAkad', e.target.value)} /></div>
        <div><label className={labelCls}>Jam Resepsi</label><input className={inputCls} value={form.jamResepsi} onChange={(e) => set('jamResepsi', e.target.value)} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={labelCls}>Tempat Akad</label><input className={inputCls} value={form.tempatAkad} onChange={(e) => set('tempatAkad', e.target.value)} /></div>
        <div><label className={labelCls}>Alamat Akad</label><input className={inputCls} value={form.alamatAkad} onChange={(e) => set('alamatAkad', e.target.value)} /></div>
        <div><label className={labelCls}>Tempat Resepsi</label><input className={inputCls} value={form.tempatResepsi} onChange={(e) => set('tempatResepsi', e.target.value)} /></div>
        <div><label className={labelCls}>Alamat Resepsi</label><input className={inputCls} value={form.alamatResepsi} onChange={(e) => set('alamatResepsi', e.target.value)} /></div>
        <div><label className={labelCls}>Maps Akad</label><input className={inputCls} value={form.mapsAkad} onChange={(e) => set('mapsAkad', e.target.value)} /></div>
        <div><label className={labelCls}>Maps Resepsi</label><input className={inputCls} value={form.mapsResepsi} onChange={(e) => set('mapsResepsi', e.target.value)} /></div>
      </div>
      <div><label className={labelCls}>Dresscode</label><input className={inputCls} value={form.dresscode} onChange={(e) => set('dresscode', e.target.value)} /></div>
      <div className="p-3 rounded-2xl bg-[#e3f2fd] text-[13px] text-on-secondary-fixed">Badge tanggal <b>{formatTanggalID(form.tanggal)}</b> & countdown live tampil di sampul.</div>
    </div>
  )
}
