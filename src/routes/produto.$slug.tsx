import { useEffect, useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { track } from "@/lib/analytics";
import { msgProduto, site } from "@/config/site";
import {
  getProduto,
  nomeCategoria,
  porCategoria,
  type Produto,
  type Tamanho,
} from "@/data/products";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const produto = getProduto(params.slug);
    if (!produto) throw notFound();
    return { produto };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produto indisponível" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.produto;
    return {
      meta: [
        { title: `${p.nome} | ${site.nome}` },
        { name: "description", content: p.descricaoCurta },
        { property: "og:title", content: `${p.nome} | ${site.nome}` },
        { property: "og:description", content: p.descricaoCurta },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { produto } = Route.useLoaderData() as { produto: Produto };
  const [img, setImg] = useState(0);
  const [tamanho, setTamanho] = useState(produto.tamanhos[0]);

  useEffect(() => {
    setImg(0);
    setTamanho(produto.tamanhos[0]);
    track("ViewContent", { content_name: produto.nome });
  }, [produto]);

  const relacionados = porCategoria(produto.categoria)
    .filter((p) => p.slug !== produto.slug)
    .slice(0, 4);

  return (
    <>
      <section className="container-page py-10">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Início
          </Link>{" "}
          / <span className="text-navy">{nomeCategoria(produto.categoria)}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div>
            <div
              className={`overflow-hidden rounded-2xl border border-border bg-secondary ${
                produto.categoria === "cabeceiras" ? "p-6 sm:p-10" : ""
              }`}
            >
              <img
                src={produto.imagens[img]}
                alt={produto.nome}
                className={`w-full ${
                  produto.categoria === "cabeceiras"
                    ? "aspect-4/3 object-contain"
                    : "aspect-4/3 object-cover"
                }`}
              />
            </div>
            {produto.imagens.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {produto.imagens.map((src: string, i: number) => (
                  <button
                    key={src + i}
                    onClick={() => setImg(i)}
                    aria-label={`Imagem ${i + 1}`}
                    className={`size-20 overflow-hidden rounded-xl border-2 transition-colors ${
                      i === img ? "border-accent" : "border-border"
                    } ${produto.categoria === "cabeceiras" ? "bg-secondary p-1.5" : ""}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className={`size-full ${
                        produto.categoria === "cabeceiras" ? "object-contain" : "object-cover"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              {nomeCategoria(produto.categoria)}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-navy sm:text-4xl">{produto.nome}</h1>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Tamanhos disponíveis
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {produto.tamanhos.map((t: Tamanho) => (
                  <button
                    key={t}
                    onClick={() => setTamanho(t)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      tamanho === t
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-navy hover:border-accent"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{produto.descricao}</p>

            <ul className="mt-5 space-y-2">
              {produto.caracteristicas.map((c: string) => (
                <li key={c} className="flex gap-2 text-sm text-navy">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton
                mensagem={msgProduto(produto.nome, tamanho)}
                evento="Lead"
                produto={produto.nome}
                className="w-full py-3.5 text-base sm:w-auto sm:px-8"
              >
                Comprar pelo WhatsApp
              </WhatsAppButton>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">{site.aviso}</p>
          </div>
        </div>
      </section>

      {produto.sobre && produto.sobre.length > 0 && (
        <section className="bg-secondary/50 py-14">
          <div className="container-page max-w-4xl">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Sobre o produto</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {produto.sobre.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {produto.fichaTecnica && produto.fichaTecnica.length > 0 && (
        <section className="container-page max-w-4xl py-14">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Ficha técnica</h2>
          <dl className="mt-6 overflow-hidden rounded-2xl border border-border">
            {produto.fichaTecnica.map((f, i) => (
              <div
                key={f.label}
                className={`grid gap-1 px-5 py-3.5 sm:grid-cols-[220px_minmax(0,1fr)] ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary/60"
                }`}
              >
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="text-sm text-navy">{f.valor}</dd>
              </div>
            ))}
          </dl>
          <WhatsAppButton
            mensagem={msgProduto(produto.nome, tamanho)}
            evento="Lead"
            produto={produto.nome}
            className="mt-8 px-7 py-3.5 text-base"
          >
            Comprar pelo WhatsApp
          </WhatsAppButton>
        </section>
      )}

      {relacionados.length > 0 && (
        <section className="container-page py-12">
          <h2 className="text-2xl font-bold text-navy">Produtos relacionados</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relacionados.map((p) => (
              <ProductCard key={p.slug} produto={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
