import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Rodrigues',
  description: 'YUVA — YUVA Mauritius — Rodrigues. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.10 /"
      railLabel="RODRIGUES"
      title="YUVA Mauritius — Rodrigues"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
