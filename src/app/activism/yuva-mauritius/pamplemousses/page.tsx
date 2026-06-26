import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA Mauritius — Pamplemousses',
  description: 'YUVA — YUVA Mauritius — Pamplemousses. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="020.2 /"
      railLabel="PAMPLEMOUSSES"
      title="YUVA Mauritius — Pamplemousses"
      backHref="/activism/yuva-mauritius"
      backLabel="YUVA Mauritius"
    />
  );
}
