export type StackItem = {
  name: string;
  category: "Python" | "R" | "Aquisição de Dados" | "Visualização";
  categoryEn: "Python" | "R" | "Data Acquisition" | "Visualization";
  note: string;
  noteEn: string;
};

export const stackItems: StackItem[] = [
  // Python
  {
    name: "Python",
    category: "Python",
    categoryEn: "Python",
    note: "Linguagem central para análise estatística, desenvolvimento de pipelines analíticos, modelagem preditiva e automação de fluxos quantitativos.",
    noteEn: "Core language for statistical analysis, analytical pipelines, predictive modeling, and quantitative workflow automation."
  },
  {
    name: "Pandas",
    category: "Python",
    categoryEn: "Python",
    note: "Manipulação, limpeza, estruturação e transformação tabular de dados em larga escala com foco em eficiência e reprodutibilidade.",
    noteEn: "Large-scale tabular data manipulation, cleaning, structuring, and transformation focused on efficiency and reproducibility."
  },
  {
    name: "NumPy & SciPy",
    category: "Python",
    categoryEn: "Python",
    note: "Computação científica, álgebra linear matricial, distribuições de probabilidade e otimização numérica não-linear (L-BFGS-B, SLSQP).",
    noteEn: "Scientific computing, matrix linear algebra, probability distributions, and constrained non-linear numerical optimization."
  },
  {
    name: "Scikit-learn",
    category: "Python",
    categoryEn: "Python",
    note: "Modelagem preditiva supervisionada e não-supervisionada, pipelines de validação cruzada, métricas de avaliação e calibração de probabilidades.",
    noteEn: "Supervised and unsupervised predictive modeling, cross-validation pipelines, evaluation metrics, and probability calibration."
  },
  {
    name: "Statsmodels",
    category: "Python",
    categoryEn: "Python",
    note: "Modelagem econométrica e inferência estatística rigorosa: regressões lineares e logísticas (GLM), testes de hipóteses e diagnósticos de colinearidade.",
    noteEn: "Econometric modeling and rigorous statistical inference: GLMs, logistic regressions, hypothesis testing, and collinearity diagnostics."
  },
  {
    name: "Prophet",
    category: "Python",
    categoryEn: "Python",
    note: "Modelagem e projeção de séries temporais com decomposição aditiva de tendência, múltiplos padrões sazonais e impacto de feriados/eventos.",
    noteEn: "Time series forecasting with additive trend decomposition, multi-period seasonality, and holiday/event impact modeling."
  },
  {
    name: "PLN (Processamento de Texto)",
    category: "Python",
    categoryEn: "Python",
    note: "Processamento de Linguagem Natural: extração de entidades (NER), embeddings semânticos, tokenização, regex e mineração de texto não estruturado.",
    noteEn: "Natural Language Processing: named entity recognition (NER), semantic embeddings, tokenization, regex, and unstructured text mining."
  },

  // R
  {
    name: "R",
    category: "R",
    categoryEn: "R",
    note: "Ambiente de computação estatística especializado para inferência rigorosa, delineamento experimental, bioestatística e testes de hipóteses.",
    noteEn: "Specialized statistical computing environment for rigorous inference, experimental design, biostatistics, and hypothesis testing."
  },
  {
    name: "Tidyverse",
    category: "R",
    categoryEn: "R",
    note: "Ecossistema moderno para manipulação e estruturação consistente de dados (dplyr, tidyr, purrr) com pipelines funcionais reprodutíveis.",
    noteEn: "Modern ecosystem for expressive data manipulation, transformation, and reproducible research (dplyr, tidyr, purrr)."
  },
  {
    name: "ggplot2",
    category: "R",
    categoryEn: "R",
    note: "Implementação da Gramática dos Gráficos para diagnóstico visual aprofundado de modelos, dispersão multivariada e gráficos de publicação.",
    noteEn: "Grammar of Graphics implementation for in-depth model diagnostics, multivariate distributions, and publication-ready graphics."
  },
  {
    name: "lme4 & Survival",
    category: "R",
    categoryEn: "R",
    note: "Modelos lineares e generalizados de efeitos mistos (hierárquicos/multinível) e análise de sobrevivência e tempo até o evento (Kaplan-Meier, Cox).",
    noteEn: "Linear and generalized mixed-effects models (hierarchical/multilevel) and survival analysis (Kaplan-Meier, Cox proportional hazards)."
  },
  {
    name: "Forecast & Fable",
    category: "R",
    categoryEn: "R",
    note: "Estruturas especializadas para análise de séries temporais: modelos ARIMA/SARIMAX, suavização exponencial (ETS) e decomposição estrutural.",
    noteEn: "Specialized time series forecasting frameworks: ARIMA/SARIMAX, exponential smoothing (ETS), and structural decomposition."
  },

  // Aquisição de Dados
  {
    name: "SQL",
    category: "Aquisição de Dados",
    categoryEn: "Data Acquisition",
    note: "Construção de consultas analíticas avançadas (Window Functions, CTEs, agregações complexas e joins) em bancos transacionais e analíticos.",
    noteEn: "Advanced analytical querying (Window Functions, CTEs, complex aggregations, and joins) across transactional and analytical databases."
  },
  {
    name: "Snowflake",
    category: "Aquisição de Dados",
    categoryEn: "Data Acquisition",
    note: "Data warehouse em nuvem para armazenamento corporativo, consultas analíticas concorrentes de alto desempenho e separação de storage e compute.",
    noteEn: "Cloud enterprise data warehouse for high-concurrency analytical queries, scalable storage, and decoupled compute architectures."
  },
  {
    name: "Google BigQuery",
    category: "Aquisição de Dados",
    categoryEn: "Data Acquisition",
    note: "Plataforma de data warehouse serverless para processamento distribuído (OLAP) e análise massiva de dados em escala de petabytes via SQL.",
    noteEn: "Serverless cloud data warehouse for distributed analytical processing (OLAP) and petabyte-scale data analysis using SQL."
  },
  {
    name: "Bancos Não Estruturados",
    category: "Aquisição de Dados",
    categoryEn: "Data Acquisition",
    note: "Ingestão, modelagem e extração de dados semiestruturados e não estruturados (documentos JSON, logs e NoSQL) para pipelines analíticos.",
    noteEn: "Ingestion, modeling, and extraction of semi-structured and unstructured data (JSON documents, logs, NoSQL) for analytical pipelines."
  },

  // Visualização
  {
    name: "Power BI",
    category: "Visualização",
    categoryEn: "Visualization",
    note: "Modelagem dimensional de dados (Star Schema), cálculo de métricas em DAX e desenvolvimento de relatórios executivos interativos para tomada de decisão.",
    noteEn: "Dimensional data modeling (Star Schema), DAX metrics, and interactive executive reporting for strategic decision-making."
  },
  {
    name: "Tableau",
    category: "Visualização",
    categoryEn: "Visualization",
    note: "Exploração visual de dados complexos, criação de painéis analíticos dinâmicos e comunicação de métricas estratégicas para liderança.",
    noteEn: "Visual data exploration, interactive business dashboards, and dynamic communication of strategic performance metrics."
  }
];
