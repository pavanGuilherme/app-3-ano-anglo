import useReveal from "../hooks/useReveal.js"

export default function Revelar({ as: Tag = "div", animacao = "crescer", className = "", children, ...props }) {
  const [ref, visible] = useReveal()
  const classes = ["revelar", `revelar-${animacao}`, visible ? "revelar-ativo" : "", className]
    .filter(Boolean)
    .join(" ")

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  )
}
