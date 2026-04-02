import { motion } from 'framer-motion';
import { Code2, Brain, Sparkles, Database, Cloud, FileText } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI Agents & Orchestration',
    icon: Sparkles,
    skills: ['LangChain Agents', 'LlamaIndex', 'Tool-calling', 'Memory Management', 'ReAct', 'Plan-and-Execute loops'],
  },
  {
    title: 'GenAI & LLM Systems',
    icon: Brain,
    skills: [
      'OpenAI API',
      'HuggingFace',
      'Prompt Engineering',
      'RAG',
      'Agentic RAG',
      'LLM Evaluation',
    ],
  },
  {
    title: 'Document Intelligence',
    icon: FileText,
    skills: [
      'Document Classification',
      'PII Detection',
      'spaCy NER',
      'Microsoft Presidio',
      'Structured Extraction',
    ],
  },
  {
    title: 'Vector Stores',
    icon: Database,
    skills: [
      'FAISS',
      'Pinecone',
      'Weaviate',
      'Embedding Pipelines',
      'Retrieval Optimization',
    ],
  },
  {
    title: 'ML & Deep Learning',
    icon: Code2,
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'CNNs',
      'LSTM',
      'Cross-validation',
    ],
  },
  {
    title: 'Data Engineering & MLOps',
    icon: Cloud,
    skills: [
      'ETL Pipelines',
      'PostgreSQL',
      'Streamlit/Flask',
      'REST APIs',
      'Docker (Basics)',
      'AWS (EC2/S3)',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-background">
      <div className="section-container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end data and AI solutions, 
            with a strong focus on generative modeling, agentic systems, and document intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            // Highlight the GenAI and Agents categories slightly larger if needed, but 6 fits well into 3x2 grid.
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-8 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-badge bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
