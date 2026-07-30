import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";
import { nomeCategoria, type Produto } from "@/data/products";
import { msgProduto } from "@/config/site";

export function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link
        to="/produto/$slug"
        params={{ slug: produto.slug }}
        className="relative block aspect-4/3 overflow-hidden bg-secondary"
      >
        <img
          src={produto.imagens[0]}
          alt={produto.nome}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {nomeCategoria(produto.categoria)}
        </span>
        <Link
          to="/produto/$slug"
          params={{ slug: produto.slug }}
          className="mt-1 font-display text-base font-bold text-navy hover:text-accent"
        >
          {produto.nome}
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {produto.descricaoCurta}
        </p>

        <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
          <Link
            to="/produto/$slug"
            params={{ slug: produto.slug }}
            className="rounded-full border border-navy/20 px-3 py-2 text-center text-sm font-semibold text-navy transition-colors hover:bg-secondary"
          >
            Saber mais
          </Link>
          <WhatsAppButton
            mensagem={msgProduto(produto.nome)}
            evento="Lead"
            produto={produto.nome}
            className="w-full"
          >
            Comprar pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
