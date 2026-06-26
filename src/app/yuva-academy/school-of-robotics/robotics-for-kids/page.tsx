import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotics for Kids – Certificate Programme',
  description: 'YUVA — Robotics for Kids – Certificate Programme. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="031.1 /"
      railLabel="ROBOTICS"
      title="Robotics for Kids – Certificate Programme"
      backHref="/yuva-academy/school-of-robotics"
      backLabel="School of Robotics"
    />
  );
}
