import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJnIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0wIDQwaDgwbTQwIDB2ODBtLTQwIDB2LTgwbTQwIDB2LTgwIiBzdHJva2U9InJnYmEoMjEyLDE2OCw4MywwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGEwYTBhIi8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-dark" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <FadeIn>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-white">¿Lees la Biblia… pero sientes que nunca logras comprender su verdadero significado?</span>
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="section-subtitle mb-6 text-xl md:text-2xl font-semibold">
            No necesitas estudiar teología para entender las Escrituras.
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-left max-w-xl mx-auto">
            {[
              'Comprende la Biblia fácilmente',
              'Acceso inmediato',
              'Más de 5 bonos exclusivos',
              'Acceso de por vida',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 w-[220px]">
                <span className="text-green-check shrink-0">&#10004;</span>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">&#9733;</span>
            ))}
            <span className="text-gray-400 ml-2 text-lg">4.9 / 5.0</span>
          </div>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="max-w-xs mx-auto mb-8">
            <div className="aspect-[3/4] rounded-xl border border-gold/20 bg-gradient-to-b from-gold/10 to-dark flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-5xl mb-3">&#x271E;</div>
                <div className="font-montserrat text-gold text-2xl font-bold">CÓDIGO DIVINO</div>
                <div className="text-gray-400 text-sm mt-2">Guía Completa de Estudio Bíblico</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="inline-block border border-gold/30 rounded-xl px-8 py-4 mb-6 bg-gold/5">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-montserrat mb-1">&#x1F525; Oferta Especial</p>
            <p className="text-lg">
              <span className="price-old text-lg">USD 49</span>
              <span className="text-white font-bold text-2xl ml-3">USD 9,<span className="text-lg">90</span></span>
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={700}>
          <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block animate-pulse text-xl px-12 py-5">
            Sí, Quiero Mi Acceso Inmediato
          </a>
        </FadeIn>
        <FadeIn delay={800}>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            <span>&#128274; Pago Seguro</span>
            <span>&#9989; Acceso Inmediato</span>
            <span>&#128737; 7 Días de Garantía</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
