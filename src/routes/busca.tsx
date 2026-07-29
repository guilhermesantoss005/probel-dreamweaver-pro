import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { buscarProdutos } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MSG_GERAL } from "@/config/site";

export const Route = createFileRoute("/busca")({
  validateSearch: zodValidator(z.object({ q: fallback(z.string(), "").default("") })),
  head: () => ({
    meta: [
      { title: "Busca | Probel Store" },
      { name: "description", content: "Busque colchões, conjuntos box, cabeceiras e travesseiros." },
      { property: "og:title", content: "Busca | Probel Store" },
      { property: "og:description", content: "Encontre o produto ideal na nossa loja." },
    ],
  }),
  component: Busca,
});

function Busca() {
  const { q } = Route.useSearch();
  const resultados = buscarProdutos(q);

  return (
    <section className="container-page py-14">
      <h1 className="text-2xl font-bold text-navy sm:text-3xl">
        Resultados para “{q}”
      </h1>
      {resultados.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resultados.map((p) => (
            <ProductCard key={p.slug} produto={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">Nenhum produto encontrado.</p>
          <WhatsAppButton mensagem={MSG_GERAL} className="mt-5">
            Consultar com a equipe
          </WhatsAppButton>
        </div>
      )}
    </section>
  );
}