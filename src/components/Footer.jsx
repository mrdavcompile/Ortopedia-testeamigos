import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="sobre">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark" />
              ortopedia-teste
            </div>
            <p>Laboratório experimental de ortopedia computacional.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Navegação</h5>
              <a href="#problema">O projeto</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#otimizacao">Otimização</a>
              <a href="#sobre">Sobre</a>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          Projeto experimental para fins educacionais e de pesquisa. Não destinado à tomada de
          decisões clínicas.
        </div>
      </div>
    </footer>
  );
}
