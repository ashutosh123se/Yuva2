import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Poverty in India',
  description: "YUVA India documents and analyses poverty data from across India — from Mumbai's informal settlements to rural districts.",
};

export default function PovertyIndiaPage() {
  return (
    <main>
      <section className="section" id="poverty-india">
        <div className="rail">
          <span className="rail-index">023 /</span>
          <span className="rail-label">POVERTY IN</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/activism" className="back-link">← Activism</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>Poverty in India</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Poverty in India
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              India&apos;s poverty story is not one number — it is hundreds of millions of individual stories. YUVA India works within communities to understand the data in human terms and act accordingly.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              Despite decades of economic growth, multidimensional poverty remains entrenched in urban informal settlements and rural districts across India. YUVA India documents, analyses, and publishes this data to guide its programmes and inform public discourse.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <ScrollReveal>
              <Link href="/activism/poverty-in-india/facts-and-figures" className="card">
                <span className="mono" style={{ color: 'var(--signal)' }}>023.1 /</span>
                <h3 className="h3">Facts &amp; Figures</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>
                  The hard data on income poverty, child deprivation, and regional inequality across India.
                </p>
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/activism" className="btn btn-outline">[ ← Activism ]</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
