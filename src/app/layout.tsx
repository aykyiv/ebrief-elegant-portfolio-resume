import type { Metadata } from 'next';
import { Play, Roboto_Slab, Unbounded } from 'next/font/google';
import "./globals.css";

const play = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-play',
  display: 'swap',
});
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-unbounded',
  display: 'swap',
});
const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "eBrief Elegant Portfolio",
  description: "Game Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased relative ${play.variable} ${unbounded.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
