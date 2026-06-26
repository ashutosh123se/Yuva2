import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ongoing Projects — Employment',
  description: 'YUVA — Ongoing Projects — Employment. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="025.4 /"
      railLabel="EMPLOYMENT"
      title="Ongoing Projects — Employment"
      backHref="/activism/ongoing-projects"
      backLabel="Ongoing Projects"
    />
  );
}
