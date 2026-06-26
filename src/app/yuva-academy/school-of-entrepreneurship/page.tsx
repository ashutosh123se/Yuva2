import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'School of Entrepreneurship',
  description: 'The YUVA School of Entrepreneurship develops entrepreneurial mindsets and business fundamentals for youth from marginalised communities.',
};

export default function SchoolOfEntrepreneurshipPage() {
  return (
    <main>
      <section className="section" id="school-entrepreneurship">
        <div className="rail">
          <span className="rail-index">029 /</span>
          <span className="rail-label">ENTREPRENEURSHIP</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/yuva-academy" className="back-link">← YUVA Academy</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>School of Entrepreneurship</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              School of Entrepreneurship
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Entrepreneurship is not just about starting a business — it is about seeing problems as opportunities and having the courage to act. This school teaches that courage.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              Through the Entrepreneurial Mindset certificate, participants learn to identify opportunities, build business models, manage risk, and pitch ideas — all grounded in real-world context from Mauritius and India.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <ScrollReveal>
              <Link href="/yuva-academy/school-of-entrepreneurship/entrepreneurial-mindset" className="card">
                <span className="mono" style={{ color: 'var(--signal)' }}>029.1 /</span>
                <h3 className="h3">Entrepreneurial Mindset Certificate</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>
                  A foundational certificate in entrepreneurial thinking, opportunity identification, and business model basics.
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
