import React from 'react';
import { PAPER_INFO } from '../constants';
import { SectionId } from '../types';
import { FlaskConical, MapPin, ArrowUp, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Split Layout */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          
          {/* Left Column: Journal & Paper Context */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-science-700 font-bold uppercase tracking-wider text-sm">
              <FlaskConical size={16} />
              <span>Publication Context</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {PAPER_INFO.journal}
              </h3>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-3">
                 {PAPER_INFO.doi ? (
                  <a 
                    href={`https://doi.org/${PAPER_INFO.doi}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-science-600 hover:text-science-800 font-medium transition-colors border-b border-transparent hover:border-science-600"
                  >
                    DOI: {PAPER_INFO.doi}
                  </a>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
                    {PAPER_INFO.status}
                  </span>
                )}
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="text-slate-500 text-sm flex items-center gap-1">
                   <FileText size={14} />
                   Manuscript Presentation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Institution & Location */}
          <div className="text-center md:text-right space-y-4 flex flex-col items-center md:items-end justify-center">
             <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-xs">
              <span>Institution</span>
            </div>
            <div className="space-y-1">
              <p className="text-slate-800 font-medium text-lg leading-snug max-w-xs md:max-w-none mx-auto md:mx-0">
                {PAPER_INFO.authors[0].affiliation}
              </p>
              <div className="flex items-center justify-center md:justify-end gap-1 text-slate-500 text-sm">
                <MapPin size={14} />
                <span>Beijing, China</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-8"></div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left text-slate-400 text-xs leading-relaxed">
            <p>© {new Date().getFullYear()} <span className="text-slate-600 font-semibold">Guowei Wang & Ya Zhang</span>. All rights reserved.</p>
            <p className="mt-1">Content based on original research data.</p>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-science-50 text-slate-600 hover:text-science-600 rounded-full transition-all text-sm font-medium border border-slate-200 hover:border-science-200 focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;