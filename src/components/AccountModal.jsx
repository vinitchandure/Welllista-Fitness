import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Dumbbell, 
  Calendar, 
  Award, 
  LogOut, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Flame,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AccountModal({ isOpen, onClose }) {
  const { user, isLoggedIn, login, signup, logout, demoLogin } = useAuth();
  
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form states
  const [signInData, setSignInData] = useState({
    emailOrPhone: '',
    password: '',
    remember: true,
  });

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    password: '',
  });

  if (!isOpen) return null;

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!signInData.emailOrPhone.trim()) {
      setErrorMsg('Please enter your email or phone number.');
      return;
    }
    if (!signInData.password) {
      setErrorMsg('Please enter your password.');
      return;
    }

    login(signInData);
    setSuccessMsg('Signed in successfully! Welcome back.');
    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!signUpData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!signUpData.email.trim() && !signUpData.phone.trim()) {
      setErrorMsg('Please provide either an email or phone number.');
      return;
    }
    if (!signUpData.password || signUpData.password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    signup(signUpData);
    setSuccessMsg('Account created successfully! Welcome to Welliesta.');
    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  };

  const handleDemoFill = () => {
    demoLogin();
    setSuccessMsg('Signed in with Demo Member profile!');
    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0A0F17]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#121B26] text-[#182434] dark:text-[#F1F5F9] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-[#D5E7F3] dark:border-[#202F42] overflow-hidden z-10 animate-in fade-in-0 zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-[#1E2B3C] bg-slate-50/50 dark:bg-[#162230]/50 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0EB] dark:bg-[#F24E06]/20 text-[#F24E06] flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#182434] dark:text-white leading-tight font-heading">
                {isLoggedIn ? 'Member Profile' : mode === 'signin' ? 'Member Sign In' : 'Create Member Account'}
              </h2>
              <p className="text-[11px] text-[#5A6D82] dark:text-slate-400">
                Welliesta Fitness Amravati
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-[#182434] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1F2C3D] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs flex items-center gap-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Error Alert Banner */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 rounded-xl text-xs flex items-center gap-2 animate-in fade-in duration-150">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Modal Body (Scrollable if needed) */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">

          {/* VIEW 1: LOGGED IN MEMBER DASHBOARD */}
          {isLoggedIn ? (
            <div className="space-y-5">
              {/* Member Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#182434] to-[#0E1724] dark:from-[#182434] dark:to-[#0A1018] p-5 text-white shadow-lg border border-slate-700/50">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#F24E06]/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F24E06] text-white font-black text-xl flex items-center justify-center shadow-md">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-base font-extrabold font-heading text-white">{user.name}</div>
                      <div className="text-xs text-slate-300">{user.email || user.phone}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F24E06] text-white">
                    <Sparkles className="w-3 h-3" />
                    <span>{user.membershipStatus}</span>
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Member ID</span>
                    <span className="font-bold text-white tracking-wide">{user.memberId}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Primary Goal</span>
                    <span className="font-bold text-white truncate block">{user.goal}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Plan</span>
                    <span className="font-bold text-slate-200">{user.membershipPlan}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Workout Streak</span>
                    <span className="font-bold text-[#FF844B] flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      {user.streakDays} Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Member Actions */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5A6D82] dark:text-slate-400">
                  Quick Member Services
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] hover:border-[#F24E06] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-[#F24E06]" />
                      <span className="text-xs font-bold text-[#182434] dark:text-white group-hover:text-[#F24E06] transition-colors">Book Slot</span>
                    </div>
                    <p className="text-[11px] text-[#5A6D82] dark:text-slate-400 leading-tight">
                      Reserve peak hour rack or floor slot
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] hover:border-[#F24E06] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1">
                      <Dumbbell className="w-4 h-4 text-[#F24E06]" />
                      <span className="text-xs font-bold text-[#182434] dark:text-white group-hover:text-[#F24E06] transition-colors">Workout Plan</span>
                    </div>
                    <p className="text-[11px] text-[#5A6D82] dark:text-slate-400 leading-tight">
                      View customized training split
                    </p>
                  </div>
                </div>
              </div>

              {/* Coach Contact Pill */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF0EB] dark:bg-[#F24E06]/10 border border-[#F24E06]/20 text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F24E06]" />
                  <div>
                    <span className="font-bold text-[#182434] dark:text-white block">Assigned Coach</span>
                    <span className="text-[11px] text-[#5A6D82] dark:text-slate-300">{user.trainer}</span>
                  </div>
                </div>
                <a 
                  href="tel:+919637266663" 
                  className="px-2.5 py-1 bg-[#F24E06] text-white font-bold rounded-lg text-[11px] hover:bg-[#D94403] transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Sign Out Button */}
              <div className="pt-2 border-t border-slate-100 dark:border-[#1E2B3C] flex items-center justify-between">
                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 py-2 px-3 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-100 dark:bg-[#1E2A38] text-xs font-bold text-[#182434] dark:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-[#28384C] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* VIEW 2: AUTH FORMS (SIGN IN / SIGN UP) */
            <div className="space-y-4">
              
              {/* Tab Selector */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-[#182332] p-1 border border-slate-200/80 dark:border-[#223348]">
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    mode === 'signin'
                      ? 'bg-white dark:bg-[#223348] text-[#F24E06] dark:text-white shadow-xs'
                      : 'text-[#5A6D82] dark:text-slate-400 hover:text-[#182434] dark:hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    mode === 'signup'
                      ? 'bg-white dark:bg-[#223348] text-[#F24E06] dark:text-white shadow-xs'
                      : 'text-[#5A6D82] dark:text-slate-400 hover:text-[#182434] dark:hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Quick Demo Access Button */}
              <button
                type="button"
                onClick={handleDemoFill}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FFF0EB] dark:bg-[#F24E06]/15 border border-[#F24E06]/30 hover:border-[#F24E06] text-xs transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-left">
                  <span className="p-1 rounded-md bg-[#F24E06] text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#182434] dark:text-white block group-hover:text-[#F24E06] transition-colors">
                      Quick Demo Access
                    </span>
                    <span className="text-[10px] text-[#5A6D82] dark:text-slate-400">
                      Sign in instantly as an active Welliesta member
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#F24E06] group-hover:translate-x-0.5 transition-transform">
                  Instant Demo →
                </span>
              </button>

              {/* Form 1: SIGN IN */}
              {mode === 'signin' ? (
                <form onSubmit={handleSignInSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1.5">
                      Email or Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input 
                        type="text"
                        value={signInData.emailOrPhone}
                        onChange={(e) => setSignInData({ ...signInData, emailOrPhone: e.target.value })}
                        placeholder="athlete@example.com or 98230 45678"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-[#182434] dark:text-slate-200">
                        Password
                      </label>
                      <button 
                        type="button" 
                        onClick={() => alert("Password reset instructions have been sent to your registered contact.")}
                        className="text-[11px] font-semibold text-[#F24E06] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        placeholder="Enter your password"
                        className="w-full pl-9 pr-10 py-2.5 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#182434] dark:hover:text-white cursor-pointer"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input 
                      type="checkbox"
                      id="rememberMe"
                      checked={signInData.remember}
                      onChange={(e) => setSignInData({ ...signInData, remember: e.target.checked })}
                      className="rounded border-slate-300 text-[#F24E06] focus:ring-[#F24E06] cursor-pointer"
                    />
                    <label htmlFor="rememberMe" className="text-xs text-[#5A6D82] dark:text-slate-400 cursor-pointer select-none">
                      Remember me on this browser
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-[#F24E06] hover:bg-[#D94403] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Sign In to Member Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-[#5A6D82] dark:text-slate-400 pt-1">
                    New to Welliesta?{' '}
                    <button 
                      type="button"
                      onClick={() => setMode('signup')}
                      className="font-bold text-[#F24E06] hover:underline cursor-pointer"
                    >
                      Create an account
                    </button>
                  </p>
                </form>
              ) : (
                /* Form 2: SIGN UP */
                <form onSubmit={handleSignUpSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      value={signUpData.name}
                      onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                      placeholder="e.g. Gaurav Sharma"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1">
                        Mobile Number *
                      </label>
                      <input 
                        type="tel"
                        value={signUpData.phone}
                        onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={signUpData.goal}
                      onChange={(e) => setSignUpData({ ...signUpData, goal: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06]"
                    >
                      <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                      <option value="Weight Loss & Fat Burn">Weight Loss & Fat Burn</option>
                      <option value="Personal Training & Form Mastery">Personal Training & Form Mastery</option>
                      <option value="Athletic Agility & Functional Conditioning">Athletic Agility & Functional Conditioning</option>
                      <option value="General Health & Vitality">General Health & Vitality</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182434] dark:text-slate-200 mb-1">
                      Create Password (min 6 chars) *
                    </label>
                    <div className="relative">
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full pl-3 pr-10 py-2 bg-slate-50 dark:bg-[#182332] border border-slate-200 dark:border-[#223348] rounded-xl text-xs text-[#182434] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F24E06] focus:ring-1 focus:ring-[#F24E06]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#182434] dark:hover:text-white cursor-pointer"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-[#F24E06] hover:bg-[#D94403] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Create Member Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-[#5A6D82] dark:text-slate-400 pt-1">
                    Already registered?{' '}
                    <button 
                      type="button"
                      onClick={() => setMode('signin')}
                      className="font-bold text-[#F24E06] hover:underline cursor-pointer"
                    >
                      Sign in here
                    </button>
                  </p>
                </form>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
