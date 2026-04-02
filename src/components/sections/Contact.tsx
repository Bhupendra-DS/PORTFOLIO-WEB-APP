import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    id: 'CH_01',
    name: 'Email',
    value: 'bhupendrashekhawat2322@gmail.com',
    href: 'mailto:bhupendrashekhawat2322@gmail.com',
    icon: Mail,
  },
  {
    id: 'CH_02',
    name: 'LinkedIn',
    value: 'bhupendra-singh-shekhawat',
    href: 'https://linkedin.com/in/bhupendra-singh-shekhawat-3791372a5',
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <div className="section-container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Currently available for hire
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's build something <br className="hidden md:block"/> 
            <span className="text-gradient">remarkable together</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl mb-12">
            Open to Data Science, AI & Analytics opportunities. Let's connect and discuss how my skills align with your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            const isMail = link.href.startsWith('mailto:');
            return (
              <motion.a
                key={link.id}
                href={link.href}
                {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="card-glass p-6 lg:p-8 flex items-center justify-between group hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-white/5 text-white group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="text-left max-w-[150px] sm:max-w-none">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">{link.name}</h3>
                    <p className="text-white/50 text-sm truncate">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-white/30 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-white/40 text-sm"
        >
          <MapPin size={16} />
          <span>Bangalore, India</span>
        </motion.div>

      </div>
    </section>
  );
}
