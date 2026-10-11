# Tempora Mail

A responsive Next.js interface for a temporary-email service.

## Current status

This project is **demo mode only**. It does not receive real email and does not contain fake inbox messages. The address uses the reserved `your-domain.example` domain to avoid implying that mail delivery works.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Upload the contents of this project to a GitHub repository, preserving the `app/` directory.
2. In Vercel, import that GitHub repository.
3. Keep the framework preset as Next.js and the root directory as `./`.
4. Deploy.

## Enable real inbound email (not included)

Real delivery requires a domain you control, DNS/MX records, an inbound-email provider with webhook support, a secure server-side API, persistence with expiration cleanup, authentication/unguessable inbox tokens, rate limits, and safe HTML/attachment handling. Do not advertise real receiving until end-to-end tested. Never put provider API keys in frontend code.
