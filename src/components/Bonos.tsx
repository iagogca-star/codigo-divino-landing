import CTA from './CTA'
import FadeIn from './FadeIn'

const bonos = [
  { title: 'Devocionales de Poder', desc: '30 días para profundizar tu fé.' },
  { title: 'Historias Bíblicas para toda la família', desc: 'Relatos bíblicos ilustrados para compartir en familia.' },
  { title: 'Los 10 Mandamientos', desc: 'Historia y Aplicación Espiritual.' },
  { title: 'Los Milagros de Jesús', desc: 'Descubre el poder de los milagros de Jesús.' },
  { title: 'Manual de Interpretación Bíblica para Principiantes', desc: 'Aprende a interpretar la Biblia de forma correcta.' },
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
          <h2 className="section-title text-center">Bonos exclusivos</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            Al adquirir Código Divino, recibirás estos bonos completamente GRATIS
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
