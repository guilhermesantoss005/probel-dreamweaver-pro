# Product Model: Probel Store (Probel Colchões de Canasvieiras)

**Categoria:** vitrine B2C de loja física (colchões, conjuntos box, box baú, cabeceiras, travesseiros). Sem checkout online.
**Stack:** TanStack Start + React 19 (TypeScript), publicado pela Lovable (`probel-dreamweaver-pro.lovable.app`).
**Público:** visitantes anônimos, a maioria vinda de tráfego pago (Google Ads, Meta Ads) e acessando pelo celular.

## Ação principal de valor
**Iniciar conversa no WhatsApp.** É o lead: a venda é fechada fora do site, pela equipe no WhatsApp ou na loja.

## Entidades
- **Produto:** `slug`, `nome`, `categoria` (colchoes | conjuntos-box | box-bau | cabeceiras | travesseiros), `tamanhos`, `oferta`, `destaque`. Sem preço publicado.
- **Categoria:** páginas `/colchoes`, `/conjuntos-box`, `/box-bau`, `/cabeceiras`, `/travesseiros` e `/ofertas`.
- Sem usuários logados, contas ou grupos.

## Jornada
Anúncio → home ou categoria → página de produto → botão "Comprar pelo WhatsApp" (ou botão flutuante, CTA da home, contato).

## Destinos de analytics
- **GA4** `G-31EFTQ7Q9H` (Google tag / gtag.js), vinculado ao **Google Ads**.
- **Meta Pixel** (`fbq`): previsto, ainda não instalado.

## Política de dados
- Sem PII: o site não coleta nome, e-mail ou telefone.
- Sem exclusão de usuários internos no código. O tráfego interno é filtrado no GA4 (filtro de dados por IP).
