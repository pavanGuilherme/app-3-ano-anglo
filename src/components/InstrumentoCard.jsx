import Icon from "./icons/Icon.jsx"

export default function InstrumentoCard({ nome, icon, materiais }) {
  return (
    <li className="receita-card">
      <span className="receita-icon">
        <Icon name={icon} />
      </span>
      <h3 className="receita-nome">{nome}</h3>
      <ul className="receita-materiais">
        {materiais.map((material) => (
          <li key={material}>{material}</li>
        ))}
      </ul>
    </li>
  )
}
