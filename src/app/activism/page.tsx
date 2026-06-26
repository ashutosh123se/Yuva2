import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'Activism',
  description: 'YUVA activism operates across Mauritius and India — driving real change in communities through on-the-ground programmes addressing poverty, education, health, and youth empowerment.',
};

const actCards = [
  { idx: '020 /', title: 'YUVA Mauritius', href: '/activism/yuva-mauritius', desc: 'Ground-level operations across 10 districts of Mauritius.' },
  { idx: '021 /', title: 'Poverty in Mauritius', href: '/activism/poverty-in-mauritius', desc: 'Facts, figures and the hard data behind the crisis.' },
  { idx: '022 /', title: 'YUVA India', href: '/activism/yuva-india', desc: 'Community programmes running across Mumbai and beyond.' },
  { idx: '023 /', title: 'Poverty in India', href: '/activism/poverty-in-india', desc: 'Understanding the scale of poverty across the subcontinent.' },
  { idx: '024 /', title: 'Mauritius Youth Parliament', href: '/activism/mauritius-youth-parliament', desc: 'Giving young people a seat at the legislative table.' },
  { idx: '025 /', title: 'Ongoing Projects', href: '/activism/ongoing-projects', desc: 'Education, Health, Empowerment, Employment — live in the field.' },
];

export default function ActivismPage() {
  return (
    <main>
      <section className="section" id="activism">
        <div className="rail">
          <span className="rail-index">019 /</span>
          <span className="rail-label">ACTIVISM</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ color: 'var(--signal)', marginBottom: 'var(--space-4)' }}>In the Field</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Activism
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              YUVA promotes youth activism, which results in an extraordinary potential to transform communities — and it carries important benefits to those who participate, especially for low-income youth and other young people historically marginalised from civic life.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              We are not here to make a noise but to be heard. Our activism is grounded in data, driven by community need, and measured against outcomes. Across both Mauritius and India, YUVA runs integrated programmes that address poverty at its root — connecting children to health services, families to livelihoods, and young people to opportunity.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Where We Operate</h2>
          </ScrollReveal>
          <div className="activism-cards">
            {actCards.map((c) => (
              <ScrollReveal key={c.href}>
                <Link href={c.href} className="card act-card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{c.idx}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{c.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Stat strip */}
          <div className="stat-strip" style={{ marginTop: 'var(--space-8)' }}>
            {[
              { n: 100000, s: '+', l: 'Meals / Year' },
              { n: 8600,  s: '',  l: 'Volunteers' },
              { n: 1372,  s: '+', l: 'Campaigns' },
              { n: 10,    s: '',  l: 'Districts Covered' },
            ].map((c) => (
              <div key={c.l} className="stat-cell">
                <CountUp to={c.n} suffix={c.s} className="stat-sm" />
                <span className="mono" style={{ fontSize: 11 }}>{c.l}</span>
              </div>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/join-us/volunteer-with-us" className="btn btn-primary"><span className="stamp">Volunteer With Us</span></Link>
              <Link href="/donate-to-us" className="btn btn-outline">[ Donate → ]</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
