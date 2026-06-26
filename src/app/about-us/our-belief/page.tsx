import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Belief',
  description: 'YUVA believes that achieving a new social contract that reflects a strong narrative of hope and transformation requires a concerted and systematic effort.',
};

const beliefCards = [
  {
    n: '01 /',
    title: 'Break the Cycle',
    body: 'Poverty is not an inevitable condition. YUVA believes in the power of community-led interventions that address root causes — not just symptoms — to permanently lift families out of poverty.',
  },
  {
    n: '02 /',
    title: 'Leave No One Behind',
    body: 'The next phase of development effort must ensure that every child, regardless of gender, religion, race, or ethnicity, has equal access to health, education, and opportunity.',
  },
  {
    n: '03 /',
    title: 'Youth as the Engine',
    body: "Young people are not just the future — they are the present. When equipped with the right tools, youth become the most powerful agents of community transformation. That belief is at the core of everything YUVA does.",
  },
];

export default function OurBeliefPage() {
  return (
    <main>
      <section className="section" id="belief">
        <div className="rail">
          <span className="rail-index">012 /</span>
          <span className="rail-label">BELIEF</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/about-us" className="back-link">← About Us</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>Our Belief</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Our Belief
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Our belief is that achieving a new social contract that reflects a strong narrative of hope and transformation requires a concerted and systematic effort to harness strategies, expertise and resources across a diverse national base — and practical cooperation with existing movements, citizens and communities mobilisation around Mauritius and India. Such a movement will help ensure that the next phase of the development effort leaves no one behind.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              To create a sustainable and inclusive society, it is crucial to have a strong social contract that promotes hope and transformation. This can only be achieved through the collaborative effort of various strategies, expertise, and resources from all sectors of our national base. We must also work hand in hand with existing movements, citizens, and communities in Mauritius and India to mobilise for change.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginBottom: 'var(--space-7)' }}>
              By working together, we can create a movement that ensures that no one is left behind and that everyone has the opportunity to thrive. Our collective commitment to this cause is what will drive us forward and help us achieve our shared vision of a better tomorrow. Together, we can build a world where every person has a chance to live a full and meaningful life, free from the cycle of poverty and inequality.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Three Convictions</h2>
          </ScrollReveal>
          <div className="belief-cards">
            {beliefCards.map((c) => (
              <ScrollReveal key={c.n}>
                <div className="card belief-card">
                  <span className="belief-card-num mono" style={{ color: 'var(--signal)' }}>{c.n}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65 }}>{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <blockquote className="pull-quote" style={{ marginTop: 'var(--space-8)' }}>
              &ldquo;Breaking the cycle of poverty. Ensuring a bright future. PERIOD.&rdquo;
              <footer className="mono" style={{ marginTop: 'var(--space-3)', fontStyle: 'normal', letterSpacing: 0, textTransform: 'none' }}>
                — YUVA Mission Statement
              </footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/about-us/our-focus" className="btn btn-outline">[ Our Focus → ]</Link>
              <Link href="/donate-to-us" className="btn btn-primary"><span className="stamp">Support the Work</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
