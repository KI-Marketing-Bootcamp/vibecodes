import React, { useState } from 'react';
import { ChevronDown, Cpu, Zap, Database, Globe, Search, Code, Lock } from 'lucide-react';

const MetaCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-24 mb-12 px-4 relative z-20">
      <div className={`
        glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-in-out
        ${isOpen ? 'bg-brand-dark/80 ring-1 ring-brand-gold/30' : 'hover:bg-white/5'}
      `}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center p-6 cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl group-hover:scale-110 transition-transform">🔍</span>
            <div>
                <span className="font-bold text-white block">Behind the Scenes</span>
                <span className="text-xs text-slate-400 font-normal">Wie diese App gebaut wurde</span>
            </div>
          </div>
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center bg-white/5 
            text-brand-gold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-dark
            ${isOpen ? 'rotate-180 bg-brand-gold text-brand-dark' : ''}
          `}>
             <ChevronDown size={16} />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 pt-0 border-t border-white/10 mt-2">
             
             {/* Tech Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 mt-6">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-brand-gold/30 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">KI-Modell</div>
                    <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                        <Cpu size={12} /> Keins (Static)
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-brand-gold/30 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Build-Zeit</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Code size={12} /> ~20 Minuten
                    </div>
                </div>
                 <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-brand-gold/30 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">LLM benötigt?</div>
                    <div className="text-xs font-bold text-brand-gold flex items-center gap-1.5">
                        <Database size={12} /> Nein
                    </div>
                </div>
                 <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-brand-gold/30 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Hosting</div>
                    <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                        <Globe size={12} /> GitHub Pages
                    </div>
                </div>
             </div>

             {/* Insight */}
             <div className="mb-6 bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                <strong className="text-brand-gold flex items-center gap-2 mb-2 text-sm">
                    <Zap size={16} /> Vibecoding Insight
                </strong>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Diese App ist eine <strong>statische React-Anwendung</strong> ohne aktives KI-Backend. 
                    Da GitHub Pages rein statisches Hosting bietet, können wir dort keine API-Keys (z.B. für Gemini oder OpenAI) sicher hinterlegen.
                    Jeder Key im Code wäre öffentlich sichtbar – ein No-Go für die Sicherheit! 🚨
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                {/* Learning */}
                <div className="space-y-4">
                    <strong className="text-white block text-sm border-b border-white/10 pb-2">📚 Was ich dabei gelernt habe:</strong>
                    <ul className="space-y-3">
                         <li className="flex items-start gap-3 text-sm text-slate-400">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span>
                                <strong className="text-slate-200">Security First:</strong> Öffentliche Repos dürfen niemals Secrets enthalten. Statische Daten sind oft die sicherere und schnellere Wahl.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-400">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span>
                                <strong className="text-slate-200">Frontend Polish:</strong> Ohne Backend-Logik bleibt mehr Zeit für Animationen, Glassmorphism und Responsivität.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-400">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span>
                                <strong className="text-slate-200">Storytelling > Tech:</strong> Die Timeline funktioniert durch die kuratierten Texte, nicht durch den Code.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Why NO LLM? */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                     <strong className="text-blue-400 block mb-3 text-sm flex items-center gap-2">
                        <Lock size={14} /> Warum KEIN LLM?
                     </strong>
                     <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        Ein echter Chatbot oder Live-Recherche wäre cool, aber:
                     </p>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-xs text-slate-300 bg-blue-500/10 px-2 py-1.5 rounded border border-blue-500/10">
                            <span className="text-blue-400">✓</span>
                            <span><strong>Sicherheit:</strong> API-Keys im Frontend sind unsicher.</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-300 bg-blue-500/10 px-2 py-1.5 rounded border border-blue-500/10">
                            <span className="text-blue-400">✓</span>
                            <span><strong>Kosten:</strong> Keine laufenden API-Kosten pro View.</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-300 bg-blue-500/10 px-2 py-1.5 rounded border border-blue-500/10">
                            <span className="text-blue-400">✓</span>
                            <span><strong>Performance:</strong> Instant Loading, keine Latenz.</span>
                        </li>
                     </ul>
                </div>
             </div>

             {/* Honesty */}
             <div className="mt-6 flex items-start gap-3 bg-brand-gold/5 border border-brand-gold/10 rounded-lg p-4">
                <Search size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-brand-gold">Ehrliches Fazit:</strong> Für eine Landingpage oder einen Informations-Hub ist eine gut kuratierte, statische Seite oft <strong>besser</strong> als eine erzwungene KI-Integration. Es ist schneller, robuster und sieht genauso gut aus! 🚀
                </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaCard;