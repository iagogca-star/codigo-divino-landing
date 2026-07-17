import { trackEvent } from '../lib/meta-pixel'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

const CTAS = [
  'Sí, Quiero Entender la Biblia',
  'Quiero Mi Acceso Inmediato',
  'Comenzar Hoy Mismo',
  'Empieza a Transformar mi Fe',
]

let ctaIndex = 0
export function getNextCTA(): string {
  const ctas = CTAS
  const current = ctas[ctaIndex % ctas.length]
  ctaIndex++
  return current
}

export default function CTA() {
  function handleClick() {
    trackEvent('Lead')
  }

  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold inline-block"
      onClick={handleClick}
    >
      Sí, Quiero Entender la Biblia
    </a>
  )
}
