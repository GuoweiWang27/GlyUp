import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CONVERSION_DATA, SELECTIVITY_DATA } from '../constants';
import { SectionId } from '../types';

const ResultsCharts: React.FC = () => {
  return (
    <section id={SectionId.RESULTS} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">Catalytic Performance</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Following structural analysis, the activity tests confirm that the 1:1 stoichiometry delivers superior results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Conversion Rate Chart - Figure 5 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
            {/* Title with Figure Label */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Figure 5. Pt-Fe 1:1 Achieves Maximum Conversion</h3>
            <div className="h-[400px] w-full flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CONVERSION_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" label={{ value: 'Pt:Fe Ratio', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Conversion (%)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                    {CONVERSION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#0ea5e9' : '#94a3b8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
               <p className="text-sm text-slate-600 leading-relaxed text-center">
                  The "volcano" trend indicates that the 1:1 ratio provides the optimal balance for activity (85.6%), significantly outperforming unbalanced ratios.
               </p>
            </div>
          </div>

          {/* Product Selectivity Chart - Figure 6 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
             {/* Title with Figure Label */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Figure 6. Highest Selectivity for Glyceric Acid</h3>
            <div className="h-[400px] w-full flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SELECTIVITY_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} interval={0} angle={-15} textAnchor="end" height={60} />
                  <YAxis label={{ value: 'Selectivity (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Bar dataKey="glyceric" name="Glyceric Acid (Target)" fill="#0ea5e9" stackId="a" />
                  <Bar dataKey="dihydroxy" name="Dihydroxyacetone" fill="#cbd5e1" stackId="a" />
                  <Bar dataKey="glyoxal" name="Glyoxal" fill="#94a3b8" stackId="a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
             <div className="mt-6 pt-4 border-t border-slate-100">
               <p className="text-sm text-slate-600 leading-relaxed text-center">
                  The 1:1 ratio minimizes side reactions (C-C cleavage), effectively directing the pathway toward the target Glyceric Acid (56.3%).
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsCharts;