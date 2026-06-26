import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'About YUVA',
  description: 'YUVA promotes youth activism to transform communities, especially for low-income youth historically marginalised from civic life.',
};

const subPages = [
  { idx: '011 /', title: 'Our Focus', href: '/about-us/our-focus', desc: 'Four pillars: Healthy, Educated, Empowered, Employed.' },
  { idx: '012 /', title: 'Our Belief', href: '/about-us/our-belief', desc: 'The social contract that drives everything we do.' },
  { idx: '013 /', title: 'Our History', href: '/about-us/our-history', desc: 'From a single initiative to an international movement.' },
  { idx: '014 /', title: 'Our Logo', href: '/about-us/our-logo', desc: 'The mark that represents our identity and values.' },
  { idx: '015 /', title: 'Administration', href: '/about-us/administration', desc: 'Organigram, executive body, and governance structure.' },
  { idx: '016 /', title: 'Policies & Frameworks', href: '/about-us/policies-frameworks', desc: 'Our operational guidelines and governance frameworks.' },
  { idx: '017 /', title: 'Awards & Recognitions', href: '/about-us/awards-recognitions', desc: 'Documented proof that the work is working.' },
  { idx: '018 /', title: 'Testimonials', href: '/about-us/testimonials', desc: 'Words from the communities we serve.' },
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="section" id="about">
        <div className="rail">
          <span className="rail-index">010 /</span>
          <span className="rail-label">ABOUT</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <p className="mono" style={{ color: 'var(--signal)', marginBottom: 'var(--space-4)' }}>Who We Are</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="h1" style={{ fontSize: 'clamp(44px, 6vw, 80px)', marginBottom: 'var(--space-5)' }}>
              About YUVA
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="pull-quote">
              YUVA promotes youth activism, which results in an extraordinary potential to transform communities, and it carries important benefits to those who participate — especially for low-income youth and other young people historically marginalised from civic life.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              Everything we do has just one goal: the sustained well-being of children and young people, especially the most vulnerable. We work with families, communities, and partners to ensure that children and young people enjoy good health, are educated for life, experience the love of parents and their surroundings, and are cared for, protected, and participating. We serve all children and young people — regardless of religion, race, ethnicity, or gender.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 'var(--space-4)' }}>Explore YUVA</h2>
          </ScrollReveal>
          <div className="about-grid">
            {subPages.map((p) => (
              <ScrollReveal key={p.href}>
                <Link href={p.href} className="card">
                  <span className="mono" style={{ color: 'var(--signal)' }}>{p.idx}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5, marginTop: 'var(--space-2)' }}>{p.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <div style={{ background: 'var(--panel)', borderTop: '1px solid var(--shadow-line)', borderBottom: '1px solid var(--shadow-line)' }}>
        <div className="section" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
          <div className="rail"><span className="rail-index" style={{ color: 'var(--muted-dim)' }}>— /</span></div>
          <div className="content">
            <div className="stat-strip">
              {[
                { n: 100000, s: '+', l: 'Meals / Year' },
                { n: 8600,  s: '',  l: 'Active Volunteers' },
                { n: 1372,  s: '+', l: 'Campaigns Run' },
                { n: 2,     s: '',  l: 'Countries' },
              ].map((c) => (
                <div key={c.l} className="stat-cell">
                  <CountUp to={c.n} suffix={c.s} className="stat-sm" />
                  <span className="mono" style={{ fontSize: 11 }}>{c.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
