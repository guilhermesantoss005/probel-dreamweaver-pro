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