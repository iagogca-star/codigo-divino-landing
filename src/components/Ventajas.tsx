import FadeIn from './FadeIn'

const ventajas = [
  {
    icon: '&#128214;',
    title: 'Claridad que Transforma',
    desc: 'Deja atrás la confusión. Cada explicación está diseñada para que entiendas la Biblia como nunca antes.',
  },
  {
    icon: '&#128200;',
    title: 'Paz al Estudiar',
    desc: 'La tranquilidad de saber que estás entendiendo correctamente lo que Dios quiere decirte.',
  },
  {
    icon: '&#128176;',
    title: 'Ahorra Tiempo y Dinero',
    desc: 'Todo lo que necesitas en un solo lugar. Sin cursos caros, sin años de seminario, sin perder tiempo buscando.',
  },
  {
    icon: '&#128736;',
    title: 'Confianza al Enseñar',
    desc: 'Comparte lo que aprendes con tu familia, amigos o congregación con la seguridad de quien realmente comprende.',
  },
]

export default function Ventajas() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Lo Que Cambiará en tu Vida Cuando Empieces a Usar CÓDIGO DIVINO</h2>
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
