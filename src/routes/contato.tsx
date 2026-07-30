import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MSG_GERAL, site } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Probel Store" },
      {
        name: "description",
        content: "Fale com nossa equipe pelo WhatsApp, telefone ou e-mail e tire suas dúvidas.",
      },
      { property: "og:title", content: "Contato | Probel Store" },
      { property: "og:description", content: "Atendimento especializado pelo WhatsApp." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const infos = [
    { Icon: MapPin, label: "Endereço", valor: `${site.endereco} — ${site.cidade}` },
    { Icon: Phone, label: "Telefone", valor: site.telefone },
    { Icon: Mail, label: "E-mail", valor: site.email },
    { Icon: Clock, label: "Horário", valor: site.horario },
  ];

  return (
    <section className="container-page py-14 sm:py-20">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Fale com a nossa equipe</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Tire dúvidas, consulte disponibilidade ou solicite um orçamento pelo WhatsApp.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {infos.map(({ Icon, label, valor }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-border p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-accent">
              <Icon className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="font-semibold text-navy">{valor}</p>
            </div>
          </div>
        ))}
      </div>
      <WhatsAppButton mensagem={MSG_GERAL} evento="Lead" className="mt-10 px-7 py-3.5 text-base">
        Conversar pelo WhatsApp
      </WhatsAppButton>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Onde estamos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {site.endereco} — {site.cidade}
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa da loja"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0"
          />
        </div>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
        >
          Ver no Google Maps
        </a>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">{site.aviso}</p>
    </section>
  );
}