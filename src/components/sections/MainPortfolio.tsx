import React, { useState } from "react";
import TopRow from "./TopRow";
import FormationBlock from "./FormationBlock";
import ProjectWorkbench from "./ProjectWorkbench";
import MethodsStrip from "./MethodsStrip";
import StackStrip from "./StackStrip";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function MainPortfolio() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <TopRow lang={lang} setLang={setLang} onContactClick={() => setIsContactOpen(true)} />
      <FormationBlock lang={lang} />
      
      {/* Unified Project Workbench (Option B) */}
      <ProjectWorkbench lang={lang} />
      
      <MethodsStrip lang={lang} />
      <StackStrip lang={lang} />
      <Footer lang={lang} onContactClick={() => setIsContactOpen(true)} />

      {/* Elegant Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} lang={lang} />
    </>
  );
}
