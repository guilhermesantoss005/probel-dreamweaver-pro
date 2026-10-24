## Current Implementation

### Update 2026-10-24 (supersedes historical notes below)
- One server-rendered, initially inert Google script element; its data-src activates after same-origin /cdn-cgi/trace (2s) and the latest stored privacy decision permit tracking.
- Public constants: GA4 G-31EFTQ7Q9H; Ads AW-16680866532; direct WhatsApp conversion AW-16680866532/x4bvCKHSrKgdEOSlh5I-.
- Default deny, regional notice, equal accept/reject, withdrawal, cross-tab synchronization and GPC/DNT opt-outs. Matching disabled. No Meta installation.
- Consent evidence and per-conversion decision references are stored in the visitor's browser, not in a central database. Storage failures block conversions.
- No server reporting or matching. No replay of blocked actions. Page views are manual after permission.
- Provider receipt/account eligibility and published deployment remain unverified; no account connection is available and no publishing was requested.

**SDK:** Google tag (gtag.js) carregado de `https://www.googletagmanager.com/gtag/js?id=G-31EFTQ7Q9H` (sem pacote npm)
**Captured:** 2026-10-17

### Initialization
- `src/lib/google-analytics.functions.ts`: a server function `getGoogleAnalyticsConfig` lê e valida `GOOGLE_ANALYTICS_MEASUREMENT_ID` (`/^G-[A-Z0-9]+$/`).
- `src/routes/__root.tsx`: o `loader` da rota raiz chama essa função. `RootComponent` chama `initializeGoogleAnalytics(measurementId, pagePath)` num `useEffect` a cada mudança de `pathname + searchStr`.
- `src/lib/analytics.ts`: na primeira chamada cria `dataLayer`/`gtag`, roda `config` e injeta o script. Nas seguintes, envia `page_view` manual.

### Client vs Server
Só no navegador. O servidor apenas fornece o ID público.

### Call Routing
Wrapper central `track(event, params)` em `src/lib/analytics.ts`, que faz `dataLayer.push`, `gtag('event')` e `fbq('track')`. Os chamadores são `WhatsAppButton`, `WhatsAppFloat`, `Header` (busca) e a página de produto.

### Identity Management
Nenhuma (visitante anônimo).

### Environment Variables
`GOOGLE_ANALYTICS_MEASUREMENT_ID` (definida no ambiente publicado da Lovable).

### Error Handling
Sem try/catch. Usa encadeamento opcional em `window.gtag` e `window.fbq`, então nada quebra se a tag for bloqueada.

### Shutdown / Flush
Não tratado. Os cliques em WhatsApp abrem uma nova aba (`target=_blank`), então a página atual continua viva e o gtag consegue enviar o hit.

### Worth preserving
- O ID vem por uma server function validada (regra do AGENTS.md).
- A tag é inicializada uma única vez, na rota raiz.
- Um único wrapper `track()` concentra todos os envios.
