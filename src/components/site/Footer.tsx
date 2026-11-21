import React from "react";
import { ArrowRight } from "lucide-react";
import { MEDIA, STAND_IN } from "../../media";
import { VoriLogo } from "../vori/VoriLogo";
import { ScanBars } from "./motion";

export const Footer: React.FC<{ onBookDemo: (c?: string) => void; compact?: boolean }> = ({ onBookDemo, compact }) => (
  <footer id="grant" className="relative bg-ink text-white overflow-hidden">
    {!compact && (
    <div className="absolute inset-0">
      <img
        src={MEDIA.storeLane ?? STAND_IN.storeLane}
        alt=""
        className="w-full h-full object-cover opacity-[0.22] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div className="absolute inset-0 ground-grid opacity-60" />
      <div className="glow-neon glow-drift absolute left-1/2 -translate-x-1/2 top-[-20%] w-[80vw] max-w-[1100px] aspect-square" />
    </div>
    )}

    <div className={`relative max-w-[80rem] mx-auto px-5 sm:px-10 pb-10 ${compact ? "pt-16" : "pt-36 sm:pt-56"}`}>
      {!compact && (<>
      <ScanBars className="hidden lg:block absolute right-10 top-44 opacity-80" />
      <h2 data-reveal="head" className="h-display text-[clamp(44px,9vw,136px)] !leading-[0.98] text-balance">
        Fresh start.{" "}
        <br className="hidden sm:block" />
        <span className="serif-accent text-neon" style={{ fontSize: "1.04em" }}>
          Free hardware.
        </span>
      </h2>
      <p className="mt-10 text-[18px] sm:text-[20px] leading-[1.55] text-white/65 max-w-[34rem]">
        Scale, printer and cash drawer. Installed free.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
        <button
          type="button"
          onClick={() => onBookDemo("Footer — Get free hardware")}
          className="btn btn-neon h-16 px-10 text-[17px] w-full sm:w-auto"
        >
          Get free hardware <ArrowRight className="w-5 h-5 arrow" />
        </button>
        <a href="tel:+13472130687" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] text-[17px] text-white/85 tabular-nums self-start sm:self-auto">
          +1 (347) 213-0687
        </a>
      </div>

      </>)}

      <div className={`${compact ? "" : "mt-32 sm:mt-48 border-t border-white/12"} pt-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-[14.5px] text-white/55`}>
        <div className="md:col-span-4">
          <VoriLogo theme="dark" size="nav" />
        </div>
        <div className="md:col-span-8 space-y-1.5 leading-[1.6] md:text-right">
          <a href="mailto:support@produceai.co" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] hover:text-white transition-colors">
            support@produceai.co
          </a>
          <p>3508 White Plains Rd, Bronx, NY</p>
        </div>
      </div>

      <p className="mt-12 text-[13px] leading-relaxed max-w-3xl text-white/60">
        Free hardware is for qualified grocery and produce store owners. Extras are sold separately.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-white/60">
        <span>© 2026 Produce AI POS Inc. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-6">
          <a href="/privacy-policy" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] hover:text-white transition-colors">Terms of Service</a>
          <a href="/contact" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] hover:text-white transition-colors">Contact Us</a>
          <a href="/partnerships" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] hover:text-white transition-colors">Partnerships</a>
        </div>
      </div>
    </div>
  </footer>
);
