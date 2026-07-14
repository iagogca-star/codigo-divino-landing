import FadeIn from './FadeIn'

const testimonials = [
  {
    name: 'María González',
    city: 'Bogotá, Colombia',
    text: 'Nunca había entendido la Biblia como ahora. Código Divino me dio las herramientas para estudiar por mi cuenta y enseñar en mi grupo de la iglesia. Ahora mis chicos me preguntan y puedo responder con confianza.',
    role: 'Líder de grupo juvenil',
    result: '&#10003; Pasó de no entender nada a enseñar en su iglesia',
  },
  {
    name: 'Carlos Mendoza',
    city: 'Lima, Perú',
    text: 'Como pastor, siempre buscaba material estructurado para mis estudios. Este es el recurso más completo que he encontrado. Mis congregaciones han crecido en conocimiento y en fe.',
    role: 'Pastor',
    result: '&#10003; Transformó la enseñanza en su congregación',
  },
  {
    name: 'Ana Lucía Ramírez',
    city: 'Santiago, Chile',
    text: 'Compramos el material para estudiarlo en familia. Mis hijos ahora aman la hora del estudio bíblico. ¡Ha transformado nuestros devocionales! Al fin encontramos algo que todos entienden.',
    role: 'Madre de familia',
    result: '&#10003; Unió a su familia alrededor de la Palabra',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 title="no hacer" className="section-title text-center">Lo Que Dicen Quienes Ya Transformaron su Estudio Bíblico</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-gold font-montserrat text-xl text-center font-semibold mb-12">
            &#10003; Más de 4.000 cristianos ya lo están usando en toda América Latina
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
                <div className="border-t border-white/5 pt-4">
                  <p className="font-montserrat font-semibold text-white">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.city}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                  <p className="text-green-check text-sm mt-2" dangerouslySetInnerHTML={{ __html: t.result }} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
