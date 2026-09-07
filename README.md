# ortopedia-teste (site)

Laboratório experimental de ortopedia computacional — Home / Landing Page.

Projeto **React + JavaScript + CSS**, criado com **Vite** (site, não app mobile).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção (arquivos estáticos prontos para publicar em qualquer
hospedagem — Vercel, Netlify, GitHub Pages etc.):

```bash
npm run build
npm run preview   # opcional: testar a build de produção localmente
```

Os arquivos finais ficam em `dist/`.

## Estrutura

```
index.html                        # HTML raiz (carrega as fontes e monta o #root)
src/
  main.jsx                        # ponto de entrada React
  App.jsx                         # monta todas as seções da Home
  index.css                       # tokens de design (cores, tipografia) e estilos globais
  useReveal.js                    # hook de "aparecer ao rolar a página"
  components/
    Header.jsx / Header.css        # navegação e menu mobile
    Hero.jsx / Hero.css            # título principal + ilustração SVG do osso
    ProblemSection.jsx / .css      # fluxo Possibilidades → Configuração escolhida
    TransformSection.jsx / .css    # radiografia → malha 3D → modelo matemático
    HowItWorks.jsx / .css          # 01 Definir / 02 Modelar / 03 Otimizar
    Interdisciplinary.jsx / .css   # diagrama de círculos das áreas envolvidas
    LabPreview.jsx / .css          # prévia interativa (botão "Otimizar")
    BeforeAfter.jsx / .css         # comparação manual vs. otimizada
    Markowitz.jsx / .css           # analogia com otimização de portfólio
    FinalCTA.jsx / .css            # chamada final
    Footer.jsx / .css              # marca, links e aviso legal
```

## Notas

- Cada componente tem seu próprio arquivo `.css` (sem CSS-in-JS, sem Tailwind) — CSS puro,
  como pedido.
- As ilustrações técnicas (osso, malha, parafusos, gráfico de fronteira eficiente) são SVGs
  inline, sem imagens externas.
- Nenhum backend, login ou cadastro — apenas a Home, como solicitado.
- Testado com `npm run build` sem erros.
