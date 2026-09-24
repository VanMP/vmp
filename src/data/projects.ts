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
  layout: "legacy" | "image-text-metric" | "image-metrics-sidebar" | "chart-only" | "image-three-blocks" | "four-blocks" | "interactive-iframe";
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
  anonymizedDisclaimer?: string;
  anonymizedDisclaimerEn?: string;
  visualType: "ab-bars" | "time-series" | "survival" | "pricing" | "matrix" | "nlp-flow" | "rag-pipeline";
  slides?: ProjectSlide[];
  applications?: string[];
  techniques?: string[];
  notebookPt?: string;
  notebookEn?: string;
  simulatorUrl?: string;
};

export const projects: Project[] = [
  {
    id: "nlp-text-intelligence",
    title: "Pipeline de Clustering & Rotulagem por LLM",
    titleEn: "Clustering Pipeline & LLM Labeling",
    shortTitle: "Motor do Quantificador (Algoritmo)",
    shortTitleEn: "Quantifier Engine (Algorithm)",
    category: "Modelagem & Agrupamento Vetorial",
    categoryEn: "Modeling & Vector Clustering",
    summary: "Validação experimental e benchmark do algoritmo de agrupamento vetorial e rotulagem semântica que constitui o motor de inteligência de texto do Quantificador Semântico. Avalia a precisão da pipeline (BERT Multilíngue, UMAP, GMM e Llama 3.1 local) em um dataset de estresse pré-rotulado antes de sua integração na aplicação Streamlit.",
    summaryEn: "Experimental validation and benchmark of the vector clustering and semantic labeling algorithm that powers the Semantic Quantifier engine. Evaluates pipeline precision (Multilingual BERT, UMAP, GMM, local Llama 3.1) on a pre-labeled stress dataset prior to Streamlit app integration.",
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
          headers: ["Tema da Opinião Pública", "% Real (Gabarito)", "% Classificado (Final)", "Erro Absoluto (%)"],
          headersEn: ["Public Opinion Theme", "% Real (Truth)", "% Classified (Final)", "Margin Error (%)"],
          rows: [
            {
              theme: "🟢 Apoio Cego e Elogios ao Candidato",
              themeEn: "🟢 Blind Support & Candidate Praise",
              realPct: "26.05%",
              classifiedCount: 325,
              finalPct: "27.31%",
              errorMargin: "±1.26%"
            },
            {
              theme: "🕳️ Reclamações de Asfalto e Infraestrutura Urbana",
              themeEn: "🕳️ Road & Infrastructure Complaints",
              realPct: "21.85%",
              classifiedCount: 269,
              finalPct: "22.61%",
              errorMargin: "±0.76%"
            },
            {
              theme: "🏥 Críticas à Saúde Pública e Postos de Saúde",
              themeEn: "🏥 Public Health & Clinic Complaints",
              realPct: "16.81%",
              classifiedCount: 133,
              finalPct: "11.18%",
              errorMargin: "±5.63%"
            },
            {
              theme: "🌪️ Ruído / Fora de Escopo (Spam e Off-Topic)",
              themeEn: "🌪️ Noise / Out of Scope (Spam & Off-Topic)",
              realPct: "15.13%",
              classifiedCount: 180,
              finalPct: "15.13%",
              errorMargin: "±0.0%"
            },
            {
              theme: "⚖️ Denúncias de Corrupção e Superfaturamento",
              themeEn: "⚖️ Corruption & Overpricing Allegations",
              realPct: "9.24%",
              classifiedCount: 176,
              finalPct: "14.79%",
              errorMargin: "±5.55%"
            },
            {
              theme: "🏫 Cobrança por Educação e Vagas em Creches",
              themeEn: "🏫 Education & Daycare Demands",
              realPct: "6.72%",
              classifiedCount: 69,
              finalPct: "5.8%",
              errorMargin: "±0.92%"
            },
            {
              theme: "💡 Reclamações de Segurança e Iluminação Pública",
              themeEn: "💡 Public Safety & Lighting Complaints",
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
    id: "quantificador-semantico-app",
    title: "Quantificador Semântico: Aplicação Streamlit No-Code",
    titleEn: "Semantic Quantifier: No-Code Streamlit App",
    shortTitle: "Aplicação Streamlit (Quantificador)",
    shortTitleEn: "Streamlit App (Quantifier)",
    category: "Engenharia de Aplicações & IA",
    categoryEn: "App Engineering & AI",
    summary: "Interface interativa no-code desenvolvida em Streamlit para operacionalizar a pipeline de clusterização semântica, permitindo ingestão de qualquer dataset em CSV, parametrização dinâmica de modelos e geração automatizada de relatórios 3D.",
    summaryEn: "Interactive no-code Streamlit interface to operationalize the semantic clustering pipeline, supporting any CSV dataset ingestion, dynamic model parameter tuning, and automated 3D report generation.",
    problem: "Para operar a pipeline de inteligência de texto no dia a dia sem depender de código ou scripts Python manuais, desenvolveu-se uma ferramenta em Streamlit que permite a qualquer usuário carregar sua própria base em CSV, configurar os parâmetros semânticos (embeddings, UMAP, GMM e prompt do Llama 3.1) e obter a quantificação executiva em segundos.",
    problemEn: "To run the text intelligence pipeline daily without relying on manual Python scripts, a Streamlit tool was created allowing users to upload any CSV dataset, adjust parameters, and get executive 3D reports in seconds.",
    methods: ["Engenharia de Software em IA", "Desenvolvimento de Aplicações Web", "Streamlit", "Automação de Pipelines", "Execução On-Premise", "Visualização Interativa"],
    applications: ["Software de Inteligência de Texto", "Automação de Workflow de IA", "Interface No-Code para Data Science", "Análise Agnóstica de CSVs"],
    techniques: ["UI Interativa com Streamlit", "Ingestão Dinâmica de CSV", "Conexão com Ollama Local", "Geração de Relatórios HTML Autônomos", "Parametrização de Modelos"],
    tools: ["Streamlit", "Python", "Ollama (Llama 3.1)", "Plotly", "Pandas", "Sentence-Transformers"],
    metrics: [
      { label: "Ingestão de Dados", labelEn: "Data Ingestion", value: "CSV Genérico", note: "Qualquer dataset", noteEn: "Any CSV dataset" },
      { label: "Execução de Pipeline", labelEn: "Pipeline Execution", value: "100% On-Premise", note: "Sem API paga", noteEn: "No paid API" },
      { label: "Geração de Relatório", labelEn: "Report Generation", value: "HTML 3D", note: "Exportação em 1 clique", noteEn: "1-click export" },
      { label: "Facilidade de Uso", labelEn: "Ease of Use", value: "Interface No-Code", note: "Uso intuitivo", noteEn: "Intuitive UI" }
    ],
    outcome: "A aplicação em Streamlit transformou uma rotina técnica complexa de PLN e agrupamento probabilístico em um software acessível de 1 clique, capacitando equipes a carregar dados qualitativos não estruturados e extrair relatórios executivos em tempo real.",
    outcomeEn: "The Streamlit application transformed a complex NLP and probabilistic clustering routine into an accessible 1-click software, enabling teams to upload unstructured qualitative data and generate executive reports in real time.",
    simulated: true,
    visualType: "nlp-flow",
    slides: [
      {
        id: "quantificador-app-slide-1",
        layout: "image-three-blocks",
        title: "Demonstração da Aplicação Streamlit (Fluxo Completo de Uso)",
        titleEn: "Streamlit App Demonstration (Full Usage Workflow)",
        imagePath: "/images/quantificador-demo.gif",
        textBlocks: [
          {
            title: "📂 Ingestão Flexível de CSV",
            titleEn: "📂 Flexible CSV Ingestion",
            text: "Carregamento instantâneo de dados com seleção interativa da coluna de texto alvo e metadados contextuais.",
            textEn: "Instant data loading with interactive selection of target text column and contextual metadata."
          },
          {
            title: "⚙️ Ajuste Dinâmico de Parâmetros",
            titleEn: "⚙️ Dynamic Parameter Tuning",
            text: "Controle dos hiperparâmetros de embeddings (BERT Multilíngue), UMAP, Mistura de Gaussianas e amostragem do Llama 3.1.",
            textEn: "Full control over Multilingual BERT embeddings, UMAP, Gaussian Mixture Models, and Llama 3.1 sampling parameters."
          },
          {
            title: "⚡ Geração & Exportação 3D",
            titleEn: "⚡ 3D Generation & Export",
            text: "Síntese automática do relatório executivo interativo em HTML 3D pronto para apresentação e tomada de decisão.",
            textEn: "Automatic synthesis of interactive executive 3D HTML reports ready for presentation and decision making."
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
    summary: "Projeção de lucro esperado e análise de risco financeiro sobre alternativas de promoção para a Black Friday de um e-commerce.",
    summaryEn: "Expected profit projection and financial risk analysis on promotional alternatives for an e-commerce Black Friday.",
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
    id: "conjoint-portfolio-optimization",
    title: "Choice-Based Conjoint (LC-MNL) & Otimização Prescritiva de Portfólio (L-BFGS-B)",
    titleEn: "Choice-Based Conjoint (LC-MNL) & Prescriptive Portfolio Optimization (L-BFGS-B)",
    shortTitle: "Conjoint & Otimização de Preço",
    shortTitleEn: "Conjoint & Price Opt.",
    category: "Econometria & Otimização Prescritiva",
    categoryEn: "Econometrics & Prescriptive Opt.",
    summary: "Modelagem econométrica Choice-Based Conjoint com segmentação por Classes Latentes (EM) e otimizador não-linear multivariado L-BFGS-B para precificação ótima de prateleira, captura de disposição a pagar (WTP) e purga estratégica de catálogo sob restrições de canibalização.",
    summaryEn: "Choice-Based Conjoint econometric modeling with Latent Class segmentation (EM) and L-BFGS-B multivariate non-linear solver for optimal shelf pricing, willingness-to-pay (WTP) extraction, and catalog pruning under cannibalization constraints.",
    problem: "Determinação da elasticidade-preço da demanda e definição de preços e mix de produtos capazes de maximizar o lucro total da empresa. O portfólio possuía dois perfis claros de clientes (sensíveis a preço vs. focados em qualidade/especificações). Foi necessário modelar as classes latentes, quantificar a disposição a pagar por atributo e otimizar simultaneamente os preços de todos os SKUs sob elasticidade cruzada e fuga para opt-out.",
    problemEn: "Determining demand price elasticity and setting optimal pricing and product mix to maximize total profit. With two distinct customer segments (price-sensitive vs. quality-driven), Latent Class modeling (EM) and L-BFGS-B multivariate optimization were deployed to capture WTP and optimize all SKU prices under cross-elasticity and opt-out constraints.",
    methods: ["Choice-Based Conjoint (CBC)", "Classes Latentes (LC-MNL)", "Algoritmo Expectation-Maximization (EM)", "Otimização Não-Linear (L-BFGS-B)", "Disposição a Pagar (WTP)", "Elasticidade Cruzada", "Otimização de Assortment (Purga)"],
    applications: ["Pesquisa Conjoint", "Precificação Ótima Multivariada", "Canibalização de Prateleira", "Segmentação por Classes Latentes", "Purga Estratégica de Assortment", "Simulação de Concorrência e Mix"],
    techniques: ["Pesquisa Conjoint (CBC)", "Desenho D-Optimal", "Logit Condicional de McFadden", "Estimador EM com Regularização L2", "Solver L-BFGS-B sob Limites de Markup", "Simulação de Escolha Softmax com Opt-Out", "Varredura Combinatória de SKUs"],
    tools: ["Python", "SciPy (optimize)", "Pandas", "NumPy", "Statsmodels", "Matplotlib / Seaborn", "Streamlit"],
    metrics: [
      { label: "Crescimento no Lucro", labelEn: "Profit Growth", value: "+17,0%", note: "+R$ 13,74M/mês (L-BFGS-B)", noteEn: "+R$ 13.74M/mo (L-BFGS-B)" },
      { label: "Retenção com 8 SKUs", labelEn: "8-SKU Retention", value: "97,7%", note: "-33% complexidade operacional", noteEn: "-33% operational complexity" },
      { label: "Painel Amostral", labelEn: "Survey Panel", value: "N = 420", note: "Desenho D-Optimal", noteEn: "D-Optimal design" },
      { label: "Segmentação Latente", labelEn: "Latent Segments", value: "2 Classes", note: "Entusiastas vs. Pragmáticos", noteEn: "Enthusiasts vs. Pragmatists" }
    ],
    outcome: "A otimização multivariada L-BFGS-B gerou um salto de +17,0% no lucro líquido mensal (de R$ 80,67M para R$ 94,41M na base analisada) ao explorar a elasticidade cruzada entre produtos e ajustar preços para cada segmento latente, com retenção de 97,7% do lucro mesmo após purga de 12 para 8 SKUs.",
    outcomeEn: "Multivariate L-BFGS-B optimization yielded a +17.0% net profit increase (from R$ 80.67M to R$ 94.41M in the analyzed baseline) by leveraging cross-price elasticity and segment preferences, while retaining 97.7% of maximum profit when pruning from 12 down to 8 active SKUs.",
    simulated: true,
    anonymizedDisclaimer: "Estudo real com dados descaracterizados, atributos mascarados e valores arredondados para preservar o sigilo comercial, mantendo a proporção aproximada de ganho observada (+17%) e o racional da modelagem.",
    anonymizedDisclaimerEn: "Real-world study with masked product attributes and rounded figures to preserve commercial confidentiality, maintaining the approximate observed profit gain (+17%) and modeling rationale.",
    visualType: "pricing",
    notebookPt: "/reports/analise_conjoint_e_otimizacao.html",
    notebookEn: "/reports/conjoint_analysis_and_portfolio_optimization.html",
    slides: [
      {
        id: "conjoint-slide-1",
        layout: "image-three-blocks",
        title: "Transição por SKU: Preço vs. Market Share vs. Lucro Estimado",
        titleEn: "SKU-Level Transition: Price vs Market Share vs Monthly Profit",
        imagePath: "/images/conjoint_results_table.png",
        textBlocks: [
          {
            title: "💰 Salto de +17,0% no Lucro Líquido",
            titleEn: "💰 +17.0% Net Profit Uplift",
            text: "A otimização multivariada de preços via L-BFGS-B elevou o lucro mensal de R$ 80,67M para R$ 94,41M (+R$ 13,74M/mês), capturando a elasticidade cruzada entre produtos e mitigando a fuga para opt-out.",
            textEn: "Multivariate price optimization via L-BFGS-B increased monthly profit from R$ 80.67M to R$ 94.41M (+R$ 13.74M/mo), capturing cross-price elasticity and mitigating opt-out leakage."
          },
          {
            title: "🎯 Calibração Fina por SKU",
            titleEn: "🎯 SKU-Specific Calibration",
            text: "Itens de alta margem e preferência inelástica (ex: SKU 05 e SKU 12) tiveram preços elevados com ganho expressivo de lucro, enquanto SKUs de entrada foram reposicionados para proteger o fluxo de clientes.",
            textEn: "High-margin, inelastic items (e.g., SKU 05 and SKU 12) had prices increased yielding substantial profit gains, while entry SKUs were repositioned to protect foot traffic."
          },
          {
            title: "🔒 Estudo Real Anonimizado",
            titleEn: "🔒 Anonymized Real-World Case",
            text: "Estudo real de precificação com atributos mascarados e valores arredondados para preservar o sigilo comercial, mantendo a proporção aproximada de ganho observada (+17%).",
            textEn: "Real-world pricing study with masked product attributes and rounded figures to preserve commercial confidentiality, maintaining approximate +17% gain proportions."
          }
        ]
      },
      {
        id: "conjoint-slide-2",
        layout: "image-three-blocks",
        title: "Segmentação por Classes Latentes & Disposição a Pagar (WTP)",
        titleEn: "Latent Class Segmentation & Willingness to Pay (WTP)",
        imagePath: "/images/conjoint_wtp_segment.png",
        textBlocks: [
          {
            title: "👥 2 Segmentos Comportamentais Claros",
            titleEn: "👥 2 Distinct Behavioral Segments",
            text: "O estimador EM (Expectation-Maximization) isolou com precisão dois perfis latentes de consumidores: Segmento A (Entusiastas focados em qualidade/artesanal) e Segmento B (Pragmáticos altamente sensíveis a preço).",
            textEn: "The EM (Expectation-Maximization) estimator isolated two latent consumer segments: Segment A (Quality-driven enthusiasts) and Segment B (Price-sensitive pragmatists)."
          },
          {
            title: "💵 Quantificação de Disposição a Pagar (WTP)",
            titleEn: "💵 Willingness to Pay (WTP) Quantification",
            text: "O valor monetário percebido por atributo revelou que o Segmento A aceita pagar até R$ 2.424 a mais pelo \"burger artesanal\" e R$ 1.258 pelo \"milkshake\", viabilizando estratégias de precificação premium sem risco de perda de share.",
            textEn: "Perceived monetary attribute valuation showed Segment A is willing to pay up to R$ 2,424 more for \"artisan burger\" and R$ 1,258 for \"gourmet shake\", enabling premium pricing without share erosion."
          },
          {
            title: "📊 Eliminação do Viés Médio",
            titleEn: "📊 Eliminating Average Aggregation Bias",
            text: "A modelagem conjunta por classes latentes superou as limitações do modelo MNL agregado clássico, evitando a armadilha de precificar para um 'cliente médio inexistente'.",
            textEn: "Latent class modeling avoided aggregate MNL bias, preventing the trap of pricing for a non-existent 'average customer'."
          }
        ]
      },
      {
        id: "conjoint-slide-3",
        layout: "image-three-blocks",
        title: "Otimização Combinatória de Assortment (Purga de SKUs)",
        titleEn: "Combinatorial Assortment Optimization (SKU Pruning)",
        imagePath: "/images/conjoint_sku_pruning.png",
        textBlocks: [
          {
            title: "✂️ 99,88% de Retenção com -1 SKU",
            titleEn: "✂️ 99.88% Retention with -1 SKU",
            text: "A eliminação do SKU 08 (identificado como produto canibalizador de baixa margem) praticamente não impactou o lucro total (retenção de 99,88%), transferindo a demanda para opções mais rentáveis.",
            textEn: "Removing SKU 08 (identified as a low-margin cannibalizing item) had virtually zero profit impact (99.88% retention), shifting demand to more profitable choices."
          },
          {
            title: "📦 97,67% de Retenção com 8 SKUs",
            titleEn: "📦 97.67% Retention with 8 SKUs",
            text: "Ao reduzir o catálogo de 12 para 8 SKUs ativos (-33% de complexidade de estoque e preparação), a empresa ainda retém 97,67% do faturamento total maximizado.",
            textEn: "Pruning the catalog from 12 to 8 active SKUs (-33% inventory and operational complexity) retains 97.67% of total maximized revenue."
          },
          {
            title: "⚡ Eficiência Operacional sem Perda de Margem",
            titleEn: "⚡ Lean Operations without Margin Loss",
            text: "A análise combinatorial permite aos diretores de produto tomar decisões embasadas de simplificação de menu com total previsibilidade do impacto financeiro.",
            textEn: "Combinatorial scanning enables product directors to make data-backed menu simplification decisions with full financial predictability."
          }
        ]
      },
      {
        id: "conjoint-slide-4",
        layout: "image-three-blocks",
        title: "Matriz Estratégica de Precificação e Portfólio (108 Combinações)",
        titleEn: "Strategic Pricing & Portfolio Matrix (108 Viable Combinations)",
        imagePath: "/images/conjoint_full_matrix.png",
        textBlocks: [
          {
            title: "⭐ Mapeamento de 4 Quadrantes",
            titleEn: "⭐ 4-Quadrant Strategic Mapping",
            text: "Classificação das 108 combinações viáveis em Estrelas (alto share e alta margem), Vacas Leiteiras, Interrogações e Itens a Descontinuar sob simulação Softmax simultânea.",
            textEn: "Classification of 108 valid configurations into Stars (high share and margin), Cash Cows, Question Marks, and Dogs under simultaneous Softmax simulation."
          },
          {
            title: "📐 Espaço Viável Restrito (Fatorial D-Optimal)",
            titleEn: "📐 Constrained Viable Space (D-Optimal)",
            text: "Exclusão de combinações proibidas do desenho fatorial completo, mapeando unicamente as configurações comercialmente viáveis para o negócio.",
            textEn: "Exclusion of prohibited combinations from full factorial design, mapping only commercially viable configurations."
          },
          {
            title: "🎯 Curva Teórica de Fronteira Eficiente",
            titleEn: "🎯 Efficient Frontier Curve",
            text: "Permite simular lançamentos futuros de novos produtos prevendo canibalização antes mesmo de entrar em produção.",
            textEn: "Enables simulating future product rollouts predicting cannibalization prior to production."
          }
        ]
      },
      {
        id: "conjoint-slide-5",
        layout: "image-three-blocks",
        title: "Simulador de Prateleira Interativo (Ferramenta de Apoio à Decisão)",
        titleEn: "Interactive Shelf Simulator (Decision Support Software)",
        imagePath: "/images/conjoint_shelf_simulator.png",
        textBlocks: [
          {
            title: "🎛️ Simulação em Tempo Real",
            titleEn: "🎛️ Real-Time Simulation Engine",
            text: "Interface executiva desenvolvida para permitir que gestores ajustem preços, ativem/desativem SKUs e visualizem curvas de elasticidade e lucro instantaneamente.",
            textEn: "Executive interface allowing managers to adjust prices, toggle SKUs, and inspect elasticity and profit curves instantaneously."
          },
          {
            title: "📈 Curvas de Demanda & Elasticidade Cruzada",
            titleEn: "📈 Demand Curves & Cross-Elasticity",
            text: "Cálculo reativo da redistribuição de market share e probabilidade de escolha conjunta integrando o motor econométrico de Classes Latentes.",
            textEn: "Reactive calculation of market share redistribution and joint choice probabilities powered by the Latent Class engine."
          },
          {
            title: "💼 Decisão de Negócio Sem Dependência Técnica",
            titleEn: "💼 Self-Serve Business Decision Making",
            text: "Transposição de um modelo matemático complexo em uma ferramenta self-service intuitiva para times comerciais e de precificação.",
            textEn: "Translating a complex mathematical model into an intuitive self-service tool for commercial and pricing teams."
          }
        ]
      }
    ]
  },
  {
    id: "collinearity-suppression-ppm",
    title: "Tratamento de Supressão e Colinearidade Extrema em Modelo Comportamental",
    titleEn: "Treatment of Statistical Suppression & Extreme Collinearity in Behavioral Modeling",
    shortTitle: "Tratamento de Colinearidade Extrema",
    shortTitleEn: "Extreme Collinearity Treatment",
    category: "Diagnóstico Econométrico & Métodos Robustos",
    categoryEn: "Econometric Diagnostics & Robust Methods",
    summary: "Diagnóstico avançado de supressão estatística clássica e colinearidade extrema mascarada em modelos de escolha discreta (Push-Pull-Mooring, N=500). Superação do paradoxo do VIF baixo (<2,1) através do Critério Analítico de Conger (1974), teste de colapso via Bootstrap Não-Paramétrico (B=1.000, p<0,0001) e Análise de Importância Relativa via Decomposição de Shapley do Pseudo-R² de McFadden combinada à Regressão Logística Binária Hierárquica em Blocos Controlada por Covariáveis.",
    summaryEn: "Advanced diagnosis of classical statistical suppression and masked extreme collinearity in discrete choice models (Push-Pull-Mooring, N=500). Resolving the low VIF paradox (<2.1) via Conger's Analytical Criterion (1974), Non-Parametric Bootstrap collapse test (B=1,000, p<0.0001), and Relative Importance Analysis via McFadden's Pseudo-R² Shapley Decomposition combined with Covariate-Controlled Block-Hierarchical Binary Logistic Regression.",
    problem: "Em modelos comportamentais empíricos, dimensões preditoras são frequentemente intrinsecamente correlacionadas. Ao ajustar a regressão logística hierárquica clássica, a inclusão da percepção de atratividade externa (Pull) causou o colapso estatístico das dores do produto (Push), despencando seu Odds Ratio de 1,81 (p<0,001) para 0,86 (p=0,361), gerando uma espúria inversão de sinal (como se defeitos aumentassem a retenção). O diagnóstico convencional via VIF falhou totalmente (VIF < 2,1), pois a patologia decorria da sobreposição triangular informacional com o desfecho (r=0,689), exigindo provas formais de supressão de Conger, reamostragem por bootstrap e partição cooperativa de variância via Shapley.",
    problemEn: "In empirical behavioral models, predictors often share severe latent correlation. When estimating standard hierarchical logistic regression, adding competitor attraction (Pull) triggered the statistical collapse of product pain points (Push), plummeting its Odds Ratio from 1.81 (p<0.001) down to 0.86 (p=0.361) with an anomalous sign reversal. Standard VIF diagnostics completely missed the issue (VIF < 2.1), as variance absorption was driven by triangular covariance with the outcome (r=0.689), necessitating Conger's analytical suppression proof, non-parametric bootstrap testing, and cooperative Shapley variance partitioning.",
    methods: ["Diagnóstico de Supressão Clássica", "Critério Analítico de Conger (1974)", "Bootstrap Não-Paramétrico (B=1.000)", "Decomposição de Shapley (LMG / Dominância)", "Pseudo-R² de McFadden", "Regressão Logística Binária Hierárquica", "Logit Bivariado Ajustado por Covariáveis", "Modelagem Push-Pull-Mooring (PPM)"],
    applications: ["Diagnóstico de Multicolinearidade Oculta", "Decomposição de Poder Preditivo a 100%", "Modelagem de Churn e Migração de Marca", "Key Driver Analysis Descontaminada", "Resgate de Regressores Suprimidos"],
    techniques: [
      "Teste de Colapso de Beta por Bootstrap Não-Paramétrico",
      "Key Driver Analysis",
      "Regressão Estrutural Hierárquica",
      "Decomposição de Shapley (Análise de Dominância)",
      "Critério Analítico de Conger (1974)"
    ],
    tools: ["Python", "Statsmodels", "SciPy (stats)", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib / Seaborn"],
    metrics: [
      { label: "Colapso do Beta (Δβ)", labelEn: "Beta Collapse (Δβ)", value: "0,748", note: "IC 95%: [0,561 a 1,007]", noteEn: "95% CI: [0.561 to 1.007]" },
      { label: "Significância Bootstrap", labelEn: "Bootstrap p-value", value: "p < 0,0001", note: "B = 1.000 replicações", noteEn: "B = 1,000 replications" },
      { label: "Dominância Macro (Shapley)", labelEn: "Shapley Dominance", value: "55% | 37% | 8%", note: "Pull 55% • Mooring 37% • Push 8%", noteEn: "Pull 55% • Mooring 37% • Push 8%" },
      { label: "Discriminação (AUC-ROC)", labelEn: "AUC-ROC Discrimination", value: "0,788", note: "McFadden R²: 19,0%", noteEn: "McFadden R²: 19.0%" },
      { label: "Drivers Granulares", labelEn: "Granular Drivers", value: "20 Itens", note: "Logit Bivariado Controlado", noteEn: "Covariate-Adjusted Logit" }
    ],
    outcome: "A Decomposição de Shapley sobre o Pseudo-R² de McFadden avaliou todos os 8 submodelos possíveis e resgatou a partição justa de variância a 100% (55,0% Pull, 37,3% Mooring e 7,6% Push), enquanto a Key Driver Analysis bivariada controlada por demografia isolou os Odds Ratios puros por +1 DP sem distorção por multicolinearidade.",
    outcomeEn: "McFadden Pseudo-R² Shapley Decomposition evaluated all 8 submodels, restoring a 100% fair variance partition (55.0% Pull, 37.3% Mooring, 7.6% Push), while demographic-controlled bivariate Key Driver Analysis isolated pure odds ratios per +1 SD without collinearity distortion.",
    simulated: true,
    anonymizedDisclaimer: "Estudo real sobre migração de marca com variáveis e atributos mascarados para preservar o sigilo do cliente, mantendo integralmente a estrutura matemática, as matrizes de covariância e a interpretabilidade dos estimadores.",
    anonymizedDisclaimerEn: "Real-world brand migration study with masked attributes to preserve client confidentiality, preserving the exact mathematical structure, covariance matrices, and estimator interpretability.",
    visualType: "ab-bars",
    notebookPt: "/reports/tratamento_colinearidade_e_supressao.html",
    notebookEn: "/reports/treatment_of_extreme_collinearity_and_suppression.html",
    slides: [
      {
        id: "collinearity-slide-1",
        layout: "image-three-blocks",
        title: "Forest Plot de Key Drivers: Odds Ratios Descontaminados por Covariáveis (N=500)",
        titleEn: "Key Drivers Forest Plot: Covariate-Adjusted Odds Ratios (N=500)",
        imagePath: "/images/colinearidade_forest_plot.png",
        textBlocks: [
          {
            title: "🎯 Resgate da Força Pura por Item",
            titleEn: "🎯 Pure Item-Level Effect Recovery",
            text: "Modelagem bivariada independente controlada rigorosamente por idade, renda e tempo de posse, eliminando a autocanibalização entre variáveis correlacionadas e preservando a significância individual.",
            textEn: "Independent bivariate modeling strictly controlled for age, income, and ownership tenure, eliminating mutual cannibalization among correlated features and preserving individual significance."
          },
          {
            title: "📊 Separação de Vetores Opostos",
            titleEn: "📊 Antagonistic Vector Isolation",
            text: "A modelagem bivariada controlada permite mapear simultaneamente vetores de atratividade externa e barreiras de saída em uma mesma escala padronizada de Odds Ratios por +1 DP, isolando a força pura de cada atributo.",
            textEn: "Controlled bivariate estimation maps opposing forces simultaneously—separating outward attraction drivers from retention barriers on a standardized scale of Odds Ratios per +1 SD, isolating pure item strength."
          },
          {
            title: "⚖️ Integração Multinível",
            titleEn: "⚖️ Multi-Level Integration",
            text: "Conexão direta entre o Odds Ratio micro (tamanho de efeito do atributo específico) e o peso macro de Shapley (dominância estrutural do bloco a 100%), permitindo priorização hierárquica precisa.",
            textEn: "Direct link between micro-level Odds Ratios (specific attribute effect size) and macro Shapley dominance (structural block weight summing to 100%), enabling precise hierarchical prioritization."
          }
        ]
      },
      {
        id: "collinearity-slide-2",
        layout: "four-blocks",
        title: "Diagnóstico Econométrico & Decomposição de Shapley (Resolução em 4 Etapas)",
        titleEn: "Econometric Diagnostics & Shapley Decomposition (4-Stage Resolution)",
        textBlocks: [
          {
            title: "🚨 O Colapso do Push & Inversão Espúria",
            titleEn: "🚨 Push Collapse & Spurious Sign Inversion",
            text: "No modelo clássico, adicionar Pull faz o Odds Ratio de Push despencar de 1,81 (p < 0,001) para 0,86 (p = 0,361), gerando uma inversão patológica de sinal onde ter problemas no produto pareceria aumentar a fidelidade do cliente.",
            textEn: "In standard regression, adding Pull causes Push Odds Ratio to collapse from 1.81 (p < 0.001) down to 0.86 (p = 0.361), producing a pathological sign inversion falsely suggesting product defects increase loyalty."
          },
          {
            title: "🔍 O Paradoxo do VIF Baixo (VIF < 2,1)",
            titleEn: "🔍 The Low VIF Paradox (VIF < 2.1)",
            text: "O diagnóstico convencional via Variance Inflation Factor reportou valores baixos (<2,1), gerando a falsa premissa de ortogonalidade. O VIF mede apenas a inflação na matriz VCOV, sendo cego à sobreposição triangular com a variável dependente (r = 0,689).",
            textEn: "Standard Variance Inflation Factor reported low values (<2.1), creating a false assumption of orthogonality. VIF only captures inflation in the VCOV matrix, remaining blind to triangular overlap with the response variable (r = 0.689)."
          },
          {
            title: "📐 Prova de Conger & Bootstrap (p < 0,0001)",
            titleEn: "📐 Conger Proof & Bootstrap (p < 0.0001)",
            text: "O Critério de Conger (1974) comprovou que r(Y,Pull) × r(Push,Pull) = 0,2101 > r(Y,Push) = 0,1476 força algebricamente o colapso. O Bootstrap não-paramétrico (B=1.000) confirmou empiricamente Δβ = 0,748 (IC 95%: [0,561 a 1,007], p < 0,0001).",
            textEn: "Conger's Criterion (1974) proved that r(Y,Pull) × r(Push,Pull) = 0.2101 > r(Y,Push) = 0.1476 algebraically forces sign reversal. Non-parametric bootstrap (B=1,000) confirmed Δβ = 0.748 (95% CI: [0.561 to 1.007], p < 0.0001)."
          },
          {
            title: "🏆 Decomposição de Shapley do Pseudo-R² (2³ Submodelos)",
            titleEn: "🏆 Pseudo-R² Shapley Decomposition (2³ Submodels)",
            text: "A partição combinatória cooperativa avaliou todos os 8 submodelos e resgatou a dominância real a 100%: Pull (55,0%), Mooring (37,3%) e Push (7,6%), atingindo McFadden R² de 19,0% (equivalente a R² de 70%-90% em OLS) e AUC-ROC de 0,788.",
            textEn: "Cooperative combinatorial partitioning evaluated all 8 submodels, restoring true 100% dominance: Pull (55.0%), Mooring (37.3%), and Push (7.6%), achieving McFadden R² of 19.0% (equivalent to 70%-90% R² in OLS) and AUC-ROC of 0.788."
          }
        ]
      }
    ]
  }
];
