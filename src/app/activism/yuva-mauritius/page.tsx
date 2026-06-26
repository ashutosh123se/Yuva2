import type { Metadata } from 'next';
import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'YUVA Mauritius',
  description: 'YUVA Mauritius operates across all 10 districts of Mauritius, delivering community programmes in Education, Health, Empowerment and Employment.',
};

const districts = [
  { slug: 'port-louis',        label: 'Port Louis',         idx: '020.1 /' },
  { slug: 'pamplemousses',     label: 'Pamplemousses',      idx: '020.2 /' },
  { slug: 'riviere-du-rempart',label: 'Rivière du Rempart', idx: '020.3 /' },
  { slug: 'flacq',             label: 'Flacq',              idx: '020.4 /' },
  { slug: 'grand-port',        label: 'Grand Port',         idx: '020.5 /' },
  { slug: 'savanne',           label: 'Savanne',            idx: '020.6 /' },
  { slug: 'black-river',       label: 'Black River',        idx: '020.7 /' },
  { slug: 'plaines-wilhems',   label: 'Plaines Wilhems',    idx: '020.8 /' },
  { slug: 'moka',              label: 'Moka',               idx: '020.9 /' },
  { slug: 'rodrigues',         label: 'Rodrigues',          idx: '020.10 /' },
];

export default function YuvaMauritiusPage() {
  return (
    <main>
      <section className="section" id="yuva-mauritius">
        <div className="rail">
          <span className="rail-index">020 /</span>
          <span className="rail-label">MAURITIUS</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/activism" className="back-link">← Activism</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>YUVA Mauritius</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              YUVA Mauritius
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Across all 10 districts of Mauritius, YUVA field teams deliver integrated programmes in Health, Education, Empowerment and Employment — reaching the families that policy too often overlooks.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              YUVA Mauritius is one of the island&apos;s most active NGOs, operating district-level programmes coordinated from Port Louis and reaching communities from Rodrigues to Savanne. Each district team is staffed by local volunteers who know the terrain — and the families — personally.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Districts</h2>
          </ScrollReveal>
          <div className="about-grid">
            {districts.map((d) => (
              <ScrollReveal key={d.slug}>
                <Link href={`/activism/yuva-mauritius/${d.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{d.idx}</span>
                  <h3 className="h3">{d.label}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/activism" className="btn btn-outline">[ ← Activism ]</Link>
              <Link href="/donate-to-us" className="btn btn-primary"><span className="stamp">Support This Work</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
