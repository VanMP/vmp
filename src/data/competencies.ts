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
    businessImpact: "Provar com rigor científico se uma mudança de produto, nova funcionalidade, alteração de política de preços ou campanha realmente gerou receita ou se o resultado teria acontecido de qualquer forma. Permite que a liderança tome decisões seguras antes de comprometer o negócio, avaliando matematicamente o risco financeiro de tomar a decisão errada e viabilizando testes confiáveis mesmo quando não é possível criar um grupo de controle tradicional.",
    businessImpactEn: "Rigorously proving with scientific methods whether a product change, new feature, pricing update, or campaign genuinely drove incremental revenue or if the outcome would have happened anyway. Enables leadership to make sound go/no-go decisions before committing capital, mathematically bounding the financial risk of false positives and enabling trustworthy causal tests even when classic control groups are unavailable.",
    marketTerms: [
      "Validação de Lançamentos de Produto (Decisões de Go/No-Go)",
      "Mensuração de Incrementalidade Real vs. Coincidência",
      "Avaliação de Impacto de Políticas & Mudanças Regulatórias",
      "Testes Quase-Experimentais em Pilotos Regionais",
      "Mitigação de Risco Financeiro Sob Incerteza (Cálculo de Perda Esperada)",
      "Otimização de Eficiência Amostral & Redução de Custo de Teste",
      "Identificação de Efeitos Heterogêneos (Quem realmente responde à mudança)",
      "Auditoria & Prevenção de Viés de Seleção em Métricas de Negócio"
    ],
    marketTermsEn: [
      "Product Launch Validation (Go/No-Go Decisions)",
      "True Incrementality vs. Noise Measurement",
      "Policy & Regulatory Change Impact Assessment",
      "Quasi-Experimental Tests in Regional Pilots",
      "Financial Risk Mitigation Under Uncertainty (Expected Loss Calculation)",
      "Sample Efficiency Optimization & Test Cost Reduction",
      "Heterogeneous Treatment Effect Identification",
      "Selection Bias Auditing & Prevention in Business Metrics"
    ],
    technicalArsenal: [
      "Desenho Experimental Ótimo (D-Optimal Design) & Desenhos Fatoriais",
      "Redução de Variância via Covariáveis (CUPED)",
      "Inferência Bayesiana de Decisão (ROPE, Intervalos HDI & Perda Esperada)",
      "Controle Sintético Generalizado (Synthetic Control Methods)",
      "Diferenças em Diferenças (DiD) & Estudos de Eventos",
      "Pareamento por Escore de Propensão (Propensity Score Matching - PSM)",
      "Double Machine Learning (DML) & Estimação de Efeitos Heterogêneos (CATE)",
      "Testes Sequenciais & Monitoramento Contínuo sem Inflação de Falsos Positivos",
      "Análise de Poder Estatístico, MDE (Minimum Detectable Effect) & Amostragem"
    ],
    technicalArsenalEn: [
      "Optimal Experimental Design (D-Optimal) & Factorial Designs",
      "Variance Reduction via Covariates (CUPED)",
      "Bayesian Decision Inference (ROPE, HDI Intervals & Expected Loss)",
      "Generalized Synthetic Control Methods",
      "Difference-in-Differences (DiD) & Event Studies",
      "Propensity Score Matching (PSM)",
      "Double Machine Learning (DML) & Heterogeneous Treatment Effects (CATE)",
      "Sequential Testing & Continuous Monitoring without Alpha Inflation",
      "Statistical Power Analysis, MDE (Minimum Detectable Effect) & Sample Sizing"
    ],
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "pricing-demand-portfolio",
    number: 2,
    title: "Produto & Estratégia de Portfólio",
    titleEn: "Product & Portfolio Strategy",
    tagline: "Otimização de mix, escolha discreta, valoração de atributos e precificação",
    taglineEn: "Mix optimization, discrete choice, attribute valuation, and pricing",
    icon: "currency-dollar",
    businessImpact: "Descobrir a combinação ideal de funcionalidades, versões e preços para maximizar a receita e a margem da empresa sem canibalizar as próprias vendas. Ajuda a definir quais produtos ou planos manter, cortar ou lançar, quantificando exatamente quanto o consumidor aceita pagar por cada diferencial e simulando a migração de clientes em diferentes cenários de concorrência.",
    businessImpactEn: "Discovering the optimal combination of features, tiers, and price points to maximize company revenue and profit margins without self-cannibalization. Guides decisions on which products or plans to keep, prune, or launch by quantifying exact consumer willingness to pay for distinct attributes and simulating customer switching across competitive scenarios.",
    marketTerms: [
      "Estratégia de Precificação & Elasticidade de Demanda",
      "Otimização de Portfólio & Mix de Produtos",
      "Valoração de Funcionalidades & Pacotes (Bundling)",
      "Simulação de Cenários Competitivos & Market Share",
      "Análise de Canibalização entre Produtos/Planos",
      "Estimativa de Disposição a Pagar (Willingness to Pay - WTP)",
      "Racionalização de SKUs & Engenharia de Menu",
      "Validação de Demanda para Novos Lançamentos"
    ],
    marketTermsEn: [
      "Pricing Strategy & Price Elasticity of Demand",
      "Portfolio & Product Mix Optimization",
      "Feature Valuation & Product Bundling",
      "Competitive Scenario Simulation & Market Share",
      "Cannibalization Analysis Across Products/Tiers",
      "Willingness to Pay Estimation (WTP)",
      "SKU Rationalization & Menu Engineering",
      "Demand Validation for New Product Launches"
    ],
    technicalArsenal: [
      "Modelos de Escolha Discreta com Classes Latentes (LC-MNL)",
      "Logit Multinomial & Modelos de Escolha Hierárquica",
      "Decomposição de Utilidade Marginal (Part-Worth Utilities)",
      "Matrizes de Elasticidade Própria e Cruzada de Demanda",
      "Simulação Contrafactual de Partilha de Escolha (Choice Share)",
      "Otimização Numérica Não-Linear Restrita (L-BFGS-B / SciPy)",
      "Curvas de Sensibilidade de Preço & Demanda Compensada"
    ],
    technicalArsenalEn: [
      "Discrete Choice Models with Latent Classes (LC-MNL)",
      "Multinomial Logit & Hierarchical Choice Models",
      "Marginal Utility Decomposition (Part-Worth Utilities)",
      "Own-Price & Cross-Price Demand Elasticity Matrices",
      "Counterfactual Choice Share Simulation",
      "Constrained Non-Linear Numerical Optimization (L-BFGS-B / SciPy)",
      "Price Sensitivity Curves & Compensated Demand"
    ],
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "customer-lifecycle-retention",
    number: 3,
    title: "Experiência do Cliente, Satisfação & Retenção",
    titleEn: "Customer Experience, Satisfaction & Retention",
    tagline: "Acompanhamento longitudinal, jornada, prevenção de churn e otimização de LTV",
    taglineEn: "Longitudinal tracking, customer journey, churn prevention, and LTV optimization",
    icon: "user-group",
    businessImpact: "Acompanhar como a percepção, satisfação e a lealdade do cliente evoluem ao longo do tempo, medindo o peso real de cada ponto de contato da jornada do primeiro uso ao atendimento e pós-venda. O foco é descobrir com antecedência quem corre risco de cancelar ou esfriar a relação, sabendo exatamente em quais gargalos investir para melhorar a satisfação, prolongar o tempo de retenção e aumentar o valor financeiro gerado pelo cliente ao longo da vida (LTV).",
    businessImpactEn: "Tracking how customer perception, satisfaction, and loyalty evolve over time by measuring the true weight of each journey touchpoint—from first onboarding to support and post-sales. The focus lies in identifying early churn risks or disengagement, revealing precisely which bottlenecks to address to boost satisfaction, extend retention lifespan, and maximize Customer Lifetime Value (LTV).",
    marketTerms: [
      "Acompanhamento Longitudinal de Satisfação (CSAT, NPS, CES)",
      "Mapeamento & Peso de Touchpoints na Jornada",
      "Prevenção & Diagnóstico de Churn (Cancelamento)",
      "Análise de Importância vs. Desempenho (Onde agir primeiro)",
      "Valor do Tempo de Vida do Cliente (LTV / CLV)",
      "Diagnóstico de Fricção & Atrito no Atendimento",
      "Segmentação Comportamental & Saúde da Base",
      "Priorização de Melhorias de Produto e Pós-Venda"
    ],
    marketTermsEn: [
      "Longitudinal Satisfaction Tracking (CSAT, NPS, CES)",
      "Touchpoint Journey Mapping & Weighting",
      "Churn Prevention & Diagnosis",
      "Importance-Performance Analysis (Priority Actions)",
      "Customer Lifetime Value (LTV / CLV)",
      "Support Friction & Friction Point Diagnostics",
      "Behavioral Segmentation & Base Health",
      "Product & Post-Sales Improvement Prioritization"
    ],
    technicalArsenal: [
      "Importância Derivada vs. Declarada (Derived vs. Stated Importance)",
      "Modelagem Longitudinal & Dados em Painel (Painéis Contínuos)",
      "Importance-Performance Analysis (IPA)",
      "Penalty-Reward Contrast Analysis (Impacto Assimétrico)",
      "Penalty-Reward Analysis (Análise de Fatores Críticos e Encantadores)",
      "Modelos de Duração em Tempo Acelerado (AFT)",
      "Modelagem de Equações Estruturais (SEM para Construtos de Satisfação)",
      "Cadeias de Transição e Modelos de Estados Latentes (Ciclo de Engajamento)"
    ],
    technicalArsenalEn: [
      "Derived vs. Stated Importance Modeling",
      "Longitudinal & Panel Data Modeling (Continuous Panels)",
      "Importance-Performance Analysis (IPA)",
      "Penalty-Reward Contrast Analysis (Asymmetric Impact)",
      "Penalty-Reward Analysis (Delighters & Critical Hygiene Factors)",
      "Accelerated Failure Time Models (AFT)",
      "Structural Equation Modeling (SEM for Satisfaction Constructs)",
      "Transition Chains & Latent State Models (Engagement Cycle)"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm"]
  },
  {
    id: "marketing-science-brand-attribution",
    number: 4,
    title: "Marketing, Marca & Impacto",
    titleEn: "Marketing, Brand & Impact",
    tagline: "Decomposição de Shapley, Key Driver Analysis e diagnóstico de multicolinearidade",
    taglineEn: "Shapley decomposition, Key Driver Analysis, and strict multicollinearity diagnosis",
    icon: "presentation-chart",
    businessImpact: "Mostrar onde colocar ou cortar orçamento de marketing para gerar mais vendas sem desperdício, e identificar com precisão o que realmente faz o cliente preferir a sua marca em vez do concorrente. Descobrir o que os clientes pensam da sua marca, o quanto ela alcança e o que faz seu cliente ficar nela ou trocar.",
    businessImpactEn: "Revealing where to allocate or trim marketing spend to drive revenue without waste, and accurately identifying what truly drives customers to choose your brand over competitors. Uncovering how customers perceive your brand, its real reach, and what drives customer retention versus brand switching.",
    marketTerms: [
      "Marketing Mix Modeling (MMM)",
      "Atribuição Causal & Eficácia de Canais",
      "Key Driver Analysis (Drivers de Marca & NPS)",
      "Mapas de Posicionamento de Marca ou Produto",
      "Otimização & Alocação de Orçamento de Mídia",
      "Curvas de Saturação & Retornos Decrescentes",
      "Mensuração de Incrementalidade (Brand Lift)",
      "Diagnóstico de Brand Equity & Migração de Marca",
      "Auditoria de Efeito Carregado de Mídia (Adstock)"
    ],
    marketTermsEn: [
      "Marketing Mix Modeling (MMM)",
      "Causal Attribution & Channel Effectiveness",
      "Key Driver Analysis (Brand Drivers & NPS)",
      "Brand & Product Positioning Maps",
      "Media Budget Optimization & Allocation",
      "Saturation Curves & Diminishing Returns",
      "Incrementality Measurement (Brand Lift)",
      "Brand Equity & Migration Diagnostics",
      "Media Carryover Audit (Adstock)"
    ],
    technicalArsenal: [
      "Decomposição de Shapley (LMG / Dominance Analysis)",
      "Transformações de Adstock (Decaimento Geométrico & Weibull)",
      "Curvas de Saturação Não-Lineares (Função de Hill)",
      "Diagnóstico de Multicolinearidade (VIF & Matriz de Condição)",
      "Análise de Correspondência Múltipla (MCA)",
      "Regressão Regularizada Penalizada (Ridge, Lasso & ElasticNet)",
      "Modelos Aditivos Generalizados (GAM)",
      "Modelagem de Equações Estruturais (SEM)"
    ],
    technicalArsenalEn: [
      "Shapley Decomposition (LMG / Dominance Analysis)",
      "Adstock Transformations (Geometric & Weibull Decay)",
      "Non-Linear Saturation Curves (Hill Function)",
      "Multicollinearity Diagnosis (VIF & Condition Matrix)",
      "Multiple Correspondence Analysis (MCA)",
      "Penalized Regularized Regression (Ridge, Lasso & ElasticNet)",
      "Generalized Additive Models (GAM)",
      "Structural Equation Modeling (SEM)"
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
    businessImpact: "Extrair o sinal real e a direção subjacente de métricas críticas (financeiras, operacionais, de produto ou mercado), isolando ruídos estocásticos transitórios e oscilações sazonais sobrepostas. Permite dimensionar recursos com antecedência: desde capacidade de atendimento e infraestrutura computacional até gestão de estoques e liquidez de caixa, gerando projeções com intervalos analíticos de incerteza e identificando em tempo real anomalias pontuais ou quebras permanentes de comportamento no sistema.",
    businessImpactEn: "Extracting the true signal and underlying direction of critical metrics (financial, operational, product, or market), isolating transient stochastic noise and overlapping seasonal swings. Enables proactive resource allocation—from customer support staffing and compute infrastructure to inventory management and cash liquidity—by generating forecasts with analytical uncertainty intervals while identifying point anomalies or permanent structural breaks in real time.",
    marketTerms: [
      "Previsão de Demanda & Capacidade",
      "Dimensionamento Operacional & Recursos",
      "Detecção de Anomalias & Incidentes",
      "Monitoramento de Tendências Estruturais",
      "Identificação de Quebras de Regime",
      "Planejamento Orçamentário & Métricas de Produto",
      "Decomposição de Sinal vs. Ruído",
      "Extração de Sensibilidade Dinâmica"
    ],
    marketTermsEn: [
      "Demand & Capacity Forecasting",
      "Operational & Resource Sizing",
      "Anomaly & Incident Detection",
      "Structural Trend Monitoring",
      "Regime Shift Detection",
      "Budget Planning & Product Metrics",
      "Signal vs. Noise Decomposition",
      "Dynamic Sensitivity Extraction"
    ],
    technicalArsenal: [
      "Modelos em Espaço de Estados (SSM)",
      "Filtro e Suavizador de Kalman (RTS)",
      "Modelos Estruturais / Componentes Não Observados",
      "Parâmetros Variantes no Tempo (TVP)",
      "Sazonalidade Trigonométrica (Harmônicos de Fourier)",
      "Tendência Amortecida (Damped Trend)",
      "Família ARIMA / SARIMAX",
      "Intervalos de Predição Analíticos"
    ],
    technicalArsenalEn: [
      "State-Space Models (SSM)",
      "Kalman Filter & RTS Smoother",
      "Structural / Unobserved Components Models (UCM)",
      "Time-Varying Parameters (TVP)",
      "Trigonometric Seasonality (Fourier Harmonics)",
      "Damped Trend",
      "ARIMA / SARIMAX Family",
      "Analytical Prediction Intervals"
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
    businessImpact: "Construir arquiteturas preditivas supervisionadas (árvores de gradiente e redes neurais densas) capazes de antecipar comportamentos, detectar anomalias e classificar eventos complexos de negócio em escala. O foco reside em unir alta acurácia preditiva à calibração rigorosa de probabilidades e otimização de matriz de custo, garantindo que cada linha de corte gere valor econômico direto.",
    businessImpactEn: "Building supervised predictive architectures (gradient boosted trees and dense neural networks) capable of anticipating behaviors, detecting anomalies, and classifying complex business events at scale. The focus lies in pairing high predictive accuracy with rigorous probability calibration and cost-matrix threshold tuning, ensuring every operational cutoff delivers direct financial value.",
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
  },
  {
    id: "assumptions-auditing-bias-correction",
    number: 8,
    title: "Auditoria de Premissas, Correção de Viés e Estimação Consistente em Dados Reais",
    titleEn: "Assumption Auditing, Bias Correction & Consistent Estimation in Real Data",
    tagline: "Diagnósticos de premissas, correção de viés de não-resposta e estimadores robustos",
    taglineEn: "Assumption diagnostics, non-response bias correction, and robust estimators",
    icon: "shield-check",
    businessImpact: "Garantir que números, pesquisas e modelos reflitam a realidade econômica sem serem contaminados por distorções amostrais, abandono de respondentes ou quebra de pressupostos matemáticos. Audita criticamente as bases de dados e aplica correções estatísticas estritas para que a liderança tome decisões sobre dados confiáveis, prevenindo conclusões ilusórias causadas por variâncias instáveis, viés de seleção ou multicolinearidade severa.",
    businessImpactEn: "Ensuring figures, market surveys, and models reflect true economic reality rather than being distorted by sample attrition, non-response bias, or violated mathematical assumptions. Rigorously audits data foundations and applies robust statistical corrections so leadership acts on trustworthy signals, eliminating false conclusions driven by heteroskedasticity, selection bias, or severe multicollinearity.",
    marketTerms: [
      "Isolamento de Elasticidade sem Distorções",
      "Correção de Viés de Não-Resposta & Abandono",
      "Calibração de Cotas & Amostras Desbalanceadas",
      "Quantificação de Incerteza para Decisão Executiva",
      "Auditoria Metodológica Independente",
      "Demonstração de Qualidade de Modelos"
    ],
    marketTermsEn: [
      "Distortion-Free Elasticity Isolation",
      "Non-Response & Attrition Bias Correction",
      "Quota Calibration & Imbalanced Sample Weighting",
      "Uncertainty Quantification for Executive Decision-Making",
      "Independent Methodological Auditing",
      "Model Quality & Robustness Demonstration"
    ],
    technicalArsenal: [
      "Matrizes de covariância sanduíche consistentes (Huber-White / HC0, HC1, HC2 e HC3) e estimadores HAC (Newey-West)",
      "Diagnósticos Espectrais de Multicolinearidade (VIF)",
      "Teste de Supressão de Conger",
      "Regressão Censurada e Truncada (Tobit)",
      "Pós-estratificação iterativa (Raking / IPW)",
      "Pesos Inversos de Probabilidade (IPW)",
      "Testes formais de homocedasticidade, normalidade residual e linearidade funcional"
    ],
    technicalArsenalEn: [
      "Consistent Sandwich Covariance Matrices (Huber-White / HC0-HC3) & HAC Estimators (Newey-West)",
      "Spectral Multicollinearity Diagnostics (VIF)",
      "Conger's Suppression Test",
      "Censored & Truncated Regression (Tobit Models)",
      "Iterative Post-Stratification (Raking / IPW)",
      "Inverse Probability Weighting (IPW)",
      "Formal Tests for Homoskedasticity, Residual Normality & Functional Linearity"
    ],
    relatedProjectIds: ["collinearity-suppression-ppm", "bayesian-promotions"]
  }
];

