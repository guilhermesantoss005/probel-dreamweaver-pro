/**
 * Camada de eventos preparada para Google Analytics (gtag) e Meta Pixel (fbq).
 * Basta inserir os scripts no index/head para que os eventos passem a disparar.
 */
type Params = Record<string, unknown>;

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