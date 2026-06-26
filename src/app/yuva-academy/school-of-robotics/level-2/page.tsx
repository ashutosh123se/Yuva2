import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotics for Kids — Level 2',
  description: 'YUVA — Robotics for Kids — Level 2. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="031.2 /"
      railLabel="LEVEL 2"
      title="Robotics for Kids — Level 2"
      backHref="/yuva-academy/school-of-robotics"
      backLabel="School of Robotics"
    />
  );
}
