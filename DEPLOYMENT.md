# GitHub Pages deployment

The site is built and deployed automatically by `.github/workflows/deploy-pages.yml` whenever `main` is updated. The workflow uses Bun, builds the static Astro output, and deploys `dist/` through the official GitHub Pages actions.

## One-time GitHub configuration

1. Open the repository's **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Set **Custom domain** to `gua.orizika.com` and save it.
4. Enable **Enforce HTTPS** after GitHub finishes issuing the certificate.

The custom domain must be configured in GitHub Settings even though `public/CNAME` is included in the generated artifact. GitHub ignores repository `CNAME` files as a source of custom-domain settings when deployment uses a custom Actions workflow.

## DNS configuration

Create the following record with the DNS provider for `orizika.com`:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `gua` | `link1345.github.io` |

Do not append the repository name to the CNAME target. DNS and certificate changes may take time to propagate.

On Windows, the record can be checked with:

```powershell
Resolve-DnsName gua.orizika.com -Type CNAME
```

## Manual deployment

Use **Actions → Deploy GitHub Pages → Run workflow** to deploy without creating a new commit.
