import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
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
import { useReveal } from "./components/site/hooks";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoContext, setDemoContext] = useState<string | undefined>(undefined);
  useReveal(path === "/");

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
    <div className={`w-full min-h-screen bg-ink text-white font-sans antialiased selection:bg-neon selection:text-ink ${path === "/" ? "pb-[88px] sm:pb-0" : ""}`}>
      <Navbar onBookDemo={openBookDemo} />

      <main className="w-full">
        {path === "/privacy-policy" ? (
          <LegalPage doc={PRIVACY} />
        ) : path === "/terms-of-service" ? (
          <LegalPage doc={TERMS} />
        ) : path === "/contact" ? (
          <ContactPage />
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

      <Footer onBookDemo={openBookDemo} compact={path === "/privacy-policy" || path === "/terms-of-service" || path === "/contact"} />

      {path === "/" && !demoModalOpen && (
        <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-white/10 bg-ink px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => openBookDemo("Mobile bar — Get free hardware")}
            className="btn btn-neon h-14 flex-1 text-[16px]"
          >
            Get free hardware
          </button>
          <a
            href="tel:3472130687"
            aria-label="Call (347) 213-0687"
            className="btn btn-ghost h-14 w-14 shrink-0 !px-0"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      )}

      <BookDemoModal
        isOpen={demoModalOpen}
        context={demoContext}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
