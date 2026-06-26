import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'YUVA — Contact Us. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="044 /"
      railLabel="CONTACT"
      title="Contact Us"
      backHref="/"
      backLabel="Home"
    />
  );
}
