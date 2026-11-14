# cheatsisle.com

The Isle Cheats marketing site (live: **cheatsisle.com**) — Astro 7 static build.

### Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | *(empty — recommended)* **or** `npm run deploy:cf` |

Avoid bare `npx wrangler deploy` on a Pages project — Wrangler warns and may deploy the wrong target. If you must keep a deploy step, use **`npm run deploy:cf`** (`wrangler pages deploy dist`). The repo also defines `[assets]` in `wrangler.toml` so a mistaken `wrangler deploy` can still upload `./dist`.

### Pre-push (playbook)

```powershell
git ls-files .env .env.production .env.local   # must be empty
npm run qa
```
