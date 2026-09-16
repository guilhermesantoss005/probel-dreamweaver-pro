import colchoesImg from "@/assets/cat-colchoes.jpg";
import conjuntosImg from "@/assets/cat-conjuntos.jpg";
import bauImg from "@/assets/cat-boxbau.jpg";
import cabeceirasImg from "@/assets/cat-cabeceiras.jpg";
import travesseirosImg from "@/assets/cat-travesseiros.jpg";
import ambienteImg from "@/assets/banner-categoria.jpg";
import guardaCostasStar from "@/assets/guarda-costas-star-nova.png";
import athos1 from "@/assets/athos-177777.webp";
import athos2 from "@/assets/athos-177779.webp";
import athos3 from "@/assets/athos-177778.webp";
import athos4 from "@/assets/athos-177780.webp";
import proHotelVip from "@/assets/pro-hotel-vip-45-nova.png";
import micheliniUltraGel from "@/assets/michelini-ultra-gel-nova.png";
import lagunaGel from "@/assets/laguna-gel.png";
import lagunaGel2 from "@/assets/laguna-gel-2.png";
import lagunaGel3 from "@/assets/laguna-gel-3.png";
import maximusPlus1 from "@/assets/maximus-plus-1.png";
import maximusPlus2 from "@/assets/maximus-plus-2.png";
import robuste1 from "@/assets/robuste-169078.webp";
import robuste2 from "@/assets/robuste-169077.webp";
import robuste3 from "@/assets/robuste-169076.webp";
import robuste4 from "@/assets/robuste-169079.webp";
import boxBau from "@/assets/box-bau.png";
import portinari from "@/assets/portinari-articulavel-nova.png";
import trpoesy from "@/assets/travesseiro-poesy.jpg";
import trfuture from "@/assets/travesseiro-future.jpg";
import trboost from "@/assets/travesseiro-boost.jpg";
import trmax from "@/assets/travesseiro-max.jpg";
import tronly_latex from "@/assets/travesseiro-only-latex.jpg";
import trtesouros from "@/assets/travesseiro-tesouros.jpg";
import trbemdizer from "@/assets/travesseiro-bemdizer.jpg";
import trsensitive from "@/assets/travesseiro-sensitive.jpg";
import trcalma from "@/assets/travesseiro-calma.jpg";
import trdivino from "@/assets/travesseiro-divino.jpg";
import tratlantis from "@/assets/travesseiro-atlantis.jpg";
import trguarda_costas from "@/assets/travesseiro-guarda-costas.jpg";
import trisis from "@/assets/travesseiro-isis.jpg";
import trrelax from "@/assets/travesseiro-relax.jpg";
import tradapt_alveolado from "@/assets/travesseiro-adapt-alveolado.jpg";
import tradapt_d18 from "@/assets/travesseiro-adapt-d18.jpg";

import cab_toledo from "@/assets/cabeceira-toledo.jpg";
import cab_porto from "@/assets/cabeceira-porto-listrada.png";
import cab_isis from "@/assets/cabeceira-isis.jpg";
import cab_victorine from "@/assets/cabeceira-victorine.jpg";
import cab_luanda from "@/assets/cabeceira-luanda.jpg";
import cab_angra from "@/assets/cabeceira-angra.jpg";
import cab_rosario from "@/assets/cabeceira-rosario.jpg";
import cab_newyork from "@/assets/cabeceira-newyork.jpg";
import cab_oxford from "@/assets/cabeceira-oxford.jpg";
import cab_medellin from "@/assets/cabeceira-medellin.jpg";
import cab_monalisa from "@/assets/cabeceira-monalisa.jpg";
import cab_boxprime from "@/assets/cabeceira-boxprime.jpg";

export type CategoriaSlug =
  | "colchoes"
  | "conjuntos-box"
  | "box-bau"
  | "cabeceiras"
  | "travesseiros";

export type Tamanho =
  | "Solteiro"
  | "Casal"
  | "Queen"
  | "King"
  | "Único";

