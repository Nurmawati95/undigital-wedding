import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <div className="lg:col-span-2 space-y-2">
            <div className="font-display text-[28px] text-primary">UNDIGITAL</div>
            <p className="text-[14px] text-on-surface-variant max-w-sm">Platform undangan digital pernikahan modern Indonesia dengan sentuhan adat, kemudahan RSVP WhatsApp terintegrasi, dan amplop digital terpercaya.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[14px] font-semibold text-on-surface">Produk</h3>
            <ul className="space-y-1 text-[14px] text-on-surface-variant">
              <li>Tema Pernikahan</li><li>Kustom Ilustrasi Adat</li><li>Dashboard Manajemen</li><li>RSVP & Buku Tamu</li><li>Amplop Digital & QRIS</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-[14px] font-semibold text-on-surface">Tema Adat & Modern</h3>
            <ul className="space-y-1 text-[14px] text-on-surface-variant">
              <li>Jawa & Sunda Eksklusif</li><li>Minang & Melayu Klasik</li><li>Batak & Toraja Luhur</li><li>Modern Botanical Minimalis</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-[14px] font-semibold text-on-surface">Bantuan & Panduan</h3>
            <ul className="space-y-1 text-[14px] text-on-surface-variant">
              <li>Paket Harga</li><li>Panduan WhatsApp</li><li>Kontak & Bantuan</li><li>Lihat Demo Live</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-on-surface-variant">
          <p className="text-[14px]">© 2025 UNDIGITAL. Seluruh hak cipta dilindungi undang-undang.</p>
          <span className="text-[11px] tracking-widest text-primary font-bold">INDONESIA WEDDING SAAS</span>
        </div>
      </div>
    </footer>
  )
}
