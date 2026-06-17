# Broken-links fix — change log

Generated after fixing internal links flagged by `mint broken-links`.
Definitive validation: re-ran `mint broken-links`.

## Summary

| | Before | After | Fixed |
|---|---|---|---|
| Broken links | 604 | 150 | 454 (75%) |
| Files affected | 272 | 121 | |

- **changelog: 175 → 0** (fully resolved)
- Tooling: `scripts/fix_internal_links.py`, `scripts/fix_reference_links.py` (re-runnable; review files `scripts/internal_link_remap.md`, `scripts/reference_link_remap.md`)
- Validation universe = **every `.mdx` on disk** (a `hidden: true` page is still a valid URL, so the nav/sitemap under-counts). Reference URLs taken from the running `mint dev` sitemap. Ambiguous cases confirmed against the **live site** (online).
- **No new broken links introduced**: every applied target was verified to exist before writing.

---

## ✅ What WAS changed (454 links)

### 1. Doc links with wrong version or slug (~250)
Resolved each broken doc link to a real page with the same product + slug, preferring: **the linking page's own version → base (non-versioned) → the single version where it exists**. Ambiguous (same slug in several versions, none matching) was NOT guessed.
- `/marketing-solutions/v2020.10/docs/analytics` → `/marketing-solutions/v2020.07/docs/analytics`
- `/retail-media/docs/status` → `/retail-media/v2024.10/docs/status`

### 2. changelog (175) → external production URL
The changelog section does **not** exist in this project (no `changelog/` pages, not referenced in `docs.json`). Repointed to `https://developers.criteo.com/<product>/changelog...` (verified HTTP 200). Both markdown `](...)` and HTML `href="..."` forms handled.

### 3. Old product/version prefixes normalized (these were internal, not external)
- `retail-media-delivery/[retail-media/]docs/` → `retailer-integration/docs/` (old ReadMe slug for retailer integration)
- `retailer-integration/v1.1|v1.2/docs/` → `retailer-integration/docs/` (base)
- `retail-media/v2025-preview/docs/` → `retail-media/v2026-preview/docs/`
- `criteo-preprod/v2/docs/` → `marketing-solutions/v2026-preview/docs/`
- `/retailer-integration/edit/...` → `/retailer-integration/docs/...` (ReadMe edit artifact)

### 4. API reference (OpenAPI-generated) — 16
Reference pages are auto-generated from `openapi/<product>/<version>/openapi.yaml` (configured in `docs.json`); URLs are `/<product>-<version>/<tag-kebab>/<operationId-kebab>`. Old ReadMe slugs that equal an operationId were remapped:
- `…/reference/gettoken` → `…-v2026-01/authorization/get-token`
- `…/reference/listadvertisers` → `…-v2026-01/advertiser/list-advertisers`
- also: `getmarketplaceadvertisers`, `pausepromotedproducts`, `unpausepromotedproducts`, `createcreative`, `getcreative`, `searchaccountcreatives`
- Generic index slugs (`campaigns`, `accounts`, …) were **excluded** (would mis-match a same-named operation).

### 5. Slug renames (each target verified on disk)
`feed-parameters`→`product-feed-parameters`, `account-endpoints`→`accounts-endpoints`, `datasets-1`→`datasets`, `dataset-parameters-archived`→`dataset-parameters`, `feed-upload-guide`→`product-upload-guide`, `introduction-to-beacons-copy`→`introduction-to-beacons`, `line-item-endpoints`→`line-items-endpoints`, `async-audience-performance`→`audience-performance`, `offsite-for-hybrid-apps`→`onetag-offsite-for-hybrid-apps`, `rate-limits-v2`→`rate-limits`, `metrics-and-dimensions-ssp-2`→`metrics-and-dimensions-ssp`, `introduction`→`introduction-1` (retailer-integration).
Localized video variants: `*-app-androidkorean`→`*-app-android-korean`, `*-app-ioskorean`→`*-app-ios-korean`, `*-specifications-japanese`→`*-specification-japanese`, `*-guide-desktopmobile-(ja|ko)`→`*-desktopmobile-(ja|ko)`, etc.
**`universal-beacons`→`legacy-universal-beacons`** — confirmed by the live site's 301 redirect (online lookup).

