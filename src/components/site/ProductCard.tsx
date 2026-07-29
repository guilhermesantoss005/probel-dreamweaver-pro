import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { useCart } from "@/components/cart";
import { brl, nomeCategoria, type Produto } from "@/data/products";
import { msgProduto } from "@/config/site";

export function ProductCard({ produto }: { produto: Produto }) {
  const { add } = useCart();
  const desconto =
    produto.precoDe && produto.precoDe > produto.preco
      ? Math.round((1 - produto.preco / produto.precoDe) * 100)
      : 0;

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
        {desconto > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
            -{desconto}%
          </span>
        )}
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

        <div className="mt-4">
          {produto.precoDe && (
            <span className="text-xs text-muted-foreground line-through">
              {brl(produto.precoDe)}
            </span>
          )}
          <div className="font-display text-2xl font-bold text-navy">{brl(produto.preco)}</div>
          {produto.parcelas && (
            <span className="text-xs text-muted-foreground">{produto.parcelas}</span>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <Link
              to="/produto/$slug"
              params={{ slug: produto.slug }}
              className="flex-1 rounded-full border border-navy/20 px-3 py-2 text-center text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Ver detalhes
            </Link>
            <button
              onClick={() => add(produto)}
              aria-label={`Adicionar ${produto.nome} ao carrinho`}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-secondary"
            >
              <ShoppingCart className="size-4" />
            </button>
          </div>
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