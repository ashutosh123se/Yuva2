import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Positive Parenting Programme',
  description: 'YUVA — Positive Parenting Programme. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="030.2 /"
      railLabel="PARENTING"
      title="Positive Parenting Programme"
      backHref="/yuva-academy/school-of-humanities"
      backLabel="School of Humanities"
    />
  );
}
