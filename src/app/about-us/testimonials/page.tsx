import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'YUVA — Testimonials. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="018 /"
      railLabel="TESTIMONIALS"
      title="Testimonials"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
