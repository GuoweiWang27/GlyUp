import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X,
  FlaskConical
} from 'lucide-react';
import labrecordImage from '../labrecord.png';

// Collage image for Experimental Preparation
const COLLAGE_PLACEHOLDER = labrecordImage;

const ProductShowcase: React.FC = () => {
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
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-slate-100 rounded-full text-slate-600 mb-3 shadow-sm border border-slate-200">
            <Camera size={20} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
            Experimental Preparation
          </h2>
          <p className="text-base text-slate-600">
            A glimpse into the laboratory workflow and the on-site preparation of the catalyst.
          </p>
        </div>

        {/* Collage Display Area - Matched Width to Methodology (max-w-5xl) */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm">
            
            {/* The Image Container - Matched Aspect Ratio (aspect-video) */}
            <div 
               className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-50 group cursor-zoom-in border border-slate-100"
               onClick={openLightbox}
             >
                <img 
                  src={COLLAGE_PLACEHOLDER} 
                  alt="Experimental Preparation Collage" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />

                {/* Zoom Indicator */}
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <Maximize2 size={12} />
                  Click to Expand
                </div>
            </div>
            
            {/* Caption */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex items-center justify-between">
               <div className="flex items-center gap-2 text-slate-500 text-xs">
                <FlaskConical size={14} />
                <span className="font-mono uppercase tracking-wider">Lab Records</span>
              </div>
              <p className="text-sm text-slate-500 italic">
                <strong>Figure 1.</strong> On-site experimental setup and product preparation photos.
              </p>
            </div>

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
            src={COLLAGE_PLACEHOLDER} 
            alt="Enlarged Experimental Prep" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
          
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/80 text-sm font-medium bg-black/50 inline-block px-4 py-2 rounded-full backdrop-blur-md">
              Experimental Preparation Photos
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;