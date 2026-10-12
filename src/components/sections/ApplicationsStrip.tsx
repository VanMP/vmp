import React from "react";

interface ApplicationsStripProps {
  lang?: "pt" | "en";
}

export default function ApplicationsStrip({ lang = "pt" }: ApplicationsStripProps) {
  const applicationsPt = [
    "Validação de Lançamentos de Produto (Decisões Go/No-Go)",
    "Mensuração de Incrementalidade Real vs. Coincidência",
    "Mitigação de Risco Financeiro Sob Incerteza",
    "Avaliação de Impacto de Políticas & Mudanças Regulatórias",
    "Testes Quase-Experimentais em Pilotos Regionais",
    "Otimização de Eficiência Amostral & Redução de Custo de Teste",
    "Identificação de Efeitos Heterogêneos de Tratamento",
    "Auditoria & Prevenção de Viés de Seleção",
    "Estratégia de Precificação & Elasticidade de Demanda",
    "Otimização de Portfólio & Mix de Produtos",
    "Valoração de Funcionalidades & Pacotes (Bundling)",
    "Simulação de Cenários Competitivos & Market Share",
    "Análise de Canibalização entre Produtos/Planos",
    "Estimativa de Disposição a Pagar (WTP)",
    "Racionalização de SKUs & Engenharia de Menu",
    "Acompanhamento Longitudinal de Satisfação (CSAT, NPS, CES)",
    "Mapeamento & Peso de Touchpoints na Jornada",
    "Prevenção & Diagnóstico de Churn (Cancelamento)",
    "Análise de Importância vs. Desempenho (IPA)",
    "Valor do Tempo de Vida do Cliente (LTV / CLV)",
    "Diagnóstico de Fricção no Atendimento",
    "Segmentação Comportamental & Saúde da Base",
    "Marketing Mix Modeling (MMM)",
    "Atribuição Causal & Eficácia de Canais de Mídia",
    "Key Driver Analysis (Drivers de Marca e Satisfação)",
    "Mapas de Posicionamento Perceptual de Marca/Produto",
    "Otimização & Alocação de Orçamento de Mídia",
    "Curvas de Saturação & Retornos Decrescentes",
    "Mensuração de Brand Lift & Incrementalidade",
    "Auditoria de Efeito Carregado de Mídia (Adstock)",
    "Previsão de Demanda & Capacidade",
    "Dimensionamento Operacional & Recursos",
    "Detecção de Anomalias & Incidentes",
    "Monitoramento de Tendências Estruturais",
    "Identificação de Quebras de Regime",
    "Decomposição de Sinal vs. Ruído",
    "Modelagem Preditiva Supervisionada",
    "Explainable AI (XAI)",
    "Score de Risco & Detecção de Fraudes",
    "Calibração de Probabilidades & Matriz de Custo",
    "Mineração de Texto (Text Mining) & Busca Semântica",
    "Extração Estruturada de Informações",
    "Reconhecimento de Entidades Nomeadas (NER)",
    "Modelagem de Tópicos & Agrupamento de Feedbacks",
    "Análise de Sentimento por Aspecto (ABSA)",
    "Classificação Automatizada de Documentos e Chamados"
  ];

  const applicationsEn = [
    "Product Launch Validation (Go/No-Go Decisions)",
    "True Incrementality vs. Noise Measurement",
    "Financial Risk Mitigation Under Uncertainty",
    "Policy & Regulatory Impact Assessment",
    "Quasi-Experimental Regional Pilots",
    "Sample Efficiency Optimization & Cost Reduction",
    "Heterogeneous Treatment Effect Identification",
    "Selection Bias Auditing & Prevention",
    "Pricing Strategy & Demand Elasticity",
    "Portfolio & Product Mix Optimization",
    "Feature Valuation & Product Bundling",
    "Competitive Scenario Simulation & Market Share",
    "Cannibalization Analysis Across Products",
    "Willingness to Pay Estimation (WTP)",
    "SKU Rationalization & Menu Engineering",
    "Longitudinal Satisfaction Tracking (CSAT, NPS, CES)",
    "Touchpoint Journey Mapping & Weighting",
    "Churn Prevention & Diagnosis",
    "Importance-Performance Analysis (IPA)",
    "Customer Lifetime Value (LTV / CLV)",
    "Support Friction & Friction Point Diagnostics",
    "Behavioral Segmentation & Base Health",
    "Marketing Mix Modeling (MMM)",
    "Causal Attribution & Media Channel ROI",
    "Key Driver Analysis (Brand & CSAT Drivers)",
    "Perceptual Brand & Product Positioning Maps",
    "Media Budget Optimization & Allocation",
    "Saturation Curves & Diminishing Returns",
    "Brand Lift & Incrementality Measurement",
    "Media Carryover Auditing (Adstock)",
    "Demand & Capacity Forecasting",
    "Operational & Resource Sizing",
    "Anomaly & Incident Detection",
    "Structural Trend Monitoring",
    "Regime Shift Detection",
    "Signal vs. Noise Decomposition",
    "Supervised Predictive Modeling",
    "Explainable AI (XAI)",
    "Risk Scoring & Fraud Detection",
    "Probability Calibration & Cost Matrix Tuning",
    "Text Mining & Semantic Search",
    "Structured Information Extraction",
    "Named Entity Recognition (NER)",
    "Topic Modeling & Feedback Clustering",
    "Aspect-Based Sentiment Analysis (ABSA)",
    "Automated Document & Ticket Classification"
  ];

  const items = lang === "en" ? applicationsEn : applicationsPt;

  return (
    <section className="px-6 py-2 md:px-8 md:py-3 w-full font-sans flex flex-col gap-2.5">
      {/* Centered Elegant Header with Flanking Lines */}
      <div className="flex items-center justify-center gap-4 w-full select-none">
        <div className="h-px bg-gradient-to-r from-transparent to-border-soft flex-1"></div>
        <div className="flex items-center gap-2">
          <svg width="15" height="15" className="w-3.5 h-3.5 text-wine hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <h3 className="font-serif text-sm md:text-base font-bold text-wine tracking-wide text-center">
            {lang === "pt" ? "Aplicações" : "Applications"}
          </h3>
          <svg width="15" height="15" className="w-3.5 h-3.5 text-wine hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-border-soft flex-1"></div>
      </div>

      {/* Scrolling Strip Container */}
      <div className="border border-border-soft bg-frost py-2 rounded-xl shadow-[0_1px_3px_rgba(44,40,34,0.01)] marquee-container select-none text-[11px] md:text-xs font-medium tracking-wide text-txt-main font-sans">
        <div className="marquee-track marquee-track-applications flex items-center gap-12 pr-12">
          {items.map((app, idx) => (
            <span key={`${app}-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
              <svg width="8" height="8" className="text-wine flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="6" />
              </svg>
              <span>{app}</span>
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track-applications flex items-center gap-12 pr-12" aria-hidden="true">
          {items.map((app, idx) => (
            <span key={`${app}-dup-${idx}`} className="flex-shrink-0 flex items-center gap-3.5">
              <svg width="8" height="8" className="text-wine flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="6" />
              </svg>
              <span>{app}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
