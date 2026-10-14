import React from 'react'
export default function PhoneRsvp({ navy, softBg, wishes, form, setForm, onSubmit }) {
  const [name, attend, count, wish] = [form.name, form.attend, form.count, form.wish]
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }))
  return (
    <section id="section-ucapan" className="px-5 py-6 bg-surface-container-low space-y-5">
      <div className="text-center space-y-1">
        <span className="text-[11px] uppercase text-primary font-bold tracking-widest">Buku Tamu</span>
        <h2 className="font-display text-[26px] font-semibold" style={{ color: navy }}>Konfirmasi Kehadiran</h2>
        <p className="text-[14px] text-on-surface-variant">Bantu kami mempersiapkan jamuan terbaik</p>
      </div>
      <form onSubmit={onSubmit} className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
        <input value={name} onChange={(e) => set('name', e.target.value)} required placeholder="Nama Lengkap" className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-[14px] focus:outline-none" />
        <select value={attend} onChange={(e) => set('attend', e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-[14px]">
          <option value="pasti_hadir">Pasti Hadir</option><option value="masih_ragu">Masih Ragu</option><option value="berhalangan">Berhalangan</option>
        </select>
        <select value={count} onChange={(e) => set('count', e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-[14px]">
          <option value="1">1 Orang</option><option value="2">2 Orang</option>
        </select>
        <textarea value={wish} onChange={(e) => set('wish', e.target.value)} placeholder="Doa & ucapan..." rows={2} className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-[14px] resize-none" />
        <button type="submit" className="w-full py-3 rounded-full bg-[#2196f3] text-white text-[14px] font-semibold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">send</span><span>Kirim RSVP</span>
        </button>
      </form>
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-display text-[20px]" style={{ color: navy }}>Ucapan &amp; Doa</h3>
          <span className="text-[12px] px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-bold">{wishes.length} Ucapan</span>
        </div>
        <div className="space-y-2.5">
          {wishes.map((w) => (
            <div key={w.id} className="p-4 rounded-2xl shadow-sm space-y-1.5" style={{ background: softBg }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[12px] ${w.bg}`}>{w.initials}</div><span className="text-[13px] font-semibold" style={{ color: navy }}>{w.name}</span></div>
                <span className="text-[11px] text-on-surface-variant">{w.time}</span>
              </div>
              <p className="text-[13px] text-on-surface-variant">{w.text}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary"><span className="material-symbols-outlined text-[13px]">check_circle</span>{w.meta}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 text-center text-on-surface-variant">
        <p className="text-[14px]">Terima kasih atas doa Anda</p>
        <div className="font-display text-[22px] text-primary">Arya &amp; Larasati</div>
        <p className="text-[10px] tracking-widest text-outline">POWERED BY UNDIGITAL SAAS</p>
      </div>
    </section>
  )
}
