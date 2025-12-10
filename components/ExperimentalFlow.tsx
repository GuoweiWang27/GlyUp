import React, { useState } from 'react';
import { SectionId } from '../types';
import { 
  Beaker,
  Maximize2,
  X
} from 'lucide-react';
import labflowImage from '../Labflow.png';

// Scheme 1: Experimental Flow Diagram - 已替换为本地图片
const FLOW_DIAGRAM_PLACEHOLDER = labflowImage;

const ExperimentalFlow: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id={SectionId.METHODS} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full text-science-600 mb-4 shadow-sm border border-slate-100">
            <Beaker size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Methodology
          </h2>
          <p className="text-lg text-slate-600">
            A precise two-stage workflow: Synthesis of the bimetallic catalyst followed by rigorous performance evaluation.
          </p>
        </div>

        {/* Image Display Area */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm max-w-5xl mx-auto">
             <div 
               className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-50 group cursor-zoom-in border border-slate-100"
               onClick={openLightbox}
             >
                {/* 
                   [REPLACEMENT INSTRUCTION]:
                   1. Place your flow diagram image in the 'public' folder (e.g., 'flow-diagram.png').
                   2. Change the src below to: src="/flow-diagram.png"
                */}
                <img 
                  src={FLOW_DIAGRAM_PLACEHOLDER} 
                  alt="Experimental Process Flow Diagram" 
                  className="w-full h-full object-contain p-4 mix-blend-multiply"
                  loading="lazy"
                  decoding="async"
                />

                {/* Zoom Indicator (Top Left) */}
                <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  Zoom to Expand
                </div>

                {/* Hover Button (Center) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Maximize2 size={16} /> View Detail
                  </span>
                </div>
             </div>
             <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
               <p className="text-sm text-slate-500 text-center italic">
                 <strong>Scheme 1.</strong> Schematic representation of the experimental procedure, including catalyst synthesis and performance testing.
               </p>
             </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <img 
            src={FLOW_DIAGRAM_PLACEHOLDER} 
            alt="Enlarged Experimental Flow" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm bg-white"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
          
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/80 text-sm font-medium bg-black/50 inline-block px-4 py-2 rounded-full backdrop-blur-md">
              Experimental Process Flow
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperimentalFlow;