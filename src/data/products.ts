import colchoesImg from "@/assets/cat-colchoes.jpg";
import conjuntosImg from "@/assets/cat-conjuntos.jpg";
import bauImg from "@/assets/cat-boxbau.jpg";
import cabeceirasImg from "@/assets/cat-cabeceiras.jpg";
import travesseirosImg from "@/assets/cat-travesseiros.jpg";
import ambienteImg from "@/assets/banner-categoria.jpg";
import creative1 from "@/assets/creative-163515.webp.asset.json";
import creative2 from "@/assets/creative-163516.webp.asset.json";
import creative3 from "@/assets/creative-163514.webp.asset.json";
import creative4 from "@/assets/creative-163519.webp.asset.json";
import creative5 from "@/assets/creative-163522.webp.asset.json";
import guardaCostasStar from "@/assets/guarda-costas-star.png.asset.json";
import athos1 from "@/assets/athos-177777.webp.asset.json";
import athos2 from "@/assets/athos-177779.webp.asset.json";
import athos3 from "@/assets/athos-177778.webp.asset.json";
import athos4 from "@/assets/athos-177780.webp.asset.json";
import proHotelVip from "@/assets/pro-hotel-vip-45.png.asset.json";
import robuste1 from "@/assets/robuste-169078.webp.asset.json";
import robuste2 from "@/assets/robuste-169077.webp.asset.json";
import robuste3 from "@/assets/robuste-169076.webp.asset.json";
import robuste4 from "@/assets/robuste-169079.webp.asset.json";

export type CategoriaSlug =
  | "colchoes"
  | "conjuntos-box"
  | "box-bau"
  | "cabeceiras"
  | "travesseiros";

export type Tamanho =
  | "Solteiro"
  | "Solteirão"
  | "Viúva"
  | "Casal"
  | "Queen"
  | "King"
  | "Único";

export const TAMANHOS: Tamanho[] = [
  "Solteiro",
  "Solteirão",
  "Viúva",
  "Casal",
  "Queen",
  "King",
];

export type Categoria = {
  slug: CategoriaSlug;
  nome: string;
  descricao: string;
  imagem: string;
  rota: string;
};

export const categorias: Categoria[] = [
  {
    slug: "colchoes",
    nome: "Colchões",
    descricao: "Opções de firmeza e conforto para cada perfil de sono.",
    imagem: colchoesImg,
    rota: "/colchoes",
  },
  {
    slug: "conjuntos-box",
    nome: "Conjuntos Box",
    descricao: "Colchão e base em um conjunto pronto para o seu quarto.",
    imagem: conjuntosImg,
    rota: "/conjuntos-box",
  },
  {
    slug: "box-bau",
    nome: "Box Baú",
    descricao: "Espaço extra de armazenamento sem abrir mão do conforto.",
    imagem: bauImg,
    rota: "/box-bau",
  },
  {
    slug: "cabeceiras",
    nome: "Cabeceiras",
    descricao: "Acabamento estofado para compor o ambiente.",
    imagem: cabeceirasImg,
    rota: "/cabeceiras",
  },
  {
    slug: "travesseiros",
    nome: "Travesseiros",
    descricao: "Apoio adequado para a cabeça e o pescoço.",
    imagem: travesseirosImg,
    rota: "/travesseiros",
  },
];

export type Produto = {
  slug: string;
  nome: string;
  categoria: CategoriaSlug;
  descricaoCurta: string;
  descricao: string;
  caracteristicas: string[];
  tamanhos: Tamanho[];
  imagens: string[];
  sobre?: string[];
  fichaTecnica?: { label: string; valor: string }[];
  oferta?: boolean;
  destaque?: boolean;
  visivel?: boolean;
};

