import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Mauritian Poverty Solvable?',
  description: 'YUVA — Is Mauritian Poverty Solvable?. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="021.2 /"
      railLabel="SOLVABLE"
      title="Is Mauritian Poverty Solvable?"
      backHref="/activism/poverty-in-mauritius"
      backLabel="Poverty in Mauritius"
    />
  );
}
