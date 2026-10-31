export function BlackFridayBar() {
  return (
    <div className="bg-ink text-primary-foreground">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-1.5 text-center">
        <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-promo sm:text-lg">
          Black Friday
        </span>
        <span aria-hidden className="hidden h-3 w-px bg-primary-foreground/25 sm:block" />
        <span className="text-[11px] font-medium text-primary-foreground/85 sm:text-xs">
          Condições especiais em colchões, conjuntos box e cabeceiras
        </span>
      </div>
    </div>
  );
}
