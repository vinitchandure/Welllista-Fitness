import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FreeTrialModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Loss & Fat Burn',
    timeSlot: 'Morning (6 AM - 10 AM)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#182434]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_25px_60px_rgba(24,36,52,0.25)] border border-[#D5E7F3] p-6 sm:p-8 overflow-hidden z-10 animate-in fade-in-0 zoom-in-95 duration-200">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-[#182434] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#FFF0EB] text-[#F24E06] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-black text-[#182434] font-heading">
              Trial Pass Reserved!
            </h3>
            <p className="text-sm text-[#5A6D82] mt-2 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-[#182434]">{formData.name || 'Athlete'}</span>. Our Welliesta Fitness team will call or WhatsApp you at <span className="font-semibold text-[#182434]">{formData.phone || '+91 ...'}</span> to confirm your slot.
            </p>

            <div className="mt-6 p-4 bg-[#EAF7FF] rounded-2xl text-xs text-[#182434] text-left border border-[#D5E7F3] space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-[#F24E06]">
                <Dumbbell className="w-4 h-4" />
                <span>What to bring for your trial:</span>
              </div>
              <p className="text-[#5A6D82]">
                • Clean workout shoes & comfortable gym attire<br />
                • Water bottle & gym towel<br />
                • Show this pass at the Raashi Trinity front desk
              </p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3.5 px-6 font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl transition-all cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="mb-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFF0EB] text-[#F24E06] text-xs font-bold mb-2">
                <span>Free 1-Day VIP Pass</span>
              </div>
              <h3 className="text-2xl font-black text-[#182434] font-heading leading-tight">
                Book Your Free Trial Session
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6D82] mt-1">
                Experience Amravati's modern gym floor, expert trainers, and vibrant atmosphere. No commitments.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-[#182434] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Priya Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F24E06] focus:ring-2 focus:ring-[#F24E06]/15 outline-none text-sm text-[#182434] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#182434] uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-bold text-[#5A6D82]">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#F24E06] focus:ring-2 focus:ring-[#F24E06]/15 outline-none text-sm text-[#182434] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#182434] uppercase tracking-wider mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#F24E06] text-xs font-medium text-[#182434] bg-white outline-none"
                  >
                    <option>Weight Loss & Fat Burn</option>
                    <option>Muscle Building & Strength</option>
                    <option>Personal 1-on-1 Coaching</option>
                    <option>Functional & Athletic Fitness</option>
                    <option>Beginner Friendly Routine</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182434] uppercase tracking-wider mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#F24E06] text-xs font-medium text-[#182434] bg-white outline-none"
                  >
                    <option>Morning (6:00 AM – 10:00 AM)</option>
                    <option>Afternoon (11:00 AM – 4:00 PM)</option>
                    <option>Evening (5:00 PM – 10:00 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 px-6 text-base font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl shadow-[0_6px_20px_rgba(242,78,6,0.35)] hover:shadow-[0_8px_25px_rgba(242,78,6,0.45)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Claim Free Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Reassurance footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-[#5A6D82]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Free • No Payment Required • Instant Confirmation</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
