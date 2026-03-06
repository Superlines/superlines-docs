# Frontend UX Guidelines

This document defines the baseline UI/UX conventions for authenticated analytics surfaces.

Use it as the default checklist for new pages and for refactors of existing pages.

## 1) Page shell and information hierarchy

- Use `AnalyticsPageShell` for authenticated analytics pages.
- Always provide a non-empty page title (single meaningful `<h1>`).
- Keep page-level actions (refresh/export/help) in a predictable header position.
- Keep section ordering consistent:
  1. Global filters
  2. Active filter summary
  3. KPI summary
  4. Trend charts / insights
  5. Detailed tables or lists

## 2) Shared analytics primitives

Prefer shared primitives over one-off implementations:

- `GlobalFilterBar`
- `FilterSummaryChips`
- `KpiRow`
- `TrendPanel`
- `ListPagination`
- `NoDataState`
- `LoadingState`
- `ErrorState`

If a needed pattern is missing, extend the shared primitive set instead of duplicating local variants.

## 3) Filter behavior conventions

- Keep filter order stable across analytics pages (prompt/label, engine, date range, actions).
- Reflect active filter state clearly (chips/summary).
- Include a clear “reset all filters” affordance.
- Ensure filter changes sync consistently across charts and tables on the page.

## 4) Button and interaction semantics

- All raw `<button>` elements must set an explicit `type` (`button`, `submit`, or `reset`).
- Icon-only buttons must include descriptive `aria-label`.
- Toggle controls should expose state with `aria-pressed`.
- Expand/collapse controls should expose state with `aria-expanded`.
- Button-like tabs should use `role="tab"` and be wrapped in a `role="tablist"` container.

## 5) Visual system and tokens

- Prefer semantic token classes over hardcoded palette utilities:
  - `text-foreground`, `text-muted-foreground`
  - `bg-card`, `bg-muted`, `bg-accent`
  - `border-border`
  - semantic accents such as `text-primary`, `text-success`, `text-destructive`
- Reuse shared component variants (`Button`, `Badge`, `Card`) instead of custom ad hoc styles where possible.
- Keep hover/focus/disabled behavior consistent with shared component patterns.

## 6) States: loading, empty, error, setup-gated

Every major data section should explicitly handle:

- loading
- empty
- error
- setup-gated (when data cannot exist until integration/config is complete)

Avoid silent blanks; provide actionable context.

## 7) Accessibility and responsiveness baseline

- Maintain visible keyboard focus on interactive controls.
- Ensure heading order is meaningful and non-empty.
- Avoid horizontal overflow for top-level filter/action rows on narrow viewports:
  - use wrapping when appropriate, or
  - use horizontal scroll with clear affordances for dense control rows.
- Preserve usable touch targets and readable typography at tablet/mobile breakpoints.

## 8) Validation checklist (PR-ready)

- [ ] Uses shared shell and analytics primitives where applicable
- [ ] No raw `<button>` without explicit `type`
- [ ] Icon-only controls are labeled
- [ ] Loading/empty/error/setup states are explicit
- [ ] Token-based styling used for touched controls
- [ ] Manual smoke test performed on changed interaction paths
- [ ] Lint run on changed files (pre-existing lint debt called out separately)
# Frontend UX Guidelines

This document defines the baseline UI/UX conventions for authenticated analytics surfaces.

Use it as the default checklist for new pages and for refactors of existing pages.

## 1) Page shell and information hierarchy

- Use `AnalyticsPageShell` for authenticated analytics pages.
- Always provide a non-empty page title (single meaningful `<h1>`).
- Keep page-level actions (refresh/export/help) in a predictable header position.
- Keep section ordering consistent:
  1. Global filters
  2. Active filter summary
  3. KPI summary
  4. Trend charts / insights
  5. Detailed tables or lists

## 2) Shared analytics primitives

Prefer shared primitives over one-off implementations:

- `GlobalFilterBar`
- `FilterSummaryChips`
- `KpiRow`
- `TrendPanel`
- `ListPagination`
- `NoDataState`
- `LoadingState`
- `ErrorState`

If a needed pattern is missing, extend the shared primitive set instead of duplicating local variants.

## 3) Filter behavior conventions

- Keep filter order stable across analytics pages (prompt/label, engine, date range, actions).
- Reflect active filter state clearly (chips/summary).
- Include a clear “reset all filters” affordance.
- Ensure filter changes sync consistently across charts and tables on the page.

## 4) Button and interaction semantics

- All raw `<button>` elements must set an explicit `type` (`button`, `submit`, or `reset`).
- Icon-only buttons must include descriptive `aria-label`.
- Toggle controls should expose state with `aria-pressed`.
- Expand/collapse controls should expose state with `aria-expanded`.
- Button-like tabs should use `role="tab"` and be wrapped in a `role="tablist"` container.

## 5) Visual system and tokens

- Prefer semantic token classes over hardcoded palette utilities:
  - `text-foreground`, `text-muted-foreground`
  - `bg-card`, `bg-muted`, `bg-accent`
  - `border-border`
  - semantic accents such as `text-primary`, `text-success`, `text-destructive`
- Reuse shared component variants (`Button`, `Badge`, `Card`) instead of custom ad hoc styles where possible.
- Keep hover/focus/disabled behavior consistent with shared component patterns.

## 6) States: loading, empty, error, setup-gated

Every major data section should explicitly handle:

- loading
- empty
- error
- setup-gated (when data cannot exist until integration/config is complete)

Avoid silent blanks; provide actionable context.

## 7) Accessibility and responsiveness baseline

- Maintain visible keyboard focus on interactive controls.
- Ensure heading order is meaningful and non-empty.
- Avoid horizontal overflow for top-level filter/action rows on narrow viewports:
  - use wrapping when appropriate, or
  - use horizontal scroll with clear affordances for dense control rows.
- Preserve usable touch targets and readable typography at tablet/mobile breakpoints.

## 8) Validation checklist (PR-ready)

- [ ] Uses shared shell and analytics primitives where applicable
- [ ] No raw `<button>` without explicit `type`
- [ ] Icon-only controls are labeled
- [ ] Loading/empty/error/setup states are explicit
- [ ] Token-based styling used for touched controls
- [ ] Manual smoke test performed on changed interaction paths
- [ ] Lint run on changed files (pre-existing lint debt called out separately)
