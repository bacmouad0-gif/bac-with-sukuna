import { useState, useEffect } from 'react';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFading(true);
            setTimeout(onDone, 400);
          }, 300);
        }
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="loading-screen" style={{ opacity: fading ? 0 : 1 }}>
      <div className="loading-container">
        <div className="loading-logo">BAC WITH <span>SUKUNA</span></div>
        <div className="loading-sub">PREPARING YOUR POWER...</div>
        <div className="progress-bar-container">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-text">{progress}%</div>
        <div className="domain-text">
          <i className="fa-solid fa-torii-gate" /> DOMAIN EXPANSION...
        </div>
      </div>
    </div>
  );
}
