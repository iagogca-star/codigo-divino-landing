const CHECKOUT = 'https://pay.hotmart.com/N106665538A?checkoutMode=10'

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
