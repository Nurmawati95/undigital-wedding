import React from 'react'
import { cardCls, inputCls, labelCls } from './constants.js'
export default function StepAmplop({ form, set }) {
  const F = (k, l) => (<div><label className={labelCls}>{l}</label><input className={inputCls} value={form[k]} onChange={(e) => set(k, e.target.value)} /></div>)
  return (
    <div className={cardCls}>
      <h2 className="font-display text-[24px] text-on-secondary-fixed">Amplop Digital & QRIS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{F('bank1', 'Bank 1')}{F('norek1', 'No. Rekening 1')}{F('an1', 'a.n')}</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{F('bank2', 'Bank 2')}{F('norek2', 'No. Rekening 2')}{F('an2', 'a.n')}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{F('nmid', 'NMID QRIS')}{F('wa', 'WA Konfirmasi (628...)')}</div>
    </div>
  )
}
