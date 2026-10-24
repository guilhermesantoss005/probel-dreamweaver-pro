import { describe, expect, test } from "bun:test";
import { permitsTracking, requiresConsent } from "./consent";
import { GA_INLINE_SNIPPET, GOOGLE_ADS_WHATSAPP_CONVERSION } from "./analytics";

describe("regional advertising consent", () => {
  test("requires authorization only in the listed consent regions", () => {
    expect(requiresConsent("DE")).toBe(true);
    expect(requiresConsent("GB")).toBe(true);
    expect(permitsTracking("DE")).toBe(false);
  });
  test("unresolved regions are not treated as regulated", () => {
    expect(requiresConsent(null)).toBe(false);
    expect(requiresConsent("XX")).toBe(false);
    expect(permitsTracking(null)).toBe(true);
  });
  test("ordinary tracking elsewhere remains enabled", () => {
    expect(permitsTracking("BR")).toBe(true);
  });
  test("acceptance allows regulated visitors", () => {
    expect(permitsTracking("DE", "granted")).toBe(true);
  });
  test("withdrawal and opt-outs override regional permission", () => {
    expect(permitsTracking("BR", "denied")).toBe(false);
    expect(permitsTracking("BR", "granted", true)).toBe(false);
  });
  test("WhatsApp uses the provided Ads conversion destination", () => {
    expect(GOOGLE_ADS_WHATSAPP_CONVERSION).toBe("AW-16680866532/x4bvCKHSrKgdEOSlh5I-");
  });
  test("the Google tag is never switched off and consent defaults come before config", () => {
    expect(GA_INLINE_SNIPPET).not.toContain("ga-disable");
    const consent = GA_INLINE_SNIPPET.indexOf("gtag('consent', 'default'");
    expect(consent).toBeGreaterThan(-1);
    expect(consent).toBeLessThan(GA_INLINE_SNIPPET.indexOf("gtag('config', 'G-31EFTQ7Q9H'"));
    expect(consent).toBeLessThan(GA_INLINE_SNIPPET.indexOf("gtag('config', 'AW-16680866532')"));
  });
});
