import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { comoSomNasceTexto, comoSomNasceExemplos } from "../data/comoSomNasce.js"
import "./IconGrid.css"

export default function ComoSomNasce() {
  return (
    <Section id="como-nasce" title="Como o Som Nasce" icon="onda" accent="coral">
      <p className="section-text">{comoSomNasceTexto}</p>
      <ul className="icon-grid">
        {comoSomNasceExemplos.map((exemplo) => (
          <li key={exemplo.id} className="icon-grid-item">
            <span className="icon-grid-icon">
              <Icon name={exemplo.icon} />
            </span>
            <span className="icon-grid-label">{exemplo.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
