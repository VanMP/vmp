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

export type BenchmarkTableRow = {
  theme: string;
  themeEn?: string;
  realPct: string;
  classifiedCount: number | string;
  finalPct: string;
  errorMargin: string;
};

export type BenchmarkTableData = {
  headers: string[];
  headersEn?: string[];
  rows: BenchmarkTableRow[];
};

export type ProjectSlide = {
  id: string;
  layout: "legacy" | "image-text-metric" | "image-metrics-sidebar" | "chart-only" | "image-three-blocks" | "interactive-iframe";
  title?: string;
  titleEn?: string;
  imagePath?: string;
  iframePath?: string;
  visualType?: "ab-bars" | "time-series" | "survival" | "pricing" | "matrix" | "nlp-flow" | "rag-pipeline";
  text?: string;
  textEn?: string;
  metrics?: ProjectMetric[];
  textBlocks?: TextBlock[];
  tableData?: BenchmarkTableData;
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
    id: "nlp-text-intelligence",
    title: "Pipeline de Clustering & Rotulagem por LLM",
    titleEn: "Clustering Pipeline & LLM Labeling",
    shortTitle: "Pipeline de Clustering & LLM",
    shortTitleEn: "Clustering & LLM Pipeline",
    category: "Modelagem & Agrupamento Vetorial",
    categoryEn: "Modeling & Vector Clustering",
    summary: "Validação experimental do algoritmo de agrupamento e quantificação semântica em dados de redes sociais, utilizando um dataset de teste sintético e pré-rotulado para validar a precisão da pipeline (BERT Multilíngue, UMAP, GMM e Llama 3.1 local) antes de sua integração na ferramenta interativa em Streamlit.",
    summaryEn: "Experimental validation of the clustering and semantic quantification algorithm on social media data, using a pre-labeled synthetic test dataset to validate pipeline precision (Multilingual BERT, UMAP, GMM, local Llama 3.1) prior to Streamlit integration.",
    problem: "Análise e quantificação de textos não estruturados e sem categorias pré-definidas. Para validar o desempenho do algoritmo antes da aplicação prática, utilizou-se um dataset de estresse sintético focado em gestão municipal (contendo 15% de ruído/spam e 25% de frases vagas sem palavras-chave), cenário onde classificadores tradicionais falham em capturar contexto e a leitura manual é inviável.",
    problemEn: "Analysis and quantification of unstructured text without pre-defined categories. A synthetic stress dataset focused on municipal management (containing 15% noise/spam and 25% implicit statements) was used to validate algorithm performance prior to practical deployment.",
    methods: ["Processamento de Linguagem Natural", "Embeddings multilíngues", "Redução de dimensionalidade", "Modelagem por Mistura de Gaussianas", "Agentes e LLMs locais", "Métricas de validação"],
    applications: ["Clusterização Não Categórica", "Quantificação de Opinião Pública", "Filtro de Ruído & Off-Topic", "Rotulagem Semântica por LLM"],
    techniques: ["Embeddings BERT Multilíngue (MiniLM-L12-v2)", "Redução de Dimensionalidade (UMAP)", "Mistura de Gaussianas (GMM)", "Rotulagem por Llama 3.1 Local", "Métricas de Validação (ARI/F1-Score)"],
    tools: ["Python", "Sentence-Transformers", "UMAP", "Scikit-Learn", "Ollama (Llama 3.1)", "Plotly", "HTML/CSS"],
    metrics: [
      { label: "Acurácia Global", labelEn: "Global Accuracy", value: "78,6%", note: "Pós-Refinamento", noteEn: "Post-Refinement" },
      { label: "Weighted F1-Score", labelEn: "Weighted F1-Score", value: "78,7%", note: "Macro F1 de 72,9%", noteEn: "Macro F1 72.9%" },
      { label: "Erro de Prevalência", labelEn: "Prevalence Error", value: "±2,16%", note: "Desvio Médio de Voto", noteEn: "Mean Margin Error" },
      { label: "Precisão em Ruído", labelEn: "Spam Precision", value: "88,9%", note: "180 amostras salvas", noteEn: "180 samples saved" },
      { label: "Índice ARI", labelEn: "ARI Index", value: "0,6091", note: "Separabilidade Rand", noteEn: "Rand Separability" }
    ],
    outcome: "O algoritmo de agrupamento vetorial demonstrou alta precisão ao classificar 1.190 fragmentos com acurácia de 78,6% e erro de prevalência de apenas ±2,16%, isolando com 88,9% de precisão as amostras de ruído e mapeando a estrutura vetorial em 3D.",
    outcomeEn: "The vector clustering algorithm demonstrated high precision in classifying 1,190 text fragments with 78.6% accuracy and ±2.16% prevalence error, isolating noise with 88.9% precision and mapping 3D vector space.",
    simulated: true,
    visualType: "nlp-flow",
    slides: [
      {
        id: "quantificador-slide-1",
        layout: "interactive-iframe",
        title: "Projeção Espacial 3D de Opiniões (UMAP + GMM)",
        titleEn: "3D Spatial Opinion Projection (UMAP + GMM)",
        iframePath: "/reports/quantificador-semantico-plot.html"
      },
      {
        id: "quantificador-slide-2",
        layout: "image-three-blocks",
        title: "Matriz de Validação e Destaques da Pipeline",
        titleEn: "Validation Matrix & Pipeline Highlights",
        tableData: {
          headers: ["Tema da Opinião Pública", "% Real (Gabarito)", "Nº Classificado (IA)", "% Classificado (Final)", "Erro Absoluto (%)"],
          headersEn: ["Public Opinion Theme", "% Real (Truth)", "Classified Count (AI)", "% Classified (Final)", "Margin Error (%)"],
          rows: [
            {
              theme: "Apoio Cego e Elogios ao Candidato",
              themeEn: "Blind Support & Candidate Praise",
              realPct: "26.05%",
              classifiedCount: 325,
              finalPct: "27.31%",
              errorMargin: "±1.26%"
            },
            {
              theme: "Reclamações de Asfalto e Infraestrutura Urbana",
              themeEn: "Road & Infrastructure Complaints",
              realPct: "21.85%",
              classifiedCount: 269,
              finalPct: "22.61%",
              errorMargin: "±0.76%"
            },
            {
              theme: "Críticas à Saúde Pública e Postos de Saúde",
              themeEn: "Public Health & Clinic Complaints",
              realPct: "16.81%",
              classifiedCount: 133,
              finalPct: "11.18%",
              errorMargin: "±5.63%"
            },
            {
              theme: "Ruído / Fora de Escopo (Spam e Off-Topic)",
              themeEn: "Noise / Out of Scope (Spam & Off-Topic)",
              realPct: "15.13%",
              classifiedCount: 180,
              finalPct: "15.13%",
              errorMargin: "±0.0%"
            },
            {
              theme: "Denúncias de Corrupção e Superfaturamento",
              themeEn: "Corruption & Overpricing Allegations",
              realPct: "9.24%",
              classifiedCount: 176,
              finalPct: "14.79%",
              errorMargin: "±5.55%"
            },
            {
              theme: "Cobrança por Educação e Vagas em Creches",
              themeEn: "Education & Daycare Demands",
              realPct: "6.72%",
              classifiedCount: 69,
              finalPct: "5.8%",
              errorMargin: "±0.92%"
            },
            {
              theme: "Reclamações de Segurança e Iluminação Pública",
              themeEn: "Public Safety & Lighting Complaints",
              realPct: "4.2%",
              classifiedCount: 38,
              finalPct: "3.19%",
              errorMargin: "±1.01%"
            }
          ]
        },
        textBlocks: [
          {
            title: "🎯 Acurácia de 78.6% & F1 de 78.7%",
            titleEn: "🎯 78.6% Accuracy & 78.7% F1",
            text: "Elevado desempenho em frases vagas com erro de prevalência de apenas ±2.16% no cômputo global dos temas.",
            textEn: "High performance on implicit statements with an overall vote margin error of just ±2.16%."
          },
          {
            title: "🌪️ 88.9% de Precisão em Ruído",
            titleEn: "88.9% Precision on Spam Noise",
            text: "Isolamento autônomo de 180 amostras fora de escopo (spam, piadas, futebol) sem poluir a contagem dos temas prioritários.",
            textEn: "Autonomous isolation of 180 out-of-scope samples (spam, jokes) without polluting priority theme counts."
          },
          {
            title: "💰 Custo Zero de API & 100% On-Premise",
            titleEn: "💰 Zero API Cost & 100% On-Premise",
            text: "Pipeline otimizada para executar 100% localmente (via Ollama/Llama 3.1 e embeddings open-source), processando grandes volumes de texto sem consumo de tokens em APIs pagas e garantindo privacidade total dos dados.",
            textEn: "Optimized pipeline executing 100% locally (via Ollama/Llama 3.1 and open-source embeddings), processing large text volumes without paid API token consumption and ensuring full data privacy."
          }
        ]
      }
    ]
  },
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
            text: "A Campanha A entrega um lucro esperado de R$69.996 contra R$66.247 da B. \n A probabilidade de dominância financeira absoluta de A é de 64.99%.",
            textEn: "Campaign A delivers an expected profit of R$69,996 versus R$66,247 for B. \n The probability of absolute financial dominance for A is 64.99%."
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
