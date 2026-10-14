import React, { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Kpi from './components/Kpi.jsx'
import Finance from './components/Finance.jsx'
import Side from './components/Side.jsx'
import GuestTable from './components/GuestTable.jsx'
import Wishes from './components/Wishes.jsx'
import Footer from './components/Footer.jsx'
import { BroadcastModal, GuestModal } from './components/Modals.jsx'
import { initialGuests } from './data/guestsA.js'
import { moreGuests } from './data/guestsB.js'

export default function App() {
  const [guests, setGuests] = useState([...initialGuests, ...moreGuests])
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [toast, setToast] = useState('')
  const [modal, setModal] = useState(null)

  const notify = (t) => { setToast(t); setTimeout(() => setToast(''), 3200) }

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return guests.filter((g) => {
      const okCat = cat === 'all' || g.category === cat
      const hay = `${g.name} ${g.phone} ${g.categoryLabel}`.toLowerCase()
      return okCat && hay.includes(q)
    })
  }, [guests, query, cat])

  const addGuest = ({ name, phone, catLabel }) => {
    const map = { 'Keluarga Inti': 'keluarga', 'VIP & Pejabat': 'vip', 'Teman Kantor': 'kantor', 'Teman Kuliah / Sekolah': 'kuliah', 'Tamu Orang Tua': 'ortu' }
    setGuests((s) => [{ id: Date.now(), name, phone, category: map[catLabel] || 'kuliah', categoryLabel: catLabel, categoryStyle: 'bg-surface-container text-on-secondary-container', wa: 'Belum Terkirim', waPending: true, rsvp: 'Menunggu Tautan WA', rsvpWait: true, angpao: '-', angpaoVia: '', checkin: 'Belum Hadir', unsent: true }, ...s])
    setModal(null); notify(`Tamu ${name} ditambahkan + link personal dibuat.`)
  }

  const exportCsv = () => {
    const rows = [['Nama', 'WA', 'Kategori', 'RSVP', 'Angpao', 'Via', 'Checkin'], ...guests.map((g) => [g.name, g.phone, g.categoryLabel, g.rsvp, g.angpao, g.angpaoVia, g.checkin])]
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = 'rekap-tamu-undigital.csv'; a.click()
    notify('Rekap 450 tamu + mutasi QRIS diunduh (.csv).')
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans">
      <Header />
      <main className="w-full pt-20">
        <Hero toast={toast}
          onBroadcast={() => setModal('blast')}
          onAdd={() => setModal('guest')}
          onExport={exportCsv} />
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10 space-y-10">
          <Kpi />
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Finance onWithdraw={() => notify('Penarikan saldo ke BCA 8220194821 diproses.')} />
            <Side notify={notify} />
          </section>
          <GuestTable guests={filtered} query={query} setQuery={setQuery} activeCat={cat} setActiveCat={setCat}
            onResend={(g) => notify(`Undangan WA dikirim ulang ke ${g.name}.`)}
            onSendNow={(g) => { setGuests((s) => s.map((x) => x.id === g.id ? { ...x, wa: 'Terkirim', waPending: false, unsent: false, rsvp: 'Hadir (2 Pax)', rsvpWait: false } : x)); notify(`Undangan terkirim ke ${g.name}.`) }}
            onEdit={(g) => notify(`Edit data ${g.name} (simulasi).`)}
            onDelete={(g) => { setGuests((s) => s.filter((x) => x.id !== g.id)); notify(`${g.name} dihapus dari daftar.`) }} />
          <Wishes />
        </div>
      </main>
      <Footer />
      {modal === 'blast' && <BroadcastModal onClose={() => setModal(null)} onSend={(t) => { setModal(null); notify(`Broadcast WhatsApp dikirim ke ${t}.`) }} />}
      {modal === 'guest' && <GuestModal onClose={() => setModal(null)} onSave={(d) => addGuest({ ...d, catLabel: d.cat })} />}
    </div>
  )
}