### 6. Relative links → absolute (target verified)
`qa-checklists.mdx` bare links like `](sponsored-products-1)` → `](/retailer-integration/docs/sponsored-products-1)` (10), plus `beacon-types` self-link.

### 7. Ambiguous picked
`/marketing-solutions/docs/migration-faq` (exists in v2023.07 & v2023.10) → **v2023.10**.

---

## ⏳ What was NOT changed (150 links remaining)

### A. API reference — 101
- **Bare** `…/reference/` (no operation): no target to map to.
- **Path-encoded** old ReadMe slugs (`apiv1oauth2tokenpost`, `accountsapi_getapiv1external…`, `post_preview-…`): encode method+path, do **not** match an operationId. Resolving them needs heuristic path→operation matching (risk of a wrong-but-valid target) or manual mapping. Left untouched to avoid misleading links.

### B. Doc pages that don't exist / ambiguous — 45
Distinct slugs: {'oauth-app-client-credentials': 5, 'oauth-app-authorization-code': 5, 'get-report': 3, 'oa-line-items': 3, 'apiv1oauth2tokenpost': 2, 'demand-side-analytics-get-started': 2, 'analytics': 2, 'get-started': 2, 'product-importer-guide': 2, 'feed-definition': 2, 'retail-media-beacons': 2, 'introduction': 2, 'migration-guide-statistics-v1-to-v2020-10': 1, 'transactionids-transaction-id-report': 1, 'discuss': 1, 'overview': 1, 'get-an-operationtoken-product-importer-api': 1, 'get-report-status-using-the-operationtoken-product-importer-api': 1, 'format-overview-japanese': 1, 'commerce-video-spotlight-japanese': 1, 'feed-product-data': 1, 'ad-request-best-practices': 1, 'local-inventory': 1, 'product-data-examples': 1, 'video-player-implementation-app-ios-japanese': 1}
- `oauth-app-client-credentials` / `oauth-app-authorization-code` linked from **marketing-solutions** pages: these pages exist only in **retail-media**, so there is no MS target (likely a wrong source link).
- `get-report`, `oa-line-items`, `demand-side-analytics-get-started`, `feed-definition`, `retail-media-beacons`, `analytics`, `get-started`, `product-importer-guide`, `feed-product-data`, `local-inventory`, `format-overview-japanese`, `commerce-video-spotlight-japanese`, the `*operationtoken*` recipes, `migration-guide-statistics-v1-to-v2020-10`, `transactionids-transaction-id-report`: no matching page exists in the project.
- `discuss`: ReadMe "discuss" feature — no Mintlify equivalent.

### C. External / malformed — 4
Real external links (`api.*.criteo.com`, developer.mozilla.org). Left as-is; one is malformed `(<https://…>)` and should be cleaned by hand.

---

## Appendix — remaining links by file

### Reference (101)
- `marketing-solutions/docs/api-error-types.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/docs/authentication.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/docs/catalog.mdx`
  - `/marketing-solutions/v2026-preview/reference/submitcatalogproductsbatch`
- `marketing-solutions/docs/get-api-credentials.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/docs/getting-realtime-mpo-statistics.mdx`
  - `/marketing-solutions/v2026-preview/reference/getrealtimeproduct`
- `marketing-solutions/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2026.01/reference`
- `marketing-solutions/v2020.07/docs/authentication.mdx`
  - `/marketing-solutions/v2020.07/reference/authorization-1`
- `marketing-solutions/v2020.07/docs/budgets-get-existing-budgets.mdx`
  - `/marketing-solutions/v2020.07/reference/campaigns#budgets_get`
