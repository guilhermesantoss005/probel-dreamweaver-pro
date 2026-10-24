import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { openPrivacySettings } from "@/lib/privacy";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de privacidade | Probel Canasvieiras" },
    { name: "description", content: "Conheça o uso de dados de navegação e medição de cliques no WhatsApp pela Probel Canasvieiras e gerencie suas escolhas." },
    { property: "og:title", content: "Política de privacidade | Probel Canasvieiras" },
    { property: "og:description", content: "Dados, cookies, Google Analytics, Google Ads e suas escolhas de privacidade." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PrivacyPage,
});
function PrivacyPage() {
  return <section className="container-page py-14 sm:py-20">
    <h1 className="text-3xl font-bold text-navy">Política de privacidade</h1>
    <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
      <p>Atualizada em 24 de outubro de 2026. Esta política descreve a medição de navegação e contatos neste site da Probel Colchões de Canasvieiras.</p>
      <h2 className="text-xl font-semibold text-foreground">Dados e finalidades</h2>
      <p>Quando permitido, compartilhamos com Google Analytics e Google Ads páginas visitadas, buscas, produtos visualizados e cliques no WhatsApp, além de identificadores de cookies e dados técnicos do navegador e conexão. Esses dados medem visitas e interesse e ajudam a otimizar anúncios. Um clique no WhatsApp conta como conversão de contato, mas não confirma envio de mensagem ou compra. Não atribuímos valor monetário a esse clique.</p>
      <p>Não enviamos nome, e-mail ou telefone para correspondência publicitária. O conteúdo das conversas do WhatsApp não é capturado pela medição deste site. Ao abrir o WhatsApp, aplicam-se também as regras de privacidade desse serviço.</p>
      <h2 className="text-xl font-semibold text-foreground">Consentimento e suas escolhas</h2>
      <p>Nas regiões que exigem autorização, ou quando não conseguimos identificar a região, a medição fica bloqueada até você aceitar. Nas demais regiões, a medição fica habilitada salvo recusa ou sinal de opt-out aplicável. Respeitamos os sinais Global Privacy Control e Do Not Track. Cookies essenciais para guardar sua escolha não dependem da aceitação da medição.</p>
      <p>Guardamos neste navegador um identificador aleatório do visitante, data, região, escolhas e a versão e texto do aviso apresentado. Uma retirada posterior não apaga a evidência da aceitação anterior. A decisão se aplica também às outras abas deste site; eventos bloqueados não são reenviados após aceitação. Você pode apagar esses registros nas configurações do navegador.</p>
      <Button variant="outline" onClick={openPrivacySettings}>Configurações de privacidade</Button>
      <h2 className="text-xl font-semibold text-foreground">Destinatários e direitos</h2>
      <p>O Google pode processar os dados em outros países conforme suas políticas. Consulte <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">a política de privacidade do Google</a> e <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="underline">as preferências de anúncios do Google</a>. Para dúvidas sobre seus dados ou solicitar acesso, correção ou exclusão, fale com a loja pela página Contato.</p>
    </div>
  </section>;
}