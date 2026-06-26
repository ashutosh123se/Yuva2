import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Black River',
  description: 'YUVA — YUVA Mauritius — Black River. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.7 /"
      railLabel="BLACK RIVER"
      title="YUVA Mauritius — Black River"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
