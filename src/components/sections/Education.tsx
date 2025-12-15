import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'PGDM in Data Science & Analytics (Applied AI)',
    institution: 'Imarticus Learning, Bangalore',
    period: 'Pursuing',
    focus: '',
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Poornima University, Jaipur',
    period: '2021 – 2025',
    focus: 'CGPA: 7.0 / 10',
  },
];

const certifications = [
  'Generative AI with Agentic AI – Udemy',
  'Center of Excellence in Data Science – Celebal Technologies',
  'Data Science Internship – Celebal Technologies',
  'C++ Certification – Coding Ninjas',
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-heading font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                  <h4 className="font-medium mt-1">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-heading font-semibold">Certifications</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="skill-badge"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
