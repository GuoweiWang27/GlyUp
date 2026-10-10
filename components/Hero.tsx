import React from 'react';
import { PAPER_INFO } from '../constants';
import { SectionId } from '../types';
import { FlaskConical, ArrowRight, Clock, FileText, Atom, Recycle, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative bg-white pt-20 pb-20 sm:pt-24 sm:pb-24 overflow-hidden border-b border-slate-100">
      {/* Decorative background elements - subtle dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0d9cb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-science-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="text-center lg:text-left">
            
            {/* 1. Journal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-science-50 text-science-700 text-xs font-bold uppercase tracking-wide mb-6 border border-science-100 shadow-sm mx-auto lg:mx-0">
              <FlaskConical size={14} />
              {PAPER_INFO.journal}
            </div>
            
            {/* 2. Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chem-900 via-science-800 to-science-600">
                {PAPER_INFO.title}
              </span>
            </h1>
            
            {/* 3. Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PAPER_INFO.subtitle}
            </p>

            {/* 4. Authors & Affiliation */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 text-base sm:text-lg text-slate-800 font-medium mb-2">
                {PAPER_INFO.authors.map((author, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span>{author.name}</span>
                    {idx < PAPER_INFO.authors.length - 1 && <span className="text-slate-300 mx-1">|</span>}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 italic text-sm">
                {PAPER_INFO.authors[0].affiliation}
              </p>
            </div>

            {/* 5. Status Pill */}
            <div className="flex justify-center lg:justify-start mb-10">
              {PAPER_INFO.doi ? (
                <a 
                  href={`https://doi.org/${PAPER_INFO.doi}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium hover:bg-slate-100 hover:text-science-600 transition-colors border border-slate-200"
                >
                  <span className="font-bold">DOI:</span> {PAPER_INFO.doi}
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-100 cursor-default shadow-sm">
                  <Clock size={14} />
                  <span className="font-bold">Status:</span> {PAPER_INFO.status}
                </div>
              )}
            </div>

            {/* 6. Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 lg:mb-0">
              <button 
                onClick={() => document.getElementById(SectionId.ABSTRACT)?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-3.5 bg-science-600 text-white rounded-full font-semibold hover:bg-science-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
                aria-label="Scroll to abstract section"
              >
                Read Abstract <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button 
                onClick={() => document.getElementById(SectionId.FIGURES)?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
                aria-label="Scroll to data figures section"
              >
                View Data Figures
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Graphical Abstract / Visual Summary */}
          {/* Changed hidden lg:block to relative mt-12 lg:mt-0 to show on mobile */}
          <div className="relative mt-12 lg:mt-0">
             <div className="absolute inset-0 bg-science-200 blur-2xl opacity-20 rounded-full transform translate-x-10 translate-y-10"></div>
             
             {/* The Card */}
             <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-science-400 to-chem-400"></div>
                
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Atom size={14} />
                  Research Highlight
                </h3>

                {/* Diagram */}
                <div className="flex flex-col items-center space-y-4">
                  
                  {/* Step 1: Input */}
                  <div className="flex items-center gap-4 w-full justify-center">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center w-28 shadow-sm">
                      <span className="block text-2xl mb-1">🛢️</span>
                      <span className="text-xs font-bold text-slate-600">Biodiesel Waste</span>
                      <span className="block text-[10px] text-slate-400">(Glycerol)</span>
                    </div>
                    <div className="text-slate-300">+</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center w-28 shadow-sm">
                       <span className="block text-2xl mb-1">🫧</span>
                       <span className="text-xs font-bold text-slate-600">Oxygen</span>
                       <span className="block text-[10px] text-slate-400">(Oxidant)</span>
                    </div>
                  </div>

                  {/* Arrow + Catalyst */}
                  <div className="relative py-2 w-full flex justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full border border-science-200 shadow-sm z-10 flex flex-col items-center">
                       <span className="text-[10px] font-bold text-science-600">Pt-Fe / CeO₂</span>
                       <span className="text-[9px] text-slate-400 font-mono">Ratio 1:1</span>
                    </div>
                    <div className="h-px bg-slate-300 w-3/4"></div>
                    <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
                      <ArrowRight size={16} className="text-slate-300" />
                    </div>
                  </div>

                  {/* Step 2: Output */}
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center w-full shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1">
                      <Leaf size={12} className="text-emerald-400" />
                    </div>
                    <span className="block text-3xl mb-2">🧪</span>
                    <h4 className="font-bold text-emerald-800">Glyceric Acid</h4>
                    <p className="text-xs text-emerald-600 mb-2">High-Value Chemical</p>
                    <div className="flex justify-center gap-2 text-[10px] font-mono text-emerald-700/70">
                      <span className="bg-emerald-100/50 px-2 py-0.5 rounded">Conv: 85.6%</span>
                      <span className="bg-emerald-100/50 px-2 py-0.5 rounded">Sel: 56.3%</span>
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                   <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold rounded flex items-center gap-1">
                      <Recycle size={10} /> Upcycling
                   </span>
                   <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold rounded flex items-center gap-1">
                      <Leaf size={10} /> Green Chemistry
                   </span>
                </div>

             </div>
          </div>

        </div>

        {/* 7. Original Manuscript Reference (Divider Style) - Moved to bottom of section for cleaner layout */}
        <div className="mt-16 pt-8 max-w-2xl mx-auto border-t border-slate-100 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-xs font-bold tracking-widest uppercase mb-3">
                <FileText size={12} />
                Working Manuscript Title
             </div>
             <h3 className="text-slate-500 font-serif italic text-base leading-snug px-4">
                "{PAPER_INFO.fullTitle}"
             </h3>
             <p className="mt-3 text-sm text-slate-500">
                This research presentation and its PDF reflect the working manuscript. The final article link, publication details and DOI will be added.
             </p>
             
             {/* Keywords */}
             <div className="mt-4 flex flex-wrap justify-center gap-2 opacity-60">
              {PAPER_INFO.keywords.map((kw, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-medium uppercase tracking-wide">
                  {kw}
                </span>
              ))}
            </div>
        </div>

      </div>
      
      {/* Fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
