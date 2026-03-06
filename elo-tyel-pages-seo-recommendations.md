# Elo TyEL Pages – Schema, Alt Text & JSON-LD Recommendations

Analysis of the two Elo employer pages:

- **Ota tai siirrä TyEL-vakuutus**  
  https://www.elo.fi/fi-fi/tyonantaja/ota-tai-siirra-tyel-vakuutus  
  (GEO/navigation hub; same form for new + transfer)

- **TyEL-vakuutuksen siirto**  
  https://www.elo.fi/fi-fi/tyonantaja/tyel-vakuutuksen-siirto  
  (SEO page; ~90+30 searches/month, campaign landing)

Data sources: Superlines Elo MCP (technical analysis, schema optimizer), Bright Data scrape (content, images, tables).

---

## 1. Current schema overview

### 1.1 Ota tai siirrä TyEL-vakuutus

| Aspect | Status |
|--------|--------|
| **Existing JSON-LD** | 3 blocks: **WebPage** (with BreadcrumbList), **FAQPage** (6 questions), **Service** (TyEL ottaminen/siirto) |
| **Technical** | `lang="fi"`, canonical, meta description, robots index,follow, semantic HTML5 |
| **Schema quality (Superlines)** | Current ~75; optimizer suggests Organization, WebSite, interlinking, keep FAQPage |

**Strengths**

- FAQPage matches the “Usein kysytyt kysymykset TyEL-vakuutuksen ottamisesta” section and supports FAQ rich results.
- Service describes the page topic and provider (Elo, contact).
- BreadcrumbList is correct (Etusivu → Työnantaja → Ota tai siirrä TyEL-vakuutus).

**Gaps**

- No top-level **Organization** / **WebSite**; weaker entity graph.
- No structured data for the **hoitomaksu table** (palkkasumma vs perushoitomaksu).
- Organization name in optimizer output is “Elo Toimitilat”; should be “Työeläkeyhtiö Elo” (or the official legal name) for consistency.

### 1.2 TyEL-vakuutuksen siirto

| Aspect | Status |
|--------|--------|
| **Existing JSON-LD** | 1 block: **WebPage** (with BreadcrumbList only) |
| **Technical** | Same solid base: lang, canonical, meta, semantic HTML5 |
| **Schema quality (Superlines)** | Current ~60; optimizer suggests Organization, WebSite, **InsuranceProduct** + **Offer**, interlinking |

**Strengths**

- WebPage + breadcrumb are correct.
- Title/description align with “TyEL-vakuutuksen siirto” and “alan edullisin hoitomaksu”.

**Gaps**

- No **FAQPage** despite a long “Usein kysytyt kysymykset TyEL-vakuutuksen siirrosta” section (many questions).
- No **Service** or **InsuranceProduct** for the main offering.
- No structured data for:
  - **Siirtoaikataulu table** (deadline → effective date).
  - **Hoitomaksu table** (same as on the other page).

---

## 2. Image alt texts

From the scraped content (and inferred from context):

### 2.1 Good / acceptable

| Context | Alt text | Note |
|---------|----------|------|
| Hero / CTA | “Nainen hymyilee toimistolla” | Descriptive, on-topic. |
| Phone CTA | “Mies hymyilee kuulokkeet korvilla” | Clear and descriptive. |
| Työkyky section | “Kaksi miestä keskustelevat toimistolla” | Good. |
| Footer / social | “Elon logo”, “Facebook logo”, “Linkedin logo”, “Instagram logo”, “Youtube logo” | Clear and consistent. |
| Case story | “Veikkaus asiakastarina” | OK; could add “Asiakastarina: Veikkaus” if you want more context. |

### 2.2 To improve

