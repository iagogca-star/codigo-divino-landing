import FadeIn from './FadeIn'

const ventajas = [
  {
    icon: '&#128214;',
    title: 'Entendimiento Profundo',
    desc: 'Comprende el verdadero significado de cada pasaje bíblico sin necesidad de conocimientos previos. La Biblia deja de ser un libro cerrado.',
  },
  {
    icon: '&#128200;',
    title: 'Crecimiento Espiritual',
    desc: 'Diseñado para llevarte de lo básico a lo profundo paso a paso. Cada estudio fortalece tu fe y transforma tu relación con Dios.',
  },
  {
    icon: '&#128176;',
    title: 'Acceso Inmediato',
    desc: 'Comienza hoy mismo. Recibe todo el material en tu correo al instante y estudia a tu ritmo, cuando y donde quieras.',
  },
  {
    icon: '&#128736;',
    title: 'Aplicación en tu Vida',
    desc: 'Cada lección incluye reflexiones y aplicaciones prácticas que transforman tu día a día y te acercan más a Dios.',
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
              <div className="card-dark text-center group h-full flex flex-col">
                <div className="text-5xl mb-4" dangerouslySetInnerHTML={{ __html: v.icon }} />
                <h3 className="font-montserrat text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 flex-grow">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
