import { useSom } from "../contexts/SomContext.jsx"
import "./BotaoSom.css"

export default function BotaoSom() {
  const { ligado, alternarSom } = useSom()

  return (
    <button
      type="button"
      className={`botao-som${ligado ? " ligado" : ""}`}
      onClick={alternarSom}
      aria-pressed={ligado}
    >
      <span className="botao-som-icone" aria-hidden="true">
        {ligado ? "🔊" : "🔇"}
      </span>
      <span className="botao-som-texto">{ligado ? "Som ligado" : "Ligar som"}</span>
    </button>
  )
}
