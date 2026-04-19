import { motion } from "motion/react";
import { User, Cpu, ShieldCheck, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">[01] VORSTELLUNG</div>
            <h3 className="text-4xl font-black mb-8 leading-tight">Leidenschaft für sauberen Code.</h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Seit über 3 Jahren entwickle ich individuelle Lösungen für die FiveM Plattform. 
              Mein Fokus liegt dabei auf hochoptimierten Lua-Scripten, die nicht nur funktionieren, 
              sondern auch die Server-Performance schonen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">System-Architektur</h4>
                  <p className="text-sm text-slate-500 font-light">Stabile Backend-Systeme für ESX.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Sicherheit</h4>
                  <p className="text-sm text-slate-500 font-light">Schutz gegen Exploits.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="text-3xl font-black mb-1">50+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Scripts Live</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-black mb-1">100%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Optimized</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="text-3xl font-black mb-1">3J+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Expertise</div>
              </div>
              <div className="bg-cyan-500 rounded-2xl p-8 text-black glow-blue">
                <Zap className="w-8 h-8 mb-4" />
                <div className="text-xl font-black uppercase tracking-tighter">Fast Dev</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
