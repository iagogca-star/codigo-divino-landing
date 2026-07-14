import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.hotmart.com/N106665538A?checkoutMode=10'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Video Background */}
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
      {/* Animated cross overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="text-[40rem] font-serif text-gold animate-pulse">&#x271E;</div>
      </div>
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
            <img
              src="https://files.nextgocard.com.br/banners/5c86c745-7521-4814-bd38-865babec4322.gif"
              alt="Código Divino"
              className="w-full rounded-xl shadow-2xl"
            />
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
