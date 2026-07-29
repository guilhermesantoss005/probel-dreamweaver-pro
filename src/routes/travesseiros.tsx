import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { porCategoria } from "@/data/products";

export const Route = createFileRoute("/travesseiros")({
  head: () => ({
    meta: [
      { title: "Travesseiros | Probel Store" },
      {
        name: "description",
        content: "Travesseiros para apoio da cabeça e do pescoço. Consulte modelos disponíveis.",
      },
      { property: "og:title", content: "Travesseiros | Probel Store" },
      { property: "og:description", content: "Travesseiros para noites mais confortáveis." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Travesseiros"
      descricao="Apoio adequado para a cabeça e o pescoço, em modelos variados."
      produtos={porCategoria("travesseiros")}
    />
  ),
});