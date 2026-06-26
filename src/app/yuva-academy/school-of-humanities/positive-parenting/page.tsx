import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Positive Parenting',
  description: 'YUVA — Positive Parenting. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="030.2 /"
      railLabel="PARENTING"
      title="Positive Parenting"
      backHref="/yuva-academy/school-of-humanities"
      backLabel="School of Humanities"
    />
  );
}
