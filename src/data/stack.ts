export type StackItem = {
  name: string;
  category: "Análise" | "Visualização" | "Aprendizado de Máquina / PLN" | "Automação / IA" | "Infra / Organização";
  categoryEn: "Analysis" | "Visualization" | "Machine Learning / NLP" | "Automation / AI" | "Infra / Organization";
  note: string;
  noteEn: string;
};

export const stackItems: StackItem[] = [
  // Análise
  { name: "Python", category: "Análise", categoryEn: "Analysis", note: "Linguagem principal para desenvolvimento de scripts, modelagem bayesiana, análise de sobrevivência e fluxos de processamento.", noteEn: "Core language for scripting, Bayesian modeling, survival analysis, and pipelines." },
  { name: "R", category: "Análise", categoryEn: "Analysis", note: "Utilizada para validações estatísticas rigorosas, testes frequentistas e análise exploratória robusta.", noteEn: "Used for rigorous statistical validations, frequentist tests, and robust exploratory analysis." },
  { name: "SQL", category: "Análise", categoryEn: "Analysis", note: "Construção de queries avançadas para extração de dados e agregações em bases transacionais.", noteEn: "Writing advanced queries for data extraction and aggregations in transactional databases." },
  { name: "Excel", category: "Análise", categoryEn: "Analysis", note: "Estruturação rápida de modelos financeiros, simulações simples e análise exploratória inicial.", noteEn: "Quick structuring of financial models, simple simulations, and initial exploratory analysis." },

  // Visualização
  { name: "Power BI", category: "Visualização", categoryEn: "Visualization", note: "Construção de relatórios interativos e dashboards analíticos para decisão de negócio.", noteEn: "Building interactive reports and analytical dashboards for business decision-making." },
  { name: "PowerPoint", category: "Visualização", categoryEn: "Visualization", note: "Criação de apresentações executivas focadas em traduzir métricas estatísticas para stakeholders.", noteEn: "Creating executive presentations focused on translating statistical metrics for stakeholders." },

  // Aprendizado de Máquina / PLN
  { name: "Scikit-learn", category: "Aprendizado de Máquina / PLN", categoryEn: "Machine Learning / NLP", note: "Implementação de modelos preditivos, regressão, classificação e agrupamento (clustering) de clientes.", noteEn: "Implementation of predictive models, regression, classification, and customer clustering." },
  { name: "PLN", category: "Aprendizado de Máquina / PLN", categoryEn: "Machine Learning / NLP", note: "Processamento de Linguagem Natural: tokenização, modelagem de tópicos, expressões regulares (regex) e representações vetoriais de texto.", noteEn: "Natural Language Processing: tokenization, topic modeling, regex, and text vectorization." },
  { name: "Modelos de Linguagem (LLMs)", category: "Aprendizado de Máquina / PLN", categoryEn: "Machine Learning / NLP", note: "Integração e ajuste fino (fine-tuning) local de grandes modelos de linguagem para classificação e resumos automatizados.", noteEn: "Integration and local fine-tuning of language models for automated classification and summaries." },
  { name: "Pandas", category: "Aprendizado de Máquina / PLN", categoryEn: "Machine Learning / NLP", note: "Manipulação e limpeza avançada de dados estruturados em dataframes Python.", noteEn: "Advanced manipulation and cleaning of structured data in Python dataframes." },

  // Automação / IA
  { name: "LangChain", category: "Automação / IA", categoryEn: "Automation / AI", note: "Orquestração de fluxos estruturados de IA e conexões com bases de dados vetoriais.", noteEn: "Orchestration of structured AI workflows and vector database connections." },
  { name: "LangGraph", category: "Automação / IA", categoryEn: "Automation / AI", note: "Criação de agentes de decisão cíclicos com lógica avançada e persistência de estado.", noteEn: "Creating cyclic decision agents with advanced logic and state persistence." },
  { name: "n8n", category: "Automação / IA", categoryEn: "Automation / AI", note: "Plataforma de automação de fluxos de trabalho para ligar scripts, bases de dados e APIs de forma visual.", noteEn: "Workflow automation platform to link scripts, databases, and APIs visually." },
  { name: "APIs", category: "Automação / IA", categoryEn: "Automation / AI", note: "Desenvolvimento e integração de endpoints REST para disponibilização de modelos estatísticos.", noteEn: "Development and integration of REST endpoints for deployment of statistical models." },

  // Infra / Organização
  { name: "AWS", category: "Infra / Organização", categoryEn: "Infra / Organization", note: "Hospedagem e computação em nuvem (S3, EC2, Lambdas) para fluxos de modelagem.", noteEn: "Cloud hosting and computing (S3, EC2, Lambdas) for modeling pipelines." },
  { name: "Markdown", category: "Infra / Organização", categoryEn: "Infra / Organization", note: "Documentação de análises estatísticas, metodologias de teste e notebooks reprodutíveis.", noteEn: "Documenting statistical analyses, test methodologies, and reproducible notebooks." }
];
