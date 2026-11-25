import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter, textLink } from '@/components/site-chrome';
import { ContactForm } from '@/components/contact-form';
import { FRACTIONAL_CTO_PATH } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get in touch | Softfox',
  description: 'Contact Roger Foxcroft at Softfox about fractional CTO services, AI strategy and agentic adoption.',
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-8 grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-6"
              style={{ color: 'var(--brand-highlight)' }}
            >
              Get in touch
            </p>
            <h1 className="text-4xl font-semibold text-ink leading-tight mb-6">Let&rsquo;s talk.</h1>
            <div className="space-y-4 text-[16px] text-ink-soft leading-relaxed">
              <p>
                Tell us a little about your organisation and what you&rsquo;re
                trying to achieve. Roger reads every message and replies
                personally, usually within a working day.
              </p>
              <p>
                Not sure whether you need a fractional CTO?{' '}
                <Link href={FRACTIONAL_CTO_PATH} className={textLink}>
                  Here&rsquo;s what one does
                </Link>
                .
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
