import FadeIn from './FadeIn'

const items = [
  'Anhelas entender la Biblia pero los pasajes difíciles te hacen sentir frustrado y perdido.',
  'Quieres crecer espiritualmente pero no tienes tiempo para estudiar teología profunda.',
  'Deseas enseñar la Palabra a tu familia o congregación pero no encuentras material claro y confiable.',
  'Has empezado a leer la Biblia varias veces pero siempre terminas abandonando por falta de guía.',
  'Sabes que la Biblia tiene respuestas para tu vida pero necesitas alguien que te las explique de forma sencilla.',
]

export default function ParaTi() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Este material es para ti si…</h2>
        </FadeIn>
        <div className="space-y-4 mt-10">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex items-start gap-4 card-dark">
                <span className="check-green text-2xl mt-0.5 shrink-0">&#10004;</span>
                <p className="text-gray-200 text-lg">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
