import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Self-hosted (app/fonts, the latin subsets of Google Fonts' variable files,
// SIL Open Font License) rather than next/font/google: Google Fonts sometimes
// hands GitHub's runners font URLs that Next 14's loader can't parse, which
// fails the build. Same fonts, weights and CSS variables as before.
const sourceSerif = localFont({
  src: './fonts/sourceserif4-latin.woff2',
  weight: '200 900',
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = localFont({
  src: './fonts/sourcesans3-latin.woff2',
  weight: '200 900',
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Softfox',
  description:
    'Softfox provides fractional CTO services, specialising in AI strategy and agentic adoption, as part of Freeman Clarke West Midlands. Makers of Safeguard and Joue.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
