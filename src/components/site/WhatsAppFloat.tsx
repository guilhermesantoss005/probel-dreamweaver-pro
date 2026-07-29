import { MessageCircle } from "lucide-react";
import { MSG_GERAL, whatsappUrl } from "@/config/site";
import { track } from "@/lib/analytics";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(MSG_GERAL)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => track("Contact", { origem: "botao_flutuante" })}
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[oklch(0.62_0.16_150)] text-white shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}