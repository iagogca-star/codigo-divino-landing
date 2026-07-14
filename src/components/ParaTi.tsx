import FadeIn from './FadeIn'

const items = [
  'Has leído la Biblia y no entiendes lo que significan muchos pasajes —quieres claridad sin tener que estudiar teología.',
  'Eres líder o maestro de iglesia y necesitas material estructurado que realmente transforme a tu congregación.',
  'Deseas fortalecer tu fe con estudios bíblicos profundos pero sencillos, que puedas aplicar a tu vida diaria.',
  'Quieres tener una rutina de oración y estudio constante, pero no sabes por dónde empezar ni cómo mantenerla.',
  'Buscas un regalo espiritual para tu familia —algo que los acerque más a Dios y los una en el estudio de la Palabra.',
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
