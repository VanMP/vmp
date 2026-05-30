import React, { useState } from "react";
import { projects, type Project } from "../../data/projects";
import { methods, type Method } from "../../data/methods";
import { stackItems, type StackItem } from "../../data/stack";

function getProjectIcon(id: string, colorClass: string) {
  switch (id) {
    case "bayesian-promotions":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "time-series-impact":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h12a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "survival-time-to-event":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "portfolio-optimization":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "churn-ltv-matrix":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "nlp-text-mining":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      );
    case "rag-assistant":
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" className={colorClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      );
  }
}

interface ProjectWorkbenchProps {
  lang?: "pt" | "en";
}

let audioCtx: any = null;
let activeGains: any[] = [];

const playDrawerSound = (type: "open" | "close") => {
  try {
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // 1. Cancel and fade out any currently active sounds smoothly to prevent overlaps and clicks/pops
    activeGains.forEach(gainNode => {
      try {
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.05);
      } catch (err) {
        // Fail silently
      }
    });
    activeGains = [];
    
    // 2. Master gain control for very soft volume - increased for audibility
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(type === "open" ? 0.22 : 0.28, now);
    masterGain.connect(audioCtx.destination);
    
    // Track this new gain node
    activeGains.push(masterGain);

    // Bandpass filtered rumble noise - stretched for slower speed
    const bufferSize = audioCtx.sampleRate * (type === "open" ? 0.85 : 0.75);
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(140, now);
    noiseFilter.Q.setValueAtTime(1.8, now);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(0.38, now + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + (type === "open" ? 0.85 : 0.75));

    noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noiseNode.start(now);

    // Tactile clicks & thuds - timed perfectly with 0.85s (open) and 0.75s (close) visual animations
    if (type === "open") {
      const clickOsc = audioCtx.createOscillator();
      const clickGain = audioCtx.createGain();
      clickOsc.type = "triangle";
      clickOsc.frequency.setValueAtTime(500, now + 0.7);
      clickOsc.frequency.exponentialRampToValueAtTime(60, now + 0.78);
      
      clickGain.gain.setValueAtTime(0, now);
      clickGain.gain.setValueAtTime(0.30, now + 0.7);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      clickOsc.connect(clickGain);
      clickGain.connect(masterGain);
      clickOsc.start(now + 0.7);
      clickOsc.stop(now + 0.82);
    } else {
      const thudOsc = audioCtx.createOscillator();
      const thudGain = audioCtx.createGain();
      thudOsc.type = "sine";
      thudOsc.frequency.setValueAtTime(75, now + 0.58);
      thudOsc.frequency.exponentialRampToValueAtTime(20, now + 0.66);

      thudGain.gain.setValueAtTime(0, now);
      thudGain.gain.setValueAtTime(0.68, now + 0.58);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.72);

      thudOsc.connect(thudGain);
      thudGain.connect(masterGain);
      thudOsc.start(now + 0.58);
      thudOsc.stop(now + 0.74);
    }
  } catch (err) {
    // Fail silently
  }
};

