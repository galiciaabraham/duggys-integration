import type { Metadata } from 'next';
import NavBar from '@/app/ui/layout/NavBar';
import Footer from '@/app/ui/layout/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Duggys INT',
    default: 'Duggys project'
  },
  description: 'This is my personal project on a family owned business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
      <meta name="apple-mobile-web-app-title" content="Duggys favicon" />
      </head> */}
      <body>
          <header>
            < NavBar />
          </header>
          {children}
          < Footer />
      </body>
    </html>
  );
}
