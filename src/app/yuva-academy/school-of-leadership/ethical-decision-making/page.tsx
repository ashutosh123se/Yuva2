import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethical Decision-Making Certificate',
  description: 'YUVA — Ethical Decision-Making Certificate. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="028.1 /"
      railLabel="CERTIFICATE"
      title="Ethical Decision-Making Certificate"
      backHref="/yuva-academy/school-of-leadership"
      backLabel="School of Leadership"
    />
  );
}
