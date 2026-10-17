# Delta: estado atual → plano alvo (2026-10-17)

O plano alvo tem 4 eventos: Rename 3 + Keep 1 (com mudança de formato) + Add 0 = 4.

## Rename (troca de nome para o padrão GA4)
| Atual | Alvo | Notas |
|-------|------|-------|
| `ViewContent` | `view_item` | Envia `items[]` (slug, nome, marca, categoria) e libera os relatórios de itens do GA4. O Meta continua recebendo `ViewContent`. |
| `Search` | `search` | `search_string` → `search_term` (parâmetro lido pelo GA4). |
| `Contact` + `Lead` | `generate_lead` | Junta os dois em um só evento: os dois significam "clicou no WhatsApp". O local do clique vai em `cta_location`. O Meta recebe `Contact`. |

## Keep (com mudança de formato)
| Evento | Mudança |
|--------|---------|
| `page_view` | Envia `page_location`/`page_title`/`page_referrer` depois que a rota carrega, então o título fica correto. Sai o `page_path` (parâmetro do UA). Exige desligar no GA4 o page_view por histórico do navegador para não duplicar. |

## Remove
| Atual | Motivo |
|-------|--------|
| `AddToCart` | ORPHANED. O site não tem carrinho. |
| `InitiateCheckout` | ORPHANED. O site não tem checkout. |
| `dataLayer.push({event, ...})` | Duplicava cada evento no formato GTM sem existir container GTM. O `gtag()` já escreve no dataLayer. |

## Add (cobertura nova, sem evento novo)
| Onde | O quê |
|------|-------|
| Ícone de WhatsApp no rodapé | Hoje não envia nada. Passa a enviar `generate_lead` com `cta_location=rodape`. |

## Fora do código (GA4 / Google Ads)
1. GA4 → Medição otimizada → Visualizações de página → desligar "Alterações de página com base em eventos do histórico do navegador".
2. GA4 → Eventos → marcar `generate_lead` como **evento principal**.
3. GA4 → Definições personalizadas → criar `cta_location`, `product_name` e `product_category` (escopo de evento).
4. Google Ads → Conversões → importar `generate_lead` do GA4 como **Principal**, contagem "Uma".
5. Google Ads → conversão "Solicitar cotação" (dispara ao abrir /colchoes) → mudar para **Secundária** ou remover.
