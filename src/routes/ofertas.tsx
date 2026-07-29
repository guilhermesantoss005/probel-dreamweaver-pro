import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { ofertas } from "@/data/products";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      { title: "Ofertas | Probel Store" },
      {
        name: "description",
        content: "Produtos com condições especiais selecionados pela loja. Consulte pelo WhatsApp.",
      },
      { property: "og:title", content: "Ofertas | Probel Store" },
      { property: "og:description", content: "Condições especiais em colchões e conjuntos box." },
    ],
  }),
  component: () => (
    <CategoryPage
      titulo="Ofertas"
      descricao="Seleção de produtos com condições especiais. Consulte disponibilidade com nossa equipe."
      produtos={ofertas()}
    />
  ),
});