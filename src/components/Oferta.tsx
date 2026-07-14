import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.hotmart.com/N106665538A?checkoutMode=10'

const items = [
  'Comprende el verdadero significado de cada pasaje sin sentirte perdido',
  'Acceso inmediato a los 11 ebooks + 5 bonos exclusivos',
  'Estudia en tu celular, tablet o computadora donde y cuando quieras',
  'Actualizaciones gratuitas y nuevos materiales de por vida',
  'Garantía incondicional de 7 días — riesgo cero',
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
            Por tiempo limitado, accede a la colección completa con un descuento exclusivo
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="inline-block bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 border border-gold/30 rounded-2xl p-8 md:p-10 mb-8 max-w-lg mx-auto">
            <div className="text-sm font-montserrat font-bold text-gold tracking-widest mb-3">&#128293; OFERTA ESPECIAL</div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="price-old text-2xl">$49 USD</span>
              <span className="text-5xl md:text-6xl font-montserrat font-bold text-gold">$9.90</span>
            </div>
            <p className="text-green-check font-semibold mb-6">&#10004; Pago único — sin mensualidades</p>
            <p className="text-gray-500 text-sm mb-6">
              Valor total del material: <span className="line-through">$197 USD</span>
            </p>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lg inline-block text-2xl px-12 py-6 animate-pulse shadow-lg shadow-gold/20 w-full"
            >
              Sí, Quiero Mi Acceso Inmediato
            </a>
          </div>
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
      </div>
    </section>
  )
}
