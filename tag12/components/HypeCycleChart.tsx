import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { HYPE_CYCLE_DATA } from '../constants';

const HypeCycleChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={HYPE_CYCLE_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            stroke="#cbd5e1" 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={{ stroke: '#334155' }}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#cbd5e1' }}
          />
          <Line 
            type="monotone" 
            dataKey="interest" 
            name="Public Hype" 
            stroke="#FFB300" 
            strokeWidth={3}
            dot={{ fill: '#FFB300', strokeWidth: 0, r: 4 }}
            activeDot={{ r: 8, stroke: 'rgba(255, 179, 0, 0.5)', strokeWidth: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="tech" 
            name="Tech Maturity" 
            stroke="#3b82f6" 
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HypeCycleChart;