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
export const GA_MEASUREMENT_ID = "G-31EFTQ7Q9H";

/** Snippet oficial do Google, inline no <head>, antes de qualquer evento. */
export const GA_INLINE_SNIPPET = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`;
