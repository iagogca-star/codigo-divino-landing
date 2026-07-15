import CTA from './CTA'
import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJnIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0wIDQwaDgwbTQwIDB2ODBtLTQwIDB2LTgwbTQwIDB2LTgwIiBzdHJva2U9InJnYmEoMjEyLDE2OCw4MywwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGEwYTBhIi8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/40 to-dark" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <FadeIn>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-gold">CÓDIGO DIVINO:</span>
            <br />
            <span className="text-white">¿Lees la Biblia... pero sientes que nunca logras comprender su verdadero significado?</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle mb-8">
            Descubre una forma sencilla de entender las Escrituras desde Génesis hasta Apocalipsis, incluso si nunca has estudiado teología.
          </p>
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
            Quiero Entender la Biblia Hoy
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
