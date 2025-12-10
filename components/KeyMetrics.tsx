import React from 'react';
import { TrendingUp, Percent, Target, Recycle } from 'lucide-react';

const KeyMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12 relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Card 1: Optimal Ratio */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4 text-science-600">
          <Target className="w-6 h-6" />
        </div>
        <p className="text-4xl font-bold text-slate-900 mb-1">1:1</p>
        <p className="text-slate-500 text-sm font-medium">Optimal Pt:Fe Atomic Ratio</p>
      </div>

      {/* Card 2: Activity */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4 text-chem-500">
          <TrendingUp className="w-6 h-6" />
        </div>
        <p className="text-4xl font-bold text-slate-900 mb-1">85.6%</p>
        <p className="text-slate-500 text-sm font-medium">Max Glycerol Conversion Rate</p>
      </div>

      {/* Card 3: Selectivity */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4 text-purple-500">
          <Percent className="w-6 h-6" />
        </div>
        <p className="text-4xl font-bold text-slate-900 mb-1">56.3%</p>
        <p className="text-slate-500 text-sm font-medium">Selectivity to Glyceric Acid</p>
      </div>

      {/* Card 4: Impact */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4 text-amber-500">
          <Recycle className="w-6 h-6" />
        </div>
        <p className="text-3xl font-bold text-slate-900 mb-1">Upcycling</p>
        <p className="text-slate-500 text-sm font-medium">Biodiesel Waste Valorization</p>
      </div>
      
    </div>
  );
};

export default KeyMetrics;