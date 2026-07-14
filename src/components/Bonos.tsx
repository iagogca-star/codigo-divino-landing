import CTA from './CTA'
import FadeIn from './FadeIn'

const bonos = [
  { title: 'Devocionales de Poder', desc: '30 días para profundizar tu fé.', cover: '/covers/devocionales.jpg' },
  { title: 'Historias Bíblicas para toda la família', desc: 'Relatos bíblicos ilustrados para compartir en familia.', cover: '/covers/historias.jpg' },
  { title: 'Los 10 Mandamientos', desc: 'Historia y Aplicación Espiritual.', cover: '/covers/mandamientos.jpg' },
  { title: 'Los Milagros de Jesús', desc: 'Descubre el poder de los milagros de Jesús.', cover: '/covers/milagros.jpg' },
  { title: 'Manual de Interpretación Bíblica para Principiantes', desc: 'Aprende a interpretar la Biblia de forma correcta.', cover: '/covers/manual.jpg' },
]

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
                <p className="text-xs text-gray-500"><span className="price-old">DE $10</span> <span className="text-gold font-bold">Por $0</span></p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={600}>
          <div className="text-center">
            <CTA />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
