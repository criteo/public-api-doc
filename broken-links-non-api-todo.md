
## 🟢 Correções mecânicas — ✅ FEITAS

Os 10 links mecânicos foram corrigidos e movidos para [broken-links-solved.md](broken-links-solved.md).

---

## 🟡 Provável (alvo plausível existe, mas precisa do seu OK)

### MS: `oauth-app-client-credentials` / `oauth-app-authorization-code` não existem em marketing-solutions
Em MS as duas estão consolidadas em **`oauth-app-implementation`**. As tabelas de rate-limits referenciam "Client Credentials" e "Authorization Code". Sugestão: apontar **ambos** para `/marketing-solutions/<versão>/docs/oauth-app-implementation` (confirmar que existe na versão; senão usar base `/marketing-solutions/docs/oauth-app-implementation`).
- [marketing-solutions/v2023.07/docs/rate-limits.mdx](marketing-solutions/v2023.07/docs/rate-limits.mdx)
- [marketing-solutions/v2023.10/docs/rate-limits.mdx](marketing-solutions/v2023.10/docs/rate-limits.mdx)
- [marketing-solutions/v2024.01/docs/rate-limits.mdx](marketing-solutions/v2024.01/docs/rate-limits.mdx)
- [marketing-solutions/v2024.04/docs/rate-limits-1.mdx](marketing-solutions/v2024.04/docs/rate-limits-1.mdx)
- [marketing-solutions/v2024.07/docs/rate-limits.mdx](marketing-solutions/v2024.07/docs/rate-limits.mdx)

### Variantes JP que não existem → apontar p/ a página base (não-JP)
- [retailer-integration/docs/api-response-structure-japanese.mdx](retailer-integration/docs/api-response-structure-japanese.mdx)
  - `/retailer-integration/docs/format-overview-japanese` → `/retailer-integration/docs/format-overview` *(não há variante JP)*
  - `/retailer-integration/docs/commerce-video-spotlight-japanese` → `/retailer-integration/docs/commerce-video-spotlight` *(idem)*

### RM `oa-line-items` (retailer-cpc-rate-cards) — slug não existe
Candidatos no disco: `onsite-display-line-items`, `line-items`. "oa" provavelmente = onsite advertising → sugiro `/retail-media/docs/onsite-display-line-items`. **Confirmar pelo contexto da frase.**
- [retail-media/docs/retailer-cpc-rate-cards.mdx](retail-media/docs/retailer-cpc-rate-cards.mdx)
- [retail-media/v2025.07/docs/retailer-cpc-rate-cards.mdx](retail-media/v2025.07/docs/retailer-cpc-rate-cards.mdx)
- [retail-media/v2025.10/docs/retailer-cpc-rate-cards.mdx](retail-media/v2025.10/docs/retailer-cpc-rate-cards.mdx)
  - `/retail-media/docs/oa-line-items` → `/retail-media/docs/onsite-display-line-items` *(verificar)*

### RM v2026-preview `get-started` — não existe página `get-started` em retail-media
Candidato mais próximo: `demand-side-analytics-get-started`. Confirmar se é esse o "get started" referido.
- [retail-media/v2026-preview/docs/metrics-and-dimensions-dsp.mdx](retail-media/v2026-preview/docs/metrics-and-dimensions-dsp.mdx)
  - `/retail-media/docs/get-started` → `/retail-media/docs/demand-side-analytics-get-started` *(verificar)*
- [retail-media/v2026-preview/docs/overview.mdx](retail-media/v2026-preview/docs/overview.mdx)
  - `/retail-media/docs/get-started#get-status-of-a-specific-report` → idem *(verificar âncora)*

### retailer-integration: slugs sem página exata, candidato próximo
- [retailer-integration/docs/integration-process.mdx](retailer-integration/docs/integration-process.mdx) · [retailer-integration/docs/mediamarkt-belgium.mdx](retailer-integration/docs/mediamarkt-belgium.mdx)
  - `/retailer-integration/docs/feed-definition` → candidatos: `product-feed-parameters` ou `dataset-parameters` *(verificar)*
- [retailer-integration/docs/product-upload-guide.mdx](retailer-integration/docs/product-upload-guide.mdx)
  - `/retailer-integration/docs/product-data-examples` → candidatos: `product-dataset-examples` ou `product-feed-examples` *(verificar)*
