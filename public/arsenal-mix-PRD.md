# PRD — Landing Page Arsenal Mix
**Product Requirements Document · v1.0**
Cliente: Arsenal Mix — Comércio de Borrachas e Ferragens
Agência: M|P Assessoria
Documento de copy relacionado: `arsenal-mix-COPY.md` (usar como fonte de todo o texto)

---

## 1. Visão geral

Landing page **single-page**, de alta conversão, para a Arsenal Mix — comércio de borrachas, mangueiras, mangotes, ferragens e ferramentas para os setores **agro, indústria e construção civil**. A empresa é nova (fundada em 2026) e ainda não tem presença digital; esta é a primeira página oficial e o principal canal de captação online, alimentada por tráfego pago (Meta Ads, orçamento inicial enxuto).

**Objetivo único e mensurável:** levar o visitante a iniciar uma conversa no **WhatsApp** ("Falar com um especialista"). Não há formulário, carrinho ou checkout — todo CTA converte para WhatsApp com mensagem pré-preenchida.

### 1.1 Metas de sucesso
- **CTA principal:** taxa de clique no WhatsApp (meta de referência: > 8% das sessões).
- **Performance:** Core Web Vitals "Bom" no mobile (LCP < 2.5s, CLS < 0.1, INP < 200ms). A maior parte do tráfego virá de anúncios no celular — mobile é prioridade absoluta.
- **Rastreamento:** todo clique de WhatsApp disparando evento para Meta Pixel e GA4.

### 1.2 Público-alvo
Decisores e compradores 25+ do agro/agropecuária, manutenção industrial e construção civil, concentrados em Goiás mas com atendimento nacional. Perfil prático, valoriza **pronta-entrega, preço competitivo e atendimento de quem entende do produto**. Costumam comprar com urgência (peça pra não parar máquina/operação). Ticket médio ~R$ 2.500, compra pontual.

---

## 2. Requisitos não-negociáveis (escopo obrigatório)

> Estes itens foram explicitamente exigidos e devem constar como critério de aceite.

1. **100% responsiva e otimizada para mobile** (mobile-first; o layout é desenhado primeiro pro celular e depois expandido).
2. **Animações e efeitos de scroll** — revelação ao rolar, micro-interações em hover, parallax sutil no hero, contadores/elementos animados. Sempre respeitando `prefers-reduced-motion`.
3. **Arquitetura em componentes** reutilizáveis (cada seção é um componente isolado).
4. **Identidade única**, não-templated, derivada da **paleta da logo do cliente** (ver §4 — paleta em variáveis CSS, trocar pelos hex oficiais).
5. **Conversão para WhatsApp** em todos os CTAs, com mensagem pré-preenchida por contexto.

---

## 3. Stack técnica recomendada

Escolha pensada para o fluxo no **Claude Code / VSCode**, com SEO forte, deploy simples e boas animações.

**Recomendado (primário):**
- **Next.js (App Router)** + **TypeScript** — SSR/SSG para SEO local, fácil deploy na Vercel.
- **Tailwind CSS** — design tokens via CSS variables (ver §4).
- **Framer Motion** (`motion`) — animações de scroll (`whileInView`), parallax (`useScroll`/`useTransform`) e micro-interações.
- **Lucide React** — ícones (leves, consistentes).
- **next/font** — carregamento otimizado das fontes (sem layout shift).
- **next/image** — imagens responsivas, lazy load, formatos modernos (AVIF/WebP).

**Alternativa válida:** **Astro + Tailwind + Framer Motion (ilhas React)** se a prioridade for peso/performance máximos numa página estática. Não usar framework pesado sem necessidade — é uma LP.

**Deploy:** Vercel (ou a hospedagem que o cliente já possui — o briefing confirma domínio + hospedagem existentes; validar se suportam Node/SSG ou se a saída deve ser estática `output: export`).

---

## 4. Design system

### 4.1 Direção visual — "Brasão industrial"
A logo da Arsenal Mix é um **brasão heráldico** (escudo + canhão) em vermelho, dourado, azul-marinho e branco sobre creme. A direção visual honra essa identidade de emblema, mas aterrada no mundo do produto: **vermelho como cor de marca e energia**, **dourado como acento nobre** (destaques, detalhes, filetes), **azul-marinho como base escura de contraste** e **creme** nas seções claras. Conceito-assinatura: **cards de produto no formato de "placa/ficha técnica" com moldura e filete dourado** — remetendo ao escudo, com rótulos em fonte monoespaçada (código de peça) e carimbo "PRONTA-ENTREGA". O resultado fica forte, encorpado e claramente "do ramo", sem virar SaaS genérico nem cópia de template.

