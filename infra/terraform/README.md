# softfox.com infrastructure

Set up as Joue's is (softfox-joue `infra/terraform`). Terraform makes the
Cloudflare Pages project and the contact form's Turnstile widget, plus the
Resend DNS records for `contact.softfox.com`. GitHub Actions deploys the site
(`.github/workflows/site.yml`), and the contact form's Function
(`functions/api/contact.js`) goes with it.

## One-time setup (Roger, by hand)

1. **HCP Terraform:** in the `softfox-safeguard` organization, create the workspace
   `softfox-website` with Local execution.
2. **Cloudflare API token** (My Profile › API Tokens › Create custom token),
   named "softfox-website", used by both Terraform and the Site workflow:
   - Zone › DNS › Edit, and Zone › Zone › Read, for softfox.com only;
   - Account › Cloudflare Pages › Edit, for the Softfox account;
   - Account › Turnstile › Edit, for the contact form's captcha.
3. **GitHub repo settings** (softfox-ltd/website › Settings › Secrets and
   variables › Actions):
   - secret `CLOUDFLARE_API_TOKEN`: the token above;
   - secret `TF_TOKEN_app_terraform_io`: an HCP Terraform team or user token
     (not an organization token, which can't run plans);
   - variable `CLOUDFLARE_ACCOUNT_ID`: the account ID, which isn't secret.
4. Merge, so Terraform applies. Then set the variable `TURNSTILE_SITE_KEY` to
   `terraform output turnstile_site_key`.
5. **Resend:** add the domain `contact.softfox.com` (EU). Copy its DKIM value into
   `email.tf`, uncomment the record, and merge. Then verify the domain in Resend.
6. **Function secrets** (or set them in the Pages dashboard), for production
   and for preview:
   ```
   npx wrangler pages secret put RESEND_API_KEY --project-name=softfox
   npx wrangler pages secret put TURNSTILE_SECRET --project-name=softfox
   ```
   `TURNSTILE_SECRET` is `terraform output -raw turnstile_secret`.
7. Re-run the Site workflow, then try the form on `softfox.pages.dev/contact/`.

## Switching softfox.com over

Do this once the form works on `softfox.pages.dev`. Until then, GitHub Pages
keeps serving softfox.com with email links (`lib/site.ts`).

1. In a PR, add `cloudflare_pages_domain` resources for `softfox.com` and
   `www.softfox.com`, and remove `.github/workflows/deploy.yml` and `public/CNAME`.
2. In the Cloudflare dashboard, replace the hand-made apex and `www` records,
   which point at GitHub Pages, with CNAMEs to the `pages_subdomain` output
   (proxied). Optionally import them into Terraform afterwards.
3. Turn off GitHub Pages in the repo settings.

## Locally

```
printf 'RESEND_API_KEY=dry-run\nTURNSTILE_SECRET=1x0000000000000000000000000000000AA\n' > .dev.vars
NEXT_PUBLIC_CONTACT_FORM=on npm run build && npx wrangler pages dev out
```

`dry-run` logs the email instead of sending it. The Turnstile values are
Cloudflare's always-pass test keys.
