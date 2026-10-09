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
      periodPt: "2025 – 2026",
      periodEn: "2025 – 2026",
      descPt: "Especialização avançada com ênfase em modelagem de texto como dado, arquiteturas neurais e pipelines de dados não estruturados. Investigação e desenvolvimento de projeto de conclusão focado na decomposição de latência e otimização computacional em sistemas RAG (Retrieval-Augmented Generation).",
      descEn: "Advanced specialization focusing on text-as-data modeling, neural architectures, and unstructured data pipelines. Capstone project investigating latency decomposition and computational optimization in Retrieval-Augmented Generation (RAG) systems.",
      documentPt: "/files/tcc-eficiencia-rag-pt.pdf",
      documentEn: "/files/tcc-rag-efficiency-en.pdf"
    },
    {
      titlePt: "Bacharelado em Estatística",
      titleEn: "B.S. in Statistics",
      institution: "Universidade Federal do Paraná (UFPR)",
      periodPt: "2018 – 2023",
      periodEn: "2018 – 2023",
      descPt: "Formação quantitativa rigorosa com ênfase em inferência matemática, modelos lineares generalizados (GLM), processos estocásticos e desenho amostral. Trabalho de Conclusão focado em modelagem de séries temporais não-lineares com troca de regime (Smooth Transition Autoregressive - STARMAX), comparando dinâmica de limiares exógenos contra o paradigma clássico de Box-Jenkins para mitigação de resíduos não-gaussianos sob choques hidrológicos extremos.",
      descEn: "Rigorous quantitative training in mathematical inference, generalized linear models (GLM), stochastic processes, and survey sampling design. Capstone focused on non-linear regime-switching time series (Smooth Transition Autoregressive - STARMAX), evaluating exogenous threshold dynamics against the classical Box-Jenkins paradigm to mitigate non-Gaussian residuals under extreme hydrological shocks."
    },
    {
      titlePt: "Engenharia de Computação (Frequência Universitária)",
      titleEn: "Computer Engineering (Undergraduate Coursework)",
      institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      periodPt: "2013 – 2017",
      periodEn: "2013 – 2017",
      descPt: "Sólida base de engenharia de software e arquitetura de sistemas: estruturas de dados avançadas, complexidade algorítmica, programação em baixo nível e computação científica. Essa vivência universitária garante autonomia e destreza na criação de scripts analíticos próprios, automação de dados e implementação de rotinas estatísticas eficientes em Python e R, operando como suporte direto à modelagem quantitativa.",
      descEn: "Solid foundation in software engineering and systems architecture: advanced data structures, algorithmic complexity, low-level programming, and scientific computing. Provides full technical autonomy in building custom analytical scripts, automated data pipelines, and highly efficient statistical routines in Python and R to directly power quantitative modeling."
    },
    {
      titlePt: "Colegial Técnico, Engenharia Industrial e Eletrónica",
      titleEn: "Integrated Technical High School, Industrial Electronics",
      institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      periodPt: "2008 – 2012",
      periodEn: "2008 – 2012",
      descPt: "Formação técnica integrada com ênfase em instrumentação de precisão, lógica de controlo, circuitos e resolução metódica de problemas. Introdução precoce à arquitetura de testes e métodos empíricos de medição.",
      descEn: "Integrated technical degree emphasizing precision instrumentation, control logic, digital circuits, and methodical problem-solving. Early foundation in test architecture and empirical measurement methodologies."
    }
  ];

  return (
    <section className="px-6 py-2 md:px-8 md:py-4 w-full font-sans">
      <div className="relative border border-border-soft bg-surface/40 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr] gap-8 md:gap-10 shadow-[0_2px_12px_rgba(44,40,34,0.015)]">
        
        {/* Column 1: Identity & About Me */}
        <div className="flex flex-col gap-4 justify-between relative z-10 items-center md:items-start text-center md:text-left">
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
                Vanessa Schemes
              </h1>
              <p className="text-xs md:text-sm font-semibold text-olive italic mt-1 font-serif text-center md:text-left">
                Senior Statistician — Experimentation & Quantitative Modeling
              </p>
            </div>

            <p className="text-xs md:text-sm text-txt-muted leading-relaxed text-center md:text-left">
              {lang === "pt"
                ? "Estatística com mais de 4 anos de experiência em pesquisa quantitativa de produto e consumidor. Sólida base quantitativa e computacional, especializada em modelos de alta explicabilidade para suporte à tomada de decisão estratégica. Atuo como líder técnica em frentes quantitativas, traduzindo incertezas de produto e estratégia comercial em testes controlados, validação empírica de hipóteses e sistemas prescritivos de decisão."
                : "Senior Statistician with 4+ years of experience in quantitative product and consumer research. Strong quantitative and computational background, specializing in high-explainability models for strategic decision support. I serve as technical lead in quantitative initiatives, translating product and commercial uncertainty into controlled tests, empirical hypothesis validation, and prescriptive decision systems."}
            </p>
          </div>

          {/* Core Specializations with SVGs */}
          <div className="space-y-3 pt-4 border-t border-border-soft/40 w-full">
            {/* Spec 1: End-to-End Ownership */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  End-to-End Ownership
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt"
                    ? "Atuação autônoma desde o alinhamento da incerteza de negócio até a arquitetura do modelo, auditoria de dados e entrega da ferramenta final."
                    : "Autonomous execution from business problem scoping to model architecture, data auditing, and final tool delivery."}
                </p>
              </div>
            </div>

            {/* Spec 2: Modelagem de Alta Explicabilidade (Glass-Box) */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  {lang === "pt" ? "Modelagem de Alta Explicabilidade (Glass-Box)" : "High-Explainability Modeling (Glass-Box)"}
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt"
                    ? "Modelos transparentes e estruturados (GLM, decomposição de Shapley, classes latentes) que explicam o porquê dos fenômenos, eliminando o risco de caixas-pretas em decisões críticas."
                    : "Transparent, structured models (GLM, Shapley decomposition, latent classes) explaining the underlying mechanics of phenomena, eliminating black-box risks in critical decisions."}
                </p>
              </div>
            </div>

            {/* Spec 3: Rigor Metodológico */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-frost border border-border-soft/40 text-olive flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="w-5 h-5">
                  <path d="M3 20h18M3 20c2-1 4-3 6-8s3-9 3-9 1 4 3 9 4 7 6 8" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-txt-main leading-tight">
                  {lang === "pt" ? "Rigor Metodológico" : "Methodological Rigor"}
                </h4>
                <p className="text-[10px] md:text-xs text-txt-muted leading-normal mt-0.5">
                  {lang === "pt"
                    ? "Desenho amostral robusto, controle de vieses e inferência causal estrita para decisões que não toleram falsos positivos."
                    : "Robust sample design, bias control, and strict causal inference for decisions that cannot afford false positives."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Collapsible Education Path Accordion & Work Authorization */}
        <div className="flex flex-col justify-between gap-4 relative z-10 w-full items-center md:items-start">
          <div className="w-full flex flex-col gap-3">
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

            <div className="flex flex-col gap-2.5 w-full">
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
                          <div className="flex items-center gap-1.5 flex-shrink-0 self-center sm:self-auto">
                            {(item.documentPt || item.documentEn) && (
                              <span className="text-[8.5px] md:text-[9px] font-bold font-mono text-wine uppercase px-1.5 py-0.5 bg-wine/10 border border-wine/25 rounded flex items-center gap-1">
                                <span>📄</span> {lang === "pt" ? "Artigo PDF" : "PDF Paper"}
                              </span>
                            )}
                            <span className="text-[9px] md:text-[10px] font-bold font-mono text-txt-muted uppercase px-2 py-0.5 bg-surface border border-border-soft/40 rounded">
                              {lang === "pt" ? item.periodPt : item.periodEn}
                            </span>
                          </div>
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
                        maxHeight: isExpanded ? "420px" : "0px",
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

                      {/* Document Action Button if available */}
                      {(item.documentPt || item.documentEn) && (
                        <div className="mt-3 pt-2.5 border-t border-border-soft/40 flex flex-col sm:flex-row items-center justify-between gap-2">
                          <span className="font-mono text-[9px] font-bold text-wine uppercase tracking-wider flex items-center gap-1.5 text-center sm:text-left">
                            <span>📄</span> {lang === "pt" ? "Artigo / TCC da Pós-Graduação:" : "Capstone Research Paper:"}
                          </span>
                          <div className="flex items-center gap-2">
                            {item.documentPt && (
                              <a
                                href={item.documentPt}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2.5 py-1 bg-[#542E3B] hover:bg-[#774F4C] !text-[#FAF6EF] font-sans rounded-md font-bold text-[9.5px] uppercase tracking-wider transition-all flex items-center gap-1 shadow-xs cursor-pointer"
                                title={lang === "pt" ? "Abrir TCC em Português (PDF)" : "Open Capstone in Portuguese (PDF)"}
                              >
                                <span>🇧🇷</span> {lang === "pt" ? "Ver TCC (PT)" : "View Paper (PT)"} ↗
                              </a>
                            )}
                            {item.documentEn && (
                              <a
                                href={item.documentEn}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2.5 py-1 bg-[#4E5F2A] hover:bg-[#5C5E26] !text-[#FAF6EF] font-sans rounded-md font-bold text-[9.5px] uppercase tracking-wider transition-all flex items-center gap-1 shadow-xs cursor-pointer"
                                title={lang === "pt" ? "Abrir TCC em Inglês (PDF)" : "Open Capstone in English (PDF)"}
                              >
                                <span>🇺🇸</span> {lang === "pt" ? "Ver TCC (EN)" : "View Paper (EN)"} ↗
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Work Authorization & Location Badge at foot of Education column */}
          <div className="w-full bg-frost/70 border border-border-soft/60 rounded-xl px-3.5 py-2.5 text-[11px] font-sans shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-2.5 mt-2">
            <div className="flex items-center gap-1.5 text-wine font-bold font-mono text-[10px] uppercase tracking-wider flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-terracotta flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{lang === "pt" ? "Portugal • UE" : "Portugal • EU"}</span>
            </div>
            <p className="text-txt-muted text-[10px] md:text-[11px] leading-snug text-center sm:text-left">
              {lang === "pt"
                ? "Autorização de residência e pleno direito de trabalho em Portugal / UE (sem necessidade de patrocínio de visto • NIF e NISS ativos)."
                : "Residence permit & full right to work in Portugal / EU (no visa sponsorship required • Active NIF and NISS)."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
