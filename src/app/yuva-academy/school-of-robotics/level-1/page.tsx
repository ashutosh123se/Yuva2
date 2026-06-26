import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotics for Kids — Level 1',
  description: 'YUVA — Robotics for Kids — Level 1. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="031.1 /"
      railLabel="LEVEL 1"
      title="Robotics for Kids — Level 1"
      backHref="/yuva-academy/school-of-robotics"
      backLabel="School of Robotics"
    />
  );
}
