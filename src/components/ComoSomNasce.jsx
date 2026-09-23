import Section from "./Section.jsx"
import Revelar from "./Revelar.jsx"
import Icon from "./icons/Icon.jsx"
import { TamborInterativo, CordaVibrante, SinoInterativo } from "./TamborECorda.jsx"
import { comoSomNasceTexto, comoSomNasceExemplos } from "../data/comoSomNasce.js"
import "./IconGrid.css"

export default function ComoSomNasce() {
  return (
    <Section
      id="como-nasce"
      title="Como o Som Nasce"
      icon="onda"
      accent="vermelho"
      dica="Toque na sua garganta enquanto fala. Sentiu a vibração? O som nasceu aí!"
    >
      <p className="section-text">{comoSomNasceTexto}</p>

      <div className="vibracao-demo">
        <TamborInterativo />
        <CordaVibrante />
        <SinoInterativo />
      </div>

      <Revelar as="ul" className="icon-grid" animacao="pular">
        {comoSomNasceExemplos.map((exemplo) => (
          <li key={exemplo.id} className="icon-grid-item">
            <span className="icon-grid-icon">
              <Icon name={exemplo.icon} />
            </span>
            <span className="icon-grid-label">{exemplo.label}</span>
          </li>
        ))}
      </Revelar>
    </Section>
  )
}
