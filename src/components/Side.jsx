import React, { useState } from 'react'

export default function Side({ notify }) {
  const [copied, setCopied] = useState(false)
  const link = 'undigital.id/to/Hendra-Wijaya?vip=true'
  const copy = async () => {
    try { await navigator.clipboard.writeText('https://' + link) } catch (e) {}
    setCopied(true)
    notify('Tautan personal tersalin ke clipboard.')
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">mark_chat_unread</span>
            <h2 className="font-display text-[22px] text-on-surface">WhatsApp Engine</h2>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> API Terhubung
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-on-surface-variant">Penggunaan Kuota Blast Personal</span>
            <span className="text-on-surface font-bold">500 / 1.000 Pesan</span>
          </div>
          <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
            <div className="bg-primary-container h-full rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p className="text-xs text-on-surface-variant">Tiap pesan dikirimkan dengan nama tamu personal, link token unik otomatis, & cover sampul digital tanpa risiko spam blokir.</p>
        </div>
        <div className="bg-surface-container-low rounded-2xl p-4 space-y-3">
          <label className="text-[11px] tracking-[0.12em] font-bold text-primary uppercase block">Preview Link Undangan Personal Tamu</label>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-outline text-[18px]">link</span>
            <span className="text-[14px] text-on-surface truncate flex-1">{link}</span>
            <button onClick={copy} className="text-primary hover:text-on-secondary-container p-1 rounded-md hover:bg-surface-container transition-all" title="Salin Tautan">
              <span className="material-symbols-outlined text-[18px]">{copied ? 'done' : 'content_copy'}</span>
            </button>
          </div>
          <button onClick={() => notify('Pesan uji coba dikirim ke nomor terdaftar Anda.')} className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface text-[12px] font-semibold transition-all">
            <span className="material-symbols-outlined text-[16px]">smartphone</span>
            <span>Test Kirim ke Nomor Sendiri</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">qr_code_scanner</span>
            <h2 className="font-display text-[22px] text-on-surface">Meja Resepsi (Buku Tamu)</h2>
          </div>
          <span className="text-[11px] tracking-[0.12em] font-bold text-primary uppercase">Ready On-site</span>
        </div>
        <p className="text-[14px] text-on-surface-variant">Scanner QR Code di pintu masuk untuk mencatat kehadiran tamu secara instan, mencetak stiker souvenir, & verifikasi jatah katering fisik.</p>
        <div className="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[14px] font-semibold text-on-surface">Kamera Meja Tamu 01 & 02</div>
            <div className="text-xs text-on-surface-variant">Status: Siaga Menunggu Hari H</div>
          </div>
          <button onClick={() => notify('Mode scanner resepsi dibuka (simulasi).')} className="px-4 py-2 rounded-full bg-surface-container-highest hover:bg-surface-container-high text-on-secondary-container text-[12px] font-semibold transition-all">Buka Scanner</button>
        </div>
      </div>
    </div>
  )
}
