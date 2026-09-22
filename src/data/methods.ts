export type Method = {
  id: string;
  name: string;
  nameEn: string;
  group: "Experimentação" | "Inferência e modelagem" | "Otimização e inteligência quantitativa" | "PLN e automação";
  groupEn: "Experimentation" | "Inference & Modeling" | "Optimization & Quant Intelligence" | "NLP & Automation";
  summary: string;
  summaryEn: string;
  relatedProjectIds: string[];
};

export const methods: Method[] = [
  // Experimentação
  {
    id: "ab-testing",
    name: "Testes A/B",
    nameEn: "A/B Testing",
    group: "Experimentação",
    groupEn: "Experimentation",
    summary: "Comparação de versões para validar melhorias e apoiar decisões comerciais com rigor analítico.",
    summaryEn: "Comparison of versions to validate improvements and support business decisions with analytical rigor.",
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "bayesian-inference",
    name: "Inferência Bayesiana",
    nameEn: "Bayesian Inference",
    group: "Experimentação",
    groupEn: "Experimentation",
    summary: "Atualização contínua de distribuições de probabilidade e quantificação de risco financeiro em tomadas de decisão.",
    summaryEn: "Continuous updating of probability distributions and financial risk quantification in decision making.",
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "experimental-design",
    name: "Desenho Experimental D-Optimal",
    nameEn: "D-Optimal Experimental Design",
    group: "Experimentação",
    groupEn: "Experimentation",
    summary: "Planejamento fatorial ótimo com blocagem balanceada e controle de combinações proibidas para testes de escolha discreta.",
    summaryEn: "Optimal factorial planning with balanced blocking and prohibited combination controls for discrete choice experiments.",
    relatedProjectIds: ["bayesian-promotions", "conjoint-portfolio-optimization"]
  },
  {
    id: "monte-carlo",
    name: "Simulações de Monte Carlo",
    nameEn: "Monte Carlo Simulations",
    group: "Experimentação",
    groupEn: "Experimentation",
    summary: "Geração de cenários estocásticos para modelagem de distribuições de perda esperada e lucro conjunto.",
    summaryEn: "Stochastic scenario generation for modeling expected loss distributions and joint profit.",
    relatedProjectIds: ["bayesian-promotions"]
  },

  // Inferência e modelagem
  {
    id: "discrete-choice",
    name: "Choice-Based Conjoint (CBC)",
    nameEn: "Choice-Based Conjoint (CBC)",
    group: "Inferência e modelagem",
    groupEn: "Inference & Modeling",
    summary: "Modelagem econométrica de escolhas discretas baseada na teoria da utilidade aleatória de McFadden.",
    summaryEn: "Econometric discrete choice modeling based on McFadden's random utility framework.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "latent-classes",
    name: "Modelos de Classes Latentes (LC-MNL)",
    nameEn: "Latent Class Models (LC-MNL)",
    group: "Inferência e modelagem",
    groupEn: "Inference & Modeling",
    summary: "Identificação de heterogeneidade não observada de preferências de consumidores via estimador Expectation-Maximization (EM).",
    summaryEn: "Identification of unobserved consumer preference heterogeneity via Expectation-Maximization (EM) estimation.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "willingness-to-pay",
    name: "Disposição a Pagar (WTP)",
    nameEn: "Willingness to Pay (WTP)",
    group: "Inferência e modelagem",
    groupEn: "Inference & Modeling",
    summary: "Quantificação monetária da utilidade percebida de cada nível de atributo de produto para calibrar faixas de preço.",
    summaryEn: "Monetary valuation of perceived utility for each product attribute level to calibrate pricing tiers.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "cross-elasticity",
    name: "Elasticidade Cruzada de Preço",
    nameEn: "Cross-Price Elasticity",
    group: "Inferência e modelagem",
    groupEn: "Inference & Modeling",
    summary: "Mensuração de canibalização e redistribuição de demanda entre produtos concorrentes na prateleira.",
    summaryEn: "Measurement of cannibalization and demand redistribution among competing shelf products.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },

  // Otimização e inteligência quantitativa
  {
    id: "nonlinear-opt",
    name: "Otimização Não-Linear (L-BFGS-B)",
    nameEn: "Non-Linear Optimization (L-BFGS-B)",
    group: "Otimização e inteligência quantitativa",
    groupEn: "Optimization & Quant Intelligence",
    summary: "Algoritmo quase-Newton com restrições de caixa para encontrar o vetor de preços ótimos sob demanda agregada não-linear.",
    summaryEn: "Quasi-Newton bound-constrained solver finding optimal pricing vectors under non-linear aggregate demand.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "assortment-opt",
    name: "Otimização Combinatória de Assortment",
    nameEn: "Combinatorial Assortment Optimization",
    group: "Otimização e inteligência quantitativa",
    groupEn: "Optimization & Quant Intelligence",
    summary: "Varredura exaustiva de subconjuntos de SKUs para simplificação de portfólio e maximização de retenção de margem.",
    summaryEn: "Exhaustive subset scanning for portfolio simplification and profit retention maximization.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "gmm-clustering",
    name: "Mistura de Gaussianas (GMM)",
    nameEn: "Gaussian Mixture Models (GMM)",
    group: "Otimização e inteligência quantitativa",
    groupEn: "Optimization & Quant Intelligence",
    summary: "Agrupamento probabilístico multidimensional sobre representações vetoriais de texto reduzidas.",
    summaryEn: "Multidimensional probabilistic clustering over reduced text vector representations.",
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  },
  {
    id: "dimensionality-reduction",
    name: "Redução de Dimensionalidade (UMAP)",
    nameEn: "Dimensionality Reduction (UMAP)",
    group: "Otimização e inteligência quantitativa",
    groupEn: "Optimization & Quant Intelligence",
    summary: "Projeção topológica de alta fidelidade para mapeamento espacial e clusterização semântica.",
    summaryEn: "High-fidelity topological projection for spatial mapping and semantic clustering.",
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  },

  // PLN e automação
  {
    id: "multilingual-embeddings",
    name: "Embeddings Multilíngues (BERT)",
    nameEn: "Multilingual Embeddings (BERT)",
    group: "PLN e automação",
    groupEn: "NLP & Automation",
    summary: "Vetorização densa de fragmentos textuais para capturar similaridade semântica agnóstica de palavras-chave.",
    summaryEn: "Dense text vectorization capturing semantic similarity independent of surface keywords.",
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  },
  {
    id: "llm-labeling",
    name: "Rotulagem Semântica por LLM Local",
    nameEn: "Local LLM Semantic Labeling",
    group: "PLN e automação",
    groupEn: "NLP & Automation",
    summary: "Geração autônoma de títulos e diagnósticos qualitativos utilizando modelos de linguagem (Llama 3.1) on-premise.",
    summaryEn: "Autonomous generation of titles and qualitative diagnostics using on-premise language models (Llama 3.1).",
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  },
  {
    id: "noise-filtering",
    name: "Detecção e Filtro de Ruído Semântico",
    nameEn: "Semantic Noise Detection & Filtering",
    group: "PLN e automação",
    groupEn: "NLP & Automation",
    summary: "Isolamento estatístico de mensagens fora de escopo (spam, piadas, conversas paralelas) antes do cômputo temático.",
    summaryEn: "Statistical isolation of out-of-scope messages (spam, jokes, side chatter) prior to theme aggregation.",
    relatedProjectIds: ["nlp-text-intelligence"]
  },
  {
    id: "app-engineering",
    name: "Desenvolvimento de Aplicações No-Code (Streamlit)",
    nameEn: "No-Code Application Engineering (Streamlit)",
    group: "PLN e automação",
    groupEn: "NLP & Automation",
    summary: "Construção de interfaces interativas e ferramentas de software para operacionalização de modelos analíticos complexos.",
    summaryEn: "Building interactive user interfaces and software tools to operationalize complex analytical models.",
    relatedProjectIds: ["quantificador-semantico-app", "conjoint-portfolio-optimization"]
  }
];
