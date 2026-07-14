import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJnIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0wIDQwaDgwbTQwIDB2ODBtLTQwIDB2LTgwbTQwIDB2LTgwIiBzdHJva2U9InJnYmEoMjEyLDE2OCw4MywwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGEwYTBhIi8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-dark" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <FadeIn>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-gold">CÓDIGO DIVINO:</span>
            <br />
            <span className="text-white">La Biblia explicada de forma clara y práctica</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-8">
            Un material completo para entender las Escrituras, fortalecer tu fe y transformar tu vida espiritual.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">&#9733;</span>
            ))}
            <span className="text-gray-400 ml-2 text-lg">4.9 / 5.0</span>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="max-w-xs mx-auto mb-10">
            <div className="aspect-[3/4] rounded-xl border border-gold/20 bg-gradient-to-b from-gold/10 to-dark flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-5xl mb-3">&#x271E;</div>
                <div className="font-montserrat text-gold text-2xl font-bold">CÓDIGO DIVINO</div>
                <div className="text-gray-400 text-sm mt-2">Guía Completa de Estudio Bíblico</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={800}>
          <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block animate-pulse">
            Quiero Mi Acceso Ahora
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
