import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Sparkles, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Tools',
    icon: Code2,
    skills: ['Python', 'SQL', 'Git', 'GitHub', 'Jupyter Notebook', 'Excel'],
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'CNNs', 'LSTMs', 'Model Evaluation'],
  },
  {
    title: 'Generative AI & LLMs',
    icon: Sparkles,
    skills: ['OpenAI API', 'LangChain', 'Hugging Face', 'RAG Pipelines', 'AI Agents'],
  },
  {
    title: 'Data Engineering & Analytics',
    icon: Database,
    skills: ['ETL Pipelines', 'Data Cleaning', 'Feature Engineering', 'EDA', 'Power BI', 'Snowflake (Basic)'],
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    skills: ['AWS (EC2, Lambda, SageMaker – Basics)', 'Streamlit', 'Flask'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end data and AI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-glass p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
