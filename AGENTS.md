<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Load the public GA4 measurement ID through a validated server-function boundary and initialize analytics once in the root layout; this keeps runtime configuration available after publish without exposing credentials or duplicating tags.
- Send analytics events only through the typed helpers in `src/lib/analytics.ts` (GA4 recommended names: `search`, `view_item`, `generate_lead`); every `WhatsAppButton` needs an `origem` value, since `generate_lead` is the Google Ads conversion. The tracking plan lives in `.telemetry/tracking-plan.yaml`.
