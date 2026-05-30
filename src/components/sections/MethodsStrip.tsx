import React from "react";

interface MethodsStripProps {
  lang?: "pt" | "en";
}

export default function MethodsStrip({ lang = "pt" }: MethodsStripProps) {
  const methodsPt = [
    "Testes A/B", "Testes multivariados", "Desenho experimental", "Análise de poder", 
    "Inferência causal", "Modelagem de incrementalidade", "Séries temporais", "Previsão", 
    "Análise de sobrevivência", "Elasticidade de preço", "MaxDiff", "Análise conjunta", 
    "Análise TURF", "Análise de agrupamento", "Segmentação RFM", "Rotatividade (churn)", "Valor de vida do cliente (LTV)", "Retorno sobre o investimento (ROI)", 
    "Análise de sentimentos", "Modelagem de tópicos", "Extração de entidades", "Geração aumentada por recuperação (RAG)", 
    "Pesquisa vetorial"
  ];

  const methodsEn = [
    "A/B Testing", "Multivariate Testing", "Experimental Design", "Power Analysis", 
    "Causal Inference", "Uplift Modeling", "Time Series Analysis", "Forecasting", 
    "Survival Analysis", "Price Elasticity", "MaxDiff", "Conjoint Analysis", 
    "TURF Analysis", "Clustering Algorithms", "RFM Segmentation", "Churn Prediction", "Customer LTV", "ROI Optimization", 
    "Sentiment Analysis", "Topic Modeling", "Entity Extraction", "RAG Systems", 
    "Vector Search"
  ];

  const items = lang === "en" ? methodsEn : methodsPt;

  return (
    <section className="px-6 py-2 md:px-8 md:py-4 w-full font-sans flex flex-col gap-3">
      {/* Centered Elegant Header with Flanking Lines */}
      <div className="flex items-center justify-center gap-4 w-full select-none">
        <div className="h-px bg-gradient-to-r from-transparent to-border-soft flex-1"></div>
        <div className="flex items-center gap-2">
          <svg width="15" height="15" className="w-3.5 h-3.5 text-terracotta rotate-12 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
            <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
          <h3 className="font-serif text-sm md:text-base font-bold text-wine tracking-wide text-center">
            {lang === "pt" ? "Métodos" : "Methods"}
          </h3>
          <svg width="15" height="15" className="w-3.5 h-3.5 text-terracotta -rotate-12 -scale-x-100 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
            <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-border-soft flex-1"></div>
      </div>

      {/* Scrolling Strip Container */}
      <div className="border border-border-soft bg-frost py-2 rounded-xl shadow-[0_1px_3px_rgba(44,40,34,0.01)] marquee-container select-none">
        <div className="marquee-content text-[11px] md:text-xs font-medium tracking-wide text-txt-main font-sans">
          <div className="flex items-center gap-12 pr-12 flex-shrink-0">
            {items.map((method, idx) => (
              <span key={`${method}-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
                <svg width="9" height="9" className="text-olive flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3 C15 3, 19 6, 19 9 C19 10, 17 11, 12 11 C7 11, 5 10, 5 9 C5 6, 9 3, 12 3 Z" fill="currentColor" />
                  <path d="M5.5 10.5 C5.5 14, 9 19, 12 21 C15 19, 18.5 14, 18.5 10.5 Z" fill="currentColor" />
                </svg>
                <span>{method}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-12 pr-12 flex-shrink-0">
            {items.map((method, idx) => (
              <span key={`${method}-dup-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
                <svg width="9" height="9" className="text-olive flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3 C15 3, 19 6, 19 9 C19 10, 17 11, 12 11 C7 11, 5 10, 5 9 C5 6, 9 3, 12 3 Z" fill="currentColor" />
                  <path d="M5.5 10.5 C5.5 14, 9 19, 12 21 C15 19, 18.5 14, 18.5 10.5 Z" fill="currentColor" />
                </svg>
                <span>{method}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
