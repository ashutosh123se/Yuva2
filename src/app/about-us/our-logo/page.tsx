import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Logo',
  description: 'YUVA — Our Logo. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="014 /"
      railLabel="LOGO"
      title="Our Logo"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
