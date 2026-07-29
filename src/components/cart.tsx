import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";
import type { Produto } from "@/data/products";

export type CartItem = {
  slug: string;
  nome: string;
  preco: number;
  imagem: string;
  tamanho: string;
  qtd: number;
};

type CartCtx = {
  itens: CartItem[];
  add: (p: Produto, tamanho?: string) => void;
  remove: (slug: string, tamanho: string) => void;
  limpar: () => void;
  total: number;
  quantidade: number;
  aberto: boolean;
  setAberto: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "carrinho-loja";

export function CartProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CartItem[]>([]);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItens(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(itens));
    } catch {
      /* ignore */
    }
  }, [itens]);

  const value = useMemo<CartCtx>(() => {
    const add: CartCtx["add"] = (p, tamanho) => {
      const t = tamanho ?? p.tamanhos[0] ?? "Único";
      setItens((prev) => {
        const i = prev.findIndex((x) => x.slug === p.slug && x.tamanho === t);
        if (i >= 0) {
          const copia = [...prev];
          copia[i] = { ...copia[i], qtd: copia[i].qtd + 1 };
          return copia;
        }
        return [
          ...prev,
          { slug: p.slug, nome: p.nome, preco: p.preco, imagem: p.imagens[0], tamanho: t, qtd: 1 },
        ];
      });
      track("AddToCart", { content_name: p.nome, value: p.preco, currency: "BRL" });
      setAberto(true);
    };

    return {
      itens,
      add,
      remove: (slug, tamanho) =>
        setItens((prev) => prev.filter((x) => !(x.slug === slug && x.tamanho === tamanho))),
      limpar: () => setItens([]),
      total: itens.reduce((s, i) => s + i.preco * i.qtd, 0),
      quantidade: itens.reduce((s, i) => s + i.qtd, 0),
      aberto,
      setAberto,
    };
  }, [itens, aberto]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart precisa estar dentro de CartProvider");
  return c;
}