> Evitar os clichês de "LP gerada por IA": fundo creme com serifada + terracota; preto absoluto com um único verde-limão ácido; jornal com filetes. A assinatura aqui é o **brasão/placa com filete dourado**, ancorado na marca real e no produto.

### 4.2 Paleta — extraída da logo oficial ✅
Valores amostrados diretamente do arquivo da logo. Já estão prontos para uso; ajuste fino opcional conforme o manual da marca, se existir.

```css
:root {
  /* === CORES DA MARCA (amostradas da logo Arsenal Mix) === */
  --color-red:         #BE0A0A; /* vermelho do escudo — cor primária da marca */
  --color-red-700:     #8F0606; /* vermelho escuro (hover/pressed, fundos) */
  --color-gold:        #DFAC29; /* dourado do canhão/moldura — ACENTO (CTAs, detalhes) */
  --color-gold-700:    #B9881A; /* dourado escuro (hover do acento) */
  --color-navy:        #0A3A57; /* azul-marinho dos filetes — base escura/contraste */
  --color-navy-900:    #072739; /* navy profundo (seções escuras/rodapé) */
  --color-cream:       #FAF8EC; /* creme do fundo da logo — seções claras */
  --color-ink:         #1A1718; /* texto forte sobre claro */
  --color-steel-600:   #6B6B66; /* texto secundário */
  --color-steel-300:   #D9D7CF; /* bordas/linhas em seções claras */
  --color-white:       #FFFFFF;
  --color-whatsapp:    #25D366; /* fixo — cor oficial do WhatsApp (botão flutuante) */
  --color-success:     #2F7D32;
  --color-danger:      #C0392B;

  /* Tipografia */
  --font-display: 'Archivo', system-ui, sans-serif;        /* pesada/condensada p/ títulos — combina c/ o wordmark do escudo */
  --font-body:    'Inter', system-ui, sans-serif;          /* corpo */
  --font-mono:    'IBM Plex Mono', ui-monospace, monospace; /* rótulos técnicos/etiquetas */

  /* Raio, sombra, espaçamento base */
  --radius:       4px;   /* cantos retos/pouco arredondados = robusto */
  --radius-card:  8px;
  --shadow-card:  0 2px 0 rgba(0,0,0,.18), 0 14px 34px rgba(10,58,87,.18);
  --maxw:         1200px;
}
```

**Uso recomendado das cores (hierarquia de conversão):**
- **CTA principal (Falar com especialista):** fundo **vermelho** `--color-red` com texto branco, OU **dourado** `--color-gold` com texto navy — testar os dois; o dourado sobre seções escuras tem ótimo destaque. Botão flutuante mantém o **verde WhatsApp**.
- **Seções claras:** fundo `--color-cream`, texto `--color-ink`, detalhes/filetes em `--color-gold`.
- **Seções escuras (hero, CTA final, rodapé):** fundo `--color-navy-900` ou `--color-red-700`, texto branco, acentos dourados.
- **Dourado é acento, não cor de grande área** — use em filetes, ícones, bordas de card, números e detalhes, para manter o ar "nobre" sem cansar.
- **Contraste/AA:** dourado sobre creme NÃO passa em texto pequeno → use dourado só em elementos grandes/decorativos sobre claro, e texto em `--color-ink`/`--color-navy`. Sobre navy/vermelho escuro, o dourado e o branco passam bem.

### 4.3 Tipografia
- **Display:** fonte grotesca pesada/condensada (ex.: **Archivo**, Archivo Expanded, Saira Condensed ou Oswald) — títulos grandes, caixa alta nos eyebrows, peso 700–900. Carrega a personalidade.
- **Corpo:** **Inter** (ou Source Sans) — legibilidade em parágrafos e mobile.
- **Mono utilitária:** **IBM Plex Mono** / JetBrains Mono — usada nos rótulos das etiquetas de produto, eyebrows ("PRONTA-ENTREGA", códigos), números técnicos. É parte da assinatura visual.
- **Escala de tipo (sugestão, fluida com `clamp()`):** H1 `clamp(2.2rem, 6vw, 4.5rem)`; H2 `clamp(1.8rem, 4vw, 3rem)`; body `1rem–1.125rem`; eyebrow `0.8rem` tracking alto.

