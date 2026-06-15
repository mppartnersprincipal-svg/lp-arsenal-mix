# Arsenal Mix — Landing Page

Landing page de alta conversão (foco: WhatsApp) para a Arsenal Mix — Comércio de Borrachas e Ferragens.
Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide**.

## Como rodar

```bash
npm install
cp .env.local.example .env.local   # preencha os dados
npm run dev                        # http://localhost:3000
```

Build de produção:

```bash
npm run build && npm run start
```

> Se a hospedagem do cliente não suportar Node/SSR, ative o export estático em `next.config.mjs`
> (`output: 'export'`) e use `npm run build` — a saída vai para `/out`.

## Variáveis de ambiente (`.env.local`)

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | DDD + número, só dígitos (ex.: `5562999998888`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel (tráfego pago) — opcional |
| `NEXT_PUBLIC_GA_ID` | ID do GA4 — opcional |

Outros dados (endereço, horário, Instagram, mapa) ficam em `lib/site.ts`.

## Estrutura

```
app/
  layout.tsx        # fontes, SEO, OG, JSON-LD LocalBusiness
  page.tsx          # monta as seções (Hero pronto + stubs)
  globals.css       # >>> DESIGN TOKENS da marca (trocar cores aqui) <<<
components/
  Header.tsx        # sticky, vira sólido ao rolar
  Hero.tsx          # animado, parallax do brasão, CTAs
  FloatingWhatsApp.tsx
lib/
  site.ts           # config do cliente (placeholders)
  whatsapp.ts       # waLink() + mensagens + tracking
```

## Paleta da marca (extraída da logo)

Editar em **`app/globals.css` → `:root`**. Tudo no site usa essas variáveis.

| Token | Hex | Uso |
|---|---|---|
| `--color-red` | `#BE0A0A` | primária (marca) |
| `--color-gold` | `#DFAC29` | acento (CTAs, filetes) |
| `--color-navy` | `#0A3A57` | base de contraste |
| `--color-navy-900` | `#072739` | seções escuras/rodapé |
| `--color-cream` | `#FAF8EC` | seções claras |

## O que falta construir (ver `arsenal-mix-PRD.md` §5 e `arsenal-mix-COPY.md`)

Seções stub já com âncoras prontas: About, Produtos (cards ficha técnica), Diferenciais,
Setores, Como funciona, Depoimentos, FAQ (acordeão), CTA final, Rodapé (com mapa + JSON-LD).

Pendências de conteúdo: logo em **SVG**, fotos reais, número de WhatsApp, endereço/horário,
depoimentos reais, formas de pagamento, IDs de Pixel/GA.

## ⚠️ Atenção — marca

A logo atual lembra muito o brasão do **Arsenal FC** (marca registrada). Recomenda-se validação
jurídica antes de escalar mídia paga. Ver `arsenal-mix-PRD.md` §14.

---
Desenvolvido por M|P Assessoria.
