import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ExternalLink, 
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import Reveal from './Reveal';

export default function Footer({ onOpenModal }) {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Welliesta+Fitness+(Best+Gym,+Fitness+Studio)/";
  const PHONE_NUMBER = "+919637266663";
  const FORMATTED_PHONE = "+91 96372 66663";

  // Quick navigation items
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "BMI Calculator", href: "#bmi-calculator" },
    { label: "Our Training", href: "#services" },
    { label: "The Facilities", href: "#facilities" },
    { label: "Member Reviews", href: "#reviews" },
    { label: "Location & Hours", href: "#contact" },
    { label: "FAQs", href: "#faq" },
  ];

  // Training Disciplines
  const trainingPrograms = [
    { label: "Strength Training", href: "#services" },
    { label: "Personal Training", href: "#services" },
    { label: "Weight Loss", href: "#services" },
    { label: "Muscle Building", href: "#services" },
    { label: "Functional Training", href: "#services" },
    { label: "Cardio & Conditioning", href: "#services" },
  ];

  // Google SVG logo
  const GoogleLogo = () => (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
    <footer className="relative bg-[#0d141f] text-white overflow-hidden border-t border-slate-800">
      
      {/* ================= BACKGROUND FITNESS PHOTOGRAPHY WITH VISIBLE PRESENCE ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-res authentic gym backdrop image (clearly visible) */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" 
          alt="Welliesta Fitness Gym Floor Background" 
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter brightness-75 contrast-125 transition-transform duration-1000 ease-out"
        />

        {/* Sophisticated dark gradient overlay: guarantees perfect readability while keeping gym imagery recognizably present */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d141f]/95 via-[#0e1724]/90 to-[#070b12]/98" />

        {/* Brand Orange Glow Accents */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#F24E06]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl" />

        {/* Subtle Kinetic Circuit Line */}
        <div className="absolute inset-x-0 bottom-24 h-28 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M-50,50 L400,50 L450,15 L700,15 L750,80 L1550,80" stroke="#F24E06" strokeWidth="1.5" strokeDasharray="5 5" />
            <circle cx="450" cy="15" r="3" fill="#F24E06" />
            <circle cx="750" cy="80" r="3" fill="#F24E06" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-12">
        
        {/* ================= TOP PROMO / PRE-FOOTER VIP STRIP ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F24E06]/20 border border-[#F24E06]/40 text-[#F24E06] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary 1-Day Studio Pass</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 leading-tight">
                Ready to Experience Welliesta Firsthand?
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Step onto our 8,500+ sq. ft. training floor at Raashi Trinity, Amravati. Try our imported machinery and meet our master trainers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F24E06] text-white font-black text-sm sm:text-base hover:bg-[#d64303] transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/15"
              >
                <Phone className="w-4 h-4 text-[#F24E06]" />
                <span>Call Reception</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* ================= MAIN FOOTER CONTENT COLUMNS ================= */}
        <Reveal variant="fade-up" delay={150} duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* COLUMN 1: BRAND IDENTITY & ABOUT (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Real Logo Asset */}
            <div className="flex items-center">
              <img 
                src="/welliesta-brand-logo.png" 
                alt="Welliesta Fitness" 
                className="h-11 sm:h-12 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-sm">
              Amravati’s premier fitness destination. Engineered with spacious athletic turf, imported biomechanical equipment, and certified personal coaching for real, lasting results.
            </p>

            {/* Google Rating Badge */}
            <a 
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0">
                <GoogleLogo />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-sm text-white">4.4</span>
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 font-medium group-hover:text-white transition-colors">
                  244+ Google Reviews • Sai Nagar, Amravati
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F24E06] flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F24E06] flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F24E06] flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F24E06] flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
                aria-label="Google Maps"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* COLUMN 2: QUICK EXPLORE LINKS (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F24E06] font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: TRAINING DISCIPLINES (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F24E06] font-display">
              Our Training
            </h4>
            <ul className="space-y-2.5 text-sm">
              {trainingPrograms.map((prog, idx) => (
                <li key={idx}>
                  <a 
                    href={prog.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>{prog.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Rate Us on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* COLUMN 4: DIRECT STUDIO LOCATION & TIMINGS (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F24E06] font-display">
              Studio Location
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#F24E06] shrink-0 mt-0.5" />
              <span>
                4th Floor, Raashi Trinity, Nalanda Colony, Guruchhaya Colony, Akoli Road, Sai Nagar, Amravati, Maharashtra 444607
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Phone className="w-4 h-4 text-[#F24E06] shrink-0" />
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="hover:text-white font-bold transition-colors"
              >
                {FORMATTED_PHONE}
              </a>
            </div>

            {/* Timings */}
            <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Clock className="w-3.5 h-3.5 text-[#F24E06]" />
                <span>Operating Hours</span>
              </div>
              <div className="text-[11px] text-slate-300 flex justify-between">
                <span>Mon – Sat:</span>
                <span className="font-bold text-white">6:00 AM – 10:00 PM</span>
              </div>
              <div className="text-[11px] text-slate-300 flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-white">7:00 AM – 1:00 PM</span>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F24E06]" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

          </div>

        </div>
        </Reveal>

        {/* ================= BOTTOM SUB-FOOTER STRIP ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Welliesta Fitness. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-500">Raashi Trinity, Amravati, Maharashtra</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#terms" 
              className="hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms & Conditions
            </a>
            <a 
              href="#privacy" 
              className="hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#F24E06] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
