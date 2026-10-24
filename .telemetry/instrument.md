# Guia de instrumentação: Google tag (gtag.js), GA4 + Google Ads

## Atualização 2026-10-24 — substitui as instruções antigas abaixo
- O snippet inicial nega consentimento e ativa o único elemento Google no head após a verificação regional e a decisão atual permitirem medição. A tag fica inerte antes disso.
- Conversão direta Contato: AW-16680866532/x4bvCKHSrKgdEOSlh5I-, somente clique no WhatsApp; não visita a /contato.
- generate_lead continua no GA4 para análise. Não importar esse mesmo evento como outra conversão principal no Ads: isso duplicaria o resultado. A conta ainda precisa ser conferida.
- Configurações de privacidade no rodapé; política em /privacidade; registros locais do visitante, data, região, aviso e escolhas, com referência em cada conversão permitida.
- Não há instalação Meta nem correspondência de clientes. Não reenviar eventos bloqueados.
- Publicação e recebimento no Google ainda não verificados.

**Plano:** `.telemetry/tracking-plan.yaml` v1.0.0 · **Atualizado:** 2026-10-17

## Arquitetura
| Peça | Arquivo | Papel |
|------|---------|-------|
| ID público | `src/config/analytics.ts` | `GA_MEASUREMENT_ID = "G-31EFTQ7Q9H"` fixo no código. Sem variável de ambiente: o deploy da Vercel (domínio dos anúncios) não tem nenhuma. |
| Tag | `src/routes/__root.tsx` → `RootShell` | Snippet oficial (`gtag/js` + `gtag('config')`) renderizado no `<head>` pelo servidor. Vai no HTML entregue, que é o que o "Teste a conexão" do Google lê. |
| Page views internos | `src/routes/__root.tsx` → `trackPageView()` | Dispara quando `resolvedLocation` muda, ou seja, depois que a nova rota renderizou, com o título certo. |
| Eventos | `src/lib/analytics.ts` | Constante `EVENTS`, uma função por evento, mapeamento para o Meta Pixel. |

## Regras para novas mudanças
- Nunca chamar `gtag()`/`fbq()` direto nos componentes. Usar `trackSearch`, `trackViewItem` e `trackWhatsAppLead`.
- Todo `<WhatsAppButton>` exige `origem` (o tipo `CtaLocation`). Para um botão novo, acrescente o valor ao tipo e ao enum do plano.
- Botão de WhatsApp de um produto: passe `produto={produto}` para enviar `product_id`, `product_name` e `product_category`.
- Não colar outro snippet do Google (nem pela Lovable, nem pela Vercel). A tag já está no `<head>` da rota raiz, e uma segunda duplicaria tudo.

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
