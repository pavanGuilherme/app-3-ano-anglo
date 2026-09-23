import { useEffect, useRef, useState } from "react"
import { useSom } from "../contexts/SomContext.jsx"
import { tocarTum, tocarNotaViolao, tocarPlim } from "../audio/sons.js"
import "./TamborECorda.css"

const DURACAO_BATIDA = 750
const DURACAO_DEDILHADA = 600
const DURACAO_TOQUE_SINO = 900

function useToqueTemporario(duracao) {
  const [ativo, setAtivo] = useState(false)
  const tempoRef = useRef(null)

  useEffect(() => () => window.clearTimeout(tempoRef.current), [])

  function disparar() {
    window.clearTimeout(tempoRef.current)
    setAtivo(false)
    requestAnimationFrame(() => {
      setAtivo(true)
      tempoRef.current = window.setTimeout(() => setAtivo(false), duracao)
    })
  }

  return [ativo, disparar]
}

export function TamborInterativo() {
  const [batendo, bater] = useToqueTemporario(DURACAO_BATIDA)
  const { tocar } = useSom()

  function aoClicar() {
    tocar(tocarTum)
    bater()
  }

  return (
    <button
      type="button"
      className="tambor-botao"
      onClick={aoClicar}
      aria-label="Tocar no tambor para ouvir e ver as ondas de som"
    >
      <svg className={`tambor${batendo ? " batendo" : ""}`} viewBox="0 0 100 100">
        <circle className="tambor-anel tambor-anel-1" cx="50" cy="26" r="16" />
        <circle className="tambor-anel tambor-anel-2" cx="50" cy="26" r="16" />
        <circle className="tambor-anel tambor-anel-3" cx="50" cy="26" r="16" />
        <g className="tambor-corpo">
          <path className="tambor-lateral" d="M18 26 L22 74 Q50 86 78 74 L82 26 Z" />
          <ellipse className="tambor-base" cx="50" cy="74" rx="28" ry="9" />
          <ellipse className="tambor-pele" cx="50" cy="26" rx="32" ry="12" />
          <line className="tambor-linha" x1="26" y1="30" x2="26" y2="70" />
          <line className="tambor-linha" x1="74" y1="30" x2="74" y2="70" />
        </g>
      </svg>
      <span className="tambor-legenda">Toque no tambor!</span>
    </button>
  )
}

export function CordaVibrante() {
  const [dedilhando, dedilhar] = useToqueTemporario(DURACAO_DEDILHADA)
  const { tocar } = useSom()

  function aoClicar() {
    tocar(tocarNotaViolao)
    dedilhar()
  }

  return (
    <button
      type="button"
      className="corda-caixa"
      onClick={aoClicar}
      aria-label="Tocar a corda do violão para ouvir uma nota"
    >
      <svg className={`corda${dedilhando ? " dedilhando" : ""}`} viewBox="0 0 96 60">
        <rect className="corda-corpo" x="2" y="6" width="92" height="48" rx="12" />
        <circle className="corda-rebite" cx="14" cy="14" r="3" />
        <circle className="corda-rebite" cx="82" cy="14" r="3" />
        <line className="corda-base" x1="8" y1="30" x2="88" y2="30" />
        <path className="corda-onda" d="M8 30 Q 48 12 88 30" />
      </svg>
      <span className="corda-legenda">Toque na corda!</span>
    </button>
  )
}

export function SinoInterativo() {
  const [tocando, tocarAnimacao] = useToqueTemporario(DURACAO_TOQUE_SINO)
  const { tocar } = useSom()

  function aoClicar() {
    tocar(tocarPlim)
    tocarAnimacao()
  }

  return (
    <button
      type="button"
      className="sino-botao"
      onClick={aoClicar}
      aria-label="Tocar o sino para ouvir um plim"
    >
      <svg className={`sino${tocando ? " tocando" : ""}`} viewBox="0 0 100 100">
        <g className="sino-brilhos" aria-hidden="true">
          <text className="sino-brilho sino-brilho-1" x="18" y="30">
            ✨
          </text>
          <text className="sino-brilho sino-brilho-2" x="72" y="24">
            ✨
          </text>
          <text className="sino-brilho sino-brilho-3" x="78" y="52">
            ✨
          </text>
        </g>
        <g className="sino-corpo">
          <rect className="sino-alca" x="45" y="6" width="10" height="12" rx="4" />
          <path
            className="sino-corpo-forma"
            d="M50 16 C 32 16 24 36 24 52 L 20 64 L 80 64 L 76 52 C 76 36 68 16 50 16 Z"
          />
          <ellipse className="sino-borda" cx="50" cy="64" rx="30" ry="7" />
          <line className="sino-fio" x1="50" y1="64" x2="50" y2="76" />
          <circle className="sino-badalo" cx="50" cy="80" r="5" />
        </g>
      </svg>
      <span className="sino-legenda">Toque no sino!</span>
    </button>
  )
}
