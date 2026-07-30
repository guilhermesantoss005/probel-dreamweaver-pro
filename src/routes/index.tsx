import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Headset,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-bedroom.jpg";
import lojaImg from "@/assets/loja.jpg";
import { categorias, destaques, TAMANHOS } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MSG_GERAL, site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Probel Store — Colchões, Conjuntos Box e Travesseiros" },
      {
        name: "description",
        content:
          "Loja autorizada Probel Colchões. Encontre colchões, conjuntos box, box baú, cabeceiras e travesseiros com atendimento especializado pelo WhatsApp.",
      },
      { property: "og:title", content: "Probel Store — Colchões, Conjuntos Box e Travesseiros" },
      {
        property: "og:description",
        content: "Loja autorizada Probel Colchões. Encontre colchões, conjuntos box, box baú, cabeceiras e travesseiros com atendimento especializado pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const confianca = [
  "Atendimento personalizado",
  "Produtos originais",
  "Condições especiais",
  "Compra segura",
];

const beneficios = [
  {
    icon: Headset,
    titulo: "Atendimento especializado",
    texto: "Nossa equipe ajuda você a encontrar o produto ideal.",
  },
  {
    icon: Sparkles,
    titulo: "Qualidade e conforto",
    texto: "Produtos desenvolvidos para proporcionar melhores noites.",
  },
  {
    icon: CreditCard,
    titulo: "Compra facilitada",
    texto: "Consulte condições e formas de pagamento.",
  },
  {
    icon: ShieldCheck,
    titulo: "Suporte próximo",
    texto: "Conte com atendimento antes, durante e depois da compra.",
  },
];

const depoimentos = [
  { nome: "Ana Ribeiro", texto: "Atendimento atencioso do início ao fim. Consegui escolher o colchão certo sem pressa." },
  { nome: "Marcos Lima", texto: "Explicaram bem as diferenças entre os modelos e as condições de pagamento." },
  { nome: "Juliana Souza", texto: "Fui bem orientada pelo WhatsApp e o processo foi simples e rápido." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Quarto sofisticado com cama e colchão premium"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/20" />
        <div className="container-page py-20 sm:py-28 lg:py-36">
          <div className="max-w-xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              {site.slogan}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu descanso começa aqui.
            </h1>
            <p className="mt-5 max-w-lg text-base text-primary-foreground/80 sm:text-lg">
              Encontre o colchão ideal para transformar suas noites em mais conforto, qualidade e
              bem-estar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/colchoes"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Conheça os colchões <ArrowRight className="size-4" />
              </Link>
              <WhatsAppButton mensagem={MSG_GERAL} className="px-6 py-3">
                Fale com um especialista
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/60">
        <div className="container-page grid grid-cols-2 gap-4 py-5 lg:grid-cols-4">
          {confianca.map((c) => (
            <div key={c} className="flex items-center gap-2 text-sm font-medium text-navy">
              <BadgeCheck className="size-4 shrink-0 text-accent" />
              <span className="truncate">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIAS */}
      <section className="container-page py-16 sm:py-20">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Encontre o conforto ideal para você
          </h2>
          <p className="mt-3 text-muted-foreground">
            Navegue pelas categorias e converse com nossa equipe para confirmar medidas e
            disponibilidade.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...categorias, {
            slug: "ofertas" as const,
            nome: "Ofertas",
            descricao: "Condições especiais selecionadas pela loja.",
            imagem: heroImg,
            rota: "/ofertas",
          }].map((c) => (
            <Link
              key={c.slug}
              to={c.rota}
              className="group relative isolate flex h-64 flex-col justify-end overflow-hidden rounded-2xl p-6 text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={c.imagem}
                alt={c.nome}
                loading="lazy"
                className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
              <h3 className="text-xl font-bold">{c.nome}</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{c.descricao}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-soft">
                Ver produtos <MoveRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="container-page">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Produtos em destaque</h2>
            <Link to="/ofertas" className="text-sm font-semibold text-accent hover:underline">
              Ver todas as ofertas
            </Link>
          </header>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destaques().map((p) => (
              <ProductCard key={p.slug} produto={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TAMANHOS */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
          Qual é o tamanho ideal para você?
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TAMANHOS.map((t) => (
            <Link
              key={t}
              to="/colchoes"
              className="rounded-xl border border-border bg-card px-4 py-6 text-center text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-card"
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      {/* OFERTAS */}
      <section className="bg-navy-deep py-16 text-primary-foreground sm:py-20">
        <div className="container-page grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ofertas especiais para você dormir melhor
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Consulte nossas condições e encontre a opção ideal para seu conforto.
            </p>
          </div>
          <WhatsAppButton
            mensagem="Olá! Vim pelo site e gostaria de consultar as ofertas disponíveis."
            evento="Lead"
            className="px-7 py-3.5 text-base"
          >
            Consultar ofertas no WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">Por que comprar com a gente?</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-blue-soft text-accent">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy">{titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTITUCIONAL */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <img
            src={lojaImg}
            alt="Interior da loja de colchões"
            loading="lazy"
            width={1408}
            height={944}
            className="w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Mais conforto para a sua rotina
            </h2>
            <p className="mt-4 text-muted-foreground">
              Somos uma loja especializada em soluções para o sono e o bem-estar. Nosso objetivo é
              oferecer atendimento próximo, produtos de qualidade e orientação para que cada cliente
              encontre o colchão ideal.
            </p>
            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Unidade</dt>
                <dd className="font-semibold text-navy">{site.unidade}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Endereço</dt>
                <dd className="font-semibold text-navy">{site.endereco}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Cidade</dt>
                <dd className="font-semibold text-navy">{site.cidade}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Horário</dt>
                <dd className="font-semibold text-navy">{site.horario}</dd>
              </div>
            </dl>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa da loja"
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0"
              />
            </div>
            <Link
              to="/sobre"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Conheça nossa loja <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">O que nossos clientes dizem</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">“{d.texto}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-blue-soft text-sm font-bold text-accent">
                  {d.nome.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-navy">{d.nome}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-page pb-8">
        <div className="rounded-3xl bg-navy px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Precisa de ajuda para escolher seu colchão?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/75">
            Fale com nossa equipe e receba um atendimento personalizado.
          </p>
          <WhatsAppButton
            mensagem={MSG_GERAL}
            evento="Lead"
            className="mt-8 px-8 py-4 text-base"
          >
            Conversar pelo WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