### 4.4 Layout
- Grid de 12 colunas, container `--maxw` 1200px, gutters generosos.
- Espaçamento vertical entre seções consistente (`clamp(4rem, 9vw, 8rem)`). **Cuidado com colisão de margens entre seletores de seção** (ver nota no §10).
- Alternância de seções claras (concreto) e escuras (borracha) para ritmo visual.

---

## 5. Estrutura da página (mapa de seções → componentes)

Ordem e conteúdo seguem `arsenal-mix-COPY.md`. Cada item é um componente.

| # | Componente | Conteúdo (ver COPY) | Observação |
|---|------------|---------------------|-----------|
| 0 | `Header` | logo + nav âncora + botão WhatsApp | sticky; encolhe ao rolar |
| 1 | `Hero` | H1, sub, CTA primário + secundário, barra de eyebrow | parallax sutil + entrada animada |
| 2 | `TrustBar` | 4 selos (pronta-entrega, +13 anos, todo Brasil, preço) | faixa; vira lista no mobile |
| 3 | `About` | "Marca nova, experiência de 13 anos" | reveal on scroll |
| 4 | `Products` | 6 cards (mangueiras, mangotes, borrachas ind., borrachas agríc., ferragens, ferramentas) | **cards = ficha técnica**; CTA por produto |
| 5 | `Differentials` | 4 blocos (pronta-entrega, atendimento, preço, cobertura) | grid; hover |
| 6 | `Segments` | agro / indústria / construção | auto-identificação |
| 7 | `HowItWorks` | 3 passos | numeração real (é sequência) |
| 8 | `SocialProof` | depoimentos anônimos + selos | **sem nomes de empresas** (regra do cliente) |
| 9 | `FAQ` | 6 perguntas (acordeão) | accordion acessível |
| 10 | `FinalCTA` | fechamento + botão grande | seção escura de destaque |
| 11 | `Footer` | contato, mapa Google, redes, legal | dados do Google Business |
| — | `FloatingWhatsApp` | botão fixo desktop + barra fixa mobile | presente em toda a página |

---

## 6. Conversão para WhatsApp (regra central)

Todos os CTAs abrem o WhatsApp via deep link, com mensagem pré-preenchida específica do contexto.

```ts
// helper
const WHATSAPP_NUMBER = "55XXXXXXXXXXX"; // [NUMERO_WHATSAPP] — DDD + número, só dígitos
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
```

- Hero / CTA geral: `"Olá! Vim pelo site da Arsenal Mix e quero falar com um especialista."`
- Card de produto (ex. mangueiras): `"Quero um orçamento de mangueiras."`
- Botão flutuante: `"Olá! Vim pelo site da Arsenal Mix e quero um orçamento."`
- Cada `<a>` de WhatsApp: `target="_blank" rel="noopener"`, com `aria-label` descritivo, e `onClick` que dispara o evento de tracking (§8).

---

## 7. Especificação de animações e interações

Stack: Framer Motion. **Sempre** envolver com checagem de `prefers-reduced-motion` (Framer: `useReducedMotion()` → desliga transformações, mantém conteúdo visível).

- **Entrada do Hero:** sequência orquestrada (eyebrow → H1 → sub → CTAs) com leve `y` + fade, stagger ~80ms. Uma única entrada caprichada vale mais que efeitos espalhados.
- **Parallax do hero:** textura/imagem de fundo industrial com `useScroll` + `useTransform` (deslocamento sutil, máx. ~40px). Discreto.
- **Reveal on scroll:** seções e cards aparecem com `whileInView` (`opacity 0→1`, `y 24→0`, `viewport={{ once: true, margin: "-80px" }}`).
- **Cards de produto:** hover com leve elevação + realce da borda no acento + "carimbo" PRONTA-ENTREGA aparecendo. No mobile, o estado é estático (sem hover).
- **Contadores/destaques** (ex. "+13 anos"): animar número ao entrar na viewport (count-up), respeitando reduced-motion.
- **Header sticky:** muda de transparente → sólido (fundo borracha) ao rolar; encolhe altura.
- **Smooth scroll** nas âncoras da nav.
- **Botão flutuante:** leve pulsação/atenção no acento (sutil; não piscar agressivo).
- **Acordeão do FAQ:** transição de altura suave; ícone gira.

