export type ProjectMetric = {
  label: string;
  labelEn?: string;
  value: string;
  note?: string;
  noteEn?: string;
};

export type TextBlock = {
  title: string;
  titleEn?: string;
  text: string;
  textEn?: string;
};

export type ProjectSlide = {
  id: string;
  layout: "legacy" | "image-text-metric" | "image-metrics-sidebar" | "chart-only" | "image-three-blocks";
  title?: string;
  titleEn?: string;
  imagePath?: string;
  visualType?: "ab-bars" | "time-series" | "survival" | "pricing" | "matrix" | "nlp-flow" | "rag-pipeline";
  text?: string;
  textEn?: string;
  metrics?: ProjectMetric[];
  textBlocks?: TextBlock[];
};

export type Project = {
  id: string;
  title: string;
  titleEn: string;
  shortTitle: string;
  shortTitleEn: string;
  category: string;
  categoryEn: string;
  summary: string;
  summaryEn: string;
  problem: string;
  problemEn: string;
  methods: string[];
  tools: string[];
  metrics: ProjectMetric[];
  outcome: string;
  outcomeEn: string;
  simulated: boolean;
  visualType: "ab-bars" | "time-series" | "survival" | "pricing" | "matrix" | "nlp-flow" | "rag-pipeline";
  slides?: ProjectSlide[];
  applications?: string[];
  techniques?: string[];
};