- [retailer-integration/docs/sponsored-products.mdx](retailer-integration/docs/sponsored-products.mdx)
  - `/retailer-integration/docs/retail-media-beacons` → candidato: `introduction-to-beacons` ou `beacon-types` *(verificar)*
- [retailer-integration/q4-2025/docs/sponsored-products.mdx](retailer-integration/q4-2025/docs/sponsored-products.mdx)
  - `/retail-media-delivery/docs/retail-media-beacons` → `/retailer-integration/docs/introduction-to-beacons` *(verificar)*

---

## 🔴 Sem alvo no projeto (remover o link, manter o texto) ou decidir

### ReadMe feature sem equivalente Mintlify
- [marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx](marketing-solutions/v2020.07/docs/partner-migration-guide-from-mapi-to-criteo-api.mdx)
  - `/marketing-solutions/discuss` → remover (era o "Discuss" do ReadMe)

### Prefixo de staging `criteo-preprod` / `get-report` inexistente
Não há página `get-report` em lugar nenhum. Provável link p/ host de preview que não foi migrado.
- [marketing-solutions/v2026-preview/docs/async-campaign-statistics.mdx](marketing-solutions/v2026-preview/docs/async-campaign-statistics.mdx)
- [marketing-solutions/v2026-preview/docs/audience-performance.mdx](marketing-solutions/v2026-preview/docs/audience-performance.mdx)
- [marketing-solutions/v2026-preview/docs/campaign-statistics.mdx](marketing-solutions/v2026-preview/docs/campaign-statistics.mdx)
  - `/criteo-preprod/v2/docs/get-report` → sem alvo; remover ou apontar p/ a página de relatório real *(decidir)*

### Páginas que não existem (nem variante próxima clara)
- [marketing-solutions/v2020.07/docs/migration-guide-for-mapi-users.mdx](marketing-solutions/v2020.07/docs/migration-guide-for-mapi-users.mdx)
  - `/marketing-solutions/docs/migration-guide-statistics-v1-to-v2020-10` → sem alvo
  - `/marketing-solutions/docs/transactionids-transaction-id-report` → sem alvo
- [marketing-solutions/v2026-preview/docs/introduction.mdx](marketing-solutions/v2026-preview/docs/introduction.mdx)
  - `/marketing-solutions/docs/overview` → não há `overview` em MS; remover ou apontar p/ `/marketing-solutions/v2026-preview/docs/introduction`
- [retailer-integration/docs/migrating-from-epsilon-retail-media-citrusad.mdx](retailer-integration/docs/migrating-from-epsilon-retail-media-citrusad.mdx)
  - `/retailer-integration/docs/feed-product-data` → sem alvo
  - `/retailer-integration/docs/ad-request-best-practices` → sem alvo
- [retailer-integration/docs/product-feed-examples.mdx](retailer-integration/docs/product-feed-examples.mdx)
  - `/retailer-integration/docs/local-inventory` → sem alvo

### Recipes `operationtoken` (caminho malformado, sem seção `recipes`)
- [retail-media/v2026-preview/docs/how-to-use-operation-tokens.mdx](retail-media/v2026-preview/docs/how-to-use-operation-tokens.mdx)
  - `/v2025-preview/recipes/get-an-operationtoken-product-importer-api` → sem alvo
  - `/v2025-preview/recipes/get-report-status-using-the-operationtoken-product-importer-api` → sem alvo

---

## ⚪ Externos / API-adjacente (revisar à mão)

- [retail-media/v2026-preview/docs/marketplace.mdx](retail-media/v2026-preview/docs/marketplace.mdx)
  - `api.us.criteo.com` / `api.as.criteo.com` / `api.eu.criteo.com` → hosts reais; provavelmente texto que virou link por engano. Formatar como `` `code` `` (não-link).
- `apiv1oauth2tokenpost` (forma **docs**, não `/reference/`) — adjacente a API, decisão sua:
  - [marketing-solutions/docs/authentication.mdx](marketing-solutions/docs/authentication.mdx) · [marketing-solutions/v2025.10/docs/authentication.mdx](marketing-solutions/v2025.10/docs/authentication.mdx)
    - `/marketing-solutions/docs/apiv1oauth2tokenpost` → provável destino é o endpoint de token na referência (get-token). Se for tratar como API, ignore aqui.
