import { motion } from 'framer-motion';
import ProfileImage from '../ProfileImage';

const SKILLS = ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'FAISS', 'TensorFlow'];

const STAT_ITEMS = [
  { label: 'Records Processed', value: '500K+' },
  { label: 'AI Agents Built', value: '5+' },
  { label: 'Images Analyzed', value: '10K+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light mb-10">
              <p>
                B.Tech CSE graduate (PGDM-Data Science & Applied AI) with hands-on experience building end-to-end GenAI systems: Agentic RAG pipelines, LLM-powered document intelligence workflows. Skilled in LangChain, LlamaIndex, OpenAI API, HuggingFace, and FAISS/Pinecone vector stores.
              </p>
              <p>
                Proven track record delivering production-grade Python solutions from automated ETL pipelines to multi-step AI agents with tool-calling, memory management, and retrieval-augmented reasoning. Eager to apply these capabilities to large-scale legal document datasets.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {STAT_ITEMS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-bold text-white mb-2">{s.value}</span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{s.label}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-white/80 mb-4 tracking-wide uppercase">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:ml-auto"
          >
            {/* Abstract glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
            
            <div className="relative p-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm mx-auto">
              {/* Profile Image Component assuming it renders an img tag */}
              <div className="rounded-2xl overflow-hidden relative">
                <ProfileImage />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for Hire</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
