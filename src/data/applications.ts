export type Application = {
  id: string;
  name: string;
  nameEn: string;
  group: "Decisão & Crescimento" | "Produto & Precificação" | "Automação & Processamento";
  groupEn: "Decision & Growth" | "Product & Pricing" | "Automation & Processing";
  summary: string;
  summaryEn: string;
  relatedProjectIds: string[];
};

export const applications: Application[] = [
  {
    id: "experimentation",
    name: "Testes A/B e Experimentação",
    nameEn: "A/B Testing & Experimentation",
    group: "Decisão & Crescimento",
    groupEn: "Decision & Growth",
    summary: "Validação de hipóteses comerciais e mecânicas de conversão sob cenários de tráfego controlado, reduzindo riscos antes do lançamento de promoções.",
    summaryEn: "Validation of business hypotheses and conversion mechanics under controlled traffic, reducing risks prior to promotional rollouts.",
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "churn-retention",
    name: "Prevenção de Churn e Retenção",
    nameEn: "Churn Prevention & Retention",
    group: "Decisão & Crescimento",
    groupEn: "Decision & Growth",
    summary: "Modelagem estatística do tempo até o cancelamento do cliente, estimando taxas instantâneas de atrito e valor de ciclo de vida (LTV).",
    summaryEn: "Statistical modeling of customer time-to-cancel, estimating hazard rates and customer lifetime value (LTV).",
    relatedProjectIds: ["survival-time-to-event", "segmentation-churn-ltv-roi"]
  },
  {
    id: "pricing-optimization",
    name: "Precificação e Elasticidade",
    nameEn: "Pricing & Elasticity",
    group: "Produto & Precificação",
    groupEn: "Product & Pricing",
    summary: "Determinação da sensibilidade ao preço e curvas de demanda declarada para maximizar faturamento e mitigar canibalização.",
    summaryEn: "Determining price sensitivity and stated demand curves to maximize revenue and mitigate cannibalization.",
    relatedProjectIds: ["portfolio-pricing"]
  },
  {
    id: "portfolio-mix",
    name: "Otimização de Portfólio (TURF)",
    nameEn: "Portfolio Mix Optimization",
    group: "Produto & Precificação",
    groupEn: "Product & Pricing",
    summary: "Configuração do mix ideal de produtos e atributos para maximizar o alcance líquido (Reach) da marca sem redundâncias.",
    summaryEn: "Configuring the optimal product mix and attributes to maximize net brand reach without redundancies.",
    relatedProjectIds: ["portfolio-pricing"]
  },
  {
    id: "customer-value",
    name: "Segmentação de Clientes (LTV e ROI)",
    nameEn: "Customer Segmentation (LTV & ROI)",
    group: "Decisão & Crescimento",
    groupEn: "Decision & Growth",
    summary: "Agrupamento estatístico multidimensional de clientes para otimizar alocação de orçamento e focar esforços de marketing nos clientes mais rentáveis.",
    summaryEn: "Multidimensional customer clustering to optimize budget allocation and focus marketing on the most profitable customers.",
    relatedProjectIds: ["segmentation-churn-ltv-roi"]
  },
  {
    id: "text-intelligence",
    name: "Inteligência de Texto e NLP",
    nameEn: "Text Intelligence & NLP",
    group: "Automação & Processamento",
    groupEn: "Automation & Processing",
    summary: "Processamento e categorização de grandes volumes de feedback textual não estruturado para extrair fricções de produto e tendências semânticas.",
    summaryEn: "Processing and categorizing large volumes of unstructured textual feedback to extract product frictions and semantic trends.",
    relatedProjectIds: ["nlp-text-intelligence"]
  },
  {
    id: "ai-automation",
    name: "Automação Cognitiva (RAG)",
    nameEn: "Cognitive Automation (RAG)",
    group: "Automação & Processamento",
    groupEn: "Automation & Processing",
    summary: "Indexação vetorial e recuperação inteligente de informações para bases regulatórias, manuais ou políticas internas.",
    summaryEn: "Vector indexing and intelligent information retrieval for regulatory databases, manuals, or internal policies.",
    relatedProjectIds: ["rag-knowledge-base"]
  }
];
