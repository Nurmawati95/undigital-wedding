import React from 'react'

export function Shell({ title, onClose, children, wide }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-on-secondary-container/60" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-3xl p-6 shadow-2xl w-full ${wide ? 'max-w-2xl' : 'max-w-md'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-[22px] text-on-surface">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container"><span className="material-symbols-outlined">close</span></button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function BroadcastModal({ onClose, onSend }) {
  const [msg, setMsg] = React.useState('Assalamualaikum {nama}, dengan penuh sukacita kami mengundang Bapak/Ibu/Saudara/i ke pernikahan Raden & Annisa. Buka undangan personal: {link}')
  const [target, setTarget] = React.useState('Semua Tamu (450)')
  return (
    <Shell title="Broadcast WhatsApp" onClose={onClose} wide>
      <div className="space-y-3">
        <label className="text-[12px] font-semibold text-on-surface-variant">Target penerima</label>
        <select value={target} onChange={(e) => setTarget(e.target.value)} className="w-full bg-surface-container-low rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary">
          <option>Semua Tamu (450)</option>
          <option>Belum Terkirim (130)</option>
          <option>VIP & Pejabat (30)</option>
        </select>
        <label className="text-[12px] font-semibold text-on-surface-variant">Template pesan (otomatis personalisasi nama + link)</label>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={5} className="w-full bg-surface-container-low rounded-2xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
        <button onClick={() => onSend(target)} className="w-full py-3 rounded-full bg-primary-container hover:bg-primary text-white text-sm font-semibold">Kirim ke {target}</button>
      </div>
    </Shell>
  )
}

export function GuestModal({ onClose, onSave }) {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [cat, setCat] = React.useState('Teman Kuliah / Sekolah')
  return (
    <Shell title="Tambah Tamu Baru" onClose={onClose}>
      <div className="space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama tamu / keluarga" className="w-full bg-surface-container-low rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nomor WhatsApp, cth 0812xxxx" className="w-full bg-surface-container-low rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full bg-surface-container-low rounded-xl px-3 py-2.5 text-sm outline-none">
          <option>Keluarga Inti</option>
          <option>VIP & Pejabat</option>
          <option>Teman Kantor</option>
          <option>Teman Kuliah / Sekolah</option>
          <option>Tamu Orang Tua</option>
        </select>
        <button disabled={!name.trim()} onClick={() => onSave({ name: name.trim(), phone: phone.trim() || '-', cat })} className="w-full py-3 rounded-full bg-primary text-white text-sm font-semibold disabled:opacity-40">Simpan & Buat Link Personal</button>
      </div>
    </Shell>
  )
}
