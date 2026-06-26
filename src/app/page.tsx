import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from '@/components/CountUp';
import ScrollReveal from '@/components/ScrollReveal';
import VideoFrame from '@/components/VideoFrame';

export const metadata: Metadata = {
  title: 'YUVA — Be the Fire. Be the Change.',
  description: 'YUVA is the largest and most active award-winning NGO of Mauritius and India. Breaking the cycle of poverty. Ensuring a bright future. PERIOD.',
};

const stats = [
  { num: '01', label: 'Meals delivered per year', count: 100000, suffix: '+', large: true },
  { num: '02', label: 'Active volunteers across both countries', count: 8600, suffix: '' },
  { num: '03', label: 'Monthly recurring donors', count: 78, suffix: '' },
  { num: '04', label: 'Successful campaigns run to date', count: 1372, suffix: '+' },
];

const pillars = [
  { n: '01', title: 'EDUCATION', body: "Education doesn't have a one-size-fits-all solution. Your support is invested in helping kids and young people complete school using a wide range of tools: providing school fees, uniforms, supplies, tutoring and scholarships.", rev: false },
  { n: '02', title: 'EMPLOYMENT', body: "Mock interviews, résumé writing, connecting with jobs, earning scholarships for university or vocational training — YUVA teens are focused on developing workplace and technical skills to help them change their lives for good.", rev: true },
  { n: '03', title: 'EMPOWERMENT', body: "Through empowerment programmes that build leadership, teamwork and confidence, you're not only making a brighter future possible, but you're also creating a positive ripple effect on kids' and young people's communities.", rev: false },
  { n: '04', title: 'HEALTH', body: "Knowledge is power, especially when it comes to getting and staying healthy. Our health programmes focus on two essential things: developing healthy habits, and connecting kids and young people with services when they need help.", rev: true },
];

const events = [
  { date: '10.10.2024', title: 'World Mental Health Day 2024', body: 'The overall objective of World Mental Health Day is to raise awareness of mental health issues around the world and to mobilise efforts in support of mental health.' },
  { date: '01.11.2024', title: 'National CSR Conference 2024', body: 'YUVA India is organising a National CSR Conference 2024 in Mumbai, bringing together the 200 top NGOs of India to discuss CSR and its impact on society.' },
  { date: '12.08.2024', title: 'International Youth Day 2024', body: 'International Youth Day is commemorated every year on 12 August, bringing youth issues to the attention of the international community.' },
  { date: '08.09.2024', title: 'International Literacy Day 2024', body: 'YUVA will celebrate International Literacy Day under the theme of promoting multilingual education for mutual understanding and peace.' },
];

const articles = [
  { date: '07.06.2026', title: 'Team Mauritius 2026 Meets Team North Macedonia in a Powerful FIRST Global Cultural Exchange' },
  { date: '20.05.2026', title: "Team Mauritius 2026 Is Formed: YUVA's Young Robotics Team Begins Its Road to Incheon" },
  { date: '14.05.2026', title: 'Beyond Policy Talk: YUVA at the World Bank CSO Roundtable' },
  { date: '12.05.2026', title: 'From Port Louis to Incheon: FIRST Global Mauritius Begins Its 2026 Robotics Journey' },
  { date: '03.05.2026', title: 'How YUVA Mauritius Helped Women Home-Based Workers Step Into Growth' },
  { date: '06.04.2026', title: 'Social Innovation in Mauritius: Solving Real Problems With Practical Ideas' },
];

