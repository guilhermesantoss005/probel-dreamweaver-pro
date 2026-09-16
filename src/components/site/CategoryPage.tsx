import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MSG_GERAL } from "@/config/site";
import { TAMANHOS, type Produto, type Tamanho } from "@/data/products";
import bannerImg from "@/assets/banner-categoria.jpg";

type Props = {
  titulo: string;
  descricao: string;
  produtos: Produto[];
  imagem?: string;
  varianteCard?: "padrao" | "cabeceira";
};

const FILTROS_TAMANHO: Array<Tamanho | "Todos"> = ["Todos", ...TAMANHOS];

export function CategoryPage({
  titulo,
  descricao,
  produtos,
  imagem = bannerImg,
  varianteCard = "padrao",
}: Props) {
  const [tamanho, setTamanho] = useState<Tamanho | "Todos">("Todos");
  const lista = useMemo(() => {
    return tamanho === "Todos"
      ? produtos
      : produtos.filter((produto) => produto.tamanhos.includes(tamanho));
  }, [produtos, tamanho]);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-deep/75" />
        <div className="container-page py-16 text-primary-foreground sm:py-20">
          <h1 className="text-3xl font-bold sm:text-4xl">{titulo}</h1>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
            {descricao}
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-5">
          <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tamanho
          </span>
          {FILTROS_TAMANHO.map((t) => (
            <Button
              key={t}
              type="button"
              variant="outline"
              aria-pressed={tamanho === t}
              onClick={() => setTamanho(t)}
              className={`h-auto rounded-full px-3.5 py-1.5 text-sm font-medium ${
                tamanho === t
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-navy hover:border-accent hover:text-accent"
              }`}
            >
              {t}
            </Button>
          ))}
        </div>

        {lista.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {lista.map((p) => (
              <ProductCard key={p.slug} produto={p} variante={varianteCard} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nenhum produto encontrado com esse filtro.
            </p>
            <WhatsAppButton mensagem={MSG_GERAL} className="mt-5">
              Consultar disponibilidade
            </WhatsAppButton>
          </div>
        )}
      </section>
    </>
  );
}