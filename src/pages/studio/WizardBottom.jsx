import React, { useRef, useState } from 'react'
import { ART_STYLES } from './options.js'
const PREVIEW = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDthKIkihTWMnnTM8A5DPOywk7hRzu6rTuLDoH6hnZhkfVxPPxftQnlZzxpCXQ6sEY1pI7CnquwUQtLj6Y7Oe_tlIMyqqd4-_mnXC_V7zrkOvXunKHgxYnwzsOqbqpi9_iTO0UMm-ovm41DRXZ9_MfhzmM0mSB97Qx-z2hgJ5pp2KFFsVu1_5yiD7b4MXKbHk5gvrOBl5f1cdhvQvB-yx5zkPZ4XGkps3JfVgrkR8S3KRwMFG3y7o19'
export default function WizardBottom({ art, notify }) {
  const [note, setNote] = useState('')
  const [file, setFile] = useState({ name: 'foto-candid-dimas-dian.jpg', size: '4.2 MB', preview: null })
  const inputRef = useRef(null)
  const show = (m) => notify?.(m)
  const pick = (f) => {
    if (!f) return
    setFile({ name: f.name, size: (f.size / 1024 / 1024).toFixed(1) + ' MB', preview: URL.createObjectURL(f) })
    show(`Foto ${f.name} siap diproses.`)
  }
  const artLabel = ART_STYLES.find((a) => a.id === art)?.title
  return (
    <div>
      <div className="mb-10 pt-6 border-t border-surface-container mt-8">
        <div className="flex items-center gap-2 mb-4"><span className="w-6 h-6 rounded-full bg-on-secondary-container text-white text-xs flex items-center justify-center font-bold">3</span><h3 className="font-display text-[22px] text-on-secondary-container">Unggah Foto Referensi Anda</h3></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div role="button" tabIndex={0} onClick={() => inputRef.current?.click()} onKeyDown={(e) => { if (e.key === 'Enter') inputRef.current?.click() }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files?.[0]) }} className="lg:col-span-8 bg-surface-container-low p-8 rounded-2xl text-center hover:bg-surface-container cursor-pointer">
            <input ref={inputRef} type="file" accept="image/*,.heic" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
            <div className="w-14 h-14 rounded-full bg-surface-variant text-primary mx-auto flex items-center justify-center mb-4"><span className="material-symbols-outlined text-3xl">cloud_upload</span></div>
            <h4 className="text-[14px] font-bold text-on-secondary-container mb-1">Seret foto di sini, atau <span className="text-primary underline">Jelajahi File</span></h4>
            <p className="text-[14px] text-on-surface-variant max-w-md mx-auto mb-4">JPG, PNG, HEIC hingga 20MB. Foto tampak depan dengan pencahayaan jelas.</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-[12px] font-semibold text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">verified</span><span>Privasi terjamin: Foto dihapus otomatis setelah selesai</span></div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-low p-4 rounded-2xl flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">File Referensi Terunggah</span>
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cover bg-center bg-surface-container flex-shrink-0" style={{ backgroundImage: `url('${file.preview || PREVIEW}')` }} />
              <div className="flex-1 min-w-0"><p className="text-[12px] font-bold text-on-secondary-container truncate">{file.name}</p><p className="text-xs text-on-surface-variant">{file.size} - Siap Diproses</p></div>
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            </div>
            <div><label className="block text-[12px] font-semibold text-on-secondary-container mb-1">Catatan untuk Ilustrator:</label><textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder="Contoh: sesuaikan senyuman, tambahkan kacamata." className="w-full p-2.5 rounded-xl bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container resize-none" /></div>
          </div>
        </div>
      </div>
      <div className="pt-6 border-t border-surface-container bg-surface-container-low p-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto">
          {[['schedule', 'Pengerjaan', '1-2 Hari Kerja'], ['published_with_changes', 'Garansi Revisi', '3x Revisi Gratis'], ['file_download', 'Lisensi File', 'Master 4K + Transparan']].map(([i, k, v]) => (
            <div key={k} className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">{i}</span><div><p className="text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">{k}</p><p className="text-[12px] font-bold text-on-secondary-container">{v}</p></div></div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 w-full lg:w-auto">
          <div><p className="text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">Biaya Ilustrasi Custom</p><div className="flex items-baseline gap-1"><span className="font-display text-[28px] font-bold text-on-secondary-container">Rp 120.000</span><span className="text-xs text-on-surface-variant line-through">Rp 250.000</span></div></div>
          <button onClick={() => show(`Pesanan (${artLabel}) dibuat - Rp 120.000. Tim studio hubungi via WhatsApp.`)} className="px-8 py-3.5 rounded-full bg-primary-container hover:bg-primary text-white text-[14px] font-semibold flex items-center gap-2"><span>Pesan Undangan Ilustrasi</span><span className="material-symbols-outlined text-lg">arrow_forward</span></button>
        </div>
      </div>
    </div>
  )
}
