import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, Database } from 'lucide-react';

const stats = [
  { id: 'M01', icon: BarChart3, label: 'Datasets Analyzed', value: '50+' },
  { id: 'M02', icon: TrendingUp, label: 'Models Deployed', value: '20+' },
  { id: 'M03', icon: PieChart, label: 'Dashboards Built', value: '30+' },
  { id: 'M04', icon: Database, label: 'TB Processed', value: '10+' },
];

const dataPoints = [
  { id: 'STG_01', label: 'Data Collection & Ingestion', value: 95, color: 'bg-indigo-500' },
  { id: 'STG_02', label: 'Processing & Transformation', value: 85, color: 'bg-purple-500' },
  { id: 'STG_03', label: 'Modeling & Analysis', value: 90, color: 'bg-blue-500' },
  { id: 'STG_04', label: 'Insights & Visualization', value: 98, color: 'bg-emerald-500' },
];

export default function DataVisualization() {
  return (
    <section id="dataviz" className="section-padding relative overflow-hidden bg-background border-t border-b border-white/5">
      <div className="section-container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Data to <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Transforming raw, unstructured signals into decisions that matter with robust pipeline architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left panel - Pipeline progress */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <Database className="text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Pipeline Telemetry</h3>
            </div>

            <div className="space-y-8">
              {dataPoints.map((pt, i) => (
                <div key={pt.id}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-white/80">{pt.label}</span>
                    <span className="text-xs font-bold text-white/60">{pt.value}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className={`h-2.5 rounded-full ${pt.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pt.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel - Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="card-glass p-6 text-center group hover:bg-white/10"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white/70 mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{s.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
