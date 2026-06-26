import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Moka',
  description: 'YUVA — YUVA Mauritius — Moka. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.9 /"
      railLabel="MOKA"
      title="YUVA Mauritius — Moka"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
