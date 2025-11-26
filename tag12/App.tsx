import React from 'react';
import { TIMELINE_DATA } from './constants';
import TimelineItem from './components/TimelineItem';
import BackgroundParticles from './components/BackgroundParticles';
import HypeCycleChart from './components/HypeCycleChart';
import MetaCard from './components/MetaCard';
import { Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark">
      <BackgroundParticles />

      {/* Navigation / Header */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-brand-gold text-brand-dark font-black p-1 text-xl rounded">Ki</div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-wide">Marketing</span>
            <span className="font-light text-xs text-brand-gold">Bootcamp</span>
          </div>
        </div>
        <a 
          href="#"
          className="glass-panel px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
        >
          Zum Kalender
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-32 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 animate-float">
          <Sparkles size={12} />
          Happy Neural New Year
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          3 Jahre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
            KI im Marketing
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Vom ersten API-Aufruf bis zum KI-Video für die Masse. 
          Eine Zeitreise durch den technologischen Wahnsinn der letzten Jahre.
        </p>

        <a href="#timeline" className="group inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,179,0,0.3)]">
          Zeitreise starten
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </header>

      {/* Timeline Section */}
      <main id="timeline" className="relative z-10 max-w-5xl mx-auto px-4 pb-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-gold via-brand-gold/20 to-transparent hidden md:block" />

        {TIMELINE_DATA.map((event, index) => (
          <TimelineItem 
            key={index} 
            data={event} 
            index={index} 
            isLeft={index % 2 === 0}
          />
        ))}

        {/* Hype Cycle Section */}
        <div className="mt-32 glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-brand-gold">Der völlig subjektive Hype Cycle von Vroni und Georg</h2>
              <p className="text-slate-400">Interesse (Gold) vs. Technologische Reife (Blau)</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-xs font-bold uppercase text-brand-gold tracking-widest">Live Data Visualization</span>
            </div>
          </div>
          <HypeCycleChart />
        </div>

        {/* Behind the Scenes Meta Card */}
        <MetaCard />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="bg-brand-gold text-brand-dark font-black p-1 text-lg rounded">Ki</div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xs tracking-wide">Marketing</span>
              <span className="font-light text-[10px] text-brand-gold">Bootcamp</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 uncanny minds GmbH. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-slate-500 hover:text-brand-gold transition-colors">Impressum</a>
             <a href="#" className="text-slate-500 hover:text-brand-gold transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;