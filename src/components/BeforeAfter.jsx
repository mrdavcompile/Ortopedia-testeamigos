import useReveal from '../useReveal.js';
import './BeforeAfter.css';

function BoneManual() {
  return (
    <svg viewBox="0 0 160 260">
      <path
        d="M70 30 C60 20 62 6 76 6 C88 6 92 18 86 28
           C90 90 88 170 84 220 C90 232 88 246 76 250 C64 254 56 244 58 232
           C56 170 60 90 64 30 Z"
        fill="#F3F0E7"
        stroke="#1C1B17"
        strokeWidth="1.3"
      />
      <circle cx="72" cy="70" r="3.4" fill="#A4472F" />
      <circle cx="90" cy="120" r="3.4" fill="#A4472F" />
      <circle cx="66" cy="168" r="3.4" fill="#A4472F" />
      <circle cx="84" cy="205" r="3.4" fill="#A4472F" />
    </svg>
  );
}

function BoneOptimized() {
  return (
    <svg viewBox="0 0 160 260">
      <path
        d="M70 30 C60 20 62 6 76 6 C88 6 92 18 86 28
           C90 90 88 170 84 220 C90 232 88 246 76 250 C64 254 56 244 58 232
           C56 170 60 90 64 30 Z"
        fill="#F3F0E7"
        stroke="#1C1B17"
        strokeWidth="1.3"
      />
      {[64, 92, 120, 148, 176].map((y, i) => (
        <circle key={i} cx={i % 2 ? 82 : 70} cy={y - 24} r="3.4" fill="#4E6E52" />
      ))}
    </svg>
  );
}

export default function BeforeAfter() {
  const ref = useReveal();
  return (
    <section className="before-after">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Configuração inicial versus configuração otimizada</h2>
          <p className="section-lede">
            Uma comparação conceitual é que a configuração otimizada é definida pelo modelo
            experimental, não uma indicação clínica ou coisas semelhantes.
          </p>
        </div>
        <div className="ba-grid reveal" ref={ref}>
          <div className="ba-cell">
            <span className="tag">Manual</span>
            <BoneManual />
            <div className="ba-caption">Parafusos posicionados de forma menos sistemática.</div>
          </div>
          <div className="ba-cell">
            <span className="tag">Otimizada</span>
            <BoneOptimized />
            <div className="ba-caption">Configuração otimizada pelo modelo experimental.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
