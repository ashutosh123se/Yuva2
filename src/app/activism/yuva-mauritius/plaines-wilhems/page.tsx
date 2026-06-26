import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Plaines Wilhems',
  description: 'YUVA — YUVA Mauritius — Plaines Wilhems. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.8 /"
      railLabel="PLAINES WILHEMS"
      title="YUVA Mauritius — Plaines Wilhems"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
