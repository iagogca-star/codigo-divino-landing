import CTA from './CTA'
import FadeIn from './FadeIn'

const bonos = [
  { title: 'Devocionales de Poder', desc: '30 días para profundizar tu fé y experimentar una transformación espiritual cada mañana.', cover: '/covers/devocionales.jpg', valor: 29 },
  { title: 'Historias Bíblicas para toda la família', desc: 'Relatos bíblicos ilustrados que unirán a tu familia alrededor de la Palabra de Dios.', cover: '/covers/historias.jpg', valor: 27 },
  { title: 'Los 10 Mandamientos', desc: 'Comprende la historia, el significado profundo y la aplicación espiritual de la Ley de Dios.', cover: '/covers/mandamientos.jpg', valor: 25 },
  { title: 'Los Milagros de Jesús', desc: 'Descubre el poder transformador de los milagros de Jesús y cómo fortalecen tu fe hoy.', cover: '/covers/milagros.jpg', valor: 27 },
  { title: 'Manual de Interpretación Bíblica para Principiantes', desc: 'Aprende a interpretar la Biblia correctamente con principios claros y prácticos.', cover: '/covers/manual.jpg', valor: 29 },
]

const totalBonos = bonos.reduce((acc, b) => acc + b.valor, 0)

export default function Bonos() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Bonos exclusivos</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            Al adquirir Código Divino, recibirás estos bonos completamente GRATIS
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {bonos.map((bono, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="card-dark group flex flex-col h-full">
                <div className="aspect-[2/3] rounded-lg mb-4 overflow-hidden border border-gold/10 group-hover:border-gold/40 transition-all shadow-lg">
                  <img
                    src={bono.cover}
                    alt={bono.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-montserrat text-white text-sm font-semibold leading-tight mb-2">{bono.title}</h3>
                <p className="text-gray-400 text-sm flex-grow mb-3">{bono.desc}</p>
                <p className="text-xs text-gray-500">
                  <span className="price-old">$ {bono.valor} USD</span>{' '}
                  <span className="text-gold font-bold">GRATIS</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <div className="text-center mb-10">
            <p className="text-gray-400 text-lg mb-2">
              Valor total de los bonos: <span className="price-old text-xl">${totalBonos} USD</span>
            </p>
            <p className="text-gold font-montserrat text-xl font-bold">
              Hoy: <span className="text-2xl">$0 USD</span> — incluidos en tu compra
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="text-center">
            <CTA />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
