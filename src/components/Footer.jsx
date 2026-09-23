import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-linha" aria-hidden="true" />
      <p className="footer-titulo">O Mundo dos Sons</p>
      <p className="footer-selo">🔬 Feira de Ciências · 3º Ano</p>

      <div className="footer-alunos">
        <p className="footer-alunos-rotulo">Apresentado por:</p>
        <p className="footer-alunos-nomes">Escreva aqui os nomes da equipe</p>
      </div>

      <a href="#inicio" className="footer-link">
        Voltar ao início ↑
      </a>
    </footer>
  )
}
