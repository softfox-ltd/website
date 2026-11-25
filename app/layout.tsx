import type { Metadata } from 'next';
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
