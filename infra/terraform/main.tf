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

  # wrangler records the output folder (wrangler.toml's
  # pages_build_output_dir) on the project when it deploys. It doesn't matter
  # for direct upload; ignoring it stops every plan from undoing it.
  lifecycle {
    ignore_changes = [build_config]
  }
}

# Turnstile on the contact form: no puzzle for most people, a check for
# scripts. Works on the live site and on the previews (*.softfox.pages.dev).
resource "cloudflare_turnstile_widget" "contact" {
  account_id = var.cloudflare_account_id
  name       = "softfox.com contact form"
  domains    = ["softfox.com", "www.softfox.com", cloudflare_pages_project.site.subdomain]
  mode       = "managed"
  region     = "world"
}
