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

- Render one Google tag (`<script async src=".../gtag/js?id=G-...">`) plus the Consent Mode v2 bootstrap in the server-side head, using the public constants in `src/config/analytics.ts`. Load gtag.js unconditionally on every page: Google's tag checker reads the served HTML, and Consent Mode, not script gating, controls what Google may store. Order: `consent default` (denied with `region: CONSENT_REGIONS`, then granted for everywhere else) → saved-choice `consent update` → `js` → `config` G-31EFTQ7Q9H → `config` AW-16680866532. Never set `ga-disable-*` (it kills the tag entirely, so even cookieless pings stop), never use a `data-src` placeholder, never use env vars for public IDs, and never inject a second tag.
- Only the listed EU/EEA/UK/CH regions require prior consent; an unknown region (`null`) is not regulated. Detect the visitor region for the privacy notice via the `getVisitorRegion` server function (Vercel `x-vercel-ip-country`, Cloudflare `cf-ipcountry`), never via `/cdn-cgi/trace`, which only exists on Cloudflare and returns 404 on the Vercel ads domain.
- Keep consent evidence (visitor, timestamps, region, notice and choices, including earlier acceptance after withdrawal) in browser privacy records, and gate every event using the latest choice; synchronize tabs and never replay blocked business events.
- Send the direct Google Ads WhatsApp conversion through the central typed helper, while retaining GA4 generate_lead for analytics; do not import the same GA4 outcome as another primary Ads conversion because that duplicates bidding outcomes.
- Send analytics events only through the typed helpers in `src/lib/analytics.ts` (GA4 recommended names: `search`, `view_item`, `generate_lead`); every `WhatsAppButton` needs an `origem` value, since `generate_lead` is the Google Ads conversion. The tracking plan lives in `.telemetry/tracking-plan.yaml`.
