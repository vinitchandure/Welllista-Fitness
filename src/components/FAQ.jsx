import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircleQuestion 
} from 'lucide-react';
import Reveal from './Reveal';

export default function FAQ({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const faqItems = [
    {
      question: "How do I book and attend a Free Trial session?",
      answer: "You can book your trial directly on this website by clicking 'Book a Free Trial' or by calling our reception. Your complimentary first session includes a tour of our facilities, an introductory InBody composition scan, and a guided workout on the gym floor with our certified trainers.",
      category: "Free Trial"
    },
    {
      question: "What membership options are available at Welliesta Fitness?",
      answer: "We offer flexible membership options ranging from monthly, quarterly, semi-annual, to annual plans, along with specialized 1-on-1 personal coaching packages. When you visit for your trial, our team will help you select the plan that best matches your schedule and transformation goals.",
      category: "Memberships"
    },
    {
      question: "What are the studio operating timings?",
      answer: "We are open 7 days a week to support both early-morning and late-evening workouts: Monday through Saturday from 6:00 AM to 10:00 PM, and Sunday mornings from 7:00 AM to 1:00 PM.",
      category: "Timings"
    },
    {
      question: "Is Welliesta suitable for complete beginners?",
      answer: "Absolutely. A large portion of our members began with zero prior gym background. Our certified floor trainers are actively present on the gym floor to demonstrate proper machine biomechanics, correct lifting posture, and ensure you feel comfortable and confident from day one.",
      category: "Beginners"
    },
    {
      question: "How does 1-on-1 Personal Training work?",
      answer: "Our Personal Training program pairs you directly with a certified coach dedicated to your goals—whether you want targeted fat loss, muscle building, or athletic strength. Your coach creates a customized progressive workout split, tracks your weekly progress, and guides every repetition.",
      category: "Personal Training"
    },
    {
      question: "What training disciplines and zones do you feature?",
      answer: "Welliesta includes dedicated zones for Strength Training, Functional Turf Conditioning, Cardio & Cycle Suite, Weight Loss Programs, and Muscle Building. Each zone is furnished with imported biomechanical equipment and shock-absorbent flooring.",
      category: "Programs"
    },
    {
      question: "Where is the gym located and is parking available?",
      answer: "We are situated on the 4th Floor of the Raashi Trinity commercial complex on Akoli Road, Sai Nagar, Amravati (near Sai Mandir). The premises offer high-speed elevator access directly to our floor and convenient parking space.",
      category: "Location"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative bg-[#F8FBFE] py-20 sm:py-24 lg:py-28 border-t border-[#E8F1F7] overflow-hidden">
      
      {/* ================= MINIMAL & PREMIUM BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Soft Ambient Radial Light */}
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-[#FFF0EB]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[480px] h-[480px] bg-[#EAF7FF]/80 rounded-full blur-3xl" />

        {/* ELEMENT 1: Kinetic Waveform Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,80 Q360,20 720,80 T1500,80" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M-50,80 Q360,20 720,80 T1500,80" 
              stroke="#F24E06" 
              strokeWidth="2.4" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            <circle cx="720" cy="80" r="4.5" fill="#F24E06" />
          </svg>
        </div>

        {/* ELEMENT 2: Faint Circular Help Geometry (Lower Left) */}
        <div className="absolute -bottom-10 -left-10 w-[360px] h-[360px] opacity-[0.05] animate-float-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <circle cx="100" cy="100" r="85" stroke="#182434" strokeWidth="2" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="55" stroke="#F24E06" strokeWidth="1.5" />
            <line x1="100" y1="15" x2="100" y2="185" stroke="#182434" strokeWidth="1" />
            <line x1="15" y1="100" x2="185" y2="100" stroke="#182434" strokeWidth="1" />
          </svg>
        </div>

      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F24E06]/20 shadow-sm mb-4">
              <MessageCircleQuestion className="w-4 h-4 text-[#F24E06]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F24E06]">
                Got Questions?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182434] tracking-tight font-display mb-4">
              Frequently Asked <span className="text-[#F24E06]">Questions</span>
            </h2>

            <p className="text-base sm:text-lg text-[#182434]/70 leading-relaxed font-sans max-w-2xl mx-auto">
              Everything you need to know about our memberships, training programs, facilities, and getting started at Welliesta Fitness.
            </p>
          </div>
        </Reveal>

        {/* ================= ACCORDION CONTAINER ================= */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} variant="fade-up" delay={index * 60} duration={500}>
                <div 
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden relative ${
                    isOpen 
                      ? 'border-[#F24E06]/40 shadow-xl shadow-orange-500/5 ring-1 ring-[#F24E06]/20 bg-gradient-to-r from-[#FFFDFD] via-white to-[#FFF9F6]' 
                      : 'bg-gradient-to-r from-white via-[#FCFEFF] to-[#F6FAFE] border-[#DFEDF6] shadow-xs hover:border-[#CBDDE9] hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#FFF0EB] text-[#F24E06]' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>

                      <div>
                        <span className="text-base sm:text-lg font-bold text-[#182434] font-display block leading-snug">
                          {item.question}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 block">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#F24E06] text-white rotate-180 shadow-md shadow-orange-500/30' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* ACCORDION CONTENT */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#E8F1F7]">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ================= STILL HAVE QUESTIONS CARD ================= */}
        <Reveal variant="fade-up" delay={200} duration={600}>
          <div className="mt-12 bg-gradient-to-br from-white via-[#FCFEFF] to-[#F4F9FD] rounded-3xl p-6 sm:p-8 border border-[#DFEDF6] shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
            {/* Soft Ambient Light Glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFF0EB]/80 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#FFF0EB] flex items-center justify-center text-[#F24E06] shrink-0 shadow-xs border border-orange-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#182434] font-display">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our team is happy to guide you on programs, timings, or personal goals.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:+919637266663"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#182434] font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#F24E06]" />
                <span>Call Reception</span>
              </a>

              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F24E06] hover:bg-[#d64303] text-white font-extrabold text-sm transition-all shadow-md shadow-orange-500/25 cursor-pointer"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
