import Section from "./Section.jsx"
import Revelar from "./Revelar.jsx"
import Icon from "./icons/Icon.jsx"
import { OndaCircular, ParticulasComparacao } from "./PropagacaoAnimada.jsx"
import { propagacaoTexto, propagacaoMeios } from "../data/propagacao.js"
import "./Propagacao.css"

export default function Propagacao() {
  return (
    <Section
      id="propagacao"
      title="Como o Som se Propaga"
      icon="seta"
      accent="laranja"
      dica="O som adora viajar! Ele passa pelo ar, pela água e até pelos sólidos."
    >
      <p className="section-text">{propagacaoTexto}</p>

      <OndaCircular />

      <Revelar as="ul" className="meios-lista" animacao="deslizar">
        {propagacaoMeios.map((meio) => (
          <li key={meio.id} className="meio-card">
            <span className="meio-icon">
              <Icon name={meio.icon} />
            </span>
            <span className="meio-nome">{meio.label}</span>
            <span className="meio-texto">{meio.texto}</span>
          </li>
        ))}
      </Revelar>

      <ParticulasComparacao />
    </Section>
  )
}
