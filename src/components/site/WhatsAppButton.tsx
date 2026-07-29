import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  mensagem: string;
  children?: React.ReactNode;
  className?: string;
  evento?: "Contact" | "Lead" | "InitiateCheckout";
  produto?: string;
  icone?: boolean;
};

export function WhatsAppButton({
  mensagem,
  children = "Falar no WhatsApp",
  className,
  evento = "Contact",
  produto,
  icone = true,
}: Props) {
  return (
    <a
      href={whatsappUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(evento, produto ? { content_name: produto } : {})}
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