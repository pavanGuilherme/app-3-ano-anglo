function Base({ children }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function IconTambor() {
  return (
    <Base>
      <ellipse cx="24" cy="14" rx="16" ry="7" />
      <path d="M8 14v14c0 3.9 7.2 7 16 7s16-3.1 16-7V14" />
      <path d="M8 21c0 3.9 7.2 7 16 7s16-3.1 16-7" />
    </Base>
  )
}

export function IconCorda() {
  return (
    <Base>
      <rect x="10" y="6" width="28" height="36" rx="4" />
      <path d="M16 6v36M24 6v36M32 6v36" />
      <circle cx="16" cy="13" r="1.5" fill="currentColor" />
      <circle cx="24" cy="13" r="1.5" fill="currentColor" />
      <circle cx="32" cy="13" r="1.5" fill="currentColor" />
    </Base>
  )
}

export function IconBoca() {
  return (
    <Base>
      <circle cx="24" cy="24" r="18" />
      <path d="M14 24c3 5 7 7 10 7s7-2 10-7" />
      <path d="M17 27c1.5 1.5 3 2 3 2M31 27c-1.5 1.5-3 2-3 2" opacity="0" />
    </Base>
  )
}

export function IconVento() {
  return (
    <Base>
      <path d="M6 16h20a5 5 0 1 0-4.5-7" />
      <path d="M6 24h28a5 5 0 1 1-4.5 7" />
      <path d="M6 32h18a5 5 0 1 1-3.5 6" />
    </Base>
  )
}

export function IconGota() {
  return (
    <Base>
      <path d="M24 5c8 10 13 17 13 24a13 13 0 0 1-26 0c0-7 5-14 13-24Z" />
      <path d="M17 30a7 7 0 0 0 7 7" />
    </Base>
  )
}

export function IconBloco() {
  return (
    <Base>
      <rect x="6" y="10" width="16" height="12" rx="2" />
      <rect x="26" y="10" width="16" height="12" rx="2" />
      <rect x="16" y="26" width="16" height="12" rx="2" />
    </Base>
  )
}

export function IconOuvidoExterno() {
  return (
    <Base>
      <path d="M30 8a14 14 0 0 0-14 14c0 6 4 8 4 13a5 5 0 0 0 10 0" />
      <path d="M30 14a8 8 0 0 0-8 8c0 3 2 4.5 2 7" />
      <path d="M8 26c0-3 2-5 4-5" strokeDasharray="1 6" />
    </Base>
  )
}

export function IconOuvidoMedio() {
  return (
    <Base>
      <circle cx="14" cy="24" r="7" />
      <path d="M21 24h10" />
      <circle cx="34" cy="24" r="4" />
      <path d="M38 24h4" />
    </Base>
  )
}

export function IconCoclea() {
  return (
    <Base>
      <path d="M24 34a10 10 0 1 1 7-17" />
      <path d="M24 30a6 6 0 1 1 4-10.4" />
      <path d="M24 26a2 2 0 1 1 1.6-3.2" />
    </Base>
  )
}

export function IconCerebro() {
  return (
    <Base>
      <path d="M18 8a7 7 0 0 0-7 7 6 6 0 0 0-3 10.5A6 6 0 0 0 12 36a7 7 0 0 0 12-4V12a7 7 0 0 0-6-4Z" />
      <path d="M30 8a7 7 0 0 1 7 7 6 6 0 0 1 3 10.5A6 6 0 0 1 36 36a7 7 0 0 1-12-4" />
      <path d="M24 14v18" opacity="0" />
    </Base>
  )
}

export function IconSeta() {
  return (
    <Base>
      <path d="M6 24h32" />
      <path d="M30 15l10 9-10 9" />
    </Base>
  )
}

export function IconVolumeAlto() {
  return (
    <Base>
      <path d="M6 19h7l10-8v26l-10-8H6z" />
      <path d="M31 15a12 12 0 0 1 0 18" />
      <path d="M36 10a19 19 0 0 1 0 28" />
    </Base>
  )
}

export function IconSemObjetos() {
  return (
    <Base>
      <circle cx="22" cy="26" r="12" />
      <path d="M14 18l16 16" />
      <path d="M30 8l6 6" />
    </Base>
  )
}

export function IconDescanso() {
  return (
    <Base>
      <circle cx="20" cy="26" r="12" />
      <path d="M20 19v7l5 4" />
      <path d="M34 12l4 3M37 18h5" />
    </Base>
  )
}

export function IconAjudaAdulto() {
  return (
    <Base>
      <circle cx="16" cy="14" r="6" />
      <path d="M6 40c0-7 4.5-11 10-11s10 4 10 11" />
      <circle cx="35" cy="16" r="5" />
      <path d="M28 40c0-6 3-9.5 7-9.5" />
    </Base>
  )
}

export function IconPassarinho() {
  return (
    <Base>
      <path d="M10 26a10 10 0 0 1 18-6l4-1-2 4a10 10 0 0 1-9 11c-6 1-13-1-16-4 3 0 5-1 6-2-3 0-5-1-1-2Z" />
      <circle cx="15" cy="21" r="1" fill="currentColor" />
    </Base>
  )
}

export function IconInstrumentoObjeto() {
  return (
    <Base>
      <circle cx="16" cy="32" r="7" />
      <path d="M23 32V10l14-4v22" />
      <circle cx="30" cy="28" r="7" />
    </Base>
  )
}

export function IconCordas() {
  return (
    <Base>
      <path d="M18 6c-3 5-3 10 0 14-5 2-8 7-8 12a8 8 0 0 0 16 0c0-4-2-7-4-9" />
      <path d="M26 8l14-4v9l-14 4" />
    </Base>
  )
}

export function IconSopro() {
  return (
    <Base>
      <path d="M4 30l32-8" />
      <circle cx="10" cy="28.5" r="1.4" fill="currentColor" />
      <circle cx="18" cy="26.5" r="1.4" fill="currentColor" />
      <circle cx="26" cy="24.5" r="1.4" fill="currentColor" />
      <path d="M36 22a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" />
    </Base>
  )
}

export function IconPercussao() {
  return (
    <Base>
      <ellipse cx="24" cy="12" rx="14" ry="6" />
      <path d="M10 12v12c0 3.3 6.3 6 14 6s14-2.7 14-6V12" />
      <path d="M14 36l-4 6M34 36l4 6" />
    </Base>
  )
}

export function IconAparelhoAuditivo() {
  return (
    <Base>
      <path d="M16 6a10 10 0 0 1 10 10v6a4 4 0 0 1-4 4" />
      <path d="M16 26v10a6 6 0 0 0 12 0" />
      <circle cx="16" cy="6" r="0.5" />
    </Base>
  )
}

export function IconImplante() {
  return (
    <Base>
      <circle cx="16" cy="16" r="8" />
      <path d="M16 24v6a10 10 0 0 0 10 10" />
      <path d="M22 12a4 4 0 0 1 0 8" />
    </Base>
  )
}

export function IconFone() {
  return (
    <Base>
      <path d="M8 26v-4a16 16 0 0 1 32 0v4" />
      <rect x="4" y="24" width="10" height="14" rx="4" />
      <rect x="34" y="24" width="10" height="14" rx="4" />
    </Base>
  )
}

export function IconAmplificador() {
  return (
    <Base>
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <circle cx="24" cy="22" r="8" />
      <circle cx="24" cy="22" r="2" fill="currentColor" />
      <path d="M14 34h4M30 34h4" />
    </Base>
  )
}

export function IconLegenda() {
  return (
    <Base>
      <rect x="4" y="10" width="40" height="26" rx="4" />
      <path d="M12 22h6M12 27h10M26 22h10M26 27h6" />
    </Base>
  )
}

export function IconChocalho() {
  return (
    <Base>
      <circle cx="18" cy="18" r="12" />
      <path d="M27 27l13 13" />
      <circle cx="15" cy="14" r="1.4" fill="currentColor" />
      <circle cx="21" cy="14" r="1.4" fill="currentColor" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" />
    </Base>
  )
}

export function IconOnda() {
  return (
    <Base>
      <path d="M4 24c4-10 8-10 12 0s8 10 12 0 8-10 12 0 8 10 12 0" />
    </Base>
  )
}

const icons = {
  tambor: IconTambor,
  corda: IconCorda,
  boca: IconBoca,
  vento: IconVento,
  gota: IconGota,
  bloco: IconBloco,
  ouvidoExterno: IconOuvidoExterno,
  ouvidoMedio: IconOuvidoMedio,
  coclea: IconCoclea,
  cerebro: IconCerebro,
  seta: IconSeta,
  volumeAlto: IconVolumeAlto,
  semObjetos: IconSemObjetos,
  descanso: IconDescanso,
  ajudaAdulto: IconAjudaAdulto,
  passarinho: IconPassarinho,
  instrumentoObjeto: IconInstrumentoObjeto,
  cordas: IconCordas,
  sopro: IconSopro,
  percussao: IconPercussao,
  aparelhoAuditivo: IconAparelhoAuditivo,
  implante: IconImplante,
  fone: IconFone,
  amplificador: IconAmplificador,
  legenda: IconLegenda,
  chocalho: IconChocalho,
  onda: IconOnda,
}

export default function Icon({ name }) {
  const Componente = icons[name]
  if (!Componente) return null
  return <Componente />
}
