import { useEffect, useRef, useState } from "react"
import "./Nav.css"

const LINKS = [
  { href: "#inicio", label: "Início", cor: "roxo" },
  { href: "#como-nasce", label: "Como Nasce", cor: "vermelho" },
  { href: "#propagacao", label: "Propagação", cor: "laranja" },
  { href: "#caminho-do-som", label: "Audição", cor: "amarelo" },
  { href: "#cuidados", label: "Cuidados", cor: "verde" },
  { href: "#tipos-de-sons", label: "Explorador", cor: "azul" },
  { href: "#instrumentos", label: "Instrumentos", cor: "roxo" },
  { href: "#tecnologias", label: "Tecnologia", cor: "vermelho" },
  { href: "#instrumentos-caseiros", label: "Faça o Seu", cor: "laranja" },
]

export default function Nav() {
  const [activeId, setActiveId] = useState("inicio")
  const [menuAberto, setMenuAberto] = useState(false)
  const barraRef = useRef(null)

  useEffect(() => {
    const ids = LINKS.map((link) => link.href.slice(1))
    const alvos = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (typeof IntersectionObserver === "undefined" || alvos.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    alvos.forEach((alvo) => observer.observe(alvo))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false

    function atualizarProgresso() {
      const altura = document.documentElement.scrollHeight - window.innerHeight
      const progresso = altura > 0 ? window.scrollY / altura : 0
      if (barraRef.current) {
        barraRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progresso))})`
      }
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(atualizarProgresso)
        ticking = true
      }
    }

    atualizarProgresso()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <nav className="nav" aria-label="Navegação principal">
      <div className="nav-progress-track" aria-hidden="true">
        <div className="nav-progress-fill" ref={barraRef} />
      </div>
      <div className="nav-inner">
        <a href="#inicio" className="nav-brand">
          <span className="nav-brand-dot" aria-hidden="true" />
          O Mundo dos Sons
        </a>

        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${activeId === link.href.slice(1) ? " ativo" : ""}`}
                style={{ "--nav-color": `var(--${link.cor})` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuAberto}
          aria-controls="nav-mobile-menu"
          onClick={() => setMenuAberto((atual) => !atual)}
        >
          <span className="nav-toggle-linha" />
          <span className="nav-toggle-linha" />
          <span className="nav-toggle-linha" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>

      {menuAberto && (
        <ul id="nav-mobile-menu" className="nav-mobile">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-mobile-link${activeId === link.href.slice(1) ? " ativo" : ""}`}
                style={{ "--nav-color": `var(--${link.cor})` }}
                onClick={() => setMenuAberto(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
