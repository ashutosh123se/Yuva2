import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'School of Humanities',
  description: 'The YUVA School of Humanities provides Moral & Civic Education, Sex Education, and Positive Parenting courses for community members.',
};

const courses = [
  { slug: 'moral-civic-sex-education', idx: '030.1 /', title: 'Moral, Civic & Sex Education', desc: 'Essential life knowledge for young people — ethical decision-making, citizenship, and honest sex education.' },
  { slug: 'positive-parenting',        idx: '030.2 /', title: 'Positive Parenting',           desc: 'Evidence-based parenting techniques that break cycles of trauma and build resilient families.' },
];

export default function SchoolOfHumanitiesPage() {
  return (
    <main>
      <section className="section" id="school-humanities">
        <div className="rail">
          <span className="rail-index">030 /</span>
          <span className="rail-label">HUMANITIES</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/yuva-academy" className="back-link">← YUVA Academy</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>School of Humanities</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              School of Humanities
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Humanity is the foundation. Before a young person can lead, create, or build — they must understand themselves, their community, and their responsibility to both.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              The School of Humanities addresses the human dimensions of development: how we relate to ourselves, to family, and to society. Its programmes are frank, evidence-based, and designed to be genuinely useful in the communities where YUVA operates.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {courses.map((c) => (
              <ScrollReveal key={c.slug}>
                <Link href={`/yuva-academy/school-of-humanities/${c.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{c.idx}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{c.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/yuva-academy" className="btn btn-outline">[ ← YUVA Academy ]</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
