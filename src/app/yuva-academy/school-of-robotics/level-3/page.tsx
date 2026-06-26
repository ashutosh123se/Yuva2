import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotics for Kids — Level 3',
  description: 'YUVA — Robotics for Kids — Level 3. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="031.3 /"
      railLabel="LEVEL 3"
      title="Robotics for Kids — Level 3"
      backHref="/yuva-academy/school-of-robotics"
      backLabel="School of Robotics"
    />
  );
}
