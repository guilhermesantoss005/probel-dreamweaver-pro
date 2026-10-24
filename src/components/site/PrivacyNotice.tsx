import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CONSENT_NOTICE, requiresConsent } from "@/config/consent";
import { readConsent, resolveVisitorRegion, saveConsent } from "@/lib/privacy";

export function PrivacyNotice() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const sync = () => {
      const state = window.probelPrivacy;
      setOpen(Boolean(state?.ready && requiresConsent(state.region) && !readConsent()?.history.length));
    };
    const show = () => setOpen(true);
    sync();
    window.addEventListener("probel:privacy-change", sync);
    window.addEventListener("probel:privacy-settings", show);
    void resolveVisitorRegion();
    return () => {
      window.removeEventListener("probel:privacy-change", sync);
      window.removeEventListener("probel:privacy-settings", show);
    };
  }, []);
  if (!open) return null;
  function choose(choice: "granted" | "denied") {
    if (!saveConsent(choice)) { setError(true); return; }
    setError(false);
    setOpen(false);
  }
  return (
    <section aria-label="Preferências de privacidade" className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] overflow-y-auto border-t border-border bg-background text-foreground shadow-card">
      <div className="container-page flex flex-col gap-4 py-5 lg:flex-row lg:items-center">
        <div className="flex-1">
          <h2 className="text-base font-semibold">Sua privacidade</h2>
          <p className="mt-2 text-sm text-muted-foreground">{CONSENT_NOTICE.text}</p>
          <Link to="/privacidade" className="mt-2 inline-block text-sm underline">Política de privacidade</Link>
          {error && <p role="alert" className="mt-2 text-sm text-destructive">Não foi possível salvar sua escolha. A medição permanece bloqueada; permita o armazenamento deste site e tente novamente.</p>}
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button variant="outline" onClick={() => choose("denied")}>Recusar</Button>
          <Button variant="outline" onClick={() => choose("granted")}>Aceitar</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>Fechar</Button>
        </div>
      </div>
    </section>
  );
}