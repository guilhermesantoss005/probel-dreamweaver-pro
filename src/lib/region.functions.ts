import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

// País do visitante pela geolocalização da hospedagem: Vercel (domínio dos anúncios)
// envia x-vercel-ip-country; a Cloudflare (Lovable) envia cf-ipcountry.
// POST para nenhum cache compartilhar a região de um visitante com outro.
export const getVisitorRegion = createServerFn({ method: "POST" }).handler(() => {
  const header = getRequestHeader("x-vercel-ip-country") || getRequestHeader("cf-ipcountry") || "";
  const region = header.trim().toUpperCase();
  return { region: /^[A-Z]{2}$/.test(region) && region !== "XX" ? region : null };
});
