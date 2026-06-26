import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Christmas Donation',
  description: 'YUVA — Christmas Donation. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="043 /"
      railLabel="CHRISTMAS"
      title="Christmas Donation"
      backHref="/donate-to-us"
      backLabel="Donate"
    />
  );
}
