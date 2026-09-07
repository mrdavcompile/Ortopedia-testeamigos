import { Fragment } from 'react';
import useReveal from '../useReveal.js';
import './TransformSection.css';

function XraySVG() {
  return (
    <svg viewBox="0 0 120 200" width="100" height="166">
      <rect width="120" height="200" fill="#0E0E0C" />
      <path
        d="M55 20 C48 30 50 46 58 54 C50 70 52 120 56 150 C58 168 56 180 60 190
           C64 180 62 168 64 150 C68 120 70 70 62 54 C70 46 72 30 65 20 Z"
        fill="#C9CBC1"
        opacity="0.85"
      />
    </svg>
  );
}

function MeshSVG() {
  const pts = [];
  for (let i = 0; i < 9; i++) pts.push([50 + (i % 2 ? 10 : -10), 15 + i * 20]);
  return (
    <svg viewBox="0 0 120 200" width="100" height="166">
      {pts.map((p, i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={pts[i - 1][0]} y1={pts[i - 1][1]} x2={p[0]} y2={p[1]} stroke="#8B8B85" strokeWidth="1" />
          )}
          <circle cx={p[0]} cy={p[1]} r="3" fill="#45607A" />
        </g>
      ))}
    </svg>
  );
}

const CHAIN = ['Osso', 'Prótese', 'Parafusos', 'Restrições', 'Função objetivo', 'Otimização', 'Configuração'];

export default function TransformSection() {
  const stripRef = useReveal();
  const chainRef = useReveal();
  const panelRef = useReveal();

  return (
    <section className="transform-section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Da imagem clínica ao modelo matemático.</h2>
          <p className="section-lede">
            O mesmo osso pode ser descrito de formas muito diferentes, sendo como imagem, como malha
            geométrica ou como um conjunto de variáveis a otimizar.
          </p>
        </div>

        <div className="transform-strip reveal" ref={stripRef}>
          <div className="transform-item">
            <XraySVG />
            <div className="caption mono">Imagem radiográfica</div>
          </div>
          <span className="transform-arrow">→</span>
          <div className="transform-item">
            <MeshSVG />
            <div className="caption mono">Malha 3D</div>
          </div>
          <span className="transform-arrow">→</span>
          <div className="transform-item">
            <div className="formula-slot">
              <div>
                <div className="mono" style={{ fontSize: 26 }}>
                  min f(x)
                </div>
                <div className="caption mono">Modelo de otimização</div>
              </div>
            </div>
          </div>
        </div>

        <div className="transform-strip reveal" ref={chainRef} style={{ marginTop: 8 }}>
          {CHAIN.map((t, i) => (
            <Fragment key={t}>
              <div className="transform-node">{t}</div>
              {i < CHAIN.length - 1 && <span className="transform-arrow">→</span>}
            </Fragment>
          ))}
        </div>

        <div className="math-panel reveal" ref={panelRef}>
          <div>
            <div className="label">Modelo conceitual</div>
            <div className="formula">
              minimizar&nbsp;&nbsp;f(x)
              <br />
              sujeito a&nbsp;&nbsp;<span className="muted">gᵢ(x) ≤ 0</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="muted">Ax = b</span>
            </div>
          </div>
          <p>
            Essa é uma representação conceitual de otimização convexa. A primeira versão não
            implementamos um solver real, mas a arquitetura já está preparada para receber.
          </p>
        </div>
      </div>
    </section>
  );
}
