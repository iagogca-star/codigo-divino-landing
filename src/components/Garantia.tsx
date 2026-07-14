import FadeIn from './FadeIn'

export default function Garantia() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="card-dark border-gold/20 p-10 md:p-14">
            <div className="text-6xl mb-6">&#128737;</div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
              Su satisfacción está 100% garantizada
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-2">
              Usted no corre ningún riesgo. Si en los primeros 7 días considera que Código Divino no cumple con sus expectativas, le devolvemos <strong className="text-gold">el 100% de su dinero</strong> sin preguntas ni trámites complicados.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm">
              <div className="bg-dark/50 rounded-lg p-4 border border-white/5">
                <p className="text-2xl mb-1">&#128274;</p>
                <p className="text-gray-400">Pago Seguro</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-4 border border-white/5">
                <p className="text-2xl mb-1">&#128230;</p>
                <p className="text-gray-400">Acceso Inmediato</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-4 border border-white/5">
                <p className="text-2xl mb-1">&#128737;</p>
                <p className="text-gray-400">7 Días de Garantía</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-4 border border-white/5">
                <p className="text-2xl mb-1">&#128179;</p>
                <p className="text-gray-400">Compra Protegida</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
