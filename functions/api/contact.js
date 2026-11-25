// POST /api/contact: the contact form on softfox.com (app/contact/page.tsx)
// emails Roger, with Reply-To set to whoever wrote, so replying answers them.
// A Cloudflare Pages Function, deployed with the site, as Joue's licence form
// (softfox-joue site/functions/api/licence.js) is.
//
// Bindings (wrangler.toml): FROM; NOTIFY_TO; PREVIEW. Secrets (wrangler pages
// secret put): RESEND_API_KEY ("dry-run" logs the email instead, for trying it
// locally); TURNSTILE_SECRET.

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return reply(400, 'form', 'Something went wrong sending the form. Reload the page and try again.');
  }
  // A field people can't see: anything in it came from a script.
  if (text(form.get('website'), 200)) return reply(200, 'sent', 'Thanks, your message is on its way.');

  const name = text(form.get('name'), 100);
  const email = text(form.get('email'), 254).toLowerCase();
  const organisation = text(form.get('organisation'), 200);
  const message = paragraphs(form.get('message'), 5000);
  if (!name) return reply(400, 'name', 'Please give your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(400, 'email', 'Please check your email address: it’s how we reply.');
  if (!message) return reply(400, 'message', 'Please write a message.');

  if (!(await human(env, form.get('cf-turnstile-response'), request.headers.get('CF-Connecting-IP')))) {
    return reply(403, 'captcha', 'We couldn’t check that you’re not a robot. Reload the page and try again.');
  }

  const sent = await sendEmail(env, {
    to: env.NOTIFY_TO,
    reply_to: email,
    subject: `${env.PREVIEW === 'yes' ? '[Preview] ' : ''}softfox.com enquiry: ${name}${organisation ? `, ${organisation}` : ''}`,
    text: `A message from the contact form on softfox.com. Reply to this email to answer ${name.split(' ')[0]}.

Name:          ${name}
Email:         ${email}
Organisation:  ${organisation || '(not given)'}
Country:       ${request.cf?.country ?? '(unknown)'}

${message}
`,
  });
  if (!sent) {
    return reply(502, 'email', `We couldn’t send your message just now. Please try again in a few minutes, or email ${env.NOTIFY_TO}.`);
  }
  return reply(200, 'sent', 'Thanks, your message is on its way. Roger will reply by email, usually within a working day.');
}

async function human(env, token, ip) {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', (env.TURNSTILE_SECRET ?? '').trim()); // a stray space or newline from pasting it
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const answer = await result.json().catch(() => null); // a 400 still says why
  if (answer?.success !== true) {
    // Why, for the logs (wrangler pages deployment tail): invalid-input-secret (TURNSTILE_SECRET is wrong),
    // timeout-or-duplicate (an old token), another hostname…
    console.log('Turnstile refused:', result.status, JSON.stringify(answer?.['error-codes'] ?? null), answer?.hostname ?? '');
  }
  return answer?.success === true;
}

async function sendEmail(env, { to, reply_to, subject, text }) {
  const message = { from: env.FROM, to: [to], reply_to, subject, text };
  if (env.RESEND_API_KEY === 'dry-run') {
    console.log('email (dry run):', JSON.stringify(message));
    return true;
  }
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  if (!response.ok) console.log('Resend refused the email:', response.status, await response.text());
  return response.ok;
}

function reply(status, code, message) {
  return Response.json({ ok: status === 200, code, message }, { status });
}

/** One line: trimmed, inner whitespace collapsed, cut to max. */
function text(value, max) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ').slice(0, max) : '';
}

/** A message: line breaks kept, runs of blank lines cut to one, cut to max. */
function paragraphs(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n?/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim().slice(0, max);
}
