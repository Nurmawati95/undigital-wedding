import React from 'react'

export default function GuestRow({ g, onResend, onEdit, onDelete, onSendNow }) {
  return (
    <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="py-4 px-4">
        <div className="text-[14px] font-bold text-on-surface">{g.name}</div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-on-surface-variant">{g.phone}</span>
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${g.categoryStyle}`}>{g.categoryLabel}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        {g.waPending
          ? <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-highest text-error text-[12px] font-semibold"><span className="material-symbols-outlined text-[15px]">schedule</span> {g.wa}</span>
          : g.wa === 'Terkirim'
            ? <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant text-[12px]"><span className="material-symbols-outlined text-[15px]">check</span> {g.wa}</span>
            : <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-primary text-[12px] font-semibold"><span className="material-symbols-outlined text-[15px]">done_all</span> {g.wa}</span>}
      </td>
      <td className="py-4 px-4">
        {g.rsvpWait
          ? <span className="text-xs text-on-surface-variant italic">{g.rsvp}</span>
          : <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[12px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {g.rsvp}</span>}
      </td>
      <td className="py-4 px-4">
        {g.angpaoVia
          ? <><div className="font-bold text-on-surface">{g.angpao}</div><div className="text-[11px] text-primary">{g.angpaoVia}</div></>
          : <div className="text-on-surface-variant text-xs">{g.angpao}</div>}
      </td>
      <td className="py-4 px-4"><span className="text-xs text-on-surface-variant font-medium">{g.checkin}</span></td>
      <td className="py-4 px-4 text-right">
        <div className="inline-flex items-center gap-1">
          {g.unsent
            ? <button onClick={() => onSendNow(g)} className="p-2 rounded-full bg-primary-container text-white hover:bg-primary transition-all" title="Kirim Undangan Sekarang"><span className="material-symbols-outlined text-[18px]">send</span></button>
            : <button onClick={() => onResend(g)} className="p-2 rounded-full hover:bg-surface-container text-primary transition-all" title="Kirim Ulang WA"><span className="material-symbols-outlined text-[18px]">chat</span></button>}
          <button onClick={() => onEdit(g)} className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-all" title="Edit Data"><span className="material-symbols-outlined text-[18px]">edit</span></button>
          <button onClick={() => onDelete(g)} className="p-2 rounded-full hover:bg-surface-container text-error transition-all" title="Hapus"><span className="material-symbols-outlined text-[18px]">delete</span></button>
        </div>
      </td>
    </tr>
  )
}
