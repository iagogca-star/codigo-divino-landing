import Hero from './components/Hero'
import QueEs from './components/QueEs'
import ParaTi from './components/ParaTi'
import QueIncluye from './components/QueIncluye'
import Ventajas from './components/Ventajas'
import QuienPuede from './components/QuienPuede'
import Bonos from './components/Bonos'
import Perdido from './components/Perdido'
import SocialProof from './components/SocialProof'
import Oferta from './components/Oferta'
import Garantia from './components/Garantia'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <Hero />
      <QueEs />
      <ParaTi />
      <QueIncluye />
      <Ventajas />
      <QuienPuede />
      <Bonos />
      <Perdido />
      <SocialProof />
      <Oferta />
      <Garantia />
      <Faq />
      <Footer />
    </div>
  )
}
