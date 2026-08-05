import React from 'react';

function Skills({ data }) {
  const skillIconMap = {
    "LLMs (Large Language Models)": "fa-brain",
    "RAG (Retrieval-Augmented Generation)": "fa-magnifying-glass",
    "Prompt Engineering": "fa-wand-magic-sparkles",
    "Transformer Architectures": "fa-layer-group",
    "Vector Databases": "fa-cubes",
    "Embeddings": "fa-sitemap",
    "GPT-4": "fa-microchip",
    "Claude": "fa-comments",
    "Autonomous Agents": "fa-robot",
    "Multi-Agent Orchestration": "fa-network-wired",
    "Planning/Reasoning": "fa-chess",
    "LangChain": "fa-link",
    "LangChain Agents": "fa-robot",
    "Tool Chaining": "fa-chain",
    "Agent Memory": "fa-memory",
    "Workflow Automation": "fa-gears",
    "Fine-tuning": "fa-sliders",
    "LoRA (Low-Rank Adaptation)": "fa-compress",
    "Hugging Face": "fa-face-grin",
    "LangGraph": "fa-diagram-project",
    "Inference Optimization": "fa-gauge-high",
    "Semantic Search": "fa-magnifying-glass-plus",
    "Docker": "fa-box",
    "Kubernetes": "fa-sailboat",
    "CI/CD Pipelines": "fa-arrows-turn-to-dots",
    "Model Versioning": "fa-code-branch",
    "PyTorch": "fa-fire",
    "Containerization": "fa-cube",
    "Model Serving": "fa-server",
    "Databricks": "fa-database",
    "Apache Spark": "fa-spark",
    "dbt": "fa-hammer",
    "ETL Pipelines": "fa-arrow-right-arrow-left",
    "Data Preprocessing": "fa-broom",
    "Model Drift Detection": "fa-triangle-exclamation",
    "Performance Monitoring": "fa-chart-line",
    "API Integration": "fa-plug",
    "Data Governance": "fa-shield-check",
    "PII Handling": "fa-user-secret",
    "Audit Trails": "fa-scroll",
    "Model Risk Management": "fa-exclamation-triangle",
    "Explainability": "fa-lightbulb",
    "Responsible AI": "fa-scale-balanced",
    "AWS": "fa-cloud",
    "Azure": "fa-cloud-sun",
    "Azure OpenAI": "fa-star",
    "Azure ML": "fa-flask",
    "Terraform": "fa-mountain",
    "Infrastructure as Code": "fa-code",
    "GDPR": "fa-scales",
    "Encryption": "fa-key",
    "Access Controls": "fa-lock",
    "Data Quality": "fa-check-double",
    "Regulatory Readiness": "fa-file-contract",
    "Anomaly Detection": "fa-radar"
  };

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {data.map((skillGroup, idx) => (
            <div key={idx} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, skillIdx) => (
                  <li key={skillIdx} className="skill-pill">
                    <i className={`fas ${skillIconMap[skill] || 'fa-check'}`} style={{color: 'var(--accent)'}}></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;