import React from 'react';
import { SectionId } from '../types';
import { PAPER_INFO } from '../constants';

const AbstractBackground: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
      <div id={SectionId.ABSTRACT}>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-science-500 rounded-full block"></span>
          Abstract
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed text-justify border-l-4 border-science-200 pl-6">
          {PAPER_INFO.abstract}
        </p>
        <div className="mt-8 bg-slate-50 p-6 rounded-lg">
          <h4 className="font-bold text-slate-900 mb-2">Key Hypothesis</h4>
          <p className="text-slate-600">
            Adjusting the Pt-Fe molar ratio to 1:1 stabilizes the CeO₂ support via electronic synergy, thereby maximizing glycerol conversion and selectivity to glycolic acid.
          </p>
        </div>
      </div>

      <div id={SectionId.BACKGROUND}>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-chem-500 rounded-full block"></span>
          The Problem & Solution
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">The Waste Problem</h3>
            <p className="text-slate-600">
              Biodiesel production generates massive amounts of glycerol (10% by mass) as a byproduct. Often treated as waste, this increases environmental costs and wastes biomass resources.
            </p>
          </div>
          
          <div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">The Catalytic Solution</h3>
             <p className="text-slate-600">
               Oxidizing glycerol into <strong>Glyceric Acid</strong> creates high-value chemicals for medicine and biodegradable materials. Noble metal-based catalysts (like Pt) are effective, but their structure and performance need optimization through bimetallic synergies (like Fe).
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractBackground;