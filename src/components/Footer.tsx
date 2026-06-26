import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
        <div className="rail">
          <span className="rail-index">009 /</span>
          <span className="rail-label">RECORD</span>
        </div>
        <div className="content footer-grid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="footer-col">
            <h4 className="mono stamp">ABOUT</h4>
            <Link href="/about-us/our-focus">Our Focus</Link>
            <Link href="/about-us/our-belief">Our Belief</Link>
            <Link href="/about-us/our-history">Our History</Link>
            <Link href="/about-us/awards-recognitions">Awards</Link>
          </div>
          <div className="footer-col">
            <h4 className="mono stamp">ACTIVISM</h4>
            <Link href="/activism/yuva-mauritius">YUVA Mauritius</Link>
            <Link href="/activism/yuva-india">YUVA India</Link>
            <Link href="/activism/poverty-in-mauritius">Poverty in Mauritius</Link>
            <Link href="/activism/poverty-in-india">Poverty in India</Link>
          </div>
          <div className="footer-col">
            <h4 className="mono stamp">CONTACT</h4>
            <span>PORT LOUIS, MU</span>
            <span>MUMBAI, IN</span>
            <span>+230 5252 5556</span>
            <span>+91 98199 84575</span>
            <a href="mailto:secretariat@yuva.info">SECRETARIAT@YUVA.INFO</a>
          </div>
          <div className="footer-col">
            <h4 className="mono stamp">VOLUNTEER</h4>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
              By volunteering your time and efforts, you can make a difference in your community.
            </p>
            <Link href="/join-us/volunteer-with-us" className="btn btn-primary" style={{ marginTop: 'var(--space-2)' }}>
              Volunteer Now
            </Link>
          </div>
          <Image
            className="watermark"
            src="/logo-yuva-mono.svg"
            alt=""
            width={420} height={160}
            style={{ right: -60, bottom: 0, position: 'absolute' }}
            aria-hidden
          />
        </div>
      </div>
      <div className="footer-bottom">© {year} YUVA — All Rights Reserved</div>
    </footer>
  );
}
