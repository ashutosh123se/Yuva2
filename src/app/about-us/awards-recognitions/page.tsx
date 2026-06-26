import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards & Recognitions',
  description: 'YUVA — Awards & Recognitions. Coming soon.',
};

export default function Page() {
  return (
    <ComingSoon
      index="017 /"
      railLabel="AWARDS"
      title="Awards & Recognitions"
      backHref="/about-us"
      backLabel="About Us"
    />
  );
}
