// ---------------------------------------------------------------------------
// Dados da loja — edite tudo aqui.
// ---------------------------------------------------------------------------
export const site = {
  nome: "Probel Store",
  unidade: "Probel Colchões de Canasvieiras",
  slogan: "Loja autorizada Probel Colchões",
  telefone: "(48) 99981-8302",
  email: "contato@sualoja.com.br",
  endereco: "R. Me. Maria Villac, 914 — Canasvieiras",
  cidade: "Florianópolis — SC, 88058-000",
  horario: "Seg a Sex 9h às 18h · Sáb 9h às 13h",
  instagram: "https://www.instagram.com/probelcanas/",
  mapsUrl:
    "https://www.google.com/maps/place/Probel+Colch%C3%B5es+de+Canasvieiras/data=!4m2!3m1!1s0x0:0x611cddf54bef89d8?sa=X&ved=1t:2428&ictx=111",
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Me.%20Maria%20Villac%2C%20914%20-%20Canasvieiras%2C%20Florian%C3%B3polis%20-%20SC%2C%2088058-000&output=embed",
  aviso:
    "Imagens meramente ilustrativas. Consulte disponibilidade e condições diretamente com nossa equipe.",
} as const;

export const MSG_GERAL =
  "Olá, tudo bem? Vim do site e gostaria de mais informações.";

export const WHATSAPP_PHONE = "5548999818302";

// Link único de WhatsApp usado em todos os botões do site (com a mensagem do contexto).
export const whatsappUrl = (mensagem: string = MSG_GERAL) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    mensagem || MSG_GERAL,
  )}&type=phone_number&app_absent=0`;

export const WHATSAPP_LINK = whatsappUrl(MSG_GERAL);

export const msgProduto = (nome: string, tamanho?: string) =>
  tamanho
    ? `Olá, tudo bem? Vim do site e gostaria de mais informações sobre ${nome} — tamanho ${tamanho}.`
    : `Olá, tudo bem? Vim do site e gostaria de mais informações sobre ${nome}.`;
