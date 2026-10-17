import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { trackWhatsAppLead, type CtaLocation, type ProdutoTracking } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  mensagem: string;
  origem: CtaLocation;
  children?: React.ReactNode;
  className?: string;
  produto?: ProdutoTracking;
  icone?: boolean;
};

export function WhatsAppButton({
  mensagem,
  origem,
  children = "Falar no WhatsApp",
  className,
  produto,
  icone = true,
}: Props) {
  return (
    <a
      href={whatsappUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppLead(origem, produto)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.62_0.16_150)] px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:brightness-110 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      {icone && <MessageCircle className="size-4 shrink-0" />}
      <span className="truncate">{children}</span>
    </a>
  );
}
