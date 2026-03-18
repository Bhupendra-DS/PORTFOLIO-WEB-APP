import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProfileImage from '../ProfileImage';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a B.Tech CSE graduate currently pursuing a PGDM in Data Science &amp; Applied AI, with hands-on experience across the end-to-end machine learning lifecycle feature engineering, model training, evaluation, deployment, and monitoring. I focus on building scalable AI-powered applications and data pipelines using Python, SQL, OpenAI API, LangChain, and modern data tooling.
              </p>
              <p>
                I&apos;ve worked on Retrieval-Augmented Generation (RAG) systems, AI agents, and batch data processing workflows, combining vector databases, prompt engineering, and robust ETL to solve real-world problems. I enjoy turning messy real-world data into intelligent products that deliver measurable impact through automation and data-driven decision-making.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Python', 'SQL', 'TensorFlow', 'LangChain', 'Power BI', 'AWS'].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="order-first md:order-last"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
