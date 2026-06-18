# 404_links — links sem destino (decidir depois)

Todos verificados contra o site live (developers.criteo.com) via `scripts/check_live_links.py`.
Os `.mdx` **não foram alterados** — só listados aqui pra decisão.
"Substituto no repo" = página que existe no projeto e poderia receber o link, se você quiser.

## 404 no live também (página nunca existiu / não foi migrada)

- [marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx](marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx)
  - `/marketing-solutions/discuss` — feature "Discuss" do ReadMe, sem equivalente Mintlify
- [marketing-solutions/v2020.07/docs/migration-guide-for-mapi-users.mdx](marketing-solutions/v2020.07/docs/migration-guide-for-mapi-users.mdx)
  - `/marketing-solutions/docs/migration-guide-statistics-v1-to-v2020-10`
  - `/marketing-solutions/docs/transactionids-transaction-id-report`
- [marketing-solutions/v2026-preview/docs/introduction.mdx](marketing-solutions/v2026-preview/docs/introduction.mdx)
  - `/marketing-solutions/docs/overview` — substituto possível: `/marketing-solutions/v2026-preview/docs/introduction`
- [retailer-integration/docs/migrating-from-epsilon-retail-media-citrusad.mdx](retailer-integration/docs/migrating-from-epsilon-retail-media-citrusad.mdx)
  - `/retailer-integration/docs/feed-product-data`
  - `/retailer-integration/docs/ad-request-best-practices`
- [retailer-integration/docs/integration-process.mdx](retailer-integration/docs/integration-process.mdx) · [retailer-integration/docs/mediamarkt-belgium.mdx](retailer-integration/docs/mediamarkt-belgium.mdx)
  - `/retailer-integration/docs/feed-definition` — quebrado inclusive no live; substituto possível: `product-feed-parameters` ou `dataset-parameters`
- [retailer-integration/docs/sponsored-products.mdx](retailer-integration/docs/sponsored-products.mdx)
  - `/retailer-integration/docs/retail-media-beacons` — substituto possível: `introduction-to-beacons`
- [retailer-integration/q4-2025/docs/sponsored-products.mdx](retailer-integration/q4-2025/docs/sponsored-products.mdx)
  - `/retail-media-delivery/docs/retail-media-beacons` — idem

## oauth (rate-limits) — 404 no live também; substituto no repo: `oauth-app-implementation`

Em marketing-solutions as páginas `oauth-app-client-credentials` / `oauth-app-authorization-code` não existem (nem no live). A página consolidada `oauth-app-implementation` existe no repo.

- [marketing-solutions/v2023.07/docs/rate-limits.mdx](marketing-solutions/v2023.07/docs/rate-limits.mdx)
  - `/marketing-solutions/v2023.07/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2023.07/docs/oauth-app-authorization-code`
- [marketing-solutions/v2023.10/docs/rate-limits.mdx](marketing-solutions/v2023.10/docs/rate-limits.mdx)
  - `/marketing-solutions/v2023.10/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2023.10/docs/oauth-app-authorization-code`
- [marketing-solutions/v2024.01/docs/rate-limits.mdx](marketing-solutions/v2024.01/docs/rate-limits.mdx)
  - `/marketing-solutions/v2024.01/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.01/docs/oauth-app-authorization-code`
- [marketing-solutions/v2024.04/docs/rate-limits-1.mdx](marketing-solutions/v2024.04/docs/rate-limits-1.mdx)
  - `/marketing-solutions/v2024.04/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.04/docs/oauth-app-authorization-code`
- [marketing-solutions/v2024.07/docs/rate-limits.mdx](marketing-solutions/v2024.07/docs/rate-limits.mdx)
  - `/marketing-solutions/v2024.07/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.07/docs/oauth-app-authorization-code`

## Variantes de outro idioma (JP) faltando — 404 no live; substituto no repo: versão base (não-JP)

- [retailer-integration/docs/api-response-structure-japanese.mdx](retailer-integration/docs/api-response-structure-japanese.mdx)
  - `/retailer-integration/docs/format-overview-japanese` — substituto: `format-overview`
  - `/retailer-integration/docs/commerce-video-spotlight-japanese` — substituto: `commerce-video-spotlight`

## Redireciona pra lugar nenhum no live (projeto privado / home)

- [marketing-solutions/v2026-preview/docs/async-campaign-statistics.mdx](marketing-solutions/v2026-preview/docs/async-campaign-statistics.mdx) · [audience-performance.mdx](marketing-solutions/v2026-preview/docs/audience-performance.mdx) · [campaign-statistics.mdx](marketing-solutions/v2026-preview/docs/campaign-statistics.mdx)
  - `/criteo-preprod/v2/docs/get-report` — live redireciona pro login do ReadMe (projeto privado `criteo-preprod`), sem alvo público
- [retail-media/v2026-preview/docs/how-to-use-operation-tokens.mdx](retail-media/v2026-preview/docs/how-to-use-operation-tokens.mdx)
  - `/v2025-preview/recipes/get-an-operationtoken-product-importer-api` — live redireciona pra home `/`
  - `/v2025-preview/recipes/get-report-status-using-the-operationtoken-product-importer-api` — idem
