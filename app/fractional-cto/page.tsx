import type { Metadata } from 'next';
import { SiteHeader, SiteFooter, CtaBand, textLink } from '@/components/site-chrome';
import { FreemanClarkeLogo } from '@/components/freeman-clarke-logo';
import { FREEMAN_CLARKE_URL, FREEMAN_CLARKE_REGION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'What is a fractional CTO? | Softfox',
  description:
    'A fractional CTO is an experienced technology leader who works with your business part-time. Softfox provides fractional CTO services, specialising in AI strategy and agentic adoption, as part of Freeman Clarke West Midlands.',
};

// Definitions follow Freeman Clarke's own wording so the two sites agree.
const FC_WHY_FRACTIONAL = 'https://www.freemanclarke.com/en-us/why-fractional/';
const FC_FRACTIONAL_CIO = 'https://freemanclarke.com/fractional-cio/';
const FC_CIO_VS_CTO = 'https://freemanclarke.com/ceo-briefings/cio-vs-cto-whats-the-difference/';

const prose = 'text-[16px] text-ink-soft leading-relaxed';
const h2 = 'text-2xl font-semibold text-ink mb-4';

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={textLink}>
      {children}
    </a>
  );
}

export default function FractionalCto() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-8">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-6"
              style={{ color: 'var(--brand-highlight)' }}
            >
              Fractional CTO
            </p>
            <h1 className="text-4xl font-semibold text-ink leading-tight mb-6">
              What is a fractional CTO?
            </h1>
            <p className="text-[18px] text-ink-soft leading-relaxed">
              A fractional CTO is an experienced chief technology officer who
              works with your business part-time, or for a set number of days,
              instead of joining as a full-time hire.
            </p>
          </div>
        </section>

        <section className="border-t border-line py-14">
          <div className="max-w-2xl mx-auto px-8 space-y-10">
            <div>
              <h2 className={h2}>Who it suits</h2>
              <p className={prose}>
                Growing businesses that need senior technology leadership, but
                not a full-time executive. You get someone who has done the job
                before, sitting alongside your leadership team, for as much time
                as the work needs.
              </p>
            </div>

            <div>
              <h2 className={h2}>What it covers</h2>
              <p className={prose}>
                Technology strategy, IT and systems, suppliers and security.
                Softfox&rsquo;s specialism is AI strategy and agentic adoption:
                deciding where AI agents make sense for your business, and
                designing the workflows that let them take over manual work.
              </p>
            </div>

            <div>
              <h2 className={h2}>Why &ldquo;fractional&rdquo;?</h2>
              <p className={prose}>
                Freeman Clarke describes a fractional leader as one who splits
                their time between several businesses. You may also hear
                on-demand, part-time, plural or portfolio; they mean the same
                thing (<Ext href={FC_WHY_FRACTIONAL}>Why Fractional?</Ext>).
              </p>
            </div>

            <div>
              <h2 className={h2}>Fractional CTO or fractional CIO?</h2>
              <div className="space-y-4">
                <p className={prose}>
                  The two titles are often used interchangeably and defined
                  inconsistently, so it&rsquo;s worth being plain about the
                  difference.
                </p>
                <p className={prose}>
                  In Freeman Clarke&rsquo;s terms, a CIO focuses on internal
                  IT: strategy, systems, security and operations (
                  <Ext href={FC_FRACTIONAL_CIO}>Fractional CIO</Ext>). A CTO
                  looks outward and forward, developing innovation and
                  technology strategy to drive growth (
                  <Ext href={FC_CIO_VS_CTO}>CIO vs CTO</Ext>).
                </p>
                <p className={prose}>
                  Roger is a CTO. Helping a business adopt AI and agents is
                  about changing how the business works and grows, not just
                  keeping internal systems running, and that is CTO work. The
                  internal IT side is still covered as part of the role.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2}>How it works</h2>
              <p className={`${prose} mb-6`}>
                Softfox works as part of{' '}
                <Ext href={FREEMAN_CLARKE_URL}>{FREEMAN_CLARKE_REGION}</Ext>.
                Freeman Clarke engages with clients and handles invoicing;
                Softfox delivers the service. It usually starts with a
                conversation about where you are and what you&rsquo;re trying
                to achieve.
              </p>
              <a
                href={FREEMAN_CLARKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-ink hover:text-primary transition-colors"
              >
                <FreemanClarkeLogo className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Is a fractional CTO right for you?"
          body="Tell us a little about your business and what you’re trying to achieve, and we’ll give you an honest answer."
        />
      </main>

      <SiteFooter />
    </>
  );
}
