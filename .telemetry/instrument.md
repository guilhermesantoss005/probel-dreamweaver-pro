# Guia de instrumentação: Google tag (gtag.js), GA4 + Google Ads

**Plano:** `.telemetry/tracking-plan.yaml` v1.0.0 · **Atualizado:** 2026-10-17

## Arquitetura
| Peça | Arquivo | Papel |
|------|---------|-------|
| ID público | `src/lib/google-analytics.functions.ts` | Server function que lê e valida `GOOGLE_ANALYTICS_MEASUREMENT_ID` (`G-31EFTQ7Q9H` no ambiente publicado). |
| Inicialização | `src/routes/__root.tsx` → `initializeGoogleAnalytics()` | Roda uma vez: `gtag('js')`, `gtag('config')` (page_view inicial) e injeta o script. |
| Page views internos | `src/routes/__root.tsx` → `trackPageView()` | Dispara quando `resolvedLocation` muda, ou seja, depois que a nova rota renderizou, com o título certo. |
| Eventos | `src/lib/analytics.ts` | Constante `EVENTS`, uma função por evento, mapeamento para o Meta Pixel. |

## Regras para novas mudanças
- Nunca chamar `gtag()`/`fbq()` direto nos componentes. Usar `trackSearch`, `trackViewItem` e `trackWhatsAppLead`.
- Todo `<WhatsAppButton>` exige `origem` (o tipo `CtaLocation`). Para um botão novo, acrescente o valor ao tipo e ao enum do plano.
- Botão de WhatsApp de um produto: passe `produto={produto}` para enviar `product_id`, `product_name` e `product_category`.
- Não colar o snippet do Google no `<head>`. A tag já é carregada pela rota raiz, e um segundo snippet duplicaria tudo.

## Configuração fora do código (obrigatória)
1. **GA4 → Admin → Fluxos de dados → (site) → Medição otimizada ⚙ → Visualizações de página → Mostrar configurações avançadas** → desmarcar *"Alterações de página com base em eventos do histórico do navegador"* → Salvar.
2. **GA4 → Admin → Eventos** → marcar `generate_lead` como **evento principal** (o evento aparece na lista depois do primeiro disparo; também dá para criar em *Eventos principais → Novo evento principal*).
3. **GA4 → Admin → Definições personalizadas → Criar dimensão personalizada** (escopo Evento): `cta_location`, `product_name`, `product_category`.
4. **Google Ads → Metas → Conversões → + Nova ação de conversão → Importar → Google Analytics 4 → Web** → `generate_lead` → meta **Principal**, contagem **Uma**.
5. **Google Ads → conversão "Solicitar cotação"**: hoje dispara ao abrir `/colchoes` (evento `ads_conversion_Solicitar_cota_o_1`). Mude para **Secundária** ou remova, para não somar visitas como leads.

## Verificação
- [ ] **Tag Assistant** (tagassistant.google.com) → conectar o site → navegar Home → Colchões → Produto: aparece **um** `page_view` por página, com o título da página atual.
- [ ] Na página de produto: `view_item` com `items[0].item_id` = slug.
- [ ] Buscar "casal": `search` com `search_term=casal`.
- [ ] Clicar em "Comprar pelo WhatsApp": `generate_lead` com `lead_source=whatsapp`, `cta_location=card_produto` ou `pagina_produto`, e `product_name`.
- [ ] **GA4 → Admin → DebugView**: os mesmos eventos chegam (o Tag Assistant ativa o modo de depuração).
- [ ] Em 24 a 48 h, a conversão "generate_lead" aparece em Google Ads → Conversões com status "Gravando conversões".
