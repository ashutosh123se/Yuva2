import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remedial Classes',
  description: 'YUVA — Remedial Classes. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="032 /"
      railLabel="REMEDIAL"
      title="Remedial Classes"
      backHref="/yuva-academy"
      backLabel="YUVA Academy"
    />
  );
}
