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

- Render the Google tag in the server-side `<head>` of `src/routes/__root.tsx`, using the constants in `src/config/analytics.ts`. Never inject it from the client (`document.createElement`, `useEffect`) and never read the measurement ID from an environment variable: Google's tag checker reads the served HTML and does not wait for React to hydrate, and the Vercel deployment (the ads domain) has no env vars, so both approaches leave the site without a tag. The GA4 measurement ID is public browser configuration, not a credential. Keep exactly one Google tag per page.
- Send analytics events only through the typed helpers in `src/lib/analytics.ts` (GA4 recommended names: `search`, `view_item`, `generate_lead`); every `WhatsAppButton` needs an `origem` value, since `generate_lead` is the Google Ads conversion. The tracking plan lives in `.telemetry/tracking-plan.yaml`.
