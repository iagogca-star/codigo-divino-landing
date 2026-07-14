import FadeIn from './FadeIn'

const ventajas = [
  {
    icon: '&#128214;',
    title: 'Contenido Estructurado',
    desc: 'Material organizado por temas y libros, facilitando el estudio sistemático de la Biblia.',
  },
  {
    icon: '&#128200;',
    title: 'Aprendizaje Progresivo',
    desc: 'Diseñado para llevarte de lo básico a lo profundo, paso a paso y sin complicaciones.',
  },
  {
    icon: '&#128176;',
    title: 'Acceso Inmediato',
    desc: 'Recibe todo el material en formato digital al instante después de tu compra.',
  },
  {
    icon: '&#128736;',
    title: 'Práctico y Aplicable',
    desc: 'Cada lección incluye aplicaciones prácticas para tu vida diaria y espiritual.',
  },
]

export default function Ventajas() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Ventajas de usar CÓDIGO DIVINO</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {ventajas.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark text-center group">
                <div className="text-5xl mb-4" dangerouslySetInnerHTML={{ __html: v.icon }} />
                <h3 className="font-montserrat text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
