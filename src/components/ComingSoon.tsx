import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

interface ComingSoonProps {
  index: string;
  railLabel: string;
  title: string;
  backHref: string;
  backLabel: string;
}

export default function ComingSoon({ index, railLabel, title, backHref, backLabel }: ComingSoonProps) {
  return (
    <main>
      <section className="section">
        <div className="rail">
          <span className="rail-index">{index}</span>
          <span className="rail-label">{railLabel}</span>
        </div>
        <div className="content cs-wrap">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-5)' }}>
              <Link href={backHref} className="back-link">← {backLabel}</Link>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mono" style={{ color: 'var(--signal)', marginBottom: 'var(--space-3)' }}>
              {index} / IN PROGRESS
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="cs-title">{title}</h1>
          </ScrollReveal>

          <div className="progress-track" style={{ marginTop: 'var(--space-6)' }}>
            <div className="progress-tick" />
          </div>

          <ScrollReveal>
            <p className="body" style={{ color: 'var(--muted)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              This page is being prepared. Check back soon — or subscribe to the YUVA dispatch for updates.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href={backHref} className="btn btn-outline">[ {backLabel} ]</Link>
              <Link href="/blog" className="btn btn-bracket">[ Read the Dispatch ]</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
