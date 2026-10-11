import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Building2,
  ArrowRight
} from 'lucide-react';
import Reveal from './Reveal';

export default function LocationContact({ onOpenModal }) {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Welliesta+Fitness+(Best+Gym,+Fitness+Studio)/";
  const PHONE_NUMBER = "+919637266663";
  const FORMATTED_PHONE = "+91 96372 66663";

  // Standard embed query for Raashi Trinity, Amravati
  const MAP_EMBED_URL = "https://maps.google.com/maps?q=Welliesta+Fitness+Raashi+Trinity+Sai+Nagar+Amravati+Maharashtra+444607&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="relative bg-[#F8FBFE] dark:bg-[#0B111A] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] dark:border-slate-800/80 overflow-hidden">
      
      {/* ================= HIGH-QUALITY GYM EXTERIOR / LOCATION BACKGROUND WITH ENHANCED VISIBILITY ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* High-quality gym exterior photo showing modern commercial building & arrival facade */}
        <div className="absolute inset-0">
          <img 
            src="/welliesta-location-bg.jpg" 
            alt="Welliesta Fitness Exterior & Arrival Location" 
            className="w-full h-full object-cover object-center transform scale-105 opacity-65 dark:opacity-45"
          />
        </div>

        {/* Balanced directional gradient overlays ensuring visible architecture while contact dossier & map remain the hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFE]/65 via-[#F8FBFE]/50 to-[#F8FBFE]/75 dark:from-[#0B111A]/80 dark:via-[#0B111A]/70 dark:to-[#0B111A]/85" />
        
        {/* Radial center clear wash to give atmospheric depth behind contact cards and interactive map */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/40 via-transparent to-[#F8FBFE]/55 dark:from-[#131D2A]/40 dark:via-transparent dark:to-[#0B111A]/60" />

        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[#FFF0EB]/30 dark:bg-[#F24E06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-[#EAF7FF]/50 dark:bg-[#0E2238]/30 rounded-full blur-3xl" />

        {/* ELEMENT 1: Kinetic Navigation Waypoint Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,60 C350,60 500,120 750,120 C1000,120 1200,50 1550,50" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M-50,60 C350,60 500,120 750,120 C1000,120 1200,50 1550,50" 
              stroke="#F24E06" 
              strokeWidth="2.4" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            <circle cx="750" cy="120" r="4.5" fill="#F24E06" />
          </svg>
        </div>

        {/* ELEMENT 2: Faint Compass / Geo Radar Geometry (Upper Right) */}
        <div className="absolute top-10 right-10 w-[380px] h-[380px] opacity-[0.05] animate-float-slow">
          <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
            <circle cx="150" cy="150" r="130" stroke="#182434" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="150" cy="150" r="85" stroke="#F24E06" strokeWidth="2" />
            <line x1="150" y1="20" x2="150" y2="280" stroke="#182434" strokeWidth="1" />
            <line x1="20" y1="150" x2="280" y2="150" stroke="#182434" strokeWidth="1" />
            <polygon points="150,90 165,150 150,140 135,150" fill="#F24E06" />
            <polygon points="150,210 165,150 150,160 135,150" fill="#182434" />
          </svg>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F24E06]/20 shadow-sm mb-4">
              <MapPin className="w-4 h-4 text-[#F24E06]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F24E06]">
                Studio Location & Timings
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182434] tracking-tight font-display mb-4">
              Find Us in <span className="text-[#F24E06]">Amravati</span>
            </h2>

            <p className="text-base sm:text-lg text-[#182434]/70 leading-relaxed font-sans">
              Centrally situated at Raashi Trinity on Akoli Road. Easily accessible with ample parking, lift access, and long daily workout hours.
            </p>
          </div>
        </Reveal>

        {/* ================= MAIN SPLIT CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: CONTACT DOSSIER & DETAILS (6 COLS) */}
          <Reveal variant="fade-up" delay={120} duration={750} className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* 1. ADDRESS CARD */}
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-[#F24E06]/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              {/* Soft Ambient Light Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFF0EB]/80 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#FFF0EB] flex items-center justify-center text-[#F24E06] shrink-0 shadow-xs border border-orange-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-[#182434] font-display">
                      Gym Address
                    </h3>
                    <span className="text-[11px] font-bold text-[#F24E06] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100 shadow-2xs">
                      4th Floor
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-3">
                    4th Floor, Raashi Trinity, Nalanda Colony, Guruchhaya Colony, Akoli Road, Sai Nagar, Amravati, Maharashtra 444607
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#E8F1F7] text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#F24E06]" /> Near Sai Mandir
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-[#F24E06]" /> Dedicated Parking
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> High-Speed Lift
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PHONE & QUICK CALL CARD */}
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-[#0284C7]/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              {/* Soft Ambient Light Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#EAF7FF] rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#EAF7FF] flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs border border-sky-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-[#182434] font-display">
                      Call / Enquiries
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Lines Open
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-2 font-sans">
                    Have questions regarding memberships, training schedules or personal coaching?
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#182434] hover:bg-black text-white font-extrabold text-sm sm:text-base transition-all shadow-sm group"
                    >
                      <Phone className="w-4 h-4 text-[#F24E06]" />
                      <span>{FORMATTED_PHONE}</span>
                    </a>

                    <span className="text-xs text-slate-400 text-center sm:text-left font-medium">
                      Direct front-desk assistance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. OPERATING TIMINGS CARD */}
            <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F5FAFE] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-[#F24E06]/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              {/* Soft Ambient Light Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFF0EB]/80 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#FFF0EB] flex items-center justify-center text-[#F24E06] shrink-0 shadow-xs border border-orange-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#182434] font-display">
                      Studio Hours
                    </h3>
                    <span className="text-xs font-bold text-slate-500">
                      7 Days Open
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-gradient-to-br from-white to-[#F0F6FC] p-3 rounded-xl border border-[#D5E7F3] shadow-2xs">
                      <span className="font-bold text-slate-500 block mb-1">Monday – Saturday</span>
                      <span className="font-black text-[#182434] text-sm">6:00 AM – 10:00 PM</span>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#FFF5F0] p-3 rounded-xl border border-[#FAD8CD] shadow-2xs">
                      <span className="font-bold text-slate-500 block mb-1">Sunday Morning</span>
                      <span className="font-black text-[#182434] text-sm">7:00 AM – 1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS ROW */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3.5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#F24E06] text-white font-extrabold text-sm sm:text-base hover:bg-[#d64303] transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              <button
                type="button"
                onClick={onOpenModal}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-white to-slate-50 hover:to-slate-100 text-[#182434] font-bold text-sm sm:text-base border border-slate-300 shadow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#F24E06]" />
                <span>Book a Free Trial</span>
              </button>
            </div>

          </Reveal>

          {/* RIGHT COLUMN: INTERACTIVE MAP & VISUAL LOCATION CARD (6 COLS) */}
          <Reveal variant="fade-up" delay={250} duration={750} className="lg:col-span-6 flex flex-col">
            
            <div className="bg-gradient-to-b from-white via-[#FCFEFF] to-[#F2F8FC] rounded-3xl overflow-hidden border border-[#DFEDF6] shadow-xl shadow-slate-200/60 flex-1 flex flex-col min-h-[440px] lg:min-h-[540px] relative">
              
              {/* Top Map Location Header Pill */}
              <div className="p-4 sm:p-5 bg-white border-b border-slate-100 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#F24E06]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#182434] leading-tight">
                      Welliesta Fitness Amravati
                    </h4>
                    <p className="text-xs text-slate-500">
                      Raashi Trinity, Sai Nagar
                    </p>
                  </div>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F24E06] hover:text-[#d64303] bg-orange-50 hover:bg-orange-100 py-1.5 px-3 rounded-lg transition-colors"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* LIVE INTERACTIVE GOOGLE MAP IFRAME */}
              <div className="relative flex-1 w-full h-full min-h-[350px] bg-slate-100">
                <iframe
                  title="Welliesta Fitness Location on Google Maps"
                  src={MAP_EMBED_URL}
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Overlay Badge in Bottom Corner */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3 max-w-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#F24E06] flex items-center justify-center text-white shrink-0">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-extrabold text-[#182434] truncate">
                      Raashi Trinity, Sai Nagar
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      Amravati, Maharashtra 444607
                    </div>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-[#F24E06] hover:underline shrink-0"
                  >
                    Navigate →
                  </a>
                </div>
              </div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
