import CTA from './CTA'
import FadeIn from './FadeIn'

const books = [
  { title: '170 Bosquejos de Josué', desc: 'Una guía completa de 170 bosquejos sobre el libro de Josué.', cover: '/covers/josue.jpg' },
  { title: '30 Días de Oración con Jesús', desc: 'Un mes de oraciones guiadas para fortalecer tu comunicación con Dios.', cover: '/covers/oracion.jpg' },
  { title: 'Estudio de Génesis', desc: 'Análisis profundo del libro de los orígenes, versículo por versículo.', cover: '/covers/genesis.jpg' },
  { title: 'Estudio de Éxodo', desc: 'Descubre el poderoso Éxodo y su significado para tu fe.', cover: '/covers/exodo.jpg' },
  { title: 'Estudio de Levítico', desc: 'Explora el libro del culto y la santidad de una forma clara.', cover: '/covers/levitico.jpg' },
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
                <div className="aspect-[2/3] rounded-lg mb-4 overflow-hidden border border-gold/10 group-hover:border-gold/40 transition-all shadow-lg">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-montserrat text-white text-sm font-semibold leading-tight mb-2">{book.title}</h3>
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
