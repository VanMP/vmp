import React from "react";

interface MethodsStripProps {
  lang?: "pt" | "en";
}

export default function MethodsStrip({ lang = "pt" }: MethodsStripProps) {
  const methodsPt = [
    "Inferência Bayesiana (ROPE, HDI & Perda Esperada)",
    "Redução de Variância via Covariáveis (CUPED)",
    "Modelos Hierárquicos e Efeitos Mistos (lme4)",
    "Controle Sintético Generalizado (Synthetic Controls)",
    "Diferenças em Diferenças (DiD) & Estudos de Eventos",
    "Pareamento por Escore de Propensão (PSM)",
    "Double Machine Learning (DML) & Efeitos Heterogêneos",
    "Desenho Experimental Ótimo (D-Optimal Design)",
    "Testes Sequenciais & Monitoramento Contínuo",
    "Análise de Poder Estatístico & MDE",
    "Modelos de Escolha Discreta com Classes Latentes (LC-MNL)",
    "Logit Multinomial & Utilidades Parciais (Part-Worths)",
    "Análise Conjunta (CBC) & MaxDiff",
    "Otimização Numérica Não-Linear Restrita (L-BFGS-B)",
    "Matrizes de Elasticidade Própria e Cruzada",
    "Importance-Performance Analysis (IPA)",
    "Penalty-Reward Contrast Analysis",
    "Análise de Sobrevivência (Kaplan-Meier & Cox)",
    "Modelos de Tempo Acelerado até a Falha (AFT)",
    "Modelagem de Equações Estruturais (SEM)",
    "Cadeias de Markov & Modelos de Estados Latentes",
    "Decomposição de Shapley (LMG / Dominance Analysis)",
    "Transformações de Adstock (Decaimento Geométrico & Weibull)",
    "Curvas de Saturação Não-Lineares (Função de Hill)",
    "Diagnóstico de Multicolinearidade (VIF & Condição BKW)",
    "Regressão Regularizada Penalizada (Ridge, Lasso & ElasticNet)",
    "Modelos Aditivos Generalizados (GAM)",
    "Análise de Correspondência Múltipla (MCA)",
    "Análise Fatorial & Componentes Principais (PCA)",
    "Modelos em Espaço de Estados (SSM)",
    "Filtro e Suavizador de Kalman (RTS)",
    "Modelos Estruturais / Componentes Não Observados (UCM)",
    "Parâmetros Variantes no Tempo (TVP)",
    "Sazonalidade Trigonométrica (Harmônicos de Fourier)",
    "Família ARIMA / SARIMAX",
    "Suavização Exponencial (ETS) & Tendência Amortecida",
    "Gradient Boosted Trees (XGBoost & LightGBM)",
    "Random Forest & Ensemble Learning",
    "Redes Neurais Densas (MLP)",
    "Calibração de Probabilidades (Platt Scaling & Brier Score)",
    "Valores de Shapley (SHAP) & Gráficos PDP",
    "Embeddings Semânticos & Similaridade Cosseno",
    "Modelagem de Tópicos (LDA)",
    "Reconhecimento de Entidades (NER)"
  ];

  const methodsEn = [
    "Bayesian Inference (ROPE, HDI & Expected Loss)",
    "Variance Reduction via Covariates (CUPED)",
    "Hierarchical & Mixed-Effects Models (lme4)",
    "Generalized Synthetic Control Methods",
    "Difference-in-Differences (DiD) & Event Studies",
    "Propensity Score Matching (PSM)",
    "Double Machine Learning (DML) & CATE",
    "Optimal Experimental Design (D-Optimal)",
    "Sequential Testing & Continuous Monitoring",
    "Statistical Power Analysis & MDE",
    "Latent Class Multinomial Logit (LC-MNL)",
    "Multinomial Logit & Part-Worth Utilities",
    "Choice-Based Conjoint (CBC) & MaxDiff",
    "Constrained Non-Linear Optimization (L-BFGS-B)",
    "Own-Price & Cross-Price Elasticity Matrices",
    "Importance-Performance Analysis (IPA)",
    "Penalty-Reward Contrast Analysis",
    "Survival Analysis (Kaplan-Meier & Cox)",
    "Accelerated Failure Time Models (AFT)",
    "Structural Equation Modeling (SEM)",
    "Markov Chains & Latent State Transition Models",
    "Shapley Decomposition (LMG / Dominance Analysis)",
    "Adstock Transformations (Geometric & Weibull Decay)",
    "Non-Linear Saturation Curves (Hill Function)",
    "Multicollinearity Diagnostics (VIF & BKW Indices)",
    "Penalized Regularized Regression (Ridge, Lasso, ElasticNet)",
    "Generalized Additive Models (GAM)",
    "Multiple Correspondence Analysis (MCA)",
    "Factor Analysis & Principal Component Analysis (PCA)",
    "State-Space Models (SSM)",
    "Kalman Filter & RTS Smoother",
    "Structural / Unobserved Components Models (UCM)",
    "Time-Varying Parameters (TVP)",
    "Trigonometric Seasonality (Fourier Harmonics)",
    "ARIMA / SARIMAX Family",
    "Exponential Smoothing (ETS) & Damped Trend",
    "Gradient Boosted Trees (XGBoost & LightGBM)",
    "Random Forest & Ensemble Learning",
    "Dense Neural Networks (MLP)",
    "Probability Calibration (Platt Scaling & Brier Score)",
    "Shapley Additive Explanations (SHAP) & PDP",
    "Semantic Embeddings & Cosine Similarity",
    "Topic Modeling (LDA)",
    "Named Entity Recognition (NER)"
  ];

  const items = lang === "en" ? methodsEn : methodsPt;

  return (
    <section className="px-6 py-2 md:px-8 md:py-3 w-full font-sans flex flex-col gap-2.5">
      {/* Centered Elegant Header with Flanking Lines */}
      <div className="flex items-center justify-center gap-4 w-full select-none">
        <div className="h-px bg-gradient-to-r from-transparent to-border-soft flex-1"></div>
        <div className="flex items-center gap-2">
          <svg width="15" height="15" className="w-3.5 h-3.5 text-olive rotate-12 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
            <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
          <h3 className="font-serif text-sm md:text-base font-bold text-wine tracking-wide text-center">
            {lang === "pt" ? "Métodos" : "Methods"}
          </h3>
          <svg width="15" height="15" className="w-3.5 h-3.5 text-olive -rotate-12 -scale-x-100 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C11.5 6, 9.5 6, 9 7.5 C8 7, 7 6, 6 6.5 C5 7, 6 8.5, 6 9.5 C4.5 9, 3 8.5, 2 9.5 C1 10.5, 2.5 12, 4 12.5 C3.5 13.5, 3 15, 4 16 C5 17, 6.5 15.5, 7.5 15 C7 16.5, 7 18.5, 8.5 19 C10 19.5, 10.5 17.5, 12 16.5 C13.5 17.5, 14 19.5, 15.5 19 C17 18.5, 17 16.5, 16.5 15 C17.5 15.5, 19 17, 20 16 C21 15, 20.5 13.5, 20 12.5 C21.5 12, 23 10.5, 22 9.5 C21 8.5, 19.5 9, 18 9.5 C18 8.5, 19 7, 18 6.5 C17 6, 16 7, 15 7.5 C14.5 6, 12.5 6, 12 3 Z" />
            <path d="M12 16.5 L12 21" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-border-soft flex-1"></div>
      </div>

      {/* Scrolling Strip Container */}
      <div className="border border-border-soft bg-frost py-2 rounded-xl shadow-[0_1px_3px_rgba(44,40,34,0.01)] marquee-container select-none text-[11px] md:text-xs font-medium tracking-wide text-txt-main font-sans">
        <div className="marquee-track marquee-track-methods flex items-center gap-12 pr-12">
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
        <div className="marquee-track marquee-track-methods flex items-center gap-12 pr-12" aria-hidden="true">
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
    </section>
  );
}
