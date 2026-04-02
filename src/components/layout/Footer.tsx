import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/5 py-10 bg-black/40 backdrop-blur-md relative z-10"
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} Bhupendra Singh. Built with React & Framer Motion.</p>
          <p>
            <span className="text-white/30">Designed for </span>
            <span className="text-white/60 font-medium">Impact</span>
            <span className="text-white/30">.</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
