import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.hotmart.com/N106665538A?checkoutMode=10'

const items = [
  '5 materiales de estudio bíblico completos que transformarán tu comprensión de la Biblia',
  '5 bonos exclusivos valorados en más de USD 137 — incluidos GRATIS',
  'Acceso inmediato en formato digital — recibe todo hoy mismo',
  'Actualizaciones gratuitas de por vida — siempre tendrás la mejor versión',
  'Garantía incondicional de 7 días — riesgo cero para ti',
]

export default function Oferta() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">Inversión que Transforma tu Vida Espiritual</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-8">
            Por menos de lo que cuesta un café al día, tienes acceso al material más completo de estudio bíblico
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mb-4">
            <span className="price-old text-2xl">USD 49</span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-400">Valor real: USD 197</span>
          </div>
          <div className="price-current mb-2">USD 9,90</div>
          <p className="text-green-check font-semibold mb-2">&#10004; Pago único — sin mensualidades</p>
          <p className="text-gray-500 text-sm mb-8">Menos de USD 0,33 por día</p>
        </FadeIn>
        <FadeIn delay={400}>
          <ul className="max-w-lg mx-auto space-y-3 mb-10 text-left">
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
            Sí, Quiero Mi Acceso Inmediato
          </a>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500">
            <span>&#128274; Pago 100% Seguro</span>
            <span>&#9989; Acceso Inmediato</span>
            <span>&#128737; 7 Días de Garantía</span>
            <span>&#128179; Compra Protegida</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
