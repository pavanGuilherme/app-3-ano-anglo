import Nav from "./components/Nav.jsx"
import EqualizerHero from "./components/EqualizerHero.jsx"
import ComoSomNasce from "./components/ComoSomNasce.jsx"
import Propagacao from "./components/Propagacao.jsx"
import CaminhoDoSom from "./components/CaminhoDoSom.jsx"
import Cuidados from "./components/Cuidados.jsx"
import ExploradorDeSons from "./components/ExploradorDeSons.jsx"
import Instrumentos from "./components/Instrumentos.jsx"
import Tecnologias from "./components/Tecnologias.jsx"
import InstrumentosCaseiros from "./components/InstrumentosCaseiros.jsx"
import Footer from "./components/Footer.jsx"
import BackToTop from "./components/BackToTop.jsx"
import BotaoSom from "./components/BotaoSom.jsx"

export default function App() {
  return (
    <>
      <Nav />
      <div className="app">
        <EqualizerHero />
        <main>
          <ComoSomNasce />
          <Propagacao />
          <CaminhoDoSom />
          <Cuidados />
          <ExploradorDeSons />
          <Instrumentos />
          <Tecnologias />
          <InstrumentosCaseiros />
        </main>
        <Footer />
      </div>
      <BackToTop />
      <BotaoSom />
    </>
  )
}
