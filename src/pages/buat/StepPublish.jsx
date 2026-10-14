import React from 'react'
import { cardCls, formatTanggalID } from './constants.js'
export default function StepPublish({ form, autoSlug, onPublish, onDraft }) {
  const rows = [
    ['Mempelai', `${form.pria} & ${form.wanita}`], ['Tanggal', formatTanggalID(form.tanggal)],
    ['Akad', `${form.tempatAkad} • ${form.jamAkad}`], ['Resepsi', `${form.tempatResepsi} • ${form.jamResepsi}`],
    ['Rekening', `${form.bank1} ${form.norek1} / ${form.bank2} ${form.norek2}`], ['Tautan', `undigital.id/to/${form.slug || autoSlug}`],
  ]
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Review & Publikasikan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]">
        {rows.map(([k, v]) => (
          <div key={k} className="p-3 rounded-2xl bg-surface-container-low">
            <div className="text-[11px] font-bold uppercase text-primary">{k}</div><div className="font-semibold">{v}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button onClick={onPublish} className="flex-1 py-3 rounded-full bg-primary-container hover:bg-primary text-white font-bold">Publikasikan Undangan</button>
        <button onClick={onDraft} className="px-5 py-3 rounded-full bg-surface-container-low font-bold">Simpan Draf</button>
      </div>
    </div>
  )
}
