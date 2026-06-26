import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Flacq',
  description: 'YUVA — YUVA Mauritius — Flacq. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.4 /"
      railLabel="FLACQ"
      title="YUVA Mauritius — Flacq"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
