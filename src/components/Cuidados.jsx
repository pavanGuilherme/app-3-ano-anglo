import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { cuidadosOrelhas } from "../data/cuidados.js"
import "./Cuidados.css"

export default function Cuidados() {
  return (
    <Section
      id="cuidados"
      title="Cuidados com as Orelhas"
      icon="volumeAlto"
      accent="violet"
      emoji="👂"
    >
      <ul className="dicas-grid">
        {cuidadosOrelhas.map((dica) => (
          <li key={dica.id} className="dica-card">
            <span className="dica-icon">
              <Icon name={dica.icon} />
            </span>
            <p className="dica-texto">{dica.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
