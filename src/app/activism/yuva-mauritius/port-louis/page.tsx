import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Port Louis',
  description: 'YUVA — YUVA Mauritius — Port Louis. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.1 /"
      railLabel="PORT LOUIS"
      title="YUVA Mauritius — Port Louis"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
