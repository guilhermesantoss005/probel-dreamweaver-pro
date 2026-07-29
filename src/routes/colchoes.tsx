import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { porCategoria } from "@/data/products";

export const Route = createFileRoute("/colchoes")({
  head: () => ({
    meta: [
      { title: "Colchões | Probel Store" },
      {
        name: "description",
        content: "Colchões de solteiro a king. Consulte medidas, conforto e condições pelo WhatsApp.",
      },
      { property: "og:title", content: "Colchões | Probel Store" },
      { property: "og:description", content: "Colchões de solteiro a king com atendimento especializado." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Colchões"
      descricao="Modelos para diferentes perfis de sono. Fale com nossa equipe para confirmar medidas e disponibilidade."
      produtos={porCategoria("colchoes")}
    />
  ),
});