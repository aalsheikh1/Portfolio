"use client";

import { useEffect, useRef } from "react";

// Decorative cute white cat that wanders randomly, sits, and plays with a
// yarn ball. Positions are set through the DOM style API (not style
// attributes), so it works with the strict CSP. Leg/tail/pounce animations
// live in globals.css.

const CAT_W = 64;
const CAT_H = 58;
const YARN = 28;
const SPEED = 90; // px per second

export function WalkingCat() {
  const rootRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const yarnRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cat = catRef.current;
    const face = faceRef.current;
    const yarn = yarnRef.current;
    const spin = spinRef.current;
    if (!root || !cat || !face || !yarn || !spin) return;

    let alive = true;
    let frame = 0;
    const timers: number[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const clamp = (v: number, lo: number, hi: number) =>
      Math.min(Math.max(v, lo), Math.max(lo, hi));
    const clampCatX = (x: number) => clamp(x, 0, window.innerWidth - CAT_W);
    const clampCatY = (y: number) => clamp(y, 60, window.innerHeight - CAT_H);
    const clampYarnX = (x: number) => clamp(x, 0, window.innerWidth - YARN);
    const clampYarnY = (y: number) => clamp(y, 60, window.innerHeight - YARN);

    let cx = clampCatX(rand(0, window.innerWidth));
    let cy = clampCatY(rand(0, window.innerHeight));
    let yx = clampYarnX(rand(0, window.innerWidth));
    let yy = clampYarnY(rand(0, window.innerHeight));
    let yarnAngle = 0;

    const draw = () => {
      cat.style.transform = `translate(${cx}px, ${cy}px)`;
      yarn.style.transform = `translate(${yx}px, ${yy}px)`;
      spin.style.transform = `rotate(${yarnAngle}deg)`;
    };
    const faceTowards = (x: number) => {
      face.style.transform = x < cx ? "scaleX(-1)" : "none";
    };

    // Reduced motion: sit still next to the yarn.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cx = 24;
      cy = clampCatY(window.innerHeight);
      yx = cx + CAT_W + 4;
      yy = clampYarnY(window.innerHeight - 10);
      draw();
      root.dataset.ready = "true";
      return;
    }

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const moveTo = (tx: number, ty: number) =>
      new Promise<void>((resolve) => {
        faceTowards(tx);
        root.dataset.moving = "true";
        let last = performance.now();
        const step = (now: number) => {
          if (!alive) return resolve();
          const dt = Math.min((now - last) / 1000, 0.05);
          last = now;
          const dx = tx - cx;
          const dy = ty - cy;
          const dist = Math.hypot(dx, dy);
          const move = SPEED * dt;
          if (dist <= move) {
            cx = tx;
            cy = ty;
            draw();
            delete root.dataset.moving;
            return resolve();
          }
          cx += (dx / dist) * move;
          cy += (dy / dist) * move;
          draw();
          frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      });

    const rollYarn = (tx: number, ty: number, ms: number) =>
      new Promise<void>((resolve) => {
        const fromX = yx;
        const fromY = yy;
        const fromAngle = yarnAngle;
        // Spin as if rolling: distance / radius, in degrees.
        const turn =
          ((Math.hypot(tx - fromX, ty - fromY) / (YARN / 2)) * 180) / Math.PI;
        const dir = tx < fromX ? -1 : 1;
        const start = performance.now();
        const step = (now: number) => {
          if (!alive) return resolve();
          const t = Math.min((now - start) / ms, 1);
          const ease = 1 - (1 - t) * (1 - t);
          yx = fromX + (tx - fromX) * ease;
          yy = fromY + (ty - fromY) * ease;
          yarnAngle = fromAngle + dir * turn * ease;
          draw();
          if (t < 1) frame = requestAnimationFrame(step);
          else resolve();
        };
        frame = requestAnimationFrame(step);
      });

    const playWithYarn = async () => {
      // Stand beside the yarn, bottoms lined up.
      const fromLeft = cx + CAT_W / 2 < yx + YARN / 2;
      const tx = clampCatX(fromLeft ? yx - CAT_W + 10 : yx + YARN - 10);
      const ty = clampCatY(yy + YARN - CAT_H);
      await moveTo(tx, ty);
      faceTowards(yx + YARN / 2 - CAT_W / 2 + (fromLeft ? 1 : -1) * CAT_W);
      await wait(rand(400, 900));
      root.dataset.action = "pounce";
      await wait(500);
      delete root.dataset.action;
      const dir = fromLeft ? 1 : -1;
      await rollYarn(
        clampYarnX(yx + dir * rand(150, 320)),
        clampYarnY(yy + rand(-90, 90)),
        900,
      );
    };

    const live = async () => {
      draw();
      root.dataset.ready = "true";
      while (alive) {
        const r = Math.random();
        if (r < 0.45) {
          await moveTo(
            clampCatX(rand(0, window.innerWidth)),
            clampCatY(rand(0, window.innerHeight)),
          );
        } else if (r < 0.7) {
          await wait(rand(1500, 3500));
        } else {
          await playWithYarn();
        }
      }
    };
    live();

    const onResize = () => {
      cx = clampCatX(cx);
      cy = clampCatY(cy);
      yx = clampYarnX(yx);
      yy = clampYarnY(yy);
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="cat-root pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div ref={yarnRef} className="absolute left-0 top-0 w-7">
        <svg ref={spinRef} viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="12" fill="#f472b6" />
          <path
            d="M4 10 C 10 14, 18 6, 25 12 M3 16 C 10 20, 18 12, 26 17 M8 23 C 12 18, 18 20, 22 24 M10 3 C 8 10, 12 18, 9 25"
            fill="none"
            stroke="#be185d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div ref={catRef} className="absolute left-0 top-0 w-16">
        <div ref={faceRef}>
          <div className="cat-bob">
            <svg viewBox="0 0 100 90">
              <path
                className="cat-tail"
                d="M24 62 C 4 60, 4 36, 18 32"
                fill="none"
                stroke="#f4f4f5"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <rect
                className="cat-leg"
                x="28"
                y="66"
                width="8"
                height="20"
                rx="4"
                fill="#f4f4f5"
              />
              <rect
                className="cat-leg cat-leg-alt"
                x="38"
                y="66"
                width="8"
                height="20"
                rx="4"
                fill="#f4f4f5"
              />
              <rect
                className="cat-leg cat-leg-alt"
                x="52"
                y="66"
                width="8"
                height="20"
                rx="4"
                fill="#f4f4f5"
              />
              <rect
                className="cat-leg"
                x="62"
                y="66"
                width="8"
                height="20"
                rx="4"
                fill="#f4f4f5"
              />
              <ellipse cx="46" cy="62" rx="26" ry="15" fill="#f4f4f5" />
              <polygon points="40,24 44,2 60,16" fill="#f4f4f5" />
              <polygon points="66,14 82,2 86,26" fill="#f4f4f5" />
              <polygon points="45,19 46,9 54,16" fill="#f9a8d4" />
              <polygon points="71,14 80,8 82,20" fill="#f9a8d4" />
              <circle cx="63" cy="38" r="26" fill="#f4f4f5" />
              <ellipse cx="54" cy="37" rx="4" ry="5" fill="#1f2937" />
              <ellipse cx="73" cy="37" rx="4" ry="5" fill="#1f2937" />
              <circle cx="55.5" cy="35" r="1.5" fill="#ffffff" />
              <circle cx="74.5" cy="35" r="1.5" fill="#ffffff" />
              <ellipse cx="47" cy="47" rx="5" ry="3" fill="#f9a8d4" />
              <ellipse cx="80" cy="47" rx="5" ry="3" fill="#f9a8d4" />
              <polygon points="62,43 66,43 64,45.5" fill="#f472b6" />
              <path
                d="M60 47 q 2 3 4 0 q 2 3 4 0"
                fill="none"
                stroke="#1f2937"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
