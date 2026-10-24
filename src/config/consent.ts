export const CONSENT_KEY = "probel_privacy_choices_v1";
export const CONSENT_NOTICE = {
  version: "2026-10-24",
  text: "Usamos cookies e dados de navegação (páginas, buscas, produtos e cliques no WhatsApp), identificadores do navegador e dados técnicos com o Google Analytics e Google Ads para medir visitas e contatos e otimizar anúncios. Você pode aceitar ou recusar e mudar sua decisão em Configurações de privacidade. Não enviamos nome, telefone ou e-mail para correspondência publicitária.",
  choices: ["Aceitar", "Recusar"],
  recipients: ["Google Analytics", "Google Ads"],
  purposes: ["measurement", "advertising_optimization"],
} as const;
export const CONSENT_REGIONS = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH"];

export function requiresConsent(region: string | null) {
  return !region || !/^[A-Z]{2}$/.test(region) || region === "XX" || CONSENT_REGIONS.includes(region);
}

export function permitsTracking(region: string | null, choice?: string, optOut = false) {
  if (optOut || choice === "denied") return false;
  return choice === "granted" || !requiresConsent(region);
}