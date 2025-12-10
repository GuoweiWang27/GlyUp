import React from 'react';
import { SectionId } from '../types';
import { GraduationCap, ArrowRight, Zap, FlaskConical, Quote } from 'lucide-react';
import avatarLogo from '../头像Logo.png';

const AboutAuthor: React.FC = () => {
  return (
    <section id={SectionId.AUTHORS} className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5">
            
            {/* Sidebar / Profile Area */}
            <div className="md:col-span-2 bg-science-900 text-white p-8 sm:p-10 flex flex-col items-center md:justify-center relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-science-700 to-science-900 opacity-50"></div>
              
              <div className="relative z-10 w-full flex flex-col items-center text-center md:text-left">
                {/* Photo */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-6 border-4 border-white/20 shadow-lg overflow-hidden bg-slate-200 shrink-0">
                  <img 
                    src={avatarLogo} 
                    alt="Guowei Wang" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Guowei Wang</h2>
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium tracking-wider uppercase mb-8 border border-white/10">
                  Student Researcher
                </div>

                {/* Details List */}
                <div className="space-y-6 text-sm text-science-100 w-full max-w-sm">
                  {/* Education */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:text-left text-center">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                        <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase opacity-60 mb-1">Education</span>
                      <span className="block font-semibold text-white text-base">11th Grader</span>
                      <span className="block text-xs mt-1 leading-relaxed opacity-80 break-words">
                        The High School Affiliated to Beijing Normal University
                      </span>
                    </div>
                  </div>
                  
                  {/* Current Focus */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:text-left text-center">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                        <FlaskConical size={20} className="text-chem-500" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase opacity-60 mb-1">Current Focus</span>
                      <span className="block font-semibold text-white text-base">Biodiesel Upcycling</span>
                    </div>
                  </div>

                  {/* Future Goal */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:text-left text-center">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                        <Zap size={20} className="text-amber-400" />
                    </div>
                    <div>
                       <span className="block text-xs uppercase opacity-60 mb-1">Future Goal</span>
                       <span className="block font-semibold text-white text-base">Energy Storage Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center justify-center md:justify-start gap-2">
                About the Researcher
              </h3>
              
              {/* Main Vision Statement */}
              <div className="space-y-6 text-slate-700 leading-relaxed text-lg mb-8 text-center md:text-left">
                <p>
                  "We are entering a <strong className="text-science-700">Silicon Age</strong> driven by AI, but this digital future demands a massive, <strong className="text-science-700">sustainable energy foundation</strong>. I believe <strong className="text-science-700">Chemistry</strong> is the key to building it.
                </p>
                <p>
                  My journey starts here: upcycling biodiesel waste with Pt-Fe catalysts. But my vision goes further. I aim to bridge <strong className="text-chem-900">Green Chemistry</strong> with <strong className="text-amber-600">Energy Storage</strong>, developing the advanced materials needed to power our high-tech world without compromising the planet."
                </p>
              </div>

              {/* GRIT IN THE LAB - Highlighted Story Block */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl shadow-sm relative overflow-hidden group">
                 {/* Subtle decorative icon */}
                 <Quote className="absolute top-4 right-4 text-amber-200 opacity-20 transform scale-x-[-1]" size={60} />

                  <h4 className="flex items-center gap-2 text-amber-800 font-extrabold text-sm uppercase mb-3 tracking-wide justify-center md:justify-start">
                    Grit in the Lab
                  </h4>
                  
                  <div className="space-y-3 text-slate-800 text-base italic relative z-10 text-center md:text-left">
                    <p>
                      "Science requires resilience. During a critical week, my high-pressure reactor malfunctioned late at night. Instead of scrubbing the experiment, I rushed back to the lab at <span className="inline-block bg-amber-200/60 px-1 rounded font-bold text-amber-900 not-italic">10 PM</span>.
                    </p>
                    <p>
                      I spent hours manually stabilizing the pressure parameters to save the data. This experience taught me that whether building circuits or synthesizing catalysts, <span className="font-bold text-slate-900 not-italic border-b-2 border-amber-300">innovation depends on the willingness to solve hard problems when no one is watching</span>."
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

export default AboutAuthor;