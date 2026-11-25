# Resend: contact.softfox.com as a sending domain, for the contact form's
# emails to Roger. The domain is added in the Resend dashboard (EU,
# eu-west-1), as joue.softfox.com and safeguard.softfox.com are; these records
# are copied from it. All under contact.*, per the naming rule in main.tf.

# TODO: once contact.softfox.com is added in Resend, copy its DKIM value here
# and uncomment.
# resource "cloudflare_record" "resend_dkim" {
#   zone_id = data.cloudflare_zone.softfox.id
#   name    = "resend._domainkey.contact"
#   type    = "TXT"
#   content = "\"p=<from the Resend dashboard>\""
#   ttl     = 300
#   comment = "Resend DKIM for contact.softfox.com (website Terraform)"
# }

# Sending and bounces: Resend points these at its own mail servers. Not
# proxied: Cloudflare's proxy would hide the target and break them.
resource "cloudflare_record" "resend_rsend" {
  zone_id = data.cloudflare_zone.softfox.id
  name    = "rsend.contact"
  type    = "CNAME"
  content = "rsend-euw1.forge.rmta.net"
  proxied = false
  ttl     = 300
  comment = "Resend sending for contact.softfox.com (website Terraform)"
}

resource "cloudflare_record" "resend_send" {
  zone_id = data.cloudflare_zone.softfox.id
  name    = "send.contact"
  type    = "CNAME"
  content = "send.forge.rmta.net"
  proxied = false
  ttl     = 300
  comment = "Resend bounces for contact.softfox.com (website Terraform)"
}

# DMARC for contact.softfox.com, as Joue and Safeguard have for theirs:
# monitoring only to start, with reports to dmarc@softfox.com.
resource "cloudflare_record" "dmarc_contact" {
  zone_id = data.cloudflare_zone.softfox.id
  name    = "_dmarc.contact"
  type    = "TXT"
  content = "\"v=DMARC1; p=none; rua=mailto:dmarc@softfox.com; fo=1\""
  ttl     = 300
  comment = "DMARC for contact.softfox.com (website Terraform)"
}
