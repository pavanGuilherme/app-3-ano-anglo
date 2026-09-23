import "./HeroAnimacoes.css"

const NOTAS = [
  { simbolo: "♪", esquerda: "8%", atraso: "0s", cor: "vermelho", tamanho: "1.4rem" },
  { simbolo: "♫", esquerda: "20%", atraso: "1.1s", cor: "amarelo", tamanho: "1.1rem" },
  { simbolo: "♬", esquerda: "34%", atraso: "2.4s", cor: "azul", tamanho: "1.6rem" },
  { simbolo: "♪", esquerda: "62%", atraso: "0.6s", cor: "verde", tamanho: "1.2rem" },
  { simbolo: "♫", esquerda: "76%", atraso: "1.8s", cor: "roxo", tamanho: "1.5rem" },
  { simbolo: "♩", esquerda: "90%", atraso: "0.2s", cor: "laranja", tamanho: "1.1rem" },
  { simbolo: "♪", esquerda: "48%", atraso: "3s", cor: "laranja", tamanho: "1.3rem" },
]

export function NotasFlutuantes() {
  return (
    <div className="notas-flutuantes" aria-hidden="true">
      {NOTAS.map((nota, i) => (
        <span
          key={i}
          className="nota-flutuante"
          style={{
            left: nota.esquerda,
            animationDelay: nota.atraso,
            color: `var(--${nota.cor})`,
            fontSize: nota.tamanho,
          }}
        >
          {nota.simbolo}
        </span>
      ))}
    </div>
  )
}

export function AltoFalanteOndas() {
  return (
    <svg className="alto-falante" viewBox="0 0 64 64" aria-hidden="true">
      <polygon className="alto-falante-cone" points="12,22 26,10 26,54 12,42" />
      <rect className="alto-falante-caixa" x="2" y="22" width="10" height="20" rx="2" />
      <path className="onda-emitida onda-emitida-1" d="M30 20 A 12 12 0 0 1 30 44" />
      <path className="onda-emitida onda-emitida-2" d="M34 12 A 20 20 0 0 1 34 52" />
      <path className="onda-emitida onda-emitida-3" d="M38 4 A 28 28 0 0 1 38 60" />
    </svg>
  )
}
