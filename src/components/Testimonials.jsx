import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Quote
} from 'lucide-react';
import Reveal from './Reveal';

export default function Testimonials() {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Welliesta+Fitness+(Best+Gym,+Fitness+Studio)/";

  // Authentic, real member reviews from Welliesta Fitness (Raashi Trinity, Sai Nagar, Amravati)
  const reviews = [
    {
      id: 1,
      name: "Vijay Mundada",
      initials: "VM",
      avatarBg: "bg-blue-600",
      rating: 5,
      date: "Google Review",
      text: "One of the best fitness centers in Amravati. Cooperative staff, excellent certified trainers, and well maintained equipment.",
      highlight: "Cooperative staff & excellent trainers",
      source: "Google Maps Verified"
    },
    {
      id: 2,
      name: "Samiksha More",
      initials: "SM",
      avatarBg: "bg-emerald-600",
      rating: 5,
      date: "Google Review",
      text: "Best Gym in Amravati. Clean environment, very supportive trainers, and positive workout atmosphere.",
      highlight: "Best Gym in Amravati • Clean environment",
      source: "Google Maps Verified"
    },
    {
      id: 3,
      name: "Shriniket",
      initials: "S",
      avatarBg: "bg-orange-600",
      rating: 5,
      date: "Google Review",
      text: "Advanced facilities, great location in Sai Nagar, and the staff and owner are very helpful and welcoming.",
      highlight: "Advanced facilities & great location",
      source: "Google Maps Verified"
    },
    {
      id: 4,
      name: "Harish",
      initials: "H",
      avatarBg: "bg-indigo-600",
      rating: 5,
      date: "Google Review",
      text: "Unbeatable location in Sai Nagar. The gym is spacious, well-designed with plenty of natural light, and top facilities.",
      highlight: "Spacious with natural light & top facilities",
      source: "Google Maps Verified"
    },
    {
      id: 5,
      name: "Vipin",
      initials: "V",
      avatarBg: "bg-purple-600",
      rating: 5,
      date: "Google Review",
      text: "One-of-a-kind gym for Amravati city. Spacious floor area, motivating vibes, and good trainers.",
      highlight: "One-of-a-kind gym for Amravati",
      source: "Google Maps Verified"
    },
    {
      id: 6,
      name: "Aniket",
      initials: "A",
      avatarBg: "bg-rose-600",
      rating: 5,
      date: "Google Review",
      text: "Best fitness centre in Amravati. Energetic environment, well-equipped machines, and great community.",
      highlight: "Energetic vibes & well-equipped machines",
      source: "Google Maps Verified"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = reviews.length;

  // Gentle, minimal auto-advance (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Google 'G' official SVG icon
  const GoogleLogo = () => (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );

  return (
    <section id="reviews" className="relative bg-[#F8FBFE] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] overflow-hidden">
      
      {/* ================= HIGH-QUALITY FITNESS & COMMUNITY BACKGROUND WITH ENHANCED VISIBILITY ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* High-quality gym community photo showing real members encouraging each other */}
        <div className="absolute inset-0">
          <img 
            src="/welliesta-community-bg.jpg" 
            alt="Welliesta Fitness Member Community" 
            className="w-full h-full object-cover object-center transform scale-105 opacity-65 dark:opacity-45"
          />
        </div>

        {/* Balanced directional gradient overlays ensuring visible community energy while review cards remain pristine */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFE]/65 via-[#F8FBFE]/50 to-[#F8FBFE]/75 dark:from-[#0D141F]/80 dark:via-[#0D141F]/70 dark:to-[#0D141F]/85" />
        
        {/* Radial center clear wash to give atmospheric depth behind review cards */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/40 via-transparent to-[#F8FBFE]/55 dark:from-[#131D2A]/40 dark:via-transparent dark:to-[#0D141F]/60" />

        {/* Ambient brand glow accents */}
        <div className="absolute top-1/3 left-1/3 w-[480px] h-[480px] bg-[#FFF0EB]/30 dark:bg-[#F24E06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] bg-[#EAF7FF]/50 dark:bg-[#0E2238]/30 rounded-full blur-3xl" />

        {/* ELEMENT 1: Subtle Kinetic Conversation/Feedback Wave */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,100 C300,100 450,40 720,40 C990,40 1140,110 1550,110" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M-50,100 C300,100 450,40 720,40 C990,40 1140,110 1550,110" 
              stroke="#F24E06" 
              strokeWidth="2.4" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            <circle cx="720" cy="40" r="4.5" fill="#F24E06" />
          </svg>
        </div>

        {/* ELEMENT 2: Faint Star / Review Crest Geometry (Upper Left) */}
        <div className="absolute top-12 left-10 w-[360px] h-[360px] opacity-[0.05] animate-float-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <polygon points="100,10 125,75 195,75 138,115 160,180 100,140 40,180 62,115 5,75 75,75" stroke="#182434" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="80" stroke="#F24E06" strokeWidth="1.5" />
          </svg>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F24E06]/20 shadow-sm mb-4">
                <Sparkles className="w-4 h-4 text-[#F24E06]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F24E06]">
                  Member Experiences
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182434] tracking-tight font-display mb-4">
                What Our <span className="text-[#F24E06]">Members Say</span>
              </h2>

              <p className="text-base sm:text-lg text-[#182434]/70 leading-relaxed font-sans">
                Authentic stories and experiences shared by members who train every day at Welliesta Fitness in Raashi Trinity, Amravati.
              </p>
            </div>

            {/* OVERALL RATING BADGE */}
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F2F8FC] p-4.5 sm:p-5 rounded-2xl border border-[#DCEBF6] shadow-md shadow-slate-200/50 shrink-0 flex items-center gap-4 relative overflow-hidden group">
              {/* Soft Ambient Light Corner Glow */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#FFF0EB] rounded-full blur-lg pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-white border border-[#E2EEF8] flex items-center justify-center shadow-xs relative z-10">
                <GoogleLogo />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xl sm:text-2xl font-black text-[#182434] font-display">4.4</span>
                  <div className="flex items-center text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500">
                  244+ Google Reviews • Sai Nagar, Amravati
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= INTERACTIVE TESTIMONIAL SLIDER ================= */}
        <Reveal variant="fade-up" delay={150} duration={750}>
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
          
          {/* Slider Viewport Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="w-full shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/60 border border-[#DFEDF6] hover:border-[#F24E06]/35 max-w-4xl mx-auto relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300">
                    
                    {/* Subtle Ambient Light Corner Glow */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FFF0EB]/80 rounded-full blur-2xl pointer-events-none" />

                    {/* Background Subtle Watermark Quote */}
                    <Quote className="absolute right-6 top-6 w-24 h-24 text-slate-200/60 -rotate-12 pointer-events-none select-none" />

                    <div>
                      {/* Top Bar: Source & Rating */}
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80">
                          <GoogleLogo />
                          <span className="text-xs font-bold text-slate-700">
                            {rev.source}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-[#FBBC05] fill-[#FBBC05]" />
                          ))}
                        </div>
                      </div>

                      {/* Highlight Hook */}
                      <div className="text-xs sm:text-sm font-bold text-[#F24E06] uppercase tracking-wider mb-3">
                        "{rev.highlight}"
                      </div>

                      {/* Main Authentic Review Body */}
                      <p className="text-lg sm:text-2xl text-[#182434] font-medium leading-relaxed font-sans mb-8 relative z-10">
                        "{rev.text}"
                      </p>
                    </div>

                    {/* Reviewer Details Footer */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-md`}>
                          {rev.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-[#182434] leading-tight font-display">
                            {rev.name}
                          </h4>
                          <span className="text-xs text-slate-400 font-medium">
                            {rev.date} • Verified Member
                          </span>
                        </div>
                      </div>

                      <a 
                        href={GOOGLE_MAPS_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#F24E06] transition-colors group"
                        title="View on Google Maps"
                      >
                        <span>View on Maps</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center justify-between max-w-4xl mx-auto mt-8 px-2 sm:px-4">
            
            {/* Dots Pagination */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#F24E06]' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-[#182434] hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all cursor-pointer active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-[#182434] hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all cursor-pointer active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
        </Reveal>

        {/* ================= GOOGLE REVIEW CTA ACTION ================= */}
        <Reveal variant="fade-up" delay={200} duration={650}>
          <div className="mt-14 pt-10 border-t border-slate-200/70 text-center max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#182434] hover:bg-black text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-lg group"
              >
                <GoogleLogo />
                <span>Write a Review on Google</span>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#182434] font-bold text-sm border border-slate-300 shadow-sm transition-all"
              >
                <span>See All 244+ Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>

            <p className="text-xs text-slate-500 mt-3 font-medium">
              Reviews are authenticated directly on Google Maps for Welliesta Fitness (Raashi Trinity, Amravati).
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
