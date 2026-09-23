export function tocarTum(ctx) {
  const agora = ctx.currentTime
  const osc = ctx.createOscillator()
  const ganho = ctx.createGain()

  osc.type = "sine"
  osc.frequency.setValueAtTime(160, agora)
  osc.frequency.exponentialRampToValueAtTime(48, agora + 0.28)

  ganho.gain.setValueAtTime(0.0001, agora)
  ganho.gain.exponentialRampToValueAtTime(0.9, agora + 0.012)
  ganho.gain.exponentialRampToValueAtTime(0.0001, agora + 0.38)

  osc.connect(ganho).connect(ctx.destination)
  osc.start(agora)
  osc.stop(agora + 0.4)
}

export function tocarNotaViolao(ctx) {
  const agora = ctx.currentTime
  const fundamental = 220

  const oscFundamental = ctx.createOscillator()
  const oscHarmonico = ctx.createOscillator()
  const ganhoPrincipal = ctx.createGain()
  const ganhoHarmonico = ctx.createGain()

  oscFundamental.type = "sawtooth"
  oscFundamental.frequency.value = fundamental
  oscHarmonico.type = "triangle"
  oscHarmonico.frequency.value = fundamental * 2

  ganhoHarmonico.gain.value = 0.28

  ganhoPrincipal.gain.setValueAtTime(0.0001, agora)
  ganhoPrincipal.gain.exponentialRampToValueAtTime(0.5, agora + 0.015)
  ganhoPrincipal.gain.exponentialRampToValueAtTime(0.0001, agora + 1.1)

  oscFundamental.connect(ganhoPrincipal)
  oscHarmonico.connect(ganhoHarmonico).connect(ganhoPrincipal)
  ganhoPrincipal.connect(ctx.destination)

  oscFundamental.start(agora)
  oscHarmonico.start(agora)
  oscFundamental.stop(agora + 1.2)
  oscHarmonico.stop(agora + 1.2)
}

export function tocarPlim(ctx) {
  const agora = ctx.currentTime
  const parciais = [
    { frequencia: 1200, pico: 0.5, decaimento: 0.9 },
    { frequencia: 1200 * 2.4, pico: 0.22, decaimento: 0.5 },
    { frequencia: 1200 * 3.8, pico: 0.12, decaimento: 0.3 },
  ]

  parciais.forEach(({ frequencia, pico, decaimento }) => {
    const osc = ctx.createOscillator()
    const ganho = ctx.createGain()

    osc.type = "sine"
    osc.frequency.value = frequencia

    ganho.gain.setValueAtTime(0.0001, agora)
    ganho.gain.exponentialRampToValueAtTime(pico, agora + 0.006)
    ganho.gain.exponentialRampToValueAtTime(0.0001, agora + decaimento)

    osc.connect(ganho).connect(ctx.destination)
    osc.start(agora)
    osc.stop(agora + decaimento + 0.05)
  })
}