**Princípio:** restrição. Excesso de animação faz a página parecer "gerada por IA". A assinatura é uma só (etiqueta industrial + revelação ao scroll). O resto é discreto.

---

## 8. Rastreamento e tags

A empresa fará tráfego pago (Meta). Instrumentar desde o lançamento:

- **Meta Pixel:** `PageView` no load; evento custom `Contact` / `Lead` em cada clique de WhatsApp.
- **GA4:** evento `generate_lead` / `click_whatsapp` com parâmetro de origem (qual seção/produto gerou o clique).
- **Google Tag Manager** (opcional) para centralizar as tags sem mexer no código depois.
- IDs como variáveis de ambiente (`.env`): `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_WHATSAPP_NUMBER`. Deixar placeholders e documentar no README.

---

## 9. SEO e dados estruturados

- **Negócio local** → priorizar SEO local. Title/description com "borrachas, mangueiras e ferragens em Goiânia / todo o Brasil".
- Meta tags + **Open Graph** + Twitter Card (imagem de compartilhamento da marca).
- **Schema.org `LocalBusiness`** (JSON-LD) com nome, endereço (Goiânia), telefone/WhatsApp, horário, área de atendimento (Brasil) e categorias de produto.
- HTML semântico (`<header> <main> <section> <h1>` único, hierarquia correta de headings).
- `sitemap.xml`, `robots.txt`, favicon e ícones (gerar a partir do logo).
- Idioma `pt-BR`.

---

## 10. Performance, responsividade e qualidade

### Responsividade (mobile-first)
- Breakpoints Tailwind: base (≤640 mobile) → `sm` 640 → `md` 768 → `lg` 1024 → `xl` 1280.
- **Mobile é o caso primário** (tráfego de anúncios). Testar em 360–414px de largura.
- Tipografia fluida com `clamp()`; nada de texto cortado ou overflow horizontal.
- Áreas de toque dos botões ≥ 44px. Barra fixa de WhatsApp no mobile sem cobrir conteúdo essencial (compensar com `padding-bottom` no `<main>`).

### Performance
- `next/image` com `sizes` corretos; servir AVIF/WebP; dimensões definidas (evitar CLS).
- Fontes via `next/font` com `display: swap` e subset latino.
- Lazy load de seções abaixo da dobra; pré-carregar só o essencial do hero.
- Minimizar JS; animações via transform/opacity (GPU), nunca animar `width/height/top/left` em loop.
- Meta de Lighthouse mobile ≥ 90 em Performance, ≥ 95 em SEO e Acessibilidade.

### Acessibilidade
- Contraste AA (atenção: acento amarelo sobre claro precisa de texto escuro; sobre escuro, ok).
- Foco visível no teclado em todos os interativos; navegação por teclado no acordeão e na nav.
- `alt` descritivo nas imagens; `aria-label` nos botões de WhatsApp e no menu.
- `prefers-reduced-motion` respeitado em todas as animações.

### Nota de CSS (Framer/Tailwind)
Cuidado com **especificidade e colisão de margens** entre seletores de seção e de elemento (paddings/margens que se cancelam entre seções). Padronizar o espaçamento vertical num único utilitário/wrapper de seção em vez de margens soltas.

---

## 11. Assets e conteúdo necessários (pendências com o cliente)

- [x] **Logo + paleta** — recebida. Paleta oficial extraída e aplicada no §4.2 (vermelho `#BE0A0A`, dourado `#DFAC29`, navy `#0A3A57`, creme `#FAF8EC`). Pedir versão **vetorial (SVG)** da logo para nitidez em todas as resoluções.
- [ ] **Revisão de marca (atenção — ver §14):** a logo tem forte semelhança com o brasão do Arsenal FC. Recomenda-se validação jurídica antes de investir em mídia paga. Ter um plano B de logo evita retrabalho.
- [ ] **Fotos reais** de produtos, estoque e loja (geram mais confiança que banco de imagens) — briefing pediu mas não anexou. Enquanto não vierem, usar placeholders/ilustrações industriais neutras e marcar `TODO`.
- [ ] **Número de WhatsApp** oficial.
- [ ] **Endereço completo, horário, Instagram e link do Google Maps** (puxar do Perfil da Empresa no Google).
- [ ] **Depoimentos reais** (podem ser anônimos por setor) para substituir os modelos.
- [ ] **Formas de pagamento** (para o FAQ).
- [ ] **IDs** do Meta Pixel e GA4.
- [ ] Confirmar se a hospedagem do cliente suporta Next.js SSR/SSG ou se a entrega deve ser **estática** (`output: export`).

