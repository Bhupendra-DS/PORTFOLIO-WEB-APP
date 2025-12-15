import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    title: 'AI-Based Job Preparation & Search Platform',
    problem: 'Job seekers struggle to prepare domain-specific interviews while tracking live opportunities.',
    techStack: ['Python', 'Streamlit', 'OpenAI API', 'RapidAPI', 'LangChain', 'BeautifulSoup'],
    description: 'A GenAI-powered career assistant that provides interview preparation, mock Q&A, and personalized learning paths while fetching real-time job listings.',
    impact: 'Supported 50+ concurrent users • Increased user engagement by 45% during testing',
    github: 'https://github.com/Bhupendra-DS/Interview-Mate.git',
    demo: '#',
  },
  {
    title: 'Auto EDA Generator',
    problem: 'Manual exploratory data analysis is time-consuming and inaccessible for non-technical users.',
    techStack: ['Python', 'Streamlit', 'Pandas Profiling', 'OpenAI API'],
    description: 'An automated EDA tool that generates complete analytical reports and AI-written insights within seconds.',
    impact: 'Reduced manual analysis time by 80% • Generated reports in under 15 seconds per dataset',
    github: 'https://github.com/Bhupendra-DS/auto-eda-generator',
    demo: '#',
  },
  {
    title: 'Bangalore Traffic Optimization (Ongoing)',
    problem: 'Urban traffic congestion causes delays and inefficient routing.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Power BI', 'GeoPy'],
    description: 'A machine learning-based traffic prediction and route optimization system using real-time and historical data.',
    impact: 'Forecasting congestion with up to 85% accuracy • Improving average commute time by 15–20% (Target)',
    github: 'https://github.com/Bhupendra-DS/bengaluru-traffic-optimization.git',
    demo: '#',
  },
  {
    title: 'Violence Detection System',
    problem: 'Manual monitoring of surveillance footage is inefficient and error-prone.',
    techStack: ['TensorFlow', 'OpenCV', 'NumPy', 'Matplotlib'],
    description: 'A hybrid deep learning model combining InceptionV3 and LSTM for real-time violence detection.',
    impact: 'Achieved 92% accuracy with high precision and recall on RWF-2000 dataset',
    github: 'https://github.com/Bhupendra-DS/violence-detection-system',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing end-to-end AI development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass p-6 group cursor-pointer hover:border-primary/30 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.problem}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

                <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                  View details <ChevronRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="card-glass max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-heading font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Problem</h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Solution</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Impact</h4>
                  <p className="text-primary font-medium">{selectedProject.impact}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a 
                    href={selectedProject.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center cursor-pointer"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={selectedProject.demo} className="btn-primary flex-1 justify-center">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
