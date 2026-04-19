/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodeBackground } from "./components/CodeBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-cyan-400/30 selection:text-cyan-400 overflow-x-hidden">
      <CodeBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-24 border-t border-white/5 bg-dark-bg/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4">
            <div className="font-mono font-black text-2xl tracking-tighter">
              <span className="text-cyan-400 uppercase">BEWERBUNG</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs font-light">
              Maßgeschneiderte FiveM Lösungen mit Fokus auf Optimierung und Innovation.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4 text-sm">
            <div className="flex gap-8 text-slate-400 font-mono text-xs uppercase tracking-widest">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Ryan. Built with precision.
            </p>
          </div>
        </div>
      </footer>

      {/* Background radial accent */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-cyan-400/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}
