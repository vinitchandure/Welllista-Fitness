import React, { useState } from 'react';
import { 
  Dumbbell, 
  Sparkles, 
  Wind, 
  ShieldCheck, 
  Maximize2, 
  MapPin, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Volume2, 
  Users,
  Compass,
  Eye
} from 'lucide-react';
import Reveal from './Reveal';

export default function FacilitiesExperience({ onOpenModal }) {
  const [activeZone, setActiveZone] = useState('all');

  const facilityHighlights = [
    {
      id: 'spacious',
      title: 'Spacious Workout Floor & Turf Track',
      category: 'Spacious Workout Area',
      tag: 'ZONE 01 • FUNCTIONAL TURF',
      image: '/slides/gym-slide-1.jpg',
      badge: 'Signature Turf',
      headline: 'Unrestricted Motion for Explosive Performance',
      description: 'Step onto our dedicated high-density synthetic turf track engineered for sled pushes, sprint intervals, and functional mobility. Ample floor spacing ensures zero crowding even during peak training hours.',
      features: ['30-meter high-density turf', 'Multi-functional sprint lanes', 'Shock-absorbent rubber flooring', 'Zero peak-hour bottlenecks'],
      stat: '8,500+ Sq. Ft. Multi-Level Floor',
    },
    {
      id: 'equipment',
      title: 'Precision Biomechanical Equipment',
      category: 'Modern Equipment',
      tag: 'ZONE 02 • RESISTANCE SUITE',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
      badge: 'Imported Machinery',
      headline: 'Flawless Resistance Curves & Joint Safety',
      description: 'Fully equipped with commercial-grade pin-selected isolation towers, heavy-duty Olympic power racks, and dual-pulley functional cables tuned to natural human biomechanics.',
      features: ['Olympic calibrated steel plates', 'Multi-grip power cages', 'Biomechanical pin-loaded machines', 'Dumbbells up to 50kg'],
      stat: '50+ High-Performance Stations',
    },
    {
      id: 'cardio',
      title: 'Dedicated Cardio & Cycle Suite',
      category: 'Dedicated Fitness Zones',
      tag: 'ZONE 03 • ENDURANCE ZONE',
      image: '/slides/gym-slide-3.jpg',
      badge: 'Climate Controlled',
      headline: 'Aerobic Conditioning with Panoramic Views',
      description: 'Separate climate-controlled cardio mezzanine with commercial spin bikes, curved treadmills, and rowing ergometers designed for steady-state and high-intensity interval conditioning.',
      features: ['Commercial magnetic spin bikes', 'Interactive telemetry monitors', 'Curved non-motorized treadmills', 'Dedicated HIIT conditioning rigs'],
      stat: 'Dedicated Spin & Cardio Mezzanine',
    },
    {
      id: 'hygiene',
      title: 'Clean & Comfortable Environment',
      category: 'Clean & Comfortable Environment',
      tag: 'STANDARDS • HOSPITAL-GRADE SANITIZED',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
      badge: 'UV & HEPA Air',
      headline: 'Continuous Fresh Air & Daily Deep Sanitation',
      description: 'Breathe crisp, purified air throughout your hardest workouts. Continuous HEPA filtration, hourly equipment disinfection cycles, and luxury private shower & locker amenities.',
      features: ['Dual HEPA & UV air filtration', 'Daily multi-stage disinfection', 'Spacious executive changing rooms', 'Fresh scent & zero odor guarantee'],
      stat: '100% Sanitized & Climate Controlled',
    },
    {
      id: 'coaching',
      title: 'Professional Training & Guidance',
      category: 'Professional Training',
      tag: 'STAFF • CERTIFIED MASTER COACHES',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
      badge: '1-on-1 Mentorship',
      headline: 'Certified Guidance Every Step of the Way',
      description: 'No guessing what to do next. Our certified floor trainers are actively present to correct lifting mechanics, advise on load progression, and ensure a safe, empowering gym culture.',
      features: ['REPs & ACSM certified coaches', 'Complimentary form corrections', 'Personalized periodization splits', 'Supportive non-intimidating culture'],
      stat: '4.4★ Rating from 244+ Members',
    },
  ];

  const zoneCategories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'spacious', label: 'Spacious Turf Area' },
    { id: 'equipment', label: 'Modern Equipment' },
    { id: 'cardio', label: 'Dedicated Zones' },
    { id: 'hygiene', label: 'Clean Environment' },
  ];

  return (
    <section id="facilities" className="relative bg-[#F8FBFE] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] overflow-hidden">
      
      {/* ================= HIGH-QUALITY GYM INTERIOR / FACILITY BACKGROUND WITH ENHANCED VISIBILITY ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* High-quality gym interior photo showing spacious turf track, Olympic racks & cardio suite */}
        <div className="absolute inset-0">
          <img 
            src="/welliesta-facilities-bg.jpg" 
            alt="Welliesta Fitness Facilities & Workout Floor" 
            className="w-full h-full object-cover object-center transform scale-105 opacity-65 dark:opacity-45"
          />
        </div>

        {/* Balanced directional gradient overlays ensuring visible architecture while cards remain the focal point */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFE]/65 via-[#F8FBFE]/50 to-[#F8FBFE]/75 dark:from-[#0D141F]/80 dark:via-[#0D141F]/70 dark:to-[#0D141F]/85" />
        
        {/* Radial center clear wash for atmospheric depth behind cards */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/40 via-transparent to-[#F8FBFE]/55 dark:from-[#131D2A]/40 dark:via-transparent dark:to-[#0D141F]/60" />

        {/* Ambient brand glow accents */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#FFF0EB]/30 dark:bg-[#F24E06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[480px] h-[480px] bg-[#EAF7FF]/50 dark:bg-[#0E2238]/30 rounded-full blur-3xl" />

        {/* ELEMENT 1: Kinetic Architectural Blueprint Flow Line */}
        <div className="absolute inset-x-0 top-1/3 h-44 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,60 L350,60 L500,140 L850,140 L1000,40 L1550,40" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M-50,60 L350,60 L500,140 L850,140 L1000,40 L1550,40" 
              stroke="#F24E06" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            <circle cx="500" cy="140" r="4.5" fill="#F24E06" />
            <circle cx="850" cy="140" r="3.5" fill="#182434" />
            <circle cx="1000" cy="40" r="4.5" fill="#F24E06" />
          </svg>
        </div>

        {/* ELEMENT 2: Isometric Studio Matrix Watermark (Top Right) */}
        <div className="absolute top-10 right-8 w-[420px] h-[420px] opacity-[0.05] animate-float-slow">
          <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
            <rect x="50" y="50" width="200" height="200" rx="20" stroke="#182434" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="50" y1="150" x2="250" y2="150" stroke="#F24E06" strokeWidth="2" />
            <line x1="150" y1="50" x2="150" y2="250" stroke="#182434" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="40" stroke="#F24E06" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="70" stroke="#182434" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F24E06]/20 shadow-sm mb-4">
                <Compass className="w-4 h-4 text-[#F24E06]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F24E06]">
                  The Welliesta Experience
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182434] tracking-tight font-display mb-4">
                World-Class Facilities <br className="hidden sm:inline" />
                <span className="text-[#F24E06]">Engineered For Results</span>
              </h2>

              <p className="text-base sm:text-lg text-[#182434]/70 leading-relaxed font-sans">
                Discover a training ground where expansive space meets modern biomechanics. Every square foot at Welliesta is intentionally planned to give you the ultimate workout environment.
              </p>
            </div>

            {/* Quick Facility Metrics Pill Bar */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm shrink-0">
              <div className="px-3 py-1.5 border-r border-slate-100 last:border-none">
                <div className="text-xs font-semibold text-slate-400">Total Studio Space</div>
                <div className="text-sm font-black text-[#182434]">8,500+ Sq. Ft.</div>
              </div>
              <div className="px-3 py-1.5 border-r border-slate-100 last:border-none">
                <div className="text-xs font-semibold text-slate-400">Air Quality</div>
                <div className="text-sm font-black text-emerald-600">HEPA Filtered</div>
              </div>
              <div className="px-3 py-1.5 col-span-2 sm:col-span-1">
                <div className="text-xs font-semibold text-slate-400">Location</div>
                <div className="text-sm font-black text-[#F24E06]">Raashi Trinity, Amravati</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= ASYMMETRIC EDITORIAL BENTO SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          
          {/* 1. LARGE HERO ANCHOR (7 COLS): SPACIOUS TURF & FUNCTIONAL TRACK */}
          <Reveal variant="fade-up" delay={100} duration={750} className="lg:col-span-7 h-full flex flex-col">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 flex flex-col justify-between min-h-[480px] lg:min-h-[580px] h-full">
            {/* Background Image with Parallax Scale */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={facilityHighlights[0].image} 
                alt="Welliesta Functional Turf Track & Spacious Area" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Intelligent Multi-stop Gradient for Ultra-Clean Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#182434]/95 via-[#182434]/40 to-black/20" />
            </div>

            {/* Top Floating Badges */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-[#182434] shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#F24E06] animate-pulse" />
                {facilityHighlights[0].tag}
              </span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/20">
                <Maximize2 className="w-3.5 h-3.5 text-[#F24E06]" />
                <span>Zero Crowding</span>
              </div>
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-10 p-6 sm:p-8 text-white mt-auto">
              <div className="inline-block px-2.5 py-1 rounded-md bg-[#F24E06] text-white text-xs font-bold uppercase tracking-wider mb-2.5">
                {facilityHighlights[0].badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 leading-tight">
                {facilityHighlights[0].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans mb-5 max-w-xl">
                {facilityHighlights[0].description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/15">
                {facilityHighlights[0].features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F24E06] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          {/* RIGHT COLUMN (5 COLS): STACKED ASYMMETRIC TILES */}
          <Reveal variant="fade-up" delay={250} duration={750} className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* 2. TILE TOP: MODERN BIOMECHANICAL EQUIPMENT */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex-1 min-h-[260px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={facilityHighlights[1].image} 
                  alt="Modern Equipment at Welliesta" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182434]/95 via-[#182434]/50 to-transparent" />
              </div>

              <div className="relative z-10 p-5 sm:p-6 flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-[#182434]">
                  <Dumbbell className="w-3.5 h-3.5 text-[#F24E06]" />
                  {facilityHighlights[1].category}
                </span>

                <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  {facilityHighlights[1].stat}
                </span>
              </div>

              <div className="relative z-10 p-5 sm:p-6 text-white mt-auto">
                <h4 className="text-lg sm:text-xl font-black font-display text-white mb-1.5">
                  {facilityHighlights[1].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-3">
                  {facilityHighlights[1].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-slate-200">
                    <CheckCircle2 className="w-3 h-3 text-[#F24E06]" /> Biomechanical Cables
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-slate-200">
                    <CheckCircle2 className="w-3 h-3 text-[#F24E06]" /> Olympic Platforms
                  </span>
                </div>
              </div>
            </div>

            {/* 3. TILE BOTTOM: DEDICATED CARDIO & CYCLE SUITE */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex-1 min-h-[260px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={facilityHighlights[2].image} 
                  alt="Dedicated Cardio and Spin Studio" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182434]/95 via-[#182434]/50 to-transparent" />
              </div>

              <div className="relative z-10 p-5 sm:p-6 flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-[#182434]">
                  <Layers className="w-3.5 h-3.5 text-[#F24E06]" />
                  {facilityHighlights[2].category}
                </span>

                <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  {facilityHighlights[2].stat}
                </span>
              </div>

              <div className="relative z-10 p-5 sm:p-6 text-white mt-auto">
                <h4 className="text-lg sm:text-xl font-black font-display text-white mb-1.5">
                  {facilityHighlights[2].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-3">
                  {facilityHighlights[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-slate-200">
                    <CheckCircle2 className="w-3 h-3 text-[#F24E06]" /> Spin Bikes & Rowers
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-slate-200">
                    <CheckCircle2 className="w-3 h-3 text-[#F24E06]" /> Heart-Rate Tracking
                  </span>
                </div>
              </div>
            </div>

          </Reveal>
        </div>

        {/* ================= SECONDARY DUAL BENTO ROW: HYGIENE & COACHING STANDARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          
          {/* CARD 4: CLEAN & COMFORTABLE ENVIRONMENT */}
          <Reveal variant="fade-up" delay={100} duration={650}>
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F4F9FD] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-[#0284C7]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group h-full">
            {/* Subtle Ambient Light Corner Glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#EAF7FF] rounded-full blur-2xl pointer-events-none" />
            <Wind className="absolute -bottom-8 -right-8 w-32 h-32 text-sky-900/[0.03] group-hover:text-sky-900/[0.06] transition-colors pointer-events-none select-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#EAF7FF] flex items-center justify-center text-[#0284C7] shadow-xs border border-sky-100">
                  <Wind className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Medical-Grade Clean
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black font-display text-[#182434] mb-2">
                Clean & Comfortable Environment
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-5">
                We believe a clean gym creates a clear, motivated mindset. Experience fresh, continuous HEPA-filtered airflow, sanitized dumbbell handles, and spotless executive change rooms.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/90 p-3 rounded-xl border border-[#DCEAF4] shadow-2xs">
                  <div className="text-xs text-slate-400 font-semibold">Air Purification</div>
                  <div className="text-sm font-bold text-[#182434]">Dual HEPA Filters</div>
                </div>
                <div className="bg-white/90 p-3 rounded-xl border border-[#DCEAF4] shadow-2xs">
                  <div className="text-xs text-slate-400 font-semibold">Disinfection</div>
                  <div className="text-sm font-bold text-[#182434]">Hourly Protocols</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-[#E8F1F7] text-xs text-slate-500 font-medium relative z-10">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full private showers, secure digital lockers & grooming amenities</span>
            </div>
          </div>
          </Reveal>

          {/* CARD 5: PROFESSIONAL COACHING & ACTIVE GUIDANCE */}
          <Reveal variant="fade-up" delay={220} duration={650}>
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-[#F24E06]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group h-full">
            {/* Subtle Ambient Light Corner Glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FFF0EB] rounded-full blur-2xl pointer-events-none" />
            <Users className="absolute -bottom-8 -right-8 w-32 h-32 text-orange-950/[0.03] group-hover:text-orange-950/[0.06] transition-colors pointer-events-none select-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#FFF0EB] flex items-center justify-center text-[#F24E06] shadow-xs border border-orange-100">
                  <Users className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-[#F24E06] text-xs font-bold border border-orange-200 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Certified Trainers
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black font-display text-[#182434] mb-2">
                Professional Training & Support
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-5">
                Never feel lost or intimidated on the gym floor. Our certified trainers are always available to check your form, demonstrate biomechanical equipment, and support your daily routine.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/90 p-3 rounded-xl border border-[#DCEAF4] shadow-2xs">
                  <div className="text-xs text-slate-400 font-semibold">Coach Certifications</div>
                  <div className="text-sm font-bold text-[#182434]">REPs & ACSM Standards</div>
                </div>
                <div className="bg-white/90 p-3 rounded-xl border border-[#DCEAF4] shadow-2xs">
                  <div className="text-xs text-slate-400 font-semibold">Google Reviews</div>
                  <div className="text-sm font-bold text-[#182434]">4.4★ (244+ Ratings)</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-[#E8F1F7] text-xs text-slate-500 font-medium relative z-10">
              <CheckCircle2 className="w-4 h-4 text-[#F24E06] shrink-0" />
              <span>Free initial movement screening and workout onboarding included</span>
            </div>
          </div>
          </Reveal>

        </div>

        {/* ================= BOTTOM CONVERSION & TOUR BANNER ================= */}
        <Reveal variant="fade-up" delay={150} duration={700}>
          <div className="bg-gradient-to-r from-[#182434] via-[#1f2f45] to-[#182434] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Subtle Orange Glow Accent */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#F24E06]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#F24E06]" />
                  Raashi Trinity, Nalanda Colony, Amravati
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display mb-3">
                  Experience Welliesta In Person
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  Pictures only show half the story. Walk through our doors, test our imported machines, and feel the high-energy community for yourself with a complimentary 1-day studio pass.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F24E06] text-white font-black text-sm sm:text-base hover:bg-[#d64303] transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>Claim Free Studio Pass</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://maps.google.com/?q=Welliesta+Fitness+Raashi+Trinity+Amravati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20"
                >
                  <MapPin className="w-4 h-4 text-slate-300" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
