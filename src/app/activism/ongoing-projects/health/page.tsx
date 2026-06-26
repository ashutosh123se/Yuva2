import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ongoing Projects — Health',
  description: 'YUVA — Ongoing Projects — Health. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="025.2 /"
      railLabel="HEALTH"
      title="Ongoing Projects — Health"
      backHref="/activism/ongoing-projects"
      backLabel="Ongoing Projects"
    />
  );
}
