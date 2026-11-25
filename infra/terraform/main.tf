# softfox.com's own infrastructure, set up as Joue's is (softfox-joue
# infra/terraform). softfox.com's DNS is shared by several apps, so each
# manages only its own records from its own workspace: Joue owns joue.*,
# Safeguard owns *.safeguard.*, and this workspace owns contact.* (the contact
# form's sending domain). The apex, www and mail are still set by hand in the
# Cloudflare dashboard, until the switch-over from GitHub Pages
# (README.md, "Switching softfox.com over").
#
# State is in HCP Terraform (organization softfox-safeguard, workspace
# softfox-website), with Local execution: plans and applies run in GitHub
# Actions (.github/workflows/terraform.yml), which hold the credentials.
#
# Once Terraform manages something here, change it here, never in the
# Cloudflare dashboard: the next apply would put it back.
terraform {
  required_version = "~> 1.15"

  cloud {
    organization = "softfox-safeguard"

    workspaces {
      name = "softfox-website"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = ">= 4.44.0, < 4.52.0" # as Safeguard's and Joue's, so they stay in step
    }
  }
}

# Reads CLOUDFLARE_API_TOKEN from the environment: the website's own token
# (DNS edit on softfox.com, Cloudflare Pages edit, Turnstile edit), never
# Safeguard's or Joue's.
provider "cloudflare" {}

data "cloudflare_zone" "softfox" {
  name = "softfox.com"
}

# The site. Direct upload: GitHub Actions builds it and deploys it with
# wrangler, so Cloudflare needs no access to this repo, and a deploy only
# happens after the build passes. Its custom domains (softfox.com, www) are
# added at the switch-over, not before.
resource "cloudflare_pages_project" "site" {
  account_id        = var.cloudflare_account_id
  name              = "softfox"
  production_branch = "main"

  # The contact form Function's secrets, for the live site and previews:
  # Turnstile's from the widget below, Resend's from the GitHub secret
  # RESEND_API_KEY (via TF_VAR_resend_api_key in terraform.yml). Plain
  # settings (FROM, NOTIFY_TO, PREVIEW) stay in wrangler.toml.
  deployment_configs {
    production {
      compatibility_date = "2026-10-19" # as wrangler.toml
      secrets = {
        RESEND_API_KEY   = var.resend_api_key
        TURNSTILE_SECRET = cloudflare_turnstile_widget.contact.secret
      }
    }
    preview {
      compatibility_date = "2026-10-19"
      secrets = {
        RESEND_API_KEY   = var.resend_api_key
        TURNSTILE_SECRET = cloudflare_turnstile_widget.contact.secret
      }
    }
  }

  # wrangler.toml is the source of truth for everything but the secrets: each
  # deploy writes its output folder, vars (FROM, NOTIFY_TO, PREVIEW) and
  # usage model onto the project. Ignoring them stops every plan undoing that.
  lifecycle {
    ignore_changes = [
      build_config,
      deployment_configs[0].production[0].environment_variables,
      deployment_configs[0].production[0].usage_model,
      deployment_configs[0].preview[0].environment_variables,
      deployment_configs[0].preview[0].usage_model,
    ]
  }
}

# Turnstile on the contact form: no puzzle for most people, a check for
# scripts. Works on the live site and on the previews (*.softfox.pages.dev).
resource "cloudflare_turnstile_widget" "contact" {
  account_id = var.cloudflare_account_id
  name       = "softfox.com contact form"
  domains    = ["softfox.com", "www.softfox.com", "softfox.pages.dev"] # the project's subdomain; spelled out, as the project needs this widget's secret
  mode       = "managed"
  region     = "world"
}