export const projects: Project[] = [
  {
    id: "bayesian-promotions",
    title: "Análise Bayesiana em Experimentação (Caso base: teste A/B)",
    titleEn: "Bayesian Analysis in Experimentation (Baseline Case: A/B Test)",
    shortTitle: "Experimentação Bayesiana",
    shortTitleEn: "Bayesian Experimentation",
    category: "Experimentação",
    categoryEn: "Experimentation",
    summary: "Projeção de lucro esperado e análise de risco financeiro sobre alternativas de promoção para a Black Friday de um e-commerce",
    summaryEn: "Expected profit projection and financial risk analysis on promotional alternatives for an e-commerce Black Friday",
    problem: "Faltando dois meses para a Black Friday, o e-commerce precisava definir a estratégia de anúncios para uma base de 100 mil usuários, escolhendo entre duas opções: Campanha A (conversão maior, margem menor) e Campanha B (conversão menor, margem maior).\n\nA Análise frequentista comum foi inconclusiva, com um p-valor de 0.18. Neste projeto, criei um material para apoiar a decisão pela campanha mais vantajosa, utilizando modelagem Bayesiana e simulações de Monte Carlo para quantificar o risco financeiro exato de cada decisão, transformando incerteza em lucro esperado real.",
    problemEn: "Two months before Black Friday, the e-commerce needed to define the ad strategy for a base of 100,000 users, choosing between two options: Campaign A (higher conversion, lower margin) and Campaign B (lower conversion, higher margin).\n\nThe standard frequentist analysis was inconclusive, with a p-value of 0.18. In this project, I created material to support the decision for the most advantageous campaign, using Bayesian modeling and Monte Carlo simulations to quantify the exact financial risk of each decision, transforming uncertainty into actual expected profit.",
    methods: ["Testes A/B", "Eventos raros", "Inferência bayesiana", "Teste Z", "Intervalos de credibilidade", "Projeção de lucro"],
    applications: ["Testes A/B", "Modelagem de eventos raros", "Otimização de margem de lucro", "Análise de risco financeiro"],
    techniques: ["Inferência Bayesiana", "Distribuição Conjugada Beta-Binomial", "Simulação de Monte Carlo", "Distribuição do Lift Relativo", "Lucro Esperado Coletivo", "Função de Perda Esperada (Risk Analysis)"],
    tools: ["R", "Python", "NumPy", "Pandas", "SciPy (stats)", "Seaborn", "LaTeX"],
    metrics: [
      { label: "Conversão A", labelEn: "Conversion A", value: "2,04%", note: "Desconto direto", noteEn: "Direct discount" },
      { label: "Conversão B", labelEn: "Conversion B", value: "1,68%", note: "Pacote promocional", noteEn: "Bundle" },
      { label: "p-valor", labelEn: "p-value", value: "0,1828", note: "Frequentista", noteEn: "Frequentist" },
      { label: "P(A > B)", labelEn: "P(A > B)", value: "90,9%", note: "Probabilidade Bayesiana", noteEn: "Bayesian Probability" },
      { label: "Lucro esperado A", labelEn: "Expected profit A", value: "R$ 3.876,00" },
      { label: "Lucro esperado B", labelEn: "Expected profit B", value: "R$ 3.192,00" }
    ],
    outcome: "A modelagem bayesiana calculou uma probabilidade de 90,9% de superioridade para a mecânica A, oferecendo suporte quantitativo para o lançamento da promoção mesmo diante de um p-valor frequentista estatisticamente inconclusivo para o tamanho amostral acumulado.",
    outcomeEn: "Bayesian modeling calculated a 90.9% probability of superiority for promotion strategy A, providing quantitative support for the rollout even with a frequentist p-value that remained statistically inconclusive due to current sample size limitations.",
    simulated: true,
    visualType: "ab-bars",
    slides: [
      {
        id: "bayesian-slide-1",
        layout: "image-three-blocks",
        title: "Distribuições Posteriori e Risco de Decisão",
        titleEn: "Posterior Distributions & Decision Risk",
        imagePath: "/images/ab_test_plots.png",
        textBlocks: [
          {
            title: "⚡ Maior Conversão",
            titleEn: "⚡ Higher Conversion",
            text: "A Campanha A apresenta 90.8% de probabilidade de ter uma taxa de conversão real superior à Campanha B.",
            textEn: "Campaign A has a 90.8% probability of having a higher real conversion rate than Campaign B."
          },
          {
            title: "💰 Lucratividade Esperada",
            titleEn: "💰 Expected Profitability",
            text: "A Campanha A entrega um lucro esperado de R$69.996 contra R$66.247 da B. A probabilidade de dominância financeira absoluta de A é de 64.99%.",
            textEn: "Campaign A delivers an expected profit of R$69,996 versus R$66,247 for B. The probability of absolute financial dominance for A is 64.99%."
          },
          {
            title: "🚨 Avaliação de Risco",
            titleEn: "🚨 Risk Evaluation",
            text: "O risco de perda esperada ao escolher a Campanha A é de apenas R$2.336, enquanto o erro ao escolher a Campanha B carrega um risco de R$6.084 (quase 3 vezes maior).",
            textEn: "The expected loss risk when choosing Campaign A is only R$2,336, whereas the error in choosing Campaign B carries a risk of R$6,084 (nearly 3 times higher)."
          }
        ]
      }
    ]
  },
  {
    id: "time-series-impact",
    title: "Séries Temporais e Impacto Contrafactual",
    titleEn: "Time Series and Counterfactual Impact",
    shortTitle: "Séries Temporais e Impacto",
    shortTitleEn: "Time Series & Impact",
    category: "Inferência Estatística",
    categoryEn: "Statistical Inference",
    summary: "Determinação do efeito incremental de uma alteração comercial em série temporal, isolando componentes de tendência, sazonalidade histórica e ruído aleatório.",
    summaryEn: "Determining the incremental effect of a commercial policy change on a time series, isolating trend, historical seasonality, and random noise.",
    problem: "Verificação de causalidade e mensuração do incremento real de faturamento pós-intervenção em série temporal de vendas sujeita a flutuações sazonais cíclicas.",
    problemEn: "Causal validation and measurement of real incremental revenue post-intervention in a sales time series subject to cyclical seasonal fluctuations.",
    methods: ["Inferência em séries temporais", "Previsão", "Análise contrafactual", "Séries temporais interrompidas", "Intervalos de confiança"],
    tools: ["Python", "R", "Power BI"],
    metrics: [
      { label: "Impacto estimado", labelEn: "Estimated impact", value: "+12,4%", note: "Efeito incremental", noteEn: "Incremental effect" },
      { label: "Cenário base", labelEn: "Baseline scenario", value: "Contrafactual", note: "Sem intervenção", noteEn: "Without intervention" },
      { label: "Incerteza", labelEn: "Uncertainty", value: "[+8.1%, +16.7%]", note: "Intervalo de confiança", noteEn: "Confidence interval" }
    ],
    outcome: "O modelo contrafactual estimou um incremento médio estável de 12,4% (IC 95%: [8,1%, 16,7%]) atribuível à intervenção comercial, isolando-o de picos sazonais usuais do período.",
    outcomeEn: "The counterfactual model estimated a stable average increment of 12.4% (95% CI: [8.1%, 16.7%]) attributable to the commercial intervention, isolating it from seasonal peaks.",
    simulated: true,
    visualType: "time-series"
  },
  {
    id: "survival-time-to-event",
    title: "Análise de Sobrevivência para Tempo até Evento",
    titleEn: "Survival Analysis for Time-to-Event",
    shortTitle: "Análise de Sobrevivência",
    shortTitleEn: "Survival Analysis",
    category: "Modelagem Estatística",
    categoryEn: "Statistical Modeling",
    summary: "Modelagem probabilística do tempo decorrido até a ocorrência de cancelamentos de clientes, avaliando o perfil de atrito instantâneo ajustado por variáveis de aquisição.",
    summaryEn: "Probabilistic modeling of elapsed time until customer cancellation events occur, evaluating the hazard rate adjusted for acquisition covariates.",
    problem: "Necessidade de prever o ciclo de vida ativo do cliente (LTV) e identificar em quais períodos há maior vulnerabilidade ao cancelamento em safras distintas.",
    problemEn: "Predicting customer active lifecycle (LTV) and identifying periods with higher vulnerability to cancellation across distinct cohorts.",
    methods: ["Análise de sobrevivência", "Kaplan-Meier", "Riscos proporcionais de Cox", "Razão de risco (Hazard Ratio)"],
    tools: ["Python", "R"],
    metrics: [
      { label: "Mediana Sobrevivência", labelEn: "Median Survival", value: "18 meses", note: "Grupo geral", noteEn: "General group" },
      { label: "Razão de risco (A vs B)", labelEn: "Hazard Ratio (A vs B)", value: "0,65", note: "Risco relativo", noteEn: "Relative risk" },
      { label: "p-valor (Log-rank)", labelEn: "p-value (Log-rank)", value: "< 0,001", note: "Significância", noteEn: "Significance" }
    ],
    outcome: "O modelo de riscos proporcionais de Cox estimou uma Razão de Risco de 0,65 para a safra qualificada (p-valor < 0,001), indicando uma redução de 35% na taxa de atrito sob a nova estratégia de integração e boas-vindas.",
    outcomeEn: "The Cox proportional hazards model estimated a Hazard Ratio of 0.65 for the qualified cohort (p-value < 0.001), indicating a 35% reduction in the attrition rate under the new onboarding flow.",
    simulated: true,
    visualType: "survival"
  },
  {
    id: "portfolio-pricing",
    title: "Otimização de Portfólio e Preço",
    titleEn: "Portfolio and Price Optimization",
    shortTitle: "Otimização de Portfólio/Preço",
    shortTitleEn: "Portfolio & Price Opt.",
    category: "Otimização",
    categoryEn: "Optimization",
    summary: "Simulação de mercado baseada em dados de preferência declarada para otimizar elasticidade de preço, atributos de produto e alcance líquido da oferta.",
    summaryEn: "Market simulation based on stated preference data to optimize price elasticity, product attributes, and net product mix reach.",
    problem: "Determinação da elasticidade-preço da demanda e definição de um mix de portfólio capaz de maximizar o alcance líquido (reach) sem canibalização de faturamento.",
    problemEn: "Determining price elasticity of demand and selecting an optimal product mix to maximize net market reach without revenue cannibalization.",
    methods: ["Elasticidade de preço", "MaxDiff", "Análise conjunta", "Análise TURF", "Simulação de quota de mercado"],
    tools: ["Python", "R", "Excel"],
    metrics: [
      { label: "Elasticidade Média", labelEn: "Average Elasticity", value: "-1,85", note: "Sensibilidade de preço", noteEn: "Price sensitivity" },
      { label: "Alcance TURF", labelEn: "TURF Reach", value: "85%", note: "Mix ideal de 3 itens", noteEn: "Optimal mix of 3 items" },
      { label: "Simulação Share", labelEn: "Share Simulation", value: "+4,2%", note: "Aumento estimado de quota", noteEn: "Estimated share increase" }
    ],
    outcome: "A simulação TURF indicou alcance líquido ótimo de 85% com um portfólio composto por três itens chave, e a modelagem de análise conjunta identificou o patamar de preço ideal sob elasticidade estimada de -1,85.",
    outcomeEn: "TURF simulation indicated an optimal net reach of 85% using a three-item portfolio combination, while conjoint modeling identified the target price point under an estimated elasticity of -1.85.",
    simulated: true,
    visualType: "pricing"
  },
  {
    id: "segmentation-churn-ltv-roi",
    title: "Segmentação, Churn, LTV e ROI",
    titleEn: "Segmentation, Churn, LTV, and ROI",
    shortTitle: "Segmentação e LTV",
    shortTitleEn: "Segmentation & LTV",
    category: "Inteligência Quantitativa",
    categoryEn: "Quantitative Intelligence",
    summary: "Agrupamento estatístico multidimensional e modelagem de valor do ciclo de vida do cliente (LTV) para otimizar a distribuição do orçamento de campanhas de retenção.",
    summaryEn: "Multidimensional statistical clustering and customer lifetime value (LTV) modeling to optimize retention campaign budget allocation.",
    problem: "Otimização de custos de aquisição e retenção através da diferenciação do comportamento de consumo, frequência transacional e risco de cancelamento entre clientes ativos.",
    problemEn: "Optimizing acquisition and retention costs by differentiating customer value patterns, purchasing frequency, and attrition risk.",
    methods: ["Análise de agrupamento", "Segmentação RFM", "Previsão de rotatividade (churn)", "Valor de vida do cliente (LTV)", "Retorno sobre o investimento (ROI)"],
    tools: ["Python", "SQL", "Power BI"],
    metrics: [
      { label: "Grupos Identificados", labelEn: "Identified Clusters", value: "4 grupos", note: "Comportamentos distintos", noteEn: "Distinct behaviors" },
      { label: "LTV Esperado (Grupo Alto)", labelEn: "Expected LTV (High Group)", value: "R$ 4.250", note: "Valor médio do ciclo de vida", noteEn: "Average lifecycle value" },
      { label: "ROI Estimado de Campanha", labelEn: "Estimated Campaign ROI", value: "3,2x", note: "Retorno da alocação otimizada", noteEn: "Optimized allocation return" }
    ],
    outcome: "A estruturação em 4 grupos e a modelagem do LTV médio (R$ 4.250 para a faixa prioritária) permitiram focar campanhas ativas, estimando um retorno financeiro de 3,2 vezes o capital alocado.",
    outcomeEn: "Behavioral grouping into 4 clusters and LTV modeling (average R$ 4,250 for the priority tier) allowed precision targeting, yielding an estimated ROI of 3.2x on campaign investment.",
    simulated: true,
    visualType: "matrix"
  },
  {
    id: "nlp-text-intelligence",
    title: "PLN para Inteligência Quantitativa de Texto",
    titleEn: "NLP for Quantitative Text Intelligence",
    shortTitle: "PLN e Texto",
    shortTitleEn: "NLP & Text",
    category: "PLN",
    categoryEn: "NLP",
    summary: "Desenvolvimento de fluxo de Processamento de Linguagem Natural para classificar, resumir e quantificar tendências semânticas em grandes volumes de texto qualitativo.",
    summaryEn: "Development of a Natural Language Processing pipeline to classify, summarize, and quantify semantic trends in large volumes of qualitative text data.",
    problem: "Necessidade de processar comentários e avaliações de clientes e registros de suporte textuais não estruturados em categorias métricas de fricção e relevância operacional.",
    problemEn: "Requirement to convert customer feedback and support logs into structured metric categories of product friction and operational relevance.",
    methods: ["Análise de sentimentos", "Modelagem de tópicos", "Extração de entidades", "Sumarização", "Classificação de texto"],
    tools: ["Python", "PLN", "Modelos de Linguagem (LLMs)"],
    metrics: [
      { label: "Temas Identificados", labelEn: "Identified Themes", value: "8 tópicos", note: "Consistência de 0,72", noteEn: "Consistency of 0.72" },
      { label: "Precisão do Classificador", labelEn: "Classifier Precision", value: "91%", note: "F1-Score médio", noteEn: "Average F1-Score" },
      { label: "Extração de Entidades", labelEn: "Entity Extraction", value: "94%", note: "Recall de termos-chave", noteEn: "Key terms recall" }
    ],
    outcome: "O fluxo de processamento estruturou tópicos latentes com coerência de 0,72 e habilitou classificação automatizada de reclamações com F1-score médio de 91%, permitindo o direcionamento preciso de melhorias de produto.",
    outcomeEn: "The pipeline structured latent topics with a 0.72 coherence score and enabled automated text classification with an average 91% F1-score, directing product refinement teams to critical friction areas.",
    simulated: true,
    visualType: "nlp-flow"
  },
  {
    id: "rag-knowledge-base",
    title: "Assistente RAG para Base de Conhecimento",
    titleEn: "RAG Assistant for Knowledge Base",
    shortTitle: "Assistente RAG",
    shortTitleEn: "RAG Assistant",
    category: "Automação com IA",
    categoryEn: "AI Automation",
    summary: "Implementação de arquitetura de geração aumentada por recuperação (RAG) integrada a base de dados vetorial para consulta indexada de manuais técnicos e normativas.",
    summaryEn: "Implementation of a retrieval-augmented generation (RAG) architecture integrated with a vector database for indexed queries on technical manuals and internal policies.",
    problem: "Elevada latência de busca e inconsistência na recuperação manual de informações regulatórias em arquivos PDF extensos e descentralizados.",
    problemEn: "High search latency and retrieval inconsistency during manual lookup of regulatory information within large, decentralized PDF documents.",
    methods: ["Geração aumentada por recuperação (RAG)", "Vetorização de texto", "Pesquisa vetorial", "Agentes de IA", "Chatbot"],
    tools: ["Python", "LangChain", "LangGraph", "n8n"],
    metrics: [
      { label: "Precisão de Resposta", labelEn: "Response Accuracy", value: "96%", note: "Avaliação baseada em fontes", noteEn: "Source-based evaluation" },
      { label: "Tempo de Busca Médio", labelEn: "Average Search Time", value: "1.2s", note: "Redução de 90%", noteEn: "90% reduction" },
      { label: "Fontes Rastreáveis", labelEn: "Traceable Sources", value: "100%", note: "Citação direta do parágrafo", noteEn: "Direct paragraph citation" }
    ],
    outcome: "O fluxo RAG de busca por representações vetoriais reduziu em 90% o tempo médio de consulta interna (latência de 1,2s), mantendo precisão de 96% através do rastreamento estrito de referências regulatórias fonte.",
    outcomeEn: "The embedding-based retrieval workflow reduced average internal lookup latency by 90% (1.2s response time) while maintaining 96% response accuracy through strict source-paragraph citation tracking.",
    simulated: true,
    visualType: "rag-pipeline"
  }
];
