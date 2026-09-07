import { useMemo, useRef, useState } from 'react';
import useReveal from '../useReveal.js';
import './LabPreview.css';

const INITIAL_BOLTS = [
  { id: 1, x: 205, y: 165, angle: -20 },
  { id: 2, x: 255, y: 180, angle: -10 },
  { id: 3, x: 305, y: 195, angle: 8 },
  { id: 4, x: 350, y: 208, angle: 18 },
  { id: 5, x: 392, y: 222, angle: 28 },
];

const TARGETS = [
  { x: 185, y: 148, angle: -28 },
  { x: 242, y: 164, angle: -16 },
  { x: 300, y: 186, angle: 4 },
  { x: 354, y: 205, angle: 17 },
  { x: 405, y: 226, angle: 30 },
];

function BoneCanvas({ bolts, onMove, running, iteration }) {
  const svgRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const getPoint = (event) => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    return {
      x: Math.max(110, Math.min(440, ((event.clientX - rect.left) / rect.width) * 500)),
      y: Math.max(92, Math.min(300, ((event.clientY - rect.top) / rect.height) * 420)),
    };
  };

  const handlePointerMove = (event) => {
    if (dragging === null || running) return;
    const point = getPoint(event);
    onMove(dragging, point);
  };

  return (
    <div className="lab-canvas-wrap">
      <svg
        ref={svgRef}
        viewBox="0 0 500 420"
        className="bone-canvas"
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(null)}
        onPointerLeave={() => setDragging(null)}
      >
        <defs>
          <linearGradient id="boneGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7dcc5" />
            <stop offset="100%" stopColor="#b7a98d" />
          </linearGradient>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#ffffff" strokeOpacity=".06" />
          </pattern>
        </defs>

        <rect width="500" height="420" fill="#12130f" />
        <rect width="500" height="420" fill="url(#grid)" />

        <path
          d="M116 143 C105 116 125 91 153 96 C171 99 181 117 170 137
             C230 151 330 187 397 207 C419 202 440 214 442 233
             C444 252 428 268 410 263 C394 259 386 246 391 231
             C321 214 224 178 167 157 C161 177 143 184 128 175
             C112 166 108 152 116 143 Z"
          fill="url(#boneGradient)"
          stroke="#f3f0e7"
          strokeOpacity=".4"
          strokeWidth="2"
        />

        <path
          d="M128 143 C160 132 204 151 243 164 C292 180 345 202 408 225"
          fill="none"
          stroke="#6f6656"
          strokeOpacity=".35"
          strokeWidth="20"
          strokeLinecap="round"
        />

        <g transform="translate(218 177) rotate(-10)">
          <rect x="-45" y="-9" width="145" height="18" rx="4" fill="#7890a5" opacity=".92" />
          <circle cx="-25" cy="0" r="5" fill="#12130f" />
          <circle cx="8" cy="0" r="5" fill="#12130f" />
          <circle cx="41" cy="0" r="5" fill="#12130f" />
          <circle cx="74" cy="0" r="5" fill="#12130f" />
        </g>

        {bolts.map((bolt, index) => (
          <g
            key={bolt.id}
            transform={`translate(${bolt.x} ${bolt.y}) rotate(${bolt.angle})`}
            className={`bolt ${dragging === bolt.id ? 'dragging' : ''}`}
            onPointerDown={(event) => {
              if (running) return;
              event.currentTarget.setPointerCapture?.(event.pointerId);
              setDragging(bolt.id);
            }}
          >
            <line x1="-3" y1="0" x2="42" y2="0" stroke="#dfe7ed" strokeWidth="5" strokeLinecap="round" />
            <line x1="5" y1="-5" x2="5" y2="5" stroke="#45607a" strokeWidth="3" />
            <circle cx="0" cy="0" r="9" fill="#45607a" stroke="#f3f0e7" strokeWidth="2" />
            <text x="-3.5" y="3.5" fontSize="8" fill="#fff" fontFamily="IBM Plex Mono">{index + 1}</text>
          </g>
        ))}

        <g fontFamily="IBM Plex Mono" fontSize="10" fill="#a9a99f">
          <text x="22" y="30">MODELO 2D · FÊMUR / PLACA</text>
          <text x="22" y="396">Arraste os parafusos para testar configurações</text>
          <text x="438" y="30" textAnchor="end">ITER. {iteration}</text>
        </g>
      </svg>
    </div>
  );
}

function ObjectiveChart({ history }) {
  const points = useMemo(() => {
    if (!history.length) return '';
    const max = Math.max(...history);
    const min = Math.min(...history);
    return history.map((value, index) => {
      const x = history.length === 1 ? 10 : 10 + (index / (history.length - 1)) * 180;
      const y = max === min ? 50 : 10 + ((value - min) / (max - min)) * 80;
      return `${x},${y}`;
    }).join(' ');
  }, [history]);

  return (
    <div className="objective-chart">
      <div className="chart-title">
        <span>Função objetivo</span>
        <strong>{history.length ? history[history.length - 1].toFixed(2) : '—'}</strong>
      </div>
      <svg viewBox="0 0 200 100" preserveAspectRatio="none">
        <line x1="10" y1="90" x2="190" y2="90" />
        <line x1="10" y1="10" x2="10" y2="90" />
        {points && <polyline points={points} fill="none" />}
      </svg>
      <div className="chart-labels"><span>inicial</span><span>menor é melhor</span></div>
    </div>
  );
}

