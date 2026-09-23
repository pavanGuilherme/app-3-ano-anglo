import Mascote from "./Mascote.jsx"
import { NotasFlutuantes, AltoFalanteOndas } from "./HeroAnimacoes.jsx"
import "./EqualizerHero.css"

const CORES = ["vermelho", "laranja", "amarelo", "verde", "azul", "roxo"]
const NUM_BARRAS = 28

export default function EqualizerHero() {
  const barras = Array.from({ length: NUM_BARRAS }, (_, i) => i)

  return (
    <header className="hero" id="inicio">
      <div className="hero-equalizer" aria-hidden="true">
        {barras.map((i) => (
          <span
            key={i}
            className="hero-barra"
            style={{
              "--cor": `var(--${CORES[i % CORES.length]})`,
              "--atraso": `${(i % 7) * 0.15}s`,
              "--duracao": `${1.1 + (i % 5) * 0.15}s`,
              "--altura-max": `${35 + ((i * 37) % 55)}%`,
            }}
          />
        ))}
      </div>
      <NotasFlutuantes />
      <AltoFalanteOndas />
      <div className="hero-content">
        <span className="kicker hero-kicker">Feira de Ciências · 3º Ano</span>
        <div className="hero-title-linha">
          <Mascote className="mascote-hero" size={84} flutuando />
          <h1 className="hero-title">O Mundo dos Sons</h1>
        </div>
        <p className="hero-subtitle">Como o som nasce, viaja e chega até nós</p>
        <a href="#como-nasce" className="hero-cta">
          Explorar
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  )
}
