// Softfox Ltd's Cyber Essentials certificate on the Blockmark registry. The
// certificate page is the public verification record; the widget URL renders
// the registry's live smart badge (transparent theme, tooltip on hover).
export const CE_CERTIFICATE_URL =
  'https://registry.blockmarktech.com/certificates/6ae09d98-aa88-45d3-b7c9-803ebbbdaf1d/';
export const CE_BADGE_WIDGET_URL = `${CE_CERTIFICATE_URL}widget/?tooltip_position=bottom_right&theme=transparent&hover=t`;

export const CONTACT_EMAIL = 'hello@softfox.com';

// Every "Get in touch" link points here. The contact form needs its Function
// (functions/api/contact.js), which only Cloudflare Pages runs, so only the
// Cloudflare build (.github/workflows/site.yml) turns the form on. The GitHub
// Pages build keeps the email link until softfox.com moves to Cloudflare.
export const CONTACT_FORM_ON = process.env.NEXT_PUBLIC_CONTACT_FORM === 'on';
export const CONTACT_HREF = CONTACT_FORM_ON ? '/contact/' : `mailto:${CONTACT_EMAIL}`;

// The contact form's Turnstile site key: public, infra/terraform's
// turnstile_site_key output. Locally, NEXT_PUBLIC_TURNSTILE_SITE_KEY sets
// Cloudflare's always-pass test key instead (infra/terraform/README.md).
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAGSULrzNm0jYp7Rw';

export const FREEMAN_CLARKE_URL = 'https://freemanclarke.com/';
export const FREEMAN_CLARKE_REGION = 'Freeman Clarke West Midlands';

export const FRACTIONAL_CTO_PATH = '/fractional-cto/';
