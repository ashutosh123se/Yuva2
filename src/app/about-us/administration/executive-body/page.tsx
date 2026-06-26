import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Body',
  description: 'YUVA — Executive Body. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="015.2 /"
      railLabel="EXECUTIVE"
      title="Executive Body"
      backHref="/about-us/administration"
      backLabel="Administration"
    />
  );
}
