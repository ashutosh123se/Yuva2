import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Ongoing Projects',
  description: "YUVA's live field programmes across Education, Health, Empowerment and Employment in Mauritius and India.",
};

const projects = [
  { slug: 'education',   idx: '025.1 /', title: 'Education',   desc: 'School fees, uniforms, tutoring, scholarships and mentorship — personalised for every child.' },
  { slug: 'health',      idx: '025.2 /', title: 'Health',      desc: 'Fortnightly medical camps, health education and referral services for families in need.' },
  { slug: 'empowerment', idx: '025.3 /', title: 'Empowerment', desc: 'Leadership, teamwork and confidence-building programmes through the YUVA Academy.' },
  { slug: 'employment',  idx: '025.4 /', title: 'Employment',  desc: 'Mock interviews, résumé workshops and employer connections for underprivileged youth.' },
];

export default function OngoingProjectsPage() {
  return (
    <main>
      <section className="section" id="ongoing-projects">
        <div className="rail">
          <span className="rail-index">025 /</span>
          <span className="rail-label">PROJECTS</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/activism" className="back-link">← Activism</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>Ongoing Projects</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Ongoing Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Four pillars. Thousands of lives. All currently active in the field — in Mauritius and in India.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              YUVA&apos;s programmes are always live — not cyclical projects or one-off campaigns. Our four core programme areas run continuously, serving the communities we work with through consistent, relationship-based engagement.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {projects.map((p) => (
              <ScrollReveal key={p.slug}>
                <Link href={`/activism/ongoing-projects/${p.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{p.idx}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{p.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/activism" className="btn btn-outline">[ ← Activism ]</Link>
              <Link href="/donate-to-us" className="btn btn-primary"><span className="stamp">Fund a Project</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
