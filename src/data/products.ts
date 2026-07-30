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