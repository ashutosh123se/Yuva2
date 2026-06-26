import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Poverty in Mauritius',
  description: "A data-driven look at poverty in Mauritius — facts, figures, and YUVA's analysis of whether it's solvable.",
};

const subPages = [
  { slug: 'facts-and-figures',            label: 'Facts & Figures',              idx: '021.1 /', desc: 'The numbers behind poverty in Mauritius — household income, child poverty rate, regional disparities.' },
  { slug: 'is-mauritian-poverty-solvable',label: 'Is Mauritian Poverty Solvable?',idx: '021.2 /', desc: "An honest analysis of whether Mauritius can break the cycle — and what it would take." },
];

export default function PovertyMauritiusPage() {
  return (
    <main>
      <section className="section" id="poverty-mauritius">
        <div className="rail">
          <span className="rail-index">021 /</span>
          <span className="rail-label">POVERTY MU</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/activism" className="back-link">← Activism</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>Poverty in Mauritius</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Poverty in Mauritius
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Behind the postcard image of paradise, a significant portion of Mauritians live below the relative poverty line — and the gap is growing. Understanding the data is the first step toward closing it.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              Mauritius often projects the image of an African success story. But relative poverty, child deprivation, and structural inequality persist beneath the surface. YUVA documents, analyses, and publishes this data not to sensationalise, but to act — and to hold the system accountable.
            </p>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {subPages.map((p) => (
              <ScrollReveal key={p.slug}>
                <Link href={`/activism/poverty-in-mauritius/${p.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{p.idx}</span>
                  <h3 className="h3">{p.label}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{p.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
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
