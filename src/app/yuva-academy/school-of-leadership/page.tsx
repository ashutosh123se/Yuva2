import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'School of Leadership',
  description: 'The YUVA School of Leadership builds ethical, courageous community leaders through practical training and the Ethical Decision-Making certificate programme.',
};

export default function SchoolOfLeadershipPage() {
  return (
    <main>
      <section className="section" id="school-leadership">
        <div className="rail">
          <span className="rail-index">028 /</span>
          <span className="rail-label">LEADERSHIP</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/yuva-academy" className="back-link">← YUVA Academy</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>School of Leadership</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              School of Leadership
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Leadership is not a title — it is a set of behaviours, values and decisions. This school equips young people with the tools to lead ethically and courageously in their communities.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              Through workshops, mentorship, and the Ethical Decision-Making certificate programme, participants build the confidence, clarity, and community-mindedness needed to become genuine agents of change.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Programmes</h2>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <ScrollReveal>
              <Link href="/yuva-academy/school-of-leadership/ethical-decision-making" className="card">
                <span className="mono" style={{ color: 'var(--signal)' }}>028.1 /</span>
                <h3 className="h3">Ethical Decision-Making Certificate</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>
                  A structured certificate programme covering ethical frameworks, moral reasoning, and leadership under pressure.
                </p>
              </Link>
            </ScrollReveal>
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
