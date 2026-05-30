import React, { useState } from "react";

interface FormationBlockProps {
  lang?: "pt" | "en";
}

export default function FormationBlock({ lang = "pt" }: FormationBlockProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const educationItems = [
    {
      titlePt: "Pós-graduação em Processamento de Linguagem Natural",
      titleEn: "Postgraduate in Natural Language Processing",
      institution: "Universidade Federal de Goiás (UFG)",
      periodPt: "2024 – Em andamento",
      periodEn: "2024 – In progress",
      descPt: "Especialização focada em redes profundas, embeddings vetoriais, arquitetura Transformer e fluxos de RAG.",
      descEn: "Specialization focused on deep networks, vector embeddings, Transformer architectures, and RAG pipelines."
    },
    {
      titlePt: "Bacharelado em Estatística",
      titleEn: "B.S. in Statistics",
      institution: "Universidade Federal do Paraná (UFPR)",
      periodPt: "2018 – 2023",
      periodEn: "2018 – 2023",
      descPt: "Foco em inferência matemática, modelos lineares (GLM), amostragem e regressão. Capstone em modelos estatísticos sob eventos raros.",
      descEn: "Focus on mathematical inference, linear models (GLM), sampling, and regression. Capstone on statistical models under rare events."
    },
    {
      titlePt: "Engenharia de Computação (Frequência Universitária)",
      titleEn: "Computer Engineering (Undergraduate Coursework)",
      institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      periodPt: "2013 – 2017",
      periodEn: "2013 – 2017",
      descPt: "Transição para estatística. Foco em algoritmos, estruturas de dados e programação.",
      descEn: "Transition to statistics. Focus on algorithms, data structures, and programming."
    },
    {
      titlePt: "Colegial Técnico, Engenharia Industrial e Eletrônica",
      titleEn: "Integrated Technical High School, Industrial Electronics",
      institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      periodPt: "2008 – 2012",
      periodEn: "2008 – 2012",
      descPt: "Curso técnico integrado focado em instrumentação industrial, circuitos digitais e automação básica.",
      descEn: "Integrated technical course focused on industrial instrumentation, digital circuits, and basic automation."
    }
  ];

  return (
    <section className="px-6 py-2 md:px-8 md:py-4 w-full font-sans">
      <div className="relative border border-border-soft bg-surface/40 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-10 md:h-[500px] lg:h-[460px] shadow-[0_2px_12px_rgba(44,40,34,0.015)] overflow-hidden">
        
        {/* Column 1: Identity & About Me */}
        <div className="flex flex-col gap-4 justify-between h-full overflow-y-auto pr-1.5 relative z-10 items-center md:items-start text-center md:text-left">
          <div className="space-y-3 w-full flex flex-col items-center md:items-start">
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <svg width="15" height="15" className="w-3.5 h-3.5 text-terracotta rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  {/* Oak Leaf */}
                  <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-terracotta font-mono">
                  {lang === "pt" ? "SOBRE MIM" : "ABOUT ME"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-wine tracking-tight font-serif mt-1 text-center md:text-left">
                Vanessa Pinto
              </h1>
              <p className="text-xs md:text-sm font-semibold text-olive italic mt-1 font-serif text-center md:text-left">
                {lang === "pt"
                  ? "Analista Estatística e de Experimentação"
                  : "Statistical & Experimentation Analyst"}
              </p>
            </div>

            <p className="text-xs md:text-sm text-txt-muted leading-relaxed text-center md:text-left">
              {lang === "pt"
                ? "Especialista em modelagem estatística, inferência causal e processamento de linguagem natural (PLN). Traduzo problemas complexos em hipóteses testáveis, delineando testes controlados e modelagem semântica para subsidiar decisões de alto impacto."
                : "Specialist in statistical modeling, causal inference, and natural language processing (NLP). I translate complex business challenges into testable hypotheses, designing controlled experiments and semantic pipelines for high-impact decisions."}
            </p>
          </div>

          {/* Core Specializations with SVGs */}
          <div className="space-y-3 pt-4 border-t border-border-soft/40">
            {/* Spec 1 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <path d="M3 20h18M3 20c2-1 4-3 6-8s3-9 3-9 1 4 3 9 4 7 6 8" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  {lang === "pt" ? "Rigor em Inferência Causal" : "Rigor in Causal Inference"}
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt" ? "Isolamento de efeitos incrementais reais sob incerteza explícita." : "Isolating real incremental effects under explicit uncertainty."}
                </p>
              </div>
            </div>

            {/* Spec 2 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <path d="M4 12h5m0 0l3-5h8M9 12l3 5h8M18 7l3 5-3 5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  {lang === "pt" ? "Desenho e Análise de Experimentos" : "Design & Analysis of Experiments"}
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt" ? "Delineamento de testes A/B/n controlados e análise de poder." : "Designing controlled A/B/n tests and conducting power analysis."}
                </p>
              </div>
            </div>

            {/* Spec 3 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="5" cy="12" r="2.5" />
                  <circle cx="19" cy="12" r="2.5" />
                  <circle cx="12" cy="19" r="2.5" />
                  <line x1="12" y1="7.5" x2="12" y2="16.5" />
                  <line x1="7" y1="10.5" x2="17" y2="13.5" />
                  <line x1="7" y1="13.5" x2="17" y2="10.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  {lang === "pt" ? "Processamento Quantitativo de Texto" : "Quantitative Text Processing"}
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt" ? "Modelagem semântica e representação vetorial de texto." : "Semantic modeling and vector representation of text."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Collapsible Education Path Accordion */}
        <div className="flex flex-col justify-start gap-3 h-full overflow-y-auto pr-1 relative z-10 w-full items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2 w-full">
            <svg width="15" height="15" className="w-3.5 h-3.5 text-olive rotate-45" viewBox="0 0 40 40" fill="currentColor">
              <path d="M5 32 C 12 27, 22 17, 32 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M12 28 C 9 23, 10 19, 14 19 C 18 19, 17 23, 12 28 Z" />
              <path d="M22 22 C 19 17, 20 13, 24 13 C 28 13, 27 17, 22 22 Z" />
              <circle cx="28" cy="17" r="4.5" fill="#774F4C" />
              <circle cx="17" cy="24" r="4.0" fill="#774F4C" />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-terracotta font-mono">
              {lang === "pt" ? "FORMAÇÃO ACADÉMICA" : "EDUCATION"}
            </span>
          </div>

          <div className="flex flex-col gap-2.5 pr-1 w-full">
            {educationItems.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div 
                  key={idx} 
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className={`p-2.5 bg-frost/50 border rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-wine/25 transition-soft cursor-pointer select-none w-full ${
                    isExpanded ? "border-wine/20 bg-frost/85" : "border-border-soft"
                  }`}
                >
                  <div className="flex justify-between items-start gap-3 w-full">
                    <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start items-center gap-1 w-full">
                        <h4 className="text-xs md:text-sm font-bold text-txt-main text-center md:text-left w-full">
                          {lang === "pt" ? item.titlePt : item.titleEn}
                        </h4>
                        <span className="text-[9px] md:text-[10px] font-bold font-mono text-txt-muted uppercase px-2 py-0.5 bg-surface border border-border-soft/40 rounded flex-shrink-0 self-center sm:self-auto">
                          {lang === "pt" ? item.periodPt : item.periodEn}
                        </span>
                      </div>
                      <span className="text-[10px] md:text-xs text-olive font-semibold font-serif block mt-0.5 text-center md:text-left w-full">
                        {item.institution}
                      </span>
                    </div>
                    {/* Small dropdown chevron indicator */}
                    <div className="flex-shrink-0 pt-1">
                      <svg 
                        width="12" 
                        height="12" 
                        className={`w-3 h-3 text-wine/70 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Collapsible content wrapper */}
                  <div 
                    style={{
                      maxHeight: isExpanded ? "120px" : "0px",
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? "10px" : "0px",
                      paddingTop: isExpanded ? "10px" : "0px",
                      borderTop: isExpanded ? "1px solid rgba(227, 220, 208, 0.4)" : "none"
                    }}
                    className={`transition-all duration-300 ease-in-out overflow-hidden w-full ${
                      isExpanded ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <p className="text-[10px] md:text-xs text-txt-muted leading-relaxed text-center md:text-left">
                      {lang === "pt" ? item.descPt : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
