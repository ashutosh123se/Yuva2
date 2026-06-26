import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUVA India',
  description: 'YUVA — YUVA India. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="022 /"
      railLabel="INDIA"
      title="YUVA India"
      backHref="/activism"
      backLabel="Activism"
    />
  );
}
