import FadeIn from './FadeIn'

const items = [
  'Eres un líder o profesor de iglesia que busca material estructurado para enseñar.',
  'Eres estudiante de teología o de la Biblia y quieres profundizar tu conocimiento.',
  'Eres una familia que desea estudiar la Biblia junta de forma organizada.',
  'Eres una persona ocupada pero deseas mantener una vida de oración y estudio constante.',
  'Eres alguien que nunca entendió bien la Biblia y quiere empezar desde cero con claridad.',
]

export default function ParaTi() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Este material es para ti si...</h2>
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
