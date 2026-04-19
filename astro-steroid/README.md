# Steroiden E-Commerce Project

This is a high-performance, SEO-optimized Astro website designed for selling steroids. It features a static catalog, a client-side enquiry cart, and a serverless backend for handling quote requests.

## Project Structure

*   `src/pages/`: Routes for the website.
    *   `steroids/[slug].astro`: Dynamic product pages generated from content.
    *   `api/enquiry.ts`: Serverless function to handle form submissions.
*   `src/content/products/`: Markdown files containing product data and long-form content.
*   `src/components/`: Reusable UI components (Header, Footer, Cart, etc.).
*   `src/scripts/`: Client-side logic (Cart store using Nano Stores).

## Setup & Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Dev Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Adding Products

1.  Create a new `.md` file in `src/content/products/`.
2.  Follow the frontmatter schema defined in `src/content/config.ts`.
3.  Ensure the `slug` follows the pattern `/steroids/buy-[keyword]`.
4.  Add at least 800 words of research-focused content in the body.

## Configuration

### Environment Variables

Create a `.env` file in the root for local development (and set these in Cloudflare Pages settings for production):

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

### Cloudflare Pages Deployment

This project now builds as a static Astro site. The recommended deployment method is Cloudflare Pages.

1.  Connect your repository to Cloudflare Pages.
2.  Set the build settings:
    - **Framework Preset**: Astro
    - **Build Command**: `npm run build`
    - **Build Output Directory**: `dist`
3.  Add the required production environment variables in Pages:
    - `SITE_URL=https://steroideshop.net`
    - `SUPABASE_URL`
    - `SUPABASE_KEY`
    - `RESEND_API_KEY`
    - Other API-related variables if your backend integrations are used.
4.  Deploy the branch.

> Note: Static Pages deployment publishes the generated `dist/` assets only. Server-side API routes under `src/pages/api/*` are not included in the static output, so any form handling or custom backend logic will require a separate API backend or functions deployment.

If you still want a Cloudflare Workers deployment later, the previous `wrangler.toml` configuration is preserved for reference.

## Enquiry Workflow

1.  User adds items to the Enquiry Cart.
2.  User submits the form (requires "Research Use Only" confirmation).
3.  Data is posted to `/api/enquiry`.
4.  Server validates and saves to Supabase `enquiries` table.
5.  **Admin Action:**
    *   Log in to Supabase Dashboard.
    *   Review new rows in `enquiries`.
    *   If approved, manually generate an invoice (PDF) and email it to the customer.
    *   Update status to `approved` or `invoiced`.

## Safety & Compliance

*   **Research Only:** All content must strictly adhere to "Research Use Only" language. No human use claims.
*   **Disclaimer:** The site includes global disclaimers and a mandatory checkbox at checkout.
