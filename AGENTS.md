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

- Render one Google tag element and consent bootstrap in the server-side head using public constants from src/config/analytics.ts; activate its data-src only after the same-origin regional check and latest privacy choice permit tracking, because unconditional script loading would transmit before consent. Never inject a second element or use env vars for public IDs.
- Keep consent evidence (visitor, timestamps, region, notice and choices, including earlier acceptance after withdrawal) in browser privacy records, and gate every event using the latest choice; synchronize tabs and never replay blocked business events.
- Send the direct Google Ads WhatsApp conversion through the central typed helper, while retaining GA4 generate_lead for analytics; do not import the same GA4 outcome as another primary Ads conversion because that duplicates bidding outcomes.
- Send analytics events only through the typed helpers in `src/lib/analytics.ts` (GA4 recommended names: `search`, `view_item`, `generate_lead`); every `WhatsAppButton` needs an `origem` value, since `generate_lead` is the Google Ads conversion. The tracking plan lives in `.telemetry/tracking-plan.yaml`.