- `marketing-solutions/v2020.07/docs/get-existing-campaigns.mdx`
  - `/marketing-solutions/v2020.07/reference/campaigns`
- `marketing-solutions/v2020.07/docs/managing-users-in-an-audience.mdx`
  - `/marketing-solutions/v2020.07/reference/audiences#audiences_addremoveuserstoaudience`
- `marketing-solutions/v2020.07/docs/onboarding-checklist.mdx`
  - `/marketing-solutions/v2020.07/reference/authorization-1`
- `marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx`
  - `/marketing-solutions/v2020.07/reference/authorization-1`
  - `/marketing-solutions/v2020.07/reference/authorization-1`
- `marketing-solutions/v2023.07/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2023.07/docs/mapi-and-mapi-crp-users.mdx`
  - `/marketing-solutions/v2020.07/reference/apiv1oauth2tokenpost`
  - `/marketing-solutions/v2023.01/reference/post_preview-catalog-products-batch`
- `marketing-solutions/v2023.07/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2023.07/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2023.07/reference`
- `marketing-solutions/v2023.10/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2023.10/docs/mapi-and-mapi-crp-users.mdx`
  - `/marketing-solutions/v2020.07/reference/apiv1oauth2tokenpost`
  - `/marketing-solutions/v2023.01/reference/post_preview-catalog-products-batch`
- `marketing-solutions/v2023.10/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2023.10/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2024.01/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2024.01/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2024.01/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2024.04/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2024.04/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2024.04/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2024.07/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2024.07/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2024.07/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2024.10/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2024.10/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2024.10/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2025.01/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2025.01/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2025.01/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2025.04/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2025.04/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2025.04/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2025.07/docs/api-error-types.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/v2025.07/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2025.07/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2025.07/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.07/reference`
- `marketing-solutions/v2025.10/docs/api-error-types.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/v2025.10/docs/api-troubleshooting-tips.mdx`
  - `/marketing-solutions/reference-link/apiportfolioget`
- `marketing-solutions/v2025.10/docs/authentication.mdx`
  - `/marketing-solutions/reference/apiv1oauth2tokenpost`
- `marketing-solutions/v2025.10/docs/start-using-your-api-connection.mdx`
  - `/marketing-solutions/reference/apiportfolioget`
- `marketing-solutions/v2025.10/docs/versioning-policy.mdx`
  - `/marketing-solutions/v2025.10/reference`
- `marketing-solutions/v2026-preview/docs/mpo-real-time-asynchronous-api.mdx`
  - `/marketing-solutions/v2026-preview/reference/getrealtimeproduct`
  - `/marketing-solutions/v2026-preview/reference/createrealtimeproductreport`
  - `/marketing-solutions/v2026-preview/reference/getrealtimeproductjob`
  - `/marketing-solutions/v2026-preview/reference/getrealtimeproduct`
- `retail-media/docs/account-creation-and-management-private-market.mdx`
  - `/retail-media/reference/`
- `retail-media/docs/account-fees.mdx`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-search`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-update`
- `retail-media/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/`
- `retail-media/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/docs/escalation-guidelines.mdx`
  - `/retail-media/reference/apiv1oauth2tokenpost`
- `retail-media/docs/oauth-app-authorization-code-pkce-setup.mdx`
  - `/retail-media/reference/apiv1oauth2tokenpost`
- `retail-media/docs/retailers.mdx`
  - `/retail-media/reference/`
- `retail-media/v2024.10/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccounts`
- `retail-media/v2024.10/docs/brands.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccountbrandsbyaccountid`
- `retail-media/v2024.10/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/v2024.10/docs/retailers.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccountretailersbyaccountid`
- `retail-media/v2025.01/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.01/docs/brands.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccountbrandsbyaccountid`
- `retail-media/v2025.01/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/v2025.01/docs/retailers.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.04/docs/account-creation-and-management-private-market.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.04/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.04/docs/brands.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccountbrandsbyaccountid`
- `retail-media/v2025.04/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/v2025.04/docs/retailers.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.07/docs/account-creation-and-management-private-market.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.07/docs/account-fees.mdx`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-search`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-update`
- `retail-media/v2025.07/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.07/docs/brands.mdx`
  - `/retail-media/reference/accountsapi_getapiv1externalaccountbrandsbyaccountid`
