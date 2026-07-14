import { useState } from 'react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: '¿Cómo recibiré el material después de la compra?',
    a: 'Inmediatamente después de la compra, recibirás un enlace de descarga en tu correo electrónico con acceso a todos los materiales en formato digital (PDF).',
  },
  {
    q: '¿El material es físico o digital?',
    a: 'Todo el material es digital. Puedes descargarlo, imprimirlo o usarlo directamente en tu computadora, tablet o celular.',
  },
  {
    q: '¿Sirve para personas que recién comienzan a leer la Biblia?',
    a: 'Sí. Código Divino está diseñado tanto para principiantes como para personas con experiencia. Las explicaciones son claras y progresivas.',
  },
  {
    q: '¿Cuánto tiempo tengo acceso al material?',
    a: 'Una vez adquirido, tienes acceso ilimitado y de por vida a todos los materiales y futuras actualizaciones.',
  },
  {
    q: '¿Ofrecen reembolso si no me gusta?',
    a: 'Sí. Ofrecemos una garantía incondicional de 7 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero.',
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
