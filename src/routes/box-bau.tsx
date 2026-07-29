import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { porCategoria } from "@/data/products";

export const Route = createFileRoute("/box-bau")({
  head: () => ({
    meta: [
      { title: "Box Baú | Probel Store" },
      {
        name: "description",
        content: "Box baú com espaço interno para armazenamento. Consulte medidas pelo WhatsApp.",
      },
      { property: "og:title", content: "Box Baú | Probel Store" },
      { property: "og:description", content: "Bases box baú com espaço extra de armazenamento." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Box Baú"
      descricao="Espaço extra de armazenamento sem abrir mão do conforto."
      produtos={porCategoria("box-bau")}
    />
  ),
});