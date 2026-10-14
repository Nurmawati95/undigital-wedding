import React from 'react'

const links = ['Beranda', 'Katalog Tema', 'Studio Ilustrasi', 'Dashboard Manajemen', 'Demo Undangan', 'Fitur', 'Harga']

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-on-secondary-container shadow-[0_12px_32px_-4px_rgba(13,71,161,0.18)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-primary-container flex items-center justify-center text-white font-display font-bold text-lg">U</div>
          <span className="font-display text-[22px] text-white tracking-wide">UNDIGITAL</span>
        </div>
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={
                l === 'Dashboard Manajemen'
                  ? 'text-primary-fixed-dim font-bold text-[14px]'
                  : 'text-[14px] font-semibold text-primary-fixed hover:text-white transition-colors'
              }
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" onClick={(e) => e.preventDefault()} className="hidden sm:inline-flex px-4 py-2 rounded-full text-[14px] font-semibold text-primary-fixed hover:text-white">Masuk</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="px-4 py-2 rounded-full bg-primary-container text-white text-[14px] font-semibold shadow-md hover:bg-primary transition-all">Buat Undangan Sekarang</a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}
