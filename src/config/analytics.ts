// ---------------------------------------------------------------------------
// Tag do Google (GA4 + Google Ads).
//
// O ID de medição do GA4 é configuração pública do navegador: aparece no
// código-fonte de toda página medida, não é credencial. Fica aqui, no código, e
// NÃO em variável de ambiente: o deploy da Vercel (domínio dos anúncios) não
// tinha a variável, e o site publicado ficou sem tag nenhuma.
//
// A tag é renderizada no <head> pelo servidor (src/routes/__root.tsx). O
// verificador do Google Ads / GA4 lê o HTML entregue e não espera o React
// hidratar, então uma tag injetada só no cliente aparece como "não encontrada".
// ---------------------------------------------------------------------------
import { CONSENT_KEY, CONSENT_REGIONS } from "./consent";

export const GA_MEASUREMENT_ID = "G-31EFTQ7Q9H";
export const GOOGLE_ADS_ID = "AW-16680866532";
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-16680866532/x4bvCKHSrKgdEOSlh5I-";

/** Snippet oficial do Google, inline no <head>, antes de qualquer evento. */
export const GA_INLINE_SNIPPET = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {ad_storage:'denied', analytics_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'});
gtag('js', new Date());
(() => {
 const key = ${JSON.stringify(CONSENT_KEY)};
 const regions = ${JSON.stringify(CONSENT_REGIONS)};
 let configured = false;
 const state = window.probelPrivacy = {region:null, ready:false, allowed, apply};
 function allowed() {
   if (!state.ready || navigator.globalPrivacyControl || navigator.doNotTrack === '1') return false;
   let choice;
   try { const record = JSON.parse(localStorage.getItem(key) || 'null'); choice = record?.history?.at(-1)?.advertising; } catch {}
   if (choice === 'denied') return false;
   const regulated = !state.region || !/^[A-Z]{2}$/.test(state.region) || state.region === 'XX' || regions.includes(state.region);
   return choice === 'granted' || !regulated;
 }
 function apply() {
   const permitted = allowed();
   window['ga-disable-${GA_MEASUREMENT_ID}'] = !permitted;
   window['ga-disable-${GOOGLE_ADS_ID}'] = !permitted;
   gtag('consent','update',{ad_storage:permitted?'granted':'denied', analytics_storage:permitted?'granted':'denied', ad_user_data:'denied', ad_personalization:'denied'});
   if (permitted && !configured) {
     configured = true;
     gtag('set', 'ads_data_redaction', true);
     gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});
     gtag('config','${GOOGLE_ADS_ID}',{send_page_view:false});
     const tag = document.getElementById('probel-google-tag');
     if (tag) tag.src = tag.dataset.src;
   }
   window.dispatchEvent(new Event('probel:privacy-change'));
 }
 window.addEventListener('storage', e => { if (e.key === key || e.key === null) apply(); });
 fetch('/cdn-cgi/trace',{signal:AbortSignal.timeout(2000)}).then(r => {if(!r.ok) throw new Error('region'); return r.text();}).then(text => {
   const region = text.match(/^loc=([A-Z0-9]{2})$/m)?.[1];
   state.region = region && /^[A-Z]{2}$/.test(region) && region !== 'XX' ? region : null;
 }).catch(() => {state.region = null;}).finally(() => {state.ready=true; apply();});
})();`;
