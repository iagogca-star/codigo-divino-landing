import FadeIn from './FadeIn'

const CHECKOUT = 'https://pay.kiwify.com/0G4oDKm'

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="text-4xl mb-4 text-gold">&#x271E;</div>
          <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu estudio bíblico?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Únete a más de 4.000 cristianos que ya descubrieron el placer de entender la Biblia.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lg inline-block mb-10"
          >
            Quiero Mi Acceso Ahora
          </a>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="pt-8 border-t border-white/5">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Código Divino. Todos los derechos reservados.
            </p>
            <p className="text-gray-700 text-xs mt-2">
              Este producto es 100% digital. No incluye materiales físicos.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
