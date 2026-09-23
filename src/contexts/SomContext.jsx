import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"

const SomContext = createContext(null)

export function SomProvider({ children }) {
  const [ligado, setLigado] = useState(false)
  const contextoAudioRef = useRef(null)

  const obterContextoAudio = useCallback(() => {
    if (!contextoAudioRef.current) {
      const AudioContextClasse = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClasse) return null
      contextoAudioRef.current = new AudioContextClasse()
    }
    if (contextoAudioRef.current.state === "suspended") {
      contextoAudioRef.current.resume()
    }
    return contextoAudioRef.current
  }, [])

  const alternarSom = useCallback(() => {
    setLigado((atual) => {
      const novoEstado = !atual
      if (novoEstado) obterContextoAudio()
      return novoEstado
    })
  }, [obterContextoAudio])

  const tocar = useCallback(
    (funcaoDeSom) => {
      if (!ligado) return
      const ctx = obterContextoAudio()
      if (!ctx) return
      funcaoDeSom(ctx)
    },
    [ligado, obterContextoAudio]
  )

  const valor = useMemo(() => ({ ligado, alternarSom, tocar }), [ligado, alternarSom, tocar])

  return <SomContext.Provider value={valor}>{children}</SomContext.Provider>
}

export function useSom() {
  const contexto = useContext(SomContext)
  if (!contexto) {
    throw new Error("useSom precisa ser usado dentro de um SomProvider")
  }
  return contexto
}
