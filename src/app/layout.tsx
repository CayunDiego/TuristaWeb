import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono'; // Keep GeistMono for monospace
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

// Remove GeistSans import as Kumbh Sans will be the default via Tailwind config
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'Web para Turismo',
  description: 'Find and customize beautiful website templates for your tourism business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Style+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`} // font-sans will now apply Kumbh Sans
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
