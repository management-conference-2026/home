'use client';

import { useEffect, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function GoingGlobalHero() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const syncPlayback = () => frame.current?.contentWindow?.postMessage({
    type: 'conference-globe-state', paused, visible,
  }, window.location.origin);

  useEffect(() => {
    frame.current?.contentWindow?.postMessage({ type: 'conference-globe-state', paused, visible }, window.location.origin);
  }, [paused, visible]);

  return <section className="globe-hero" id="intro" aria-label="Going Global — XVIII Management Conference 2026">
    <h1 className="visually-hidden">Going Global: From Ambition to Execution</h1>
    <iframe ref={frame} src={`${basePath}/going-global.html`} title="Going Global — Air Astana particle globe and flight routes" className="globe-hero-frame" tabIndex={-1} aria-hidden="true" onLoad={syncPlayback}/>
  </section>;
}
