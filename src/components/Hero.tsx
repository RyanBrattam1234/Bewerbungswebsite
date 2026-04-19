import { motion } from "motion/react";
import { ChevronRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border neon-border-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mono bg-cyan-400/5">
            Available for Freelance
          </div>
          
          <h1 className="text-7xl font-black leading-none mb-6 tracking-tight">
            Hi, ich bin Ryan – <br />
            <span className="gradient-text">FiveM Developer</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-10">
            Spezialisiert auf <span className="text-white font-mono">Lua</span> & 
            individuelle Server-Systeme. Ich verwandle komplexe Visionen in performante Script-Realität.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg glow-blue hover:scale-105 transition-transform flex items-center gap-2"
            >
              Projekte ansehen
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/10 rounded-lg font-bold hover:bg-white/5 transition-colors"
            >
              Mehr erfahren
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="w-full h-[320px] rounded-2xl code-bg border border-white/10 p-6 shadow-2xl relative overflow-hidden">
            <div className="flex gap-1.5 mb-6">
              <div className="terminal-dot bg-red-500/50" />
              <div className="terminal-dot bg-yellow-500/50" />
              <div className="terminal-dot bg-green-500/50" />
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <div className="text-purple-400 italic mb-1">-- Optimized ESX Framework Integration</div>
              <div className="text-slate-300">
                <span className="text-blue-400">Citizen</span>.CreateThread(<span className="text-cyan-300">function</span>()
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-300">while</span> <span className="text-blue-400">true</span> <span className="text-cyan-300">do</span>
              </div>
              <div className="pl-8 text-slate-300">Citizen.Wait(0)</div>
              <div className="pl-8 text-slate-300">
                <span className="text-cyan-300">if</span> IsControlJustReleased(0, 38) <span className="text-cyan-300">then</span>
              </div>
              <div className="pl-12 text-green-400 italic">TriggerEvent('ryan_core:openUI')</div>
              <div className="pl-8 text-slate-300">
                <span className="text-cyan-300">end</span>
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-300">end</span>
              </div>
              <div className="text-slate-300">
                <span className="text-cyan-300">end</span>)
              </div>
            </div>
          </div>
          
          {/* Decorative glows */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-600/20 rounded-full blur-[60px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
