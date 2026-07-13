const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function CTA({ label = 'Sí, Quiero Mi Acceso Inmediato', large = false }: { label?: string; large?: boolean }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={large ? 'btn-gold-lg inline-block' : 'btn-gold inline-block'}
    >
      {label}
    </a>
  )
}
