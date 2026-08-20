# Clean up GitHub Pages workflows

Your site is a full-stack app (the contact form saves to a backend), so GitHub Pages cannot host it correctly. The Pages workflows in the repo will keep running and failing on every push.

## What changes

Delete the three GitHub Actions workflow files that try to deploy to GitHub Pages:

- `.github/workflows/deploy.yml`
- `.github/workflows/jekyll-gh-pages.yml`
- `.github/workflows/static.yml`

Also delete `CNAME`, which only exists to point a custom domain at GitHub Pages. Your domain gets connected through Lovable instead.

Nothing about the website itself changes — no design, content, or backend edits.

## How you publish and share after this

- **Publish the site**: click Publish in the editor, then connect your domain in Project Settings > Domains.
- **Share the code**: Plus (+) menu in the chat input > GitHub. Every change here pushes to the repo automatically, and you share the repo URL.
