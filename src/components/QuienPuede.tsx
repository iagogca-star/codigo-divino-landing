import FadeIn from './FadeIn'

const items = [
  {
    icon: '&#127891;',
    title: 'Profesores',
    desc: 'Perfecto para maestros de escuela dominical y educadores cristianos que buscan material didáctico de calidad.',
  },
  {
    icon: '&#127942;',
    title: 'Estudiantes',
    desc: 'Ideal para quienes desean profundizar en el conocimiento bíblico con un enfoque claro y organizado.',
  },
  {
    icon: '&#127968;',
    title: 'Familias',
    desc: 'Un recurso valioso para el estudio bíblico en familia, con materiales adaptables para todas las edades.',
  },
  {
    icon: '&#127988;',
    title: 'Líderes de iglesia',
    desc: 'Herramienta esencial para pastores, líderes de grupos pequeños y ministerios de enseñanza.',
  },
]

export default function QuienPuede() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">¿Quién puede usarlo?</h2>
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
