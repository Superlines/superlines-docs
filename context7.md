# Superlines Documentation

Superlines is an AI Search Visibility platform that monitors and optimizes how brands appear in AI-powered search results across ChatGPT, Copilot, Gemini, Perplexity, Google AI Overviews, Claude, Grok, Mistral, and DeepSeek.

- Website: https://superlines.io
- Dashboard: https://analytics.superlines.io
- Documentation: https://docs.superlines.io
- MCP NPM Package: https://www.npmjs.com/package/@superlines/mcp-server
- Support: support@superlines.io

---

## Quick Start

1. **Sign up** at [superlines.io](https://superlines.io) and verify your email.
2. **Create your organization** — enter your org name and website.
3. **Create your first brand** — configure brand name, website URL, target country/language, and up to 4 competitors.
4. **Validate prompts** — Superlines auto-discovers relevant prompts. Review and add custom ones.
5. **Wait for data** — first analytics appear within 24–48 hours.
6. **Invite your team** — Admin (full access) or Member (read-only analytics).

Start with 20–50 core prompts and expand from there.

---

## Core Concepts

### Account Hierarchy

```
Organization
├── Brand (Domain) 1
│   ├── Prompts + Labels
│   ├── Competitors
│   └── Analytics
├── Brand (Domain) 2
│   └── ...
└── Team Members (org-wide)
```

- **Organization** — top-level account holding subscription, team, API keys, and LLM engine configuration.
- **Brand (Domain)** — a business entity to monitor with its own name, website, market, competitors, prompts, and analytics.
- **Prompts** — questions people ask AI assistants, tracked across engines.
- **Labels** — tags for organizing prompts by topic, campaign, or priority.

### What Are Prompts?

A prompt is a question or query typed into AI assistants. Examples:
- "What are the best project management tools for remote teams?"
- "How do I improve my website's AI search visibility?"

Superlines tracks these prompts across AI engines, recording whether your brand is mentioned, your website is cited, which competitors appear, and the overall sentiment.

### What Are Responses?

A response is an AI engine's answer to a tracked prompt. Each response is analyzed for brand mentions, brand position (mention order), website citations, competitor mentions, and sentiment.

### What Are Citations?

A citation is a reference to a specific URL in an AI response. Citations are a strong signal of content authority. Not all AI engines provide citations — models with web access (Perplexity, Copilot, Google AI Overviews) cite sources more often than offline models.

### What Are Fan-out Queries?

When an AI model with web access answers a question, it performs web searches behind the scenes. These internal searches are fan-out queries. Superlines tracks what search terms the AI uses, where your domain ranks, and opportunities to improve content for AI retrieval.

### How Analysis Works

1. Prompts are tracked — added manually or auto-discovered.
2. Automated daily testing — prompts sent to all enabled AI engines.
3. Responses collected and stored.
4. Brand detection — responses scanned for brand name and variations.
5. Citation extraction — all URLs in responses parsed and tracked.
6. Metrics calculated — Brand Visibility, Citation Rate, Share of Voice, Average Position.
7. Insights generated — trends, alerts, and recommendations.

---

## Key Metrics

### Brand Visibility

Percentage of AI responses that mention your brand.

```
Brand Visibility = (Responses mentioning your brand / Total responses) × 100
```

Benchmarks: >30% Excellent, 20–30% Good, 10–20% Fair, <10% Needs improvement.

### Share of Voice (SOV)

Your brand mentions as a percentage of all brand mentions (yours + competitors).

```
Share of Voice = (Your brand mentions / All brand mentions) × 100
```

Benchmarks: >25% Market leader, 15–25% Strong, 5–15% Moderate, <5% Needs attention.

Key difference: Brand Visibility measures absolute presence. SOV measures competitive position.

### Citation Rate

Percentage of AI responses that cite (link to) your website.

```
Citation Rate = (Responses citing your website / Total responses) × 100
```

Benchmarks: >20% Excellent, 10–20% Good, 5–10% Fair, <5% Needs improvement.

### Share of Citations

Your website citations as a percentage of all citations in branded responses.

```
Share of Citations = (Your citations / Total citations in branded responses) × 100
```

### Mentions

Raw count of times your brand is mentioned across all AI responses. Useful for understanding volume and trends.

### Average Position

Volume-weighted average rank at which your brand is mentioned in AI answers. Position 1 = mentioned first. Lower is better.

```
Average Position = Volume-weighted average of mention order across all responses
```

Benchmarks: 1.0–2.0 Excellent, 2.0–3.5 Good, 3.5–5.0 Fair, >5.0 Needs improvement.

Only responses where your brand is actually mentioned are included.

### Sentiment Score

Average sentiment of AI responses mentioning your brand: Positive, Neutral, or Negative.

### Filtering

All metrics can be filtered and broken down by AI engine, country, language, topic, and time period.

---

## Supported AI Engines

ChatGPT (OpenAI), Microsoft Copilot, Perplexity, Google AI Overviews, Google Gemini, xAI Grok, Anthropic Claude, Mistral AI, DeepSeek.

Engine availability depends on your subscription plan.

---

## REST API

**Base URL:** `https://api.superlines.io`

Supports both GET (query parameters) and POST (JSON body). Every request includes an `endpoint` parameter to select which data to return. Your API key determines which brands are accessible.

### Authentication

Bearer token in the `Authorization` header. Supported token types:

| Token Type | Format | Use Case |
|---|---|---|
| API Key | `sl_live_...` | Server-side integrations, scripts |
| OAuth Access Token | JWT | MCP clients using OAuth flow |
| Firebase ID Token | JWT | Internal/browser-based access |

```bash
curl -X POST https://api.superlines.io \
  -H "Authorization: Bearer sl_live_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"endpoint": "metrics", "metrics": ["brand_visibility"], "brands": ["My Brand"]}'
```

### Endpoints

The API is a single endpoint that uses an `endpoint` parameter for routing. Filter by brand name using `brands`.

#### endpoint=metrics

Core performance metrics. Parameters: `metrics` (required — brand_visibility, citation_rate, citations, share_of_citations, share_of_voice, mentions, tests, responses), `brands` (array of brand names), `startDate`, `endDate`, `granularity` (total/daily/weekly/monthly), `groupBy`, `labels`, `filters`.

#### endpoint=brands

Brand mention data with sentiment and SOV. Parameters: `brands`, `startDate`, `endDate`, `granularity`, `groupBy`, `topN`, `includeSentiment`, `includeShareOfVoice`, `minMentions`, `labels`, `filters`.

#### endpoint=citations

Citation data at domain or URL level. Parameters: `brands`, `aggregateBy` (domain/url), `startDate`, `endDate`, `granularity`, `topN`, `includeUrls`, `labels`, `filters`.

#### endpoint=queries

Search query data. Parameters: `brands`, `promptId`, `groupBy`, `sortBy` (prompts/query), `topN`, `minVolume`, `includeMetadata`, `filters`.

#### endpoint=prompts

Tracked prompts. Parameters: `brands`, `status` (active/paused), `intent`, `labels`, `sortBy` (createdAt/lastRunAt/promptText), `topN`, `includeMetadata`.

#### endpoint=responses

Raw AI response data. Parameters: `brands`, `startDate`, `endDate`, `labels`, `sortBy` (createdAt/promptId), `topN`, `includeFullText`, `filters`.

### Rate Limits

| Plan | Requests/minute |
|---|---|
| Starter | 60 |
| Growth | 120 |
| Enterprise | 300 |

Exceeding returns `429`. Use exponential backoff.

### Response Format

Success:

```json
{ "success": true, "data": { ... }, "meta": { "total": 100, "limit": 10, "offset": 0 } }
```

Error:

```json
{ "success": false, "error": { "code": "UNAUTHORIZED", "message": "..." } }
```

---

## MCP Server

The Superlines MCP server lets AI assistants (Claude Desktop, Cursor, VS Code) query your AI search analytics using natural language.

### Setup

**Prerequisites:** Paid Superlines plan, API key (`sl_live_...`), MCP-compatible client.

#### SSE (URL-based) — Recommended

Connection URL: `https://mcpsse.superlines.io?token=YOUR_API_KEY`

Claude Desktop / Cursor / VS Code config:
```json
{
  "mcpServers": {
    "superlines": {
      "url": "https://mcpsse.superlines.io?token=YOUR_API_KEY",
      "transport": "sse"
    }
  }
}
```

#### Local npx

Requires Node.js.

```json
{
  "mcpServers": {
    "superlines": {
      "command": "npx",
      "args": ["-y", "@superlines/mcp-server"],
      "env": {
        "SUPERLINES_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

### API Key Permissions

Default keys are read-only. Enable write permissions in Organization Settings → API Keys:

| Permission | Grants Access To |
|---|---|
| `read` | All analytics and reporting tools (default) |
| `write:brands` | `create_brand`, `get_brand_setup_status` |
| `write:prompts` | `add_prompts`, `pause_prompts`, `unpause_prompts`, `update_prompt_labels` |

Write operations are rate-limited and audit-logged. Brand creation: 5/hour. Prompt operations: 100/hour per org.

### Available MCP Tools (27 total)

#### Brand Management

- **`list_brands`** — Lists all brands in your account. Call this first to get brand names. No parameters.
- **`get_brand_details`** — Detailed brand info including competitors, industry, market settings. Parameter: `domainId` (required).

#### Core Metrics

- **`analyze_metrics`** — Comprehensive analytics: Brand Visibility, Citation Rate, Mentions, SOV, Citations. Parameters: `brands` (array), `metrics` (array), `startDate`/`endDate`, `granularity` (total/daily/weekly/monthly), `groupBy` (array), `filters`.
- **`get_citation_data`** — Citations at domain or URL level. Parameters: `brands` (array), `aggregateBy` (domain/url), `startDate`/`endDate`, `granularity`, `groupBy`, `filters`, `limit`.
- **`analyze_brand_mentions`** — Mention counts, sentiment, SOV. Parameters: `brands` (array), `startDate`/`endDate`, `granularity`, `groupBy` (array), `filters`, `minMentions`, `limit`.
- **`get_query_data`** — Search queries with intent, user journey stage, brand mentions. Parameters: `brands` (array), `promptId`, `groupBy`, `filters`, `sortBy` (prompts/query), `minVolume`, `limit`.
- **`get_weekly_performance`** — Weekly trends with week-over-week changes. Parameters: `brands` (array), `weeksBack` (default: 4, max: 52), `metrics`.

#### Webpage Analysis

- **`webpage_audit`** — Comprehensive LLM-friendliness audit: technical SEO, content quality, metadata, schemas, writing quality. Parameters: `url` (required), `includeCodeSnippets`.
- **`webpage_analyze_technical`** — Focused technical analysis: metadata, structured data, headings, accessibility. Parameters: `url` (required), `includeCodeSnippets`.
- **`webpage_analyze_content`** — Focused content analysis: heading format, organization, citations, tone. Parameter: `url` (required).
- **`schema_optimizer`** — Optimize Schema.org structured data. Returns quality score, proposed schemas, code. Parameters: `url` (required), `includeCodeSnippets`.

#### Competitive Analysis

- **`get_fanout_query_insights`** — Web searches LLMs perform when answering user questions. Parameters: `brands` (array), `startDate`/`endDate`, `limit` (default: 5).
- **`get_competitive_gap`** — Prompts where competitors lead or where you're winning. Parameters: `brands` (array), `promptId`, `promptIds`, `aggregateBy` (cluster/prompt), `startDate`/`endDate`, `includeAIAnalysis`.
- **`get_top_cited_url_per_prompt`** — The #1 cited URL for each tracked prompt. Parameters: `brands` (array), `startDate`/`endDate`, `limit` (default: 20).
- **`get_best_performing_prompt`** — Best prompts by visibility or citation rate. Parameters: `brands` (array), `startDate`/`endDate`, `metric` (visibility/citations/both).
- **`get_period_comparison`** — Current period vs. previous period. Parameters: `brands` (array), `periodDays` (default: 30), `metrics`.

#### Advanced Analytics

- **`get_competitor_insights`** — Top cited domains and most mentioned brands. Parameters: `brands` (array), `startDate`/`endDate`, `topN` (default: 10).
- **`analyze_sentiment`** — Sentiment breakdown (positive/neutral/negative). Parameters: `brands` (array), `startDate`/`endDate`, `groupBy` (llm_service/topic/country).
- **`find_content_opportunities`** — High-volume topics with low brand visibility. Parameters: `brands` (array), `startDate`/`endDate`, `minMentions` (default: 3).
- **`get_analytics_summary`** — High-level summary with overall metrics and top topics. Parameters: `brands` (array), `startDate`/`endDate`, `groupBy` (llm_service/country/language/topic/date).

#### Strategic Tools

- **`generate_strategic_action_plan`** — Priority-ranked action plan with improvement scores. Parameters: `brands` (array), `focusArea` (all/visibility/citations/sentiment/content_gaps), `maxRecommendations` (default: 5, max: 10), `competitorUrls` (array), `startDate`/`endDate`.

#### Account Management (Requires Write Permissions)

- **`create_brand`** — Create a new brand/domain. Triggers analysis and prompt generation. Parameters: `brandName` (required), `website` (required), `country`, `language`, `competitors` (array), `industry`. Permission: `write:brands`.
- **`get_brand_setup_status`** — Check progress of brand setup after creation. Parameter: `domainId` (required).
- **`add_prompts`** — Add tracking prompts (max 50/call). Parameters: `domainId` (required), `prompts` (array with `text`, optional `label` and `intent`). Permission: `write:prompts`.
- **`pause_prompts`** — Pause active prompts. Parameters: `domainId` (required), `promptIds` (array) or `label`. Permission: `write:prompts`.
- **`unpause_prompts`** — Reactivate paused prompts. Parameters: `domainId` (required), `promptIds` (array) or `label`. Permission: `write:prompts`.
- **`update_prompt_labels`** — Add, remove, or set labels. Parameters: `domainId` (required), `promptIds` (array, max 100), `label` (required), `action` (set/add/remove). Permission: `write:prompts`.

---

## Integrations

### Google Search Console

Import real user queries from GSC and auto-discover relevant prompts to track in AI search.

### Google Analytics

Detect LLM-referred traffic to your website. Compare AI vs organic visits.

### Slack

Real-time opportunity alerts, weekly summaries, and sentiment notifications.

### Looker Studio

Connect Superlines data to Google Looker Studio for custom dashboards and automated reports.

---

## FAQ

**How are prompts discovered?** Multi-layered: industry analysis, competitor monitoring, AI search trends, search data correlation, and user feedback.

**Can I get historical data?** No — data collection starts when you create a brand. AI responses are dynamic and non-deterministic.

**Why do numbers fluctuate early on?** Small sample sizes in the first 24–48 hours. Numbers stabilize as more responses are collected.

**Brand Visibility vs Share of Voice?** Brand Visibility = how often your brand is mentioned out of all responses. SOV = how often you're mentioned compared to competitors.

**Do I need a cookie banner?** No. Superlines works server-side, no cookies or visitor tracking involved.

**Deletion via MCP/API?** Not supported to prevent accidental data loss. Use `pause_prompts` instead.

---

## Subscription Plans

| Feature | Free | Starter | Growth | Enterprise |
|---|---|---|---|---|
| Brands | 1 | Multiple | Multiple | Unlimited |
| API/MCP Access | No | Yes | Yes | Yes |
| Rate Limit | — | 60/min | 120/min | 300/min |

Upgrades take effect immediately. Contact support@superlines.io for Enterprise pricing.
