import { motion, useScroll, useSpring } from "motion/react";
import { Terminal } from "lucide-react";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-mono font-black text-2xl tracking-tighter"
        >
          <div className="w-1.5 h-6 bg-cyan-400 mr-1" />
          <span className="text-white uppercase">Bewerbung</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-all hover:tracking-[0.3em]">Home</a>
          <a href="#skills" className="hover:text-cyan-400 transition-all hover:tracking-[0.3em]">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-all hover:tracking-[0.3em]">Projekte</a>
          <a href="#contact" className="px-5 py-2 border border-cyan-400/30 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all glow-blue group">
            <span className="flex items-center gap-2">
              Kontakt
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />
    </nav>
  );
};
