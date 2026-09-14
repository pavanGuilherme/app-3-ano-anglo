export const gruposTiposDeSons = [
  {
    id: "amplitude",
    legenda: "Volume",
    opcoes: [
      { valor: "forte", rotulo: "Forte" },
      { valor: "fraco", rotulo: "Fraco" },
    ],
  },
  {
    id: "frequencia",
    legenda: "Altura",
    opcoes: [
      { valor: "agudo", rotulo: "Agudo" },
      { valor: "grave", rotulo: "Grave" },
    ],
  },
  {
    id: "duracao",
    legenda: "Duração",
    opcoes: [
      { valor: "longo", rotulo: "Longo" },
      { valor: "curto", rotulo: "Curto" },
    ],
  },
  {
    id: "origem",
    legenda: "Origem",
    opcoes: [
      { valor: "natural", rotulo: "Natural" },
      { valor: "produzido", rotulo: "Produzido por objetos" },
    ],
  },
]

export const estadoInicialExplorador = {
  amplitude: "forte",
  frequencia: "agudo",
  duracao: "longo",
  origem: "natural",
}

export const descricoes = {
  amplitude: {
    forte: "Uma onda de amplitude bem alta: o som forte 'ocupa mais espaço'.",
    fraco: "Uma onda de amplitude baixa: o som fraco é mais discreto.",
  },
  frequencia: {
    agudo: "Muitos picos próximos: sons agudos vibram bem rápido.",
    grave: "Poucos picos espaçados: sons graves vibram mais devagar.",
  },
  duracao: {
    longo: "A onda se estende por todo o tempo.",
    curto: "A onda dura só um instante rapidinho.",
  },
  origem: {
    natural: "Sons naturais, como o vento ou o canto de um pássaro.",
    produzido: "Sons produzidos por objetos, como instrumentos.",
  },
}
