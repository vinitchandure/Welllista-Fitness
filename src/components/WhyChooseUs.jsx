import React from 'react';
import { 
  Award, 
  Dumbbell, 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import Reveal from './Reveal';

export default function WhyChooseUs({ onOpenModal }) {
  const features = [
    {
      id: '01',
      title: 'Expert Trainers',
      tag: 'Biomechanics & Form',
      badge: 'Live Coaching',
      badgeColor: 'text-[#F24E06] bg-[#FFF0EB] border-[#F24E06]/20',
      dotColor: 'bg-[#F24E06]',
      description: 'Certified fitness coaches dedicated to biomechanical form correction, injury prevention, and progressive scientific overloading.',
      icon: Award,
      specLabel: 'SPEC // CSCS & NASM ACCREDITED',
    },
    {
      id: '02',
      title: 'Modern Equipment',
      tag: 'Precision Biomechanics',
      badge: 'Calibrated Daily',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      dotColor: 'bg-emerald-500',
      description: 'Olympic platforms, calibrated plates, and selectorized machinery engineered to match natural human muscle resistance curves.',
      icon: Dumbbell,
      specLabel: 'SPEC // ELEIKO & HAMMER LOADED',
    },
    {
      id: '03',
      title: 'Supportive Environment',
      tag: 'Zero-Intimidation Space',
      badge: 'Active Community',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      dotColor: 'bg-blue-500',
      description: 'An energizing, results-driven community for men and women (18–35) that champions continuous self-improvement without judgment.',
      icon: Users,
      specLabel: 'CULTURE // ALL-INCLUSIVE ENERGY',
    },
    {
      id: '04',
      title: 'Personalized Training',
      tag: 'Periodized Programming',
      badge: 'Goal-Calibrated',
      badgeColor: 'text-orange-700 bg-orange-50 border-orange-200',
      dotColor: 'bg-orange-500',
      description: 'Structured hypertrophy, fat-burn, or athletic splits designed around your metabolism, schedule, and progressive strength metrics.',
      icon: Target,
      specLabel: 'PROTOCOL // PROGRESSIVE OVERLOAD',
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-[#F8FBFE] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] overflow-hidden">
      
      {/* ================= MINIMAL & PREMIUM BACKGROUND: 2 REFINED ELEMENTS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFF0EB]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EAF7FF]/80 rounded-full blur-3xl" />

        {/* ELEMENT 1: Continuous Kinetic Athletic Heartbeat / Power Wave Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-36 opacity-35">
          <svg className="w-full h-full" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
            {/* Subtle base guideline */}
            <path 
              d="M-50,70 L350,70 L400,25 L430,115 L460,40 L490,95 L520,70 L920,70 L970,20 L1000,120 L1030,35 L1060,95 L1090,70 L1550,70" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            {/* Smooth animated orange traveling pulse */}
            <path 
              d="M-50,70 L350,70 L400,25 L430,115 L460,40 L490,95 L520,70 L920,70 L970,20 L1000,120 L1030,35 L1060,95 L1090,70 L1550,70" 
              stroke="#F24E06" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
          </svg>
        </div>

        {/* ELEMENT 2: Large Faceted Welliesta "W" Architectural Watermark (Center Backdrop) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[620px] h-[540px] sm:h-[620px] opacity-[0.06] animate-float-slow">
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            <polygon points="40,60 120,60 170,220 130,290 40,110" fill="#F24E06" />
            <polygon points="120,60 200,60 180,180 130,290" fill="#182434" />
            <polygon points="200,60 280,60 360,240 290,290 210,140" fill="#182434" />
            <polygon points="280,60 360,60 320,160 290,290" fill="#F24E06" />
            <polygon points="130,290 200,340 270,290 200,240" fill="#F24E06" />
          </svg>
        </div>

      </div>

      {/* ================= SECTION CONTENT CONTAINER (relative z-10) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            
            {/* Eyebrow & Subtle Trust Element */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] text-[#F24E06] text-xs font-black uppercase tracking-wider border border-[#F24E06]/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F24E06]" />
                <span>Why Choose Welliesta?</span>
              </span>

              {/* Subtle Google Rating Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#182434] text-xs font-bold border border-[#D5E7F3] shadow-xs">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-black text-[#182434]">4.4★</span>
                <span className="text-[#5A6D82]">Google Rating</span>
                <span className="text-[#5A6D82]">•</span>
                <span className="text-[#182434] font-bold">244+ Reviews</span>
              </div>
            </div>

            {/* Section Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#182434] font-heading tracking-tight leading-[1.12]">
              Train Better. <span className="text-[#F24E06] relative inline-block">Feel Stronger.
                {/* Subtle underline line */}
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#F24E06]/30 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Supporting Line */}
            <p className="mt-5 text-base sm:text-lg text-[#5A6D82] font-semibold leading-relaxed max-w-2xl mx-auto">
              Experience Amravati’s modern training environment built for real results, biomechanical precision, and constant community motivation.
            </p>

          </div>
        </Reveal>

        {/* ================= 4 CLEAN & PREMIUM FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal 
                key={idx}
                variant="fade-up"
                delay={idx * 120}
                duration={650}
                className="h-full flex flex-col"
              >
                <div
                  className="group relative bg-gradient-to-b from-white via-[#FCFEFF] to-[#F4F9FD] hover:from-white hover:via-[#FFFBF9] hover:to-[#F3F9FD] p-7 sm:p-8 rounded-2xl border border-[#DFEDF6] hover:border-[#F24E06]/50 shadow-[0_4px_24px_rgba(24,36,52,0.04)] hover:shadow-[0_18px_40px_rgba(24,36,52,0.08),0_2px_10px_rgba(242,78,6,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-[#F24E06]/[0.02] before:to-transparent before:pointer-events-none h-full"
                >
                  {/* Subtle Card Live Top Border Accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#F24E06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Subtle Athletic Corner Blueprint Watermark */}
                  <div className="absolute top-3 right-3 w-16 h-16 opacity-[0.04] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none">
                    <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
                      <path d="M15,0 L60,0 L60,45" stroke="#F24E06" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="55" cy="5" r="2.5" fill="#F24E06" />
                    </svg>
                  </div>

                  {/* Card Header Area: Icon, ID & Live Status */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      {/* Primary Icon Container with Brand Glow */}
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-white to-[#EAF7FF] group-hover:to-[#FFF0EB] text-[#182434] group-hover:text-[#F24E06] flex items-center justify-center border border-[#D5E7F3] group-hover:border-[#F24E06]/30 transition-all shadow-xs">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Numeric Station Index */}
                      <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#F24E06] transition-colors">
                        /{feature.id}
                      </span>
                    </div>

                    {/* Micro Status Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border ${feature.badgeColor}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${feature.dotColor} animate-pulse`} />
                        <span>{feature.badge}</span>
                      </span>
                    </div>

                    {/* Feature Title */}
                    <h3 className="text-xl font-black text-[#182434] font-heading group-hover:text-[#F24E06] transition-colors mb-2">
                      {feature.title}
                    </h3>

                    {/* Subtag */}
                    <div className="text-[11px] font-bold text-[#F24E06] uppercase tracking-wider mb-2.5">
                      {feature.tag}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#5A6D82] font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Technical Spec Footer */}
                  <div className="mt-6 pt-4 border-t border-[#E8F1F7] flex items-center justify-between text-[10px] font-mono font-bold text-[#5A6D82] group-hover:text-[#182434] transition-colors relative z-10">
                    <span>{feature.specLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F24E06] transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ================= SECTION BOTTOM REASSURANCE & INTERACTIVE LINK ================= */}
        <Reveal variant="fade-up" delay={200} duration={650}>
          <div className="mt-14 sm:mt-16 pt-8 border-t border-[#E8F1F7] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left bg-gradient-to-r from-white via-[#F8FBFE] to-white backdrop-blur-md p-6 rounded-2xl border border-[#DFEDF6] shadow-xs">
            
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5A6D82]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>
                Located at <strong className="text-[#182434]">Raashi Trinity, Nalanda Colony, Sai Nagar, Amravati</strong> • Open 7 Days (6 AM – 10 PM)
              </span>
            </div>

            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black text-white bg-[#F24E06] hover:bg-[#D94403] px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-[0_4px_14px_rgba(242,78,6,0.3)] hover:shadow-[0_6px_20px_rgba(242,78,6,0.4)]"
            >
              <span>Experience it with a Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </Reveal>

      </div>

    </section>
  );
}