export const TAMANHOS: Tamanho[] = [
  "Solteiro",
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
    imagem: boxBau,
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
  categoriasAdicionais?: CategoriaSlug[];
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
    slug: "conjunto-box-probel-michelini-ultra-gel",
    nome: "Michelini Ultra Gel | Linha Ouro",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
    descricaoCurta:
      "Conforto firme com HR Gel, Pillow Europeu e suporte de 200 kg por pessoa.",
    descricao:
      "Conjunto da Linha Ouro com molas ensacadas individualmente, espuma High Resilience Gel, Pillow Europeu, 36 cm de altura e suporte de até 200 kg por pessoa.",
    caracteristicas: [
      "Molas ensacadas individualmente com perímetro de segurança em espuma D33 Pró",
      "Espuma High Resilience Gel (HR Gel) e aglomerado de alta densidade",
      "Pillow Europeu — 36 cm de altura",
      "Conforto 8/10 — firme, próximo ao Extra Firme",
      "Suporte de até 200 kg por pessoa",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [micheliniUltraGel],
    destaque: true,
    sobre: [
      "Perfis que priorizam firmeza e estabilidade encontram no Michelini Ultra Gel uma estrutura preparada para oferecer suporte consistente mesmo sob maiores exigências.",
      "A integração entre camadas internas atua de forma contínua para manter o alinhamento do corpo ao longo da noite.",
      "O resultado é um colchão que transmite solidez desde o primeiro contato, com sensação constante de controle e confiança no descanso diário, favorecendo noites estáveis e alinhadas a um padrão elevado de desempenho.",
    ],
    fichaTecnica: [
      { label: "Modelo", valor: "Michelini Ultra Gel | Linha Ouro" },
      { label: "Conforto", valor: "8/10" },
      { label: "Classificação", valor: "Conforto firme, próximo ao Extra Firme" },
      { label: "Matelassê", valor: "Malha 280 g Bege com detalhes Marrom (02)" },
      { label: "Espuma do Matelassê", valor: "Espuma D20" },
      {
        label: "Espumas",
        valor: "High Resilience Gel (HR Gel), aglomerado de espuma de alta densidade e Espuma D45 Pró",
      },
      { label: "Molejo", valor: "Molas ensacadas individualmente" },
      { label: "Perímetro de Segurança", valor: "Espuma D33 Pró" },
      { label: "Faixa Lateral", valor: "Suede Marfim (60)" },
      { label: "Faixa do Pillow", valor: "Suede Marrom (AH)" },
      { label: "Pillow", valor: "Pillow Europeu" },
      { label: "Altura", valor: "36 cm" },
      { label: "Suporte de peso", valor: "Até 200 kg por pessoa" },
      { label: "Sistema de uso", valor: "Apenas girar" },
      { label: "Certificação", valor: "Produto certificado conforme Portaria Inmetro nº 75/2021" },
    ],
  },
  {
    slug: "conjunto-box-probel-laguna-gel",
    nome: "Laguna Gel | Linha Bronze",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
    descricaoCurta:
      "Molas ensacadas, Espuma D24 Soft Gel e Pillow Euro com 26 cm de altura.",
    descricao:
      "Conjunto da Linha Bronze com molas ensacadas individualmente, camada em Espuma D24 Soft Gel, Pillow Euro, 26 cm de altura e suporte de até 120 kg por pessoa.",
    caracteristicas: [
      "Tecnologia Soft Gel para maior conforto térmico",
      "Molas ensacadas individualmente (Pocket Springs)",
      "Pillow Euro — 26 cm de altura",
      "Estrutura reforçada com aglomerado de espuma de alta densidade",
      "Acabamento em Jacquard Bege",
      "Suporte de até 120 kg por pessoa",
      "Certificação Inmetro nº 75/2021",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [lagunaGel2, lagunaGel, lagunaGel3],
    destaque: true,
    sobre: [
      "Tecido em malha 280 g branca com detalhes em bege.",
      "Camada de conforto em Espuma D24 Soft Gel, proporcionando maior sensação de maciez e conforto térmico.",
      "Estrutura reforçada com aglomerado de espuma de alta densidade, aumentando a durabilidade.",
      "Sistema de molas ensacadas individualmente, reduzindo a transferência de movimento entre os lados do colchão.",
      "Pillow no padrão Euro, oferecendo acabamento sofisticado e maior conforto superficial.",
      "Faixa lateral em Jacquard Bege, proporcionando resistência e um acabamento elegante.",
      "Estrutura desenvolvida para suportar até 120 kg por pessoa.",
    ],
    fichaTecnica: [
      { label: "Modelo", valor: "Laguna Gel | Linha Bronze" },
      { label: "Conforto", valor: "6/10" },
      { label: "Classificação", valor: "Conforto intermediário, com leve tendência ao firme" },
      { label: "Matelassê", valor: "Malha 280 g Branca com detalhes Bege (FF)" },
      { label: "Espuma do Matelassê", valor: "Espuma D24 Soft Gel" },
      { label: "Espumas", valor: "Aglomerado de espuma de alta densidade" },
      { label: "Molejo", valor: "Molas ensacadas individualmente (Pocket Springs)" },
      { label: "Faixa Lateral", valor: "Jacquard Bege (EI)" },
      { label: "Pillow", valor: "Pillow Euro" },
      { label: "Altura", valor: "26 cm" },
      { label: "Suporte de peso", valor: "Até 120 kg por pessoa" },
      { label: "Sistema de uso", valor: "Apenas girar (não é necessário virar o colchão)" },
      { label: "Certificação", valor: "Produto certificado conforme Portaria Inmetro nº 75/2021" },
    ],
  },
  {
    slug: "conjunto-box-probel-pro-hotel-vip-45",
    nome: "Pró Hotel VIP 45 | Linha Prata",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
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
    imagens: [proHotelVip],
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
    slug: "conjunto-box-probel-maximus-plus",
    nome: "Maximus Plus | Linha Bronze",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
    descricaoCurta:
      "Molas ensacadas com base em EPS, Euro Pillow e conforto intermediário.",
    descricao:
      "Conjunto da Linha Bronze com molas ensacadas individualmente, base em EPS, Euro Pillow, Espuma D28, 26 cm de altura e suporte de até 110 kg por pessoa.",
    caracteristicas: [
      "Molas ensacadas individualmente",
      "Euro Pillow",
      "Espuma D28",
      "Base em EPS",
      "Apenas girar (não necessita virar)",
      "Certificado pelo Inmetro",
      "Suporte de até 110 kg por pessoa",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [maximusPlus2, maximusPlus1],
    destaque: true,
    fichaTecnica: [
      { label: "Modelo", valor: "Maximus Plus" },
      { label: "Linha", valor: "Bronze" },
      { label: "Nível de conforto", valor: "Intermediário (aprox. 5/10)" },
      { label: "Matelassê", valor: "Malha 180 g Cinza (FG) com espuma D20" },
      { label: "Espumas", valor: "Espuma D28" },
      { label: "Molejo", valor: "Molas ensacadas individualmente + Base em EPS" },
      { label: "Faixa Lateral", valor: "Jacquard Branco (FJ)" },
      { label: "Pillow", valor: "Euro Pillow" },
      { label: "Altura", valor: "26 cm" },
      { label: "Suporte de peso", valor: "Até 110 kg por pessoa" },
      { label: "Sistema de uso", valor: "Apenas girar" },
      { label: "Certificação", valor: "Produto certificado conforme Portaria Inmetro nº 75/2021" },
    ],
  },
  {
    slug: "conjunto-box-probel-guarda-costas-robuste",
    nome: "Guarda Costas Robuste | Linha Prata",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
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
    imagens: [robuste1, robuste2, robuste3, robuste4],
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
    nome: "Guarda Costas Star | Linha Prata",
    categoria: "conjuntos-box",
    categoriasAdicionais: ["colchoes"],
    descricaoCurta:
      "Molas ensacadas, Pillow Super e conforto intermediário para macio.",
    descricao:
      "Conjunto box da Linha Prata com molas ensacadas individualmente, Pillow Super e nível de conforto 7/10 — intermediário para macio, mais confortável do que firme.",
    caracteristicas: [
      "Molas ensacadas individualmente (Pocket Springs)",
      "Pillow Super com 30 cm de altura",
      "Conforto 7/10 — intermediário para macio",
      "Suporte de até 120 kg por pessoa",
    ],
    tamanhos: ["Casal", "Queen", "King"],
    imagens: [guardaCostasStar],
    destaque: true,
    fichaTecnica: [
      { label: "Modelo", valor: "Guarda Costas Star | Linha Prata" },
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
    categoriasAdicionais: ["colchoes"],
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
    imagens: [athos2, athos3, athos1, athos4],
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
    slug: "box-bau-probel",
    nome: "Box Baú Probel",
    categoria: "box-bau",
    descricaoCurta: "Base com espaço interno para armazenamento.",
    descricao:
      "Base box baú com abertura frontal ou lateral conforme a medida. Consulte a loja para verificar opções.",
    caracteristicas: ["Espaço interno para guardar itens", "Revestimento sob consulta", "Pés inclusos"],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [boxBau, bauImg, ambienteImg],
    destaque: true,
    oferta: true,
  },
  {
    slug: "cabeceira-toledo",
    nome: "Cabeceira Toledo",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Toledo — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Toledo com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_toledo],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-porto",
    nome: "Cabeceira Porto",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Porto — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Porto com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_porto],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-isis",
    nome: "Cabeceira Isis",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Isis — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Isis com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_isis],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-victorine",
    nome: "Cabeceira Victorine",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Victorine — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Victorine com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_victorine],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-luanda",
    nome: "Cabeceira Luanda",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Luanda — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Luanda com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_luanda],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-angra",
    nome: "Cabeceira Angra",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Angra — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Angra com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_angra],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-rosario",
    nome: "Cabeceira Rosário",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Rosário — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Rosário com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_rosario],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-new-york",
    nome: "Cabeceira New York",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira New York — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada New York com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_newyork],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-oxford",
    nome: "Cabeceira Oxford",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Oxford — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Oxford com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_oxford],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-medellin",
    nome: "Cabeceira Medellin",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Medellin — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Medellin com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_medellin],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "cabeceira-monalisa",
    nome: "Cabeceira Monalisa",
    categoria: "cabeceiras",
    descricaoCurta: "Cabeceira Monalisa — altura 135cm e profundidade 9cm.",
    descricao:
      "Cabeceira estofada Monalisa com altura de 135cm e profundidade de 9cm. Disponível nas larguras 92cm, 142cm, 162cm, 182cm e 197cm. Consulte tecidos e cores disponíveis com a equipe da loja.",
    caracteristicas: [
      "Altura: 135cm",
      "Profundidade: 9cm",
      "Larguras disponíveis: 92cm • 142cm • 162cm • 182cm • 197cm",
      "Tecidos e cores sob consulta",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_monalisa],
    fichaTecnica: [
      { label: "Altura", valor: "135cm" },
      { label: "Profundidade", valor: "9cm" },
      { label: "Larguras disponíveis", valor: "92cm • 142cm • 162cm • 182cm • 197cm" },
    ],
  },
  {
    slug: "base-box-prime",
    nome: "Base Box Prime",
    categoria: "conjuntos-box",
    descricaoCurta: "Base box nas alturas 15, 26 e 30cm com pés de alumínio.",
    descricao:
      "Base Box Prime disponível nas alturas de 15, 26 e 30cm. Pés com base em alumínio na cor prateado e altura de 16,5cm. Consulte tecidos e medidas com a equipe da loja.",
    caracteristicas: [
      "Alturas: 15, 26 e 30cm",
      "Pés com base em alumínio",
      "Cor dos pés: prateado",
      "Altura dos pés: 16,5cm",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [cab_boxprime],
    fichaTecnica: [
      { label: "Alturas", valor: "15, 26 e 30cm" },
      { label: "Base dos pés", valor: "Alumínio" },
      { label: "Cor dos pés", valor: "Prateado" },
      { label: "Altura dos pés", valor: "16,5cm" },
    ],
  },
  {
    slug: "portinari-cama-articulavel",
    nome: "Portinari | Cama Articulável",
    categoria: "conjuntos-box",
    descricaoCurta: "Cama articulável com colchão Probel e box baú.",
    descricao:
      "Cama articulável Portinari com colchão em malha 350g branca com detalhes em relevo, espumas visco elástico gel e D28 Pró. Box com opção em corino ou suede e espaço interno. Consulte cores e disponibilidade com a equipe.",
    caracteristicas: [
      "Nível de conforto: plush (4/10)",
      "Matelassê: malha 350g branca com detalhes em relevo",
      "Espumas: visco elástico gel + espuma D28 Pró",
      "Altura: 51cm",
      "Suporte: 120kg",
      "Sem pillow — apenas girar",
      "Opcional de composição: látex + espuma D28 Pró",
      "Box opcional em corino ou suede (cores sob consulta)",
    ],
    tamanhos: ["Solteiro", "Casal", "Queen", "King"],
    imagens: [portinari],
    destaque: true,
    sobre: [
      "A Portinari é a cama articulável da Probel: o movimento do estrado permite elevar cabeceira e pernas para leitura, TV, descanso e melhor circulação.",
      "O colchão traz matelassê em malha 350g branca com detalhes em relevo e composição em visco elástico gel com espuma D28 Pró, entregando conforto plush com suporte firme onde o corpo precisa.",
      "O box conta com espaço interno para armazenamento e pode ser revestido em corino ou suede, com cores verificadas junto ao vendedor.",
    ],
    fichaTecnica: [
      { label: "Nível de conforto", valor: "Plush (4/10)" },
      { label: "Matelassê", valor: "Malha 350g branca com detalhes em relevo" },
      { label: "Espumas", valor: "Visco elástico gel e espuma D28 Pró" },
      { label: "Faixa lateral", valor: "Malha branca com detalhes em relevo" },
      { label: "Pillow", valor: "Sem pillow" },
      { label: "Altura", valor: "51cm" },
      { label: "Suporte", valor: "120kg" },
      { label: "Uso", valor: "Apenas girar" },
      { label: "Box", valor: "Opcional em corino ou suede" },
      { label: "Certificação", valor: "Portaria Inmetro nº 35/2021" },
    ],
  },
  {
    slug: "travesseiro-poesy",
    nome: "Travesseiro Poesy | Fibra",
    categoria: "travesseiros",
    descricaoCurta: "Fibra — Travesseiro em fibra com peso de 850g.",
    descricao:
      "Travesseiro em fibra com peso de 850g. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Fibra",
      "Peso: 850g",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trpoesy],
    fichaTecnica: [
      { label: "Enchimento", valor: "Fibra" },
      { label: "Peso", valor: "850g" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-future",
    nome: "Travesseiro Future | Fibra",
    categoria: "travesseiros",
    descricaoCurta: "Fibra — Travesseiro corpo inteiro em fibra, ideal para apoio lateral.",
    descricao:
      "Travesseiro corpo inteiro em fibra, ideal para apoio lateral. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Fibra",
      "Tamanho para fronhas: 40cm x 130cm",
    ],
    tamanhos: ["Único"],
    imagens: [trfuture],
    fichaTecnica: [
      { label: "Enchimento", valor: "Fibra" },
      { label: "Tamanho para fronhas", valor: "40cm x 130cm" },
    ],
  },
  {
    slug: "travesseiro-boost",
    nome: "Travesseiro Boost | Espuma D15",
    categoria: "travesseiros",
    descricaoCurta: "Espuma D15 — Travesseiro em espuma D15 com opções de altura.",
    descricao:
      "Travesseiro em espuma D15 com opções de altura. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Espuma D15",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trboost],
    fichaTecnica: [
      { label: "Enchimento", valor: "Espuma D15" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-max",
    nome: "Travesseiro Max | Fibra",
    categoria: "travesseiros",
    descricaoCurta: "Fibra — Travesseiro em fibra com 650g de enchimento.",
    descricao:
      "Travesseiro em fibra com 650g de enchimento. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Fibra",
      "Peso: 650g",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trmax],
    fichaTecnica: [
      { label: "Enchimento", valor: "Fibra" },
      { label: "Peso", valor: "650g" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-only-latex",
    nome: "Travesseiro Only Látex",
    categoria: "travesseiros",
    descricaoCurta: "Látex — Travesseiro 100% látex com 12cm de altura.",
    descricao:
      "Travesseiro 100% látex com 12cm de altura. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Látex",
      "Altura: 12cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [tronly_latex],
    fichaTecnica: [
      { label: "Enchimento", valor: "Látex" },
      { label: "Altura", valor: "12cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-tesouros",
    nome: "Travesseiro Tesouros | High Resilience",
    categoria: "travesseiros",
    descricaoCurta: "High Resilience — Travesseiro em espuma high resilience com boa recuperação.",
    descricao:
      "Travesseiro em espuma high resilience com boa recuperação. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: High Resilience",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trtesouros],
    fichaTecnica: [
      { label: "Enchimento", valor: "High Resilience" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-bemdizer",
    nome: "Travesseiro Bemdizer | Visco D40",
    categoria: "travesseiros",
    descricaoCurta: "Visco D40 — Travesseiro em viscoelástico D40 de alta densidade.",
    descricao:
      "Travesseiro em viscoelástico D40 de alta densidade. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Visco D40",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trbemdizer],
    fichaTecnica: [
      { label: "Enchimento", valor: "Visco D40" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-sensitive",
    nome: "Travesseiro Sensitive | Visco D40",
    categoria: "travesseiros",
    descricaoCurta: "Visco D40 — Travesseiro viscoelástico D40 em medida ampla.",
    descricao:
      "Travesseiro viscoelástico D40 em medida ampla. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Visco D40",
      "Altura: 14cm",
      "Tamanho para fronhas: 50cm x 70cm",
    ],
    tamanhos: ["Único"],
    imagens: [trsensitive],
    fichaTecnica: [
      { label: "Enchimento", valor: "Visco D40" },
      { label: "Altura", valor: "14cm" },
      { label: "Tamanho para fronhas", valor: "50cm x 70cm" },
    ],
  },
  {
    slug: "travesseiro-calma",
    nome: "Travesseiro Calma | Visco D30",
    categoria: "travesseiros",
    descricaoCurta: "Visco D30 — Travesseiro viscoelástico D30 com opções de altura.",
    descricao:
      "Travesseiro viscoelástico D30 com opções de altura. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Visco D30",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trcalma],
    fichaTecnica: [
      { label: "Enchimento", valor: "Visco D30" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-divino",
    nome: "Travesseiro Divino | D24 Hiper Soft",
    categoria: "travesseiros",
    descricaoCurta: "D24 Hiper Soft — Travesseiro em espuma D24 hiper soft, toque macio.",
    descricao:
      "Travesseiro em espuma D24 hiper soft, toque macio. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: D24 Hiper Soft",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trdivino],
    fichaTecnica: [
      { label: "Enchimento", valor: "D24 Hiper Soft" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-atlantis",
    nome: "Travesseiro Atlantis | D24 Hiper Soft",
    categoria: "travesseiros",
    descricaoCurta: "D24 Hiper Soft — Travesseiro D24 hiper soft em medida ampla.",
    descricao:
      "Travesseiro D24 hiper soft em medida ampla. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: D24 Hiper Soft",
      "Altura: 14cm",
      "Tamanho para fronhas: 50cm x 70cm",
    ],
    tamanhos: ["Único"],
    imagens: [tratlantis],
    fichaTecnica: [
      { label: "Enchimento", valor: "D24 Hiper Soft" },
      { label: "Altura", valor: "14cm" },
      { label: "Tamanho para fronhas", valor: "50cm x 70cm" },
    ],
  },
  {
    slug: "travesseiro-guarda-costas",
    nome: "Travesseiro Guarda Costas | D24 Soft",
    categoria: "travesseiros",
    descricaoCurta: "D24 Soft — Travesseiro em espuma D24 soft com opções de altura.",
    descricao:
      "Travesseiro em espuma D24 soft com opções de altura. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: D24 Soft",
      "Altura: 12cm ou 14cm",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trguarda_costas],
    fichaTecnica: [
      { label: "Enchimento", valor: "D24 Soft" },
      { label: "Altura", valor: "12cm ou 14cm" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-isis",
    nome: "Travesseiro Isis | Fibra",
    categoria: "travesseiros",
    descricaoCurta: "Fibra — Travesseiro em fibra com 14cm de altura.",
    descricao:
      "Travesseiro em fibra com 14cm de altura. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Fibra",
      "Altura: 14cm",
      "Tamanho para fronhas: 50cm x 70cm",
    ],
    tamanhos: ["Único"],
    imagens: [trisis],
    fichaTecnica: [
      { label: "Enchimento", valor: "Fibra" },
      { label: "Altura", valor: "14cm" },
      { label: "Tamanho para fronhas", valor: "50cm x 70cm" },
    ],
  },
  {
    slug: "travesseiro-relax",
    nome: "Travesseiro Relax | Flocos de Espuma",
    categoria: "travesseiros",
    descricaoCurta: "Flocos de Espuma — Travesseiro em flocos de espuma com 800g.",
    descricao:
      "Travesseiro em flocos de espuma com 800g. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: Flocos de espuma",
      "Peso: 800g",
      "Tamanho para fronhas: 40cm x 60cm",
    ],
    tamanhos: ["Único"],
    imagens: [trrelax],
    fichaTecnica: [
      { label: "Enchimento", valor: "Flocos de espuma" },
      { label: "Peso", valor: "800g" },
      { label: "Tamanho para fronhas", valor: "40cm x 60cm" },
    ],
  },
  {
    slug: "travesseiro-adapt-alveolado",
    nome: "Travesseiro Adapt D18 Alveolado",
    categoria: "travesseiros",
    descricaoCurta: "D18 Alveolado — Travesseiro rampa em espuma D18 alveolada.",
    descricao:
      "Travesseiro rampa em espuma D18 alveolada. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: D18 alveolado",
      "Medida: 40 x 60 x 72",
    ],
    tamanhos: ["Único"],
    imagens: [tradapt_alveolado],
    fichaTecnica: [
      { label: "Enchimento", valor: "D18 alveolado" },
      { label: "Medida", valor: "40 x 60 x 72" },
    ],
  },
  {
    slug: "travesseiro-adapt-d18",
    nome: "Travesseiro Adapt D18",
    categoria: "travesseiros",
    descricaoCurta: "D18 — Travesseiro rampa em espuma D18.",
    descricao:
      "Travesseiro rampa em espuma D18. Consulte a loja para verificar disponibilidade de alturas e medidas.",
    caracteristicas: [
      "Enchimento: D18",
      "Medida: 40 x 60 x 72",
    ],
    tamanhos: ["Único"],
    imagens: [tradapt_d18],
    fichaTecnica: [
      { label: "Enchimento", valor: "D18" },
      { label: "Medida", valor: "40 x 60 x 72" },
    ],
  },
];

// Ordem das linhas Probel: Ouro, Prata, Bronze e depois os demais.
const LINHA_ORDEM = ["ouro", "prata", "bronze"];

const rankLinha = (nome: string) => {
  const n = nome.toLowerCase();
  const i = LINHA_ORDEM.findIndex((l) => n.includes(`linha ${l}`));
  return i === -1 ? LINHA_ORDEM.length : i;
};

const porLinha = (lista: Produto[]) =>
  [...lista].sort((a, b) => rankLinha(a.nome) - rankLinha(b.nome));

export const produtosVisiveis = () => porLinha(produtos.filter((p) => p.visivel !== false));

export const porCategoria = (slug: CategoriaSlug) =>
  produtosVisiveis().filter(
    (p) => p.categoria === slug || p.categoriasAdicionais?.includes(slug),
  );

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