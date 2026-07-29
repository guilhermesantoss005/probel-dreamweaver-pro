import { createFileRoute } from "@tanstack/react-router";
import lojaImg from "@/assets/loja.jpg";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MSG_GERAL, site } from "@/config/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | Probel Store" },
      {
        name: "description",
        content: "Conheça nossa loja especializada em colchões, conjuntos box e produtos para o sono.",
      },
      { property: "og:title", content: "Sobre Nós | Probel Store" },
      { property: "og:description", content: "Loja especializada em soluções para o sono e o bem-estar." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <section className="container-page py-14 sm:py-20">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Mais conforto para a sua rotina</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Somos uma loja especializada em soluções para o sono e o bem-estar. Nosso objetivo é oferecer
        atendimento próximo, produtos de qualidade e orientação para que cada cliente encontre o
        colchão ideal.
      </p>
      <img
        src={lojaImg}
        alt="Interior da loja"
        loading="lazy"
        width={1408}
        height={944}
        className="mt-10 w-full rounded-2xl object-cover shadow-card"
      />
      <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Unidade", site.unidade],
          ["Endereço", site.endereco],
          ["Cidade", site.cidade],
          ["Horário", site.horario],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-border p-5">
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
            <dd className="mt-1 font-semibold text-navy">{v}</dd>
          </div>
        ))}
      </dl>
      <WhatsAppButton mensagem={MSG_GERAL} className="mt-10 px-7 py-3.5">
        Falar com a loja
      </WhatsAppButton>
    </section>
  );
}