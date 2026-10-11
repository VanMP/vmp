export type Competency = {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  icon: string;
  
  // 1. O que resolve (Linguagem de Negócio)
  businessImpact: string;
  businessImpactEn: string;
  
  // 2. Termos de Mercado (ATS & Recrutadores)
  marketTerms: string[];
  marketTermsEn?: string[];
  
  // 3. Arsenal Técnico & Estatístico
  technicalArsenal: string[];
  technicalArsenalEn?: string[];
  
  // Projetos Relacionados no Portfólio
  relatedProjectIds: string[];
};

export const competencies: Competency[] = [
  {
    id: "experimentation-causal-decision",
    number: 1,
    title: "Experimentação & Decisão Causal",
    titleEn: "Experimentation & Causal Decision",
    tagline: "Testes controlados, mitigação de risco financeiro e inferência causal estrita",
    taglineEn: "Controlled testing, financial risk mitigation, and strict causal inference",
    icon: "chart-bar",
    businessImpact: "Descobrir o que realmente gerou um resultado versus o que foi pura coincidência ou sazonalidade. Avaliar se uma nova funcionalidade, mudança de fluxo ou campanha trouxe dinheiro novo antes de liberar para 100% da base, calculando matematicamente o risco financeiro de tomar a decisão errada.",
    businessImpactEn: "Discovering what truly caused an outcome versus random noise or seasonality. Quantifying whether a new feature, user flow change, or campaign drove net revenue before a 100% rollout, mathematically bounding the financial risk of a false positive.",
    marketTerms: [
      "A/B Testing",
      "Experimentation Platform",
      "Causal Inference",
      "Quasi-Experiments",
      "CUPED (Variance Reduction)",
      "Sequential Testing",
      "Uplift Modeling",
      "Synthetic Control",
      "Difference-in-Differences (DiD)",
      "Bayesian Decision Theory",
      "Statistical Power Analysis"
    ],
    technicalArsenal: [
      "Inferência Bayesiana com ROPE e HDI",
      "Redução de Variância via Covariáveis (CUPED)",
      "Modelos Hierárquicos/Multinível",
      "Métodos Contrafactuais e Controle Sintético Generalizado",
      "Double Machine Learning (DML / CausalML) para Efeitos Heterogêneos"
    ],
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "pricing-demand-portfolio",
    number: 2,
    title: "Precificação, Demanda & Estratégia de Portfólio",
    titleEn: "Pricing, Demand & Portfolio Strategy",
    tagline: "Elasticidade cruzada, escolha discreta e otimização não-linear de prateleira",
    taglineEn: "Cross-elasticity, discrete choice, and non-linear assortment optimization",
    icon: "currency-dollar",
    businessImpact: "Encontrar o preço exato que maximiza a receita ou a margem da empresa considerando a reação dos concorrentes. Responder com precisão a perguntas como: \"se subirmos o preço em 6%, quanto volume perdemos?\" e \"quais produtos do nosso catálogo/menu podemos cortar sem que o cliente migre para a concorrência?\".",
    businessImpactEn: "Pinpointing the exact price point that maximizes revenue or gross margin while anticipating competitor responses. Answering questions like: \"if we raise prices by 6%, how much volume do we shed?\" and \"which catalog/menu SKUs can we prune without losing customers to competitors?\".",
    marketTerms: [
      "Pricing Strategy",
      "Price Elasticity of Demand",
      "Discrete Choice Modeling",
      "Conjoint Analysis (CBC)",
      "Willingness to Pay (WTP)",
      "Assortment Optimization",
      "Menu Engineering",
      "Market Share Simulation",
      "Cannibalization Modeling"
    ],
    technicalArsenal: [
      "Modelos de Escolha Discreta com Classes Latentes (LC-MNL)",
      "D-Optimal Experimental Design",
      "Otimização Numérica Não-Linear Restrita (L-BFGS-B / SciPy)",
      "Matrizes de Elasticidade Cruzada de Demanda",
      "Simulações Contrafactuais de Substituição de Escolha"
    ],
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "customer-lifecycle-retention",
    number: 3,
    title: "Ciclo de Vida do Cliente & Retenção (Customer Science)",
    titleEn: "Customer Lifecycle & Retention (Customer Science)",
    tagline: "Modelagem de churn, análise de sobrevivência e valor acumulado do cliente (LTV)",
    taglineEn: "Churn hazard modeling, survival analysis, and customer lifetime value (LTV)",
    icon: "user-group",
    businessImpact: "Prever quando e por que um cliente vai cancelar ou parar de comprar, calculando o valor financeiro que ele ainda vai gerar ao longo do tempo (LTV). Identificar quais clientes realmente precisam de uma ação de retenção/desconto para ficar contra aqueles que ficariam de graça ou que sairiam de qualquer jeito.",
    businessImpactEn: "Forecasting when and why customers will cancel or churn, projecting future cumulative revenue (LTV). Identifying which customers genuinely require a retention intervention or discount versus those who would renew organically or churn regardless.",
    marketTerms: [
      "Customer Churn",
      "Retention Dynamics",
      "Survival Analysis",
      "Customer Lifetime Value (CLV / LTV)",
      "Cohort Analysis",
      "Behavioral Segmentation",
      "Uplift / Incremental Retention",
      "Churn Hazard Modeling"
    ],
    technicalArsenal: [
      "Análise de Sobrevivência Não-Paramétrica e Semiparamétrica (Kaplan-Meier, Riscos Proporcionais de Cox)",
      "Modelos de Duração em Tempo Acelerado (AFT)",
      "Modelos Lineares Generalizados (GLM binomial e Poisson com ajuste de offset)",
      "Misturas Gaussianas e Modelos de Transição Latente para Ciclos de Vida"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm"]
  },
  {
    id: "marketing-science-brand-attribution",
    number: 4,
    title: "Marketing Science, Marca & Atribuição de Impacto",
    titleEn: "Marketing Science, Brand Equity & Impact Attribution",
    tagline: "Decomposição de Shapley, Key Driver Analysis e diagnóstico de multicolinearidade",
    taglineEn: "Shapley decomposition, Key Driver Analysis, and strict multicollinearity diagnosis",
    icon: "presentation-chart",
    businessImpact: "Medir o retorno real sobre o investimento de marketing e entender quais atributos da marca realmente movem a consideração e a recompra do consumidor. Eliminar disputas políticas entre canais mostrando onde cortar verba sem derrubar as vendas e onde colocar mais orçamento.",
    businessImpactEn: "Measuring the true incremental return on marketing investments and identifying which brand attributes drive customer consideration and repeat purchase. Eliminating cross-channel attribution disputes by revealing where budget can be trimmed safely and where to scale.",
    marketTerms: [
      "Marketing Mix Modeling (MMM)",
      "Modern Attribution",
      "Key Driver Analysis (KDA)",
      "Incrementality Testing",
      "Brand Equity Drivers",
      "Adstock & Saturação de Mídia",
      "Media Effectiveness",
      "ROI/ROAS Causal"
    ],
    technicalArsenal: [
      "Decomposição de Shapley (LMG) para Variáveis Colineares",
      "Regularização Penalizada (Ridge/ElasticNet)",
      "Modelagem Estrutural de Drivers com Curvas de Saturação Não-Lineares (Hill/Weibull Adstock)",
      "Diagnóstico de Multicolinearidade Estrita via VIF e Decomposição em Autovalores"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm"]
  },
  {
    id: "time-series-structural-forecasting",
    number: 5,
    title: "Séries Temporais & Previsão Estrutural",
    titleEn: "Time Series & Structural Forecasting",
    tagline: "Modelos de espaço de estados, filtro de Kalman e detecção de quebras estruturais",
    taglineEn: "State-space models, Kalman filtering, and structural break detection",
    icon: "trending-up",
    businessImpact: "Separar a real trajetória de crescimento do negócio da volatilidade de curto prazo e dos picos sazonais. Projetar a demanda futura com margens de incerteza realistas e detectar em tempo real se a sensibilidade do mercado está mudando diante de crises ou pressões econômicas.",
    businessImpactEn: "Decomposing core business growth trajectory from short-term noise and seasonal spikes. Projecting future demand with realistic uncertainty intervals and detecting structural parameter shifts in real time during macroeconomic shocks.",
    marketTerms: [
      "Demand Forecasting",
      "Structural Time Series",
      "State-Space Models",
      "Kalman Filter",
      "Time-Varying Parameters (TVP)",
      "Structural Break Detection",
      "Trend-Cycle Decomposition",
      "Anomaly Detection"
    ],
    technicalArsenal: [
      "Representação em Espaço de Estados (Harvey / Durbin-Koopman)",
      "Filtro e Suavizador de Kalman (RTS Smoother)",
      "Coeficientes Variantes no Tempo (TVP via Random Walk)",
      "Sazonalidade Trigonométrica Estocástica por Harmônicos de Fourier",
      "Diagnóstico de Quebras via Inovações Padronizadas"
    ],
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "predictive-ml-risk-modeling",
    number: 6,
    title: "Machine Learning Preditivo & Modelagem de Risco",
    titleEn: "Predictive Machine Learning & Risk Modeling",
    tagline: "Calibração de probabilidades, otimização de ponto de corte e Explainable AI",
    taglineEn: "Probability calibration, cost-sensitive thresholding, and Explainable AI",
    icon: "shield-check",
    businessImpact: "Estimar a probabilidade matemática de um evento acontecer (uma transação suspeita, inadimplência, adesão a um serviço) e calibrar a régua de decisão da empresa: definir exatamente onde traçar a linha de corte para evitar perder clientes bons por excesso de cautela ou tomar prejuízo por frouxidão.",
    businessImpactEn: "Estimating the mathematical probability of critical outcomes (suspicious transactions, default, feature adoption) and calibrating the operational decision threshold: balancing false positive opportunity loss against false negative default costs.",
    marketTerms: [
      "Predictive Modeling",
      "Risk Scoring",
      "Probability Calibration",
      "Cost-Sensitive Learning",
      "Threshold Optimization",
      "Binary & Multiclass Classification",
      "Gradient Boosting (XGBoost / LightGBM)",
      "Explainable AI (SHAP / Partial Dependence)"
    ],
    technicalArsenal: [
      "Otimização de Ponto de Corte Ponderada por Matriz de Custos/Ganhos",
      "Calibração de Probabilidades (Platt Scaling e Regressão Isotônica)",
      "Árvores Encadeadas por Gradiente e Random Forests",
      "Regularização Logística com Penalidades L1/L2",
      "Diagnóstico de Desbalanceamento com Curvas Precision-Recall (PR-AUC) e Brier Score"
    ],
    technicalArsenalEn: [
      "Cost/Gain Matrix Weighted Cutoff Optimization",
      "Probability Calibration (Platt Scaling & Isotonic Regression)",
      "Gradient Boosted Trees & Random Forests",
      "Logistic Regularization with L1/L2 Penalties",
      "Imbalance Diagnosis with Precision-Recall Curves (PR-AUC) & Brier Score"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm", "quantificador-semantico-app"]
  },
  {
    id: "text-intelligence-unstructured-data",
    number: 7,
    title: "Inteligência de Texto & Extração de Dados Não Estruturados",
    titleEn: "Text Intelligence & Unstructured Data Extraction",
    tagline: "Embeddings densos, clustering semântico, benchmarking e avaliação de LLMs",
    taglineEn: "Dense embeddings, semantic clustering, benchmarking, and LLM evaluation",
    icon: "document-text",
    businessImpact: "Transformar montanhas de textos desestruturados (avaliações de produto, chamados de atendimento, comentários e documentos técnicos) em indicadores quantitativos acionáveis. Avaliar de forma auditável e científica se ferramentas de inteligência artificial estão entregando respostas factuais ou inventando dados.",
    businessImpactEn: "Converting massive volumes of unstructured text (customer reviews, support tickets, survey feedback, technical documents) into actionable quantitative signals. Scientifically and auditably evaluating whether AI tools deliver factual grounded answers or hallucinate.",
    marketTerms: [
      "Natural Language Processing (NLP)",
      "Voice of Customer (VoC) Mining",
      "Semantic Search",
      "Vector Embeddings",
      "Unstructured Data Structuring",
      "LLM Benchmarking",
      "LLM-as-a-Judge Evaluation",
      "Inter-Rater Reliability"
    ],
    technicalArsenal: [
      "Embeddings Densos e Busca Vetorial Topológica (HNSW com Métrica de Cosseno)",
      "Redução Dimensional e Clusterização Semântica (UMAP / HDBSCAN)",
      "Parsing Estrutural de Documentos (Docling)",
      "Teoria de Mensuração Psicométrica e Concordância Inter-Avaliadores via ICC ($ICC$)",
      "Protocolos Cegos de Triangulação de Modelos"
    ],
    technicalArsenalEn: [
      "Dense Embeddings & Topological Vector Search (HNSW with Cosine Metric)",
      "Dimensionality Reduction & Semantic Clustering (UMAP / HDBSCAN)",
      "Structural Document Parsing (Docling)",
      "Psychometric Measurement Theory & Inter-Rater Reliability ($ICC$)",
      "Blinded Multi-Model Triangulation Protocols"
    ],
    relatedProjectIds: ["quantificador-semantico-app"]
  }
];
