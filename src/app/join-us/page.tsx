import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'YUVA — Join Us. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="034 /"
      railLabel="JOIN"
      title="Join Us"
      backHref="/"
      backLabel="Home"
    />
  );
}
