import { useState } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'O projeto', href: '#problema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Otimização', href: '#otimizacao' },
  { label: 'Próteses', href: '#laboratorio' },
  { label: 'Sobre', href: '#sobre' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" />
          ortopedia-teste
        </a>

        <nav className="nav-primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button className="btn-ghost">Entrar</button>
          <button className="btn-cta">Experimentar</button>
          <button
            className="hamburger"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
