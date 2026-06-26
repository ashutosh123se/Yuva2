import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Grand Port',
  description: 'YUVA — YUVA Mauritius — Grand Port. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.5 /"
      railLabel="GRAND PORT"
      title="YUVA Mauritius — Grand Port"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
