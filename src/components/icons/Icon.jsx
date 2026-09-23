const icons = {
  tambor: "🥁",
  corda: "🎸",
  boca: "🗣️",
  vento: "💨",
  gota: "💧",
  bloco: "🧱",
  ouvidoExterno: "👂",
  ouvidoMedio: "🦴",
  coclea: "🌀",
  cerebro: "🧠",
  seta: "➡️",
  volumeAlto: "🔊",
  semObjetos: "🚫",
  descanso: "😌",
  ajudaAdulto: "🙋",
  passarinho: "🐦",
  instrumentoObjeto: "🎶",
  cordas: "🎸",
  sopro: "🎺",
  percussao: "🥁",
  aparelhoAuditivo: "🦻",
  implante: "⚙️",
  fone: "🎧",
  amplificador: "📢",
  legenda: "💬",
  chocalho: "🪇",
  onda: "〰️",
}

export default function Icon({ name }) {
  const emoji = icons[name]
  if (!emoji) return null
  return (
    <span className="icon-emoji" aria-hidden="true">
      {emoji}
    </span>
  )
}
