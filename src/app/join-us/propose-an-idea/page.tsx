import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Propose an Idea',
  description: 'YUVA — Propose an Idea. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="038 /"
      railLabel="IDEAS"
      title="Propose an Idea"
      backHref="/join-us"
      backLabel="Join Us"
    />
  );
}
