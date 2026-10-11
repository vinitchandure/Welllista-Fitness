import React, { useState } from 'react';
import { 
  Dumbbell, 
  UserCheck, 
  Flame, 
  TrendingUp, 
  Activity, 
  HeartPulse, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Target,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Reveal from './Reveal';

export default function OurTraining({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const trainingCategories = [
    { id: 'all', label: 'All Programs (6)' },
    { id: 'strength', label: 'Strength & Muscle' },
    { id: 'coaching', label: 'Personal Coaching' },
    { id: 'conditioning', label: 'Fat Loss & Cardio' },
  ];

  const trainingOptions = [
    {
      id: 'strength',
      title: 'Strength Training',
      category: 'strength',
      tag: 'Power & Biomechanics',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      description: 'Master the fundamental compound lifts with Olympic barbells, calibrated steel plates, and biomechanical power racks designed for raw strength.',
      icon: Dumbbell,
      badge: 'Heavy Lifting',
      metrics: {
        intensity: 'High Intensity',
        equipment: 'Olympic Barbells & Racks',
        idealFor: 'Building Raw Power',
      },
    },
    {
      id: 'pt',
      title: 'Personal Training',
      category: 'coaching',
      tag: '1-on-1 Guided Mastery',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
      description: 'Direct 1-on-1 accountability with certified master trainers. Personalized form corrections, custom periodized splits, and weekly body composition checks.',
      icon: UserCheck,
      badge: 'Certified Coach',
      metrics: {
        intensity: 'Tailored 1-on-1',
        equipment: 'Full Studio Access',
        idealFor: 'Guaranteed Transformation',
      },
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      category: 'conditioning',
      tag: 'Metabolic Fat Burn',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      description: 'Science-backed metabolic resistance training that accelerates your basal metabolic rate and burns stubborn body fat while preserving lean muscle.',
      icon: Flame,
      badge: 'High Calorie Burn',
      metrics: {
        intensity: 'Dynamic Circuit',
        equipment: 'Turf & Free Weights',
        idealFor: 'Rapid Fat Reduction',
      },
    },
    {
      id: 'muscle',
      title: 'Muscle Building',
      category: 'strength',
      tag: 'Hypertrophy Science',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
      description: 'Maximize muscle protein synthesis through progressive overload, mind-muscle isolation machinery, and structured volume programming.',
      icon: TrendingUp,
      badge: 'Hypertrophy Focus',
      metrics: {
        intensity: 'Progressive Sets',
        equipment: 'Selectorized Machines',
        idealFor: 'Sculpting Lean Mass',
      },
    },
    {
      id: 'functional',
      title: 'Functional Training',
      category: 'strength',
      tag: 'Real-World Athleticism',
      // Using authentic Welliesta Gym Functional Turf slide
      image: '/slides/gym-slide-1.jpg',
      description: 'Train athletic movement on our dedicated turf zone. Sled drives, kettlebell complexes, plyometric boxes, and battle ropes for real-life agility.',
      icon: Activity,
      badge: 'Turf Arena',
      metrics: {
        intensity: 'Agility & Speed',
        equipment: 'Sleds & Battle Ropes',
        idealFor: 'All-Round Vitality',
      },
    },
    {
      id: 'cardio',
      title: 'Cardio & Conditioning',
      category: 'conditioning',
      tag: 'Endurance & Stamina',
      // Using authentic Welliesta Gym Cardio Floor slide
      image: '/slides/gym-slide-3.jpg',
      description: 'Elevate your cardiovascular VO2 max in our climate-controlled cycle and cardio suite with commercial treadmills, cross-trainers, and spin bikes.',
      icon: HeartPulse,
      badge: 'Cycle Suite',
      metrics: {
        intensity: 'Zone 2–4 Cardio',
        equipment: 'Bikes & Rowers',
        idealFor: 'Heart Health & Stamina',
      },
    },
  ];

  const filteredOptions = activeFilter === 'all' 
    ? trainingOptions 
    : trainingOptions.filter(opt => opt.category === activeFilter);

  return (
    <section id="services" className="relative bg-[#F8FBFE] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] overflow-hidden">
      
      {/* ================= MINIMAL & PREMIUM BACKGROUND (CONSISTENT DESIGN SYSTEM WITH SECTION 2) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#FFF0EB]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#EAF7FF]/80 rounded-full blur-3xl" />

        {/* ELEMENT 1: Ascending Athletic Trajectory / Goal Progression Curve */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-44 opacity-35">
          <svg className="w-full h-full" viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
            {/* Base ascending trajectory path */}
            <path 
              d="M-50,140 C250,130 400,100 650,85 C900,70 1150,30 1550,20" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            {/* Animated traveling orange velocity pulse */}
            <path 
              d="M-50,140 C250,130 400,100 650,85 C900,70 1150,30 1550,20" 
              stroke="#F24E06" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            {/* Target Milestone Nodes */}
            <circle cx="400" cy="100" r="3.5" fill="#182434" />
            <circle cx="650" cy="85" r="4" fill="#F24E06" />
            <circle cx="900" cy="70" r="3.5" fill="#182434" />
            <circle cx="1150" cy="30" r="4.5" fill="#F24E06" />
          </svg>
        </div>

        {/* ELEMENT 2: Subtle Athletic Target Matrix & Offset Brand Geometry (Upper Right / Center) */}
        <div className="absolute top-12 right-12 w-[460px] h-[460px] opacity-[0.06] animate-float-slow">
          <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
            {/* Concentric Precision Target Rings */}
            <circle cx="150" cy="150" r="140" stroke="#182434" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="150" cy="150" r="95" stroke="#F24E06" strokeWidth="2" />
            <circle cx="150" cy="150" r="50" stroke="#182434" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="150" y1="0" x2="150" y2="300" stroke="#182434" strokeWidth="1" />
            <line x1="0" y1="150" x2="300" y2="150" stroke="#182434" strokeWidth="1" />
            {/* Stylized Angular W Crest In Center */}
            <polygon points="120,130 140,130 150,165 140,180 120,145" fill="#F24E06" />
            <polygon points="140,130 160,130 155,155 140,180" fill="#182434" />
            <polygon points="160,130 180,130 170,160 160,180" fill="#F24E06" />
          </svg>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] text-[#F24E06] text-xs font-black uppercase tracking-wider border border-[#F24E06]/20 shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F24E06]" />
              <span>Our Training Disciplines</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#182434] font-heading tracking-tight leading-[1.12]">
              Train For <span className="text-[#F24E06] relative inline-block">Your Goals
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#F24E06]/30 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Supporting Subtext */}
            <p className="mt-4 text-base sm:text-lg text-[#5A6D82] font-medium leading-relaxed max-w-2xl mx-auto">
              Targeted training regimens engineered for measurable progress, biomechanical safety, and expert coaching at Welliesta Fitness, Amravati.
            </p>

            {/* Interactive Discipline Filters */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {trainingCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-[#182434] text-white shadow-sm'
                      : 'bg-white text-[#5A6D82] hover:text-[#182434] hover:bg-slate-100 border border-[#E2EEF5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </Reveal>

        {/* ================= EDITORIAL ASYMMETRIC TRAINING SHOWCASE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredOptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.id}
                variant="fade-up"
                delay={(idx % 3) * 120}
                duration={650}
                className="h-full flex flex-col"
              >
                <div
                  className="group relative bg-gradient-to-b from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl overflow-hidden border border-[#DFEDF6] hover:border-[#F24E06]/50 shadow-[0_8px_30px_rgba(24,36,52,0.05)] hover:shadow-[0_22px_45px_rgba(24,36,52,0.09),0_2px_8px_rgba(242,78,6,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full"
                >
                {/* Image Section with Natural Light & Subtle Gradient */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle directional gradient so tag is distinct */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182434]/70 via-[#182434]/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#182434] shadow-xs border border-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F24E06]" />
                      <span>{item.badge}</span>
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#F24E06] flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Image Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-white/80 block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-black text-white font-heading tracking-tight leading-tight mt-0.5 drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details Body with Subtle Athletic Watermark */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left relative overflow-hidden">
                  
                  {/* Subtle Corner Athletic Watermark */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                      <circle cx="50" cy="50" r="45" stroke="#F24E06" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#182434" strokeWidth="2" />
                    </svg>
                  </div>

                  <p className="text-sm text-[#5A6D82] font-medium leading-relaxed mb-6 relative z-10">
                    {item.description}
                  </p>

                  {/* Key Training Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E8F1F7] mb-6 text-left relative z-10">
                    <div className="bg-gradient-to-br from-white to-[#F0F6FC] p-2.5 rounded-xl border border-[#D5E7F3] shadow-2xs">
                      <span className="text-[10px] font-bold text-[#5A6D82] uppercase tracking-wider block">
                        Focus Intensity
                      </span>
                      <span className="text-xs font-black text-[#182434] mt-0.5 block truncate">
                        {item.metrics.intensity}
                      </span>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#FFF5F0] p-2.5 rounded-xl border border-[#FAD8CD] shadow-2xs">
                      <span className="text-[10px] font-bold text-[#5A6D82] uppercase tracking-wider block">
                        Ideal Outcome
                      </span>
                      <span className="text-xs font-black text-[#F24E06] mt-0.5 block truncate">
                        {item.metrics.idealFor}
                      </span>
                    </div>
                  </div>

                  {/* Direct Action Trigger */}
                  <button
                    onClick={onOpenModal}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#182434] group-hover:text-white bg-slate-100 group-hover:bg-[#F24E06] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 relative z-10 shadow-xs"
                  >
                    <span>Start {item.title}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                </div>

              </div>
              </Reveal>
            );
          })}
        </div>

        {/* ================= SECTION BOTTOM ASSESSMENT HOOK ================= */}
        <Reveal variant="fade-up" delay={200} duration={700}>
          <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white via-[#FFF0EB]/40 to-white border-2 border-[#E8F1F7] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#F24E06] mb-1">
                <Target className="w-4 h-4" />
                <span>Not Sure Which Program Is Right For You?</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#182434] font-heading">
                Get a Free 1-on-1 Fitness Assessment in Amravati
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6D82] font-medium mt-1">
                Our head coach will evaluate your current fitness level, body composition goals, and recommend the exact routine.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="shrink-0 inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl shadow-[0_6px_20px_rgba(242,78,6,0.35)] hover:shadow-[0_8px_25px_rgba(242,78,6,0.45)] transition-all cursor-pointer"
            >
              <span>Book Free Assessment Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
