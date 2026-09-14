import Icon from "./icons/Icon.jsx"
import useReveal from "../hooks/useReveal.js"

export default function Section({ id, title, icon, accent, ariaLabel, emoji, children }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`section${visible ? " is-visible" : ""}`}
      aria-label={ariaLabel || title}
      style={{ "--accent": `var(--${accent})` }}
    >
      <span className="section-index" aria-hidden="true" />
      <div className="section-bar" aria-hidden="true" />
      <div className="section-inner">
        <h2 className="section-title">
          {icon && (
            <span className="section-icon">
              <Icon name={icon} />
            </span>
          )}
          {title}
          {emoji && (
            <span aria-hidden="true" className="section-emoji">
              {emoji}
            </span>
          )}
        </h2>
        {children}
      </div>
    </section>
  )
}
