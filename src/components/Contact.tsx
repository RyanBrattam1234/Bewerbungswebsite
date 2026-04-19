import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Disc } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">[04] CONNECT</div>
            <h3 className="text-4xl font-black mb-8">Bereit für dein <span className="text-cyan-400">Projekt?</span></h3>
            
            <p className="text-slate-400 text-lg mb-12 font-light">
              Egal ob du eine komplett neue System-Architektur oder ein kleines Bugfix benötigst – schreib mir einfach!
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/20 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 border border-white/5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium">Email</span>
                </div>
                <span className="text-cyan-400 font-mono text-sm">ryanbrau2@gmail.com</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-purple-500 border border-white/5">
                    <Disc className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium">Discord</span>
                </div>
                <span className="text-cyan-400 font-mono text-sm">ryan_brattan10</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-green-400 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <span className="text-slate-300 font-medium">Status</span>
                </div>
                <span className="text-green-400 font-mono text-sm">Online</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400/50 text-slate-200 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400/50 text-slate-200 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">Nachricht</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Wie kann ich dir helfen?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400/50 text-slate-200 transition-all resize-none placeholder:text-slate-600"
                />
              </div>

              <button 
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${
                  status === "sent" 
                  ? "bg-green-500 text-white" 
                  : "bg-cyan-500 text-black glow-blue hover:scale-[1.02]"
                }`}
              >
                {status === "idle" && <><Send className="w-4 h-4" /> Nachricht senden</>}
                {status === "sending" && "Wird gesendet..."}
                {status === "sent" && "Gesendet!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