| Context | Current (or observed) | Recommendation |
|---------|------------------------|----------------|
| Hullu Poro case | `asiakastarina_hullu_poro_799x600` (filename as alt) | Replace with descriptive alt, e.g. “Hullu Poro – asiakastarina työkykyjohtamisesta ja hyvinvoinnista” (or match the section heading). |
| Decorative / brand | “Sunleaf” | If decorative: `alt=""`. If brand: e.g. “Sunleaf – Elon brändikuva” so it’s consistent with other logos. |

### 2.3 Checklist

- [ ] Replace any filename-based alts (e.g. `asiakastarina_hullu_poro_799x600`) with short, descriptive Finnish text.
- [ ] Ensure all case study images have alts that mention company/theme (e.g. “Asiakastarina: [Yritys]” or “[Aihe] – [Yritys]”).
- [ ] Use `alt=""` only for purely decorative images; keep logo/social icons with concise alts as above.

---

## 3. JSON-LD for tables

Both pages contain tables that are good candidates for structured data: better understanding for search and potential for answers/snippets.

### 3.1 Table 1: Hoitomaksu (both pages)

**Caption (logical):** “Esimerkkejä Elon hoitomaksusta ilman alennuksia”  
**Columns:** Yrityksen palkkasumma | Perushoitomaksu  
**Rows:** 10 000 € → 2,50 €; 25 000 € → 6,25 €; 50 000 € → 12,49 €; 75 000 € → 57,92 €; 100 000 € → 129,46 €.

**Option A – Schema.org `Table` + `DefinedTermSet` (semantic)**

```json
{
  "@context": "https://schema.org",
  "@type": "Table",
  "name": "Esimerkkejä Elon hoitomaksusta ilman alennuksia",
  "about": {
    "@type": "DefinedTermSet",
    "name": "TyEL hoitomaksu 2026",
    "description": "Vuoden 2026 esimerkit ilman asiakaskohtaisia pysyvyys- ja suuruusalennuksia"
  },
  "tableDirection": "https://schema.org/LtrDirection"
}
```

Schema.org `Table` does not define column/row cells in detail. For **machine-readable rows**, use Option B.

**Option B – `ItemList` (recommended for data)**

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Esimerkkejä Elon hoitomaksusta ilman alennuksia (2026)",
  "description": "Vuoden 2026 esimerkit ilman asiakaskohtaisia pysyvyys- ja suuruusalennuksia.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "10 000 euroa", "description": "Perushoitomaksu 2,50 euroa" },
    { "@type": "ListItem", "position": 2, "name": "25 000 euroa", "description": "Perushoitomaksu 6,25 euroa" },
    { "@type": "ListItem", "position": 3, "name": "50 000 euroa", "description": "Perushoitomaksu 12,49 euroa" },
    { "@type": "ListItem", "position": 4, "name": "75 000 euroa", "description": "Perushoitomaksu 57,92 euroa" },
    { "@type": "ListItem", "position": 5, "name": "100 000 euroa", "description": "Perushoitomaksu 129,46 euroa" }
  ]
}
```

Link to the page (e.g. from `WebPage` or `Service`) with something like:

```json
"mainEntity": { "@id": "https://www.elo.fi/fi-fi/tyonantaja/tyel-vakuutuksen-siirto#hoitomaksutaulukko" }
```

or `about` on the WebPage.

### 3.2 Table 2: Siirtoaikataulu (only on TyEL-vakuutuksen siirto)

**Caption (logical):** “Milloin TyEL-vakuutuksesi siirtyy”  
**Columns:** Jätä siirtohakemus viimeistään | Vakuutuksesi siirtyy aikaisintaan  
**Rows:** 31.3. → 1.7. | 30.6. → 1.10. | 30.9. → 1.1. | 31.12. → 1.4.

**Option B style – `ItemList`**

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "TyEL-vakuutuksen siirtoaikataulu",
  "description": "Siirtohakemuksen viimeinen jättöpäivä ja vakuutuksen voimaantulopäivä.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "31.3.", "description": "Vakuutuksesi siirtyy aikaisintaan 1.7." },
    { "@type": "ListItem", "position": 2, "name": "30.6.", "description": "Vakuutuksesi siirtyy aikaisintaan 1.10." },
    { "@type": "ListItem", "position": 3, "name": "30.9.", "description": "Vakuutuksesi siirtyy aikaisintaan 1.1." },
    { "@type": "ListItem", "position": 4, "name": "31.12.", "description": "Vakuutuksesi siirtyy aikaisintaan 1.4." }
  ]
}
```

