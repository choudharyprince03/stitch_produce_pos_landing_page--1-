import { useEffect, useState } from "react";
import { Navbar } from "./components/site/Navbar";
import { Hero, Marquee } from "./components/site/Hero";
import { Story } from "./components/site/Story";
import { Features } from "./components/site/Features";
import { Hardware } from "./components/site/Hardware";
import { Specs, Faq } from "./components/site/SpecsFaq";
import { Footer } from "./components/site/Footer";
import { BookDemoModal } from "./components/vori/BookDemoModal";
import { LegalPage } from "./components/vori/LegalPage";
import { ContactPage } from "./components/vori/ContactPage";
import { PRIVACY, TERMS } from "./components/vori/legalContent";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoContext, setDemoContext] = useState<string | undefined>(undefined);

  const openBookDemo = (context?: string) => {
    setDemoContext(context);
    setDemoModalOpen(true);
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      "/privacy-policy": "Privacy Policy | Produce AI POS",
      "/terms-of-service": "Terms of Service | Produce AI POS",
      "/contact": "Contact Us | Produce AI POS",
    };
    if (titles[path]) document.title = titles[path];
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDemoModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-ink text-white font-sans antialiased selection:bg-neon selection:text-ink">
      <Navbar onBookDemo={openBookDemo} />

      <main className="w-full">
        {path === "/privacy-policy" ? (
          <div className="bg-white text-[#0f0f0f]"><LegalPage doc={PRIVACY} /></div>
        ) : path === "/terms-of-service" ? (
          <div className="bg-white text-[#0f0f0f]"><LegalPage doc={TERMS} /></div>
        ) : path === "/contact" ? (
          <div className="bg-white text-[#0f0f0f]"><ContactPage /></div>
        ) : (
          <>
            <Hero onBookDemo={openBookDemo} />
            <Marquee />
            <Story />
            <Features />
            <Hardware onBookDemo={openBookDemo} />
            <Specs />
            <Faq onBookDemo={openBookDemo} />
          </>
        )}
      </main>

      <Footer onBookDemo={openBookDemo} />

      <BookDemoModal
        isOpen={demoModalOpen}
        context={demoContext}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
