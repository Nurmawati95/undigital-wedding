import React from 'react'
import { transactions, weekBars } from '../data/widgets.js'

export default function Finance({ onWithdraw }) {
  return (
    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-container"></span>
            <h2 className="font-display text-[22px] text-on-surface">Dompet Digital & Mutasi Rekap QRIS</h2>
          </div>
          <p className="text-[14px] text-on-surface-variant mt-1">Settlement real-time dari amplop digital tamu langsung ke rekening pengantin.</p>
        </div>
        <button onClick={onWithdraw} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-[12px] font-semibold hover:bg-on-secondary-container transition-all shadow-sm">
          <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
          <span>Tarik Saldo</span>
        </button>
      </div>

      <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[32px]">qr_code_2</span>
          </div>
          <div className="space-y-1">
            <div className="text-[14px] font-semibold text-on-surface">QRIS Dinamis Nasional (NMID: ID1024883921)</div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-on-surface-variant">
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-secondary-container font-semibold">BCA: 8220194821</span>
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-secondary-container font-semibold">Mandiri: 137001928371</span>
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-secondary-container font-semibold">BSI: 712093847</span>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xs text-on-surface-variant">Biaya MDR Layanan</div>
          <div className="text-[14px] text-primary font-bold">0% (Promo Spesial Adat)</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-on-surface-variant font-semibold">
          <span>Tren Penerimaan Amplop Digital (7 Hari Terakhir)</span>
          <span className="text-primary">Total Minggu Ini: Rp 23.450.000</span>
        </div>
        <div className="w-full bg-surface-container-low rounded-2xl p-4">
          <svg className="w-full h-28 overflow-visible" viewBox="0 0 540 130" preserveAspectRatio="none">
            <line stroke="currentColor" strokeDasharray="4" x1="0" x2="540" y1="100" y2="100" className="text-outline-variant opacity-20" />
            <line stroke="currentColor" strokeDasharray="4" x1="0" x2="540" y1="50" y2="50" className="text-outline-variant opacity-20" />
            {weekBars.map((b, i) => (
              <rect key={b.day} className={`${b.cls} fill-current`} height={b.h} rx="8" width="34" x={25 + i * 75} y={b.y} />
            ))}
            {weekBars.map((b, i) => (
              <text key={b.day + '-t'} fontSize="11" textAnchor="middle" x={42 + i * 75} y="120"
                className={b.bold ? 'fill-current text-primary font-bold' : b.boldDark ? 'fill-current text-on-surface font-bold' : 'fill-current text-on-surface-variant'}>
                {b.day}
              </text>
            ))}
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-on-surface">Transaksi Amplop Terkini</span>
          <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">Lihat Semua (84 Transaksi)</span>
        </div>
        <div className="space-y-2.5">
          {transactions.map((t) => (
            <div key={t.initials} className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center font-bold text-[12px]`}>{t.initials}</div>
                <div>
                  <div className="text-[14px] font-semibold text-on-surface">{t.name}</div>
                  <div className="text-xs text-on-surface-variant line-clamp-1 italic">"{t.note}"</div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[14px] text-primary font-bold">{t.amount}</div>
                <div className="text-[11px] text-on-surface-variant">{t.via}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
