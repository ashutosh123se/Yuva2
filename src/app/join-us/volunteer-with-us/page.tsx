import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volunteer with Us',
  description: 'YUVA — Volunteer with Us. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="037 /"
      railLabel="VOLUNTEER"
      title="Volunteer with Us"
      backHref="/join-us"
      backLabel="Join Us"
    />
  );
}
