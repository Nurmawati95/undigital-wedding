import React from 'react'
export default function PhoneBody({ form, navy, softBg, cd }) {
  const units = [[cd.days, 'Hari'], [cd.hours, 'Jam'], [cd.mins, 'Menit'], [cd.secs, 'Detik']]
  return (
    <React.Fragment>
      <div className="px-5 pb-6 flex flex-col items-center bg-white">
        <div className="w-full max-w-xs grid grid-cols-4 gap-2">
          {units.map(([v, l]) => (
            <div key={l} className="rounded-2xl p-2 flex flex-col items-center text-white shadow-md" style={{ background: navy }}>
              <span className="font-display text-[18px] font-bold leading-none">{String(v).padStart(2, '0')}</span>
              <span className="text-[10px] text-primary-fixed mt-1">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="px-5 py-6 bg-surface-container-low space-y-3">
        <h2 className="font-display text-[24px] font-semibold text-center" style={{ color: navy }}>Waktu & Tempat</h2>
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h3 className="font-display text-[19px]" style={{ color: navy }}>Akad Nikah</h3>
          <p className="text-[13px] text-on-surface-variant">{form.jamAkad} • {form.tempatAkad}</p>
          <p className="text-[13px] text-on-surface-variant">{form.alamatAkad}</p>
        </div>
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h3 className="font-display text-[19px]" style={{ color: navy }}>Resepsi</h3>
          <p className="text-[13px] text-on-surface-variant">{form.jamResepsi} • {form.tempatResepsi}</p>
          <div className="mt-2 px-3 py-2 rounded-xl text-[12px] font-semibold" style={{ background: softBg, color: navy }}>Dresscode: {form.dresscode}</div>
        </div>
      </section>
      <section className="px-5 py-6 space-y-3">
        <h2 className="font-display text-[24px] font-semibold text-center" style={{ color: navy }}>Amplop Digital</h2>
        <div className="rounded-3xl p-4 text-white shadow-lg bg-gradient-to-br from-[#001945] via-[#002c4f] to-[#00497d]">
          <div className="font-display font-bold">{form.bank1}</div>
          <div className="font-mono tracking-widest">{form.norek1}</div>
          <div className="text-[12px] opacity-80">a.n {form.an1}</div>
        </div>
        <div className="rounded-3xl p-4 shadow-sm" style={{ background: softBg }}>
          <div className="font-display font-bold" style={{ color: navy }}>{form.bank2}</div>
          <div className="font-mono" style={{ color: navy }}>{form.norek2}</div>
          <div className="text-[12px]">a.n {form.an2}</div>
        </div>
        <div className="bg-white rounded-3xl p-4 shadow-sm text-center">
          <span className="material-symbols-outlined text-[44px] text-on-secondary-container">qr_code_2</span>
          <p className="text-[11px] font-mono">NMID: {form.nmid}</p>
        </div>
      </section>
      <section className="px-5 py-6 bg-surface-container-low">
        <div className="bg-white rounded-3xl p-4 shadow-sm text-center">
          <h3 className="font-display text-[19px]" style={{ color: navy }}>RSVP & Ucapan</h3>
          <div className="mt-2 py-2.5 rounded-full bg-[#2196f3] text-white text-[13px] font-semibold">Kirim Konfirmasi RSVP</div>
        </div>
        <p className="text-center text-[10px] tracking-widest text-outline mt-4">POWERED BY UNDIGITAL SAAS</p>
      </section>
    </React.Fragment>
  )
}
