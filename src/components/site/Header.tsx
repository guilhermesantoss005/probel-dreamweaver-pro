import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WhatsAppButton } from "./WhatsAppButton";
import { CartSheet } from "./CartSheet";
import { useCart } from "@/components/cart";
import { MSG_GERAL, site } from "@/config/site";
import { track } from "@/lib/analytics";

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/colchoes", label: "Colchões" },
  { to: "/conjuntos-box", label: "Conjuntos Box" },
  { to: "/box-bau", label: "Box Baú" },
  { to: "/cabeceiras", label: "Cabeceiras" },
  { to: "/travesseiros", label: "Travesseiros" },
  { to: "/ofertas", label: "Ofertas" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/contato", label: "Contato" },
];

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5">
      {/* Espaço reservado para a logo oficial da loja */}
      <span className="grid size-9 place-items-center rounded-lg bg-navy text-sm font-bold text-primary-foreground">
        PB
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-bold text-navy">
          {site.nome}
        </span>
        <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {site.slogan}
        </span>
      </span>
    </Link>
  );
}

function SearchBox({ onDone }: { onDone?: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (!q.trim()) return;
        track("Search", { search_string: q });
        navigate({ to: "/busca", search: { q } });
        onDone?.();
      }}
      className="relative w-full"
    >
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Buscar produtos"
        placeholder="O que você está procurando?"
        className="h-11 w-full rounded-full border border-border bg-secondary pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:bg-background"
      />
    </form>
  );
}

export function Header() {
  const { quantidade, setAberto } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Logo />
        <div className="hidden lg:block">
          <SearchBox />
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <WhatsAppButton mensagem={MSG_GERAL} className="hidden md:inline-flex">
            Falar no WhatsApp
          </WhatsAppButton>
          <button
            onClick={() => setAberto(true)}
            aria-label="Abrir carrinho"
            className="relative grid size-10 shrink-0 place-items-center rounded-full text-navy transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="size-5" />
            {quantidade > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid size-4.5 min-w-[18px] place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {quantidade}
              </span>
            )}
          </button>
          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="grid size-10 shrink-0 place-items-center rounded-full text-navy transition-colors hover:bg-secondary lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[86vw] max-w-sm p-0">
              <div className="flex items-center justify-between border-b border-border p-4">
                <Logo />
                <button aria-label="Fechar menu" onClick={() => setMenu(false)}>
                  <X className="size-5 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <SearchBox onDone={() => setMenu(false)} />
              </div>
              <nav className="flex flex-col px-2 pb-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenu(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-accent" }}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="px-4 pb-6">
                <WhatsAppButton mensagem={MSG_GERAL} className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="border-t border-border/70 lg:hidden">
        <div className="container-page py-2.5">
          <SearchBox />
        </div>
      </div>

      <nav className="hidden border-t border-border/70 lg:block">
        <div className="container-page flex items-center gap-1 py-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="rounded-md px-3 py-2.5 text-[13px] font-semibold text-navy/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      <CartSheet />
    </header>
  );
}