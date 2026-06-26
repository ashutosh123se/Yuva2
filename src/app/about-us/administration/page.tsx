import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Administration',
  description: 'YUVA — Administration. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="015 /"
      railLabel="ADMIN"
      title="Administration"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
