import Image from 'next/image';
import Link from 'next/link';
import { Compass, Workflow, Server, Shield, KeyboardMusic, ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter, CtaBand, buttonPrimary, buttonSecondary, textLink } from '@/components/site-chrome';
import { FreemanClarkeLogo } from '@/components/freeman-clarke-logo';
import { Testimonials } from '@/components/testimonials';
import {
  CE_CERTIFICATE_URL,
  CE_BADGE_WIDGET_URL,
  CONTACT_HREF,
  FREEMAN_CLARKE_URL,
  FREEMAN_CLARKE_REGION,
  FRACTIONAL_CTO_PATH,
} from '@/lib/site';

const card =
  'bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]';

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
      style={{ backgroundColor: 'var(--secondary)' }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-medium uppercase tracking-wider mb-3"
      style={{ color: 'var(--brand-highlight)' }}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

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

          <div className="relative max-w-4xl mx-auto px-8 py-20">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-6"
              style={{ color: 'var(--brand-highlight)' }}
            >
              Fractional CTO · Softfox Ltd
            </p>
            <h1 className="text-4xl font-semibold text-ink leading-tight mb-6 max-w-[520px]">
              Fractional CTO services, specialising in AI strategy and agentic
              adoption.
            </h1>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-10 max-w-[460px]">
              Senior technology leadership for growing businesses, for as many
              days as you need it rather than as a full-time hire. Delivered as
              part of {FREEMAN_CLARKE_REGION}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT_HREF} className={buttonPrimary}>
                Get in touch
              </a>
              <Link href={FRACTIONAL_CTO_PATH} className={buttonSecondary}>
                What is a fractional CTO?
              </Link>
            </div>
          </div>
        </section>

        {/* Fractional CTO services */}
        <section className="border-t border-line py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-[11px] font-medium uppercase tracking-widest mb-4 text-ink-soft">
              Fractional CTO services
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mb-10 max-w-xl">
              Technology leadership at board level, with a specialism in
              helping organisations decide where agentic AI makes sense and
              then putting it to work.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={card}>
                <CardIcon>
                  <Compass size={18} className="text-primary" strokeWidth={1.5} />
                </CardIcon>
                <Eyebrow>Agentic strategy</Eyebrow>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Where AI fits
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  Business strategy support to work out where agentic AI
                  genuinely helps, where it doesn&rsquo;t, and how to adopt it
                  safely.
                </p>
              </div>

              <div className={card}>
                <CardIcon>
                  <Workflow size={18} className="text-primary" strokeWidth={1.5} />
                </CardIcon>
                <Eyebrow>Agentic design</Eyebrow>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Agents that do the work
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  Designing agent-based workflows that take over manual tasks,
                  such as finance and bookkeeping work that used to be done by
                  hand.
                </p>
              </div>

              <div className={card}>
                <CardIcon>
                  <Server size={18} className="text-primary" strokeWidth={1.5} />
                </CardIcon>
                <Eyebrow>Technology leadership</Eyebrow>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  The rest of the CTO role
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  Technology strategy, IT and systems, suppliers and security
                  (Softfox is{' '}
                  <a
                    href={CE_CERTIFICATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                  >
                    Cyber Essentials certified
                  </a>
                  ), handled properly and explained in plain terms.
                </p>
              </div>
            </div>

            {/* Freeman Clarke */}
            <div className={`${card} mt-6 flex flex-col sm:flex-row sm:items-center gap-6`}>
              <a
                href={FREEMAN_CLARKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-ink hover:text-primary transition-colors"
              >
                <FreemanClarkeLogo className="h-12 w-auto" />
              </a>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Softfox is part of{' '}
                <a
                  href={FREEMAN_CLARKE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLink}
                >
                  {FREEMAN_CLARKE_REGION}
                </a>
                {'. '}
                Freeman Clarke is a network of nearly 100 experienced CIOs
                and CTOs across a wide range of disciplines, with partnerships
                with national groups of fractional finance, marketing and HR
                leaders. With that support behind it, Softfox can give clients
                a broader, better service than one person working alone.{' '}
                <Link href={FRACTIONAL_CTO_PATH} className={textLink}>
                  How a fractional CTO works
                </Link>
              </p>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Products */}
        <section className="border-t border-line py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-[11px] font-medium uppercase tracking-widest mb-4 text-ink-soft">
              Our products
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mb-10 max-w-xl">
              Alongside client work, we build our own software.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${card} flex flex-col`}>
                <CardIcon>
                  <Shield size={18} className="text-primary" strokeWidth={1.5} />
                </CardIcon>
                <Eyebrow>Safeguarding</Eyebrow>
                <h3 className="text-xl font-semibold text-ink mb-3">Safeguard</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed mb-5 flex-1">
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

              <div className={`${card} flex flex-col`}>
                <CardIcon>
                  <KeyboardMusic size={18} className="text-primary" strokeWidth={1.5} />
                </CardIcon>
                <div className="flex items-center gap-2 mb-3">
                  <p
                    className="text-[11px] font-medium uppercase tracking-wider"
                    style={{ color: 'var(--brand-highlight)' }}
                  >
                    Theatre
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border border-line text-ink-soft">
                    Beta
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Joue</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed mb-5 flex-1">
                  Keyboard rigs for the theatre that don&rsquo;t let you down.
                  Joue plays a show&rsquo;s sounds on a Mac, patch by patch, and
                  runs every plugin on its own, so if one fails the rest of the
                  show plays on. Free while in beta.
                </p>
                <a
                  href="https://joue.softfox.com"
                  className="inline-flex items-center gap-1 text-[14px] font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Visit joue.softfox.com
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
                {/* Cyber Essentials smart badge (Blockmark). The registry's own
                    widget verifies the certificate live; the transparent theme
                    sits on the paper background without a white box. 132px is
                    the widget's minimum. Keep the IASME mark as issued — never
                    recolour or restyle it. */}
                <div className="flex flex-col items-start gap-2">
                  <iframe
                    src={CE_BADGE_WIDGET_URL}
                    title="Cyber Essentials certified — verified by Blockmark"
                    style={{ border: 'none', height: 132, width: 132 }}
                    loading="lazy"
                  />
                  <p className="text-[13px] text-ink-soft">
                    Cyber Essentials certified ·{' '}
                    <a
                      href={CE_CERTIFICATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={textLink}
                    >
                      Verify
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Softfox Ltd was founded by Roger Foxcroft, who has spent three
                  decades building and leading technology teams &mdash;
                  delivering software platforms, engineering strategy, and
                  change for organisations large and small. Today Roger works
                  as a fractional CTO, part of {FREEMAN_CLARKE_REGION}, with a
                  focus on helping businesses adopt AI and agents in ways that
                  genuinely pay off.
                </p>
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  The same care goes into the products we build: Safeguard,
                  which helps voluntary youth groups manage safeguarding and
                  child performance licensing, and Joue, which runs keyboard
                  rigs for theatre shows. Whether it&rsquo;s advisory work or
                  our own software, the aim is the same: good technology, done
                  properly, that genuinely supports the people who rely on it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Let’s talk."
          body="Whether you’re weighing up AI, need a senior technology voice in the room, or just want a second opinion, a conversation is the best place to start."
        />
      </main>

      <SiteFooter />
    </>
  );
}
