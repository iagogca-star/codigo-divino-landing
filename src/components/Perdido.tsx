import CTA from './CTA'
import FadeIn from './FadeIn'

export default function Perdido() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">¿Te has sentido así?</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-6">
            Abres la Biblia con ganas de aprender… pero a los pocos minutos te sientes frustrado porque no entiendes el contexto, el lenguaje te parece antiguo y terminas cerrando el libro con más dudas que certezas.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            No te preocupes. No es tu culpa. La Biblia fue escrita en otro tiempo, en otro idioma, para otra cultura. Lo que necesitas no es más esfuerzo, sino una guía que traduzca esas palabras antiguas a verdades que transformen tu vida hoy.
            <br /><br />
            <strong className="text-gold">Código Divino es exactamente eso.</strong>
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA label="Quiero Dejar de Sentirme Perdido" />
        </FadeIn>
      </div>
    </section>
  )
}
