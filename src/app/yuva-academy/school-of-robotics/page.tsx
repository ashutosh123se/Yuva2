import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'School of Robotics',
  description: 'YUVA School of Robotics teaches Robotics for Kids across three progressive levels — from introduction to programming to full robot builds.',
};

const levels = [
  { slug: 'level-1', idx: '031.1 /', title: 'Robotics for Kids — Level 1', desc: 'Introduction to robotics: basic programming concepts, sensor use, and simple robot assembly.' },
  { slug: 'level-2', idx: '031.2 /', title: 'Robotics for Kids — Level 2', desc: 'Intermediate robotics: autonomous navigation, more complex builds, and teamwork challenges.' },
  { slug: 'level-3', idx: '031.3 /', title: 'Robotics for Kids — Level 3', desc: 'Advanced robotics: competition-ready builds, advanced programming, and engineering problem-solving.' },
];

export default function SchoolOfRoboticsPage() {
  return (
    <main>
      <section className="section" id="school-robotics">
        <div className="rail">
          <span className="rail-index">031 /</span>
          <span className="rail-label">ROBOTICS</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/yuva-academy" className="back-link">← YUVA Academy</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>School of Robotics</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              School of Robotics
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              YUVA&apos;s robotics programme has already taken Team Mauritius to international FIRST Global competitions. This school is where that journey begins — one child at a time.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              The School of Robotics teaches coding, engineering thinking and teamwork through hands-on robot building. Organised across three progressive levels, the programme welcomes complete beginners and nurtures them toward competition-ready skill in a supportive, community-based environment.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {levels.map((l) => (
              <ScrollReveal key={l.slug}>
                <Link href={`/yuva-academy/school-of-robotics/${l.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{l.idx}</span>
                  <h3 className="h3">{l.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{l.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/yuva-academy" className="btn btn-outline">[ ← YUVA Academy ]</Link>
              <Link href="/donate-to-us/sponsor-a-child-education" className="btn btn-primary"><span className="stamp">Sponsor a Student</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
