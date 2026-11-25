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
   - variable `CLOUDFLARE_ACCOUNT_ID`: the account ID, which isn't secret;
   - secret `RESEND_API_KEY`: a Resend key with sending access only, for
     `contact.softfox.com`. Terraform sets it on the Pages project.
4. **Resend:** add the domain `contact.softfox.com` (EU), put its DKIM value in
   `email.tf`, merge, then verify the domain in Resend.
5. Merge, so Terraform applies. It sets the Function's secrets
   (`RESEND_API_KEY`, and `TURNSTILE_SECRET` from the widget) on the Pages
   project. The Turnstile site key is public and lives in `lib/site.ts`.
6. Re-run the Site workflow, so a fresh deploy picks up the secrets, then try
   the form on `softfox.pages.dev/contact/`.

To rotate the Resend key: update the GitHub secret, then run the Terraform
workflow (Actions › Terraform › Run workflow).

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
NEXT_PUBLIC_CONTACT_FORM=on NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA npm run build
npx wrangler pages dev out
```

`dry-run` logs the email instead of sending it. The Turnstile values are
Cloudflare's always-pass test keys.
