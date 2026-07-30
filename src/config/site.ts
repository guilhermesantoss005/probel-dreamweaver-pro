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

// Link único de WhatsApp usado em todos os botões do site.
export const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5548999818302&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0";

export const whatsappUrl = (_mensagem?: string) => WHATSAPP_LINK;

export const MSG_GERAL =
  "Olá, tudo bem? Vim do site e gostaria de mais informações.";

export const msgProduto = (nome: string) =>
  `Olá, tudo bem? Vim do site e gostaria de mais informações sobre ${nome}.`;
