import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { propagacaoTexto, propagacaoMeios } from "../data/propagacao.js"
import "./Propagacao.css"

export default function Propagacao() {
  return (
    <Section id="propagacao" title="Como o Som se Propaga" icon="seta" accent="gold">
      <p className="section-text">{propagacaoTexto}</p>
      <ul className="meios-lista">
        {propagacaoMeios.map((meio) => (
          <li key={meio.id} className="meio-card">
            <span className="meio-icon">
              <Icon name={meio.icon} />
            </span>
            <span className="meio-nome">{meio.label}</span>
            <span className="meio-texto">{meio.texto}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
