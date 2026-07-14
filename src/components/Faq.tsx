import { useState } from 'react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: '¿Recibiré el material inmediatamente después de comprar?',
    a: 'Sí. El acceso es inmediato. Después de confirmar tu pago, recibirás un enlace de descarga en tu correo electrónico con todos los materiales y bonos. Empiezas a estudiar hoy mismo.',
  },
  {
    q: '¿Funciona en mi celular o tengo que usar computadora?',
    a: 'Funciona en cualquier dispositivo: celular, tablet, computadora o incluso puedes imprimirlo. Los archivos son PDF optimizados para verse perfectamente en pantallas pequeñas.',
  },
  {
    q: 'Necesito estudiar teología para entender el material?',
    a: 'Para nada. Código Divino fue creado específicamente para personas sin formación teológica. Las explicaciones son claras, paso a paso, y están diseñadas para que cualquier cristiano —desde principiante hasta avanzado— pueda comprender y aplicar las Escrituras.',
  },
  {
    q: '¿Cuánto tiempo tengo acceso al material?',
    a: 'Tienes acceso de por vida. Una vez que adquieres el material, es tuyo para siempre, incluyendo todas las actualizaciones y nuevos contenidos que agreguemos en el futuro.',
  },
  {
    q: '¿Y si no me gusta o no es lo que esperaba?',
    a: 'No hay ningún riesgo. Ofrecemos una garantía incondicional de 7 días. Si en ese tiempo consideras que el material no es para ti, te devolvemos el 100% de tu dinero sin hacer preguntas. Así de simple.',
  },
  {
    q: '¿Realmente vale $9.90? ¿No hay costos ocultos?',
    a: 'Sí, $9.90 USD es el precio único final. Pago único — sin mensualidades, sin renovaciones automáticas, sin cargos ocultos. Compras una vez y el material es tuyo para siempre. El valor real del contenido supera los $197 USD, pero durante el lanzamiento está disponible con este descuento especial.',
  },
  {
    q: '¿El material incluye toda la Biblia o solo algunos libros?',
    a: 'Incluye estudios completos del Pentateuco (Génesis, Éxodo, Levítico), más 170 bosquejos de Josué, un plan de 30 días de oración y 5 bonos exclusivos que cubren interpretación bíblica, historias familiares, devocionales y más. Es una colección completa para entender las bases de las Escrituras.',
  },
  {
    q: '¿Puedo usar este material para enseñar en mi iglesia o grupo?',
    a: '¡Por supuesto! De hecho, muchos líderes y pastores lo usan precisamente para eso. El material está estructurado para ser usado tanto en estudio personal como en grupos de enseñanza. Incluye bosquejos, guías y aplicaciones prácticas ideales para predicar y enseñar.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Preguntas Frecuentes</h2>
        </FadeIn>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="card-dark p-0 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-montserrat font-semibold text-white hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-gold text-xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
