import React from 'react'
import { categories } from '../data/categories.js'
import GuestRow from './GuestRow.jsx'

export default function GuestTable(props) {
  const { guests, query, setQuery, activeCat, setActiveCat } = props
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-[28px] text-on-surface">Daftar & Manajemen Tamu Undangan</h2>
          <p className="text-[14px] text-on-surface-variant mt-1">Kelola link blast personal, konfirmasi jumlah kursi, & monitoring kehadiran real-time.</p>
        </div>
        <div className="relative w-full lg:w-80">
          <span className="material-symbols-outlined absolute left-3.5 top-3 text-outline text-[20px]">search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-container-low text-on-surface placeholder:text-outline text-[14px] pl-10 pr-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-primary shadow-inner"
            placeholder="Cari nama, WhatsApp, kategori..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((c) => (
          <button key={c.id} onClick={() => setActiveCat(c.id)}
            className={activeCat === c.id
              ? 'shrink-0 px-4 py-1.5 rounded-full bg-primary text-white text-[12px] font-semibold shadow-sm'
              : 'shrink-0 px-4 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-[12px] font-semibold'}>
            {c.label} ({c.count})
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-[12px] font-semibold uppercase tracking-wider">
              <th className="py-3.5 px-4 rounded-l-xl">Nama Tamu & Kontak</th>
              <th className="py-3.5 px-4">Undangan WA</th>
              <th className="py-3.5 px-4">Status RSVP</th>
              <th className="py-3.5 px-4">Angpao Digital</th>
              <th className="py-3.5 px-4">Check-in</th>
              <th className="py-3.5 px-4 text-right rounded-r-xl">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low text-[14px]">
            {guests.map((g) => (<GuestRow key={g.id} g={g} {...props} />))}
            {guests.length === 0 && (<tr><td colSpan="6" className="py-10 text-center text-on-surface-variant text-sm">Tidak ada tamu yang cocok.</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="text-[14px] text-on-surface-variant">Menampilkan <b className="text-on-surface">1 - {guests.length}</b> dari <b className="text-on-surface">450</b> total tamu</div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-[12px] font-semibold opacity-50" disabled>Sebelumnya</button>
          <button className="w-8 h-8 rounded-full bg-primary text-white text-[12px] font-bold">1</button>
          <button className="w-8 h-8 rounded-full hover:bg-surface-container text-[12px]">2</button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-[12px] font-semibold">Selanjutnya</button>
        </div>
      </div>
    </section>
  )
}
