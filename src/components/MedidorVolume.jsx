import useReveal from "../hooks/useReveal.js"
import "./MedidorVolume.css"

export default function MedidorVolume() {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`medidor${visible ? " ativo" : ""}`}>
      <div className="medidor-escala">
        <span className="medidor-rotulo">😣 Muito alto</span>
        <div className="medidor-tubo">
          <div className="medidor-marcador">
            <span className="medidor-marcador-brilho" aria-hidden="true" />
          </div>
        </div>
        <span className="medidor-rotulo">😌 Som legal</span>
      </div>
      <p className="medidor-legenda">Quanto mais alto, mais cuidado a gente precisa ter!</p>
    </div>
  )
}