---

## 12. Critérios de aceite (definition of done)

1. Todas as 11 seções implementadas conforme `arsenal-mix-COPY.md`, em componentes isolados.
2. 100% responsiva, sem overflow horizontal, validada em 360px → 1440px.
3. Animações de scroll e micro-interações funcionando e desligando com `prefers-reduced-motion`.
4. Todo CTA abre WhatsApp com mensagem pré-preenchida correta + dispara evento de tracking.
5. Botão flutuante (desktop) + barra fixa (mobile) presentes em toda a página.
6. Lighthouse mobile: Performance ≥ 90, SEO ≥ 95, Acessibilidade ≥ 95.
7. JSON-LD `LocalBusiness`, OG tags e favicon presentes.
8. Paleta 100% via variáveis CSS — trocar a marca é mudar só o `:root`.
9. README com instruções de `.env`, build e deploy.

---

## 13. Ordem de build sugerida (para o Claude Code)

1. Setup: Next.js + TS + Tailwind + Framer Motion + Lucide; configurar `next/font`; criar `globals.css` com os tokens do §4.
2. Layout base: `Header` sticky + `FloatingWhatsApp` + helper `waLink()`.
3. `Hero` com animação de entrada e parallax.
4. `TrustBar` → `About` → `Products` (cards ficha técnica) → `Differentials` → `Segments` → `HowItWorks`.
5. `SocialProof` → `FAQ` (acordeão) → `FinalCTA` → `Footer` (com mapa e JSON-LD).
6. Passada de animações (reveal/stagger) + estados de reduced-motion.
7. Tracking (Pixel/GA4) + SEO/meta/OG/schema.
8. Auditoria: Lighthouse mobile, teste de responsividade, foco/teclado, troca de paleta de teste.

---

## 14. Nota de atenção — semelhança de marca (não-jurídica)

Registro técnico/profissional, **não é parecer jurídico** (não sou advogado): a logo enviada — escudo vermelho com canhão dourado, wordmark "ARSENAL" em branco e paleta vermelho/dourado/azul-marinho — é visualmente **muito próxima do brasão do Arsenal Football Club**, marca registrada e ativamente protegida internacionalmente, inclusive no Brasil.

Como essa LP vai concentrar **investimento em tráfego pago** e dar visibilidade pública à marca, vale o cliente considerar o risco antes de escalar:

- Uma eventual notificação/cease-and-desist pode obrigar a refazer a identidade, derrubando a página e queimando a verba de anúncio já investida.
- Plataformas de anúncio (Meta/Google) podem reprovar criativos por uso de marca de terceiros.

**Sugestão de encaminhamento (decisão é do cliente):**
1. Validar com um advogado de marcas / consultar o INPI.
2. Avaliar uma evolução do logo que mantenha o "espírito" (escudo, força, as cores vermelho+dourado) mas se afaste do canhão e do wordmark do Arsenal — preservando o reconhecimento sem o risco.
3. Independentemente da decisão, a paleta vermelho/dourado/navy/creme do §4 continua válida para a página.

Isso não bloqueia o desenvolvimento — é só um alerta para subir a cadeia de decisão antes do lançamento pago.

---
- **Empresa:** Arsenal Mix — borrachas e ferragens · fundada jan/2026 · sócio com 13 anos de mercado.
- **Produtos:** mangueiras, mangotes, borrachas industriais, borrachas agrícolas, ferragens, ferramentas.
- **Atende:** todo o Brasil · loja física Goiânia (frete CIF Goiânia+entorno; transportadora demais regiões).
- **Cliente ideal:** agro/agropecuária, indústria, construção civil · Goiás · 25+ · valoriza pronta-entrega, preço, conhecimento técnico.
- **Objetivo da LP:** levar pro WhatsApp · CTA "Falar com um especialista".
- **Concorrentes:** Reino da Borracha, Nacional Borrachas, Rainha da Borracha.
- **Restrição:** não exibir nomes/logos de clientes atendidos.
- **Já tem:** domínio + hospedagem · logo/identidade (não anexados aqui).
