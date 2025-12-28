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
                I am a Data Science and Applied AI professional with hands-on experience in Machine Learning, Generative AI, and Data Engineering. I have worked on building intelligent systems using Python, SQL, and modern AI frameworks, including LLM-based applications and automation pipelines.
              </p>
              <p>
                My experience includes developing end-to-end AI solutions, from data preprocessing and model development to deployment and visualization. I am passionate about applying AI to solve real-world problems and improve decision-making through data-driven insights.
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
