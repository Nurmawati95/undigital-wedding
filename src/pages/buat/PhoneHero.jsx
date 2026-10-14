import React from 'react'
import { formatTanggalID } from './constants.js'
export default function PhoneHero({ form, navy, softBg, grad }) {
  return (
    <section className={`px-5 pt-4 pb-8 flex flex-col items-center text-center bg-gradient-to-b ${grad}`}>
      <div className="w-16 h-1 mb-3 rounded-full bg-secondary-fixed-dim" />
      <span className="text-[11px] tracking-[0.25em] text-[#0061a4] uppercase font-bold mb-2">The Wedding Celebration of</span>
      <h1 className="font-display text-[36px] leading-[44px] font-semibold my-2" style={{ color: navy }}>
        {form.pria || 'Raden Arya'}<br /><span className="italic text-secondary text-[24px]">&</span><br />{form.wanita || 'Annisa Larasati'}
      </h1>
      <div className="relative my-4 p-2.5 rounded-3xl bg-white shadow-md">
        <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-surface-container-high">
          {form.foto
            ? <img src={form.foto} alt="mempelai" className="w-full h-full object-cover" />
            : <img className="w-full h-full object-cover" alt="ilustrasi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmDgwvd4v06bqrWbaQgGCIGsLLZZmni5-GADSmgjmHnUNzxtfIRSPtiiDOTXL_087LBBQCn4c-lOORc3Cmokt3aCPH9Y0cPtm2aX4tXwWq9crPstKNvaaumZyc6W0veYnuo1LCrU-S3eZWJcZbDgVvdBzybSJXRilhG9xykyHSUjHiE8FnxxLxPOn5lqRzkOGAwV2IGtnSuOdNMNqjFuPZDFfDBSihu6IzDPQTq8j28WQLpcZIZcx5" />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001945]/40 to-transparent" />
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[12px] font-semibold" style={{ color: navy }}>#{form.hashtag || 'AryaLarasatiMoment'}</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-2 shadow-sm" style={{ background: softBg, color: navy }}>
        <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span>{formatTanggalID(form.tanggal)}
      </div>
    </section>
  )
}
