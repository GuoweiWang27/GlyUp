import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePdfClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if PDF exists, if not show alert
    fetch('/paper.pdf', { method: 'HEAD' })
      .then((response) => {
        if (!response.ok) {
          e.preventDefault();
          alert('PDF file not found. Please ensure paper.pdf is in the public folder.');
        }
      })
      .catch(() => {
        // If fetch fails, allow default behavior (browser will show 404)
        console.warn('Could not verify PDF existence');
      });
  };

  // Reordered: Microstructure comes before Data & Results now
  const navItems = [
    { label: 'Overview', id: SectionId.ABSTRACT },
    { label: 'Background', id: SectionId.BACKGROUND },
    { label: 'Methodology', id: SectionId.METHODS },
    { label: 'Microstructure', id: SectionId.FIGURES },
    { label: 'Performance', id: SectionId.RESULTS },
    { label: 'Discussion', id: SectionId.DISCUSSION },
    { label: 'About Author', id: SectionId.AUTHORS },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2 rounded-md px-2 flex-shrink-0 min-w-0"
            onClick={() => scrollToSection(SectionId.HOME)}
            aria-label="Go to homepage"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-science-600 font-bold text-xl font-serif flex-shrink-0">NHSJS</span>
              <span className="text-slate-500 text-sm hidden 2xl:block whitespace-nowrap">| Manuscript Presentation</span>
            </div>
          </button>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-shrink-0" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-science-600 px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
                role="menuitem"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            
            {/* 
              [INSTRUCTIONS FOR USER]: 
              1. Rename your PDF file to 'paper.pdf'.
              2. Place it in the 'public' folder of your project (or the root directory if using a simple static server).
              3. The 'download' attribute below sets the filename the user will see when saving.
            */}
            <a 
              href="/paper.pdf"
              download="Pt-Fe_Catalysts_Research_Paper.pdf"
              onClick={handlePdfClick}
              className="bg-science-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-science-700 transition-colors flex items-center gap-2 flex-shrink-0 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
              aria-label="Download working manuscript PDF"
            >
              <FileDown size={16} aria-hidden="true" />
              Manuscript PDF
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-slate-100" role="menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-600 hover:text-science-600 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
             <a 
               href="/paper.pdf"
               download="Pt-Fe_Catalysts_Research_Paper.pdf"
               onClick={handlePdfClick}
               className="flex items-center gap-2 w-full text-left text-science-600 font-bold px-3 py-2 hover:bg-science-50 rounded-md focus:outline-none focus:ring-2 focus:ring-science-500 focus:ring-offset-2"
               role="menuitem"
             >
              <FileDown size={18} aria-hidden="true" />
              Manuscript PDF
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
