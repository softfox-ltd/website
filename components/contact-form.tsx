'use client';

import { useRef, useState } from 'react';
import Script from 'next/script';
import { buttonPrimary } from '@/components/site-chrome';
import { CONTACT_EMAIL, TURNSTILE_SITE_KEY } from '@/lib/site';

declare global {
  interface Window {
    turnstile?: { reset: (widget?: string) => void };
  }
}

type Result = { ok: boolean; message: string } | null;

const input =
  'w-full rounded-[4px] border border-line bg-card px-3 text-[15px] text-ink font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

// Posts to functions/api/contact.js (a Cloudflare Pages Function), which
// checks Turnstile and emails Roger through Resend.
export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<Result>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const el = form.current;
    if (!el || !el.reportValidity()) return;
    setSending(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', body: new FormData(el) });
      const answer = await response.json().catch(() => null);
      setResult({
        ok: response.ok,
        message: answer?.message ?? `Something went wrong. Please try again in a few minutes, or email ${CONTACT_EMAIL}.`,
      });
      if (response.ok) return; // the form stays disabled once sent
    } catch {
      setResult({ ok: false, message: 'We couldn’t reach softfox.com. Check your connection and try again.' });
    }
    window.turnstile?.reset();
    setSending(false);
  }

  const sent = result?.ok === true;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <form
        ref={form}
        onSubmit={submit}
        noValidate
        className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5"
      >
        <fieldset disabled={sending || sent} className="flex flex-col gap-5">
          <label className="flex flex-col gap-1.5 text-[14px] font-medium text-ink">
            Your name
            <input name="name" autoComplete="name" required maxLength={100} className={`${input} h-11`} />
          </label>
          <label className="flex flex-col gap-1.5 text-[14px] font-medium text-ink">
            Your email address
            <input name="email" type="email" autoComplete="email" required maxLength={254} className={`${input} h-11`} />
          </label>
          <label className="flex flex-col gap-1.5 text-[14px] font-medium text-ink">
            <span>
              Organisation <span className="text-ink-soft font-normal">(optional)</span>
            </span>
            <input name="organisation" autoComplete="organization" maxLength={200} className={`${input} h-11`} />
          </label>
          <label className="flex flex-col gap-1.5 text-[14px] font-medium text-ink">
            How can we help?
            <textarea name="message" required maxLength={5000} rows={6} className={`${input} py-2.5 leading-relaxed`} />
          </label>
          {/* Hidden from people; scripts fill it in, and the Function drops those. */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>
              Leave this empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />
        </fieldset>

        {result && (
          <p
            role="status"
            className={`rounded-[4px] border px-4 py-3 text-[14px] font-medium ${
              result.ok ? 'border-line bg-secondary text-ink' : 'border-destructive text-destructive'
            }`}
          >
            {result.message}
          </p>
        )}
        {/* The status region is always present so screen readers hear the result. */}
        <span aria-live="polite" className="sr-only">{result?.message}</span>

        {!sent && (
          <button type="submit" disabled={sending} className={`${buttonPrimary} self-start disabled:opacity-60`}>
            {sending ? 'Sending…' : 'Send message'}
          </button>
        )}
        <p className="text-[13px] text-ink-soft">
          We use your details only to reply to you. Prefer email? Write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 hover:text-ink">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </form>
    </>
  );
}
