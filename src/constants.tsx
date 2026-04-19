import { Code2, Globe, Cpu, Database, Layout, Terminal } from "lucide-react";

export const SKILLS = [
  { name: "Lua", level: 98, icon: <Terminal className="w-5 h-5" />, highlight: true },
  { name: "FiveM API", level: 25, icon: <Cpu className="w-5 h-5" /> },
  { name: "JavaScript", level: 80, icon: <Code2 className="w-5 h-5" /> },
  { name: "HTML & CSS", level: 58, icon: <Layout className="w-5 h-5" /> },
  { name: "SQL (MySQL)", level: 60, icon: <Database className="w-5 h-5" /> },
  { name: "React (UI)", level: 30, icon: <Globe className="w-5 h-5" /> },
];

export const PROJECTS = [
  {
    title: "Netzwerk München",
    description: "Entwicklung von komplexen Systemen und tiefgreifende Performance-Optimierung für das Netzwerk München.",
    tags: ["Lua", "ESX", "SQL"],
    code: "muenchen_core.lua"
  },
  {
    title: "Eigenes Projekt",
    description: "Ein persönliches Framework zur Demonstration innovativer Lua-Mechaniken und technischer Raffinesse.",
    tags: ["Lua", "Framework", "NUI"],
    code: "ryan_dev_base.lua"
  },
  {
    title: "Distict Roleplay",
    description: "Individuelle Script-Lösungen und nahtlose System-Integrationen für das Distict Roleplay Netzwerk.",
    tags: ["Lua", "Custom Systems", "NUI"],
    code: "distict_integration.lua"
  }
];
