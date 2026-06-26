'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  index?: string;
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    index: '001', label: 'About Us', href: '/about-us',
    children: [
      { label: 'Our Focus', href: '/about-us/our-focus' },
      { label: 'Our Belief', href: '/about-us/our-belief' },
      { label: 'Our History', href: '/about-us/our-history' },
      { label: 'Our Logo', href: '/about-us/our-logo' },
      {
        label: 'Administration', href: '/about-us/administration',
        children: [
          { label: 'Organigram', href: '/about-us/administration/organigram' },
          { label: 'Executive Body', href: '/about-us/administration/executive-body' }
        ]
      },
      { label: 'Policies & Frameworks', href: '/about-us/policies-frameworks' },
      { label: 'Awards & Recognitions', href: '/about-us/awards-recognitions' },
      { label: 'Testimonials', href: '/about-us/testimonials' }
    ]
  },
  {
    index: '002', label: 'Activism', href: '/activism',
    children: [
      {
        label: 'YUVA Mauritius', href: '/activism/yuva-mauritius',
        children: [
          { label: 'Black River', href: '/activism/yuva-mauritius/black-river' },
          { label: 'Flacq', href: '/activism/yuva-mauritius/flacq' },
          { label: 'Grand Port', href: '/activism/yuva-mauritius/grand-port' },
          { label: 'Moka', href: '/activism/yuva-mauritius/moka' },
          { label: 'Pamplemousses', href: '/activism/yuva-mauritius/pamplemousses' },
          { label: 'Plaines Wilhems', href: '/activism/yuva-mauritius/plaines-wilhems' },
          { label: 'Port Louis', href: '/activism/yuva-mauritius/port-louis' },
          { label: 'Rivière du Rempart', href: '/activism/yuva-mauritius/riviere-du-rempart' },
          { label: 'Savanne', href: '/activism/yuva-mauritius/savanne' },
          { label: 'Rodrigues Island', href: '/activism/yuva-mauritius/rodrigues' }
        ]
      },
      {
        label: 'Poverty in Mauritius', href: '/activism/poverty-in-mauritius',
        children: [
          { label: 'Facts & Figures', href: '/activism/poverty-in-mauritius/facts-and-figures' },
          { label: 'Is Mauritian Poverty Solvable?', href: '/activism/poverty-in-mauritius/is-mauritian-poverty-solvable' }
        ]
      },
      { label: 'YUVA India', href: '/activism/yuva-india' },
      {
        label: 'Poverty in India', href: '/activism/poverty-in-india',
        children: [
          { label: 'Facts & Figures', href: '/activism/poverty-in-india/facts-and-figures' }
        ]
      },
      { label: 'Mauritius Youth Parliament', href: '/mauritius-youth-parliament' },
      {
        label: 'Ongoing Projects', href: '/activism/ongoing-projects',
        children: [
          { label: 'Education', href: '/activism/ongoing-projects/education' },
          { label: 'Health', href: '/activism/ongoing-projects/health' },
          { label: 'Empowerment', href: '/activism/ongoing-projects/empowerment' },
          { label: 'Employment', href: '/activism/ongoing-projects/employment' }
        ]
      },
      { label: '2023 Projects Update', href: '/projects-update' }
    ]
  },
  {
    index: '003', label: 'Academy', href: '/yuva-academy',
    children: [
      {
        label: 'School of Leadership', href: '/yuva-academy/school-of-leadership',
        children: [
          { label: 'Ethical Decision-Making', href: '/yuva-academy/school-of-leadership/ethical-decision-making' }
        ]
      },
      {
        label: 'School of Entrepreneurship', href: '/yuva-academy/school-of-entrepreneurship',
        children: [
          { label: 'Entrepreneurial Mindset', href: '/yuva-academy/school-of-entrepreneurship/entrepreneurial-mindset' }
        ]
      },
      {
        label: 'School of Humanities', href: '/yuva-academy/school-of-humanities',
        children: [
          { label: 'Moral, Civic & Sex Education', href: '/yuva-academy/school-of-humanities/moral-civic-sex-education' },
          { label: 'Positive Parenting Programme', href: '/yuva-academy/school-of-humanities/positive-parenting-programme' }
        ]
      },
      {
        label: 'School of Robotics', href: '/yuva-academy/school-of-robotics',
        children: [
          { label: 'Robotics for Kids (Levels 1-3)', href: '/yuva-academy/school-of-robotics/robotics-for-kids' }
        ]
      },
      { label: 'Remedial Classes', href: '/yuva-academy/remedial-classes' }
    ]
  },
  { index: '004', label: 'Blog', href: '/blog' },
  {
    index: '005', label: 'Join Us', href: '/join-us',
    children: [
      {
        label: 'Work for Us', href: '/join-us/work-for-us',
        children: [
          { label: 'Intern for Us', href: '/join-us/work-for-us/intern-for-us' }
        ]
      },
      { label: 'Volunteer with Us', href: '/join-us/volunteer-with-us' },
      { label: 'Propose an Idea', href: '/join-us/propose-an-idea' }
    ]
  },
  {
    index: '006', label: 'Donate', href: '/donate-to-us',
    children: [
      { label: 'Give a Gift', href: '/donate-to-us/give-a-gift' },
      { label: 'Sponsor a Child', href: '/donate-to-us/sponsor-a-child-education' },
      { label: 'Donate Your Clothes', href: '/donate-to-us/donate-used-clothes' },
      { label: 'Christmas Donation', href: '/donate-to-us/make-a-christmas-donation' }
    ]
  },
  { index: '007', label: 'Contact Us', href: '/contact-us' }
];

function NavNode({ item, isSub = false }: { item: NavItem; isSub?: boolean }) {
  if (!item.children || item.children.length === 0) {
    return (
      <Link href={item.href} className="dropdown-link">
        {item.label}
      </Link>
    );
  }

  return (
    <div className={isSub ? 'dropdown-item' : 'nav-item'}>
      <Link href={item.href} className={isSub ? 'dropdown-link' : 'nav-link'}>
        {!isSub && item.index && <span className="nav-index">{item.index} /</span>}
        {item.label}
        <span className="dropdown-icon">▼</span>
      </Link>
      <div className={isSub ? 'sub-dropdown' : 'dropdown'}>
        {item.children.map((child, i) => (
          <NavNode key={i} item={child} isSub={true} />
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <Link href="/" aria-label="YUVA Home">
            <Image src="/logo-yuva.svg" alt="YUVA Logo" width={100} height={36} priority />
          </Link>
        </div>

        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavNode key={item.index} item={item} />
          ))}
        </nav>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
