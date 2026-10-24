import { describe, expect, test } from "bun:test";
import { permitsTracking, requiresConsent } from "./consent";
import { GOOGLE_ADS_WHATSAPP_CONVERSION } from "./analytics";

describe("regional advertising consent", () => {
  test("requires authorization in consent regions and unresolved regions", () => {
    expect(requiresConsent("DE")).toBe(true);
    expect(requiresConsent(null)).toBe(true);
    expect(requiresConsent("XX")).toBe(true);
    expect(requiresConsent("T1")).toBe(true);
    expect(permitsTracking("DE")).toBe(false);
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
});