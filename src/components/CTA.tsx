const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function CTA() {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold inline-block"
    >
      Quiero Mi Acceso Ahora
    </a>
  )
}
