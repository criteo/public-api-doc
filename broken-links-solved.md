# Broken links resolvidos (não-API)

Correções mecânicas (🟢) aplicadas a partir de [broken-links-non-api-todo.md](broken-links-non-api-todo.md).
Cada alvo foi confirmado existente no disco antes de gravar.

## ✅ Resolvidos

### Prefixo `/update/` + sufixo `#/` (artefato ReadMe) — 3 links
- [retail-media/docs/account-level-report.mdx](retail-media/docs/account-level-report.mdx)
  - `/retail-media/update/docs/demand-side-analytics-get-started#/` → `/retail-media/docs/demand-side-analytics-get-started`
- [retail-media/v2026-preview/docs/accounts.mdx](retail-media/v2026-preview/docs/accounts.mdx)
  - `/retail-media/update/docs/demand-side-analytics-get-started#/` → `/retail-media/docs/demand-side-analytics-get-started`
  - `/retail-media/update/docs/analytics#/` (×2) → `/retail-media/docs/analytics`

### Falta `/docs/` no caminho — 3 links
- [retailer-integration/docs/feed-best-practices.mdx](retailer-integration/docs/feed-best-practices.mdx)
  - `/retailer-integration/product-importer-guide` → `/retailer-integration/docs/product-importer-guide`
- [retailer-integration/q4-2025/docs/feed-best-practices.mdx](retailer-integration/q4-2025/docs/feed-best-practices.mdx)
  - `/retailer-integration/product-importer-guide` → `/retailer-integration/q4-2025/docs/product-importer-guide`
- [retailer-integration/docs/video-player-implementation-appandroid-japanese.mdx](retailer-integration/docs/video-player-implementation-appandroid-japanese.mdx)
  - `/retailer-integration/video-player-implementation-app-ios-japanese` → `/retailer-integration/docs/video-player-implementation-app-ios-japanese`

### Markdown externo malformado — 1 link
- [retailer-integration/docs/video-player-implementation-desktopmobile-japanese.mdx](retailer-integration/docs/video-player-implementation-desktopmobile-japanese.mdx)
  - `[IntersectionObserver](\(\<https://…>\))` → `[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)`

### Slug antigo `retail-media-delivery` → `retailer-integration` — 2 links
- [retailer-integration/q4-2025/docs/integration-process.mdx](retailer-integration/q4-2025/docs/integration-process.mdx)
  - `/retail-media-delivery/docs/introduction` → `/retailer-integration/q4-2025/docs/introduction-1`
- [retailer-integration/q4-2025/docs/overview.mdx](retailer-integration/q4-2025/docs/overview.mdx)
  - `/retail-media-delivery/docs/introduction` → `/retailer-integration/q4-2025/docs/introduction-1`

---

**Subtotal mecânico: 10 links em 8 arquivos.**

---

### Slug renomeado — confirmado por redirect no site live — 7 links
Descobertos via `scripts/check_live_links.py` (segue o redirect do ReadMe live → slug canônico). Alvo confirmado no disco.
- [retail-media/docs/retailer-cpc-rate-cards.mdx](retail-media/docs/retailer-cpc-rate-cards.mdx) · [retail-media/v2025.07/docs/retailer-cpc-rate-cards.mdx](retail-media/v2025.07/docs/retailer-cpc-rate-cards.mdx) · [retail-media/v2025.10/docs/retailer-cpc-rate-cards.mdx](retail-media/v2025.10/docs/retailer-cpc-rate-cards.mdx)
  - `/retail-media/docs/oa-line-items` → `/retail-media/docs/onsite-sponsored-products-line-items`
- [retail-media/v2026-preview/docs/metrics-and-dimensions-dsp.mdx](retail-media/v2026-preview/docs/metrics-and-dimensions-dsp.mdx)
  - `/retail-media/docs/get-started` → `/retail-media/docs/demand-side-analytics-get-started`
- [retail-media/v2026-preview/docs/overview.mdx](retail-media/v2026-preview/docs/overview.mdx)
  - `/retail-media/docs/get-started#get-status-of-a-specific-report` → `/retail-media/docs/demand-side-analytics-get-started#get-status-of-a-specific-report` (âncora validada)
- [retailer-integration/docs/product-feed-examples.mdx](retailer-integration/docs/product-feed-examples.mdx)
  - `/retailer-integration/docs/local-inventory` → `/retailer-integration/docs/lookup-files`
- [retailer-integration/docs/product-upload-guide.mdx](retailer-integration/docs/product-upload-guide.mdx)
  - `/retailer-integration/docs/product-data-examples` → `/retailer-integration/docs/product-feed-examples`

---

**Total: 17 links corrigidos.** Os 404 confirmados (inclusive no live) ficaram em [404_links.md](404_links.md) pra decisão.
