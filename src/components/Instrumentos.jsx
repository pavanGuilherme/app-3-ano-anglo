import Section from "./Section.jsx"
import Revelar from "./Revelar.jsx"
import Icon from "./icons/Icon.jsx"
import { gruposInstrumentos } from "../data/instrumentos.js"
import "./Instrumentos.css"

export default function Instrumentos() {
  return (
    <Section
      id="instrumentos"
      title="Instrumentos Musicais"
      icon="percussao"
      accent="roxo"
      dica="Cordas, sopro ou percussão? Cada instrumento canta de um jeito!"
    >
      <Revelar as="ul" className="instrumentos-grupos" animacao="crescer">
        {gruposInstrumentos.map((grupo) => (
          <li key={grupo.id} className="instrumento-grupo">
            <span className="instrumento-grupo-icon">
              <Icon name={grupo.icon} />
            </span>
            <h3 className="instrumento-grupo-titulo">{grupo.titulo}</h3>
            <ul className="instrumento-chips">
              {grupo.itens.map((item) => (
                <li key={item} className="instrumento-chip">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </Revelar>
    </Section>
  )
}
