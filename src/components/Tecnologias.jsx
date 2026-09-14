import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { tecnologiasIntro, tecnologiasAuditivas } from "../data/tecnologias.js"
import "./Tecnologias.css"

export default function Tecnologias() {
  return (
    <Section
      id="tecnologias"
      title="Aparelhos Auditivos e Tecnologias"
      icon="aparelhoAuditivo"
      accent="teal"
    >
      <p className="section-text">{tecnologiasIntro}</p>
      <ul className="tecnologias-grid">
        {tecnologiasAuditivas.map((item) => (
          <li key={item.id} className="tecnologia-card">
            <span className="tecnologia-icon">
              <Icon name={item.icon} />
            </span>
            <h3 className="tecnologia-titulo">{item.titulo}</h3>
            <p className="tecnologia-texto">{item.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
