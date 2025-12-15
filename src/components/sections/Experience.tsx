import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI/ML Intern – Computer Vision',
    company: 'VertEx Plus Technologies Ltd.',
    period: 'May 2025 – July 2025',
    points: [
      'Developed an AI-powered pole detection system using CNNs, achieving 95%+ accuracy',
      'Automated data preprocessing and annotation, reducing manual effort by 70% across 10,000+ images',
      'Deployed and validated the solution, improving detection efficiency by 60%',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    period: 'May 2024 – Aug 2024',
    points: [
      'Processed and analyzed datasets with 500K+ records using Python and SQL',
      'Performed ETL, feature engineering, and exploratory data analysis',
      'Built Power BI dashboards that improved business decision-making time by 30%',
      'Contributed to improved data quality metrics by 20%',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful data solutions across diverse industries
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <div className="card-glass p-6">
                  <div className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{exp.role}</h3>
                  <p className="text-primary mb-4">{exp.company}</p>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
