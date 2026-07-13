import CTA from './CTA'
import FadeIn from './FadeIn'

export default function QueEs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-title">Descubre el Secreto Que Millones de Cristianos Están Usando para Entender la Biblia</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-6">
            Código Divino no es solo un material de estudio. Es la clave que transforma la confusión en claridad y la duda en certeza.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Deja de sentirte frustrado cada vez que abres tu Biblia y no sabes por dónde empezar.
            Con Código Divino, cada pasaje cobra vida. Cada libro tiene sentido. Cada enseñanza se vuelve aplicable a tu día a día.
            <br /><br />
            No importa si nunca has estudiado teología. No importa si hace años que no lees la Biblia.
            Este método ha sido creado para que <strong className="text-gold">cualquier persona</strong> pueda comprender las Escrituras
            con profundidad, sin sentirse perdida.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <CTA label="Quiero Comprender la Biblia Ahora" />
        </FadeIn>
      </div>
    </section>
  )
}
