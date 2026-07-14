import CTA from './CTA'
import FadeIn from './FadeIn'

export default function Perdido() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">¿Te has sentido perdido al leer la Biblia?</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-6">
            No estás solo. Muchos cristianos enfrentan la misma dificultad: abren la Biblia pero no saben por dónde empezar,
            encuentran pasajes difíciles de entender o simplemente no logran mantener una rutina de estudio constante.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Código Divino fue creado precisamente para resolver esto. Con explicaciones claras, un enfoque paso a paso
            y materiales complementarios diseñados por expertos en teología, finalmente podrás entender la Biblia
            de principio a fin y aplicar sus enseñanzas en tu día a día.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA />
        </FadeIn>
      </div>
    </section>
  )
}
