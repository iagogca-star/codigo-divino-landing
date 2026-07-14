import CTA from './CTA'
import FadeIn from './FadeIn'

const books = [
  { title: '170 Bosquejos de Josué', desc: 'Una guía completa de 170 bosquejos sobre el libro de Josué.' },
  { title: '30 Días de Oración con Jesús', desc: 'Un mes de oraciones guiadas para fortalecer tu comunicación con Dios.' },
  { title: 'Estudio de Génesis', desc: 'Análisis profundo del libro de los orígenes, versículo por versículo.' },
  { title: 'Estudio de Éxodo', desc: 'Descubre el poderoso Éxodo y su significado para tu fe.' },
  { title: 'Estudio de Levítico', desc: 'Explora el libro del culto y la santidad de una forma clara.' },
]

const gradients = [
  'from-amber-900/60 to-dark',
  'from-blue-900/60 to-dark',
  'from-emerald-900/60 to-dark',
  'from-red-900/60 to-dark',
  'from-purple-900/60 to-dark',
]

export default function QueIncluye() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">¿Qué incluye?</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            5 materiales completos para tu crecimiento espiritual
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {books.map((book, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark group h-full flex flex-col">
                <div className={`aspect-[2/3] rounded-lg mb-4 bg-gradient-to-br ${gradients[i]} border border-gold/10 flex items-center justify-center p-4 group-hover:border-gold/40 transition-all`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-gold/70">&#x271E;</div>
                    <h3 className="font-montserrat text-white text-sm font-semibold leading-tight">{book.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm flex-grow">{book.desc}</p>
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
