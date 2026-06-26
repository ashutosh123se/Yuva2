import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Savanne',
  description: 'YUVA — YUVA Mauritius — Savanne. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.6 /"
      railLabel="SAVANNE"
      title="YUVA Mauritius — Savanne"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
