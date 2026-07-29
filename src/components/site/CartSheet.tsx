import { Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/components/cart";
import { WhatsAppButton } from "./WhatsAppButton";
import { brl } from "@/data/products";

export function CartSheet() {
  const { itens, remove, total, aberto, setAberto, limpar } = useCart();

  const mensagem =
    itens.length > 0
      ? `Olá! Vim pelo site e gostaria de finalizar o pedido:\n\n${itens
          .map((i) => `• ${i.nome} (${i.tamanho}) x${i.qtd}`)
          .join("\n")}\n\nTotal estimado: ${brl(total)}`
      : "Olá! Vim pelo site e gostaria de ajuda com um pedido.";

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetContent className="flex w-[90vw] max-w-md flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-navy">Meu carrinho</SheetTitle>
        </SheetHeader>

        {itens.length === 0 ? (
          <p className="px-4 text-sm text-muted-foreground">
            Seu carrinho está vazio. Escolha um produto e fale com nossa equipe pelo WhatsApp.
          </p>
        ) : (
          <div className="flex-1 space-y-3 overflow-y-auto px-4">
            {itens.map((i) => (
              <div
                key={`${i.slug}-${i.tamanho}`}
                className="flex items-center gap-3 rounded-xl border border-border p-2.5"
              >
                <img
                  src={i.imagem}
                  alt={i.nome}
                  loading="lazy"
                  className="size-16 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-navy">{i.nome}</p>
                  <p className="text-xs text-muted-foreground">
                    {i.tamanho} · {i.qtd}x
                  </p>
                  <p className="text-sm font-bold text-accent">{brl(i.preco * i.qtd)}</p>
                </div>
                <button
                  aria-label={`Remover ${i.nome}`}
                  onClick={() => remove(i.slug, i.tamanho)}
                  className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3 border-t border-border p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total estimado</span>
            <span className="font-display text-lg font-bold text-navy">{brl(total)}</span>
          </div>
          <WhatsAppButton
            mensagem={mensagem}
            evento="InitiateCheckout"
            className="w-full py-3"
          >
            Finalizar pelo WhatsApp
          </WhatsAppButton>
          {itens.length > 0 && (
            <button
              onClick={limpar}
              className="w-full text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Esvaziar carrinho
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}