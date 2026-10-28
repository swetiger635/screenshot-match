<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Component files in src/components use PascalCase.tsx (course convention); hooks/utils use camelCase.
- Static Vite + React SPA (no SSR). Routes are declared in src/router.tsx with React Router; page components live in src/routes/.
- Signed-in pages live under src/routes/_authenticated/ (client-only gate redirecting to /sign-in).
- Only auth.users is used for now; add tables via migrations only, and use RPC functions for cross-table reads.
- Never commit real emails or other PII in code or test data.
