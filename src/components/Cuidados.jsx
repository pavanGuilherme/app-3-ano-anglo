import Section from "./Section.jsx"
import Revelar from "./Revelar.jsx"
import Icon from "./icons/Icon.jsx"
import MedidorVolume from "./MedidorVolume.jsx"
import { cuidadosOrelhas } from "../data/cuidados.js"
import "./Cuidados.css"

export default function Cuidados() {
  return (
    <Section
      id="cuidados"
      title="Cuidados com as Orelhas"
      icon="volumeAlto"
      accent="verde"
      emoji="👂"
      dica="Ouça músicas num volume legal e dê descanso para as suas orelhas."
    >
      <MedidorVolume />

      <Revelar as="ul" className="dicas-grid" animacao="deslizar">
        {cuidadosOrelhas.map((dica) => (
          <li key={dica.id} className="dica-card">
            <span className="dica-icon">
              <Icon name={dica.icon} />
            </span>
            <p className="dica-texto">{dica.texto}</p>
          </li>
        ))}
      </Revelar>
    </Section>
  )
}
