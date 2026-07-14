import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230a0a0a' width='100' height='100'/%3E%3C/svg%3E"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/06/19/168329-838580848_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="text-[40rem] font-serif text-gold animate-pulse">&#x271E;</div>
      </div>
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
