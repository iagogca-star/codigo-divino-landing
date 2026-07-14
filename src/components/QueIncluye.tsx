import CTA from './CTA'
import FadeIn from './FadeIn'

const books = [
  { title: '170 Bosquejos de Josué', desc: 'Comprende el verdadero significado de cada pasaje sin sentirte perdido.' },
  { title: '30 Días de Oración con Jesús', desc: 'Transforma tu vida de oración en solo 30 días con una guía paso a paso.' },
  { title: 'Estudio de Génesis', desc: 'Descubre el origen de todo desde una perspectiva clara que transformará tu fe.' },
  { title: 'Estudio de Éxodo', desc: 'El poderoso mensaje de liberación que aún hoy tiene poder para cambiar tu vida.' },
  { title: 'Estudio de Levítico', desc: 'El libro del culto explicado de forma tan sencilla que finalmente lo entenderás.' },
]

const covers = [
  'https://files.nextgocard.com.br/banners/a4efead7-5139-42e5-a334-0e840046be50.png',
  'https://files.nextgocard.com.br/banners/d8db22ee-035e-493e-bfdd-3371370a9904.png',
  'https://files.nextgocard.com.br/banners/d5df6a20-2deb-4daa-a8d4-c8d6a33389a7.png',
  'https://files.nextgocard.com.br/banners/2d50b8df-2e09-459e-acb0-ece2e5c9d32a.png',
  'https://files.nextgocard.com.br/banners/1779512b-3194-4798-b812-68ef79c10091.png',
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
                <div className="aspect-[2/3] rounded-lg mb-4 overflow-hidden border border-gold/10 group-hover:border-gold/40 transition-all">
                  <img src={covers[i]} alt={book.title} className="w-full h-full object-cover" />
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
