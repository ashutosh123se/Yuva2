import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Dispatch',
  description: 'YUVA — The Dispatch. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="033 /"
      railLabel="BLOG"
      title="The Dispatch"
      backHref="/"
      backLabel="Home"
    />
  );
}
