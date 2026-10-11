import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Scale, 
  Sparkles, 
  ArrowRight, 
  Info, 
  User, 
  RotateCcw
} from 'lucide-react';
import Reveal from './Reveal';

export default function BMICalculator({ onOpenModal }) {
  // Input states with healthy, realistic defaults
  const [gender, setGender] = useState('male'); // 'male' | 'female'
  const [age, setAge] = useState(26);
  const [heightUnit, setHeightUnit] = useState('cm'); // 'cm' | 'ft'
  const [heightCm, setHeightCm] = useState(172); // in cm
  const [feet, setFeet] = useState(5); // feet
  const [inches, setInches] = useState(8); // inches
  const [weight, setWeight] = useState(68); // in kg

  // Handle unit switching with automatic conversion synchronization
  const handleUnitChange = (newUnit) => {
    if (newUnit === heightUnit) return;
    if (newUnit === 'ft') {
      // Convert cm to ft & in
      const totalInches = Math.round(heightCm / 2.54);
      const calculatedFeet = Math.floor(totalInches / 12);
      const calculatedInches = totalInches % 12;
      setFeet(Math.min(Math.max(calculatedFeet, 4), 7));
      setInches(calculatedInches);
    } else {
      // Convert ft & in to cm
      const totalInches = feet * 12 + inches;
      const calculatedCm = Math.round(totalInches * 2.54);
      setHeightCm(Math.min(Math.max(calculatedCm, 120), 220));
    }
    setHeightUnit(newUnit);
  };

  // Real-time pure client-side BMI calculation for both cm and ft/in
  const bmiData = useMemo(() => {
    let hMeters = 0;
    if (heightUnit === 'cm') {
      hMeters = Number(heightCm) / 100;
    } else {
      const totalInches = Number(feet) * 12 + Number(inches);
      hMeters = (totalInches * 2.54) / 100;
    }

    const wKg = Number(weight);
    
    if (!hMeters || hMeters <= 0 || !wKg || wKg <= 0) {
      return {
        score: 0,
        category: 'Normal',
        color: '#16A34A',
        bgLight: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-700',
        percentage: 50,
        message: 'Enter valid measurements to calculate your BMI.',
        idealWeightRange: '55 - 73 kg',
      };
    }

    const rawBmi = wKg / (hMeters * hMeters);
    const score = parseFloat(rawBmi.toFixed(1));

    // Calculate ideal weight for this height (BMI 18.5 to 24.9)
    const minIdeal = Math.round(18.5 * hMeters * hMeters);
    const maxIdeal = Math.round(24.9 * hMeters * hMeters);
    const idealWeightRange = `${minIdeal} - ${maxIdeal} kg`;

    // Categorization according to standard WHO guidelines
    let category = 'Normal';
    let color = '#16A34A'; // emerald
    let bgLight = 'bg-emerald-50';
    let borderColor = 'border-emerald-200';
    let textColor = 'text-emerald-700';
    let message = '';

    if (score < 18.5) {
      category = 'Underweight';
      color = '#0284C7'; // sky-600
      bgLight = 'bg-sky-50';
      borderColor = 'border-sky-200';
      textColor = 'text-sky-700';
      message = 'Your BMI indicates you may benefit from targeted calorie surplus nutrition and progressive strength training to build lean muscle mass safely.';
    } else if (score >= 18.5 && score <= 24.9) {
      category = 'Normal';
      color = '#16A34A'; // emerald-600
      bgLight = 'bg-emerald-50';
      borderColor = 'border-emerald-200';
      textColor = 'text-emerald-700';
      message = 'Great job! You are in an optimal healthy range. Focus on athletic body recomposition, core stability, and cardio endurance with our coaching team.';
    } else if (score >= 25.0 && score <= 29.9) {
      category = 'Overweight';
      color = '#EA580C'; // orange-600
      bgLight = 'bg-orange-50';
      borderColor = 'border-orange-200';
      textColor = 'text-orange-700';
      message = 'You have a great foundation to build on. Our high-energy metabolic conditioning, calorie-burning circuits, and coach-led plans will accelerate fat loss while preserving muscle.';
    } else {
      category = 'Obese';
      color = '#DC2626'; // red-600
      bgLight = 'bg-rose-50';
      borderColor = 'border-rose-200';
      textColor = 'text-rose-700';
      message = 'A structured, coach-guided transformation plan is the safest path forward. Our trainers customize low-impact functional workouts that protect joints while delivering results.';
    }

    // Map BMI (clamped between 14 and 38) to gauge percentage (0% to 100%)
    const clampedScore = Math.min(Math.max(score, 14), 38);
    const percentage = Math.round(((clampedScore - 14) / (38 - 14)) * 100);

    return {
      score,
      category,
      color,
      bgLight,
      borderColor,
      textColor,
      percentage,
      message,
      idealWeightRange,
    };
  }, [heightUnit, heightCm, feet, inches, weight]);

  const handleReset = () => {
    setGender('male');
    setAge(26);
    setHeightUnit('cm');
    setHeightCm(172);
    setFeet(5);
    setInches(8);
    setWeight(68);
  };

  return (
    <section id="bmi-calculator" className="relative bg-[#F4F9FD] py-20 sm:py-24 border-t border-[#E2EEF7] overflow-hidden">
      
      {/* ================= FITNESS / BODY ASSESSMENT BACKGROUND IMAGE WITH ENHANCED VISIBILITY ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* High-quality fitness & body-composition assessment photo - increased baseline clarity */}
        <div className="absolute inset-0">
          <img 
            src="/bmi-assessment-bg.jpg" 
            alt="Fitness & Body Composition Assessment" 
            className="w-full h-full object-cover object-center transform scale-105 opacity-65 dark:opacity-45"
          />
        </div>

        {/* Balanced directional gradient overlays ensuring clearly visible image while cards remain crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F9FD]/65 via-[#F4F9FD]/50 to-[#F4F9FD]/75 dark:from-[#0B121B]/80 dark:via-[#0B121B]/70 dark:to-[#0B121B]/85" />
        
        {/* Soft center clear radial glow for subtle depth */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/40 via-transparent to-[#F4F9FD]/55 dark:from-[#131D2A]/40 dark:via-transparent dark:to-[#0B121B]/60" />

        {/* Ambient brand glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFF0EB]/30 dark:bg-[#F24E06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-[#EAF7FF]/50 dark:bg-[#0E2238]/30 rounded-full blur-3xl" />

        {/* ELEMENT 1: Subtle Diagnostic Waveform Line (Center) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
            <path 
              d="M-50,80 L400,80 L440,30 L470,130 L500,50 L530,95 L550,80 L1550,80" 
              stroke="#182434" 
              strokeWidth="1.2" 
              strokeDasharray="5 5" 
            />
            <path 
              d="M-50,80 L400,80 L440,30 L470,130 L500,50 L530,95 L550,80 L1550,80" 
              stroke="#F24E06" 
              strokeWidth="2.4" 
              strokeLinecap="round"
              className="animate-pulse-line" 
            />
            {/* Vital Node Indicator */}
            <circle cx="470" cy="130" r="4.5" fill="#F24E06" />
            <circle cx="500" cy="50" r="3.5" fill="#182434" />
          </svg>
        </div>

        {/* ELEMENT 2: Precision Metric Caliper / Geometry Watermark (Lower Left) */}
        <div className="absolute -bottom-10 -left-10 w-[380px] h-[380px] opacity-[0.05] animate-float-slow">
          <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
            <circle cx="150" cy="150" r="130" stroke="#182434" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="150" cy="150" r="90" stroke="#F24E06" strokeWidth="2" />
            <circle cx="150" cy="150" r="45" stroke="#182434" strokeWidth="1" />
            <line x1="150" y1="20" x2="150" y2="280" stroke="#182434" strokeWidth="1.5" />
            <line x1="20" y1="150" x2="280" y2="150" stroke="#182434" strokeWidth="1.5" />
          </svg>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F24E06]/20 shadow-sm mb-4">
              <Activity className="w-4 h-4 text-[#F24E06]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F24E06]">
                Interactive Health Tool
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182434] tracking-tight font-display mb-4">
              Calculate Your <span className="text-[#F24E06]">BMI Score</span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#182434]/70 leading-relaxed font-sans">
              Instantly evaluate your body composition baseline. Understanding where you start allows our master trainers to design your ideal training split and nutrition program.
            </p>
          </div>
        </Reveal>

        {/* ================= CALCULATOR CONTAINER ================= */}
        <Reveal variant="fade-up" delay={150} duration={750}>
          <div className="bg-gradient-to-br from-white via-[#FCFEFF] to-[#F4F9FD] rounded-3xl shadow-xl shadow-slate-200/70 border border-[#DFEDF6] overflow-hidden max-w-5xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT COLUMN: INTERACTIVE INPUTS (7 COLS) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E2EEF8] flex flex-col justify-between">
              <div>
                
                {/* Header inside form */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#F24E06]">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#182434] font-display">Body Measurements</h3>
                      <p className="text-xs text-slate-500">Instant client-side calculation</p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#F24E06] transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-50"
                    title="Reset to defaults"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* 1. GENDER SELECTION */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Gender
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all border ${
                        gender === 'male'
                          ? 'bg-[#182434] text-white border-[#182434] shadow-md shadow-slate-900/10'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>Male</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all border ${
                        gender === 'female'
                          ? 'bg-[#182434] text-white border-[#182434] shadow-md shadow-slate-900/10'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>Female</span>
                    </button>
                  </div>
                </div>

                {/* 2. AGE & HEIGHT (GRID) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  
                  {/* AGE INPUT */}
                  <div className="bg-gradient-to-b from-white to-[#F6FAFE] p-4.5 rounded-2xl border border-[#DCEBF6] shadow-xs hover:border-[#F24E06]/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="bmi-age" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Age
                        </label>
                        <span className="text-sm font-extrabold text-[#182434] bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {age} yrs
                        </span>
                      </div>
                      <input 
                        id="bmi-age"
                        type="range" 
                        min="12" 
                        max="90" 
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full accent-[#F24E06] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                      <span>12 yrs</span>
                      <span>50 yrs</span>
                      <span>90 yrs</span>
                    </div>
                  </div>

                  {/* HEIGHT INPUT WITH DUAL UNIT SWITCH (CM vs FT/IN) */}
                  <div className="bg-gradient-to-b from-white to-[#F6FAFE] p-4.5 rounded-2xl border border-[#DCEBF6] shadow-xs hover:border-[#F24E06]/30 transition-all">
                    <div className="flex justify-between items-center mb-2.5">
                      <div className="flex items-center gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Height
                        </label>
                      </div>

                      {/* UNIT TOGGLE PILL */}
                      <div className="inline-flex items-center bg-slate-200/90 p-0.5 rounded-lg text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => handleUnitChange('cm')}
                          className={`px-2 py-0.5 rounded-md transition-all ${
                            heightUnit === 'cm'
                              ? 'bg-white text-[#182434] shadow-sm font-black'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          cm
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUnitChange('ft')}
                          className={`px-2 py-0.5 rounded-md transition-all ${
                            heightUnit === 'ft'
                              ? 'bg-white text-[#182434] shadow-sm font-black'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          ft / in
                        </button>
                      </div>
                    </div>

                    {/* CM MODE */}
                    {heightUnit === 'cm' ? (
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[11px] text-slate-400">Centimeters</span>
                          <span className="text-sm font-extrabold text-[#F24E06] bg-white px-2 py-0.5 rounded-md border border-orange-200">
                            {heightCm} cm
                          </span>
                        </div>
                        <input 
                          id="bmi-height-cm"
                          type="range" 
                          min="120" 
                          max="220" 
                          value={heightCm}
                          onChange={(e) => setHeightCm(Number(e.target.value))}
                          className="w-full accent-[#F24E06] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                        />
                        <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                          <span>120 cm</span>
                          <span>170 cm</span>
                          <span>220 cm</span>
                        </div>
                      </div>
                    ) : (
                      /* FT / IN MODE */
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] text-slate-400">Feet & Inches</span>
                          <span className="text-xs font-extrabold text-[#F24E06] bg-white px-2 py-0.5 rounded-md border border-orange-200">
                            {feet}' {inches}" <span className="text-[10px] text-slate-400 font-normal">({Math.round((feet * 12 + inches) * 2.54)} cm)</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {/* FEET CONTROL */}
                          <div className="bg-white p-2 rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold text-slate-500 uppercase">Ft</span>
                              <span className="text-xs font-black text-[#182434]">{feet} ft</span>
                            </div>
                            <input 
                              type="range" 
                              min="4" 
                              max="7" 
                              value={feet}
                              onChange={(e) => setFeet(Number(e.target.value))}
                              className="w-full accent-[#F24E06] cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                            />
                            <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
                              <span>4'</span>
                              <span>7'</span>
                            </div>
                          </div>

                          {/* INCHES CONTROL */}
                          <div className="bg-white p-2 rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold text-slate-500 uppercase">In</span>
                              <span className="text-xs font-black text-[#182434]">{inches} in</span>
                            </div>
                            <input 
                              type="range" 
                              min="0" 
                              max="11" 
                              value={inches}
                              onChange={(e) => setInches(Number(e.target.value))}
                              className="w-full accent-[#F24E06] cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                            />
                            <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
                              <span>0"</span>
                              <span>11"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* 3. WEIGHT INPUT */}
                <div className="bg-gradient-to-b from-white to-[#F6FAFE] p-4.5 rounded-2xl border border-[#DCEBF6] shadow-xs hover:border-[#F24E06]/30 transition-all mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <label htmlFor="bmi-weight" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Weight
                      </label>
                      <span className="text-[11px] text-slate-400 block">Drag slider or enter kilograms</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input 
                        id="bmi-weight"
                        type="number"
                        min="30"
                        max="200"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-16 text-right font-extrabold text-[#182434] bg-white px-2 py-1 rounded-md border border-slate-300 focus:outline-none focus:border-[#F24E06] text-sm shadow-2xs"
                      />
                      <span className="text-xs font-bold text-slate-500">kg</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="35" 
                    max="180" 
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-[#F24E06] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                    <span>35 kg</span>
                    <span>100 kg</span>
                    <span>180 kg</span>
                  </div>
                </div>

              </div>

              {/* Quick Trust Footnote */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-[#E8F1F7]">
                <Info className="w-4 h-4 text-[#F24E06] shrink-0" />
                <span>Formula follows World Health Organization (WHO) adult metric standards.</span>
              </div>
            </div>

            {/* RIGHT COLUMN: DYNAMIC RESULTS & VISUAL GAUGE (5 COLS) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#FAFDFE] to-[#F1F7FC] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    Your Analysis
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-[#DCEBF6] shadow-2xs text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Result
                  </span>
                </div>

                {/* BIG SCORE DISPLAY */}
                <div className="bg-gradient-to-b from-white via-[#FCFEFF] to-[#F2F8FC] rounded-2xl p-6 border border-[#DCEBF6] shadow-md shadow-slate-200/50 text-center mb-6 relative overflow-hidden">
                  {/* Subtle Light Effect */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFF0EB]/80 rounded-full blur-xl pointer-events-none" />
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Body Mass Index
                  </div>
                  <div className="text-5xl sm:text-6xl font-black text-[#182434] tracking-tight font-display mb-2">
                    {bmiData.score}
                  </div>
                  
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide border shadow-sm"
                    style={{ 
                      backgroundColor: `${bmiData.color}15`, 
                      borderColor: `${bmiData.color}40`,
                      color: bmiData.color 
                    }}
                  >
                    <span>Category:</span>
                    <span>{bmiData.category}</span>
                  </div>

                  <div className="mt-3 text-xs text-slate-500">
                    Optimal weight for your height: <strong className="text-[#182434] font-bold">{bmiData.idealWeightRange}</strong>
                  </div>
                </div>

                {/* ================= VISUAL RANGE GAUGE ================= */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-2">
                    <span>BMI Range Indicator</span>
                    <span style={{ color: bmiData.color }}>{bmiData.category}</span>
                  </div>

                  {/* Range Bar */}
                  <div className="relative pt-6 pb-2">
                    
                    {/* Floating Value Pin on top of bar */}
                    <div 
                      className="absolute top-0 -translate-x-1/2 transition-all duration-300 pointer-events-none flex flex-col items-center"
                      style={{ left: `${Math.min(Math.max(bmiData.percentage, 5), 95)}%` }}
                    >
                      <div 
                        className="px-2 py-0.5 rounded text-[11px] font-extrabold text-white shadow-md leading-tight"
                        style={{ backgroundColor: bmiData.color }}
                      >
                        {bmiData.score}
                      </div>
                      <div 
                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px]"
                        style={{ borderTopColor: bmiData.color }}
                      />
                    </div>

                    {/* Gradient segmented track */}
                    <div className="h-3.5 w-full rounded-full overflow-hidden flex shadow-inner border border-slate-200">
                      {/* Underweight: < 18.5 (~20% of scale) */}
                      <div className="h-full bg-sky-400 w-[19%]" title="Underweight (< 18.5)" />
                      {/* Normal: 18.5 - 24.9 (~27% of scale) */}
                      <div className="h-full bg-emerald-500 w-[27%]" title="Normal (18.5 - 24.9)" />
                      {/* Overweight: 25.0 - 29.9 (~21% of scale) */}
                      <div className="h-full bg-amber-500 w-[21%]" title="Overweight (25 - 29.9)" />
                      {/* Obese: >= 30.0 (~33% of scale) */}
                      <div className="h-full bg-rose-500 w-[33%]" title="Obese (≥ 30)" />
                    </div>

                    {/* Scale legend ticks */}
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold px-0.5">
                      <span>&lt; 18.5<br/><span className="text-sky-600">Under</span></span>
                      <span className="text-center">18.5–24.9<br/><span className="text-emerald-600">Normal</span></span>
                      <span className="text-center">25–29.9<br/><span className="text-amber-600">Over</span></span>
                      <span className="text-right">&ge; 30<br/><span className="text-rose-600">Obese</span></span>
                    </div>

                  </div>
                </div>

                {/* FITNESS-FOCUSED COACHING INSIGHT MESSAGE */}
                <div className={`p-4 rounded-2xl border text-xs leading-relaxed mb-6 ${bmiData.bgLight} ${bmiData.borderColor} ${bmiData.textColor}`}>
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block mb-0.5">Welliesta Coach Insight:</strong>
                      <span>{bmiData.message}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* CTA BUTTON */}
              <div>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#F24E06] text-white font-extrabold text-sm sm:text-base hover:bg-[#d64303] transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>Start Your Fitness Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-2.5 font-medium">
                  Free InBody 570 Composition Scan Included on Your 1st Visit
                </p>
              </div>

            </div>
          </div>
        </div>
      </Reveal>

      </div>
    </section>
  );
}
