import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies & Frameworks',
  description: 'YUVA — Policies & Frameworks. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="016 /"
      railLabel="POLICIES"
      title="Policies & Frameworks"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
