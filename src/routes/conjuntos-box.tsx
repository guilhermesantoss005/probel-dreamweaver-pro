import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { porCategoria } from "@/data/products";

export const Route = createFileRoute("/conjuntos-box")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Conjuntos Box | Probel Store" },
      {
        name: "description",
        content: "Conjuntos box com colchão e base. Consulte medidas e condições com nossa equipe.",
      },
      { property: "og:title", content: "Conjuntos Box | Probel Store" },
      { property: "og:description", content: "Conjuntos box com colchão e base para o seu quarto." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Conjuntos Box"
      descricao="Colchão e base em um conjunto pronto para o seu quarto."
      produtos={porCategoria("conjuntos-box")}
    />
  ),
});