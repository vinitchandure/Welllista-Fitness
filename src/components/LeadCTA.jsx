import React from 'react';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MapPin, 
  Users 
} from 'lucide-react';
import Reveal from './Reveal';

export default function LeadCTA({ onOpenModal }) {
  const PHONE_NUMBER = "+919637266663";
  const FORMATTED_PHONE = "+91 96372 66663";

  return (
    <section id="cta" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F4F9FD] border-t border-[#E2EEF7]">
      
      {/* ================= MINIMAL & ENERGETIC BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Ambient Warm Orange Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFF0EB]/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#EAF7FF] rounded-full blur-3xl" />

        {/* Dynamic Kinetic Motion Wave */}
        <div className="absolute inset-x-0 bottom-12 h-36 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,70 Q360,130 720,70 T1500,70" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M-50,70 Q360,130 720,70 T1500,70" 
              stroke="#F24E06" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            <circle cx="720" cy="70" r="4.5" fill="#F24E06" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HERO CTA SHOWCASE CONTAINER ================= */}
        <Reveal variant="fade-up" duration={750}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-[#DFEDF6] bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT COLUMN: HIGH-CONVERSION COPY & DUAL CTAS (7 COLS) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
              
              <div>
                {/* Motivation Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border border-[#F24E06]/30 mb-6 shadow-sm">
                  <Zap className="w-4 h-4 text-[#F24E06] animate-bounce" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#F24E06]">
                    Start Your Transformation
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#182434] tracking-tight font-display mb-5 leading-[1.1]">
                  Your Stronger Self <br />
                  <span className="text-[#F24E06] relative inline-block">
                    Starts Here.
                    {/* Hand-drawn style energetic underline */}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F24E06]/40" viewBox="0 0 250 12" fill="none">
                      <path d="M2,9 C70,3 180,3 248,9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>

                {/* Motivating Supporting Line */}
                <p className="text-base sm:text-lg lg:text-xl text-[#182434]/80 leading-relaxed font-sans mb-8 max-w-xl">
                  Take the first step towards a healthier, stronger and more confident self. Whether you are lifting your first barbell or training for athletic performance, Welliesta provides the guidance, imported equipment, and community to get you there.
                </p>

                {/* Key Onboarding Perks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 pt-2 border-t border-[#E8F1F7]">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-gradient-to-br from-white to-[#F2F7FB] p-2.5 rounded-xl border border-[#DCEAF5] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F24E06] shrink-0" />
                    <span>Free InBody 570 Scan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-gradient-to-br from-white to-[#F2F7FB] p-2.5 rounded-xl border border-[#DCEAF5] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F24E06] shrink-0" />
                    <span>1-on-1 Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-gradient-to-br from-white to-[#F2F7FB] p-2.5 rounded-xl border border-[#DCEAF5] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F24E06] shrink-0" />
                    <span>Zero Pressure Onboarding</span>
                  </div>
                </div>
              </div>

              {/* DUAL PROMINENT CTAS */}
              <div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  
                  {/* CTA 1: BOOK A FREE TRIAL */}
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#F24E06] text-white font-black text-base sm:text-lg hover:bg-[#d64303] transition-all shadow-xl shadow-orange-500/35 hover:shadow-orange-500/50 hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-white/90 group-hover:rotate-12 transition-transform" />
                    <span>Book a Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  {/* CTA 2: CALL NOW */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#182434] hover:bg-black text-white font-bold text-base sm:text-lg transition-all shadow-lg shadow-slate-900/15 hover:shadow-slate-900/30 hover:-translate-y-1 active:translate-y-0 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#F24E06] transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span>Call Now</span>
                    <span className="hidden sm:inline text-xs text-slate-300 font-mono">({FORMATTED_PHONE})</span>
                  </a>

                </div>

                {/* Sub-CTA Trust Signal */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-4 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant confirmation • Flexible workout timings from 6:00 AM to 10:00 PM</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: HIGH-IMPACT ATHLETIC VISUAL WITH LIVE BADGES (5 COLS) */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#182434]">
              
              {/* High-Impact Gym Photography */}
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80" 
                alt="Welliesta Fitness Athlete Training"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out" 
              />
              
              {/* Multi-layered Cinematic Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#182434] via-[#182434]/40 to-transparent lg:bg-gradient-to-r lg:from-[#182434]/40 lg:via-transparent lg:to-black/30" />

              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-1/2 right-10 w-48 h-48 bg-[#F24E06]/30 rounded-full blur-2xl pointer-events-none" />

              {/* FLOATING GLASSMORPHIC BADGE: LIVE PASSES AVAILABLE */}
              <div className="absolute top-6 left-6 right-6 sm:right-auto z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-xl max-w-xs animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 relative flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Studio Access Pass
                    </div>
                    <div className="text-xs font-black text-[#182434]">
                      Complimentary 1-Day Trial Active
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM FLOATING CARD: COMMUNITY STAT */}
              <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F24E06]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Amravati Community
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-[#F24E06] bg-white/10 px-2 py-0.5 rounded">
                    4.4★ Rated
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  Join 1,000+ Active Members at Raashi Trinity
                </div>
              </div>

            </div>

          </div>

        </div>
        </Reveal>

      </div>
    </section>
  );
}
