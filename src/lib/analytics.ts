/**
 * Camada de eventos para a tag do Google (GA4 + Google Ads) e o Meta Pixel (fbq).
 * Os nomes seguem os eventos recomendados do GA4; o Meta recebe o evento padrão equivalente.
 * Plano de tracking: .telemetry/tracking-plan.yaml
 */
import type { Produto } from "@/data/products";
import { GOOGLE_ADS_WHATSAPP_CONVERSION } from "@/config/analytics";

type Params = Record<string, unknown>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export const EVENTS = {
  PAGE_VIEW: "page_view",
  SEARCH: "search",
  VIEW_ITEM: "view_item",
  GENERATE_LEAD: "generate_lead",
} as const;

type EventName = (typeof EVENTS)[keyof typeof EVENTS];

const META_EVENTS: Record<Exclude<EventName, "page_view">, string> = {
  search: "Search",
  view_item: "ViewContent",
  generate_lead: "Contact",
};

/** Onde fica o botão de WhatsApp clicado (parâmetro cta_location do generate_lead). */
export type CtaLocation =
  | "cabecalho"
  | "menu_mobile"
  | "botao_flutuante"
  | "rodape"
  | "home_hero"
  | "home_ofertas"
  | "home_cta_final"
  | "card_produto"
  | "pagina_produto"
  | "pagina_produto_ficha"
  | "categoria_vazia"
  | "busca_vazia"
  | "pagina_contato"
  | "pagina_sobre";

export type ProdutoTracking = Pick<Produto, "slug" | "nome" | "categoria">;

// A tag do Google (gtag.js + gtag('config')) vem no <head> renderizado pelo servidor:
// src/routes/__root.tsx + src/config/analytics.ts. Nada aqui injeta script.

/** undefined até a primeira página; o page_view dela vem do gtag('config'). */
let lastPageLocation: string | undefined;

function analyticsWindow() {
  return typeof window === "undefined" ? undefined : (window as AnalyticsWindow);
}

/**
 * page_view das navegações internas. Chamar depois que a rota terminar de carregar,
 * para o título já ser o da nova página. Requer desligar no GA4 o page_view
 * "com base em eventos do histórico do navegador" (Medição otimizada).
 */
export function trackPageView() {
  const w = analyticsWindow();
  if (!w?.probelPrivacy?.allowed()) return;
  const href = w.location.href;
  if (href === lastPageLocation) return;
  w.gtag?.("event", EVENTS.PAGE_VIEW, {
    page_location: href,
    page_referrer: lastPageLocation || document.referrer,
    page_title: document.title,
  });
  lastPageLocation = href;
}

function send(event: Exclude<EventName, "page_view">, params: Params, metaParams: Params) {
  const w = analyticsWindow();
  if (!w?.probelPrivacy?.allowed()) return;
  w.gtag?.("event", event, params);
  // No Meta Pixel is installed; do not share data with an undisclosed recipient.
}

export function trackSearch(searchTerm: string) {
  send(EVENTS.SEARCH, { search_term: searchTerm }, { search_string: searchTerm });
}

export function trackViewItem(produto: ProdutoTracking) {
  send(
    EVENTS.VIEW_ITEM,
    {
      items: [
        {
          item_id: produto.slug,
          item_name: produto.nome,
          item_brand: "Probel",
          item_category: produto.categoria,
        },
      ],
    },
    {
      content_ids: [produto.slug],
      content_name: produto.nome,
      content_category: produto.categoria,
      content_type: "product",
    },
  );
}

/** Clique em qualquer botão de WhatsApp: é a conversão principal (GA4 key event → Google Ads). */
export function trackWhatsAppLead(ctaLocation: CtaLocation, produto?: ProdutoTracking) {
  const productParams = produto
    ? { product_id: produto.slug, product_name: produto.nome, product_category: produto.categoria }
    : {};
  send(
    EVENTS.GENERATE_LEAD,
    { lead_source: "whatsapp", cta_location: ctaLocation, ...productParams },
    produto ? { content_ids: [produto.slug], content_name: produto.nome } : {},
  );
  const w = analyticsWindow();
  if (!w?.probelPrivacy?.allowed()) return;
  w.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
  });
}
