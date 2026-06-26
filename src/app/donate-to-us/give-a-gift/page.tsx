import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give a Gift',
  description: 'YUVA — Give a Gift. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="040 /"
      railLabel="GIFT"
      title="Give a Gift"
      backHref="/donate-to-us"
      backLabel="Donate"
    />
  );
}
