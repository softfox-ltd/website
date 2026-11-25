import Link from 'next/link';
import { Logo } from '@/components/logo';
import { CE_CERTIFICATE_URL, CONTACT_HREF, FRACTIONAL_CTO_PATH } from '@/lib/site';

export const buttonPrimary =
  'inline-flex items-center justify-center h-10 px-5 rounded-[4px] bg-primary text-primary-foreground text-[13px] font-medium hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export const buttonSecondary =
  'inline-flex items-center justify-center h-10 px-5 rounded-[4px] border border-line bg-card text-ink text-[13px] font-medium hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export const textLink =
  'text-primary hover:text-primary-hover underline underline-offset-2 transition-colors';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-line">
      <div className="max-w-4xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link href="/" aria-label="Softfox home">
          <Logo size={22} />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href={FRACTIONAL_CTO_PATH}
            className="hidden sm:inline text-[13px] font-medium text-ink-soft hover:text-ink transition-colors"
          >
            What is a fractional CTO?
          </Link>
          <a
            href={CONTACT_HREF}
            className="text-[13px] font-medium text-ink-soft hover:text-ink transition-colors"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Logo size={16} />
        <p className="text-[13px] text-ink-soft">
          &copy; 2026 Softfox Ltd. Registered in England and Wales, company number 17237777. ·{' '}
          <a
            href={CE_CERTIFICATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink underline underline-offset-2 transition-colors"
          >
            Cyber Essentials certified
          </a>
        </p>
      </div>
    </footer>
  );
}

export function CtaBand({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="border-t border-line py-16 bg-card">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-semibold text-ink mb-4">{heading}</h2>
        <p className="text-[16px] text-ink-soft leading-relaxed mb-8 max-w-md">{body}</p>
        <a href={CONTACT_HREF} className={buttonPrimary}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
