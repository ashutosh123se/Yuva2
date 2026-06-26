import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsor a Child's Education',
  description: 'YUVA — Sponsor a Child's Education. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="041 /"
      railLabel="SPONSOR"
      title="Sponsor a Child's Education"
      backHref="/donate-to-us"
      backLabel="Donate"
    />
  );
}
