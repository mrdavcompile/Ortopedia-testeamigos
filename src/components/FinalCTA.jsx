import useReveal from '../useReveal.js';
import './FinalCTA.css';

export default function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="final-cta reveal" ref={ref}>
      <div className="wrap">
        <h2>Vamos transformar o problema em matemática.</h2>
        <p>
          Explore como otimização, geometria e computação podem ser combinadas para estudar novos
          problemas na ortopedia.
        </p>
        <a className="btn-cta" href="#top">
          Entrar no laboratório →
        </a>
      </div>
    </section>
  );
}
