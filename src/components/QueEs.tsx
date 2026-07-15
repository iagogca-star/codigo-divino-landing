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
          <p className="section-subtitle mb-8">
            <span className="text-gold font-semibold">No necesitas estudiar teología para comprender las Escrituras.</span>
            <br />
            Este material fue creado para que cualquier persona —sin importar su nivel de conocimiento— pueda entender la Biblia
            con claridad, aplicarla a su vida y crecer espiritualmente.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-10">
            <div className="flex items-center gap-2 text-green-check font-semibold">
              <span>&#10004;</span> Comprende la Biblia fácilmente
            </div>
            <div className="flex items-center gap-2 text-green-check font-semibold">
              <span>&#10004;</span> Acceso inmediato
            </div>
            <div className="flex items-center gap-2 text-green-check font-semibold">
              <span>&#10004;</span> Más de 5 bonos exclusivos
            </div>
            <div className="flex items-center gap-2 text-green-check font-semibold">
              <span>&#10004;</span> Acceso de por vida
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={350}>
          <div className="inline-block bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 rounded-2xl p-6 md:p-8 mb-10 max-w-md mx-auto">
            <div className="text-sm font-montserrat font-bold text-gold tracking-wider mb-2">&#128293; OFERTA ESPECIAL</div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="price-old text-2xl">$49 USD</span>
              <span className="text-4xl md:text-5xl font-montserrat font-bold text-gold">$9.90</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Pago único — sin mensualidades</p>
            <a
              href="https://pay.kiwify.com/0G4oDKm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lg inline-block text-xl animate-pulse w-full"
            >
              Sí, Quiero Mi Acceso Inmediato
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Con explicaciones claras, guías prácticas y estudios versículo por versículo,
            este recurso te brinda todo lo que necesitas para enseñar, aprender y crecer espiritualmente
            sin sentirte perdido. Ya seas líder de iglesia, estudiante de la Biblia o alguien que
            apenas comienza su caminar de fe, Código Divino te guiará paso a paso.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA />
        </FadeIn>
      </div>
    </section>
  )
}
