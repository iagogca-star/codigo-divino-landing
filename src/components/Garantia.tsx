import FadeIn from './FadeIn'

export default function Garantia() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="card-dark border-gold/20 p-10 md:p-14">
            <div className="text-6xl mb-6">&#128737;</div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
              Garantía incondicional de 7 días
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Si en los primeros 7 días consideras que Código Divino no es para ti, te devolvemos
              el <strong className="text-gold">100% de tu dinero</strong> sin hacer preguntas.
            </p>
            <p className="text-gray-400">
              Tu satisfacción está garantizada. Así de simple.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
