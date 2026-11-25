output "pages_project" {
  description = "The Pages project the site deploys to (wrangler pages deploy --project-name)."
  value       = cloudflare_pages_project.site.name
}

output "pages_subdomain" {
  description = "The project's pages.dev address, which softfox.com will point at after the switch-over."
  value       = cloudflare_pages_project.site.subdomain
}

output "turnstile_site_key" {
  description = "The contact form's Turnstile site key: public, set as the repo variable TURNSTILE_SITE_KEY."
  value       = cloudflare_turnstile_widget.contact.id
}

output "turnstile_secret" {
  description = "Turnstile's secret, for the Function (wrangler pages secret put TURNSTILE_SECRET)."
  value       = cloudflare_turnstile_widget.contact.secret
  sensitive   = true
}
