import { useEffect, useState } from "react"
import Icon from "./icons/Icon.jsx"
import "./BackToTop.css"

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisivel(window.scrollY > 500)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function subir() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      className={`back-to-top${visivel ? " visivel" : ""}`}
      onClick={subir}
      aria-label="Voltar ao início da página"
    >
      <Icon name="seta" />
    </button>
  )
}
