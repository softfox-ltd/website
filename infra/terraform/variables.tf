variable "cloudflare_account_id" {
  description = "Cloudflare account ID. Passed via TF_VAR_cloudflare_account_id, never in HCL."
  type        = string
}

variable "resend_api_key" {
  description = "Resend API key (sending only, contact.softfox.com) for the contact form. From the GitHub secret RESEND_API_KEY via TF_VAR_resend_api_key."
  type        = string
  sensitive   = true
}
