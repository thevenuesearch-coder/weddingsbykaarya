import { useEffect, useRef, useState } from "react";

const CURSOR_VIDEO = "https://videos.pexels.com/video-files/35222226/14921684_640_360_50fps.mp4";
const lerp = (a, b, n) => a + (b - a) * n;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState({ type: "default", label: "", shimmer: false, lotus: false });

  const ringRoot = useRef(null);
  const dotRoot = useRef(null);
  const ringEl = useRef(null);
  const pulseEl = useRef(null);
  const videoEl = useRef(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    if (!enabled || !videoEl.current) return;

    const video = videoEl.current;
    const load = () => {
      video.src = CURSOR_VIDEO;
      video.load();
      const play = video.play();
      if (play && play.catch) play.catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(load, 1500);
    return () => window.clearTimeout(timer);
  }, [enabled]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.body.classList.add("kaarya-cursor");
    return () => document.body.classList.remove("kaarya-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    const dot = { x: mouse.x, y: mouse.y };
    let prev = { x: mouse.x, y: mouse.y };
    let ready = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!ready) {
        ready = true;
        ringRoot.current && ringRoot.current.classList.add("kaarya-cur-ready");
        dotRoot.current && dotRoot.current.classList.add("kaarya-cur-ready");
      }
    };

    const classify = (t) => {
      if (!t || !t.closest) return { type: "default", label: "", shimmer: false, lotus: false };
      const shimmer = !!t.closest("[data-cursor-shimmer]");
      if (t.closest('input, textarea, select, [contenteditable="true"]')) return { type: "text", label: "", shimmer, lotus: false };
      const imgEl = t.closest('img, [data-cursor="image"]');
      if (imgEl) {
        const holder = t.closest("[data-cursor-label]");
        return { type: "image", label: (holder && holder.getAttribute("data-cursor-label")) || "View", shimmer, lotus: false };
      }
      const link = t.closest('a, button, [role="button"], [data-cursor="link"]');
      if (link) return { type: "link", label: "", shimmer, lotus: !!t.closest("a") };
      if (t.closest('[data-cursor="dash"]')) return { type: "dash", label: "", shimmer, lotus: false };
      return { type: "default", label: "", shimmer, lotus: false };
    };

    const onOver = (e) => {
      const next = classify(e.target);
      const cur = stateRef.current;
      if (next.type !== cur.type || next.label !== cur.label || next.shimmer !== cur.shimmer || next.lotus !== cur.lotus) setState(next);
    };

    const onDown = () => {
      const p = pulseEl.current;
      if (!p) return;
      p.classList.remove("go");
      void p.offsetWidth;
      p.classList.add("go");
    };

    const ringLerp = reduced ? 1 : 0.16;
    const dotLerp = reduced ? 1 : 0.42;

    const render = () => {
      ring.x = lerp(ring.x, mouse.x, ringLerp);
      ring.y = lerp(ring.y, mouse.y, ringLerp);
      dot.x = lerp(dot.x, mouse.x, dotLerp);
      dot.y = lerp(dot.y, mouse.y, dotLerp);

      if (ringRoot.current) ringRoot.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      if (dotRoot.current) dotRoot.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;

      if (ringEl.current && stateRef.current.shimmer) {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        if (Math.abs(dx) + Math.abs(dy) > 0.4) {
          const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
          ringEl.current.style.setProperty("--ang", ang.toFixed(1));
        }
      }
      prev.x = mouse.x;
      prev.y = mouse.y;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
    };
  }, [enabled]);

  if (!enabled) return null;

  const heroReveal = state.shimmer && state.type === "default";

  return (
    <>
      <div ref={ringRoot} className="kaarya-cur-root" aria-hidden="true">
        <div ref={ringEl} className="kaarya-cur-ring" data-state={state.type} data-shimmer={state.shimmer ? 1 : 0} data-hero={heroReveal ? 1 : 0} />
        <video ref={videoEl} className="kaarya-cur-video" data-reveal={heroReveal ? 1 : 0} muted loop playsInline preload="none" aria-hidden="true" />
        <span ref={pulseEl} className="kaarya-cur-pulse" />
        <span className="kaarya-cur-label" data-show={state.type === "image" ? 1 : 0}>{state.label}</span>
        <svg className="kaarya-cur-lotus" data-show={state.lotus ? 1 : 0} viewBox="0 0 40 28" fill="none" stroke="#C9A46B" strokeWidth="1">
          <path d="M20 26 C20 14 20 6 20 3 C24 8 26 16 24 24" />
          <path d="M20 26 C13 20 9 12 9 5 C15 8 19 15 20 24" />
          <path d="M20 26 C27 20 31 12 31 5 C25 8 21 15 20 24" />
          <path d="M20 26 C10 24 4 20 1 14 C9 13 16 17 20 24" />
          <path d="M20 26 C30 24 36 20 39 14 C31 13 24 17 20 24" />
        </svg>
      </div>
      <div ref={dotRoot} className="kaarya-cur-root" aria-hidden="true">
        <div className="kaarya-cur-dot" data-state={state.type} data-hero={heroReveal ? 1 : 0} />
      </div>
    </>
  );
}
