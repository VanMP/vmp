import React from "react";

interface FooterProps {
  lang?: "pt" | "en";
}

export default function Footer({ lang = "pt" }: FooterProps) {
    <footer className="w-full flex flex-col mt-auto font-sans px-6 py-2 md:px-8 md:py-4 gap-6">
      {/* 1. Confidentiality & Ethics Warning (styled elegantly before the main bar) */}
      <div className="relative px-6 py-5 md:px-8 md:py-6 border border-border-soft/60 bg-surface/40 rounded-2xl text-center text-[10px] md:text-[11px] text-txt-muted leading-relaxed overflow-hidden shadow-[0_2px_12px_rgba(44,40,34,0.015)]">
        
        {/* Detailed autumn branch overlays with berries flanking the disclaimer */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 w-10 h-10 text-olive/35 pointer-events-none hidden md:block rotate-12">
          <svg width="40" height="40" className="w-full h-full" viewBox="0 0 40 40" fill="currentColor">
            <path d="M5 32 C 12 27, 22 17, 32 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M12 28 C 15 24, 19 23, 22 22 C 17 25, 14 29, 12 28 Z" />
            <path d="M20 22 C 23 18, 27 17, 30 16 C 25 19, 22 23, 20 22 Z" />
            <circle cx="26" cy="17" r="3" fill="#774F4C" />
            <circle cx="16" cy="24" r="2.5" fill="#774F4C" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 w-10 h-10 text-olive/35 pointer-events-none hidden md:block -scale-x-100 -rotate-12">
          <svg width="40" height="40" className="w-full h-full" viewBox="0 0 40 40" fill="currentColor">
            <path d="M5 32 C 12 27, 22 17, 32 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M12 28 C 15 24, 19 23, 22 22 C 17 25, 14 29, 12 28 Z" />
            <path d="M20 22 C 23 18, 27 17, 30 16 C 25 19, 22 23, 20 22 Z" />
            <circle cx="26" cy="17" r="3" fill="#774F4C" />
            <circle cx="16" cy="24" r="2.5" fill="#774F4C" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2.5 relative z-10">
          <span className="font-bold text-wine uppercase tracking-wider flex items-center justify-center gap-1.5 flex-shrink-0">
            <svg className="w-4 h-4 text-wine flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {lang === "pt" ? "Nota de Confidencialidade:" : "Confidentiality Note:"}
          </span>
          <span>
            {lang === "pt"
              ? "Os estudos apresentados neste portfólio utilizam dados consolidados ou descaracterizados para preservar o sigilo comercial e a propriedade intelectual de clientes reais."
              : "The case studies presented in this portfolio utilize aggregated or anonymized data to preserve the commercial secrets and intellectual property of actual clients."}
          </span>
        </div>
      </div>

      {/* 2. Light Elegant Card Footer Bar */}
      <div className="relative bg-surface border border-border-soft border-t-2 border-t-[#3B4A28] px-6 py-6 md:px-8 md:py-7 flex flex-col lg:flex-row justify-between items-center gap-5 w-full overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(44,40,34,0.015)]">
        
        {/* Wind-blown scattering of autumn leaves in the footer background */}
        <div className="absolute right-4 bottom-1 w-64 h-20 text-olive/5 pointer-events-none select-none overflow-hidden">
          <svg width="256" height="80" className="w-full h-full opacity-80" viewBox="0 0 240 80" fill="currentColor">
            {/* Wind Swirls */}
            <path d="M10 50 C 60 40, 110 55, 160 35 C 190 23, 210 35, 220 30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,4" fill="none" opacity="0.3" />
            <path d="M40 25 C 90 20, 130 35, 180 15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,3" fill="none" opacity="0.2" />

            {/* Maple Leaf */}
            <g transform="translate(30, 20) rotate(25) scale(1.1)">
              <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
              <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
            </g>

            {/* Oak Leaf */}
            <g transform="translate(100, 30) rotate(-40) scale(1.1)">
              <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
            </g>

            {/* Chestnut Leaf */}
            <g transform="translate(170, 15) rotate(55) scale(1.2)">
              <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
            </g>

            {/* Small Oak Leaf */}
            <g transform="translate(210, 45) rotate(10) scale(0.7)">
              <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
            </g>

            {/* Small Maple Leaf */}
            <g transform="translate(70, 50) rotate(-15) scale(0.6)">
              <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
              <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* Left Side: Call to Action with Autumn Branch Icon */}
        <div className="flex items-center gap-3 relative z-10">
          <svg className="w-5 h-5 text-wine flex-shrink-0" width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
            <path d="M5 32 C 12 27, 22 17, 32 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M12 28 C 15 24, 19 23, 22 22 C 17 25, 14 29, 12 28 Z" />
            <path d="M19 22 C 22 18, 26 17, 29 16 C 24 19, 21 23, 19 22 Z" />
            <circle cx="26" cy="17" r="3" fill="#4E5F2A" />
            <circle cx="16" cy="24" r="2.5" fill="#4E5F2A" />
          </svg>
          <span className="font-serif text-base md:text-lg font-bold tracking-wide text-wine">
            {lang === "pt" ? "Vamos conversar sobre o seu próximo projeto." : "Let's talk about your next project."}
          </span>
        </div>

        {/* Right Side: Social / Contact Links with SVG Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-xs font-mono relative z-10">
          
          {/* Email */}
          <a
            href="mailto:vanessa.smartinsp@gmail.com"
            className="hover:text-wine transition-colors flex items-center gap-2 text-txt-muted font-semibold"
          >
            <svg className="w-4 h-4 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            vanessa.smartinsp@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+351922004270"
            className="hover:text-wine transition-colors flex items-center gap-2 text-txt-muted font-semibold"
          >
            <svg className="w-4 h-4 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +351 922 004 270
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vanessa-martins-pinto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-wine transition-colors flex items-center gap-2 text-txt-muted font-semibold"
          >
            <svg className="w-4 h-4 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            linkedin.com/in/vanessa-martins-pinto
          </a>

        </div>
      </div>

      {/* 3. Small Bottom copyright */}
      <div className="bg-frost border border-border-soft/60 text-txt-muted/70 text-[10px] text-center py-2.5 rounded-xl font-mono">
        <span>
          {lang === "pt"
            ? `© ${new Date().getFullYear()} Vanessa Martins Pinto. Todos os direitos reservados.`
            : `© ${new Date().getFullYear()} Vanessa Martins Pinto. All rights reserved.`}
        </span>
      </div>
    </footer>
  );
}
