import CTA from './CTA'
import FadeIn from './FadeIn'

export default function QueEs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">¿Qué es CÓDIGO DIVINO?</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-6">
            Código Divino es un material de estudio bíblico cuidadosamente diseñado para ayudarte a comprender la Biblia de una manera clara, sencilla y profunda.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Con bosquejos detallados, guías de oración y estudios versículo por versículo de los libros del Pentateuco,
            este recurso te brinda las herramientas necesarias para enseñar, aprender y crecer espiritualmente.
            Ya seas un líder de iglesia, un estudiante de la Biblia o alguien que apenas comienza su caminar de fe,
            Código Divino te guiará paso a paso en el descubrimiento de las verdades fundamentales de la Palabra de Dios.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA />
        </FadeIn>
      </div>
    </section>
  )
}
