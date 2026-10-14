import { useEffect, useState, useMemo } from 'react'
import { formatTanggalID } from './constants.js'
export function useCountdown(iso) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  return useMemo(() => {
    const tg = iso ? new Date(iso + 'T08:00:00').getTime() : new Date('2025-10-18T08:00:00').getTime()
    let d = Math.max(0, tg - now)
    const days = Math.floor(d / 86400000); d -= days * 86400000
    const hours = Math.floor(d / 3600000); d -= hours * 3600000
    const mins = Math.floor(d / 60000); d -= mins * 60000
    return { days, hours, mins, secs: Math.floor(d % 60000 / 1000) }
  }, [now, iso])
}
