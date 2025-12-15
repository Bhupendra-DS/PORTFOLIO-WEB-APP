import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BarChart3, TrendingUp, PieChart, Database } from 'lucide-react';

const dataPoints = [
  { label: 'Data Collection', value: 85, color: 'hsl(var(--primary))' },
  { label: 'Processing', value: 92, color: 'hsl(185 80% 50%)' },
  { label: 'Analysis', value: 78, color: 'hsl(180 70% 45%)' },
  { label: 'Insights', value: 95, color: 'hsl(192 91% 36%)' },
];

function AnimatedBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(value), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function DataVisualization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Data to Insights Pipeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I turn raw data into insights that drive decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Data Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Database size={20} />
              </div>
              <h3 className="font-heading font-semibold">Data Pipeline Stages</h3>
            </div>
            
            <div className="space-y-6">
              {dataPoints.map((point, index) => (
                <AnimatedBar
                  key={point.label}
                  label={point.label}
                  value={point.value}
                  color={point.color}
                  delay={0.3 + index * 0.15}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: BarChart3, label: 'Datasets Analyzed', value: '50+' },
              { icon: TrendingUp, label: 'Models Deployed', value: '20+' },
              { icon: PieChart, label: 'Dashboards Built', value: '30+' },
              { icon: Database, label: 'TB Processed', value: '10+' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="card-glass p-6 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="text-2xl font-heading font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
