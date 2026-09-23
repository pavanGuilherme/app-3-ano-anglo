import useReveal from "../hooks/useReveal.js"
import "./PropagacaoAnimada.css"

export function OndaCircular() {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`onda-circular-caixa${visible ? " ativa" : ""}`}>
      <svg className="onda-circular" viewBox="0 0 220 120" aria-hidden="true">
        <circle className="onda-anel onda-anel-1" cx="46" cy="60" r="14" />
        <circle className="onda-anel onda-anel-2" cx="46" cy="60" r="14" />
        <circle className="onda-anel onda-anel-3" cx="46" cy="60" r="14" />
        <circle className="onda-fonte" cx="46" cy="60" r="9" />
        <text className="onda-ouvinte" x="168" y="72" fontSize="34">
          👂
        </text>
      </svg>
      <p className="onda-circular-legenda">O som sai da fonte e viaja em ondas até a orelha!</p>
    </div>
  )
}

const AR_PARTICULAS = [
  { left: "12%", top: "18%" },
  { left: "52%", top: "12%" },
  { left: "82%", top: "35%" },
  { left: "28%", top: "50%" },
  { left: "64%", top: "68%" },
  { left: "8%", top: "78%" },
  { left: "88%", top: "82%" },
  { left: "42%", top: "34%" },
]

const AGUA_PARTICULAS = [
  { left: "18%", top: "20%" },
  { left: "50%", top: "15%" },
  { left: "82%", top: "22%" },
  { left: "16%", top: "50%" },
  { left: "48%", top: "48%" },
  { left: "80%", top: "52%" },
  { left: "20%", top: "80%" },
  { left: "50%", top: "82%" },
  { left: "82%", top: "80%" },
]

const SOLIDO_PARTICULAS = [
  { left: "16%", top: "16%" },
  { left: "40%", top: "16%" },
  { left: "64%", top: "16%" },
  { left: "88%", top: "16%" },
  { left: "16%", top: "40%" },
  { left: "40%", top: "40%" },
  { left: "64%", top: "40%" },
  { left: "88%", top: "40%" },
  { left: "16%", top: "64%" },
  { left: "40%", top: "64%" },
  { left: "64%", top: "64%" },
  { left: "88%", top: "64%" },
  { left: "16%", top: "88%" },
  { left: "40%", top: "88%" },
  { left: "64%", top: "88%" },
  { left: "88%", top: "88%" },
]

function Meio({ nome, cor, particulas, classeParticula, ativa }) {
  return (
    <div className="meio-particulas">
      <p className="meio-particulas-titulo">{nome}</p>
      <div className={`meio-particulas-caixa${ativa ? " ativa" : ""}`}>
        {particulas.map((p, i) => (
          <span
            key={i}
            className={`particula ${classeParticula}`}
            style={{ left: p.left, top: p.top, animationDelay: `${(i % 5) * 0.13}s`, background: `var(--${cor})` }}
          />
        ))}
      </div>
    </div>
  )
}

export function ParticulasComparacao() {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className="particulas-comparacao">
      <Meio nome="Ar" cor="azul" particulas={AR_PARTICULAS} classeParticula="particula-ar" ativa={visible} />
      <Meio nome="Água" cor="roxo" particulas={AGUA_PARTICULAS} classeParticula="particula-agua" ativa={visible} />
      <Meio
        nome="Sólido"
        cor="laranja"
        particulas={SOLIDO_PARTICULAS}
        classeParticula="particula-solido"
        ativa={visible}
      />
    </div>
  )
}
