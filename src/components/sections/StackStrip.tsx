import React from "react";

interface StackStripProps {
  lang?: "pt" | "en";
}

export default function StackStrip({ lang = "pt" }: StackStripProps) {
  const tools = [
    "Python", "R", "SQL", "Snowflake", "Google BigQuery", "Power BI", "Tableau", 
    "Pandas", "NumPy", "SciPy", "Scikit-learn", "Statsmodels", "Prophet", 
    "Tidyverse", "dplyr", "tidyr", "ggplot2", "lme4", "survival", "forecast / fable", 
    "XGBoost", "LightGBM", "spaCy", "NLTK", "Transformers", "PyMC / Stan", 
    "DuckDB", "PostgreSQL", "Databricks", "Jupyter", "Quarto", "Bancos Não Estruturados (NoSQL)"
  ];

  return (
    <section className="px-6 py-2 md:px-8 md:py-3 w-full font-sans flex flex-col gap-2.5">
      {/* Centered Elegant Header with Flanking Lines */}
      <div className="flex items-center justify-center gap-4 w-full select-none">
        <div className="h-px bg-gradient-to-r from-transparent to-border-soft flex-1"></div>
        <div className="flex items-center gap-2">
          <svg width="15" height="15" className="w-3.5 h-3.5 text-mustard rotate-45 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
          </svg>
          <h3 className="font-serif text-sm md:text-base font-bold text-wine tracking-wide text-center">
            {lang === "pt" ? "Stacks" : "Stacks"}
          </h3>
          <svg width="15" height="15" className="w-3.5 h-3.5 text-mustard -rotate-45 -scale-x-100 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-border-soft flex-1"></div>
      </div>

      {/* Scrolling Strip Container */}
      <div className="border border-border-soft bg-frost py-2 rounded-xl shadow-[0_1px_3px_rgba(44,40,34,0.01)] marquee-container select-none text-[11px] md:text-xs font-medium tracking-wide text-txt-main font-sans">
        <div className="marquee-track marquee-track-stacks flex items-center gap-12 pr-12">
          {tools.map((tool, idx) => (
            <span key={`${tool}-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
              <svg width="9" height="9" className="text-mustard flex-shrink-0 opacity-90 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
              </svg>
              <span>{tool}</span>
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track-stacks flex items-center gap-12 pr-12" aria-hidden="true">
          {tools.map((tool, idx) => (
            <span key={`${tool}-dup-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
              <svg width="9" height="9" className="text-mustard flex-shrink-0 opacity-90 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
              </svg>
              <span>{tool}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
