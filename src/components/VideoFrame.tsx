'use client';
import { useState } from 'react';

export default function VideoFrame() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/rhg2h_wqTk8?autoplay=1&rel=0"
          title="YUVA Documentary"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="img-mono" src="/photos/video-thumb.jpg" alt="YUVA documentary — click to play" />
          <button className="play-btn" onClick={() => setPlaying(true)} aria-label="Play YUVA documentary video">
            ▶
          </button>
        </>
      )}
    </div>
  );
}
