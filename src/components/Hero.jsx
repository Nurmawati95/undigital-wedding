import React from 'react'

export default function Hero({ onBroadcast, onAdd, onExport, toast }) {
  return (
    <section className="w-full bg-surface-container-low px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-[40px] leading-[52px] font-semibold text-on-surface">Halo, Raden & Annisa</h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[12px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              H-24 Menuju Hari Bahagia (18 Okt 2025)
            </span>
          </div>
          <p className="text-[16px] text-on-surface-variant">Pusat kendali undangan adat & modern, konfirmasi kehadiran tamu, hingga mutasi amplop digital QRIS real-time.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={onBroadcast} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-primary-container hover:bg-primary text-white text-[14px] font-semibold shadow-md transition-all">
            <span className="material-symbols-outlined text-[20px]">send_to_mobile</span>
            <span>Kirim Broadcast WhatsApp</span>
          </button>
          <button onClick={onAdd} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-surface-container-highest hover:bg-surface-container-high text-on-secondary-container text-[14px] font-semibold transition-all">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            <span>Tambah Tamu Baru</span>
          </button>
          <button onClick={onExport} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white text-on-surface-variant hover:text-on-surface text-[14px] font-semibold shadow-sm transition-all">
            <span className="material-symbols-outlined text-[20px]">table_chart</span>
            <span>Unduh Excel / CSV</span>
          </button>
        </div>
      </div>
      {toast && (
        <div className="max-w-7xl mx-auto mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-on-secondary-container text-white text-[13px] font-medium shadow-lg">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>{toast}
          </div>
        </div>
      )}
    </section>
  )
}