export default function ProjectWorkbench({ lang = "pt" }: ProjectWorkbenchProps) {
  // Main Tab/Drawer State
  const [activeDrawer, setActiveDrawer] = useState<"projects" | "methods" | "stack">("projects");
  
  // Sidebar Collapse & Selector Drawer States
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  
  // Selection States
  const [selectedProjectId, setSelectedProjectId] = useState<string>("bayesian-promotions");
  const [selectedMethodId, setSelectedMethodId] = useState<string>("ab-tests");
  const [selectedStackName, setSelectedStackName] = useState<string>("Python");

  // Option A (Filing Cabinet Drawers) States
  const [openDrawerId, setOpenDrawerId] = useState<string | null>(null);
  const [displayDrawerId, setDisplayDrawerId] = useState<string | null>(null);
  const [drawerTransition, setDrawerTransition] = useState<"pull" | "push" | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleOpenDrawer = (id: string) => {
    if (isTransitioning) return;
    if (id === openDrawerId) return;

    if (openDrawerId === null) {
      setIsTransitioning(true);
      playDrawerSound("open");
      setOpenDrawerId(id);
      setDisplayDrawerId(id);
      setDrawerTransition("pull");
      setTimeout(() => {
        setIsTransitioning(false);
      }, 900); // Slower open animation finish time
    } else {
      setIsTransitioning(true);
      playDrawerSound("close");
      setDrawerTransition("push");
      setOpenDrawerId(null);
      
      setTimeout(() => {
        playDrawerSound("open");
        setOpenDrawerId(id);
        setDisplayDrawerId(id);
        setDrawerTransition("pull");
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 900);
      }, 800); // Slower close transition buffer before pulling next
    }
  };

  const handleCloseDrawer = () => {
    if (isTransitioning) return;
    if (openDrawerId === null) return;

    setIsTransitioning(true);
    playDrawerSound("close");
    setDrawerTransition("push");
    setOpenDrawerId(null);
    
    setTimeout(() => {
      setDisplayDrawerId(null);
      setDrawerTransition(null);
      setIsTransitioning(false);
    }, 800); // Slower close animation finish time
  };

  // Project Carousel Navigation
  const projectIndex = projects.findIndex((p) => p.id === selectedProjectId);
  const currentProject = projects[projectIndex] || projects[0];

  const handlePrevProject = () => {
    const prevIdx = (projectIndex - 1 + projects.length) % projects.length;
    setSelectedProjectId(projects[prevIdx].id);
  };

  const handleNextProject = () => {
    const nextIdx = (projectIndex + 1) % projects.length;
    setSelectedProjectId(projects[nextIdx].id);
  };

  const currentMethod = methods.find((m) => m.id === selectedMethodId) || methods[0];
  const currentStackItem = stackItems.find((s) => s.name === selectedStackName) || stackItems[0];

  // Dynamic method translation helper
  const getMethodName = (methodNamePt: string) => {
    // First look in methods data
    const methodObj = methods.find((m) => m.name.toLowerCase() === methodNamePt.toLowerCase());
    if (lang === "en" && methodObj) return methodObj.nameEn;

    // Custom lookup for tags that are not full methods
    const customTranslations: { [key: string]: string } = {
      "Eventos raros": "Rare events",
      "Inferência bayesiana": "Bayesian inference",
      "Intervalos de credibilidade": "Credibility intervals",
      "Projeção de lucro": "Profit projection",
      "Inferência em séries temporais": "Time series inference",
      "Análise contrafactual": "Counterfactual analysis",
      "Séries temporais interrompidas": "Interrupted time series",
      "Intervalos de confiança": "Confidence intervals",
      "Análise de sobrevivência": "Survival analysis",
      "Simulação de market share": "Market share simulation",
      "Segmentação RFM": "RFM segmentation",
      "Predição de churn": "Churn prediction",
      "Otimização de ROI": "ROI optimization",
      "Análise de sentimentos": "Sentiment analysis",
      "Modelagem de tópicos": "Topic modeling",
      "Extração de entidades": "Entity extraction",
      "Sumarização": "Summarization",
      "Classificação de texto": "Text classification",
      "Pesquisa vetorial": "Vector search",
      "Agentes de IA": "AI agents",
      "Testes A/B": "A/B Testing",
      "Testes multivariados": "Multivariate testing",
      "Desenho experimental": "Experimental design",
      "Elasticidade de preço": "Price elasticity",
      "Teste Z": "Z-test",
      "Riscos proporcionais de Cox": "Cox proportional hazards",
      "Razão de risco (Hazard Ratio)": "Hazard ratio",
      "Simulação de quota de mercado": "Market share simulation",
      "Previsão de rotatividade (churn)": "Churn prediction",
      "Vetorização de texto": "Text vectorization"
    };

    if (lang === "en" && customTranslations[methodNamePt]) {
      return customTranslations[methodNamePt];
    }

    return methodNamePt;
  };

  // Group stack items by Category (dynamic lang)
  const getStackCategory = (item: StackItem) => {
    return lang === "en" ? item.categoryEn : item.category;
  };

  const stackCategories = lang === "en" 
    ? ["Analysis", "Visualization", "Machine Learning / NLP", "Automation / AI", "Infra / Organization"]
    : ["Análise", "Visualização", "Aprendizado de Máquina / PLN", "Automação / IA", "Infra / Organização"];

  const getStackGroups = () => {
    const groups: { [key: string]: StackItem[] } = {};
    stackCategories.forEach(cat => {
      groups[cat] = stackItems.filter(s => (lang === "en" ? s.categoryEn : s.category) === cat);
    });
    return groups;
  };

  const stackGroups = getStackGroups();

  // Group methods by Category (dynamic lang)
  const methodGroups = {
    [lang === "en" ? "Experimentation" : "Experimentação"]: methods.filter(
      (m) => (lang === "en" ? m.groupEn : m.group) === (lang === "en" ? "Experimentation" : "Experimentação")
    ),
    [lang === "en" ? "Inference & Modeling" : "Inferência e modelagem"]: methods.filter(
      (m) => (lang === "en" ? m.groupEn : m.group) === (lang === "en" ? "Inference & Modeling" : "Inferência e modelagem")
    ),
    [lang === "en" ? "Optimization & Quant Intelligence" : "Otimização e inteligência quantitativa"]: methods.filter(
      (m) => (lang === "en" ? m.groupEn : m.group) === (lang === "en" ? "Optimization & Quant Intelligence" : "Otimização e inteligência quantitativa")
    ),
    [lang === "en" ? "NLP & Automation" : "PLN e automação"]: methods.filter(
      (m) => (lang === "en" ? m.groupEn : m.group) === (lang === "en" ? "NLP & Automation" : "PLN e automação")
    ),
  };

  return (
    <section className="px-6 py-4 md:px-8 md:py-6 w-full font-sans flex flex-col gap-6">
      
      {/* Title with Flanking Lines and Ornaments */}
      <div className="flex items-center justify-center gap-4 w-full select-none">
        <div className="h-px bg-gradient-to-r from-transparent to-border-soft flex-1"></div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" className="w-4 h-4 text-olive rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M 12 22 C 16 16, 18 10, 13 8 C 8 6, 6 12, 12 22 Z" />
          </svg>
          <h2 className="font-serif text-base md:text-lg font-bold text-wine tracking-wide text-center">
            {lang === "pt" ? "Projetos" : "Projects"}
          </h2>
          <svg width="16" height="16" className="w-4 h-4 text-olive -scale-x-100 rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M 12 2 C 16 16, 18 10, 13 8 C 8 6, 6 12, 12 22 Z" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-border-soft flex-1"></div>
      </div>

      {false && (
        /* ==================== OPTION A: PHYSICAL FILING CABINET DRAWERS ==================== */
        <div className="w-full flex flex-col gap-6">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes drawerPull {
              0% { transform: translateX(-250px); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
            @keyframes drawerPush {
              0% { transform: translateX(0); opacity: 1; }
              100% { transform: translateX(-250px); opacity: 0; }
            }
            @keyframes folderContentRise {
              0% { transform: translateY(20px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-drawer-pull {
              animation: drawerPull 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }
            .animate-drawer-push {
              animation: drawerPush 0.75s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }
            .animate-folder-content {
              animation: folderContentRise 0.75s cubic-bezier(0.25, 1, 0.5, 1) 0.25s both;
            }
            /* Precise smooth sliding physical transition for slot drawer face */
            .transition-drawer-face {
              transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .drawer-face-open {
              transform: translateX(115%) !important;
              opacity: 0 !important;
              pointer-events: none;
            }
            .drawer-face-closed {
              transform: translateX(0) !important;
              opacity: 1 !important;
            }
            /* Custom styling for clean paper scroll */
            .paper-scroll::-webkit-scrollbar {
              width: 5px;
            }
            .paper-scroll::-webkit-scrollbar-track {
              background: rgba(138, 101, 53, 0.05);
              border-radius: 4px;
            }
            .paper-scroll::-webkit-scrollbar-thumb {
              background: #C8BFB0;
              border-radius: 4px;
            }
            .paper-scroll::-webkit-scrollbar-thumb:hover {
              background: #8A6535;
            }
          ` }} />

          {/* Unified Two-Column Filing Cabinet Layout */}
          <div className="w-full flex flex-col lg:flex-row lg:items-stretch items-start gap-6 relative">
            
            {/* 1. LEFT COLUMN: Contiguous Filing Cabinet Frame - overflow-visible to let drawers slide out */}
            <div className="w-full lg:w-[330px] bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#EDE6D9] border border-[#DCD6C8] shadow-[0_12px_36px_rgba(138,101,53,0.05),inset_0_1px_0_white] p-4 md:p-5 rounded-2xl flex flex-col gap-4 flex-shrink-0 select-none relative overflow-visible">
              
              {/* Cabinet Bevel Highlight */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
              
              {/* Cabinet Brass Plaque */}
              <div className="w-full py-2 bg-gradient-to-b from-[#774F4C] to-[#5F3E3B] border border-[#774F4C] rounded-lg shadow-md flex flex-col items-center justify-center text-center px-3 relative mb-1">
                <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-stone-950 border border-stone-600 shadow-xs"></div>
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-stone-950 border border-stone-600 shadow-xs"></div>
                <span className="font-serif text-[10px] font-extrabold text-[#FAF6EE] tracking-[0.15em] uppercase">
                  {lang === "pt" ? "ARQUIVO DE PROJETOS" : "PROJECT ARCHIVE"}
                </span>
                <span className="font-mono text-[7px] text-[#EADFC9]/85 uppercase tracking-[0.05em] mt-0.5">
                  {lang === "pt" ? "Estudos de Caso" : "Case Studies"}
                </span>
              </div>

              {/* Vertical contiguous list of slots - overflow-visible to allow horizontal drawer slide out */}
              <div className="flex flex-col gap-2.5 w-full relative overflow-visible">
                {projects.map((p, idx) => {
                  const isOpen = openDrawerId === p.id;
                  return (
                    <div 
                      key={p.id} 
                      className="relative h-[72px] flex-shrink-0 w-full overflow-visible"
                    >
                      {/* Empty Slot Cavity Inside Cabinet - exactly 72px high - Clickable to Close */}
                      <button
                        onClick={handleCloseDrawer}
                        disabled={!isOpen}
                        className={`absolute inset-0 w-full h-full bg-[#E2DCD0]/30 border border-[#DCD5C5] shadow-[inset_0_4px_8px_rgba(0,0,0,0.06)] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#E2DCD0]/45 ${
                          isOpen ? "cursor-pointer" : "cursor-default pointer-events-none"
                        }`}
                        title={lang === "pt" ? "Fechar Gaveta (Clique na cavidade)" : "Close Drawer (Click empty slot)"}
                      >
                        {/* Silver metal runners inside empty slot */}
                        <div className="absolute left-1.5 top-1.5 bottom-1.5 w-1 bg-stone-400 rounded-sm shadow-inner"></div>
                        <div className="absolute right-1.5 top-1.5 bottom-1.5 w-1 bg-stone-400 rounded-sm shadow-inner"></div>
                        <div className="absolute left-3 right-3 h-1.5 bg-stone-400/60 top-1/2 -translate-y-1/2 rounded"></div>
                        
                        {/* Subtle outline highlight to indicate clickability */}
                        <div className="absolute inset-0 border border-transparent hover:border-wine/10 rounded-xl transition-all"></div>
                      </button>

                      {/* Closed Drawer Front Face - exactly 72px high - Horizontal Slide animation */}
                      <button
                        onClick={() => handleOpenDrawer(p.id)}
                        className={`absolute inset-0 w-full h-full text-left rounded-xl transition-drawer-face flex items-center justify-between px-4 group bg-gradient-to-r from-[#FAF8F5] via-[#FAF6EE] to-[#F4EFE6] border border-[#DCD5C5] shadow-[inset_0_1px_0_white,0_2.5px_5px_rgba(0,0,0,0.025)] hover:from-white hover:to-[#FAF9F6] hover:shadow-[inset_0_1px_0_white,0_4px_8px_rgba(0,0,0,0.05)] hover:translate-x-0.5 active:translate-x-0 ${
                          isOpen ? "drawer-face-open" : "drawer-face-closed cursor-pointer"
                        }`}
                      >
                        {/* Brass Index Card / Label Holder */}
                        <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                          <div className="w-5 h-5 rounded-full bg-[#FCFBF8] border border-[#DCD5C5] flex items-center justify-center text-[10px] font-serif font-bold text-wine shadow-inner flex-shrink-0">
                            {idx + 1}
                          </div>
                          <div className="border border-[#DFC88A] bg-[#FCFBF9] px-2 py-0.5 shadow-xs rounded-sm flex-1 min-w-0">
                            <span className="font-mono text-[9px] font-extrabold text-[#5C4D35] uppercase tracking-wider block leading-none truncate">
                              {lang === "en" ? p.shortTitleEn : p.shortTitle}
                            </span>
                          </div>
                        </div>

                        {/* Antique Gold Handle */}
                        <div className="w-12 h-5 rounded-md border border-[#DFC88A]/85 bg-gradient-to-b from-[#DFC88A] to-[#B89F60] shadow-xs flex items-center justify-center group-hover:from-[#EAD59E] group-hover:to-[#C2AA6B] transition-all duration-200 flex-shrink-0">
                          <div className="w-8 h-1 rounded-sm bg-[#7A6424] border-t border-[#DFC88A]/45 shadow-inner"></div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. RIGHT COLUMN: Open Drawer Dossier Tray */}
            <div className="flex-1 w-full relative lg:self-stretch h-auto min-h-0 flex flex-col">
              
              {/* Background Closed Cover - permanently in the background without animations on desktop, hidden when open on mobile */}
              <div 
                className={`w-full lg:h-full flex-1 min-h-[320px] h-auto bg-[#FAF7F0] border border-[#DCD5C5] rounded-2xl p-8 lg:flex flex-col items-center justify-center text-center gap-6 shadow-[0_8px_20px_rgba(138,101,53,0.015)] relative overflow-hidden ${
                  displayDrawerId !== null ? "hidden lg:flex" : "flex"
                }`}
              >
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#8A6535]/30"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#8A6535]/30"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#8A6535]/30"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#8A6535]/30"></div>
                
                {/* Decorative wine red wax seal */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#774F4C] to-[#553634] shadow-[0_4px_8px_rgba(0,0,0,0.15)] border border-[#774F4C] flex items-center justify-center text-[#FAF6EE] select-none scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M 12 2 C 16 16, 18 10, 13 8 C 8 6, 6 12, 12 22 Z" />
                  </svg>
                </div>

                <div className="space-y-2 max-w-sm">
                  <h4 className="font-serif text-base font-bold text-wine tracking-wide">
                    {lang === "pt" ? "Arquivo Científico de Vanessa" : "Vanessa's Scientific Archive"}
                  </h4>
                  <p className="font-serif italic text-xs text-stone-600 leading-relaxed">
                    {lang === "pt" 
                      ? "Este gabinete digital contém relatórios detalhados, dados analíticos descaracterizados e métricas de impacto de negócios."
                      : "This digital archive houses detailed case reports, anonymized analytical data, and business impact metrics."}
                  </p>
                </div>
                
                <div className="h-px w-20 bg-[#C5BCAE]/60"></div>

                <p className="font-mono text-[9px] text-[#8A6535] leading-relaxed uppercase tracking-widest font-extrabold animate-pulse">
                  {lang === "pt"
                    ? "✦ Puxe uma gaveta no armário para abrir ✦"
                    : "✦ Pull a drawer on the cabinet to open ✦"}
                </p>
              </div>

              {/* Foreground open drawer panel - absolute on desktop to reveal static cover underneath when closing, relative on mobile to stretch naturally */}
              {displayDrawerId !== null && (
                (() => {
                  const activeProject = projects.find(p => p.id === displayDrawerId)!;
                  const projectIndex = projects.findIndex(p => p.id === displayDrawerId);
                  
                  return (
                    <div 
                      key={`${displayDrawerId}-${drawerTransition}`}
                      className={`w-full lg:h-full flex-1 h-auto lg:absolute lg:inset-0 lg:w-full lg:h-full lg:z-10 flex flex-col lg:flex-row items-stretch bg-[#FAF7F0] border border-[#C8BFB0] rounded-2xl overflow-hidden shadow-2xl ${
                        drawerTransition === "push" ? "animate-drawer-push" : "animate-drawer-pull"
                      }`}
                    >
                      
                      {/* Middle: Ivory dossier files spread inside the drawer */}
                      <div className="flex-1 p-6 md:p-8 lg:overflow-y-auto lg:paper-scroll overflow-visible h-auto bg-[#FCFBF8] border-r border-[#DCD5C5] animate-folder-content">
                        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr] gap-8 h-full items-start">
                          
                          {/* Dossier Left Page: Text description, Problem & tags */}
                          <div className="flex flex-col gap-4">
                            <div className="border-b border-dashed border-[#DCD5C5] pb-2 flex items-center justify-between">
                              <span className="font-mono text-[10px] font-extrabold text-terracotta tracking-widest uppercase">
                                📂 {lang === "en" ? activeProject.categoryEn : activeProject.category}
                              </span>
                              {activeProject.simulated && (
                                <span className="font-mono text-[8px] font-bold px-2 py-0.5 rounded border border-[#8A6535]/30 bg-[#8A6535]/5 text-[#8A6535]">
                                  {lang === "pt" ? "DADOS DESCARACTERIZADOS" : "ANONYMIZED DATA"}
                                </span>
                              )}
                            </div>

                            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-wine leading-tight">
                              {lang === "en" ? activeProject.titleEn : activeProject.title}
                            </h3>

                            <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-sans">
                              {lang === "en" ? activeProject.summaryEn : activeProject.summary}
                            </p>

                            {/* Organization business problem stamp box */}
                            <div className="bg-[#FAF8F2] border border-[#E4DFD3] rounded-xl p-4 shadow-xs relative overflow-hidden">
                              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#8A6535]"></div>
                              <span className="font-mono text-[9px] font-extrabold text-stone-600 block uppercase tracking-wider mb-1.5">
                                ✏️ {lang === "pt" ? "O PROBLEMA DA ORGANIZAÇÃO" : "THE BUSINESS PROBLEM"}
                              </span>
                              <p className="text-xs text-stone-600 leading-relaxed font-serif italic">
                                "{lang === "en" ? activeProject.problemEn : activeProject.problem}"
                              </p>
                            </div>

                            {/* Methods and tools tags */}
                            <div className="flex flex-col gap-3.5 border-t border-stone-200/60 pt-4 mt-2">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[9px] font-extrabold text-stone-500 uppercase tracking-wider w-24 flex-shrink-0">
                                  {lang === "pt" ? "Metodologia:" : "Methods:"}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {activeProject.methods.map((m) => (
                                    <span key={m} className="px-2.5 py-0.5 bg-[#EADFC9]/50 text-[#5C4D35] text-[10px] font-bold rounded border border-[#D5C29D] font-mono leading-none">
                                      {getMethodName(m)}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[9px] font-extrabold text-stone-500 uppercase tracking-wider w-24 flex-shrink-0">
                                  {lang === "pt" ? "Ferramentas:" : "Tools:"}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {activeProject.tools.map((t) => (
                                    <span key={t} className="px-2.5 py-0.5 bg-stone-200/60 text-stone-700 text-[10px] font-mono font-bold rounded border border-stone-300/80 leading-none">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Dossier Right Page: Interactive sketch graphic, Stamped metrics & Outcome */}
                          <div className="flex flex-col gap-5">
                            
                            {/* Technical Sketch Graph - beautifully constrained */}
                            <div className="border border-[#E4DFD3] bg-[#FCFBF8] bg-[radial-gradient(#E8E2D5_1.2px,transparent_1.2px)] [background-size:16px_16px] p-5 rounded-xl shadow-inner relative max-h-[220px]">
                              <span className="font-mono text-[8px] font-extrabold text-[#756E63] uppercase tracking-wider block mb-2 border-b border-stone-200/60 pb-1">
                                📐 {lang === "pt" ? "MODELO ANALÍTICO DE DADOS" : "DATA ANALYSIS MODEL"}
                              </span>
                              <div className="h-32 w-full flex items-center justify-center">
                                <MiniVisual type={activeProject.visualType} lang={lang} />
                              </div>
                            </div>

                            {/* Outcome Certificate Stamp */}
                            <div className="bg-gradient-to-r from-olive/5 via-olive/10 to-transparent border border-olive/20 p-4 rounded-xl flex gap-3 items-start shadow-xs relative overflow-hidden">
                              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-olive"></div>
                              <div className="w-7 h-7 rounded-full bg-olive/15 flex items-center justify-center text-olive flex-shrink-0 text-xs shadow-inner">
                                🏆
                              </div>
                              <div className="space-y-0.5">
                                <span className="font-mono text-[8px] uppercase tracking-wider font-extrabold text-olive block">
                                  {lang === "pt" ? "Métricas e Impacto Realizado" : "Outcome Summary"}
                                </span>
                                <p className="font-serif italic text-xs text-wine leading-relaxed font-semibold">
                                  {lang === "en" ? activeProject.outcomeEn : activeProject.outcome}
                                </p>
                              </div>
                            </div>

                            {/* 3 Metric Cards */}
                            <div className="grid grid-cols-3 gap-3">
                              {(activeProject.id === "bayesian-promotions" 
                                ? [
                                    { label: "p-valor", labelEn: "p-value", value: "0,1828", note: "Frequentista", noteEn: "Frequentist" },
                                    { label: "P(A > B)", labelEn: "P(A > B)", value: "90,9%", note: "Bayesiana", noteEn: "Bayesian" },
                                    { label: "Lucro esp.", labelEn: "Exp. profit", value: "R$ 3.876", note: "A vs B: R$ 3.192", noteEn: "A vs B: R$ 3.1k" }
                                  ]
                                : activeProject.metrics.slice(0, 3)
                              ).map((metric, idx) => (
                                <div key={idx} className="p-3.5 bg-[#F2EDE2] border border-[#DCD6C9] rounded-xl flex flex-col justify-center text-center shadow-xs relative overflow-hidden">
                                  <span className="text-[7.5px] font-bold text-stone-500 uppercase tracking-wider leading-none mb-1.5">
                                    {lang === "en" && metric.labelEn ? metric.labelEn : metric.label}
                                  </span>
                                  <span className="text-xs md:text-sm font-bold text-wine font-serif py-0.5 select-all">
                                    {metric.value}
                                  </span>
                                  {(lang === "en" && metric.noteEn ? metric.noteEn : metric.note) && (
                                    <span className="text-[8.5px] text-stone-600 leading-tight mt-1 font-serif italic border-t border-stone-300/40 pt-1">
                                      {lang === "en" && metric.noteEn ? metric.noteEn : metric.note}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>

                          </div>
                        </div>

                        {/* Dossier Bottom Prev/Next Drawer controls */}
                        <div className="mt-6 pt-4 border-t border-[#DCD5C5]/60 flex items-center justify-between select-none">
                          <button
                            onClick={() => {
                              const prevIdx = (projectIndex - 1 + projects.length) % projects.length;
                              handleOpenDrawer(projects[prevIdx].id);
                            }}
                            className="px-3.5 py-1.5 rounded-lg border border-stone-300 hover:border-wine hover:text-wine bg-[#F2EDE2] text-[#5C4D35] transition-all font-mono text-[9px] font-extrabold flex items-center gap-1 cursor-pointer shadow-xs"
                          >
                            ◀ {lang === "pt" ? "Gaveta Ant." : "Prev Drawer"}
                          </button>
                          <div className="flex gap-2">
                            {projects.map((p, idx) => (
                              <button
                                key={p.id}
                                onClick={() => handleOpenDrawer(p.id)}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                  p.id === activeProject.id ? "bg-wine scale-110" : "bg-stone-300 hover:bg-stone-400"
                                }`}
                                title={lang === "en" ? p.shortTitleEn : p.shortTitle}
                              />
                            ))}
                          </div>
                          <button
                            onClick={() => {
                              const nextIdx = (projectIndex + 1) % projects.length;
                              handleOpenDrawer(projects[nextIdx].id);
                            }}
                            className="px-3 py-1.5 rounded-lg border border-stone-300 hover:border-wine hover:text-wine bg-[#F2EDE2] text-[#5C4D35] transition-all font-mono text-[9px] font-extrabold flex items-center gap-1 cursor-pointer shadow-xs"
                          >
                            {lang === "pt" ? "Próx Gaveta" : "Next Drawer"} ▶
                          </button>
                        </div>
                      </div>

                      {/* 3. Desktop Right Cap: Pulled Drawer Front Face Cap - Clickable to Close */}
                      <button
                        onClick={handleCloseDrawer}
                        className="hidden lg:flex w-14 lg:w-16 h-full bg-gradient-to-b from-[#FCFBF9] via-[#F4EFE6] to-[#EDE6D9] border-l border-[#DCD5C5] shadow-[inset_1px_0_0_white,2px_0_8px_rgba(0,0,0,0.05)] flex-col items-center justify-between py-8 select-none cursor-pointer group/cap hover:from-white hover:to-[#FAF9F6] transition-all duration-300"
                        title={lang === "pt" ? "Fechar Gaveta (Clique na aba)" : "Close Drawer (Click tab)"}
                      >
                        {/* Gold top rivet screw */}
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#EAD59E] to-[#B89F60] border border-stone-400 shadow-sm flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-0.5 bg-stone-700/60 rotate-45"></div>
                        </div>
                        
                        {/* Vertical rotated label card & ring pull */}
                        <div className="flex flex-col items-center gap-6">
                          {/* Rotated gold index label card */}
                          <div className="border border-[#DFC88A] bg-[#FCFBF8] px-1 py-3 shadow-inner rounded-sm rotate-90 my-4 flex items-center justify-center w-28 h-6 flex-shrink-0 group-hover/cap:border-wine/60 transition-colors">
                            <span className="font-mono text-[8px] font-extrabold text-[#5C4D35] group-hover/cap:text-wine uppercase tracking-widest text-center truncate w-24 transition-colors">
                              {lang === "en" ? activeProject.shortTitleEn : activeProject.shortTitle}
                            </span>
                          </div>

                          {/* Antique Gold ring pull handle */}
                          <div
                            className="w-10 h-10 rounded-full border border-[#DFC88A] bg-gradient-to-b from-[#DFC88A] to-[#B89F60] group-hover/cap:from-[#EAD59E] group-hover/cap:to-[#C2AA6B] shadow-md flex items-center justify-center transition-all duration-200"
                          >
                            <div className="w-7 h-7 rounded-full border-3 border-[#7A6424] shadow-inner flex items-center justify-center bg-stone-100/30">
                              <div className="w-4 h-4 rounded-full border border-[#DFC88A]/50"></div>
                            </div>
                          </div>
                        </div>

                        {/* Gold bottom rivet screw */}
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#EAD59E] to-[#B89F60] border border-stone-400 shadow-sm flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-0.5 bg-stone-700/60 -rotate-45"></div>
                        </div>

                      </button>

                    </div>
                  );
                })()
              )}
            </div>

          </div>
        </div>
      )}

      {true && (
        <div className="border border-border-soft bg-surface/50 rounded-2xl shadow-[0_4px_24px_rgba(44,40,34,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-[auto_1fr] h-auto md:h-[680px] relative">
        
        {/* Left/Top Navigation Sidebar/Tabbar */}
        <nav className={`border-b md:border-b-0 md:border-r border-border-soft bg-frost/25 p-3 md:p-4 flex flex-row md:flex-col justify-between gap-2 md:gap-6 overflow-x-auto md:overflow-y-auto transition-all duration-300 flex-shrink-0 w-full ${
          sidebarCollapsed ? "md:w-[64px] md:items-center md:px-2" : "md:w-[260px]"
        }`}>
          <div className="flex flex-row md:flex-col gap-2 md:gap-3 w-full">
            {/* Collapse Toggle Button */}
            <button
              onClick={() => {
                setSidebarCollapsed(!sidebarCollapsed);
                setDrawerOpen(false);
              }}
              className={`hidden md:flex w-full py-1.5 px-2 rounded-lg border border-border-soft/60 hover:bg-surface hover:text-wine transition-soft text-left items-center justify-between text-[10px] font-bold text-txt-muted uppercase tracking-wider cursor-pointer ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
              title={sidebarCollapsed ? (lang === "pt" ? "Expandir menu" : "Expand menu") : (lang === "pt" ? "Recolher menu" : "Collapse menu")}
            >
              {!sidebarCollapsed && <span>{lang === "pt" ? "Recolher menu" : "Collapse menu"}</span>}
              <span>{sidebarCollapsed ? "▶" : "◀"}</span>
            </button>

            {/* Tab 1: Projetos */}
            <button
              onClick={() => {
                setActiveDrawer("projects");
                // On desktop, clicking the projects tab should just uncollapse the sidebar if collapsed, or act normally.
                // We do NOT toggle the confusing separate drawer overlay on desktop anymore.
                if (sidebarCollapsed) {
                  setSidebarCollapsed(false);
                }
              }}
              className={`text-left p-2.5 md:p-3 rounded-xl transition-soft flex items-center justify-between group border cursor-pointer flex-1 md:flex-initial ${
                activeDrawer === "projects"
                  ? "bg-olive border-olive text-white shadow-sm"
                  : "bg-surface/60 border-border-soft/60 hover:bg-surface text-txt-main hover:border-border-soft"
              } ${sidebarCollapsed ? "md:justify-center md:px-1.5" : ""}`}
              title={lang === "pt" ? "Projetos" : "Projects"}
            >
              <div className="flex items-center gap-2 md:gap-3 mx-auto md:mx-0">
                <svg width="16" height="16" className="w-4 h-4 text-inherit flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className={`flex flex-col text-left ${sidebarCollapsed ? "md:hidden" : "flex"}`}>
                  <span className="text-[11px] md:text-xs font-bold leading-tight">
                    {lang === "pt" ? "Projetos" : "Projects"}
                  </span>
                  <span className={`text-[9px] font-medium hidden md:block ${activeDrawer === "projects" ? "text-surface/80" : "text-txt-muted"}`}>
                    {lang === "pt" ? "Casos de estudo" : "Case studies"}
                  </span>
                </div>
              </div>
              {!sidebarCollapsed && (
                <span className={`text-xs transition-transform duration-200 hidden md:inline ${activeDrawer === "projects" ? "translate-x-0.5" : "text-txt-muted group-hover:translate-x-0.5"}`}>
                  ➔
                </span>
              )}
            </button>

            {/* List of projects inside sidebar (only when expanded and on desktop) */}
            {!sidebarCollapsed && activeDrawer === "projects" && (
              <div className="hidden md:flex flex-col gap-1 pl-2 mt-1 max-h-[220px] overflow-y-auto border-l border-border-soft/60">
                {projects.map((p) => {
                  const isSelected = p.id === selectedProjectId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      className={`text-left text-xs px-2 py-1.5 rounded-lg transition-soft border-l-2 cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? "bg-olive/15 border-olive text-olive font-bold"
                          : "border-transparent hover:bg-surface/80 text-txt-muted font-medium"
                      }`}
                    >
                      {getProjectIcon(p.id, isSelected ? "text-olive flex-shrink-0" : "text-txt-muted flex-shrink-0")}
                      <span className="truncate block">
                        {lang === "en" ? p.shortTitleEn : p.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Métodos */}
            <button
              onClick={() => {
                setActiveDrawer("methods");
                setDrawerOpen(false);
              }}
              className={`text-left p-2.5 md:p-3 rounded-xl transition-soft flex items-center justify-between group border cursor-pointer flex-1 md:flex-initial ${
                activeDrawer === "methods"
                  ? "bg-wine border-wine text-white shadow-sm"
                  : "bg-surface/60 border-border-soft/60 hover:bg-surface text-txt-main hover:border-border-soft"
              } ${sidebarCollapsed ? "md:justify-center md:px-1.5" : ""}`}
              title={lang === "pt" ? "Métodos" : "Methods"}
            >
              <div className="flex items-center gap-2 md:gap-3 mx-auto md:mx-0">
                <svg width="16" height="16" className="w-4 h-4 text-inherit flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div className={`flex flex-col text-left ${sidebarCollapsed ? "md:hidden" : "flex"}`}>
                  <span className="text-[11px] md:text-xs font-bold leading-tight">
                    {lang === "pt" ? "Métodos" : "Methods"}
                  </span>
                  <span className={`text-[9px] font-medium hidden md:block ${activeDrawer === "methods" ? "text-surface/80" : "text-txt-muted"}`}>
                    {lang === "pt" ? "Abordagens que utilizo" : "Approaches I use"}
                  </span>
                </div>
              </div>
              {!sidebarCollapsed && (
                <span className={`text-xs transition-transform duration-200 hidden md:inline ${activeDrawer === "methods" ? "translate-x-0.5" : "text-txt-muted group-hover:translate-x-0.5"}`}>
                  ➔
                </span>
              )}
            </button>

            {/* Tab 3: Stack */}
            <button
              onClick={() => {
                setActiveDrawer("stack");
                setDrawerOpen(false);
              }}
              className={`text-left p-2.5 md:p-3 rounded-xl transition-soft flex items-center justify-between group border cursor-pointer flex-1 md:flex-initial ${
                activeDrawer === "stack"
                  ? "bg-brown border-brown text-white shadow-sm"
                  : "bg-surface/60 border-border-soft/60 hover:bg-surface text-txt-main hover:border-border-soft"
              } ${sidebarCollapsed ? "md:justify-center md:px-1.5" : ""}`}
              title="Stack"
            >
              <div className="flex items-center gap-2 md:gap-3 mx-auto md:mx-0">
                <svg width="16" height="16" className="w-4 h-4 text-inherit flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className={`flex flex-col text-left ${sidebarCollapsed ? "md:hidden" : "flex"}`}>
                  <span className="text-[11px] md:text-xs font-bold leading-tight">Stack</span>
                  <span className={`text-[9px] font-medium hidden md:block ${activeDrawer === "stack" ? "text-surface/80" : "text-txt-muted"}`}>
                    {lang === "pt" ? "Ferramentas e softwares" : "Tools & software"}
                  </span>
                </div>
              </div>
              {!sidebarCollapsed && (
                <span className={`text-xs transition-transform duration-200 hidden md:inline ${activeDrawer === "stack" ? "translate-x-0.5" : "text-txt-muted group-hover:translate-x-0.5"}`}>
                  ➔
                </span>
              )}
            </button>
          </div>

          {/* Sidebar Bottom Note (only when expanded and on desktop) */}
          {!sidebarCollapsed && (
            <div className="hidden md:flex bg-surface/80 border border-border-soft/80 p-4 rounded-xl gap-2.5 items-start shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
              <svg width="16" height="16" className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] md:text-[11px] leading-relaxed text-txt-muted">
                  {lang === "pt"
                    ? "Todos os estudos utilizam dados públicos, consolidados ou descaracterizados para preservar sigilo comercial."
                    : "All studies use public, consolidated, or anonymized data to preserve business confidentiality."}
                </p>
              </div>
            </div>
          )}
        </nav>



        {/* Right Content Panel - Central workbench area */}
        <main className="p-4 md:p-8 flex flex-col justify-between bg-surface/10 min-h-[500px] md:h-full md:overflow-hidden overflow-visible">
          
          <div className="flex-1 w-full md:overflow-y-auto pr-1 md:pr-3 min-h-0">
            
            {/* Mobile Project Selector: Beautiful horizontally scrollable list at the top on mobile */}
            {activeDrawer === "projects" && (
              <div className="md:hidden w-full overflow-x-auto pb-3 mb-4 flex gap-2 border-b border-border-soft/40 flex-nowrap scrollbar-none">
                {projects.map((p) => {
                  const isSelected = p.id === selectedProjectId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-soft flex-shrink-0 cursor-pointer ${
                        isSelected
                          ? "bg-olive border-olive text-white shadow-xs"
                          : "bg-surface border-border-soft/60 text-txt-muted hover:text-txt-main"
                      }`}
                    >
                      {getProjectIcon(p.id, isSelected ? "text-white" : "text-olive")}
                      <span>{lang === "en" ? p.shortTitleEn : p.shortTitle}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {activeDrawer === "projects" && currentProject && (
              /* PROJECT VIEW */
              <article className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 animate-fadeIn w-full relative">
                {/* Subtle chestnut leaf background watermark in the projects container */}
                <div className="absolute bottom-2 right-[48%] w-24 h-24 text-olive/4 hidden md:block pointer-events-none select-none">
                  <svg width="96" height="96" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 C11.5 5, 8.5 7, 6 8 C4.5 8.6, 3.5 10, 4.5 11.5 C5.8 13.5, 9.5 14, 12 15 C14.5 14, 18.2 13.5, 19.5 11.5 C20.5 10, 19.5 8.6, 18 8 C15.5 7, 12.5 5, 12 2 Z" />
                  </svg>
                </div>
                
                {/* Left Side: Description, problem, techniques */}
                <div className="flex flex-col gap-5 justify-between">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-terracotta font-sans">
                          {lang === "en" ? currentProject.categoryEn : currentProject.category}
                        </span>
                        {currentProject.simulated && (
                          <span className="text-[8px] tracking-wider px-2 py-0.5 rounded border border-brown/30 bg-brown/5 text-brown font-extrabold font-mono">
                            {lang === "pt" ? "DADOS DESCARACTERIZADOS" : "ANONYMIZED DATA"}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-wine font-serif leading-tight">
                        {lang === "en" ? currentProject.titleEn : currentProject.title}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-txt-muted leading-relaxed">
                      {lang === "en" ? currentProject.summaryEn : currentProject.summary}
                    </p>

                    <div className="border-t border-border-soft/40 pt-3">
                      <h4 className="text-[11px] uppercase font-mono font-bold text-txt-main mb-1">
                        {lang === "pt" ? "O Problema" : "The Problem"}
                      </h4>
                      <p className="text-xs text-txt-muted leading-relaxed">
                        {lang === "en" ? currentProject.problemEn : currentProject.problem}
                      </p>
                    </div>
                  </div>

                  {/* Chips Grid */}
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.methods.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-frost text-txt-muted text-[10px] rounded border border-border-soft/50 font-sans font-medium">
                          {getMethodName(m)}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border-soft/40 pt-3 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono font-bold text-txt-main">
                        {lang === "pt" ? "Ferramentas:" : "Tools:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentProject.tools.map((t) => (
                          <span key={t} className="px-2.5 py-1 bg-frost text-wine text-[10px] rounded border border-border-soft/50 font-mono font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Visual Graphic & KPI Stats */}
                <div className="flex flex-col gap-5 justify-between">
                  
                  {/* Chart Card */}
                  <div className="border border-border-soft bg-surface p-4 rounded-xl shadow-[0_1px_4px_rgba(44,40,34,0.015)]">
                    <MiniVisual type={currentProject.visualType} lang={lang} />
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Filter out first 2 metrics for project 1 since they are represented on the A/B chart */}
                    {(currentProject.id === "bayesian-promotions" 
                      ? [
                          { label: "p-valor", labelEn: "p-value", value: "0,1828", note: "Frequentista", noteEn: "Frequentist" },
                          { label: "P(A > B)", labelEn: "P(A > B)", value: "90,9%", note: "Probabilidade Bayesiana", noteEn: "Bayesian Probability" },
                          { label: "Lucro esperado", labelEn: "Expected profit", value: "R$ 3.876", note: "A vs B: R$ 3.192", noteEn: "A vs B: R$ 3,192" }
                        ]
                      : currentProject.metrics.slice(0, 3)
                    ).map((metric, idx) => (
                      <div key={idx} className="p-3 bg-frost border border-border-soft/70 rounded-xl flex flex-col justify-center text-center shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                        <span className="text-[9px] font-bold text-txt-muted uppercase tracking-wider leading-none mb-1">
                          {lang === "en" && metric.labelEn ? metric.labelEn : metric.label}
                        </span>
                        <span className="text-xs md:text-sm font-bold text-wine font-serif py-1">
                          {metric.value}
                        </span>
                        {(lang === "en" && metric.noteEn ? metric.noteEn : metric.note) && (
                          <span className="text-[8px] text-txt-muted leading-tight mt-0.5">
                            {lang === "en" && metric.noteEn ? metric.noteEn : metric.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Outcome Banner */}
                  <div className="bg-olive/5 border border-olive/20 p-4 rounded-xl flex gap-3 items-start shadow-xs">
                    <svg width="16" height="16" className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-olive">
                        {lang === "pt" ? "Resultado" : "Outcome"}
                      </span>
                      <p className="text-[11px] font-serif italic text-txt-main leading-relaxed">
                        {lang === "en" ? currentProject.outcomeEn : currentProject.outcome}
                      </p>
                    </div>
                  </div>
                </div>

              </article>
            )}

            {activeDrawer === "methods" && (
              /* METHOD SELECTION VIEW */
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-6 md:gap-8 animate-fadeIn">
                {/* Method Category Lists */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-wine font-serif">
                      {lang === "pt" ? "Abordagens que utilizo" : "Approaches I use"}
                    </h3>
                    <p className="text-xs md:text-sm text-txt-muted mt-1 leading-relaxed">
                      {lang === "pt"
                        ? "Selecione uma metodologia abaixo para ver detalhes e casos em que foi aplicada."
                        : "Select a methodology below to see details and cases where it was applied."}
                    </p>
                  </div>
                  <div className="space-y-4 md:max-h-[380px] md:overflow-y-auto pr-2">
                    {Object.entries(methodGroups).map(([groupName, items]) => (
                      <div key={groupName} className="flex flex-col gap-1.5">
                        <span className="text-xs font-extrabold text-brown uppercase tracking-widest block font-mono">
                          {groupName}
                        </span>
                        <div className="flex flex-col gap-1">
                          {items.map((m) => {
                            const isSelected = m.id === selectedMethodId;
                            return (
                              <button
                                key={m.id}
                                onClick={() => setSelectedMethodId(m.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-soft cursor-pointer ${
                                  isSelected
                                    ? "bg-wine text-white border-wine"
                                    : "bg-surface/50 border-border-soft/40 hover:bg-surface text-txt-main"
                                }`}
                              >
                                {lang === "en" ? m.nameEn : m.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Details Panel for Method */}
                <div className="relative border border-border-soft bg-frost p-5 rounded-xl flex flex-col justify-between shadow-[0_1px_4px_rgba(44,40,34,0.015)] overflow-hidden min-h-[220px]">
                  {/* Subtle Maple Leaf watermark */}
                  <div className="absolute bottom-2 right-2 w-20 h-20 text-wine/3 pointer-events-none select-none">
                    <svg width="80" height="80" className="w-full h-full rotate-45" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
                      <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-brown font-mono block mb-1">
                      {lang === "en" ? currentMethod.groupEn : currentMethod.group}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-wine font-serif mb-2 leading-tight">
                      {lang === "en" ? currentMethod.nameEn : currentMethod.name}
                    </h4>
                    <p className="text-sm md:text-base text-txt-muted leading-relaxed mb-6">
                      {lang === "en" ? currentMethod.summaryEn : currentMethod.summary}
                    </p>
                  </div>

                  <div className="border-t border-border-soft/60 pt-4 mt-2">
                    <span className="text-xs uppercase font-mono font-bold text-txt-main block mb-2.5">
                      {lang === "pt" ? "Projetos Relacionados" : "Related Projects"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projects
                        .filter((p) => currentMethod.relatedProjectIds.includes(p.id))
                        .map((p) => (
                          <button
                            key={p.id}
                            onClick={() => {
                              setSelectedProjectId(p.id);
                              setActiveDrawer("projects");
                            }}
                            className="text-left p-3.5 rounded-lg border border-border-soft/60 bg-surface/60 hover:bg-surface hover:border-wine transition-soft flex flex-col gap-1 cursor-pointer"
                          >
                            <span className="text-[10px] uppercase tracking-wider text-txt-muted font-mono font-bold">
                              {lang === "en" ? p.categoryEn : p.category}
                            </span>
                            <span className="text-xs md:text-sm font-bold text-wine line-clamp-2">
                              {lang === "en" ? p.titleEn : p.title}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDrawer === "stack" && (
              /* STACK SELECTION VIEW */
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-6 md:gap-8 animate-fadeIn">
                {/* Stack categories & list */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-wine font-serif">
                      {lang === "pt" ? "Ferramentas e softwares" : "Tools & software"}
                    </h3>
                    <p className="text-xs md:text-sm text-txt-muted mt-1 leading-relaxed">
                      {lang === "pt"
                        ? "Selecione uma ferramenta da stack para ler notas práticas de uso profissional."
                        : "Select a tool from the stack to read practical notes on professional use."}
                    </p>
                  </div>
                  <div className="space-y-4 md:max-h-[380px] md:overflow-y-auto pr-2">
                    {Object.entries(stackGroups).map(([catName, items]) => (
                      <div key={catName} className="flex flex-col gap-1.5">
                        <span className="text-xs font-extrabold text-wine uppercase tracking-widest block font-mono">
                          {catName}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => {
                            const isSelected = item.name === selectedStackName;
                            return (
                              <button
                                key={item.name}
                                onClick={() => setSelectedStackName(item.name)}
                                className={`px-3 py-1.5 border rounded-lg text-xs md:text-sm font-mono transition-soft cursor-pointer ${
                                  isSelected
                                    ? "bg-brown text-white border-brown"
                                    : "bg-surface/50 border-border-soft/40 hover:bg-surface text-txt-main"
                                }`}
                              >
                                {item.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Details Panel for Stack */}
                <div className="relative border border-border-soft bg-frost p-5 rounded-xl flex flex-col justify-center items-center shadow-[0_1px_4px_rgba(44,40,34,0.015)] text-center min-h-[220px] overflow-hidden">
                  {/* Subtle Oak Leaf watermark */}
                  <div className="absolute bottom-2 right-2 w-16 h-16 text-brown/4 pointer-events-none select-none">
                    <svg width="64" height="64" className="w-full h-full rotate-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 2 C8 3.5 7.5 5.5 8 7.5 C6.5 8.2 5.5 9.8 6 11.5 C4.5 12.5 4 14.5 5.5 16.5 C4.8 17.8 5 19.2 6.5 20 C7.5 20.5 8.5 20.2 9 20.8 C9.5 21.5 9.2 22.8 9.5 24 L10.5 24 C10.8 22.8 10.5 21.5 11 20.8 C11.5 20.2 12.5 20.5 13.5 20 C15 19.2 15.2 17.8 14.5 16.5 C16 14.5 15.5 12.5 14 11.5 C14.5 9.8 13.5 8.2 12 7.5 C12.5 5.5 12 3.5 10 2 Z" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-wine font-mono block mb-1">
                    {getStackCategory(currentStackItem)}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-olive font-serif mb-4">
                    {currentStackItem.name}
                  </h4>
                  <div className="bg-surface/60 p-4 border border-border-soft/40 rounded-xl max-w-sm">
                    <span className="text-[10px] uppercase font-mono font-bold text-txt-muted block mb-1">
                      {lang === "pt" ? "Nota Prática" : "Practical Note"}
                    </span>
                    <p className="text-sm md:text-base text-txt-main leading-relaxed italic">
                      "{lang === "en" ? currentStackItem.noteEn : currentStackItem.note}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Carousel Slider Controls (Only visible in projects mode) */}
          {activeDrawer === "projects" && (
            <div className="mt-6 md:mt-8 pt-4 border-t border-border-soft/30 flex items-center justify-center gap-6">
              {/* Prev Button */}
              <button
                onClick={handlePrevProject}
                className="w-8 h-8 rounded-full border border-border-soft/85 bg-surface hover:bg-wine hover:text-white transition-soft flex items-center justify-center text-xs font-bold text-txt-main shadow-xs cursor-pointer"
              >
                ◀
              </button>

              {/* Dots */}
              <div className="flex gap-2.5">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProjectId(p.id)}
                    className={`w-2.5 h-2.5 rounded-full transition-soft cursor-pointer ${
                      idx === projectIndex
                        ? "bg-wine scale-110"
                        : "bg-border-soft hover:bg-brown/65"
                    }`}
                    title={lang === "en" ? p.shortTitleEn : p.shortTitle}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextProject}
                className="w-8 h-8 rounded-full border border-border-soft/85 bg-surface hover:bg-wine hover:text-white transition-soft flex items-center justify-center text-xs font-bold text-txt-main shadow-xs cursor-pointer"
              >
                ▶
              </button>
            </div>
          )}
        </main>
      </div>
      )}
    </section>
  );
}

// Visual Chart Sketch components matching Vanessa's muted editorial palette
function MiniVisual({ type, lang }: { type: string, lang: "pt" | "en" }) {
  switch (type) {
    case "ab-bars":
      return (
        <div className="w-full flex flex-col gap-2 font-sans py-2">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Conversão" : "Conversion"}
          </span>
          <div className="flex flex-col gap-3 py-1">
            {/* Bar A */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-[10px] font-semibold text-txt-muted">
                <span>{lang === "pt" ? "Promoção A (Desconto 20%)" : "Promotion A (20% Discount)"}</span>
                <span className="font-bold text-wine">2,04%</span>
              </div>
              <div className="w-full h-3 bg-frost rounded-full overflow-hidden border border-border-soft/30">
                <div className="h-full bg-olive rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
            {/* Bar B */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-[10px] font-semibold text-txt-muted">
                <span>{lang === "pt" ? "Promoção B (Pacote Camiseta)" : "Promotion B (T-shirt Bundle)"}</span>
                <span className="font-bold text-wine">1,68%</span>
              </div>
              <div className="w-full h-3 bg-frost rounded-full overflow-hidden border border-border-soft/30">
                <div className="h-full bg-terracotta rounded-full" style={{ width: "56%" }}></div>
              </div>
            </div>
          </div>
          {/* Axis Scale */}
          <div className="flex justify-between text-[8px] font-mono text-txt-muted/80 border-t border-border-soft/20 pt-1">
            <span>0%</span>
            <span>1%</span>
            <span>2%</span>
            <span>3%</span>
          </div>
        </div>
      );
    
    case "time-series":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Série e Contrafactual" : "Series & Counterfactual"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              <line x1="20" y1="20" x2="200" y2="20" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="50" x2="200" y2="50" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="80" x2="200" y2="80" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              
              <line x1="20" y1="90" x2="200" y2="90" stroke="#2C2822" strokeWidth="0.75" />
              <line x1="20" y1="10" x2="20" y2="90" stroke="#2C2822" strokeWidth="0.75" />

              {/* Pre-intervention trend */}
              <path d="M 20 80 L 50 78 L 80 70 L 110 65" fill="none" stroke="#756E63" strokeWidth="1.5" />
              
              {/* Intervention point */}
              <line x1="110" y1="10" x2="110" y2="90" stroke="#774F4C" strokeWidth="1" strokeDasharray="3,3" />
              <text x="114" y="16" className="text-[6px] fill-terracotta font-semibold font-sans">
                {lang === "pt" ? "Intervenção" : "Intervention"}
              </text>

              {/* Observed trend */}
              <path d="M 110 65 L 140 45 L 170 30 L 200 20" fill="none" stroke="#4E5F2A" strokeWidth="2" />
              <text x="175" y="40" className="text-[6px] fill-olive font-bold font-sans">
                {lang === "pt" ? "Observado" : "Observed"}
              </text>

              {/* Counterfactual trend */}
              <path d="M 110 65 L 140 62 L 170 60 L 200 58" fill="none" stroke="#8A6535" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="165" y="70" className="text-[6px] fill-brown font-semibold font-sans">
                {lang === "pt" ? "Contrafactual" : "Counterfactual"}
              </text>
            </svg>
          </div>
        </div>
      );

    case "survival":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Sobrevivência Kaplan-Meier" : "Kaplan-Meier Survival"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              <line x1="20" y1="20" x2="200" y2="20" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="50" x2="200" y2="50" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="80" x2="200" y2="80" stroke="#E3DCD0" strokeWidth="0.5" strokeDasharray="2,2" />
              
              <line x1="20" y1="90" x2="200" y2="90" stroke="#2C2822" strokeWidth="0.75" />
              <line x1="20" y1="10" x2="20" y2="90" stroke="#2C2822" strokeWidth="0.75" />

              {/* Curve A */}
              <path d="M 20 20 H 60 V 35 H 110 V 50 H 160 V 62 H 200" fill="none" stroke="#4E5F2A" strokeWidth="2" />
              <text x="145" y="44" className="text-[6px] fill-olive font-bold font-sans">
                {lang === "pt" ? "Grupo A (HR=0.65)" : "Group A (HR=0.65)"}
              </text>

              {/* Curve B */}
              <path d="M 20 20 H 45 V 45 H 85 V 68 H 135 V 82 H 200" fill="none" stroke="#774F4C" strokeWidth="1.5" />
              <text x="75" y="80" className="text-[6px] fill-terracotta font-semibold font-sans">
                {lang === "pt" ? "Grupo B (Controlo)" : "Group B (Control)"}
              </text>
            </svg>
          </div>
        </div>
      );

    case "pricing":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Otimização de Preço" : "Price Optimization"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              <line x1="25" y1="85" x2="200" y2="85" stroke="#2C2822" strokeWidth="0.75" />
              <line x1="25" y1="15" x2="25" y2="85" stroke="#2C2822" strokeWidth="0.75" />

              {/* Demand curve */}
              <path d="M 25 30 Q 110 65 190 80" fill="none" stroke="#774F4C" strokeWidth="1.5" />
              <text x="35" y="40" className="text-[6px] fill-terracotta rotate-[-12deg] font-semibold font-sans">
                {lang === "pt" ? "Procura" : "Demand"}
              </text>

              {/* Revenue Scenario */}
              <path d="M 25 85 Q 110 25 190 85" fill="none" stroke="#4E5F2A" strokeWidth="2" />
              <text x="110" y="38" textAnchor="middle" className="text-[6px] fill-olive font-bold font-sans">
                {lang === "pt" ? "Receita Estimada" : "Estimated Revenue"}
              </text>

              {/* Optimal price point */}
              <line x1="110" y1="40" x2="110" y2="85" stroke="#8A6535" strokeWidth="0.75" strokeDasharray="2,2" />
              <circle cx="110" cy="40" r="3" fill="#9C8538" stroke="#2C2822" strokeWidth="0.5" />
              <text x="115" y="35" className="text-[6px] fill-brown font-bold font-sans">
                {lang === "pt" ? "Ótimo: R$ 38" : "Optimal: R$ 38"}
              </text>
            </svg>
          </div>
        </div>
      );

    case "matrix":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Matriz Churn vs LTV" : "Churn vs LTV Matrix"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              <rect x="20" y="15" width="180" height="70" fill="none" stroke="#E3DCD0" strokeWidth="1" />
              <line x1="110" y1="15" x2="110" y2="85" stroke="#E3DCD0" strokeWidth="0.75" strokeDasharray="2,2" />
              <line x1="20" y1="50" x2="200" y2="50" stroke="#E3DCD0" strokeWidth="0.75" strokeDasharray="2,2" />

              {/* Quadrant text */}
              <text x="24" y="24" className="text-[5px] fill-wine font-sans font-bold">
                {lang === "pt" ? "Q1: Risco / Alto LTV" : "Q1: Risk / High LTV"}
              </text>
              <text x="114" y="24" className="text-[5px] fill-olive font-sans font-bold">
                {lang === "pt" ? "Q2: Saudável / Alto LTV" : "Q2: Healthy / High LTV"}
              </text>
              <text x="24" y="58" className="text-[5px] fill-txt-muted font-sans font-semibold">
                {lang === "pt" ? "Q3: Churn Rápido" : "Q3: Quick Churn"}
              </text>
              <text x="114" y="58" className="text-[5px] fill-txt-muted font-sans font-semibold">
                {lang === "pt" ? "Q4: Baixo Valor" : "Q4: Low Value"}
              </text>

              {/* Scatter Points */}
              <circle cx="55" cy="32" r="3.5" fill="#774F4C" opacity="0.85" />
              <circle cx="68" cy="40" r="2.5" fill="#774F4C" opacity="0.8" />
              <circle cx="150" cy="28" r="4" fill="#4E5F2A" opacity="0.85" />
              <circle cx="168" cy="38" r="3" fill="#4E5F2A" opacity="0.8" />
              <circle cx="50" cy="68" r="3" fill="#756E63" opacity="0.7" />
              <circle cx="160" cy="72" r="3.5" fill="#756E63" opacity="0.7" />
            </svg>
          </div>
        </div>
      );

    case "nlp-flow":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Fluxo PLN" : "NLP Pipeline"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              {/* Box 1 */}
              <rect x="10" y="35" width="45" height="25" rx="6" fill="#FAF5EB" stroke="#E3DCD0" strokeWidth="1" />
              <text x="32.5" y="50" textAnchor="middle" className="text-[6px] fill-txt-main font-bold font-sans">
                {lang === "pt" ? "Texto Bruto" : "Raw Text"}
              </text>

              {/* Arrow 1 */}
              <path d="M 55 47.5 H 75" fill="none" stroke="#8A6535" strokeWidth="1" />
              <polygon points="75,44.5 80,47.5 75,50.5" fill="#8A6535" />

              {/* Box 2 */}
              <rect x="80" y="35" width="50" height="25" rx="6" fill="#4E5F2A" stroke="#4E5F2A" strokeWidth="1" />
              <text x="105" y="50" textAnchor="middle" className="text-[6px] fill-white font-bold font-sans">
                {lang === "pt" ? "Vetor / Modelagem" : "Vector / Modeling"}
              </text>

              {/* Arrow 2 */}
              <path d="M 130 47.5 H 150" fill="none" stroke="#8A6535" strokeWidth="1" />
              <polygon points="150,44.5 155,47.5 150,50.5" fill="#8A6535" />

              {/* Box 3 */}
              <rect x="155" y="35" width="55" height="25" rx="6" fill="#774F4C" stroke="#774F4C" strokeWidth="1" />
              <text x="182.5" y="50" textAnchor="middle" className="text-[6px] fill-white font-bold font-sans">
                {lang === "pt" ? "Métricas / Tópicos" : "Metrics / Topics"}
              </text>
            </svg>
          </div>
        </div>
      );

    case "rag-pipeline":
      return (
        <div className="w-full flex flex-col gap-2 font-sans">
          <span className="text-[10px] font-bold text-wine tracking-wider uppercase border-b border-border-soft/45 pb-1 block">
            {lang === "pt" ? "Fluxo RAG" : "RAG Pipeline"}
          </span>
          <div className="aspect-[2.2/1] w-full flex items-center justify-center py-1">
            <svg width="220" height="100" viewBox="0 0 220 100" className="w-full h-full text-txt-main">
              {/* Input */}
              <rect x="5" y="38" width="40" height="22" rx="4" fill="#FAF5EB" stroke="#E3DCD0" strokeWidth="1" />
              <text x="25" y="51" textAnchor="middle" className="text-[6px] fill-txt-main font-bold font-sans">Prompt</text>
              
              <path d="M 45 49 H 58" fill="none" stroke="#8A6535" strokeWidth="0.8" />
              <polygon points="58,46.5 62,49 58,51.5" fill="#8A6535" />

              {/* Vector Search */}
              <rect x="62" y="38" width="44" height="22" rx="4" fill="#4E5F2A" stroke="#4E5F2A" strokeWidth="1" />
              <text x="84" y="51" textAnchor="middle" className="text-[6.5px] fill-white font-bold font-sans">
                {lang === "pt" ? "Busca Vetorial" : "Vector Search"}
              </text>

              <path d="M 106 49 H 118" fill="none" stroke="#8A6535" strokeWidth="0.8" />
              <polygon points="118,46.5 122,49 118,51.5" fill="#8A6535" />

              {/* Context */}
              <rect x="122" y="38" width="42" height="22" rx="4" fill="#9C8538" stroke="#9C8538" strokeWidth="1" />
              <text x="143" y="51" textAnchor="middle" className="text-[6px] fill-white font-bold font-sans">
                {lang === "pt" ? "Contexto" : "Context"}
              </text>

              <path d="M 164 49 H 174" fill="none" stroke="#8A6535" strokeWidth="0.8" />
              <polygon points="174,46.5 178,49 174,51.5" fill="#8A6535" />

              {/* LLM Response */}
              <rect x="178" y="38" width="37" height="22" rx="4" fill="#774F4C" stroke="#774F4C" strokeWidth="1" />
              <text x="196.5" y="51" textAnchor="middle" className="text-[6px] fill-white font-bold font-sans">LLM Resp.</text>
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
}
