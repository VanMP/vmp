import React, { useState } from "react";
import TopRow from "./TopRow";
import FormationBlock from "./FormationBlock";
import ProjectWorkbench from "./ProjectWorkbench";
import MethodsStrip from "./MethodsStrip";
import StackStrip from "./StackStrip";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import PrivacyModal from "./PrivacyModal";

export default function MainPortfolio() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <TopRow lang={lang} setLang={setLang} onContactClick={() => setIsContactOpen(true)} />
      <FormationBlock lang={lang} />
      
      {/* Unified Project Workbench (Option B) */}
      <ProjectWorkbench lang={lang} />
      
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