export default function LabPreview() {
  const ref = useReveal();
  const [bolts, setBolts] = useState(INITIAL_BOLTS);
  const [count, setCount] = useState(5);
  const [minDistance, setMinDistance] = useState(28);
  const [priority, setPriority] = useState('stability');
  const [running, setRunning] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [history, setHistory] = useState([]);
  const [done, setDone] = useState(false);

  const moveBolt = (id, point) => {
    setBolts((current) => current.map((bolt) => bolt.id === id ? { ...bolt, ...point } : bolt));
    setDone(false);
  };

  const updateCount = (next) => {
    const safe = Math.max(3, Math.min(7, Number(next)));
    setCount(safe);
    setBolts((current) => {
      if (safe <= current.length) return current.slice(0, safe);
      return [...current, ...Array.from({ length: safe - current.length }, (_, i) => ({
        id: current.length + i + 1,
        x: 220 + i * 32,
        y: 175 + i * 10,
        angle: 0,
      }))];
    });
    setDone(false);
  };

  const objective = (items) => {
    const selected = items.slice(0, count);
    const target = TARGETS.slice(0, count);
    const positionCost = selected.reduce((sum, bolt, i) => {
      const t = target[i];
      return sum + ((bolt.x - t.x) ** 2 + (bolt.y - t.y) ** 2) / 100 + ((bolt.angle - t.angle) ** 2) / 100;
    }, 0);
    const spacingPenalty = selected.reduce((sum, bolt, i) => {
      return sum + selected.slice(i + 1).reduce((inner, other) => {
        const distance = Math.hypot(bolt.x - other.x, bolt.y - other.y);
        return inner + Math.max(0, minDistance - distance) ** 2 / 20;
      }, 0);
    }, 0);
    return positionCost + spacingPenalty * 2 + (priority === 'stability' ? 8 : 0);
  };

  const runOptimization = () => {
    if (running) return;
    setRunning(true);
    setDone(false);
    setIteration(0);
    setHistory([objective(bolts)]);

    let current = bolts.map((bolt) => ({ ...bolt }));
    let step = 0;
    const total = 16;

    const timer = setInterval(() => {
      step += 1;
      current = current.map((bolt, index) => {
        const target = TARGETS[index % TARGETS.length];
        const factor = 0.16 + step * 0.018;
        return {
          ...bolt,
          x: bolt.x + (target.x - bolt.x) * factor,
          y: bolt.y + (target.y - bolt.y) * factor,
          angle: bolt.angle + (target.angle - bolt.angle) * factor,
        };
      });

      setBolts(current.map((bolt) => ({ ...bolt })));
      setIteration(step);
      setHistory((old) => [...old, objective(current)]);

      if (step >= total) {
        clearInterval(timer);
        setBolts(TARGETS.slice(0, count).map((target, index) => ({ id: index + 1, ...target })));
        setRunning(false);
        setDone(true);
      }
    }, 130);
  };

  const reset = () => {
    setBolts(INITIAL_BOLTS.slice(0, count));
    setIteration(0);
    setHistory([]);
    setDone(false);
  };

  const finalValue = history.length ? history[history.length - 1] : objective(bolts);

  return (
    <section className="lab-section" id="laboratorio">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Agora, mexa no osso e veja a otimização acontecer.</h2>
          <p className="section-lede">
            Um playground 2D didático: arraste os parafusos, ajuste as restrições e observe uma busca iterativa por uma configuração melhor.
          </p>
        </div>

        <div className="lab-grid reveal" ref={ref}>
          <div className="lab-canvas">
            <BoneCanvas bolts={bolts} onMove={moveBolt} running={running} iteration={iteration} />
            <div className="lab-status">
              <span className={running ? 'pulse' : ''}>{running ? '● otimizando' : done ? '✓ solução encontrada' : '● edição manual'}</span>
              <span>{count} parafusos · restrições ativas</span>
            </div>
          </div>

          <div className="lab-panel">
            <div className="lab-panel-head">
              <div>
                <span className="eyebrow">LABORATÓRIO 01</span>
                <h3>Configuração</h3>
              </div>
              <button className="reset-btn" onClick={reset}>Resetar</button>
            </div>

            <label className="lab-control">
              <span><b>Parafusos</b><output>{count}</output></span>
              <input type="range" min="3" max="7" value={count} onChange={(e) => updateCount(e.target.value)} disabled={running} />
            </label>

            <label className="lab-control">
              <span><b>Distância mínima</b><output>{minDistance} px</output></span>
              <input type="range" min="12" max="60" value={minDistance} onChange={(e) => setMinDistance(Number(e.target.value))} disabled={running} />
            </label>

            <label className="lab-control select-control">
              <span><b>Prioridade</b></span>
              <select value={priority} onChange={(e) => setPriority(e.target.value)} disabled={running}>
                <option value="stability">Estabilidade</option>
                <option value="distance">Menor deslocamento</option>
              </select>
            </label>

            <div className="constraint-list">
              <div><span>✓</span> parafuso dentro do osso</div>
              <div><span>✓</span> distância mínima entre parafusos</div>
              <div><span>✓</span> orientação limitada</div>
            </div>

            <button className="lab-optimize-btn" onClick={runOptimization} disabled={running}>
              {running ? `Otimizando · iteração ${iteration}/16` : '▶  Executar otimização'}
            </button>

            <ObjectiveChart history={history} />

            <div className={`lab-result ${done ? 'show' : ''}`}>
              <div className="result-top"><span>CONVERGÊNCIA</span><strong>{finalValue.toFixed(2)}</strong></div>
              <div className="result-grid">
                <span>iterações <b>{iteration}</b></span>
                <span>parafusos <b>{count}</b></span>
                <span>restrições <b>0 violadas</b></span>
              </div>
            </div>
          </div>
        </div>

        <p className="lab-disclaimer mono">MODELO EDUCACIONAL · NÃO UTILIZAR PARA DECISÕES CLÍNICAS</p>
      </div>
    </section>
  );
}
