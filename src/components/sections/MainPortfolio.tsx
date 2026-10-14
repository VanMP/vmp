import React, { useState, useEffect } from "react";
import TopRow from "./TopRow";
import FormationBlock from "./FormationBlock";
import ProjectWorkbench from "./ProjectWorkbench";
import ApplicationsStrip from "./ApplicationsStrip";
import MethodsStrip from "./MethodsStrip";
import StackStrip from "./StackStrip";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import PrivacyModal from "./PrivacyModal";

interface MainPortfolioProps {
  initialLang?: "pt" | "en";
}

export default function MainPortfolio({ initialLang = "pt" }: MainPortfolioProps) {
  const [lang, setLangState] = useState<"pt" | "en">(initialLang);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang")?.toLowerCase();
      const hashLang = window.location.hash.toLowerCase().replace("#", "");

      if (urlLang === "en" || hashLang === "en") {
        setLangState("en");
      } else if (urlLang === "pt" || hashLang === "pt") {
        setLangState("pt");
      }
    }
  }, []);

  const handleSetLang = (newLang: "pt" | "en") => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLang);
      window.history.replaceState({}, "", url.toString());
      try {
        localStorage.setItem("vsmp_lang", newLang);
      } catch (e) {
        // fail silently
      }
    }
  };

  return (
    <>
      <TopRow lang={lang} setLang={handleSetLang} onContactClick={() => setIsContactOpen(true)} />
      <FormationBlock lang={lang} />
      
      {/* Unified Project Workbench (Option B) */}
      <ProjectWorkbench lang={lang} />
      
      {/* Tri-band Knowledge Marquees (Aplicações, Métodos, Stacks) */}
      <ApplicationsStrip lang={lang} />
      <MethodsStrip lang={lang} />
      <StackStrip lang={lang} />
      <Footer 
        lang={lang} 
        onContactClick={() => setIsContactOpen(true)} 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
      />

      {/* Elegant Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} lang={lang} />

      {/* GDPR / LGPD Privacy Policy Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} lang={lang} />
    </>
  );
}
