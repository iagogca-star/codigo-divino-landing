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
            Abres la Biblia, lees... pero sientes que no terminas de entender. Los pasajes difíciles,
            los nombres, las genealogías, los simbolismos... te preguntas si hay algo que se te escapa.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            La buena noticia es que no necesitas años de seminario para comprender las Escrituras.
            Código Divino fue creado precisamente para ti. Con explicaciones claras, un enfoque paso a paso
            y materiales diseñados para cualquier persona —sin importar su nivel de conocimiento—
            finalmente podrás entender la Biblia de principio a fin y aplicarla a tu vida.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA />
        </FadeIn>
      </div>
    </section>
  )
}
