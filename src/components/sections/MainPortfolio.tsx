import React, { useState } from "react";
import TopRow from "./TopRow";
import FormationBlock from "./FormationBlock";
import ProjectWorkbench from "./ProjectWorkbench";
import MethodsStrip from "./MethodsStrip";
import StackStrip from "./StackStrip";
import Footer from "./Footer";

export default function MainPortfolio() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  return (
    <>
      <TopRow lang={lang} setLang={setLang} />
      <FormationBlock lang={lang} />
      
      {/* Unified Project Workbench (Option B) */}
      <ProjectWorkbench lang={lang} />
      
      <MethodsStrip lang={lang} />
      <StackStrip lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
