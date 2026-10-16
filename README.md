This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Maple & Signal: where things live

| Page | Route | Content file |
| --- | --- | --- |
| Home | `/` | `app/(marketing)/page.tsx`, three-service cards in `lib/services.ts` |
| Services (business websites) | `/services` | `app/(marketing)/services/page.tsx` |
| Professional Portfolios | `/professional-portfolios` | `lib/portfolios/packages.ts` (prices, extras, FAQ, form options) |
| Portfolio demos | `/portfolios/simone-adeyemi`, `/portfolios/marcus-bell`, `/portfolios/adrienne-vale` | `lib/portfolios/*.ts`, designs in `components/portfolio-demos/templates/` |
| Website Audits | `/website-audits` | `lib/audits.ts` (packages, prices, audit areas, FAQ) |

Text inside `[[double brackets]]` in `lib/portfolios/packages.ts` shows on the page as a highlighted placeholder (turnaround, revision rounds, add-on prices and so on). Replace it with final wording. Student pricing shows "Coming soon" until `studentPricing.available` is set to `true` and a price is added.

The three portfolio demos are fictional people. Their contact links show a "demo placeholder" note instead of going anywhere, and their pages are marked `noindex`.

### Connect the forms

The contact form and the portfolio inquiry form send submissions to a webhook (`lib/forms/deliver.ts`). Until one is set, both forms say plainly that the request **was not sent** and show a "Not connected yet" notice, rather than a success message.

1. Create an endpoint that accepts a JSON `POST`: a form service (Formspree, Basin), an automation webhook (Zapier, Make) that emails you, or an email API (Resend, Postmark).
2. In Vercel → Project → Settings → Environment Variables, add `INQUIRY_WEBHOOK_URL` (and optionally `INQUIRY_WEBHOOK_TOKEN`, sent as a bearer token).
3. Redeploy, then send a test from both forms and confirm it arrives. The notice disappears once the variable is set.

Each submission includes a `form` field (`website-inquiry` or `portfolio-inquiry`) plus the fields from that form.
