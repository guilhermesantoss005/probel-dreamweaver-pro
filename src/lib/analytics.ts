/**
 * Camada de eventos para a tag do Google (GA4 + Google Ads) e o Meta Pixel (fbq).
 * Os nomes seguem os eventos recomendados do GA4; o Meta recebe o evento padrão equivalente.
 * Plano de tracking: .telemetry/tracking-plan.yaml
 */
import type { Produto } from "@/data/products";

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

let initialized = false;
let lastPageLocation: string | undefined;

function analyticsWindow() {
  return typeof window === "undefined" ? undefined : (window as AnalyticsWindow);
}

/** Carrega a tag do Google uma única vez. O gtag config envia o page_view da primeira página. */
export function initializeGoogleAnalytics(measurementId: string) {
  const w = analyticsWindow();
  if (!w || initialized || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function (..._args: unknown[]) {
    // O gtag.js só reconhece o objeto `arguments`; um array comum seria ignorado.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer?.push(arguments);
  };
  w.gtag("set", "developer_id.dZjgwMW", true);
  w.gtag("js", new Date());
  w.gtag("config", measurementId);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  initialized = true;
  lastPageLocation = w.location.href;
}

/**
 * page_view das navegações internas. Chamar depois que a rota terminar de carregar,
 * para o título já ser o da nova página. Requer desligar no GA4 o page_view
 * "com base em eventos do histórico do navegador" (Medição otimizada).
 */
export function trackPageView() {
  const w = analyticsWindow();
  if (!w || !initialized || w.location.href === lastPageLocation) return;
  w.gtag?.("event", EVENTS.PAGE_VIEW, {
    page_location: w.location.href,
    page_referrer: lastPageLocation,
    page_title: document.title,
  });
  lastPageLocation = w.location.href;
}

function send(event: Exclude<EventName, "page_view">, params: Params, metaParams: Params) {
  const w = analyticsWindow();
  if (!w) return;
  w.gtag?.("event", event, params);
  w.fbq?.("track", META_EVENTS[event], metaParams);
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
}
