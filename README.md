# Superlines Documentation

This is the source for the [Superlines](https://superlines.io) product documentation, built with [Mintlify](https://mintlify.com).

## Local development

### Prerequisites

- [Node.js](https://nodejs.org) v19 or higher
- [Mintlify CLI](https://www.npmjs.com/package/mintlify)

### Install the CLI

```bash
npm install -g mintlify
```

### Run the dev server

```bash
mintlify dev
```

The docs will be available at **http://localhost:3000**.

### Troubleshooting

- If you see a Node.js streams error, upgrade to Node 22+.
- Run `mintlify install` to refresh dependencies if pages don't render.
- Delete `.mintlify/` and restart if the cache is stale.

## Project structure

```
docs/
├── mint.json                  # Mintlify CLI config (local dev)
├── docs.json                  # Mintlify cloud config (deployment)
├── images/                    # Logos, favicon, and other assets
├── getting-started/           # Introduction, Quickstart, Core Concepts
│   ├── introduction.mdx
│   ├── quickstart.mdx
│   └── concepts.mdx
├── account/                   # Organizations, Brands, Prompts, Team
│   ├── organizations.mdx
│   ├── brands.mdx
│   ├── prompts.mdx
│   └── team.mdx
├── metrics/                   # Key Metrics, Responses, Citations, Analysis
│   ├── key-metrics.mdx
│   ├── responses.mdx
│   ├── citations.mdx
│   └── analysis-process.mdx
├── mcp/                       # MCP Server docs
│   ├── overview.mdx
│   ├── setup.mdx
│   └── tools.mdx
├── api/                       # REST API docs
│   ├── authentication.mdx
│   └── endpoints.mdx
├── integrations/              # Third-party integrations
│   └── looker-studio.mdx
├── faq.mdx                    # Frequently Asked Questions
└── llms.txt                   # AI-readable documentation index
```

## Deployment

This repo is deployed via Mintlify's GitHub integration:

1. Push changes to `main`.
2. Mintlify automatically builds and deploys.

To connect this repo to Mintlify, visit [dashboard.mintlify.com](https://dashboard.mintlify.com) and link the GitHub repository.

## Contributing

1. Create a new branch for your changes.
2. Edit or add `.mdx` files — use Mintlify components (`<Card>`, `<Steps>`, `<Tabs>`, `<Accordion>`, etc.).
3. Update `mint.json` navigation if you add new pages.
4. Test locally with `mintlify dev`.
5. Open a pull request.

### Page frontmatter

Every page needs YAML frontmatter:

```yaml
---
title: Page Title
description: A concise description for SEO and navigation.
---
```

### Mintlify components reference

| Component | Use case |
|---|---|
| `<Card>` / `<CardGroup>` | Navigation cards and feature highlights |
| `<Steps>` / `<Step>` | Step-by-step guides |
| `<Tabs>` / `<Tab>` | Platform-specific instructions |
| `<Accordion>` / `<AccordionGroup>` | FAQ and collapsible content |
| `<Note>` / `<Tip>` / `<Warning>` / `<Info>` | Callout boxes |
| `<CodeGroup>` | Multi-language code examples |

Full reference: [mintlify.com/docs/components](https://mintlify.com/docs/components)

## License

Proprietary — Superlines Oy. All rights reserved.
