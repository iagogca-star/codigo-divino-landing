const CHECKOUT = 'https://pay.hotmart.com/N106665538A?checkoutMode=10'

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
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold inline-block"
    >
      Sí, Quiero Entender la Biblia
    </a>
  )
}
