import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organigram',
  description: 'YUVA — Organigram. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="015.1 /"
      railLabel="ORGANIGRAM"
      title="Organigram"
      backHref="/about-us/administration"
      backLabel="Administration"
    />
  );
}
