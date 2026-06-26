import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2023 Projects Update',
  description: 'YUVA — 2023 Projects Update. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="026 /"
      railLabel="2023"
      title="2023 Projects Update"
      backHref="/activism"
      backLabel="Activism"
    />
  );
}
