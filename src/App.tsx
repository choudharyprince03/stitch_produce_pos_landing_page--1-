import { useState, useEffect } from 'react';
import { AppleNavbar } from './components/AppleNavbar';
import { HeroMinimal } from './components/HeroMinimal';
import { InteractiveScaleLab } from './components/InteractiveScaleLab';
import { InvoiceScannerDemo } from './components/InvoiceScannerDemo';
import { DeviceGallery } from './components/DeviceGallery';
import { ProducePillars } from './components/ProducePillars';
import { RoiCalculator } from './components/RoiCalculator';
import { AppleSpecs } from './components/AppleSpecs';
import { FaqSection } from './components/FaqSection';
import { GrantCallout } from './components/GrantCallout';
import { AppleFooter } from './components/AppleFooter';
import { LeadModal } from './components/LeadModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stitch_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'dark'; // Default dark for futuristic sleek visual impact
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('stitch_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fafaf9] dark:bg-[#090b0e] text-black dark:text-white font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-500 dark:selection:bg-emerald-400/20 dark:selection:text-emerald-400 transition-colors duration-300">
      
      {/* Frosted Glass Navigation with Active Theme Toggle */}
      <AppleNavbar 
        onOpenModal={() => setIsModalOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Experience Stream */}
      <main className="w-full">
        {/* 1. Nike + Apple Monumental Hero with Produce AI Intel */}
        <HeroMinimal onOpenModal={() => setIsModalOpen(true)} />

        {/* 2. Interactive Live Register & Zebra Scale Simulator */}
        <InteractiveScaleLab />

        {/* 3. AI Paper Vendor Invoice Digitizer (Signature Produce AI Feature) */}
        <InvoiceScannerDemo />

        {/* 4. Complete Hardware Suite Showcase ($0 Free Equipment) */}
        <DeviceGallery onOpenModal={() => setIsModalOpen(true)} />

        {/* 5. Complete 3-Pillar Architecture from ProduceAI.co */}
        <ProducePillars />

        {/* 6. Product Manager ROI Store Savings Calculator */}
        <RoiCalculator onOpenModal={() => setIsModalOpen(true)} />

        {/* 7. Clean Technical & Certification Specifications */}
        <AppleSpecs />

        {/* 8. Verified FAQs from ProduceAI.co */}
        <FaqSection />

        {/* 9. High-Conversion Free Hardware Callout */}
        <GrantCallout onOpenModal={() => setIsModalOpen(true)} />
      </main>

      {/* Minimalist Apple Footer */}
      <AppleFooter />

      {/* Friction-Free Hardware Reservation Dialog */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
