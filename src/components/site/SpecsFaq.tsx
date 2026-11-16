import React, { useState } from "react";
import { Plus } from "lucide-react";
import { spotMove } from "./hooks";

const SPECS = [
  ["Scales", "Zebra, Magellan, CAS. NTEP Class III."],
  ["Payments", "EBT SNAP, WIC, OTC, Apple Pay, chip."],
  ["Offline", "Local engine keeps lanes ringing."],
  ["Invoices", "Reads costs and UPCs from paper."],
];

export const Specs: React.FC = () => (
  <section id="specs" className="relative bg-ink text-white py-32 sm:py-48 border-t border-white/10">
    <div className="max-w-[80rem] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
      <div className="lg:col-span-4">
        <h2 data-reveal="head" className="h-display h-section !leading-[1.04] lg:sticky lg:top-32">
          Specs, short.
        </h2>
      </div>
      <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SPECS.map(([l, v]) => (
          <div
            key={l}
            data-reveal="rise"
            onMouseMove={spotMove}
            className="spot card-lift rounded-3xl border border-white/10 bg-panel p-7 sm:p-9 hover:border-white/25"
          >
            <dt className="eyebrow text-neon">
              {l}
            </dt>
            <dd className="mt-6 text-[20px] leading-[1.45] text-white/85">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const FAQ = [
  {
    q: "Does it connect directly to my weight scale?",
    a: "Yes. Native drivers cover Zebra, Magellan, CAS and serial or USB scales, with automatic bag tare.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "Registers keep selling, weighing and printing. Everything syncs when you reconnect.",
  },
  {
    q: "Does it support EBT SNAP, WIC and OTC payments?",
    a: "Yes. Split one basket across EBT, WIC, OTC, card and cash in a single tap.",
  },
  {
    q: "How do installation and cashier training work?",
    a: "A technician installs everything and trains your cashiers on site.",
  },
];

export const Faq: React.FC<{ onBookDemo: (c?: string) => void }> = ({ onBookDemo }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="paper-ground seam-in seam-out text-ink py-32 sm:py-48">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 data-reveal="head" className="h-display h-section !leading-[1.04]">
              Common questions
            </h2>
            <p className="mt-5 text-[16px] text-ink/60">
              Something else?{" "}
              <button type="button" onClick={() => onBookDemo("FAQ — Contact specialist")} className="link-draw text-ink font-semibold">
                Talk with our team
              </button>
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 border-t border-ink/15">
          {FAQ.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15">
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : i)}
                  className="group w-full flex items-center justify-between gap-6 py-8 text-left"
                >
                  <span className="text-[19px] sm:text-[22px] font-bold tracking-tight leading-[1.3] group-hover:text-[#14a50f] transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      on ? "bg-ink text-neon rotate-45" : "bg-ink/[0.07] text-ink group-hover:bg-neon"
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-400 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-14 text-[17px] leading-[1.7] text-ink/60 max-w-[42rem]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
