import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A weather app built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={
          poppins.className +
          ' bg-gradient-to-tl from-blue-500 via-blue-400 to-blue-500 w-full items-center justify-center flex min-h-screen text-white'
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
