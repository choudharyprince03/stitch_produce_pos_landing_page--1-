import React from 'react';

interface HeroMinimalProps {
  onOpenModal: () => void;
}

export const HeroMinimal: React.FC<HeroMinimalProps> = ({ onOpenModal }) => {
  return (
    <section className="relative w-full pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 bg-[#fafaf9] dark:bg-[#090b0e] transition-colors overflow-hidden">
      
      {/* Background ambient lighting - gentle on the eyes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[350px] sm:h-[500px] bg-emerald-500/10 dark:bg-emerald-500/12 blur-[100px] sm:blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-teal-500/8 dark:bg-teal-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 dark:bg-neutral-800/90 text-white text-[11px] font-mono-telemetry uppercase tracking-wider mb-5 sm:mb-6 shadow-sm border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Produce AI POS &bull; Live Lane Register v1.0</span>
        </div>

        {/* Nike + Apple Monumental Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black dark:text-white uppercase leading-[0.93] max-w-5xl mb-5 sm:mb-6">
          Weigh. Ring. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400">
            Done.
          </span>
        </h1>

        {/* Clear Product Subhead */}
        <p className="text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-medium tracking-tight mb-8 sm:mb-10 leading-snug px-2">
          The fastest point-of-sale and backoffice system built for supermarkets and fresh produce markets. Native Zebra scale sync in 0.1s, AI vendor invoice digitizer, and 100% offline resilience.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 px-4">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs sm:text-sm font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Claim Free Hardware &bull; $0 Due
          </button>
          <a 
            href="#register-demo" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-white dark:hover:bg-neutral-800 hover:border-black dark:hover:border-neutral-500 transition-all shadow-xs text-center"
          >
            Try Live Register Simulator &rarr;
          </a>
        </div>

        {/* Full-Bleed Apple-Style Hero Device Showcase with Floating Glass Widgets */}
        <div className="w-full max-w-6xl relative group px-1 sm:px-0">
          
          {/* Main Visual Container */}
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl">
            <img 
              src="/images/pos_terminal_hero.jpg" 
              alt="Produce AI POS Dual Screen Terminal" 
              className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] object-cover object-center group-hover:scale-[1.015] transition-transform duration-700" 
            />

            {/* Floating Glass Widget 1 (Top Left): Zebra Scale Bridge */}
            <div className="hidden md:flex absolute top-6 left-6 p-3.5 rounded-2xl backdrop-blur-xl bg-black/70 border border-white/15 text-white shadow-xl animate-float-slow items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <span className="material-symbols-outlined text-lg">scale</span>
              </div>
              <div>
                <div className="text-[10px] font-mono-telemetry uppercase text-neutral-400 font-bold">ZEBRA SCALE BRIDGE</div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Weight: 2.45 lb</span>
                  <span className="text-[10px] text-emerald-400 font-mono-telemetry font-bold">&bull; 0.1s Tare</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Widget 2 (Top Right): 100% Offline Active */}
            <div className="hidden md:flex absolute top-6 right-6 p-3.5 rounded-2xl backdrop-blur-xl bg-black/70 border border-white/15 text-white shadow-xl animate-float-delayed items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <span className="material-symbols-outlined text-lg">cloud_sync</span>
              </div>
              <div>
                <div className="text-[10px] font-mono-telemetry uppercase text-neutral-400 font-bold">LOCAL SQLITE ENGINE</div>
                <div className="text-xs font-bold text-white">100% Offline Resilient</div>
              </div>
            </div>

            {/* Floating Glass Widget 3 (Bottom Center): Metadata Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 rounded-xl sm:rounded-3xl backdrop-blur-xl bg-black/80 border border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-mono-telemetry font-bold text-white uppercase tracking-wider">
                    Produce AI Terminal X1
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400">
                    Dual 15.6" Touchscreens &bull; In-Counter Bi-Optic Bridge &bull; EBT/SNAP Ready
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 font-mono-telemetry text-[10px] sm:text-xs w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">TARE SPEED</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.1 SEC</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">IF INTERNET DROPS</span>
                  <span className="text-white font-bold">100% ACTIVE</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">HARDWARE COST</span>
                  <span className="text-emerald-400 font-bold">$0 FREE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Produce AI Official 4-Metric Grid in Glass Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl mt-10 sm:mt-16 text-left">
          
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter font-mono-telemetry">
              &lt; 3.0s
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Average Checkout Time
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Weighs produce and prints receipts fast to keep lines moving.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tighter font-mono-telemetry">
              99.9%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Inventory Precision
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Eliminates cashier PLU guessing errors with color photo buttons.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tighter font-mono-telemetry">
              100%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Offline POS Resilience
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Registers keep ringing if Wi-Fi cuts out. Zero lost sales.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter font-mono-telemetry">
              15%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Labor Overhead Savings
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              AI invoice scanning eliminates hours of manual data entry every week.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
