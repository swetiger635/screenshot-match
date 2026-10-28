# Screenshot Match

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/428ad05a-53e9-4e9e-85bf-84b769b95b4c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to Vercel

This is a static Vite + React single-page app with client-side routing (React Router).

- `npm run build` runs `vite build` and writes the static site to `dist/`.
- `vercel.json` rewrites every path to `index.html`, so deep links like `/app` resolve client-side.
- Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the Vercel project's environment variables (they are read at build time).

Routes: `/` (landing), `/sign-in`, `/sign-up`, `/app` (signed-in only; redirects to `/sign-in`).
