import { motion } from "motion/react";
import { SKILLS } from "../constants";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-mono text-xs mb-2 uppercase tracking-widest"
          >
            [02] TECH STACK
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center"
          >
            Meine <span className="text-purple-500">Werkzeuge</span> & Expertise
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 group ${
                skill.highlight 
                ? "bg-cyan-400/5 border-cyan-400/20" 
                : "bg-white/5 border-white/5"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  skill.highlight ? "bg-cyan-400 text-black glow-blue" : "bg-white/5 text-slate-400 border border-white/5"
                }`}>
                  {skill.icon}
                </div>
                <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
              </div>
              
              <h4 className="text-lg font-bold mb-4">{skill.name}</h4>
              
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-full rounded-full ${
                    skill.highlight ? "bg-cyan-400" : "bg-purple-500"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
