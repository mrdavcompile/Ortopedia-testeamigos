import './Hero.css';

function BoneHeroSVG() {
  return (
    <svg viewBox="0 0 560 460" fill="none">
      <line x1="60" y1="120" x2="500" y2="120" stroke="#D8D2C1" strokeWidth="1" />
      <line x1="60" y1="340" x2="500" y2="340" stroke="#D8D2C1" strokeWidth="1" />
      <line x1="60" y1="100" x2="60" y2="360" stroke="#D8D2C1" strokeWidth="1" />

      <g stroke="#1C1B17" strokeWidth="1.4" fill="#FDFCF9">
        <path
          d="M110 150 C100 130, 118 108, 142 112 C160 115, 165 132, 158 148
             C210 160, 320 190, 400 208
             C420 202, 440 208, 448 222 C456 238, 448 256, 430 258
             C412 260, 398 250, 396 234
             C320 224, 210 198, 160 188
             C150 210, 130 216, 116 206 C102 196, 100 176, 110 168 Z"
        />
      </g>

      {[168, 196, 224, 252, 280].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={172} x2={x - 14} y2={132} stroke="#45607A" strokeWidth="3" />
          <circle cx={x} cy={172} r="4.5" fill="#45607A" />
        </g>
      ))}

      <rect
        x="150"
        y="182"
        width="150"
        height="16"
        rx="3"
        transform="rotate(12 150 182)"
        fill="none"
        stroke="#45607A"
        strokeWidth="1.6"
      />

      <text x="270" y="112" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#8B8B85">
        340 mm
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow-line">
            <span className="dash" />
            laboratório experimental
          </div>
          <h1 className="hero-title">Quando a ortopedia encontra a otimização.</h1>
          <p className="hero-sub">
            Um laboratório experimental para explorar como matemática e computação podem ajudar a
            estudar as configurações de fixação óssea.
          </p>
          <div className="hero-actions">
            <a className="btn-cta" href="#problema">
              Explorar o projeto
            </a>
            <a className="btn-ghost" href="#como-funciona">
              Como funciona
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <BoneHeroSVG />
          <div className="float-chip" style={{ top: '6%', left: '2%' }}>
            min f(x)
          </div>
          <div className="float-chip" style={{ top: '2%', right: '4%' }}>
            x₁ x₂ x₃ … xₙ
          </div>
          <div className="float-chip" style={{ bottom: '20%', left: '0%' }}>
            g(x) ≤ 0
          </div>
          <div className="float-chip" style={{ bottom: '10%', right: '2%' }}>
            Estabilidade 87
          </div>
          <div className="float-chip" style={{ bottom: '-2%', left: '34%' }}>
            5 parafusos · 0 restrições violadas
          </div>
        </div>
      </div>
    </section>
  );
}
