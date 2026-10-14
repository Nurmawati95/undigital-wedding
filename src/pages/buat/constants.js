export const THEMES = [
  { id: 'royal', name: 'Royal Blue Classic', desc: 'Navy pekat + aksen biru muda.', swatch: 'from-[#001945] to-[#2196f3]', badge: 'Terpopuler' },
  { id: 'pastel', name: 'Sage & Navy Elegance', desc: 'Navy lembut + pastel botanical.', swatch: 'from-[#2b5bb5] to-[#9ecaff]', badge: 'Baru' },
  { id: 'sunda', name: 'Sunda Gold Heritage', desc: 'Ivory hangat + aksen emas.', swatch: 'from-amber-500 to-yellow-200', badge: 'Adat' },
]

export const PAKETS = [
  { id: 'basic', name: 'Basic', price: 'Rp 99rb', feat: ['1 Tema Royal Blue', 'RSVP + Buku Tamu', 'Amplop BCA / Mandiri'] },
  { id: 'premium', name: 'Premium', price: 'Rp 199rb', feat: ['Semua Basic', 'QRIS + Musik', 'Countdown + Galeri'], hot: true },
  { id: 'royal', name: 'Royal Adat', price: 'Rp 349rb', feat: ['Semua Premium', 'Ilustrasi Adat Kustom', 'Domain Personal'] },
]

export const STEPS = [
  { id: 0, label: 'Tema & Paket', icon: 'palette' },
  { id: 1, label: 'Mempelai', icon: 'favorite' },
  { id: 2, label: 'Waktu & Tempat', icon: 'calendar_month' },
  { id: 3, label: 'Amplop Digital', icon: 'payments' },
  { id: 4, label: 'Musik & Tautan', icon: 'link' },
  { id: 5, label: 'Publikasikan', icon: 'rocket_launch' },
]

export const initialForm = {
  tema: 'royal', paket: 'premium',
  pria: 'Raden Arya', wanita: 'Annisa Larasati',
  ortuPria: 'Bpk. H. Wijaya & Ibu Hj. Ratna', ortuWanita: 'Bpk. Bambang S. & Ibu Sri Wahyuni',
  hashtag: 'AryaLarasatiMoment', salam: 'Dengan memohon ridho dan rahmat Allah SWT',
  tanggal: '2025-10-18', jamAkad: '08.00 - 10.00 WIB', tempatAkad: 'Masjid Agung Al-Azhar',
  alamatAkad: 'Kebayoran Baru, Jakarta Selatan', mapsAkad: 'https://maps.google.com/?q=Masjid+Agung+Al-Azhar',
  jamResepsi: '11.00 - 14.00 WIB', tempatResepsi: 'Grand Ballroom Hotel Mulia',
  alamatResepsi: 'Senayan, Jakarta Pusat', mapsResepsi: 'https://maps.google.com/?q=Hotel+Mulia+Senayan',
  dresscode: 'Batik / Formal Navy & Pastel',
  bank1: 'BCA', norek1: '8271992011', an1: 'Raden Arya',
  bank2: 'MANDIRI', norek2: '137009821443', an2: 'Annisa Larasati',
  nmid: 'ID102025881928', wa: '6281234567890', musik: 'A Thousand Years - Instrumental',
  foto: '', slug: 'arya-laras-18-okt-2025', tamuContoh: 'Budi Santoso',
}

export const inputCls = 'w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container/60 focus:bg-white transition-all placeholder:text-outline/70'
export const labelCls = 'block text-[12px] font-semibold text-on-surface-variant mb-1'
export const cardCls = 'bg-white rounded-3xl p-5 sm:p-6 shadow-sm space-y-4'

export function slugify(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60)
}

export function formatTanggalID(iso) {
  if (!iso) return 'Sabtu, 18 Oktober 2025'
  try {
    return new Date(iso + 'T08:00:00').toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return iso }
}
