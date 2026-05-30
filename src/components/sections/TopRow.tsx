import React from "react";

interface TopRowProps {
  lang?: "pt" | "en";
  setLang?: (lang: "pt" | "en") => void;
}

export default function TopRow({ lang = "pt", setLang = () => {} }: TopRowProps) {
  return (
    <header className="px-6 pt-6 md:px-8 md:pt-8 flex flex-col md:flex-row justify-between items-stretch gap-6 w-full font-sans">
      {/* Left: Logo Box with Language Toggle */}
      <div className="relative border border-border-soft bg-olive-tint p-5 flex flex-col justify-between items-start rounded-xl min-w-[220px] md:h-[135px] shadow-[0_2px_8px_rgba(44,40,34,0.02)] overflow-hidden">
        
        {/* Discrete background autumn oak leaf ornament */}
        <div className="absolute bottom-1 right-1 w-16 h-16 text-terracotta/8 pointer-events-none select-none">
          <svg width="64" height="64" className="w-full h-full rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
          </svg>
        </div>

        <div className="flex justify-between items-start w-full relative z-10 gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-sans font-bold text-terracotta/90 uppercase tracking-widest mb-1">
              {lang === "pt" ? "Identidade" : "Identity"}
            </span>
            <span className="font-serif text-3xl font-extrabold tracking-tight text-wine leading-none">VMP</span>
            <span className="text-[9px] font-sans font-bold text-txt-muted tracking-tight mt-1">Vanessa Martins Pinto</span>
          </div>
          
          {/* Language Toggle */}
          <div className="flex bg-frost border border-border-soft/60 rounded-lg p-0.5 text-[10px] font-bold font-mono">
            <button
              onClick={() => setLang("pt")}
              className={`px-2 py-0.5 rounded transition-soft cursor-pointer ${
                lang === "pt"
                  ? "bg-wine text-white shadow-xs"
                  : "text-txt-muted hover:text-wine"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded transition-soft cursor-pointer ${
                lang === "en"
                  ? "bg-wine text-white shadow-xs"
                  : "text-txt-muted hover:text-wine"
              }`}
            >
              EN
            </button>
          </div>
        </div>
        
        <span className="text-[10px] uppercase tracking-wider text-wine/85 mt-2.5 font-bold relative z-10 border-t border-border-soft/60 pt-2 w-full block">
          {lang === "pt" ? "Estatística e Análise" : "Statistics & Analytics"}
        </span>
      </div>

      {/* Center: Positioning Phrase with Stylized Leaf Branch */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <p className="font-serif text-xl md:text-2xl italic text-olive font-semibold leading-relaxed">
          {lang === "pt"
            ? "Estatística aplicada para decisões mensuráveis."
            : "Applied statistics for measurable decisions."}
        </p>
        
        {/* Beautiful detailed branch of autumn leaves */}
        <svg width="112" height="32" className="w-28 h-8 mt-3 text-olive/60 hover:text-olive/80 transition-colors pointer-events-none" viewBox="0 0 100 30" fill="currentColor">
          <path d="M10 20 C 35 15, 65 15, 90 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M22 17 C 18 13, 16 8, 21 7 C 26 6, 28 11, 22 17 Z" />
          <path d="M38 16 C 36 10, 37 5, 42 5 C 47 5, 45 11, 38 16 Z" />
          <path d="M55 15 C 55 9, 57 4, 62 4 C 67 4, 64 10, 55 15 Z" />
          <path d="M72 16 C 74 10, 77 5, 82 6 C 87 7, 83 13, 72 16 Z" />
          <path d="M30 18 C 31 23, 35 27, 31 28 C 27 29, 25 24, 30 18 Z" />
          <path d="M48 17 C 51 23, 56 27, 51 28 C 46 29, 44 24, 48 17 Z" />
          <path d="M66 17 C 71 22, 76 26, 71 27 C 66 28, 64 23, 66 17 Z" />
          <circle cx="50" cy="16" r="1.2" className="text-terracotta" />
        </svg>
      </div>

      {/* Right: Contact Box with high-contrast CV buttons */}
      <div className="border border-border-soft bg-olive-tint p-5 flex flex-col justify-between items-start md:items-end gap-3 rounded-xl min-w-[280px] md:h-[135px] shadow-[0_2px_8px_rgba(44,40,34,0.02)]">
        <div className="flex flex-col gap-1.5 w-full md:items-end">
          <a href="mailto:vanessa.smartinsp@gmail.com" className="hover:text-wine transition-colors font-mono text-xs md:text-sm font-semibold text-txt-muted flex items-center gap-2">
            <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            vanessa.smartinsp@gmail.com
          </a>
          <a href="tel:+351922004270" className="hover:text-wine transition-colors font-mono text-xs md:text-sm font-semibold text-txt-muted flex items-center gap-2">
            <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +351 922 004 270
          </a>
        </div>
        
        <div className="flex gap-2 w-full justify-start md:justify-end">
          <a
            href="/files/vanessa-martins-pinto-cv-pt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1 bg-[#542E3B] !text-[#FCFAF7] font-sans font-bold hover:bg-[#774F4C] transition-colors text-[10px] uppercase tracking-wider rounded-lg border border-[#542E3B]/10 flex items-center gap-1 shadow-xs"
          >
            CV (PT)
          </a>
          <a
            href="/files/vanessa-martins-pinto-cv-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1 bg-[#4E5F2A] !text-[#FCFAF7] font-sans font-bold hover:bg-[#5C5E26] transition-colors text-[10px] uppercase tracking-wider rounded-lg border border-[#4E5F2A]/10 flex items-center gap-1 shadow-xs"
          >
            CV (EN)
          </a>
        </div>
      </div>
    </header>
  );
}
