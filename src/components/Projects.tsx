import { motion } from "motion/react";
import { Folder, ExternalLink, Code } from "lucide-react";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">[03] PROJECTS</div>
            <h3 className="text-4xl font-black">Ausgewählte <span className="text-cyan-400">Arbeiten</span></h3>
          </div>
          <p className="text-slate-400 max-w-sm font-light">
            Ein Einblick in meine neuesten Systeme und Scripte für die FiveM Community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform border border-white/5">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-4 text-slate-500">
                    <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 border rounded text-[10px] font-mono uppercase tracking-tighter transition-colors ${
                        tag === "Lua" 
                        ? "bg-cyan-400 text-black border-cyan-400 glow-blue font-bold" 
                        : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400/60 mt-auto">
                  <Code className="w-3 h-3" />
                  {project.code}
                </div>
              </div>
              
              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal Github helper since I didn't import it in this file
const Github = ({ className, ...props }: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
