import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    id: 'EDU_01',
    degree: 'PGDM – Data Science & Applied AI',
    institution: 'Imarticus Learning, Bangalore',
    period: '2025 – Present',
    detail: '',
    status: 'Active',
  },
  {
    id: 'EDU_02',
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Poornima University, Jaipur',
    period: '2021 – 2025',
    detail: 'CGPA: 6.5 / 10',
    status: 'Completed',
  },
];

const certifications = [
  { label: 'Generative AI with Agentic AI', issuer: 'Udemy' },
  { label: 'Centre of Excellence in Data Science', issuer: 'Celebal Technologies' },
  { label: 'Data Science Internship Certificate', issuer: 'Celebal Technologies' },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-background">
      <div className="section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Academic Profile</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={edu.id} className="card-glass p-6 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      edu.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/10 text-white/50'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-sm text-white/40">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">{edu.degree}</h4>
                  <p className="text-white/60 text-sm mb-3">{edu.institution}</p>
                  {edu.detail && <p className="text-white/40 text-sm font-medium">{edu.detail}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Licenses & Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={cert.label} className="card-glass p-6 group flex gap-4 items-center">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-200 transition-colors">{cert.label}</h4>
                    <p className="text-white/50 text-sm flex items-center gap-2">
                       {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
