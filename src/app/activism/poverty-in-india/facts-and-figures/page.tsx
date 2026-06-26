import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poverty in India — Facts & Figures',
  description: 'YUVA — Poverty in India — Facts & Figures. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="023.1 /"
      railLabel="FACTS"
      title="Poverty in India — Facts & Figures"
      backHref="/activism/poverty-in-india"
      backLabel="Poverty in India"
    />
  );
}
