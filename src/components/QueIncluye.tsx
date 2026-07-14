import CTA from './CTA'
import FadeIn from './FadeIn'

const books = [
  { title: '170 Bosquejos de Josué', desc: 'Comprende la conquista de la tierra prometida y aprende a liderar con fe como Josué.', cover: '/covers/josue.jpg' },
  { title: '30 Días de Oración con Jesús', desc: 'Transforma tu vida de oración en solo 30 días con versículos guiados del Pentateuco.', cover: '/covers/oracion.jpg' },
  { title: 'Estudio de Génesis', desc: 'Descubre el origen de todo —la creación, el propósito de Dios y las raíces de tu fe.', cover: '/covers/genesis.jpg' },
  { title: 'Estudio de Éxodo', desc: 'Vive el poder de la redención mientras exploras la liberación de Israel y su significado para ti.', cover: '/covers/exodo.jpg' },
  { title: 'Estudio de Levítico', desc: 'Entiende el corazón de la santidad y cómo acercarte a Dios con confianza y reverencia.', cover: '/covers/levitico.jpg' },
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
            Colección completa para transformar tu estudio bíblico
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
