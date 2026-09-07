import useReveal from '../useReveal.js';
import './ProblemSection.css';

const STEPS = [
  ['01', 'Possibilidades', 'Todas as posições, ângulos e quantidades de parafusos tecnicamente viáveis.'],
  ['02', 'Restrições', 'Os limites geométricos, distâncias mínimas e condições de segurança do osso.'],
  ['03', 'Configurações viáveis', 'O subconjunto de arranjos que respeita todas as restrições impostas.'],
  ['04', 'Otimização', 'A busca por uma configuração que minimize ou maximize um critério definido.'],
  ['05', 'Configuração escolhida', 'O resultado do processo, expresso como uma solução matemática.'],
];

function PolyShapes() {
  return (
    <svg viewBox="0 0 200 130" width="200" height="130">
      <polygon points="20,20 55,10 60,45 25,55" fill="#FDFCF9" stroke="#1C1B17" strokeWidth="1" />
      <polygon points="70,55 100,40 115,75 85,90" fill="#ECE8DC" stroke="#1C1B17" strokeWidth="1" />
      <polygon points="120,15 150,25 140,55" fill="#FDFCF9" stroke="#1C1B17" strokeWidth="1" />
      <polygon points="150,70 180,60 190,95 160,100" fill="#ECE8DC" stroke="#1C1B17" strokeWidth="1" />
    </svg>
  );
}

export default function ProblemSection() {
  const flowRef = useReveal();

  return (
    <section className="problem-section" id="problema">
      <div className="wrap">
        <div className="problem-shapes">
          <PolyShapes />
        </div>
        <div className="section-head center" style={{ margin: '28px auto 0' }}>
          <h2 className="section-title">Um problema de ortopedia pode se tornar um problema matemático.</h2>
          <p className="section-lede" style={{ margin: '18px auto 0' }}>
            Posicionar um implante ou parafuso envolve decisões de posição, orientação,
            quantidade, distância e restrições geométricas... Essas decisões que também podem ser
            descritas em linguagem matemática.
          </p>
        </div>
        <div className="flow-row reveal" ref={flowRef}>
          {STEPS.map(([n, t, d]) => (
            <div className="flow-step" key={n}>
              <div className="num">{n}</div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
