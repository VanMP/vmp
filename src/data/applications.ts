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
    name: "Testes A/B e Experimentação Bayesiana",
    nameEn: "A/B Testing & Bayesian Experimentation",
    group: "Decisão & Crescimento",
    groupEn: "Decision & Growth",
    summary: "Validação de hipóteses comerciais, cálculo de lucro esperado e quantificação exata de risco financeiro sob cenários de incerteza amostral.",
    summaryEn: "Validation of commercial hypotheses, expected profit calculation, and exact financial risk quantification under sample uncertainty.",
    relatedProjectIds: ["bayesian-promotions"]
  },
  {
    id: "pricing-optimization",
    name: "Precificação Ótima e Elasticidade Cruzada",
    nameEn: "Optimal Pricing & Cross-Elasticity",
    group: "Produto & Precificação",
    groupEn: "Product & Pricing",
    summary: "Determinação de preços ótimos via solvers não-lineares (L-BFGS-B) integrando demanda agregada, canibalização de SKUs e restrições de markup.",
    summaryEn: "Determining optimal price points via non-linear solvers (L-BFGS-B) integrating aggregate demand, SKU cannibalization, and markup bounds.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "discrete-choice-segmentation",
    name: "Segmentação por Classes Latentes & WTP",
    nameEn: "Latent Class Segmentation & WTP",
    group: "Produto & Precificação",
    groupEn: "Product & Pricing",
    summary: "Identificação de heterogeneidade não observada de consumidores e cálculo de disposição a pagar para orientar estratégias de diferenciação.",
    summaryEn: "Identifying unobserved consumer heterogeneity and calculating willingness-to-pay to guide product differentiation strategies.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "assortment-pruning",
    name: "Otimização de Assortment e Purga de Menu",
    nameEn: "Assortment Optimization & Menu Pruning",
    group: "Produto & Precificação",
    groupEn: "Product & Pricing",
    summary: "Varredura combinatória para identificar produtos canibais e simplificar o catálogo com máxima retenção de faturamento e eficiência operacional.",
    summaryEn: "Combinatorial scanning to identify cannibalizing products and simplify menus while maximizing revenue retention and operational efficiency.",
    relatedProjectIds: ["conjoint-portfolio-optimization"]
  },
  {
    id: "text-intelligence",
    name: "Inteligência de Texto e Clusterização Vetorial",
    nameEn: "Text Intelligence & Vector Clustering",
    group: "Automação & Processamento",
    groupEn: "Automation & Processing",
    summary: "Agrupamento semântico probabilístico em 3D e rotulagem autônoma por LLMs locais em grandes bases de texto não estruturado.",
    summaryEn: "3D probabilistic semantic clustering and autonomous local LLM labeling over large unstructured text datasets.",
    relatedProjectIds: ["nlp-text-intelligence", "quantificador-semantico-app"]
  },
  {
    id: "no-code-decision-tools",
    name: "Aplicações Interativas & Simuladores de Negócio",
    nameEn: "Interactive Apps & Business Simulators",
    group: "Automação & Processamento",
    groupEn: "Automation & Processing",
    summary: "Desenvolvimento de interfaces e simuladores de prateleira (Streamlit) para permitir que executivos simulem cenários em tempo real.",
    summaryEn: "Development of interactive interfaces and shelf simulators (Streamlit) enabling executives to test pricing scenarios in real time.",
    relatedProjectIds: ["quantificador-semantico-app", "conjoint-portfolio-optimization"]
  }
];
