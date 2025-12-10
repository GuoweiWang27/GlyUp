import React, { useState } from 'react';
import { SectionId } from '../types';
import { Microscope, Maximize2, X } from 'lucide-react';
import temImage from '../TEM.png';
import xdrImage from '../XDR.png';
import xpsImage from '../XPS.png';

// --- PLACEHOLDERS START (Updated Aspect Ratios) ---
// Figure 2: TEM (16:9) -> 800x450 - 已替换为本地图片 TEM.png
const PLACEHOLDER_1 = temImage;

// Figure 3: XRD (1:1) -> 600x600 - 已替换为本地图片 XDR.png
const PLACEHOLDER_2 = xdrImage;

// Figure 4: XPS (16:9) -> 800x450 - 已替换为本地图片 XPS.png
const PLACEHOLDER_3 = xpsImage;
// --- PLACEHOLDERS END ---

const ScientificImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick?: (currentSrc: string) => void;
}> = ({ src, alt, className, onClick }) => {
  return (
    <div className={`relative ${className} bg-slate-100 group-hover:ring-2 ring-science-100 transition-all overflow-hidden`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain mix-blend-multiply p-2"
        onClick={() => onClick && onClick(src)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const Microstructure: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id={SectionId.FIGURES} className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-science-50 rounded-full text-science-600 mb-4">
            <Microscope size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">Characterization Results</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Detailed structural analysis confirming the successful synthesis and optimal dispersion of the catalyst.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* --- Figure 2: TEM (Aspect Ratio 16:9) --- */}
          <div className="group bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Image Container: 16:9 */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl cursor-zoom-in bg-white border border-slate-200 shadow-inner">
                <ScientificImage 
                  src={PLACEHOLDER_1}
                  alt="TEM & EDS Mapping Results" 
                  className="absolute inset-0 w-full h-full"
                  onClick={openLightbox}
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Zoom</div>
                 {!selectedImage && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
                      <Maximize2 size={16} /> View Full
                    </span>
                  </div>
                )}
              </div>
              
              {/* Text Content */}
              <div>
                <div className="mb-6">
                  <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">Figure 2: TEM & EDS Mapping</h4>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
                    1:1 Ratio Prevents Agglomeration & Ensures Dispersion
                  </h3>
                </div>
                <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
                   <p className="text-slate-600 text-sm leading-relaxed">
                     <strong className="block text-slate-800 mb-2">Visual Guide:</strong>
                     The TEM images <strong>(A-D)</strong> display the morphology, where dark, tiny dots (approx. 2–5 nm) represent the metal nanoparticles uniformly scattered across the lighter CeO₂ support. The EDS elemental mapping <strong>(C-D)</strong> confirms this distribution: the overlapping signals of Platinum (red) and Iron (green) indicate that the metals are intimately mixed at the atomic level.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid for Figure 3 and 4 */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* --- Figure 3: XRD (Aspect Ratio 1:1) --- */}
            <div className="group bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Image Container: Square (1:1) */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl cursor-zoom-in bg-white border border-slate-200 shadow-inner mb-6 flex-shrink-0">
                 <ScientificImage 
                    src={PLACEHOLDER_2}
                    alt="XRD Patterns" 
                    className="absolute inset-0 w-full h-full"
                    onClick={openLightbox}
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Zoom</div>
              </div>
              
              <div className="mt-auto flex-grow flex flex-col">
                 <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Figure 3: XRD Analysis</h4>
                 <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 leading-snug">
                   Absence of Metal Oxide Peaks Confirms Ultrafine Dispersion
                 </h3>
                 <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm mt-auto">
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <strong className="block text-slate-800 mb-2">Visual Guide:</strong>
                      In the 1:1 sample curve, there are <em>no</em> distinct peaks for metallic Platinum (typically at 39.8°) or Iron oxides. This "silence" in the diffraction pattern corroborates that the metal particles are too small to be detected by XRD.
                    </p>
                 </div>
              </div>
            </div>

            {/* --- Figure 4: XPS (Aspect Ratio 16:9) --- */}
            <div className="group bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Image Container: Video (16:9) */}
              {/* Note: This image is shorter than the square one on the left. The card will stretch to match height, leaving more room for text below. */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl cursor-zoom-in bg-white border border-slate-200 shadow-inner mb-6 flex-shrink-0">
                 <ScientificImage 
                    src={PLACEHOLDER_3}
                    alt="XPS Spectra" 
                    className="absolute inset-0 w-full h-full" 
                    onClick={openLightbox}
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Zoom</div>
              </div>

              <div className="mt-auto flex-grow flex flex-col">
                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Figure 4: XPS Spectra</h4>
                 <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 leading-snug">
                   Binding Energy Shifts Reveal Electronic Interaction
                 </h3>
                 <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm mt-auto">
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <strong className="block text-slate-800 mb-2">Visual Guide:</strong>
                      These graphs measure the Binding Energy (eV). Compare the peak positions: the peaks for the 1:1 catalyst are <strong>shifted</strong> relative to the pure Pt or Fe references. This shift acts as a "fingerprint" of the electron transfer between Pt and Fe, verifying the strong electronic synergy that activates the catalyst.
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
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
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm bg-white"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </section>
  );
};

export default Microstructure;