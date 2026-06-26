'use client';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ to, suffix = '', className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.textContent = to.toLocaleString() + suffix; return; }

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const duration = 800;
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el!.textContent = Math.floor(eased * to).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el!.textContent = to.toLocaleString() + suffix;
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, suffix]);

  return <span ref={ref} className={className}>{to.toLocaleString()}{suffix}</span>;
}
