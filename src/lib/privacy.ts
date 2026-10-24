import { CONSENT_KEY, CONSENT_NOTICE } from "@/config/consent";

export type ConsentRecord = {
  visitor: string;
  history: { at: string; advertising: "granted" | "denied"; analytics: "granted" | "denied"; region: string | null; notice: typeof CONSENT_NOTICE }[];
};
export type PrivacyRuntime = {
  region: string | null;
  ready: boolean;
  allowed: () => boolean;
  apply: () => void;
};
declare global {
  interface Window { probelPrivacy?: PrivacyRuntime }
}
export function readConsent(): ConsentRecord | undefined {
  try {
    const record = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    if (typeof record?.visitor === "string" && Array.isArray(record.history)) return record;
  } catch { /* Unavailable storage means no saved authorization. */ }
}
export function saveConsent(choice: "granted" | "denied") {
  const previous = readConsent();
  const record: ConsentRecord = {
    visitor: previous?.visitor || crypto.randomUUID(),
    history: [...(previous?.history || []), {
      at: new Date().toISOString(), advertising: choice, analytics: choice,
      region: window.probelPrivacy?.region || null, notice: CONSENT_NOTICE,
    }],
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); }
  catch { return false; }
  window.probelPrivacy?.apply();
  return true;
}
export function openPrivacySettings() {
  window.dispatchEvent(new Event("probel:privacy-settings"));
}