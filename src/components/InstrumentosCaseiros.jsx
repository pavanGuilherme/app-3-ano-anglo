import Section from "./Section.jsx"
import Revelar from "./Revelar.jsx"
import InstrumentoCard from "./InstrumentoCard.jsx"
import { instrumentosCaseirosIntro, instrumentosCaseiros } from "../data/instrumentosCaseiros.js"
import "./InstrumentosCaseiros.css"

export default function InstrumentosCaseiros() {
  return (
    <Section
      id="instrumentos-caseiros"
      title="Criando Nossos Próprios Instrumentos"
      icon="chocalho"
      accent="laranja"
      dica="Bora criar um instrumento com material reciclado? Vai ser demais!"
    >
      <p className="section-text">{instrumentosCaseirosIntro}</p>
      <Revelar as="ul" className="receitas-grid" animacao="pular">
        {instrumentosCaseiros.map((instrumento) => (
          <InstrumentoCard key={instrumento.id} {...instrumento} />
        ))}
      </Revelar>
    </Section>
  )
}
