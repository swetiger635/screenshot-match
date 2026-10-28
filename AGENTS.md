## Project rules
- Component files in src/components use PascalCase.tsx (course convention); hooks/utils use camelCase.
- Static Vite + React SPA (no SSR). Routes are declared in src/router.tsx with React Router; page components live in src/routes/.
- Signed-in pages live under src/routes/_authenticated/ (client-only gate redirecting to /sign-in).
- Backend is the project's own Supabase (ref mzyqackidrdyhyheezfn), configured via VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY.
- Only auth.users is used for now; add tables via migrations only, and use RPC functions for cross-table reads.
- Never commit real emails or other PII in code or test data.
