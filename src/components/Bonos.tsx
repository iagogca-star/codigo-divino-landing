import CTA from './CTA'
import FadeIn from './FadeIn'

const bonos = [
  { title: 'Devocionales de Poder', desc: '30 días para profundizar tu fe y despertar cada mañana con la Palabra en tu corazón.', valor: 'USD 29' },
  { title: 'Historias Bíblicas para toda la família', desc: 'Relatos bíblicos que transformarán la hora del devocional familiar en un momento inolvidable.', valor: 'USD 27' },
  { title: 'Los 10 Mandamientos', desc: 'Historia y Aplicación Espiritual. Descubre cómo los mandamientos siguen vigentes y transforman tu vida hoy.', valor: 'USD 25' },
  { title: 'Los Milagros de Jesús', desc: 'Cada milagro explicado con claridad para que tu fe se fortalezca al comprender su verdadero significado.', valor: 'USD 27' },
  { title: 'Manual de Interpretación Bíblica para Principiantes', desc: 'Aprende a interpretar la Biblia de forma correcta, sin errores y con confianza.', valor: 'USD 29' },
]

const covers = [
  'https://files.nextgocard.com.br/banners/abb109d7-23f2-4d69-9290-889114bddd41.png',
  'https://files.nextgocard.com.br/banners/defe563a-d705-4ae4-9be9-456b1bc049e8.png',
  'https://files.nextgocard.com.br/banners/53762028-0b18-43d3-8e8a-a591f075ab53.png',
  'https://files.nextgocard.com.br/banners/03e00670-b3b5-4767-850c-546a0d55d99c.png',
  'https://files.nextgocard.com.br/banners/96d2685d-4293-4003-9493-ec6047e98dac.png',
]

export default function Bonos() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="section-title text-center">Bonos Exclusivos — Valor Total de Hasta USD 137</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="section-subtitle text-center mb-12">
            Al adquirir Código Divino HOY, recibirás estos bonos completamente GRATIS
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {bonos.map((bono, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark group flex flex-col">
                <div className="aspect-[2/3] rounded-lg mb-4 overflow-hidden border border-gold/10 group-hover:border-gold/40 transition-all">
                  <img src={covers[i]} alt={bono.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-400 text-sm flex-grow mb-2">{bono.desc}</p>
                <p className="text-xs text-gray-500">
                  <span className="price-old">Valor: {bono.valor}</span>
                  <span className="text-gold font-bold ml-2">GRATIS</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <div className="text-center max-w-md mx-auto border border-gold/20 rounded-xl p-6 bg-gold/5 mb-8">
            <p className="text-gray-400 mb-1">Valor total del material:</p>
            <p className="text-gray-500"><span className="price-old text-2xl">USD 197</span></p>
            <p className="text-white font-montserrat text-2xl font-bold mt-2">Hoy: <span className="text-gold">USD 9,90</span></p>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="text-center">
            <CTA label="Sí, Quiero Todo con los Bonos Incluidos" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
