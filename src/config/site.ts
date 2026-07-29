// ---------------------------------------------------------------------------
// Dados da loja — edite tudo aqui.
// ---------------------------------------------------------------------------
export const site = {
  nome: "Probel Store",
  unidade: "Unidade Centro",
  slogan: "Loja autorizada Probel Colchões",
  // Somente números, com DDI e DDD. Ex.: 5511999999999
  whatsapp: "5511999999999",
  telefone: "(11) 9999-9999",
  email: "contato@sualoja.com.br",
  endereco: "Rua Exemplo, 123 — Centro",
  cidade: "São Paulo — SP",
  horario: "Seg a Sex 9h às 18h · Sáb 9h às 13h",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  aviso:
    "Imagens meramente ilustrativas. Consulte disponibilidade, preços e condições diretamente com nossa equipe.",
} as const;

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const MSG_GERAL =
  "Olá! Vim pelo site e gostaria de receber ajuda para escolher um colchão.";

export const msgProduto = (nome: string) =>
  `Olá! Tenho interesse no produto ${nome} e gostaria de receber mais informações.`;