import useReveal from '../useReveal.js';
import './HowItWorks.css';

function IconDefine() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46">
      <rect x="4" y="4" width="38" height="38" rx="4" fill="#FDFCF9" stroke="#1C1B17" />
      <path d="M16 30 L28 14" stroke="#45607A" strokeWidth="2" />
      <circle cx="16" cy="30" r="3" fill="#1C1B17" />
    </svg>
  );
}
function IconModel() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46">
      <rect x="4" y="4" width="38" height="38" rx="4" fill="#FDFCF9" stroke="#1C1B17" />
      <text x="23" y="29" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="13" fill="#1C1B17">
        f=f(x)
      </text>
    </svg>
  );
}
function IconOptimize() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46">
      <rect x="4" y="4" width="38" height="38" rx="4" fill="#FDFCF9" stroke="#1C1B17" />
      <polyline points="10,32 18,24 24,28 36,12" fill="none" stroke="#45607A" strokeWidth="2" />
    </svg>
  );
}

const STEPS = [
  ['01', 'Definir', IconDefine, 'Definimos o osso, a prótese, os parafusos e os critérios do problema.'],
  [
    '02',
    'Modelar',
    IconModel,
    'Transformamos as condições físicas e geométricas em variáveis, restrições e funções matemáticas.',
  ],
  [
    '03',
    'Otimizar',
    IconOptimize,
    'Buscamos uma configuração que satisfaça as restrições e minimize ou maximize o objetivo definido.',
  ],
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-lede">Três etapas conceituais conectam o problema físico ao resultado matemático.</p>
        </div>
        <div className="steps-row reveal" ref={ref}>
          {STEPS.map(([n, t, Icon, d]) => (
            <div className="step-cell" key={n}>
              <div className="step-index">{n}</div>
              <div className="step-icon">
                <Icon />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
