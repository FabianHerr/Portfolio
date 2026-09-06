"use client";

import { Fragment, useEffect, useRef } from "react";

/**
 * The name as the site's one signature element: an italic wordmark that draws
 * itself on (CSS `sign-in` wipe in globals.css), then every letter springs away
 * from the cursor as it comes near and eases back. The repel only wakes up once
 * the signing finishes. Pointer-only, and fully inert under
 * `prefers-reduced-motion` or on touch (the letters just sit still). Screen
 * readers get the plain name via `aria-label` (the per-letter spans are hidden).
 */
export function KineticName({ name }: { name: string }) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduce.matches || !finePointer.matches) return;

    const chars = Array.from(root.querySelectorAll<HTMLElement>(".kn-ch"));
    if (chars.length === 0) return;

    const RADIUS = 105; // px, how close the cursor has to get
    const MAX_PUSH = 9; // px, displacement at the cursor (gentle, on purpose)
    const EASE = 0.18; // lerp factor toward the target each frame

    // resting centre (rx, ry), current offset (x, y), target offset (tx, ty)
    const pts = chars.map(() => ({ rx: 0, ry: 0, x: 0, y: 0, tx: 0, ty: 0 }));

    const measure = () => {
      for (let i = 0; i < chars.length; i++) {
        const r = chars[i].getBoundingClientRect();
        // getBoundingClientRect includes the live transform; subtract it back out
        pts[i].rx = r.left + r.width / 2 - pts[i].x;
        pts[i].ry = r.top + r.height / 2 - pts[i].y;
      }
    };

    let mx = -99999;
    let my = -99999;
    let raf = 0;
    let idle = 0;

    const frame = () => {
      let moving = false;
      for (let i = 0; i < chars.length; i++) {
        const p = pts[i];
        const dx = p.rx - mx;
        const dy = p.ry - my;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS && dist > 0.001) {
          const push = (1 - dist / RADIUS) * MAX_PUSH;
          p.tx = (dx / dist) * push;
          p.ty = (dy / dist) * push;
        } else {
          p.tx = 0;
          p.ty = 0;
        }
        p.x += (p.tx - p.x) * EASE;
        p.y += (p.ty - p.y) * EASE;
        if (Math.abs(p.x - p.tx) > 0.05 || Math.abs(p.y - p.ty) > 0.05) moving = true;
        chars[i].style.transform =
          Math.abs(p.x) < 0.05 && Math.abs(p.y) < 0.05
            ? ""
            : `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0)`;
      }
      idle = moving ? 0 : idle + 1;
      if (idle > 8) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      idle = 0;
      if (raf === 0) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return; // ignore touch/pen
      mx = e.clientX;
      my = e.clientY;
      kick();
    };
    const onLeave = () => {
      mx = -99999;
      my = -99999;
      kick();
    };

    let remeasure = 0;
    const scheduleMeasure = () => {
      cancelAnimationFrame(remeasure);
      remeasure = requestAnimationFrame(measure);
    };

    let started = false;
    const begin = () => {
      if (started) return;
      started = true;
      measure();
      // re-measure once the web font has swapped in (letter widths change)
      document.fonts?.ready.then(measure).catch(() => {});
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", scheduleMeasure);
      window.addEventListener("scroll", scheduleMeasure, { passive: true });
    };

    // let the signing animation finish before the letters start reacting
    root.addEventListener("animationend", begin, { once: true });
    const fallback = window.setTimeout(begin, 1400);

    return () => {
      root.removeEventListener("animationend", begin);
      window.clearTimeout(fallback);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("scroll", scheduleMeasure);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(remeasure);
      for (const c of chars) c.style.transform = "";
    };
  }, []);

  const words = name.split(" ");

  return (
    <h1 ref={rootRef} className="kinetic-name" aria-label={name}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 ? " " : null}
          <span className="kn-word" aria-hidden="true">
            {Array.from(word).map((ch, ci) => (
              <span key={ci} className="kn-ch">
                {ch}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </h1>
  );
}
