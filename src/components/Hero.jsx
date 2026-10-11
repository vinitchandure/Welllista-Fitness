import React, { useState, useEffect } from 'react';
import Header from './Header';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Flame,
  Camera
} from 'lucide-react';

const bgSlides = [
  {
    src: '/slides/gym-slide-1.jpg',
    caption: 'Functional Turf & Boxing Arena',
  },
  {
    src: '/slides/gym-slide-2.png',
    caption: 'Welliesta Studio Entrance',
  },
  {
    src: '/slides/gym-slide-3.jpg',
    caption: 'Cardio & Conditioning Floor',
  },
];

export default function Hero({ onOpenModal, onOpenAccountModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#EAF7FF] pb-14 sm:pb-18 lg:pb-24">
      
      {/* ================= FULL-WIDTH BACKGROUND IMAGE SLIDER (82% HIGH VISIBILITY) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {bgSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-[0.82]' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.caption}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ================= LOCALIZED OVERLAY (ONLY WHERE NEEDED FOR TEXT CONTRAST) ================= */}
      {/* Soft directional gradient restricted to the left side text zone so the rest of the gym background is fully visible */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-7/12 z-[1] bg-gradient-to-r from-white/95 via-white/85 sm:via-[#EAF7FF]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 z-[1] bg-gradient-to-t from-[#EAF7FF]/60 to-transparent pointer-events-none" />

      {/* Subtle modern brand geometric glow accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#FFF0EB]/40 to-transparent rounded-full blur-3xl z-[2] pointer-events-none" />

      {/* Decorative Brand Angle Line */}
      <div className="absolute top-12 right-1/3 w-64 h-64 border border-[#F24E06]/20 rounded-3xl -rotate-12 pointer-events-none z-[2]" />

      {/* ================= HEADER OVER THE BACKGROUND IMAGE SLIDER ================= */}
      <Header onOpenModal={onOpenModal} onOpenAccountModal={onOpenAccountModal} />

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Conversion Messaging ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Crisp text card/container */}
            <div className="p-2 sm:p-4 rounded-3xl">
              
              {/* Location & Credibility Badge */}
              <div 
                className="hero-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D5E7F3] shadow-[0_2px_8px_rgba(24,36,52,0.06)] mb-5 sm:mb-6"
                style={{ animationDelay: '0.05s' }}
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F24E06] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F24E06]"></span>
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#182434]">
                  <MapPin className="w-3.5 h-3.5 text-[#F24E06]" />
                  <span>Amravati's Modern Fitness & Training Studio</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 
                className="hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#182434] font-heading leading-[1.12] mb-5 sm:mb-6 drop-shadow-xs"
                style={{ animationDelay: '0.15s' }}
              >
                Build Strength. <br className="hidden sm:inline" />
                Build Confidence. <br className="hidden sm:inline" />
                <span className="relative inline-block text-[#F24E06]">
                  Build Your Best Self.
                  {/* Subtle underline stroke matching brand spirit */}
                  <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#F24E06]/40 overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Supporting Subtext */}
              <p 
                className="hero-fade-up text-base sm:text-lg text-[#243447] max-w-xl font-medium leading-relaxed mb-7 sm:mb-8"
                style={{ animationDelay: '0.25s' }}
              >
                Train smarter with expert guidance, modern equipment and a motivating fitness environment at <span className="font-extrabold text-[#182434]">Welliesta Fitness, Amravati</span>.
              </p>

              {/* ================= CTAs Area ================= */}
              <div 
                className="hero-fade-up w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8"
                style={{ animationDelay: '0.35s' }}
              >
                
                {/* PRIMARY CTA: Book a Free Trial */}
                <button
                  onClick={onOpenModal}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl shadow-[0_8px_25px_rgba(242,78,6,0.4)] hover:shadow-[0_12px_30px_rgba(242,78,6,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <span>Book a Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* SECONDARY CTA: Call Now */}
                <a
                  href="tel:+919637266663"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-[#182434] bg-white hover:text-[#F24E06] border-2 border-[#182434]/30 hover:border-[#F24E06] rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#F24E06]" />
                  <span className="flex items-center gap-1.5">
                    Call Now
                    <span className="text-xs font-semibold text-[#5A6D82] hidden xs:inline">(+91 96372 66663)</span>
                  </span>
                </a>

              </div>

              {/* ================= TRUST ELEMENT: Google Reviews ================= */}
              <div 
                className="hero-fade-up flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-[#182434]/15 w-full"
                style={{ animationDelay: '0.45s' }}
              >
                
                {/* Google Review Credibility Block */}
                <div className="flex items-center gap-3">
                  {/* Official Google 'G' Styled Badge */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D5E7F3] flex items-center justify-center shadow-xs">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.39-1.5-.39-2.24s.14-1.52.39-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                    </svg>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-black text-[#182434] tracking-tight">4.4/5</span>
                    </div>
                    <p className="text-xs text-[#243447] font-semibold mt-0.5">
                      Based on <span className="font-extrabold text-[#182434]">244+ Google Reviews</span>
                    </p>
                  </div>
                </div>

                {/* Supporting Trust Divider */}
                <div className="hidden sm:block h-8 w-px bg-slate-400/50" />

                {/* Local Facility Assurance */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#182434]">
                  <ShieldCheck className="w-4 h-4 text-[#F24E06]" />
                  <span>Certified Trainers • Modern Bio-Mechanical Setup</span>
                </div>

              </div>

            </div>

            {/* ================= BACKGROUND SLIDE CONTROLS (WITH LIVE PHOTO BADGE) ================= */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-2 pl-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 border border-[#D5E7F3] shadow-xs text-[11px] font-black uppercase tracking-wider text-[#182434]">
                <Camera className="w-3.5 h-3.5 text-[#F24E06]" />
                <span>Actual Gym Views:</span>
              </div>
              <div className="flex items-center gap-2">
                {bgSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Show ${slide.caption}`}
                    className={`group relative h-3 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                      idx === currentSlide 
                        ? 'w-12 bg-[#182434]' 
                        : 'w-3 bg-white/90 border border-slate-300 hover:bg-[#F24E06]/50'
                    }`}
                  >
                    {idx === currentSlide && (
                      <span className="absolute inset-0 bg-[#F24E06] animate-slider-progress" />
                    )}
                    <span className="sr-only">{slide.caption}</span>
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-[#182434] bg-white/80 px-2 py-0.5 rounded-md border border-white/60 shadow-xs hidden sm:inline-block">
                • {bgSlides[currentSlide].caption}
              </span>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Large Fitness Visual ================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container with Subtle Frame & Brand Angle */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Geometric Orange Accent Backing (Welliesta brand vibe) */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#F24E06]/25 via-[#F24E06]/10 to-transparent rounded-3xl transform rotate-1 -z-10" />
              
              {/* Main Athletic Gym Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-[0_20px_50px_rgba(24,36,52,0.18)] border border-[#D5E7F3]">
                
                {/* Image Container with Natural Light Treatment */}
                <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
                    alt="Strength and fitness training with modern equipment at Welliesta Fitness Amravati"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle, soft gradient at base to ensure floating card contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182434]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Right Studio Tag */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#182434]">Open 6 AM - 10 PM</span>
                  </div>

                  {/* Inside image bottom caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white hidden sm:block">
                    <p className="text-xs font-semibold tracking-wide text-white/90 drop-shadow-sm">
                      Raashi Trinity, Sai Nagar • Amravati
                    </p>
                  </div>
                </div>

              </div>

              {/* ================= FLOATING TRUST CARDS ================= */}
              
              {/* Floating Card 1: Results & Certified Coaching */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_30px_rgba(24,36,52,0.18)] border border-[#E2EEF5] flex items-center gap-3 animate-in fade-in-0 duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] text-[#F24E06] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#182434] leading-tight">
                    Results-Driven Fitness
                  </div>
                  <div className="text-[11px] font-semibold text-[#5A6D82] mt-0.5">
                    100% Tailored Workout Plans
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Community & Active Members */}
              <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_25px_rgba(24,36,52,0.15)] border border-[#E2EEF5] flex items-center gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Member"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Member"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Member"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#182434] leading-none">
                    Active Community
                  </div>
                  <div className="text-[10px] text-[#F24E06] font-extrabold mt-0.5">
                    Men & Women (18–35)
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
