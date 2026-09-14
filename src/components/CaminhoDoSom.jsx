import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { etapasCaminhoDoSom } from "../data/caminhoDoSom.js"
import "./CaminhoDoSom.css"

export default function CaminhoDoSom() {
  return (
    <Section id="caminho-do-som" title="Como Ouvimos os Sons" icon="ouvidoExterno" accent="teal">
      <ol className="caminho">
        {etapasCaminhoDoSom.map((etapa, index) => (
          <li className="caminho-etapa" key={etapa.numero}>
            <div className="caminho-marcador">
              <span className="caminho-numero">{etapa.numero}</span>
              <span className="caminho-icon">
                <Icon name={etapa.icon} />
              </span>
              {index < etapasCaminhoDoSom.length - 1 && (
                <span className="caminho-linha" aria-hidden="true" />
              )}
            </div>
            <p className="caminho-texto">{etapa.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
