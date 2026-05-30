# Developer Documentation - VSMP Portfolio

This document provides human developers with guidance on how to run, configure, and maintain the Vanessa Schemes Martins Pinto (VSMP) Portfolio website.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro v6](https://astro.build/) (Static Site Generator)
- **UI Components**: React (implemented via `@astrojs/react` integration for dynamic logic)
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` integration)
- **Animations**: CSS Keyframes + GPU hardware-accelerated 3D Transforms (`translate3d`)
- **Hosting**: Cloudflare Pages (`vsmp.pages.dev`)
- **Contact Forms Backend**: [Web3Forms](https://web3forms.com/) (Direct serverless form-to-email delivery)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (version 22.12.0 or higher) installed on your system.

### 2. Installation
Clone the repository and install the dependencies:
```sh
npm install
```

### 3. Local Development
Launch the local Astro development server:
```sh
npm run dev
```
By default, the server runs on `http://localhost:4321`.

### 4. Build
Compile the optimized static build directory (`dist`):
```sh
npm run build
```

---

## ✉️ Configuring the Contact Form (Web3Forms)

The website uses **Web3Forms** to send contact submissions directly to Vanessa's email (`vanessa.smartinsp@gmail.com`) without a dedicated backend server.

The access key is located in [ContactModal.tsx](file:///src/components/sections/ContactModal.tsx):
```typescript
const WEB3FORMS_ACCESS_KEY = "3235b80a-9d95-46b0-9e90-252f534fc487";
```
If Vanessa needs to regenerate or change the target email:
1. Go to [Web3Forms](https://web3forms.com/) and request a new free Access Key using the target email address.
2. Replace the value of `WEB3FORMS_ACCESS_KEY` in `ContactModal.tsx`.

---

## 📂 Key Assets & Paths

### 1. Curriculum Vitae (CV) PDFs
The download buttons for Vanessa's CVs point to:
- **Portuguese version**: [vanessa-martins-pinto-cv-pt.pdf](file:///public/files/vanessa-martins-pinto-cv-pt.pdf)
- **English version**: [vanessa-martins-pinto-cv-en.pdf](file:///public/files/vanessa-martins-pinto-cv-en.pdf)

To update her CVs, simply overwrite these two files inside `public/files/` with the updated PDF files keeping the exact same filenames.

### 2. Favicon & Logos
- The green "V" favicon is located at [favicon.svg](file:///public/favicon.svg).
- The vector icons and branch elements are written inline inside the React components.

---

## 🎨 Styling & Color Palette

All styling variables are defined in the Tailwind CSS v4 `@theme` block inside [global.css](file:///src/styles/global.css):
- **Stone Background (`--color-bg`)**: `#E9E2D5`
- **Surface card (`--color-surface`)**: `#FAF6EF`
- **Frost highlight (`--color-frost`)**: `#F6EFE4`
- **Wine red accent (`--color-wine`)**: `#542E3B`
- **Moss green brand (`--color-olive` / `--color-olive-tint`)**: `#4E5F2A` / `#3B4A28`
- **Mustard gold (`--color-mustard`)**: `#9C8538`

To customize the website's colors, edit these CSS variables in [global.css](file:///src/styles/global.css).

---

## ☁️ Deployment

Deploying is handled via the Cloudflare Wrangler CLI.

To deploy the production build to Cloudflare Pages:
```sh
# 1. Compile the production bundle
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name vsmp
```
*Note: Make sure your Wrangler CLI is logged in to the account owning the project (`geral.pertodaqui@gmail.com`).*
