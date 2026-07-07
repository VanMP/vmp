# VSMP Portfolio - Vanessa Schemes Martins Pinto

This repository contains the source code for the professional portfolio website of **Vanessa Schemes Martins Pinto** (VSMP). The site is built with a focus on modern aesthetics, fluid layout, responsive interactive elements, and serverless direct-delivery communications.

The production version of the portfolio is deployed and accessible at:  
👉 **[vsmp.pages.dev](https://vsmp.pages.dev)**

---

## 📖 Documentation Guides

To make development and updates as easy as possible, we have split our documentation into two target guides:

1. **[Developer Guide (developer.md)](./developer.md)**
   - Setup instructions, dependencies, and configuration.
   - Configuring the email/contact form (Web3Forms access keys).
   - Changing static assets (updating CV PDFs, Favicons).
   - Deploying directly to Cloudflare Pages.

2. **[AI Agents Guide (agents.md)](./agents.md)**
   - Technical guidelines for AI Coding Assistants (Copilot, Cursor, Gemini).
   - Theme variables and custom design tokens (Olive, Wine, Stone colors).
   - Key architectural layout structures.
   - Smooth continuous scrolling marquee loop mechanics.
   - Non-interactive deploy command setups.

---

## 🛠️ Main Technologies

- **[Astro v6](https://astro.build/)** – High-performance static site generator.
- **[React](https://react.dev/)** – Interactive interfaces and state-driven components.
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Modern utility-first styling with native CSS variables.
- **[Cloudflare Pages](https://pages.cloudflare.com/)** – Secure, globally distributed static hosting.
- **[Web3Forms](https://web3forms.com/)** – Contact form emails without backend infrastructure.

---

## ⚡ Quick Commands

Run these commands from the root directory of the project:

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build the static site production output (dist/)
npm run build

# Deploy output to Cloudflare Pages (requires wrangler login)
npx wrangler pages deploy dist --project-name vsmp
```
