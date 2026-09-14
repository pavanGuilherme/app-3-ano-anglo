import Section from "./Section.jsx"
import InstrumentoCard from "./InstrumentoCard.jsx"
import { instrumentosCaseirosIntro, instrumentosCaseiros } from "../data/instrumentosCaseiros.js"
import "./InstrumentosCaseiros.css"

export default function InstrumentosCaseiros() {
  return (
    <Section
      id="instrumentos-caseiros"
      title="Criando Nossos Próprios Instrumentos"
      icon="chocalho"
      accent="violet"
    >
      <p className="section-text">{instrumentosCaseirosIntro}</p>
      <ul className="receitas-grid">
        {instrumentosCaseiros.map((instrumento) => (
          <InstrumentoCard key={instrumento.id} {...instrumento} />
        ))}
      </ul>
    </Section>
  )
}
