import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { MEDIA, STAND_IN } from "../../media";
import { prefersReducedMotion } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onBookDemo: (context?: string) => void;
}

const FREE = [
  { k: "scale" as const, n: "01", title: "POS scale", text: "NTEP-certified scanner scale." },
  { k: "printer" as const, n: "02", title: "Thermal receipt printer", text: "Receipts and Z-reports." },
  { k: "drawer" as const, n: "03", title: "Cash drawer", text: "Opens on every cash sale." },
];

const OPTIONAL = [
  { k: "customerDisplay" as const, title: "Customer display & PIN pad", text: "Shopper screen and card reader." },
  { k: "handheld" as const, title: "Handheld scanner", text: "Scan deliveries and audit coolers." },
  { k: "shelfTags" as const, title: "Electronic shelf tags", text: "Prices update wirelessly." },
];

const photo = (k: keyof typeof STAND_IN & keyof typeof MEDIA.hardware) => MEDIA.hardware[k] ?? STAND_IN[k];

export const Hardware: React.FC<Props> = ({ onBookDemo }) => {
  const pass = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !pass.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pass-row",
        { xPercent: 0 },
        {
          xPercent: -28,
          ease: "none",
          scrollTrigger: { trigger: pass.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    }, pass);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hardware" className="bg-paper text-ink pt-32 sm:pt-48 pb-32 sm:pb-48 overflow-hidden">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <h2 className="lg:col-span-7 h-display text-[38px] sm:text-[54px] xl:text-[60px] text-balance !leading-[1.04]">
            Free hardware{" "}
            <span className="serif-accent text-[#14a50f]" style={{ fontSize: "1.06em" }}>
              to start.
            </span>
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-[18px] leading-[1.55] text-ink/55">
            Installed at your counter. $0 upfront.
          </p>
        </div>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {FREE.map((h) => (
            <article key={h.k} className="group card-lift">
              <div className="zoom-frame relative rounded-[24px] bg-ink aspect-[4/3.1]">
                <img src={photo(h.k)} alt={h.title} loading="lazy" className="slot-img" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-neon text-ink text-[12.5px] font-bold px-3.5 py-1.5">
                  $0 · included
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-extrabold tracking-tight leading-tight">{h.title}</h3>
              <p className="mt-1.5 text-[16px] leading-[1.55] text-ink/65 max-w-[22rem]">{h.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* scroll-driven type pass */}
      <div ref={pass} className="mt-32 sm:mt-48 select-none" aria-hidden>
        <div className="pass-row flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8 text-[clamp(72px,13vw,190px)] font-extrabold tracking-[-0.045em] leading-none">
              {["Free scale", "Free printer", "Free cash drawer"].map((t, i) => (
                <React.Fragment key={t}>
                  <span
                    style={i === 1 ? { WebkitTextStroke: "2px #07080a", color: "transparent" } : undefined}
                    className={i === 1 ? "" : "text-ink"}
                  >
                    {t}
                  </span>
                  <span className="w-[0.16em] h-[0.16em] rounded-full bg-neon shrink-0" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 sm:mt-48 max-w-[80rem] mx-auto px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-ink/15">
          <h3 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight">Available to buy</h3>
          <button
            type="button"
            onClick={() => onBookDemo("Hardware — Request pricing")}
            className="btn btn-ink h-12 px-6 text-[15px] self-start"
          >
            Get pricing <ArrowRight className="w-4 h-4 arrow" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {OPTIONAL.map((o) => (
            <article key={o.k} className="group card-lift flex sm:flex-col gap-5 rounded-[24px] bg-white p-3 pr-5 sm:p-3 border border-ink/[0.07] hover:shadow-[0_24px_50px_-24px_rgba(7,8,10,0.35)]">
              <div className="zoom-frame rounded-[16px] bg-ink w-[38%] sm:w-full shrink-0 aspect-[4/3]">
                <img src={photo(o.k)} alt={o.title} loading="lazy" className="slot-img" />
              </div>
              <div className="sm:px-3 sm:pb-3 self-center sm:self-auto">
                <h4 className="text-[18px] font-bold leading-tight">{o.title}</h4>
                <p className="mt-1.5 text-[15px] leading-[1.55] text-ink/60">{o.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
