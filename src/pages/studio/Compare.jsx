import React, { useRef, useState } from 'react'
import { BEFORE_IMG, AFTER_IMG } from './data.js'
export default function Compare() {
  const [pos, setPos] = useState(50)
  const boxRef = useRef(null)
  const drag = useRef(false)
  const upd = (x) => {
    const el = boxRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const v = Math.max(0, Math.min(x - r.left, r.width))
    setPos((v / r.width) * 100)
  }
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-[0_12px_40px_-6px_rgba(13,71,161,0.08)] mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4">
        <div>
          <span className="text-[11px] tracking-[0.12em] font-bold text-primary uppercase">Transformasi Interaktif</span>
          <h2 className="font-display text-[22px] text-on-secondary-container mt-1">Dari Foto Santai Menjadi Busana Adat Sakral</h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-on-secondary-container text-[12px] font-semibold">
          <span className="material-symbols-outlined text-base">swipe</span><span>Geser slider untuk melihat transformasi busana</span>
        </div>
      </div>
      <div ref={boxRef} onPointerDown={(e) => { drag.current = true; upd(e.clientX) }} onPointerMove={(e) => { if (drag.current) upd(e.clientX) }} onPointerUp={() => { drag.current = false }} onPointerLeave={() => { drag.current = false }} className="relative w-full h-[380px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-surface-container touch-none">
        <img src={AFTER_IMG} alt="Sesudah" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
        <div className="absolute top-4 right-4 bg-on-secondary-container/90 px-3.5 py-1 rounded-full text-white text-[12px] font-semibold">Sesudah: Ilustrasi Adat Jawa Solo</div>
        <div className="absolute bottom-4 right-4 bg-white/90 px-3.5 py-2 rounded-2xl text-on-secondary-container text-[12px] font-semibold max-w-xs text-right hidden sm:block">Paes Ageng, Cunduk Mentul &amp; Batik Prangtritis Elegan</div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={BEFORE_IMG} alt="Sebelum" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
          <div className="absolute top-4 left-4 bg-on-surface/80 px-3.5 py-1 rounded-full text-white text-[12px] font-semibold">Sebelum: Foto Kasual Pasangan</div>
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-white" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-primary-container text-white flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-lg">drag_indicator</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between text-[12px] font-semibold mt-4 px-2 text-on-surface-variant">
        <span>Foto HP Biasa (Kamera Kasual)</span><span className="text-primary font-bold">Hasil Akhir Ilustrasi Digital Adat Siap Cetak</span>
      </div>
    </div>
  )
}
