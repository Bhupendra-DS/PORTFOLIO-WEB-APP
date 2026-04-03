import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const projects = [
  {
    id: 'P01',
    title: 'AI-Based Job Prep & Search Platform',
    problem: 'Job seekers lack personalised toolkits for mock interviews and real-time job discovery.',
    techStack: ['LangChain', 'FAISS', 'OpenAI API', 'RAG', 'RapidAPI'],
    description:
      'Built a GenAI career assistant featuring a multi-step LLM agent with tool-calling for live job search, document Q&A, and session memory. Implemented an Agentic RAG pipeline directly mapping to document intelligence architectures.',
    impact: 'Modular backend handling concurrent requests. Added PII redaction to sanitise resumes before LLM processing. Improved user engagement by 45%.',
    github: 'https://github.com/Bhupendra-DS/Interview-Mate.git',
    demo: '#',
    status: 'Deployed',
  },
  {
    id: 'P02',
    title: 'Auto EDA Generator',
    problem: 'Manual exploratory data analysis is time-consuming and inaccessible for non-technical users.',
    techStack: ['OpenAI API', 'Pandas', 'NumPy', 'Streamlit'],
    description:
      'Built an automated EDA system generating statistical reports (feature distribution, correlation, anomaly detection) within 15 seconds per dataset. Integrated OpenAI API for natural-language insight narration.',
    impact: 'Reduced manual exploratory analysis effort by 80%.',
    github: 'https://github.com/Bhupendra-DS/Auto-EDA-Analyzer.git',
    demo: '#',
    status: 'Deployed',
  },
  {
    id: 'P03',
    title: 'Violence Detection: CNN + LSTM Hybrid',
    problem: 'Manual monitoring of surveillance footage is inefficient and error-prone.',
    techStack: ['InceptionV3', 'LSTM', 'TensorFlow', 'Keras'],
    description:
      'Designed a hybrid deep learning model combining CNNs (InceptionV3) and LSTMs scaling temporal motion-sequence modelling to improve video understanding for real-time violence detection.',
    impact: 'Achieved 92% accuracy (precision 0.88, recall 0.90) on the RWF-2000 dataset.',
    github: 'https://github.com/Bhupendra-DS/violence-detection-system',
    demo: '#',
    status: 'Completed',
  },
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Real-world applications showcasing end-to-end AI development, from data pipelines to responsive user interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`p-3 rounded-full border border-white/10 transition-all ${prevBtnEnabled ? 'bg-white/5 hover:bg-white/10 text-white' : 'opacity-30 cursor-not-allowed text-white/50'
                }`}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`p-3 rounded-full border border-white/10 transition-all ${nextBtnEnabled ? 'bg-white/5 hover:bg-white/10 text-white' : 'opacity-30 cursor-not-allowed text-white/50'
                }`}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 pb-12 pt-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="card-glass h-full flex flex-col p-8 group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-white/50 hover:text-indigo-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-2 font-semibold">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span key={tech} className="skill-badge text-xs px-2.5 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-xs text-indigo-300 font-medium mb-1">Impact</p>
                      <p className="text-sm text-white/80">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
