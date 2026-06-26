import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mauritius Youth Parliament',
  description: 'YUVA — Mauritius Youth Parliament. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="024 /"
      railLabel="PARLIAMENT"
      title="Mauritius Youth Parliament"
      backHref="/activism"
      backLabel="Activism"
    />
  );
}
