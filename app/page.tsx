import { Server, Shield } from 'lucide-react';
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
        <section className="py-20 max-w-4xl mx-auto px-8">
          <p
            className="text-[11px] font-medium uppercase tracking-widest mb-6"
            style={{ color: 'var(--brand-highlight)' }}
          >
            Softfox Ltd
          </p>
          <h1 className="text-4xl font-semibold text-ink leading-tight mb-6 max-w-2xl">
            Considered IT consultancy for growing organisations.
          </h1>
          <p className="text-[17px] text-ink-soft leading-relaxed mb-10 max-w-xl">
            We help small and medium-sized businesses get more from their
            technology — from infrastructure and cloud strategy to day-to-day
            support.
          </p>
          <a
            href="mailto:hello@softfox.com"
            className="inline-flex items-center justify-center h-10 px-5 rounded-[4px] bg-primary text-primary-foreground text-[13px] font-medium hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </section>

        {/* What we do */}
        <section className="border-t border-line py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-[11px] font-medium uppercase tracking-widest mb-10 text-ink-soft">
              What we do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">

              {/* IT Consultancy card */}
              <div className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <Server size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  IT Consultancy
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  We work with small and medium-sized organisations as a trusted
                  technology partner — helping with infrastructure, cloud
                  strategy, systems integration, and ongoing support. No
                  overhead, no jargon.
                </p>
              </div>

              {/* Safeguard card */}
              <div className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <Shield size={18} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-[11px] font-medium uppercase tracking-wider px-2 py-1 rounded-sm"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--brand-highlight) 12%, transparent)',
                      color: 'var(--brand-highlight)',
                    }}
                  >
                    Coming soon
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Safeguard
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  Safeguarding management software for voluntary youth
                  performing arts and sports groups. Built to help leaders keep
                  minors safe, records accurate, and trustees confident.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="border-t border-line py-16 bg-card">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-semibold text-ink mb-4">
              Work with us.
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8 max-w-md">
              We&rsquo;d like to hear about your organisation and what you&rsquo;re
              trying to achieve.
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
