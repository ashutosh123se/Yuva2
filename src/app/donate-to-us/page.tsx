import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'YUVA — Donate. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="039 /"
      railLabel="DONATE"
      title="Donate"
      backHref="/"
      backLabel="Home"
    />
  );
}
