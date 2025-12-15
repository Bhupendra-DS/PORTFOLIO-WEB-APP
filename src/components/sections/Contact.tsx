import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'bhupendrashekhawat2322@gmail.com',
    href: 'mailto:bhupendrashekhawat2322@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'bhupendra-singh-shekhawat-3791372a5',
    href: 'https://linkedin.com/in/bhupendra-singh-shekhawat-3791372a5',
    icon: Linkedin,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Let's Connect
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Open to Data Science, AI, and Analytics Opportunities
          </h2>
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon size={20} className="text-primary" />
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin size={16} />
            <span>Bangalore, India</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
