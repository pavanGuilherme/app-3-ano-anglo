import { useMemo, useState } from "react"
import Section from "./Section.jsx"
import Icon from "./icons/Icon.jsx"
import { gruposTiposDeSons, estadoInicialExplorador, descricoes } from "../data/tiposDeSons.js"
import "./ExploradorDeSons.css"

const LARGURA = 300
const ALTURA = 120
const CENTRO_Y = ALTURA / 2
const PONTOS = 200

function gerarCaminhoOnda({ amplitude, frequencia, duracao, origem }) {
  const amplitudeValor = amplitude === "forte" ? 40 : 14
  const ciclos = frequencia === "agudo" ? 14 : 4
  const comprimentoAtivo = duracao === "longo" ? LARGURA : LARGURA * 0.32

  let caminho = `M 0 ${CENTRO_Y}`

  for (let i = 0; i <= PONTOS; i++) {
    const x = (i / PONTOS) * LARGURA
    let y = CENTRO_Y

    if (x <= comprimentoAtivo) {
      const t = (x / LARGURA) * ciclos * Math.PI * 2
      let onda = Math.sin(t)

      if (origem === "natural") {
        onda += 0.28 * Math.sin(t * 2.6 + 1)
      }

      const entrada = Math.min(x / 8, 1)
      const saida = duracao === "curto" ? Math.min((comprimentoAtivo - x) / 8, 1) : 1
      const envelope = Math.max(0, Math.min(entrada, saida))

      y = CENTRO_Y - onda * amplitudeValor * envelope
    }

    caminho += ` L ${x.toFixed(2)} ${y.toFixed(2)}`
  }

  return caminho
}

export default function ExploradorDeSons() {
  const [estado, setEstado] = useState(estadoInicialExplorador)

  const caminhoOnda = useMemo(() => gerarCaminhoOnda(estado), [estado])

  function selecionar(grupoId, valor) {
    setEstado((atual) => ({ ...atual, [grupoId]: valor }))
  }

  return (
    <Section id="tipos-de-sons" title="Tipos de Sons" icon="onda" accent="coral">
      <p className="section-text">
        Escolha as opções abaixo e veja como a onda sonora muda! Toque nos botões para explorar.
      </p>

      <div className="explorador">
        {gruposTiposDeSons.map((grupo) => (
          <fieldset className="explorador-grupo" key={grupo.id}>
            <legend className="explorador-legenda">{grupo.legenda}</legend>
            <div className="explorador-botoes">
              {grupo.opcoes.map((opcao) => {
                const ativo = estado[grupo.id] === opcao.valor
                return (
                  <button
                    key={opcao.valor}
                    type="button"
                    className={`explorador-botao${ativo ? " ativo" : ""}`}
                    aria-pressed={ativo}
                    onClick={() => selecionar(grupo.id, opcao.valor)}
                  >
                    {opcao.rotulo}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="onda-visualizacao">
        <span className="onda-icon-origem" aria-hidden="true">
          <Icon name={estado.origem === "natural" ? "passarinho" : "instrumentoObjeto"} />
        </span>
        <svg
          className="onda-svg"
          viewBox={`0 0 ${LARGURA} ${ALTURA}`}
          role="img"
          aria-label={`Onda sonora ${estado.amplitude}, ${estado.frequencia}, ${estado.duracao}, de origem ${estado.origem}`}
        >
          <line
            x1="0"
            y1={CENTRO_Y}
            x2={LARGURA}
            y2={CENTRO_Y}
            className="onda-linha-base"
          />
          <path d={caminhoOnda} className="onda-path" />
        </svg>
      </div>

      <p className="onda-descricao" aria-live="polite">
        {descricoes.amplitude[estado.amplitude]} {descricoes.frequencia[estado.frequencia]}{" "}
        {descricoes.duracao[estado.duracao]} {descricoes.origem[estado.origem]}
      </p>
    </Section>
  )
}
