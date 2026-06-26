import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrepreneurial Mindset Certificate',
  description: 'YUVA — Entrepreneurial Mindset Certificate. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="029.1 /"
      railLabel="CERTIFICATE"
      title="Entrepreneurial Mindset Certificate"
      backHref="/yuva-academy/school-of-entrepreneurship"
      backLabel="School of Entrepreneurship"
    />
  );
}
