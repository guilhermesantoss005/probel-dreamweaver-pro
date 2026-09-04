import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { porCategoria } from "@/data/products";

export const Route = createFileRoute("/cabeceiras")({
  head: () => ({
    meta: [
      { title: "Cabeceiras | Probel Store" },
      {
        name: "description",
        content: "Cabeceiras estofadas para compor o ambiente. Consulte cores e medidas.",
      },
      { property: "og:title", content: "Cabeceiras | Probel Store" },
      { property: "og:description", content: "Cabeceiras estofadas para completar sua cama." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Cabeceiras"
      descricao="Acabamento estofado para compor o ambiente do seu quarto."
      produtos={porCategoria("cabeceiras")}
      varianteCard="cabeceira"
    />
  ),
});