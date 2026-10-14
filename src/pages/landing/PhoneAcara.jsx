import React from 'react'
export default function PhoneAcara({ navy, softBg }) {
  return (
    <section id="section-acara" className="px-5 py-6 bg-surface-container-low space-y-4">
      <div className="text-center space-y-1 mb-2">
        <span className="text-[11px] uppercase text-primary font-bold tracking-widest">Rangkaian Acara</span>
        <h2 className="font-display text-[28px] font-semibold" style={{ color: navy }}>Waktu &amp; Tempat</h2>
        <p className="text-[14px] text-on-surface-variant">Dengan memohon ridho dan rahmat Allah SWT</p>
      </div>
      <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary-fixed opacity-30" />
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[12px] font-semibold" style={{ background: softBg, color: navy }}>Sacred Union</span>
          <span className="material-symbols-outlined text-primary text-[22px]">diversity_1</span>
        </div>
        <div>
          <h3 className="font-display text-[22px]" style={{ color: navy }}>Akad Nikah</h3>
          <p className="text-[14px] text-on-surface-variant flex items-center gap-1.5 mt-1"><span className="material-symbols-outlined text-[16px] text-primary">schedule</span><span>08.00 - 10.00 WIB</span></p>
        </div>
        <div className="p-3 rounded-2xl bg-surface-container flex items-start gap-2.5">
          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">mosque</span>
          <div><h4 className="text-[14px] font-semibold">Masjid Agung Al-Azhar</h4><p className="text-[14px] text-on-surface-variant">Kebayoran Baru, Jakarta Selatan</p></div>
        </div>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#2196f3] text-white text-[14px] font-semibold shadow-md">
          <span className="material-symbols-outlined text-[18px]">location_on</span><span>Buka Google Maps</span>
        </a>
      </div>
      <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary-fixed opacity-30" />
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[12px] font-semibold">The Celebration</span>
          <span className="material-symbols-outlined text-secondary text-[22px]">celebration</span>
        </div>
        <div>
          <h3 className="font-display text-[22px]" style={{ color: navy }}>Resepsi Pernikahan</h3>
          <p className="text-[14px] text-on-surface-variant flex items-center gap-1.5 mt-1"><span className="material-symbols-outlined text-[16px] text-primary">schedule</span><span>11.00 - 14.00 WIB</span></p>
        </div>
        <div className="px-3.5 py-2 rounded-xl flex items-center gap-2" style={{ background: softBg, color: navy }}>
          <span className="material-symbols-outlined text-primary text-[18px]">checkroom</span><span className="text-[12px] font-semibold">Dresscode: Batik / Formal Navy</span>
        </div>
        <div className="p-3 rounded-2xl bg-surface-container flex items-start gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">apartment</span>
          <div><h4 className="text-[14px] font-semibold">Grand Ballroom Hotel Mulia</h4><p className="text-[14px] text-on-surface-variant">Senayan, Jakarta Pusat</p></div>
        </div>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#2196f3] text-white text-[14px] font-semibold shadow-md">
          <span className="material-symbols-outlined text-[18px]">explore</span><span>Petunjuk Lokasi Maps</span>
        </a>
      </div>
    </section>
  )
}
