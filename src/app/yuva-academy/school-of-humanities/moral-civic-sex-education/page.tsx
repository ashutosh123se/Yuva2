import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moral, Civic & Sex Education',
  description: 'YUVA — Moral, Civic & Sex Education. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="030.1 /"
      railLabel="MORAL & CIVIC"
      title="Moral, Civic & Sex Education"
      backHref="/yuva-academy/school-of-humanities"
      backLabel="School of Humanities"
    />
  );
}
