import Image from 'next/image';
import { Server, Shield, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-10 bg-background border-b border-line">
        <div className="max-w-4xl mx-auto px-8 h-14 flex items-center justify-between">
          <Logo size={22} />
          <a
            href="mailto:hello@softfox.com"
            className="text-[13px] font-medium text-ink-soft hover:text-ink transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Fox illustration — decorative, desktop only */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none select-none"
            aria-hidden="true"
            style={{
              maskImage: 'linear-gradient(to right, transparent 20%, black 52%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 20%, black 52%)',
            }}
          >
            <Image
              src="/softfox-fox.png"
              alt=""
              fill
              className="object-cover object-right-top"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-8 py-20">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-6"
              style={{ color: 'var(--brand-highlight)' }}
            >
              Softfox Ltd
            </p>
            <h1 className="text-4xl font-semibold text-ink leading-tight mb-6 max-w-[500px]">
              Making good technology genuinely useful for small organisations.
            </h1>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-10 max-w-[440px]">
              Softfox is a small IT consultancy that helps small businesses
              solve real problems — without the jargon or the oversell.
              Alongside that work, we build our own products.
            </p>
            <a
              href="mailto:hello@softfox.com"
              className="inline-flex items-center justify-center h-10 px-5 rounded-[4px] bg-primary text-primary-foreground text-[13px] font-medium hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* What we do */}
        <section className="border-t border-line py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-[11px] font-medium uppercase tracking-widest mb-4 text-ink-soft">
              What we do
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mb-10 max-w-xl">
              Softfox Ltd has two sides: consultancy work with small businesses,
              and the products we build ourselves.
            </p>
            <div className="grid md:grid-cols-2 gap-6">

              {/* IT Consultancy card */}
              <div className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <Server size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <p
                  className="text-[11px] font-medium uppercase tracking-wider mb-3"
                  style={{ color: 'var(--brand-highlight)' }}
                >
                  Consultancy
                </p>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  IT consultancy for small businesses
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  We work with small organisations as a trusted technology
                  partner — the kind of help where the right software, a clearer
                  process, or a well-built tool makes day-to-day work noticeably
                  easier. We care about doing things properly: sensible
                  architecture, security taken seriously, and solutions you can
                  actually maintain.
                </p>
              </div>

              {/* Safeguard card */}
              <div className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <Shield size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <p
                  className="text-[11px] font-medium uppercase tracking-wider mb-3"
                  style={{ color: 'var(--brand-highlight)' }}
                >
                  Our first product
                </p>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Safeguard
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed mb-5">
                  A platform that helps voluntary youth performing-arts and
                  sports groups manage safeguarding and the child performance
                  licensing that comes with putting on shows.
                </p>
                <a
                  href="https://safeguard.softfox.com"
                  className="inline-flex items-center gap-1 text-[14px] font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Visit safeguard.softfox.com
                  <ArrowRight size={15} strokeWidth={1.75} />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-line py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-[11px] font-medium uppercase tracking-widest mb-10 text-ink-soft">
              About
            </h2>
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
              <div className="flex flex-col items-start gap-4">
                <Image
                  src="/roger-foxcroft.jpg"
                  alt="Roger Foxcroft, founder of Softfox Ltd"
                  width={200}
                  height={240}
                  className="w-full rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                />
                <div>
                  <p className="text-[15px] font-semibold text-ink leading-tight">Roger Foxcroft</p>
                  <p className="text-[13px] text-ink-soft mt-0.5">Founder, Softfox Ltd</p>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Softfox Ltd was founded by Roger Foxcroft, who has spent more
                  than two decades building and leading technology teams —
                  delivering software platforms, engineering strategy, and
                  change for organisations large and small. Softfox brings that
                  experience to small businesses, with a practical, people-first
                  approach and no jargon.
                </p>
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  The same care goes into the products we build — starting with
                  Safeguard, which helps voluntary youth groups manage
                  safeguarding and child performance licensing. Whether it&rsquo;s
                  consultancy or our own software, the aim is the same: good
                  technology, done properly, that genuinely supports the people
                  who rely on it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="border-t border-line py-16 bg-card">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-semibold text-ink mb-4">
              Let&rsquo;s talk.
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8 max-w-md">
              We&rsquo;re open to new consultancy clients and always happy to
              hear about your organisation and what you&rsquo;re trying to
              achieve. No hard sell.
            </p>
            <a
              href="mailto:hello@softfox.com"
              className="inline-flex items-center justify-center h-10 px-5 rounded-[4px] bg-primary text-primary-foreground text-[13px] font-medium hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-8">
        <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Logo size={16} />
          <p className="text-[13px] text-ink-soft">
            &copy; 2026 Softfox Ltd. Registered in England and Wales.
          </p>
        </div>
      </footer>
    </>
  );
}