// Produtos de exemplo — edite, oculte (visivel: false) ou adicione livremente.
export const produtos: Produto[] = [
  {
    slug: "conjunto-box-probel-pro-hotel-vip-45",
    nome: "Pró Hotel VIP 45 | Linha Prata",
    categoria: "conjuntos-box",
    descricaoCurta:
      "Molas ensacadas, Pillow Euro Duplo e conforto intermediário. Dupla face.",
    descricao:
      "Conjunto da Linha Prata com molas ensacadas individualmente, Pillow Euro Duplo, conforto 7/10 (intermediário) e suporte de até 150 kg por pessoa. Sistema dupla face.",
    caracteristicas: [
      "Molas ensacadas individualmente (Pocket Springs)",
      "Pillow Euro Duplo — 31 cm de altura",
      "Conforto 7/10 — intermediário (equilíbrio entre macio e firme)",
      "Suporte de até 150 kg por pessoa",
      "Dupla face (pode ser utilizado dos dois lados)",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [proHotelVip.url],
    destaque: true,
    fichaTecnica: [
      { label: "Modelo", valor: "Pró Hotel VIP 45 | Linha Prata" },
      { label: "Conforto", valor: "7/10" },
      { label: "Classificação", valor: "Intermediário (equilíbrio entre macio e firme)" },
      { label: "Matelassê", valor: "Malha 280 g Branca (GS)" },
      { label: "Espuma do Matelassê", valor: "Espuma D24 Soft Gel" },
      { label: "Espumas", valor: "Espuma D45 Pró" },
      { label: "Molejo", valor: "Molas ensacadas individualmente (Pocket Springs)" },
      { label: "Faixa Lateral", valor: "Suede Cinza (FC)" },
      { label: "Pillow", valor: "Pillow Euro Duplo" },
      { label: "Altura", valor: "31 cm" },
      { label: "Suporte de peso", valor: "Até 150 kg por pessoa" },
      { label: "Sistema de uso", valor: "Dupla Face (pode ser utilizado dos dois lados)" },
      { label: "Certificação", valor: "Produto certificado conforme Portaria Inmetro nº 75/2021" },
    ],
  },
  {
    slug: "conjunto-box-probel-guarda-costas-robuste",
    nome: "Guarda Costas Robuste | Linha Prata",
    categoria: "conjuntos-box",
    descricaoCurta:
      "Conforto firme com toque macio, Pillow Super e suporte de 200 kg por pessoa.",
    descricao:
      "Conjunto da Linha Prata com molas ensacadas individualmente, perímetro de segurança em espuma D33 Pró, Pillow Super, 34 cm de altura e suporte de até 200 kg por pessoa.",
    caracteristicas: [
      "Molas ensacadas individualmente",
      "Perímetro de segurança em espuma D33 Pró",
      "Pillow Super — 34 cm de altura",
      "Conforto 8/10 — firme com toque macio",
      "Suporte de até 200 kg por pessoa",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [robuste1.url, robuste2.url, robuste3.url, robuste4.url],
    destaque: true,
    fichaTecnica: [
      { label: "Modelo", valor: "Guarda Costas Robuste | Linha Prata" },
      { label: "Conforto", valor: "8/10" },
      { label: "Classificação", valor: "Conforto firme com toque macio (mais próximo do Extra Firme)" },
      { label: "Matelassê", valor: "Malha 320 g Branca (EV)" },
      { label: "Espuma do Matelassê", valor: "Espuma D20" },
      { label: "Espumas", valor: "Espuma D45 e aglomerado de espuma de alta densidade" },
      { label: "Molejo", valor: "Molas ensacadas individualmente" },
      { label: "Perímetro de Segurança", valor: "Espuma D33 Pró" },
      { label: "Faixa Lateral", valor: "Suede Marfim (60)" },
      { label: "Pillow", valor: "Pillow Super" },
      { label: "Altura", valor: "34 cm" },
      { label: "Suporte de peso", valor: "Até 200 kg por pessoa" },
      { label: "Sistema de uso", valor: "Apenas girar (não é necessário virar o colchão)" },
      { label: "Certificação", valor: "Produto certificado conforme Portaria Inmetro nº 75/2021" },
    ],
  },
  {
    slug: "conjunto-box-queen-probel-guarda-costas-star",
    nome: "Guarda Costas Star",
    categoria: "conjuntos-box",
    descricaoCurta:
      "Molas ensacadas, Pillow Super e conforto intermediário para macio.",
    descricao:
      "Conjunto box com molas ensacadas individualmente, Pillow Super e nível de conforto 7/10 — intermediário para macio, mais confortável do que firme.",
    caracteristicas: [
      "Molas ensacadas individualmente (Pocket Springs)",
      "Pillow Super com 30 cm de altura",
      "Conforto 7/10 — intermediário para macio",
      "Suporte de até 120 kg por pessoa",
    ],
    tamanhos: ["Casal", "Queen", "King"],
    imagens: [guardaCostasStar.url],
    destaque: true,
    fichaTecnica: [
      { label: "Modelo", valor: "Guarda Costas Star" },
      { label: "Conforto", valor: "7/10" },
      { label: "Classificação", valor: "Intermediário para macio (mais confortável do que firme)" },
      { label: "Tecido", valor: "Malha 280 g Branca" },
      { label: "Espuma do Tampo", valor: "D20" },
      { label: "Espuma Interna", valor: "Espuma D33 Pró" },
      { label: "Sistema de Molas", valor: "Molas ensacadas individualmente (Pocket Springs)" },
      { label: "Faixa Lateral", valor: "Suede Bege (GJ)" },
      { label: "Pillow", valor: "Pillow Super" },
      { label: "Altura", valor: "30 cm" },
      { label: "Suporte de peso", valor: "Até 120 kg por pessoa" },
      { label: "Uso", valor: "Apenas girar (não necessita virar o colchão)" },
    ],
  },
  {
    slug: "conjunto-box-queen-probel-athos-bambu-new",
    nome: "Conjunto Box Queen Mola Ensacada Probel Athos Bambu New",
    categoria: "conjuntos-box",
    descricaoCurta:
      "Queen com molas ensacadas, Pillow Super e suporte de 140 kg por pessoa.",
    descricao:
      "Conjunto box Queen Probel Athos Bambu New com molas ensacadas, Pillow Super, tecido malha branca 350 g/m² e altura total de 70 cm. Código no site: PAA2161.",
    caracteristicas: [
      "Molas ensacadas individualmente",
      "Pillow Super",
      "Suporte de até 140 kg por pessoa",
      "Manutenção No Turn (apenas girar)",
    ],
    tamanhos: ["Queen"],
    imagens: [athos1.url, athos2.url, athos3.url, athos4.url],
    destaque: true,
    sobre: [
      "O Conjunto Box Queen Probel Athos Bambu New reúne o sistema de molas ensacadas individualmente com Pillow Super, entregando conforto e estabilidade para o casal — quando um se movimenta, o outro não sente.",
      "O estofamento combina Espuma D33, Espuma D20 e espuma de alta densidade ≥ D65, com matelassê em espuma D20 cilíndrica e revestimento em malha branca com detalhes e relevo de 350 g/m².",
      "Com suporte de até 140 kg por pessoa, é indicado também para casais com biotipos diferentes. Manutenção No Turn: basta girar o colchão, sem necessidade de virar.",
      "Certificado conforme Portaria Inmetro Nº 75/2021. Código no site: PAA2161.",
    ],
    fichaTecnica: [
      { label: "Modelo", valor: "Athos Bambu New" },
      { label: "Código no site", valor: "PAA2161" },
      { label: "Sistema de Molejo", valor: "Mola Ensacada" },
      { label: "Suporte de peso", valor: "140 kg por pessoa" },
      { label: "Tamanho", valor: "Queen" },
      { label: "Largura", valor: "158 cm" },
      { label: "Comprimento", valor: "198 cm" },
      { label: "Indicação Biotipos Casais", valor: "Indicado também para casais com biotipos diferentes" },
      { label: "Espuma do Estofamento 1", valor: "Espuma D33" },
      { label: "Espuma do Estofamento 2", valor: "Espuma D20" },
      { label: "Espuma do Estofamento 3", valor: "Espuma de Alta Densidade ≥ D65" },
      { label: "Pillow", valor: "Super" },
      { label: "Tecido Tampo", valor: "Malha Branca com detalhes e relevo" },
      { label: "Gramatura Tecido", valor: "350 g/m²" },
      { label: "Espuma Matelassê", valor: "D20 Cilíndrica" },
      { label: "Base de Suporte do Colchão", valor: "Espuma" },
      { label: "Manutenção", valor: "No Turn" },
      { label: "Garantia", valor: "12 Meses Estrutura, 3 Meses Tecido" },
      { label: "Certificação Inmetro", valor: "Certificado conforme Portaria Inmetro Nº 75/2021" },
      { label: "Altura do Colchão", valor: "32 cm" },
      { label: "Altura da Base Box", valor: "26 cm" },
      { label: "Altura dos pezinhos", valor: "12 cm" },
      { label: "Altura do Conjunto", valor: "70 cm" },
    ],
  },
  {
    slug: "conjunto-box-queen-probel-creative-soft-gel",
    nome: "Conjunto Box Queen Mola Probel Creative Soft Gel",
    categoria: "conjuntos-box",
    descricaoCurta:
      "Conjunto Queen com molas ensacadas, Pillow Super e firmeza macia.",
    descricao:
      "Conjunto box Queen Size com colchão de molas ensacadas Probel Creative Soft Gel, Pillow Super e nível de firmeza macio.",
    caracteristicas: [
      "Molas ensacadas individualmente (sistema antirruído)",
      "Pillow Super com espuma Soft Gel",
      "Nível de firmeza macio",
      "Suporte de até 120 kg por pessoa",
    ],
    tamanhos: ["Queen"],
    imagens: [creative1.url, creative2.url, creative3.url, creative4.url, creative5.url],
    destaque: true,
    sobre: [
      "O colchão Creative Pillow Super se destaca pela combinação do conforto máximo e da estabilidade individual proporcionada pelo sistema antirruído do molejo mais querido do mundo, aquele das molas ensacadas individualmente e que quando um se movimenta o outro não sente.",
      "A primeira camada conta com conforto extra em Pillow Super e matelassê preenchido com fibra siliconada e espuma D24 Soft. Seu revestimento em malha branca com detalhes na cor preta (CBO) possui gramatura 280 gramas e finalização com bordado localizado em formato de losango. O tecido em malha apresenta excelência em sua elasticidade e flexibilidade, o que o torna um material confortável e harmonioso no contato com a pele.",
      "A segunda camada traz a Espuma D29 Hiper Soft.",
      "A terceira camada traz aquele das molas ensacadas individualmente e que quando um se movimenta o outro não sente. Ao todo são 196 molas por metro quadrado. Cada mola é confeccionada em aço carbono temperado, o que torna o molejo ainda mais resistente. A grande vantagem é que ele consegue se adaptar ao corpo de cada pessoa que deita nele, permitindo melhor alinhamento da coluna com o quadril, se encaixando no colchão enquanto ele preenche as curvaturas do corpo. Isso resulta um sono tranquilo e relaxante.",
      "O conjunto de todas as camadas entrega a capacidade de sustentação de até 120 kg por pessoa, proporcionando durabilidade, conforto e aconchego, ideais para quem tem preferência por colchão com Nível de Firmeza Macio.",
      "Certificado conforme Portaria Inmetro Nº 75/2021.",
    ],
    fichaTecnica: [
      { label: "Modelo", valor: "Creative Soft Gel" },
      { label: "Sistema de Molejo", valor: "Molas Ensacadas" },
      { label: "Nível de Firmeza", valor: "Macio" },
      { label: "Suporte de peso", valor: "120 kg por pessoa" },
      { label: "Tamanho", valor: "Queen Size" },
      { label: "Largura", valor: "158 cm" },
      { label: "Comprimento", valor: "198 cm" },
      { label: "Indicação Biotipos Casais", valor: "Indicado também para casais com biotipos diferentes" },
      { label: "Espuma do Estofamento 1", valor: "D29 Hiper Soft" },
      { label: "Espuma do Estofamento 2", valor: "D28" },
      { label: "Borda", valor: "Side Security D28" },
      { label: "Pillow", valor: "Super" },
      { label: "Tecido Tampo", valor: "Malha branca com detalhes pretos" },
      { label: "Gramatura Tecido", valor: "280 g/m²" },
      { label: "Espuma Matelassê", valor: "Espuma Soft Gel" },
      { label: "Base de Suporte do Colchão", valor: "Espuma" },
      { label: "Manutenção", valor: "Apenas girar o colchão, mudando o lado dos pés para a cabeceira e vice-versa, sem a necessidade de virar." },
      { label: "Garantia", valor: "12 Meses Estrutura, 3 Meses Base de Madeira e Tecidos" },
      { label: "Certificação Inmetro", valor: "Fábrica GO - 004646/2024, Fábrica MS - 013683/2024, Fábrica MT - 006380/2024, Fábrica PB - 005483/2024" },
      { label: "Altura do Colchão", valor: "30 cm" },
      { label: "Altura da Base Box", valor: "26 cm" },
      { label: "Altura dos pezinhos", valor: "12 cm" },
      { label: "Altura do Conjunto", valor: "68 cm" },
    ],
  },
  {
    slug: "colchao-probel-premium",
    nome: "Colchão Probel Premium",
    categoria: "colchoes",
    descricaoCurta: "Modelo de linha superior para quem busca mais conforto.",
    descricao:
      "Modelo indicado para quem procura um colchão confortável no dia a dia. Consulte nossa equipe para verificar medidas, disponibilidade e condições.",
    caracteristicas: [
      "Disponível em diferentes medidas",
      "Tecido de acabamento macio",
      "Consulte altura e firmeza com a loja",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [colchoesImg, ambienteImg],
    destaque: true,
    oferta: true,
  },
  {
    slug: "colchao-probel-comfort",
    nome: "Colchão Probel Comfort",
    categoria: "colchoes",
    descricaoCurta: "Equilíbrio entre conforto e custo-benefício.",
    descricao:
      "Opção equilibrada para o uso diário. Fale com a loja para confirmar medidas disponíveis e condições de pagamento.",
    caracteristicas: [
      "Várias medidas disponíveis",
      "Acabamento em tecido resistente",
      "Consulte firmeza na loja",
    ],
    tamanhos: ["Solteiro", "Solteirão", "Casal", "Queen"],
    imagens: [colchoesImg, ambienteImg],
    destaque: true,
  },
  {
    slug: "conjunto-box-probel-elegance",
    nome: "Conjunto Box Probel Elegance",
    categoria: "conjuntos-box",
    descricaoCurta: "Colchão e base em um conjunto completo.",
    descricao:
      "Conjunto composto por colchão e base box. Consulte medidas, cores de revestimento e prazos com nossa equipe.",
    caracteristicas: ["Colchão + base box", "Pés inclusos", "Medidas sob consulta"],
    tamanhos: ["Casal", "Queen", "King"],
    imagens: [conjuntosImg, ambienteImg],
    destaque: true,
    oferta: true,
  },
  {
    slug: "conjunto-box-probel-supreme",
    nome: "Conjunto Box Probel Supreme",
    categoria: "conjuntos-box",
    descricaoCurta: "Conjunto de linha superior para o quarto do casal.",
    descricao:
      "Conjunto de linha superior. Consulte disponibilidade de medidas e condições comerciais diretamente com a loja.",
    caracteristicas: ["Colchão + base box", "Acabamento diferenciado", "Medidas sob consulta"],
    tamanhos: ["Queen", "King"],
    imagens: [conjuntosImg, ambienteImg],
    destaque: true,
  },
  {
    slug: "box-bau-probel",
    nome: "Box Baú Probel",
    categoria: "box-bau",
    descricaoCurta: "Base com espaço interno para armazenamento.",
    descricao:
      "Base box baú com abertura frontal ou lateral conforme a medida. Consulte a loja para verificar opções.",
    caracteristicas: ["Espaço interno para guardar itens", "Revestimento sob consulta", "Pés inclusos"],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [bauImg, ambienteImg],
    destaque: true,
    oferta: true,
  },
  {
    slug: "cabeceira-estofada-probel",
    nome: "Cabeceira Estofada Probel",
    categoria: "cabeceiras",
    descricaoCurta: "Acabamento estofado para compor a cama.",
    descricao:
      "Cabeceira estofada para complementar o conjunto. Consulte cores e medidas disponíveis com a equipe.",
    caracteristicas: ["Estofada", "Cores sob consulta", "Fixação conforme o modelo"],
    tamanhos: ["Casal", "Queen", "King"],
    imagens: [cabeceirasImg],
  },
  {
    slug: "travesseiro-probel-viscoelastico",
    nome: "Travesseiro Probel Viscoelástico",
    categoria: "travesseiros",
    descricaoCurta: "Apoio macio para a cabeça e o pescoço.",
    descricao:
      "Travesseiro em espuma viscoelástica. Consulte altura e capa disponível diretamente com a loja.",
    caracteristicas: ["Espuma viscoelástica", "Capa removível conforme modelo", "Medida única"],
    tamanhos: ["Único"],
    imagens: [travesseirosImg],
    destaque: true,
    oferta: true,
  },
  {
    slug: "travesseiro-probel-conforto",
    nome: "Travesseiro Probel Conforto",
    categoria: "travesseiros",
    descricaoCurta: "Opção macia para o uso diário.",
    descricao:
      "Travesseiro de uso diário. Consulte a loja para verificar disponibilidade.",
    caracteristicas: ["Enchimento macio", "Medida única", "Capa em tecido"],
    tamanhos: ["Único"],
    imagens: [travesseirosImg],
  },
];

export const produtosVisiveis = () => produtos.filter((p) => p.visivel !== false);

export const porCategoria = (slug: CategoriaSlug) =>
  produtosVisiveis().filter((p) => p.categoria === slug);

export const destaques = () => produtosVisiveis().filter((p) => p.destaque);

export const ofertas = () => produtosVisiveis().filter((p) => p.oferta);

export const buscarProdutos = (termo: string) => {
  const t = termo.trim().toLowerCase();
  if (!t) return [];
  return produtosVisiveis().filter((p) =>
    `${p.nome} ${p.descricaoCurta} ${p.categoria}`.toLowerCase().includes(t),
  );
};

export const getProduto = (slug: string) =>
  produtosVisiveis().find((p) => p.slug === slug);

export const nomeCategoria = (slug: CategoriaSlug) =>
  categorias.find((c) => c.slug === slug)?.nome ?? "";