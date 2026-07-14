import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

const items = [
  '5 materiales de estudio bíblico completos',
  '5 bonos exclusivos adicionales',
  'Acceso inmediato en formato digital',
  'Actualizaciones gratuitas de por vida',
  'Garantía incondicional de 7 días',
]

export default function Oferta() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">Oferta especial de lanzamiento</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-8">
            Por tiempo limitado, accede a todo el material completo con un descuento exclusivo
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mb-4">
            <span className="price-old text-2xl">$29.90 USD</span>
          </div>
          <div className="price-current mb-6">$9.90 USD</div>
          <p className="text-green-check font-semibold mb-8">&#10004; Pago único — sin mensualidades</p>
        </FadeIn>
        <FadeIn delay={400}>
          <ul className="max-w-md mx-auto space-y-3 mb-10 text-left">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="check-green shrink-0">&#10004;</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={500}>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lg inline-block text-2xl px-12 py-6 animate-pulse shadow-lg shadow-gold/20"
          >
            Quiero Mi Acceso Ahora
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
