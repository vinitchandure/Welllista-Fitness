import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Flame, 
  Dumbbell, 
  CheckCircle2, 
  Copy, 
  ArrowRight, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function PromotionalPopup({ onOpenTrialModal }) {
  const { user, lastLoginTime } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    // Trigger 5 seconds (4–6s) after website is opened or refreshed, whether logged in or not
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaim = () => {
    setIsClaimed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('WELLIESTA20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceedWithOffer = () => {
    setIsOpen(false);
    if (onOpenTrialModal) {
      onOpenTrialModal();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Soft translucent backdrop - not full screen card */}
      <div 
        className="fixed inset-0 bg-[#0A0F17]/65 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Centered compact modal card with entrance animation */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#121B26] text-[#182434] dark:text-[#F1F5F9] rounded-3xl shadow-[0_25px_60px_rgba(24,36,52,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-[#E2EEF5] dark:border-[#223348] overflow-hidden z-10 animate-in fade-in-0 zoom-in-95 duration-300">
        
        {/* Top Close Button (×) */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full text-slate-400 hover:text-[#182434] dark:hover:text-white bg-white/80 dark:bg-[#182332]/80 backdrop-blur-xs hover:bg-slate-100 dark:hover:bg-[#1F2C3D] transition-colors cursor-pointer shadow-xs"
          aria-label="Close promotional popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Decorative Top Accent Banner with Athletic Fitness Detail */}
        <div className="relative bg-gradient-to-br from-[#F24E06] via-[#E04502] to-[#B93700] px-6 pt-7 pb-6 text-white overflow-hidden">
          {/* Subtle background athletic SVG watermark */}
          <div className="absolute -right-4 -bottom-6 w-36 h-36 opacity-15 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,50 L35,20 L65,20 L80,50 L65,80 L35,80 Z" stroke="white" strokeWidth="6" fill="none" />
              <circle cx="50" cy="50" r="16" fill="white" />
            </svg>
          </div>

          <div className="absolute top-2 right-12 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

          {/* Micro Member Exclusive Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 backdrop-blur-xs border border-white/20 text-[11px] font-black tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Limited-Time Member Offer</span>
          </div>

          {/* Main Headline */}
          <h3 className="text-2xl sm:text-[26px] font-black tracking-tight font-heading leading-tight drop-shadow-xs">
            Get 20% OFF on a 3-Month Subscription
          </h3>

          {/* Discount Pill Badge */}
          <div className="mt-3 inline-flex items-center gap-2 bg-white text-[#F24E06] px-3 py-1 rounded-xl font-black text-xs shadow-md">
            <Flame className="w-4 h-4 fill-[#F24E06]" />
            <span>Save Flat 20% • Code: WELLIESTA20</span>
          </div>
        </div>

        {/* Popup Card Body */}
        <div className="p-6 text-left space-y-4">
          
          {isClaimed ? (
            /* CLAIMED SUCCESS STATE */
            <div className="text-center py-2 space-y-3.5 animate-in fade-in duration-200">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-lg font-black font-heading text-[#182434] dark:text-white">
                  Discount Offer Claimed!
                </h4>
                <p className="text-xs text-[#5A6D82] dark:text-slate-400 mt-1">
                  Your 20% discount code has been reserved for your account.
                </p>
              </div>

              {/* Promo code voucher card */}
              <div className="p-3 bg-slate-50 dark:bg-[#182332] rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Voucher Code</span>
                  <span className="font-mono text-base font-extrabold text-[#F24E06] tracking-wider">WELLIESTA20</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#202F42] hover:bg-slate-100 text-xs font-bold text-[#182434] dark:text-white border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleProceedWithOffer}
                className="w-full py-3 px-4 rounded-xl bg-[#F24E06] hover:bg-[#D94403] text-white font-bold text-sm shadow-[0_4px_14px_rgba(242,78,6,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Claim at Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* INITIAL PROMOTIONAL OFFER STATE */
            <>
              {/* Supporting Line */}
              <p className="text-xs sm:text-sm text-[#5A6D82] dark:text-slate-300 leading-relaxed">
                Commit to your fitness journey with unlimited access to Amravati’s premier training facility, certified coaching, and custom workout programming.
              </p>

              {/* Offer Features List */}
              <div className="space-y-2 pt-1 text-xs text-[#182434] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-[#FFF0EB] dark:bg-[#F24E06]/15 text-[#F24E06] flex items-center justify-center shrink-0">
                    <Dumbbell className="w-3 h-3" />
                  </span>
                  <span>Full access to strength, cardio & functional turf arena</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-[#FFF0EB] dark:bg-[#F24E06]/15 text-[#F24E06] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </span>
                  <span>Free biomechanics consultation & personalized form check</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-[#FFF0EB] dark:bg-[#F24E06]/15 text-[#F24E06] flex items-center justify-center shrink-0">
                    <Clock className="w-3 h-3" />
                  </span>
                  <span>Valid for 3 months from your activation date</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleClaim}
                  className="w-full py-3 px-5 rounded-xl bg-[#F24E06] hover:bg-[#D94403] text-white font-bold text-sm shadow-[0_4px_16px_rgba(242,78,6,0.35)] hover:shadow-[0_6px_22px_rgba(242,78,6,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Claim Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-2 text-center text-xs font-semibold text-[#5A6D82] dark:text-slate-400 hover:text-[#182434] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Maybe Later
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
