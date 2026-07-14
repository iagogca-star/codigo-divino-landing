import FadeIn from './FadeIn'

const items = [
  {
    icon: '&#127891;',
    title: 'Profesores',
    desc: 'Si enseñas en la iglesia o escuela dominical, este material te dará la estructura que necesitas para preparar lecciones claras y profundas.',
  },
  {
    icon: '&#127942;',
    title: 'Estudiantes',
    desc: 'Si tienes hambre de conocimiento pero los textos teológicos te abruman, aquí encontrarás explicaciones que realmente entiendes.',
  },
  {
    icon: '&#127968;',
    title: 'Familias',
    desc: 'Si deseas que tus hijos conozcan la Biblia de una forma amena y comprensible, este material es el puente que estabas buscando.',
  },
  {
    icon: '&#127988;',
    title: 'Líderes de iglesia',
    desc: 'Si guías a otros en su caminar espiritual, necesitas herramientas que hablen claro. Código Divino es tu aliado.',
  },
]

export default function QuienPuede() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">¿Para Quién es Este Material?</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark text-center group">
                <div className="text-5xl mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="font-montserrat text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
