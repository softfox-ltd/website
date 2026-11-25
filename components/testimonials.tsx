import Image from 'next/image';

interface Testimonial {
  organisation: string;
  /** Leave null until the client has approved the exact words. */
  quote: string | null;
  name: string | null;
  role: string | null;
  logo?: { src: string; width: number; height: number };
  /** Shown next to the quote, e.g. a board role Roger holds there. */
  disclosure?: string;
}

// Placeholders: a testimonial with no quote is never rendered, and the whole
// strip stays hidden until at least one quote is filled in. Nothing can go
// live empty.
const TESTIMONIALS: Testimonial[] = [
  {
    organisation: 'A Major Music',
    quote: null, // TODO: one or two sentences from one of the owners
    name: null,
    role: null,
    logo: { src: '/logos/a-major-music.png', width: 600, height: 247 },
    disclosure:
      'Roger is a non-executive director of A Major Music Supplies Ltd. He holds no shares in the business.',
  },
  {
    organisation: 'Safe Park',
    quote: null, // TODO: one or two sentences, on the software and business advice
    name: null,
    role: null,
  },
];

export function Testimonials() {
  const ready = TESTIMONIALS.filter((t) => t.quote && t.name);
  if (ready.length === 0) return null;

  return (
    <section className="border-t border-line py-16" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto px-8">
        <h2
          id="testimonials-heading"
          className="text-[11px] font-medium uppercase tracking-widest mb-10 text-ink-soft"
        >
          What clients say
        </h2>
        <div className={`grid gap-6 ${ready.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {ready.map((t) => (
            <figure
              key={t.organisation}
              className="bg-card border border-line rounded-lg p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col"
            >
              {t.logo && (
                <Image
                  src={t.logo.src}
                  alt={t.organisation}
                  width={t.logo.width}
                  height={t.logo.height}
                  className="h-10 w-auto mb-6 self-start"
                />
              )}
              <blockquote className="text-[17px] text-ink leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-[14px] text-ink-soft">
                <span className="font-semibold text-ink">{t.name}</span>
                {t.role && `, ${t.role}`}, {t.organisation}
                {t.disclosure && (
                  <span className="block mt-3 text-[13px]">{t.disclosure}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
