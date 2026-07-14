import { useState } from 'react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: '¿Cómo recibo el material después de la compra?',
    a: 'Inmediatamente después de la compra, recibirás un enlace de descarga en tu correo electrónico. Todo el material está en formato digital (PDF) y puedes acceder desde cualquier dispositivo.',
  },
  {
    q: '¿Funciona en el celular o tengo que tener computadora?',
    a: 'Funciona perfectamente en celular, tablet, computadora o cualquier dispositivo con lector de PDF. Puedes estudiar donde quieras, cuando quieras.',
  },
  {
    q: '¿Necesito estudiar teología para entender el material?',
    a: 'Para nada. Código Divino fue creado exactamente para quienes NO estudiaron teología. Las explicaciones son claras, sencillas y progresivas. Cualquier persona puede entenderlo.',
  },
  {
    q: '¿Puedo descargar el material o solo es en línea?',
    a: 'Puedes descargar todo el material y guardarlo en tus dispositivos. No necesitas internet para leerlo después de la descarga.',
  },
  {
    q: '¿El pago es seguro?',
    a: 'Sí. El pago se procesa a través de Kiwify, una plataforma líder en pagos digitales en América Latina. Tus datos están protegidos con encriptación de nivel bancario.',
  },
  {
    q: '¿Tengo acceso vitalicio?',
    a: 'Sí. Una vez que adquieres Código Divino, tienes acceso de por vida a todos los materiales y a las actualizaciones futuras sin costo adicional.',
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
        <p className="text-gray-400 text-center mb-10">Resuelve tus dudas antes de comprar</p>
        <div className="mt-2 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
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
