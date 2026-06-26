import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work for Us',
  description: 'YUVA — Work for Us. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="035 /"
      railLabel="WORK"
      title="Work for Us"
      backHref="/join-us"
      backLabel="Join Us"
    />
  );
}
