import React from 'react'

export default function Header({ route = '/' }) {
  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Katalog Tema', href: '/#katalog' },
    { label: 'Studio Ilustrasi', href: '/#studio' },
    { label: 'Dashboard Manajemen', href: '/' },
    { label: 'Demo Undangan', href: '/#demo' },
    { label: 'Fitur', href: '/#fitur' },
    { label: 'Harga', href: '/#harga' },
  ]

  const isActive = (l) => {
    if (route === '/buat-undangan') return l.label === 'Dashboard Manajemen' ? false : false
    return l.label === 'Dashboard Manajemen'
  }

  const go = (e, href) => {
    // SPA navigation for internal routes without reload when possible
    if (href === '/' || href === '/buat-undangan') {
      e.preventDefault()
      if (window.location.pathname !== href) {
        window.history.pushState({}, '', href)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('/#')) {
      // hash anchor on landing page
      if (route !== '/') {
        e.preventDefault()
        window.history.pushState({}, '', '/')
        window.dispatchEvent(new PopStateEvent('popstate'))
        setTimeout(() => {
          const id = href.replace('/#', '')
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-on-secondary-container shadow-[0_12px_32px_-4px_rgba(13,71,161,0.18)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => go(e, '/')}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-2xl bg-primary-container flex items-center justify-center text-white font-display font-bold text-lg">U</div>
          <span className="font-display text-[22px] text-white tracking-wide">UNDIGITAL</span>
        </a>
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className={
                isActive(l)
                  ? 'text-primary-fixed-dim font-bold text-[14px]'
                  : 'text-[14px] font-semibold text-primary-fixed hover:text-white transition-colors'
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" onClick={(e) => e.preventDefault()} className="hidden sm:inline-flex px-4 py-2 rounded-full text-[14px] font-semibold text-primary-fixed hover:text-white">Masuk</a>
          <a
            href="/buat-undangan"
            onClick={(e) => go(e, '/buat-undangan')}
            className="px-4 py-2 rounded-full bg-primary-container text-white text-[14px] font-semibold shadow-md hover:bg-primary transition-all"
          >
            Buat Undangan Sekarang
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}
