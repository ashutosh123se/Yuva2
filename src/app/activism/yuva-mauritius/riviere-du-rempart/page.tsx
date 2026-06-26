import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Rivière du Rempart',
  description: 'YUVA — YUVA Mauritius — Rivière du Rempart. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.3 /"
      railLabel="RIVIÈRE REMPART"
      title="YUVA Mauritius — Rivière du Rempart"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
