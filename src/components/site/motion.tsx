import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

/**
 * Motion graphics laid over the hero hardware photo.
 * Coordinates are in the photo's own 1600x1487 space, so the overlay scales with it.
 * A scan beam crosses the scanner glass, the status LED pings on each "read",
 * and two dashed lines carry data from the scanner to the screen and the printer.
 */
export const HeroMotion: React.FC = () => (
  <svg
    viewBox="0 0 1600 1487"
    className="hero-motion absolute inset-0 w-full h-full pointer-events-none"
    aria-hidden
  >
    <defs>
      <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#31e327" stopOpacity="0" />
        <stop offset="0.5" stopColor="#31e327" stopOpacity="0.95" />
        <stop offset="1" stopColor="#31e327" stopOpacity="0" />
      </linearGradient>
      <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" />
      </filter>
      <clipPath id="glass">
        <rect x="392" y="945" width="496" height="200" rx="14" />
      </clipPath>
    </defs>

    {/* scan beam */}
    <g clipPath="url(#glass)">
      <rect className="mg-beam" x="392" y="940" width="496" height="46" fill="url(#beam)" opacity="0.0" />
    </g>

    {/* status LED ping */}
    <circle className="mg-ping" cx="919" cy="958" r="9" fill="none" stroke="#31e327" strokeWidth="3" />
    <circle cx="919" cy="958" r="5" fill="#31e327" filter="url(#soft)" opacity="0.9" />

    {/* data flow: scanner -> screen, scanner -> printer */}
    <path className="mg-flow" d="M640 884 L640 756" fill="none" stroke="#31e327" strokeWidth="3" strokeLinecap="round" />
    <path className="mg-flow mg-flow-b" d="M964 1106 C1000 1106 1030 1110 1064 1110" fill="none" stroke="#31e327" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/** Barcode that is being scanned. Pure graphic, deterministic bars. */
export const ScanBars: React.FC<{ className?: string }> = ({ className = "" }) => {
  const bars = useMemo(() => {
    let s = 7;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 46 }, () => ({ w: 2 + Math.floor(rnd() * 5), g: 3 + Math.floor(rnd() * 6) }));
  }, []);
  return (
    <div className={className} aria-hidden>
      <div className="scanbars relative overflow-hidden">
        <div className="flex h-full items-stretch">
          {bars.map((b, i) => (
            <span key={i} className="bg-white/70" style={{ width: b.w, marginRight: b.g }} />
          ))}
        </div>
        <span className="scanbars-beam" />
      </div>
    </div>
  );
};

/** A hairline that draws itself as it scrolls into view. */
export const DrawLine: React.FC<{ className?: string; tone?: "light" | "dark" }> = ({ className = "", tone = "light" }) => {
  const ref = useRef<SVGPathElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const len = el.getTotalLength();
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
    const tween = gsap.to(el, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top 92%", end: "top 45%", scrub: 0.6 },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  return (
    <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className={`w-full h-3 ${className}`} aria-hidden>
      <path
        ref={ref}
        d="M0 6 H1200"
        fill="none"
        stroke={tone === "dark" ? "#14a50f" : "#31e327"}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