Give it a stable `@id` (e.g. `#siirtoaikataulukko`) and reference it from the page’s `WebPage` or `InsuranceProduct`/`Service` if you add those.

### 3.3 Implementation notes

- Add one `<script type="application/ld+json">` per block (or a single `@graph` containing Table/ItemList + existing types).
- Use unique `@id` for each table (e.g. `#hoitomaksutaulukko`, `#siirtoaikataulukko`) and reference from the main page entity.
- Keep table JSON-LD in sync with visible content (e.g. when 2027 figures or dates change).
- Validate: [Google Rich Results Test](https://search.google.com/test/rich-results), [validator.schema.org](https://validator.schema.org/).

---

## 4. Recommendations summary

### 4.1 Ota tai siirrä TyEL-vakuutus

| Priority | Action |
|----------|--------|
| High | Keep existing **WebPage**, **FAQPage**, **Service**, **BreadcrumbList**. Do **not** remove FAQPage. |
| High | Add **Organization** (Työeläkeyhtiö Elo, logo, contact) and **WebSite** (with SearchAction if site search exists), and link WebPage/Service to them (`publisher`, `isPartOf`, `provider` by `@id`). |
| High | Fix Organization name to official brand (e.g. “Työeläkeyhtiö Elo”), not “Elo Toimitilat”, unless that is the intended site name. |
| Medium | Add **ItemList** (or Table) JSON-LD for the **hoitomaksu** table; link to WebPage or Service. |
| Medium | Image alts: replace filename-based alt (e.g. Hullu Poro) with descriptive text; set Sunleaf to `alt=""` or a short brand alt. |

### 4.2 TyEL-vakuutuksen siirto (main SEO page)

| Priority | Action |
|----------|--------|
| High | Add **FAQPage** for “Usein kysytyt kysymykset TyEL-vakuutuksen siirrosta” (all Q&A pairs). |
| High | Add **Organization** + **WebSite** (same as above) and link WebPage to them. |
| High | Add **Service** or **InsuranceProduct** (with **Offer** if you want to stress “alan edullisin hoitomaksu”) and link to WebPage (`about`) and Organization (`provider`). |
| Medium | Add **ItemList** (or Table) for **siirtoaikataulu** and for **hoitomaksu**; give stable `@id`s and reference from WebPage/Service. |
| Medium | Same image alt fixes as on the other page (no filename alts; consistent logo/case study alts). |

### 4.3 Cross-page

- Use a single **Organization** and **WebSite** (e.g. `@id`: `https://www.elo.fi/#organization`, `https://www.elo.fi/#website`) across both URLs so the entity graph is consistent.
- Canonicals and breadcrumbs are already correct; keep them as-is.
- After changes: re-run Superlines schema/technical tools and Rich Results Test to confirm no regressions and better scores.

---

## 5. Quick reference: table JSON-LD placement

- **Ota tai siirrä TyEL-vakuutus:** one ItemList for hoitomaksu; optional `mainEntity`/`about` from WebPage or Service to that block.
- **TyEL-vakuutuksen siirto:** two ItemLists (siirtoaikataulu + hoitomaksu); optional `mainEntity`/`about` from WebPage or InsuranceProduct/Service to both.

If you use a single `@graph` on each page, include: WebPage, BreadcrumbList, (FAQPage where applicable), Service/InsuranceProduct, Organization, WebSite, and the Table/ItemList blocks, with `@id` and references so the graph is connected.
