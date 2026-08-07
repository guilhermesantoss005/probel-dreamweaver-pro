import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { MSG_GERAL, site, whatsappUrl } from "@/config/site";

const institucional = [
  { to: "/sobre", label: "Sobre nós" },
  { to: "/colchoes", label: "Produtos" },
  { to: "/ofertas", label: "Ofertas" },
  { to: "/contato", label: "Contato" },
];

const ajuda = [
  { to: "/contato", label: "Política de privacidade" },
  { to: "/contato", label: "Trocas e devoluções" },
  { to: "/contato", label: "Perguntas frequentes" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-navy-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center rounded-xl bg-primary-foreground px-4 py-3">
            <img
              src={logoAsset.url}
              alt={`Logomarca ${site.nome}`}
              width={825}
              height={299}
              loading="lazy"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            {site.slogan}. {site.unidade}.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { href: site.instagram, Icon: Instagram, label: "Instagram" },
              { href: whatsappUrl(MSG_GERAL), Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Institucional
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {institucional.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Ajuda
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {ajuda.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-blue-soft" />
              <span>
                {site.endereco}
                <br />
                {site.cidade}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-blue-soft" />
              {site.telefone}
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-blue-soft" />
              {site.email}
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-blue-soft" />
              {site.horario}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.aviso}</p>
          <p>
            © {new Date().getFullYear()} {site.nome}
          </p>
        </div>
      </div>
    </footer>
  );
}