import React from 'react'

function Card({ eyebrow, icon, children, foot }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-[11px] tracking-[0.12em] font-bold text-primary uppercase">{eyebrow}</span>
        <div className="w-10 h-10 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[22px]">{icon}</span>
        </div>
      </div>
      <div className="my-4">{children}</div>
      {foot}
    </div>
  )
}

export default function Kpi() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card eyebrow="Undangan Tersebar" icon="contact_mail"
        foot={<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"><div className="bg-primary h-full rounded-full" style={{ width: '71.1%' }} /></div>}>
        <div className="font-display text-[40px] text-on-surface tracking-tight">450 <span className="text-[14px] text-on-surface-variant font-sans font-normal">Tamu</span></div>
        <div className="flex items-center gap-2 mt-2 text-[14px] text-on-surface-variant">
          <span className="inline-flex items-center gap-1 text-primary font-semibold"><span className="material-symbols-outlined text-[16px]">check_circle</span> 320 Terkirim WA</span>
          <span className="text-outline-variant">•</span><span>130 Menunggu</span>
        </div>
      </Card>
      <Card eyebrow="Konfirmasi RSVP" icon="how_to_reg"
        foot={<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden flex"><div className="bg-primary h-full" style={{ width: '77%' }} /><div className="bg-secondary-container h-full" style={{ width: '9%' }} /><div className="bg-outline-variant h-full" style={{ width: '14%' }} /></div>}>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[40px] text-on-surface">348</span>
          <span className="text-[14px] text-primary font-bold">77.3% Hadir</span>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-2 text-center text-[12px] font-semibold text-on-surface-variant">
          <div className="bg-surface-container-low py-1 rounded">42 Ragu</div>
          <div className="bg-surface-container-low py-1 rounded">28 Batal</div>
          <div className="bg-surface-container-low py-1 rounded">32 Pending</div>
        </div>
      </Card>
      <Card eyebrow="Digital Angpao & QRIS" icon="payments"
        foot={<div className="flex items-center justify-between text-xs text-on-surface-variant pt-1"><span>QRIS Mandiri & BCA</span><span className="font-semibold text-primary">Terverifikasi Otomatis</span></div>}>
        <div className="font-display text-[28px] text-on-surface font-semibold">Rp 48.750.000</div>
        <div className="flex items-center gap-1.5 mt-2 text-[14px] text-primary">
          <span className="material-symbols-outlined text-[16px]">trending_up</span>
          <span className="font-semibold">+18 mutasi amplop</span>
          <span className="text-on-surface-variant text-xs">hari ini</span>
        </div>
      </Card>
      <Card eyebrow="Buku Tamu & Doa" icon="mark_email_read"
        foot={<div className="flex items-center justify-between text-xs text-on-surface-variant pt-1"><span>Tampil di Live Wall Screen</span><span className="text-primary font-semibold">100% Lolos Sensor</span></div>}>
        <div className="font-display text-[40px] text-on-surface">284 <span className="text-[14px] text-on-surface-variant font-sans font-normal">Ucapan</span></div>
        <div className="flex items-center gap-2 mt-2 text-[14px] text-on-surface-variant">
          <span className="inline-flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">verified</span> Moderasi AI Aktif</span>
        </div>
      </Card>
    </section>
  )
}
