# Screenshot Match

Implement exactly the screenshot and nothing else

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
cp .env.example .env   # then fill in your Supabase URL and publishable key
npm i
npm run dev
```

## Deploying to Vercel

This is a static Vite + React single-page app with client-side routing (React Router).

- `npm run build` runs `vite build` and writes the static site to `dist/`.
- `vercel.json` rewrites every path to `index.html`, so deep links like `/app` resolve client-side.
- Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the Vercel project's environment variables (they are read at build time).

Routes: `/` (landing), `/sign-in`, `/sign-up`, `/app` (signed-in only; redirects to `/sign-in`).
