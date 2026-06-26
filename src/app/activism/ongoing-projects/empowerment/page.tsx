import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ongoing Projects — Empowerment',
  description: 'YUVA — Ongoing Projects — Empowerment. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="025.3 /"
      railLabel="EMPOWERMENT"
      title="Ongoing Projects — Empowerment"
      backHref="/activism/ongoing-projects"
      backLabel="Ongoing Projects"
    />
  );
}
