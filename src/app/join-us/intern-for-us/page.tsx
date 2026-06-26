import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intern for Us',
  description: 'YUVA — Intern for Us. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="036 /"
      railLabel="INTERN"
      title="Intern for Us"
      backHref="/join-us"
      backLabel="Join Us"
    />
  );
}
