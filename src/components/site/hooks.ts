import type React from "react";
import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True while the element is on screen (so loops only run when seen). */
export function useInView<T extends HTMLElement>(margin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: margin, threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

/**
 * Steps 0..steps-1 on a timer. `holds` can override the delay per step.
 * Under reduced motion it rests on `restAt`.
 */
export function useLoopStep(
  steps: number,
  delay: number | ((step: number) => number),
  active: boolean,
  restAt = steps - 1
) {
  const [step, setStep] = useState(restAt);
  const reduced = prefersReducedMotion();
  useEffect(() => {
    if (reduced) {
      setStep(restAt);
      return;
    }
    if (!active) return;
    const d = typeof delay === "function" ? delay(step) : delay;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % steps), d);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, step, reduced]);
  return step;
}

/** Smoothly eases a number toward its target. */
export function useTween(target: number, ms = 650) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    if (prefersReducedMotion()) {
      from.current = target;
      setV(target);
      return;
    }
    const a = from.current;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = a + (target - a) * e;
      from.current = cur;
      setV(cur);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

export const usd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function useMedia(query: string, initial = false) {
  const [m, setM] = useState(() =>
    typeof window === "undefined" ? initial : window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return m;
}

/** Cursor-follow light for `.spot` cards. */
export const spotMove = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};
