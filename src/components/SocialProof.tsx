import FadeIn from './FadeIn'

const testimonials = [
  {
    name: 'María González',
    text: 'Nunca había entendido la Biblia como ahora. Código Divino me dio las herramientas para estudiar por mi cuenta y enseñar en mi grupo de la iglesia.',
    role: 'Líder de grupo juvenil',
  },
  {
    name: 'Carlos Mendoza',
    text: 'Como pastor, siempre buscaba material estructurado para mis estudios. Este es el recurso más completo que he encontrado. Mis congregaciones han crecido en conocimiento.',
    role: 'Pastor',
  },
  {
    name: 'Ana Lucía Ramírez',
    text: 'Compramos el material para estudiarlo en familia. Mis hijos ahora aman la hora del estudio bíblico. ¡Ha transformado nuestros devocionales!',
    role: 'Madre de familia',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Lo que dicen nuestros usuarios</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-gold font-montserrat text-xl text-center font-semibold mb-12">
            &#10003; Más de 4.000 cristianos ya lo están usando
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="card-dark">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="star text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-montserrat font-semibold text-white">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