- `retail-media/v2025.07/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/v2025.07/docs/escalation-guidelines.mdx`
  - `/retail-media/reference/apiv1oauth2tokenpost`
- `retail-media/v2025.07/docs/retailers.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.10/docs/account-creation-and-management-private-market.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.10/docs/account-fees.mdx`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-search`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-update`
- `retail-media/v2025.10/docs/accounts-endpoints.mdx`
  - `/retail-media/reference/`
- `retail-media/v2025.10/docs/criteo-api-swagger.mdx`
  - `/retail-media/reference`
- `retail-media/v2025.10/docs/escalation-guidelines.mdx`
  - `/retail-media/reference/apiv1oauth2tokenpost`
- `retail-media/v2025.10/docs/oauth-app-authorization-code-pkce-setup.mdx`
  - `/retail-media/reference/apiv1oauth2tokenpost`
- `retail-media/v2025.10/docs/retailers.mdx`
  - `/retail-media/reference/`
- `retail-media/v2026-preview/docs/account-creation-management-third-party.mdx`
  - `/retail-media/reference/`
- `retail-media/v2026-preview/docs/account-fees.mdx`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-search`
  - `/retail-media/v2025-preview/reference/post_preview-retail-media-accounts-fees-update`
- `retail-media/v2026-preview/docs/insights-share-of-voice.mdx`
  - `/retail-media/v2026-preview/reference/generateshareofvoiceinsight`
- `retail-media/v2026-preview/docs/marketplace.mdx`
  - `/retail-media/v2026-preview/reference/offersetbbwv1`
  - `/retail-media/v2026-preview/reference/offerupdatev1`
- `retail-media/v2026-preview/docs/store-inventory.mdx`
  - `/retail-media/v2026-preview/reference/upsertstoreinventorypermerchantid`
  - `/retail-media/v2026-preview/reference/deletestoreinventorypermerchantid`

### Doc / other (45)
- `marketing-solutions/docs/authentication.mdx`
  - `/marketing-solutions/docs/apiv1oauth2tokenpost`
- `marketing-solutions/v2020.07/docs/migration-guide-for-mapi-users.mdx`
  - `/marketing-solutions/docs/migration-guide-statistics-v1-to-v2020-10`
  - `/marketing-solutions/docs/transactionids-transaction-id-report`
- `marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx`
  - `/marketing-solutions/discuss`
- `marketing-solutions/v2023.07/docs/rate-limits.mdx`
  - `/marketing-solutions/v2023.07/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2023.07/docs/oauth-app-authorization-code`
- `marketing-solutions/v2023.10/docs/rate-limits.mdx`
  - `/marketing-solutions/v2023.10/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2023.10/docs/oauth-app-authorization-code`
- `marketing-solutions/v2024.01/docs/rate-limits.mdx`
  - `/marketing-solutions/v2024.01/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.01/docs/oauth-app-authorization-code`
- `marketing-solutions/v2024.04/docs/rate-limits-1.mdx`
  - `/marketing-solutions/v2024.04/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.04/docs/oauth-app-authorization-code`
- `marketing-solutions/v2024.07/docs/rate-limits.mdx`
  - `/marketing-solutions/v2024.07/docs/oauth-app-client-credentials`
  - `/marketing-solutions/v2024.07/docs/oauth-app-authorization-code`
- `marketing-solutions/v2025.10/docs/authentication.mdx`
  - `/marketing-solutions/docs/apiv1oauth2tokenpost`
- `marketing-solutions/v2026-preview/docs/async-campaign-statistics.mdx`
  - `/criteo-preprod/v2/docs/get-report`
- `marketing-solutions/v2026-preview/docs/audience-performance.mdx`
  - `/criteo-preprod/v2/docs/get-report`
- `marketing-solutions/v2026-preview/docs/campaign-statistics.mdx`
  - `/criteo-preprod/v2/docs/get-report`
- `marketing-solutions/v2026-preview/docs/introduction.mdx`
  - `/marketing-solutions/docs/overview`
- `retail-media/docs/account-level-report.mdx`
  - `/retail-media/update/docs/demand-side-analytics-get-started#/`
