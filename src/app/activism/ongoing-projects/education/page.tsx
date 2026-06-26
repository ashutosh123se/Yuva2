import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ongoing Projects — Education',
  description: 'YUVA — Ongoing Projects — Education. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="025.1 /"
      railLabel="EDUCATION"
      title="Ongoing Projects — Education"
      backHref="/activism/ongoing-projects"
      backLabel="Ongoing Projects"
    />
  );
}
