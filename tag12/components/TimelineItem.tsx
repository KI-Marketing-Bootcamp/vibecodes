import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { Sparkles, Cpu, Video, BookOpen, Rocket, Bot } from 'lucide-react';

interface Props {
  data: TimelineEvent;
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<Props> = ({ data, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const icons = {
    rocket: Rocket,
    sparkles: Sparkles,
    cpu: Cpu,
    video: Video,
    book: BookOpen,
    robot: Bot,
  };

  const IconComponent = data.icon ? icons[data.icon] : Sparkles;

  return (
    <div className={`mb-12 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12" />
      
      {/* Center Line Point */}
      <div className="z-20 flex items-center order-1 bg-brand-dark shadow-xl w-12 h-12 rounded-full border-4 border-brand-gold relative group transition-transform duration-300 hover:scale-110">
        <h3 className="mx-auto font-bold text-xs text-brand-gold">{data.year}</h3>
      </div>

      <div className={`order-1 w-full md:w-5/12 px-1 py-4 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            cursor-pointer group relative overflow-hidden transition-all duration-500 ease-out
            glass-panel rounded-2xl p-6 hover:border-brand-gold/50
            ${data.highlight ? 'border-brand-gold/40 bg-brand-gold/5' : ''}
          `}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <div className={`p-2 rounded-lg ${data.highlight ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-brand-gold'}`}>
               <IconComponent size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{data.title}</h3>
          </div>

          <p className="text-brand-light text-sm md:text-base leading-relaxed mb-4">
            {data.description}
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className={`space-y-2 mb-4 border-t border-white/10 pt-4 ${isLeft ? 'md:items-end' : ''} flex flex-col`}>
              {data.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`mt-2 text-xs text-center text-slate-600 uppercase tracking-widest transition-opacity ${isExpanded ? 'opacity-0 h-0' : 'opacity-100'}`}>
            Klicken für Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;