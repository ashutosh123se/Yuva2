import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poverty in Mauritius — Facts & Figures',
  description: 'YUVA — Poverty in Mauritius — Facts & Figures. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="021.1 /"
      railLabel="FACTS"
      title="Poverty in Mauritius — Facts & Figures"
      backHref="/activism/poverty-in-mauritius"
      backLabel="Poverty in Mauritius"
    />
  );
}