export default function HomePage() {
  return (
    <main>
      {/* ── 001 / HERO ─────────────────────────────────────── */}
      <section className="section hero-wrap" id="hero">
        <div className="rail">
          <span className="rail-index">001 /</span>
          <span className="rail-label">ENTRY</span>
        </div>
        <div className="content">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="mono" style={{ color: 'var(--signal)' }}>
                PORT LOUIS, MU 11602 — MUMBAI, IN 400051
              </p>
              <h1 className="h1">
                Be the change.<br />
                Be the <span className="stamp" style={{ color: 'var(--signal)' }}>fire.</span>
              </h1>
              <p className="body" style={{ color: 'var(--muted)' }}>
                YUVA is the largest and most active award-winning NGO of Mauritius and India — breaking the cycle of poverty. Ensuring a bright future. PERIOD.
              </p>
              <div className="hero-ctas">
                <Link href="/activism" className="btn btn-primary">
                  <span className="stamp">View Our Projects</span>
                </Link>
                <Link href="/blog" className="btn btn-bracket">[ Read the Latest ]</Link>
              </div>
            </div>
            <div className="hero-photo img-mono">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/hero-fieldwork.jpg" alt="YUVA fieldwork in Mauritius" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 002 / THE LEDGER ───────────────────────────────── */}
      <section className="section" id="ledger">
        <div className="rail">
          <span className="rail-index">002 /</span>
          <span className="rail-label">THE LEDGER</span>
        </div>
        <div className="content">
          <ScrollReveal><h2 className="h2">What We&apos;ve Balanced This Year</h2></ScrollReveal>
          <div style={{ marginTop: 'var(--space-4)' }}>
            {stats.map((s) => (
              <ScrollReveal key={s.num}>
                <div className="stat-row">
                  <span className="stat-entry">{s.num}</span>
                  <span className="mono">{s.label}</span>
                  <CountUp
                    to={s.count}
                    suffix={s.suffix}
                    className={`stat-fig${s.large ? ' stat-fig-lg' : ''}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 003 / MISSION ──────────────────────────────────── */}
      <section className="section" id="mission">
        <div className="rail">
          <span className="rail-index">003 /</span>
          <span className="rail-label">MISSION</span>
        </div>
        <div className="content">
          <div className="mission-grid">
            <div className="mission-text">
              <ScrollReveal>
                <h2 className="h2">One of the Largest and Most Active NGOs of Mauritius &amp; India</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="body">
                  Everything we do at YUVA has one goal: the sustained well-being of children and young people, especially the most vulnerable. We work with families, communities, and partners to ensure that children and young people enjoy good health, are educated for life, experience the love of parents and their surroundings, and are cared for, protected, and participating.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <blockquote className="pull-quote">
                  &ldquo;We are not here to make a noise but to be heard.&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal>
                <Link href="/about-us" className="btn btn-outline">[ About YUVA → ]</Link>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <div className="mission-photo img-mono">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photos/mission-community.jpg" alt="YUVA community programme" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 004 / PROGRAMME ────────────────────────────────── */}
      <section className="section" id="programme">
        <div className="rail">
          <span className="rail-index">004 /</span>
          <span className="rail-label">PROGRAMME</span>
        </div>
        <div className="content">
          <ScrollReveal><h2 className="h2">Four Pillars. One Purpose.</h2></ScrollReveal>
          <div style={{ marginTop: 'var(--space-5)' }}>
            {pillars.map((p) => (
              <ScrollReveal key={p.n}>
                <div className={`pillar-row${p.rev ? ' pillar-rev' : ''}`}>
                  <div className="pillar-num">{p.n}</div>
                  <div className="pillar-text">
                    <h3 className="h3">{p.title}</h3>
                    <p className="body">{p.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 005 / CAUSES ───────────────────────────────────── */}
      <section className="section" id="causes">
        <div className="rail">
          <span className="rail-index">005 /</span>
          <span className="rail-label">CAUSES</span>
        </div>
        <div className="content">
          <ScrollReveal>
            <h2 className="h2">Bringing <span style={{ color: 'var(--signal)' }}>Smiles</span> to Those in Need</h2>
          </ScrollReveal>
          <ScrollReveal><p className="body" style={{ marginTop: 'var(--space-3)' }}>Every little bit helps and we are grateful for your support.</p></ScrollReveal>
          <div className="causes-grid">
            <ScrollReveal className="card cause-lead">
              <div className="cause-lead-img img-mono">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photos/cause-education.jpg" alt="Child receiving educational support" />
              </div>
              <h3 className="h3">Sponsor a Child&apos;s Education</h3>
              <p className="body">Sponsor a child&apos;s education and change a life. Funds raised are used to assist our children with various critical educational needs.</p>
              <Link href="/donate-to-us/sponsor-a-child-education" className="btn btn-bracket">[ Donate → ]</Link>
            </ScrollReveal>
            <ScrollReveal className="card cause-side">
              <h3 className="h3">Donate Your Used Clothes</h3>
              <p className="body">Donate your used clothes to keep them out of the trash. Put the clothes into the hands of someone who can give them a second life.</p>
              <Link href="/donate-to-us/donate-your-clothes" className="btn btn-bracket">[ Donate → ]</Link>
            </ScrollReveal>
            <ScrollReveal className="card cause-side">
              <h3 className="h3">Make a Christmas Donation</h3>
              <p className="body">Sadly, thousands of children in Mauritius and India will go without receiving a gift this Christmas simply because their families can&apos;t afford it.</p>
              <Link href="/donate-to-us/make-a-christmas-donation" className="btn btn-bracket">[ Donate → ]</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 006 / FOOTAGE ──────────────────────────────────── */}
      <div className="footage-bg">
        <section className="section" id="footage">
          <div className="rail">
            <span className="rail-index">006 /</span>
            <span className="rail-label">FOOTAGE</span>
          </div>
          <div className="content footage-inner">
            <ScrollReveal><h2 className="h2">The Work, Uncut.</h2></ScrollReveal>
            <ScrollReveal>
              <p className="body">
                There are many ways you can help support our work. You can make a financial contribution, volunteer your time, or donate goods or services. Every little bit helps and we are grateful for your support.
              </p>
            </ScrollReveal>
            <ScrollReveal><VideoFrame /></ScrollReveal>
            <ScrollReveal>
              <Link href="/donate-to-us" className="btn btn-primary">
                <span className="stamp">Take Action</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* ── 007 / EVENTS ───────────────────────────────────── */}
      <section className="section" id="events">
        <div className="rail">
          <span className="rail-index">007 /</span>
          <span className="rail-label">EVENTS</span>
        </div>
        <div className="content">
          <ScrollReveal><h2 className="h2">YUVA World Events</h2></ScrollReveal>
          <div style={{ marginTop: 'var(--space-5)' }}>
            {events.map((e, i) => (
              <ScrollReveal key={i}>
                <div className="event-row" style={i === events.length - 1 ? { borderBottom: 'none' } : {}}>
                  <span className="event-date">{e.date}</span>
                  <div className="event-body">
                    <h3 className="h3">{e.title}</h3>
                    <p className="body">{e.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 008 / DISPATCH ─────────────────────────────────── */}
      <section className="section" id="dispatch">
        <div className="rail">
          <span className="rail-index">008 /</span>
          <span className="rail-label">DISPATCH</span>
        </div>
        <div className="content">
          <ScrollReveal><h2 className="h2">Stay Up to Date</h2></ScrollReveal>
          <div className="dispatch-scroll">
            {articles.map((a, i) => (
              <article key={i} className="dispatch-card">
                <span className="mono">{a.date}</span>
                <h3 className="h3" style={{ fontSize: 17 }}>{a.title}</h3>
              </article>
            ))}
            <Link href="/blog" className="dispatch-card dispatch-end">[ View All Dispatches → ]</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
