# Tempora Mail

A responsive Next.js starter for a temporary-email website. This first version is a **demo UI**, not a real email receiver. It includes a responsive home screen, address generation, clipboard copy, theme toggle, timer, demo inbox states, and informational pages.

## Requirements
- Node.js 20.9 or later
- npm
- A GitHub account and Vercel account for cloud deployment

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy on Vercel (free URL)
1. Create a GitHub repository named `tempora-mail`.
2. Upload/push the contents of this folder to the repository root.
3. Sign in at https://vercel.com and choose **Add New → Project**.
4. Import the `tempora-mail` GitHub repository.
5. Keep the detected Next.js settings and click **Deploy**.
6. Vercel will provide a `*.vercel.app` deployment URL if the build succeeds.

## Real email delivery is not enabled
The generated `@demo.tempora-mail.test` addresses are intentionally non-deliverable. Before production, implement a secure backend and database, choose an inbound email provider, own a domain, configure MX records and provider routing/webhooks, validate signed webhooks, implement per-inbox authorization, rate limits, safe email rendering, and server-side expiry cleanup. Never switch to production mode by changing only a frontend label.

`.env.example` lists placeholder configuration names. No credentials are included. Do not add secrets to client-side variables or commit a real `.env` file.
