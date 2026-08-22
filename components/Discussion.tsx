import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, Microscope, GitBranch, Zap, AlertCircle } from 'lucide-react';

const Discussion: React.FC = () => {
  return (
    <section id={SectionId.DISCUSSION} className="bg-white py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: MAIN DISCUSSION (Rigorous Scientific Analysis) */}
        <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
                Discussion
              </h2>
              <p className="text-lg text-slate-600">
                Key insights into why the Pt-Fe 1:1 ratio yields the best performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Point 1: Structure & Dispersion */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                        <Microscope size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Optimal Dispersion</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Catalytic activity depends on surface area. Our TEM and XRD data confirm that the <strong>1:1 Pt-Fe ratio</strong> prevents metal particles from clumping together. Unlike the 2:1 ratio, which formed larger clusters, the 1:1 ratio maintained small, highly dispersed nanoparticles (2-5 nm), providing more "active sites" for the reaction.
                    </p>
                </div>

                {/* Point 2: Electronic Interaction */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-science-100 text-science-500 rounded-xl flex items-center justify-center mb-6">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Electronic Synergy</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                         XPS analysis reveals a strong electronic interaction between Platinum and Iron. This "synergy" modifies the electronic state of the catalyst, effectively creating more <strong>oxygen vacancies (Ce³⁺)</strong> on the surface. These vacancies act as active centers that accelerate oxygen activation and transport.
                    </p>
                </div>

                {/* Point 3: Selectivity Mechanism */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                        <GitBranch size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Precision Selectivity</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        The 1:1 structure acts like a precision tool. It favors the selective oxidation of glycerol into <strong>Glyceric Acid</strong> while suppressing the unwanted breaking of C-C bonds (which leads to byproducts like Glycolic Acid). This suggests the optimized surface sites provide a lower-energy pathway for the desired product.
                    </p>
                </div>
            </div>
        </div>

        {/* PART 2: LIMITATIONS & FUTURE WORK (Two Column Layout) */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
             <div className="text-center mb-10">
                <h3 className="text-2xl font-serif font-bold text-slate-900">Study Boundaries & Future Research</h3>
             </div>
             
             <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Limitations */}
                <div>
                   <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="text-amber-500" size={24} />
                      <h4 className="text-lg font-bold text-slate-800">Current Limitations</h4>
                   </div>
                   <ul className="space-y-4">
                      <li className="flex gap-4">
                         <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                         <p className="text-slate-600 text-sm leading-relaxed">
                           <strong>No Surface Area Quantification:</strong> While images show good dispersion, we haven't yet measured the exact specific surface area (BET analysis) to numerically correlate it with reaction rates.
                         </p>
                      </li>
                      <li className="flex gap-4">
                         <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                         <p className="text-slate-600 text-sm leading-relaxed">
                           <strong>Single Temperature Point:</strong> All tests were conducted at one temperature. We have not yet determined the Activation Energy (Ea) to understand the thermodynamic barriers fully.
                         </p>
                      </li>
                   </ul>
                </div>

                {/* Future Work */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                      <ArrowRight className="text-science-500" size={24} />
                      <h4 className="text-lg font-bold text-slate-800">Next Steps</h4>
                   </div>
                   <div className="space-y-4">
                       <div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm hover:border-science-200 transition-colors">
                           <h5 className="font-bold text-slate-900 text-sm mb-1">Advanced Characterization</h5>
                           <p className="text-slate-500 text-xs leading-relaxed">
                             Perform N₂ adsorption-desorption (BET) to quantify surface area and pore size, providing a stricter link between structure and performance.
                           </p>
                       </div>
                       <div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm hover:border-science-200 transition-colors">
                           <h5 className="font-bold text-slate-900 text-sm mb-1">Kinetic Studies</h5>
                           <p className="text-slate-500 text-xs leading-relaxed">
                             Run reactions at different temperatures to calculate Activation Energy and reaction order, refining the mechanistic understanding.
                           </p>
                       </div>
                   </div>
                </div>

             </div>
        </div>

      </div>
    </section>
  );
};

export default Discussion;