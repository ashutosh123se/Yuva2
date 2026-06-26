import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'YUVA Academy',
  description: 'The YUVA Academy provides education and training to youth from marginalised communities through five Schools: Leadership, Entrepreneurship, Humanities, Robotics, and Remedial Classes.',
};

const schools = [
  { slug: 'school-of-leadership',       idx: '028 /', title: 'School of Leadership',       desc: 'Building the next generation of ethical, courageous community leaders.' },
  { slug: 'school-of-entrepreneurship', idx: '029 /', title: 'School of Entrepreneurship', desc: 'Entrepreneurial mindset, business fundamentals, and startup thinking.' },
  { slug: 'school-of-humanities',       idx: '030 /', title: 'School of Humanities',       desc: 'Moral & civic education, sex education, and positive parenting.' },
  { slug: 'school-of-robotics',         idx: '031 /', title: 'School of Robotics',         desc: 'Robotics for Kids — three progressive levels from beginner to advanced.' },
  { slug: 'remedial-classes',           idx: '032 /', title: 'Remedial Classes',           desc: 'Targeted academic support for secondary students who need extra help.' },
];

export default function YuvaAcademyPage() {
  return (
    <main>
      <section className="section" id="yuva-academy">
        <div className="rail">
          <span className="rail-index">027 /</span>
          <span className="rail-label">ACADEMY</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ color: 'var(--signal)', marginBottom: 'var(--space-4)' }}>Education &amp; Training</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px,6vw,80px)', marginBottom: 'var(--space-5)' }}>
              YUVA Academy
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              The YUVA Academy was launched to sustain the cause of empowerment — providing education and training to youth from marginalised communities who face barriers to quality education and career development.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              With five distinct schools under one roof, the YUVA Academy offers a continuum of learning — from foundational civic education to advanced robotics and entrepreneurship. Every programme is designed to be practically applicable from day one.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Our Schools</h2>
          </ScrollReveal>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {schools.map((s) => (
              <ScrollReveal key={s.slug}>
                <Link href={`/yuva-academy/${s.slug}`} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{s.idx}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{s.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/join-us/volunteer-with-us" className="btn btn-primary"><span className="stamp">Volunteer as a Tutor</span></Link>
              <Link href="/donate-to-us" className="btn btn-outline">[ Sponsor a Student ]</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
