import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our History',
  description: 'YUVA — Our History. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="013 /"
      railLabel="HISTORY"
      title="Our History"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
