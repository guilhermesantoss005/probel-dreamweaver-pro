import { BadgeCheck, Headset, MessageCircle, Truck } from "lucide-react";

const itens = [
  { icon: BadgeCheck, texto: "Conforto e qualidade para suas melhores noites" },
  { icon: Headset, texto: "Atendimento especializado" },
  { icon: MessageCircle, texto: "Compre pelo WhatsApp" },
  { icon: Truck, texto: "Entrega e montagem conforme disponibilidade" },
];

export function TopBar() {
  return (
    <div className="bg-navy-deep text-primary-foreground">
      <div className="container-page flex items-center gap-6 overflow-x-auto py-2 text-[11px] font-medium tracking-wide sm:justify-between sm:text-xs [&::-webkit-scrollbar]:hidden">
        {itens.map(({ icon: Icon, texto }) => (
          <span key={texto} className="flex shrink-0 items-center gap-1.5 whitespace-nowrap opacity-90">
            <Icon className="size-3.5 shrink-0 text-blue-soft" />
            {texto}
          </span>
        ))}
      </div>
    </div>
  );
}