import { useMemo } from 'react';
import useReveal from '../useReveal.js';
import './Markowitz.css';

function FrontierChart() {
  const pts = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 70; i++) {
      const x = Math.random() * 1.3 + 0.1;
      const y = Math.min(2.1, Math.sqrt(x) * 1.35 + (Math.random() - 0.5) * 0.5);
      arr.push([x, y]);
    }
    return arr;
  }, []);

  const toXY = (x, y) => {
    const px = 20 + (x / 1.6) * 300;
    const py = 220 - (y / 2.2) * 200;
    return [px, py];
  };

  const curve = useMemo(() => {
    const c = [];
    for (let x = 0.05; x <= 1.5; x += 0.05) c.push(toXY(x, Math.sqrt(x) * 1.4 + 0.15));
    return c;
  }, []);

  return (
    <svg viewBox="0 0 340 260" width="100%" height="auto">
      <line x1="20" y1="20" x2="20" y2="220" stroke="#D8D2C1" />
      <line x1="20" y1="220" x2="320" y2="220" stroke="#D8D2C1" />
      {pts.map(([x, y], i) => {
        const [px, py] = toXY(x, y);
        return <circle key={i} cx={px} cy={py} r="2" fill="#B9B29C" opacity="0.7" />;
      })}
      <polyline points={curve.map((p) => p.join(',')).join(' ')} fill="none" stroke="#45607A" strokeWidth="2" />
      <text x="240" y="45" fontFamily="IBM Plex Mono" fontSize="10" fill="#4B4A43">
        fronteira eficiente
      </text>
      <text x="10" y="238" fontFamily="IBM Plex Mono" fontSize="10" fill="#8B8B85">
        Risco
      </text>
    </svg>
  );
}

export default function Markowitz() {
  const ref = useReveal();
  return (
    <section className="markowitz" id="otimizacao">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">A matemática não pertence a um único domínio.</h2>
        </div>
        <div className="mk-grid reveal" ref={ref}>
          <div>
            <div className="mk-compare">
              <div className="mk-domain">
                <div className="dlabel">Markowitz</div>
                <h4>Otimização de portfólio</h4>
                <p>Risco + Retorno + Restrições</p>
              </div>
              <div className="mk-arrow">↓</div>
              <div className="mk-domain">
                <div className="dlabel">ortopedia-teste</div>
                <h4>Otimização de fixação óssea</h4>
                <p>Risco + Estabilidade + Restrições</p>
              </div>
            </div>
            <p className="section-lede" style={{ marginTop: 24 }}>
              O problema muda, mas a estrutura matemática é a mesma.
            </p>
          </div>
          <div className="mk-chart-box">
            <FrontierChart />
          </div>
        </div>
      </div>
    </section>
  );
}
