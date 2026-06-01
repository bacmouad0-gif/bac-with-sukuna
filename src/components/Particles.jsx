import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;

    const create = () => {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.animationDuration = (3 + Math.random() * 3) + 's';
      container.appendChild(p);
      setTimeout(() => p.remove(), 6000);
    };

    const id = setInterval(create, 300);
    return () => clearInterval(id);
  }, []);

  return <div id="particles" />;
}
