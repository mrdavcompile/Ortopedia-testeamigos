import useReveal from '../useReveal.js';
import './Interdisciplinary.css';

const NODES = [
  { label: 'Medicina', x: 300, y: 80, r: 70 },
  { label: 'Engenharia', x: 170, y: 180, r: 70 },
  { label: 'Matemática', x: 430, y: 180, r: 70 },
  { label: 'Software', x: 225, y: 290, r: 66 },
  { label: 'Biomecânica', x: 375, y: 290, r: 66 },
];

function VennSVG() {
  return (
    <svg viewBox="0 0 600 380">
      {NODES.map((n) => (
        <circle key={n.label} cx={n.x} cy={n.y} r={n.r} fill="#45607A" opacity="0.10" stroke="#7C93A8" strokeWidth="1" />
      ))}
      {NODES.map((n) => (
        <text key={n.label + 't'} x={n.x} y={n.y} textAnchor="middle" fontFamily="Newsreader" fontSize="17" fill="#1C1B17">
          {n.label}
        </text>
      ))}
      <circle cx="300" cy="195" r="46" fill="#FDFCF9" stroke="#1C1B17" strokeWidth="1.2" />
      <circle cx="300" cy="195" r="3.5" fill="#45607A" />
      <text x="300" y="200" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12" fill="#1C1B17" dx="10">
        ortopedia-teste
      </text>
    </svg>
  );
}

export default function Interdisciplinary() {
  const ref = useReveal();
  return (
    <section className="interdisciplinary">
      <div className="wrap">
        <div className="section-head center" style={{ margin: '0 auto 40px' }}>
          <h2 className="section-title">Um projeto na interseção de cinco áreas.</h2>
        </div>
        <div className="venn-wrap reveal" ref={ref}>
          <VennSVG />
        </div>
      </div>
    </section>
  );
}
