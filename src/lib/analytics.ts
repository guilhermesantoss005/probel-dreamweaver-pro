/**
 * Camada de eventos preparada para Google Analytics (gtag) e Meta Pixel (fbq).
 * A tag do Google é inicializada uma única vez após carregar a configuração pública.
 */
type Params = Record<string, unknown>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

let initialized = false;
let lastPagePath: string | undefined;

export function initializeGoogleAnalytics(measurementId: string, pagePath: string) {
  if (typeof window === "undefined" || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
  const w = window as AnalyticsWindow;
  if (!initialized) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function (..._args: unknown[]) {
      w.dataLayer?.push(arguments);
    };
    w.gtag("set", "developer_id.dZjgwMW", true);
    w.gtag("js", new Date());
    w.gtag("config", measurementId, { page_path: pagePath });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    initialized = true;
    lastPagePath = pagePath;
  } else if (lastPagePath !== pagePath) {
    w.gtag?.("event", "page_view", { page_path: pagePath, page_title: document.title });
    lastPagePath = pagePath;
  }
}

type EventName =
  | "ViewContent"
  | "Search"
  | "AddToCart"
  | "InitiateCheckout"
  | "Contact"
  | "Lead";

export function track(event: EventName, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...a: unknown[]) => void;
    fbq?: (...a: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  w.gtag?.("event", event, params);
  w.fbq?.("track", event, params);
}