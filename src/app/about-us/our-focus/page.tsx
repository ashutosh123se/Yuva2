import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Focus',
  description: "YUVA's focus is on four key outcomes: Healthy, Educated, Empowered, and Employed — because they're all interconnected and essential to breaking the cycle of poverty.",
};

const entries = [
  {
    n: '01 /',
    title: 'Health',
    body: "Knowledge is power, especially when it comes to getting and staying healthy. At YUVA, we believe that having access to reliable information is key to making informed decisions about our health. Our health programmes, delivered through fortnightly medical camps, focus on two essential things: developing healthy habits, and connecting kids and young people with services when they need help.",
  },
  {
    n: '02 /',
    title: 'Education',
    body: "Education doesn't have a one-size-fits-all solution. Donor support is invested in helping kids and young people complete school: school fees, uniforms, supplies, tutoring and scholarships. Each child's path is personalised, and every child is enrolled in YUVA's mentorship programme, pairing them with experienced professionals who guide their academic and personal journey.",
  },
  {
    n: '03 /',
    title: 'Empowerment',
    body: "Through empowerment programmes that build leadership, teamwork, and confidence, YUVA is making a brighter future possible. The YUVA Academy — with its Schools of Leadership, Entrepreneurship, and Humanities — was launched to sustain this cause, providing education and training to youth from marginalised communities who face barriers to quality education and career development.",
  },
  {
    n: '04 /',
    title: 'Employment',
    body: "YUVA empowers underprivileged individuals through mock interviews, résumé-writing workshops, and direct connections with companies and organisations — bridging the gap between employers and teens to increase the chances of securing real employment.",
  },
];

export default function OurFocusPage() {
  return (
    <main>
      <section className="section" id="focus">
        <div className="rail">
          <span className="rail-index">011 /</span>
          <span className="rail-label">FOCUS</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ marginBottom: 'var(--space-4)' }}>
              <Link href="/about-us" className="back-link">← About Us</Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: 'var(--signal)' }}>Our Focus</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              Our Focus
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              Our focus is on four key outcomes: for kids and young people to graduate{' '}
              <span style={{ fontStyle: 'normal', color: 'var(--paper-line)' }}>HEALTHY, EDUCATED, EMPOWERED</span> and{' '}
              <span style={{ fontStyle: 'normal', color: 'var(--paper-line)' }}>EMPLOYED.</span>{' '}
              Why these four? Because they&apos;re all interconnected and essential to achieving the big goal: helping break the cycle of poverty.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              When kids and young people are healthy, they have the energy and ability to learn and thrive. When they receive a quality education, they gain knowledge and skills that will help them succeed in life. When they feel empowered, they are confident in their own abilities and can make positive choices for themselves. And when they are employed, they have the opportunity to create a better future for themselves and their families.
            </p>
          </ScrollReveal>

          {entries.map((e, i) => (
            <ScrollReveal key={e.n}>
              <div className="focus-entry" style={i === entries.length - 1 ? { borderBottom: 'none' } : {}}>
                <div className="focus-num">{e.n}</div>
                <div className="focus-body">
                  <h2 className="h3" style={{ fontSize: 28 }}>{e.title}</h2>
                  <p className="body">{e.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <blockquote className="pull-quote" style={{ marginTop: 'var(--space-8)' }}>
              &ldquo;For me, YUVA is a door to success. YUVA has had a great impact on me because it helped me grow as a leader. This programme changes lives — it changed mine. Now, I am a volunteer, teaching the kids everything I learned.&rdquo;
              <footer className="mono" style={{ marginTop: 'var(--space-3)', textTransform: 'none', fontStyle: 'normal', letterSpacing: 0 }}>
                — Dayana Seechurn, 22, YUVA Academy Graduate
              </footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/about-us" className="btn btn-outline">[ ← Back to About Us ]</Link>
              <Link href="/donate-to-us" className="btn btn-primary"><span className="stamp">Support the Work</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
