// ---------------------------------------------------------------------------
// Tag do Google (GA4 + Google Ads) com Modo de Consentimento v2.
//
// Os IDs são configuração pública do navegador: aparecem no código-fonte de
// toda página medida, não são credenciais. Ficam aqui, no código, e NÃO em
// variável de ambiente: o deploy da Vercel (domínio dos anúncios) não tem nenhuma.
//
// O gtag.js é renderizado no <head> pelo servidor (src/routes/__root.tsx) e
// carrega sempre, em toda página. Quem decide o que o Google pode gravar é o
// Modo de Consentimento, nunca um "ga-disable-*" (esse desliga a tag inteira).
// ---------------------------------------------------------------------------
import { CONSENT_KEY, CONSENT_REGIONS } from "./consent";

export const GA_MEASUREMENT_ID = "G-31EFTQ7Q9H";
export const GOOGLE_ADS_ID = "AW-16680866532";
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-16680866532/x4bvCKHSrKgdEOSlh5I-";

/**
 * Snippet inline no <head>, logo depois do gtag.js: consentimento padrão → escolha salva → config.
 *
 * O padrão é por região e quem identifica a região é o próprio Google (pelo IP):
 * UE/EEE, Reino Unido e Suíça começam negados até o visitante aceitar; as demais regiões,
 * Brasil incluso, começam concedidas, com opção de recusar. Remarketing
 * (ad_personalization) fica sempre negado, porque o aviso de privacidade não o inclui.
 */
export const GA_INLINE_SNIPPET = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
(() => {
 const key = ${JSON.stringify(CONSENT_KEY)};
 const regions = ${JSON.stringify(CONSENT_REGIONS)};
 const denied = {ad_storage:'denied', analytics_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'};
 const granted = {ad_storage:'granted', analytics_storage:'granted', ad_user_data:'granted', ad_personalization:'denied'};
 gtag('consent', 'default', {...denied, region: regions});
 gtag('consent', 'default', granted);
 const state = window.probelPrivacy = {region:null, ready:false, allowed, apply};
 function optedOut() { return navigator.globalPrivacyControl === true || navigator.doNotTrack === '1'; }
 function choice() {
   try { return JSON.parse(localStorage.getItem(key) || 'null')?.history?.at(-1)?.advertising; } catch { return undefined; }
 }
 function allowed() {
   const saved = choice();
   if (optedOut() || saved === 'denied') return false;
   return saved === 'granted' || !regions.includes(state.region);
 }
 function apply() {
   const saved = optedOut() ? 'denied' : choice();
   if (saved === 'granted' || saved === 'denied') gtag('consent', 'update', saved === 'granted' ? granted : denied);
   window.dispatchEvent(new Event('probel:privacy-change'));
 }
 apply();
 window.addEventListener('storage', e => { if (e.key === key || e.key === null) apply(); });
})();
gtag('js', new Date());
gtag('set', 'ads_data_redaction', true);
gtag('config', '${GA_MEASUREMENT_ID}', {send_page_view: false});
gtag('config', '${GOOGLE_ADS_ID}');`;
