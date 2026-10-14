import React from 'react'
import { QRIS_IMG } from './constants.js'
export default function PhoneAmplop({ navy, softBg, onCopy }) {
  return (
    <section id="section-amplop" className="px-5 py-6 bg-surface space-y-4">
      <div className="text-center space-y-1">
        <span className="text-[11px] uppercase text-primary font-bold tracking-widest">Tanda Kasih</span>
        <h2 className="font-display text-[28px] font-semibold" style={{ color: navy }}>Amplop Digital</h2>
        <p className="text-[14px] text-on-surface-variant max-w-xs mx-auto">Doa restu Anda merupakan karunia terindah bagi kami.</p>
      </div>
      <div className="rounded-3xl p-5 bg-gradient-to-br from-[#001945] via-[#002c4f] to-[#00497d] text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-[22px] font-bold">BCA</span>
          <div className="w-10 h-7 rounded bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 flex items-center justify-center"><div className="w-6 h-4 border border-amber-800/40 rounded-sm" /></div>
        </div>
        <p className="text-[12px] text-primary-fixed uppercase">Nomor Rekening</p>
        <p className="font-mono text-[20px] tracking-widest">8271-9920-11</p>
        <p className="text-[14px] text-primary-fixed-dim mb-4">a.n Raden Arya</p>
        <button onClick={() => onCopy('8271992011', 'BCA Raden Arya')} className="w-full py-2.5 rounded-full bg-[#2196f3] text-white text-[14px] font-semibold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">content_copy</span><span>Salin Nomor Rekening</span>
        </button>
      </div>
      <div className="rounded-3xl p-5 shadow-sm" style={{ background: softBg }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2"><span className="font-display text-[22px] font-bold" style={{ color: navy }}>MANDIRI</span><span className="text-[12px] px-2 py-0.5 rounded-full bg-surface-container text-primary font-bold">BSI</span></div>
          <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
        </div>
        <p className="text-[12px] text-on-surface-variant uppercase">Nomor Rekening</p>
        <p className="font-mono text-[20px]" style={{ color: navy }}>137-00-9821-443</p>
        <p className="text-[14px] mb-4">a.n Annisa Larasati</p>
        <button onClick={() => onCopy('137009821443', 'Mandiri Annisa')} className="w-full py-2.5 rounded-full bg-white text-[14px] font-semibold flex items-center justify-center gap-2" style={{ color: navy }}>
          <span className="material-symbols-outlined text-[18px] text-primary">content_copy</span><span>Salin No. Rekening</span>
        </button>
      </div>
      <div className="bg-white rounded-3xl p-5 shadow-sm text-center space-y-3">
        <div className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-primary text-[20px]">qr_code_scanner</span><span className="font-display text-[20px]" style={{ color: navy }}>QRIS Cepat</span></div>
        <div className="w-44 h-44 mx-auto p-3 rounded-2xl shadow-inner"><img className="w-full h-full object-contain" alt="QRIS" src={QRIS_IMG} /></div>
        <p className="text-[12px] font-mono">NMID: ID102025881928</p>
        <a href="https://wa.me/6281234567890?text=Halo%20Arya%20%26%20Laras" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-surface-container text-[14px] font-semibold" style={{ color: navy }}>
          <span className="material-symbols-outlined text-primary text-[18px]">chat</span><span>Kirim Bukti via WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
