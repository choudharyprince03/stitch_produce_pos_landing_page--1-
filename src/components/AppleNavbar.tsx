import React, { useState } from 'react';

interface AppleNavbarProps {
  onOpenModal: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const AppleNavbar: React.FC<AppleNavbarProps> = ({ onOpenModal, theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top micro ticker banner */}
      <div className="w-full bg-[#050806] dark:bg-black text-emerald-400 py-2 px-4 text-center text-[11px] font-mono-telemetry tracking-wider uppercase border-b border-white/5 transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <strong className="text-white">PRODUCE AI POS</strong>
          </span>
          <span className="hidden sm:inline text-neutral-500">&bull;</span>
          <span>12 Free Hardware Packages Available</span>
          <span className="hidden sm:inline text-neutral-500">&bull;</span>
          <span className="text-neutral-300">Zebra Scale Native (0.1s)</span>
          <span className="hidden sm:inline text-neutral-500">&bull;</span>
          <span className="text-emerald-300 font-bold">$0 Upfront Cost</span>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/75 dark:bg-[#090b0e]/80 border-b border-black/5 dark:border-white/10 transition-all duration-300 shadow-xs">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-xl bg-black dark:bg-emerald-500 text-white dark:text-black flex items-center justify-center text-xs font-black font-mono-telemetry group-hover:scale-105 transition-all shadow-sm">
              AI
            </span>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-tight text-black dark:text-white text-sm sm:text-base uppercase leading-none">
                  Produce AI
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[9px] font-mono-telemetry font-bold">
                  POS
                </span>
              </div>
              <span className="text-[9px] font-mono-telemetry text-neutral-500 dark:text-neutral-400 tracking-wider">
                Grocery Operating System
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-neutral-600 dark:text-neutral-300 tracking-tight">
            <a href="#register-demo" className="hover:text-black dark:hover:text-white transition-colors">
              Live Register
            </a>
            <a href="#ai-invoices" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
              <span>AI Invoices</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </a>
            <a href="#hardware" className="hover:text-black dark:hover:text-white transition-colors">
              Free Hardware
            </a>
            <a href="#pillars" className="hover:text-black dark:hover:text-white transition-colors">
              System Features
            </a>
            <a href="#roi" className="hover:text-black dark:hover:text-white transition-colors">
              ROI Calculator
            </a>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs backdrop-blur-md"
            >
              {theme === 'dark' ? (
                <span className="material-symbols-outlined text-lg text-amber-300 transition-transform hover:rotate-45">
                  light_mode
                </span>
              ) : (
                <span className="material-symbols-outlined text-lg text-neutral-700 transition-transform hover:-rotate-12">
                  dark_mode
                </span>
              )}
            </button>

            {/* Direct Phone Line */}
            <a 
              href="tel:3472130687" 
              className="hidden md:inline-flex text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-mono-telemetry"
            >
              (347) 213-0687
            </a>

            {/* Free Hardware CTA Button */}
            <button 
              onClick={onOpenModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-emerald-400 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Free Hardware
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center cursor-pointer border border-neutral-200 dark:border-neutral-700"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white/95 dark:bg-[#0c0e12]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-neutral-800 dark:text-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <a 
              href="#register-demo" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              Live Register Simulator
            </a>
            <a 
              href="#ai-invoices" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors flex items-center justify-between"
            >
              <span>AI Vendor Invoice Scanner</span>
              <span className="text-[10px] font-mono-telemetry text-emerald-500 uppercase">New</span>
            </a>
            <a 
              href="#hardware" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              Free Hardware Equipment
            </a>
            <a 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              System Features &amp; Architecture
            </a>
            <a 
              href="#roi" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              Store Savings Calculator
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-telemetry">
              <span>Call store specialist:</span>
              <a href="tel:3472130687" className="font-bold text-emerald-600 dark:text-emerald-400">
                (347) 213-0687
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
