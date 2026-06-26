import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'YUVA — Be the Fire. Be the Change.', template: '%s — YUVA' },
  description: 'YUVA is the largest and most active award-winning NGO of Mauritius and India, breaking the cycle of poverty through Education, Employment, Empowerment, and Health.',
  keywords: ['YUVA', 'NGO', 'Mauritius', 'India', 'poverty', 'youth', 'activism', 'education'],
  openGraph: {
    siteName: 'YUVA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