- `retail-media/docs/retailer-cpc-rate-cards.mdx`
  - `/retail-media/docs/oa-line-items`
- `retail-media/v2025.07/docs/retailer-cpc-rate-cards.mdx`
  - `/retail-media/docs/oa-line-items`
- `retail-media/v2025.10/docs/retailer-cpc-rate-cards.mdx`
  - `/retail-media/docs/oa-line-items`
- `retail-media/v2026-preview/docs/accounts.mdx`
  - `/retail-media/update/docs/demand-side-analytics-get-started#/`
  - `/retail-media/update/docs/analytics#/`
  - `/retail-media/update/docs/analytics#/`
- `retail-media/v2026-preview/docs/how-to-use-operation-tokens.mdx`
  - `/v2025-preview/recipes/get-an-operationtoken-product-importer-api`
  - `/v2025-preview/recipes/get-report-status-using-the-operationtoken-product-importer-api`
- `retail-media/v2026-preview/docs/metrics-and-dimensions-dsp.mdx`
  - `/retail-media/docs/get-started`
- `retail-media/v2026-preview/docs/overview.mdx`
  - `/retail-media/docs/get-started#get-status-of-a-specific-report`
- `retailer-integration/docs/api-response-structure-japanese.mdx`
  - `/retailer-integration/docs/format-overview-japanese`
  - `/retailer-integration/docs/commerce-video-spotlight-japanese`
- `retailer-integration/docs/feed-best-practices.mdx`
  - `/retailer-integration/product-importer-guide`
- `retailer-integration/docs/integration-process.mdx`
  - `/retailer-integration/docs/feed-definition`
- `retailer-integration/docs/mediamarkt-belgium.mdx`
  - `/retailer-integration/docs/feed-definition`
- `retailer-integration/docs/migrating-from-epsilon-retail-media-citrusad.mdx`
  - `/retailer-integration/docs/feed-product-data`
  - `/retailer-integration/docs/ad-request-best-practices`
- `retailer-integration/docs/product-feed-examples.mdx`
  - `/retailer-integration/docs/local-inventory`
- `retailer-integration/docs/product-upload-guide.mdx`
  - `/retailer-integration/docs/product-data-examples`
- `retailer-integration/docs/sponsored-products.mdx`
  - `/retailer-integration/docs/retail-media-beacons`
- `retailer-integration/docs/video-player-implementation-appandroid-japanese.mdx`
  - `/retailer-integration/video-player-implementation-app-ios-japanese`
- `retailer-integration/q4-2025/docs/feed-best-practices.mdx`
  - `/retailer-integration/product-importer-guide`
- `retailer-integration/q4-2025/docs/integration-process.mdx`
  - `/retail-media-delivery/docs/introduction`
- `retailer-integration/q4-2025/docs/overview.mdx`
  - `/retail-media-delivery/docs/introduction`
- `retailer-integration/q4-2025/docs/sponsored-products.mdx`
  - `/retail-media-delivery/docs/retail-media-beacons`

### External (4)
- `retail-media/v2026-preview/docs/marketplace.mdx`
  - `api.us.criteo.com`
  - `api.as.criteo.com`
  - `api.eu.criteo.com`
- `retailer-integration/docs/video-player-implementation-desktopmobile-japanese.mdx`
  - `(<https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver>)`
