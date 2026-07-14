import CTA from './CTA'
import FadeIn from './FadeIn'

const books = [
  { title: '170 Bosquejos de Josué', desc: 'Comprende el verdadero significado de cada pasaje sin sentirte perdido.' },
  { title: '30 Días de Oración con Jesús', desc: 'Transforma tu vida de oración en solo 30 días con una guía paso a paso.' },
  { title: 'Estudio de Génesis', desc: 'Descubre el origen de todo desde una perspectiva clara que transformará tu fe.' },
  { title: 'Estudio de Éxodo', desc: 'El poderoso mensaje de liberación que aún hoy tiene poder para cambiar tu vida.' },
  { title: 'Estudio de Levítico', desc: 'El libro del culto explicado de forma tan sencilla que finalmente lo entenderás.' },
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
          <h2 className="section-title text-center">Todo lo que Necesitas para Transformar tu Estudio Bíblico</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            5 materiales diseñados para que la Biblia cobre vida en tus manos
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
            <CTA label="Sí, Quiero Todo Este Contenido" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
