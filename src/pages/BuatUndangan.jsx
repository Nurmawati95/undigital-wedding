import React, { useEffect, useMemo, useState } from 'react'
import PhoneFrame from './buat/PhoneFrame.jsx'
import StepTema from './buat/StepTema.jsx'
import StepMempelai from './buat/StepMempelai.jsx'
import StepAcara from './buat/StepAcara.jsx'
import StepAmplop from './buat/StepAmplop.jsx'
import StepTautan from './buat/StepTautan.jsx'
import StepPublish from './buat/StepPublish.jsx'
import { STEPS, PAKETS, initialForm, slugify, formatTanggalID } from './buat/constants.js'
export default function BuatUndangan({ notify }) {
  const [step, setStep] = useState(0)
  const [pub, setPub] = useState(null)
  const [form, setForm] = useState(() => {
    try { const r = localStorage.getItem('undigital-draft'); if (r) return { ...initialForm, ...JSON.parse(r) } } catch {}
    return initialForm
  })
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }))
  const autoSlug = useMemo(() => slugify(`${form.pria.split(' ')[1] || 'arya'} ${form.wanita.split(' ')[0] || 'laras'} ${form.tanggal}`) || 'arya-laras', [form.pria, form.wanita, form.tanggal])
  useEffect(() => { if (form.slug === 'arya-laras-18-okt-2025') setForm((s) => ({ ...s, slug: autoSlug })) }, [autoSlug])
  const done = useMemo(() => {
    const k = ['pria', 'wanita', 'tanggal', 'tempatAkad', 'tempatResepsi', 'norek1', 'wa', 'slug']
    return Math.round(k.filter((x) => String(form[x] || '').trim().length > 1).length / k.length * 100)
  }, [form])
  const silent = () => { try { localStorage.setItem('undigital-draft', JSON.stringify(form)) } catch {} }
  const draft = () => { silent(); notify('Draf tersimpan di perangkat ini.') }
  const copy = async (t, m) => { try { await navigator.clipboard.writeText(t) } catch {} notify(m) }
  const testWA = () => {
    const link = `https://undigital.id/to/${form.slug || autoSlug}`
    window.open(`https://wa.me/${form.wa}?text=${encodeURIComponent('Halo ' + form.tamuContoh + ', kami mengundang ke pernikahan ' + form.pria + ' & ' + form.wanita + ', ' + formatTanggalID(form.tanggal) + '. Buka: ' + link)}`, '_blank')
  }
  const publish = () => {
    if (!form.pria.trim() || !form.wanita.trim()) { notify('Lengkapi nama mempelai.'); setStep(1); return }
    if (!form.tanggal) { notify('Pilih tanggal acara.'); setStep(2); return }
    const link = `https://undigital.id/to/${form.slug || autoSlug}`
    setPub({ link, at: new Date().toLocaleString('id-ID') })
    notify('Undangan diterbitkan: ' + link)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const home = (e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')) }
  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-surface-variant opacity-60 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
              <a href="/" onClick={home} className="hover:text-primary">Beranda</a><span>›</span>
              <span className="font-semibold text-on-surface">Buat Undangan</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-[11px] font-bold">/buat-undangan</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[40px] font-semibold text-on-secondary-fixed">Studio Buat Undangan <span className="text-primary">— Live Preview</span></h1>
            <p className="text-[15px] text-on-surface-variant max-w-2xl">Isi data sekali, pratinjau ponsel 390px mengikuti template Royal Blue: sampul, countdown, akad & resepsi, amplop QRIS, RSVP.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-4 min-w-[250px]">
            <div className="flex justify-between text-[12px] font-bold"><span>Kelengkapan</span><span className="text-primary">{done}%</span></div>
            <div className="h-2 rounded-full bg-surface-container overflow-hidden mt-1"><div className="h-full bg-primary-container" style={{ width: done + '%' }} /></div>
            <div className="flex gap-2 mt-3">
              <button onClick={draft} className="flex-1 py-2 rounded-full bg-surface-container-low text-[13px] font-bold">Simpan Draf</button>
              <button onClick={() => copy('https://undigital.id/to/' + (form.slug || autoSlug), 'Tautan disalin!')} className="flex-1 py-2 rounded-full bg-on-secondary-fixed text-white text-[13px] font-bold">Salin Tautan</button>
            </div>
          </div>
        </div>
        {pub && (
          <div className="mb-6 p-5 rounded-3xl text-white flex flex-col md:flex-row gap-4 md:items-center bg-gradient-to-r from-[#001945] via-[#002c4f] to-[#00497d]">
            <div className="flex-1"><div className="font-display text-[22px]">Undangan Live!</div><div className="text-[13px] opacity-80">{pub.at}</div>
              <button onClick={() => copy(pub.link, 'Link live disalin!')} className="mt-1 px-3 py-1.5 rounded-full bg-white/15 font-mono text-[13px]">{pub.link}</button>
            </div>
            <div className="flex gap-2">
              <button onClick={testWA} className="px-4 py-2.5 rounded-full bg-[#25D366] font-bold text-[14px]">Sebar via WA</button>
              <a href="/" onClick={home} className="px-4 py-2.5 rounded-full bg-white text-on-secondary-fixed font-bold text-[14px]">Dashboard</a>
            </div>
          </div>
        )}
        <div className="bg-white shadow-md rounded-2xl p-3 mb-6 flex gap-2 overflow-x-auto scrollbar-none">
          {STEPS.map((s) => (
            <button key={s.id} onClick={() => setStep(s.id)} className={'px-3 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap ' + (step === s.id ? 'bg-on-secondary-fixed text-white shadow-md' : step > s.id ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-surface-container-low text-on-surface-variant')}>{s.id + 1}. {s.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_430px] gap-6 items-start">
          <div className="space-y-5 min-w-0">
            {step === 0 && <StepTema form={form} set={set} notify={notify} />}
            {step === 1 && <StepMempelai form={form} set={set} />}
            {step === 2 && <StepAcara form={form} set={set} />}
            {step === 3 && <StepAmplop form={form} set={set} />}
            {step === 4 && <StepTautan form={form} set={set} autoSlug={autoSlug} onCopy={copy} onTestWA={testWA} />}
            {step === 5 && <StepPublish form={form} autoSlug={autoSlug} onPublish={publish} onDraft={draft} />}
            <div className="flex justify-between pb-10">
              <button disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))} className="px-5 py-2.5 rounded-full bg-white shadow-sm font-bold text-[14px] disabled:opacity-40">Kembali</button>
              {step < 5
                ? <button onClick={() => { silent(); setStep((s) => s + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="px-6 py-2.5 rounded-full bg-on-secondary-fixed text-white font-bold text-[14px]">Lanjut</button>
                : <button onClick={publish} className="px-6 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-[14px]">Selesaikan</button>}
            </div>
          </div>
          <div className="xl:sticky xl:top-24 flex flex-col items-center gap-4 pb-10">
            <div className="w-full max-w-[430px] bg-white shadow-md rounded-2xl p-4 flex items-center justify-between gap-2">
              <div className="text-[13px]"><b>Live Preview 390px</b><div className="text-on-surface-variant">{PAKETS.find((p) => p.id === form.paket)?.name} • {PAKETS.find((p) => p.id === form.paket)?.price}</div></div>
              <div className="flex p-1 bg-surface-container-low rounded-full">
                {['royal', 'pastel'].map((m) => (
                  <button key={m} onClick={() => set('tema', m)} className="px-3 py-1 text-[12px] font-bold rounded-full">{m === 'royal' ? 'Royal' : 'Sage'}</button>
                ))}
              </div>
            </div>
            <PhoneFrame form={form} />
          </div>
        </div>
      </div>
    </div>
  )
}
