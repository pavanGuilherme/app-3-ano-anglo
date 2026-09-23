import "./Mascote.css"

export default function Mascote({ className = "", flutuando = false, size = 72 }) {
  return (
    <span
      className={`mascote-wrap${flutuando ? " mascote-flutuando" : ""}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label="Soninho, a notinha musical mascote do site"
    >
      <svg className="mascote" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <g className="mascote-anima">
          <path
            className="mascote-flag"
            d="M58 10 C 80 8, 90 26, 72 34 C 80 30, 78 18, 58 22 Z"
          />
          <rect className="mascote-stem" x="48" y="8" width="10" height="52" rx="5" />

          <path className="mascote-braco-esq" d="M18 68 C 3 64, -3 50, 3 39" />
          <circle className="mascote-mao-esq" cx="4" cy="39" r="6.5" />

          <path className="mascote-braco-dir" d="M60 72 C 70 78, 74 84, 78 87" />
          <circle className="mascote-mao-dir" cx="78" cy="87" r="6.5" />

          <ellipse className="mascote-corpo" cx="40" cy="64" rx="25" ry="20" />

          <circle className="mascote-bochecha-esq" cx="23" cy="71" r="6" />
          <circle className="mascote-bochecha-dir" cx="57" cy="71" r="6" />

          <g className="mascote-olho mascote-olho-esq">
            <circle className="mascote-olho-branco" cx="30" cy="58" r="8" />
            <circle className="mascote-olho-pupila" cx="31.5" cy="59.5" r="4" />
            <circle className="mascote-olho-brilho" cx="28" cy="56" r="1.6" />
          </g>

          <g className="mascote-olho mascote-olho-dir">
            <circle className="mascote-olho-branco" cx="50" cy="58" r="8" />
            <circle className="mascote-olho-pupila" cx="51.5" cy="59.5" r="4" />
            <circle className="mascote-olho-brilho" cx="48" cy="56" r="1.6" />
          </g>

          <path className="mascote-boca" d="M32 70 Q40 79 48 70" />
        </g>
      </svg>
    </span>
  )
}
