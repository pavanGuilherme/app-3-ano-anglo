import "./EqualizerHero.css"

const CORES = ["coral", "gold", "teal", "violet"]
const NUM_BARRAS = 28

export default function EqualizerHero() {
  const barras = Array.from({ length: NUM_BARRAS }, (_, i) => i)

  return (
    <header className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
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
      <div className="hero-content">
        <span className="kicker hero-kicker">Feira de Ciências · 3º Ano</span>
        <h1 className="hero-title">O Mundo dos Sons</h1>
        <p className="hero-subtitle">Como o som nasce, viaja e chega até nós</p>
        <a href="#como-nasce" className="hero-cta">
          Explorar
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  )
}
