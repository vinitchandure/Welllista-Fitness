import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AnnouncementBar({ onOpenModal }) {
  return (
    <div className="relative z-50 bg-[#F24E06] text-white text-xs sm:text-sm font-medium transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-2">
        <div className="flex items-center justify-between gap-3 text-center sm:text-left">
          
          {/* Left / Center Message */}
          <div className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white shrink-0">
              <Sparkles className="w-3 h-3 text-white" />
            </span>
            <p className="truncate sm:overflow-visible">
              <span className="font-semibold">Start Your Fitness Journey Today</span>
              <span className="mx-2 opacity-75 hidden xs:inline">•</span>
              <span className="hidden xs:inline text-white/90">Join Welliesta Fitness, Amravati</span>
            </p>
          </div>

          {/* Right Action Link */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/90 bg-black/15 hover:bg-black/25 px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
