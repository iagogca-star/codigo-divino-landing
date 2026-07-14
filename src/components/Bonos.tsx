import CTA from './CTA'
import FadeIn from './FadeIn'

const bonos = [
  { title: 'Devocionales de Poder', desc: '30 días para profundizar tu fe y despertar cada mañana con la Palabra en tu corazón.', valor: 'USD 29' },
  { title: 'Historias Bíblicas para toda la família', desc: 'Relatos bíblicos que transformarán la hora del devocional familiar en un momento inolvidable.', valor: 'USD 27' },
  { title: 'Los 10 Mandamientos', desc: 'Historia y Aplicación Espiritual. Descubre cómo los mandamientos siguen vigentes y transforman tu vida hoy.', valor: 'USD 25' },
  { title: 'Los Milagros de Jesús', desc: 'Cada milagro explicado con claridad para que tu fe se fortalezca al comprender su verdadero significado.', valor: 'USD 27' },
  { title: 'Manual de Interpretación Bíblica para Principiantes', desc: 'Aprende a interpretar la Biblia de forma correcta, sin errores y con confianza.', valor: 'USD 29' },
]

const gradients = [
  'from-yellow-900/60 to-dark',
  'from-indigo-900/60 to-dark',
  'from-teal-900/60 to-dark',
  'from-rose-900/60 to-dark',
  'from-cyan-900/60 to-dark',
]

export default function Bonos() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Bonos Exclusivos — Valor Total de Hasta USD 137</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            Al adquirir Código Divino HOY, recibirás estos bonos completamente GRATIS
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {bonos.map((bono, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark group flex flex-col">
                <div className={`aspect-[2/3] rounded-lg mb-4 bg-gradient-to-br ${gradients[i]} border border-gold/10 flex items-center justify-center p-4 group-hover:border-gold/40 transition-all`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-gold/70">&#9734;</div>
                    <h3 className="font-montserrat text-white text-sm font-semibold leading-tight">{bono.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm flex-grow mb-2">{bono.desc}</p>
                <p className="text-xs text-gray-500">
                  <span className="price-old">Valor: {bono.valor}</span>
                  <span className="text-gold font-bold ml-2">GRATIS</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <div className="text-center max-w-md mx-auto border border-gold/20 rounded-xl p-6 bg-gold/5 mb-8">
            <p className="text-gray-400 mb-1">Valor total del material:</p>
            <p className="text-gray-500"><span className="price-old text-2xl">USD 197</span></p>
            <p className="text-white font-montserrat text-2xl font-bold mt-2">Hoy: <span className="text-gold">USD 9,90</span></p>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="text-center">
            <CTA label="Sí, Quiero Todo con los Bonos Incluidos" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
