import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    id: 'EXP_01',
    role: 'AI Engineer Intern',
    company: 'Imarticus Learning (Applied AI Program)',
    period: '2025 – Present',
    status: 'Active',
    points: [
      'Built multi-step LLM agent using LangChain tool-calling to automate LinkedIn data extraction and candidate profiling for 1,000+ professionals, reducing manual effort by 80%.',
      'Designed Agentic RAG pipeline combining document embedding, FAISS vector indexing, and an AI agent layer to enable intelligent Q&A over structured candidate datasets.',
      'Implemented PII detection module using spaCy NER to identify and redact sensitive personal data (names, emails, phone numbers) before downstream model ingestion.',
      'Built modular Python ETL pipelines for scalable data extraction, transformation, and validation supporting AI-driven decision systems.'
    ],
  },
  {
    id: 'EXP_02',
    role: 'AI/ML Intern',
    company: 'Vertex Plus Technologies Ltd.',
    period: 'May 2025 – Jul 2025',
    status: 'Completed',
    points: [
      'Built CNN-based computer vision model (InceptionV3 backbone) achieving 95%+ accuracy on pole detection across 10,000+ images; automated preprocessing pipeline cut manual effort by 70%.',
      'Improved detection efficiency by 60% via hyperparameter optimisation; evaluated model using precision, recall, and F1-score to ensure robust generalisation.'
    ],
  },
  {
    id: 'EXP_03',
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    period: 'May 2024 – Aug 2024',
    status: 'Completed',
    points: [
      'Designed and implemented scalable ETL pipelines handling 500K+ structured records; performed feature engineering and data validation to support downstream ML workflows.',
      'Built Power BI dashboards that reduced business decision time by 30%; optimised SQL-based extraction improving data processing efficiency and data quality metrics by 20%.'
    ],
  },
  {
    id: 'EXP_04',
    role: 'Freelance AI & Web Application Developer',
    company: 'Independent',
    period: 'Ongoing',
    status: 'Active',
    points: [
      'Architected and deployed AI-powered web applications integrating multi-step LLM agents for automation, document processing, and intelligent workflows.',
      'Built REST-based backend services for scalable AI model inference, prompt management, and third-party API integrations.',
      'Developed end-to-end systems (frontend, backend, database, AI orchestration) with retrieval pipelines enhancing contextual response accuracy.'
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>('EXP_01');

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-background">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building impactful data solutions across diverse industries, from computer vision to large-scale data engineering.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const isOpen = expanded === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-glass overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                  className="w-full text-left px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 outline-none hover:bg-white/5 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        exp.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/10 text-white/60'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                    <div className="text-white/70 font-medium">{exp.company}</div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full">
                    <span className="text-sm text-white/50">{exp.period}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full bg-white/5 text-white/50"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden bg-black/20"
                >
                  <div className="px-6 pb-6 pt-2 md:px-8">
                    <ul className="space-y-3">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
