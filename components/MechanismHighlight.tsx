import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const MechanismHighlight: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Mechanism: Why It Works</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            The superior performance of the 1:1 catalyst is driven by two key advantages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
           {/* Feature 1 */}
           <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-science-200 transition-colors shadow-sm">
              <div className="w-16 h-16 bg-science-100 text-science-600 rounded-full flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">More Active Sites</h3>
              <p className="text-slate-600 leading-relaxed">
                At the 1:1 ratio, metal particles are highly dispersed (2-5 nm) without clumping. This fine distribution exposes significantly more active sites for the reaction to take place.
              </p>
           </div>

           {/* Feature 2 */}
           <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-science-200 transition-colors shadow-sm">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Efficient Oxygen Transport</h3>
              <p className="text-slate-600 leading-relaxed">
                 Pt and Fe work together to create more "oxygen vacancies" (Ce³⁺) on the surface. These vacancies act as fast lanes for oxygen transport, boosting the overall reaction rate.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MechanismHighlight;