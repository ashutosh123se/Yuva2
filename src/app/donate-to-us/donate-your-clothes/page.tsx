import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate Your Clothes',
  description: 'YUVA — Donate Your Clothes. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="042 /"
      railLabel="CLOTHES"
      title="Donate Your Clothes"
      backHref="/donate-to-us"
      backLabel="Donate"
    />
  );
}
