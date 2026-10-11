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
    title: "Machine Learning",
    titleEn: "Machine Learning",
    tagline: "Arquiteturas supervisionadas, redes neurais, predição calibrada e Explainable AI",
    taglineEn: "Supervised architectures, neural networks, calibrated prediction, and Explainable AI",
    icon: "shield-check",
    businessImpact: "Construir arquiteturas preditivas supervisionadas (árvores de gradiente e redes neurais densas) capazes de antecipar comportamentos, detectar anomalias e classificar eventos complexos de negócio em escala. O foco reside em unir alta acurácia preditiva à calibração rigorosa de probabilidades e otimização de matriz de custo — garantindo que cada linha de corte gere valor econômico direto e decisões auditáveis.",
    businessImpactEn: "Building supervised predictive architectures (gradient boosted trees and dense neural networks) capable of anticipating behaviors, detecting anomalies, and classifying complex business events at scale. The focus lies in pairing high predictive accuracy with rigorous probability calibration and cost-matrix threshold tuning — ensuring every operational cutoff delivers direct financial value and auditability.",
    marketTerms: [
      "Explainable AI",
      "Modelagem Preditiva",
      "Aprendizado Supervisionado",
      "Score de Risco",
      "Detecção de Fraudes",
      "Classificação Binária e Multiclasse",
      "Calibração de Probabilidades"
    ],
    marketTermsEn: [
      "Explainable AI (XAI)",
      "Predictive Modeling",
      "Supervised Learning",
      "Risk Scoring",
      "Fraud Detection",
      "Binary & Multiclass Classification",
      "Probability Calibration"
    ],
    technicalArsenal: [
      "XGBoost",
      "Random Forest",
      "Redes Neurais Densas (MLP)",
      "Regularização Esparsa e Contração",
      "Platt Scaling",
      "Brier Score",
      "Threshold Tuning",
      "Valores de Shapley (SHAP)",
      "Gráficos de Dependência Parcial (PDP)"
    ],
    technicalArsenalEn: [
      "XGBoost",
      "Random Forest",
      "Dense Neural Networks (MLP)",
      "Sparse Regularization & Shrinkage",
      "Platt Scaling",
      "Brier Score",
      "Threshold Tuning",
      "Shapley Additive Explanations (SHAP)",
      "Partial Dependence Plots (PDP)"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm", "quantificador-semantico-app"]
  },
  {
    id: "text-intelligence-unstructured-data",
    number: 7,
    title: "Processamento de Texto",
    titleEn: "Text Processing",
    tagline: "Mineração de texto, embeddings, busca semântica e extração estruturada de dados",
    taglineEn: "Text mining, embeddings, semantic search, and structured data extraction",
    icon: "document-text",
    businessImpact: "Transformar montanhas de textos não estruturados (avaliações de produto, chamados de atendimento, comentários e documentos técnicos) em indicadores quantitativos acionáveis e variáveis estruturadas para suporte à tomada de decisão.",
    businessImpactEn: "Converting large volumes of unstructured text (customer reviews, support tickets, survey feedback, and technical documents) into actionable quantitative signals and structured features for decision-making.",
    marketTerms: [
      "Text Mining",
      "Information Extraction (IE)",
      "Named Entity Recognition (NER)",
      "Topic Modeling",
      "Semantic Search",
      "Aspect-Based Sentiment Analysis (ABSA)",
      "Document Classification",
      "Intent Recognition",
      "Hybrid Search (Dense + Sparse)",
      "Feature Extraction from Unstructured Data"
    ],
    marketTermsEn: [
      "Text Mining",
      "Information Extraction (IE)",
      "Named Entity Recognition (NER)",
      "Topic Modeling",
      "Semantic Search",
      "Aspect-Based Sentiment Analysis (ABSA)",
      "Document Classification",
      "Intent Recognition",
      "Hybrid Search (Dense + Sparse)",
      "Feature Extraction from Unstructured Data"
    ],
    technicalArsenal: [
      "Modelos de Linguagem & Embeddings",
      "Classificação & Extração Estruturada",
      "NER / Sequence Tagging",
      "Modelos Cross-Encoder",
      "Pipelines de Sanitização Morfológica",
      "Tratamento de Dados Ruidosos de OCR/HTML",
      "Extração Semântica de Entidades-Chave"
    ],
    technicalArsenalEn: [
      "Language Models & Vector Embeddings",
      "Classification & Structured Extraction",
      "NER / Sequence Tagging",
      "Cross-Encoder Architectures",
      "Morphological Sanitization Pipelines",
      "Noisy OCR/HTML Data Cleaning",
      "Semantic Key Entity Extraction"
    ],
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  }
];

