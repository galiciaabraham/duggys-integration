import type { Metadata } from 'next';
import NavBar from '@/app/ui/layout/NavBar';
import Footer from '@/app/ui/layout/Footer';
import "./globals.css";

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
      <body className="bg-secondary-1">
          <header className='w-full bg-main-1'>
            < NavBar />
          </header>
          {children}
          < Footer />
      </body>
    </html>
  );
}
