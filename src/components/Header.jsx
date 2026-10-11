import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Dumbbell, 
  UserCheck, 
  Flame, 
  TrendingUp, 
  Activity, 
  HeartPulse, 
  Award, 
  Sparkles, 
  Target, 
  Zap,
  Phone,
  Clock,
  MapPin,
  User
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

export default function Header({ onOpenModal, onOpenAccountModal }) {
  const { user, isLoggedIn } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const programsTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown hover delay helpers to prevent accidental dismissals
  const handleMouseEnter = (menu) => {
    if (menu === 'services') {
      clearTimeout(servicesTimeoutRef.current);
      setActiveDropdown('services');
    } else if (menu === 'programs') {
      clearTimeout(programsTimeoutRef.current);
      setActiveDropdown('programs');
    }
  };

  const handleMouseLeave = (menu) => {
    if (menu === 'services') {
      servicesTimeoutRef.current = setTimeout(() => {
        setActiveDropdown((prev) => (prev === 'services' ? null : prev));
      }, 150);
    } else if (menu === 'programs') {
      programsTimeoutRef.current = setTimeout(() => {
        setActiveDropdown((prev) => (prev === 'programs' ? null : prev));
      }, 150);
    }
  };

  const servicesList = [
    {
      title: 'Strength Training',
      description: 'Heavy free weights, Olympic barbells & selectorized machinery.',
      icon: Dumbbell,
    },
    {
      title: 'Personal Training',
      description: 'Customized 1-on-1 coaching with certified fitness experts.',
      icon: UserCheck,
    },
    {
      title: 'Weight Loss',
      description: 'Calorie-crushing metabolic conditioning & nutrition support.',
      icon: Flame,
    },
    {
      title: 'Muscle Building',
      description: 'Hypertrophy-specific programming for maximum lean mass.',
      icon: TrendingUp,
    },
    {
      title: 'Functional Training',
      description: 'Agility, balance & kettlebell circuits for real-world vitality.',
      icon: Activity,
    },
    {
      title: 'Cardio & Conditioning',
      description: 'High-end treadmills, air-bikes & rowers for peak stamina.',
      icon: HeartPulse,
    },
  ];

  const programsList = [
    {
      title: 'Personal Training',
      tag: '1-on-1 Focus',
      description: 'Direct accountability, form correction & personalized routine.',
      icon: Award,
    },
    {
      title: 'Weight Loss Programs',
      tag: 'Results-Driven',
      description: 'Scientifically calibrated fat-loss protocol & tracking.',
      icon: Flame,
    },
    {
      title: 'Muscle Gain Programs',
      tag: 'Hypertrophy',
      description: 'Progressive overload training plans tailored to your genetics.',
      icon: TrendingUp,
    },
    {
      title: 'Fitness Transformation',
      tag: 'Total Reset',
      description: 'Complete 90-day physical and lifestyle body transformation.',
      icon: Sparkles,
    },
    {
      title: 'Beginner Programs',
      tag: 'Zero Intimidation',
      description: 'Guided intro program to build lifelong confidence & proper form.',
      icon: Target,
    },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(24,36,52,0.06)] border-b border-[#E2EEF5]/80 py-2.5' 
          : 'bg-transparent border-0 shadow-none py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Area */}
          <a href="#" className="flex items-center shrink-0 focus:outline-none group">
            <img 
              src="/welliesta-brand-logo.png" 
              alt="Welliesta Fitness" 
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation Floating Glass Pill */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-[0_2px_12px_rgba(24,36,52,0.04)]">
            
            <a 
              href="#home" 
              className="px-3.5 py-2 text-sm font-bold text-[#F24E06] hover:text-[#F24E06] transition-colors rounded-full bg-[#FFF0EB]/80"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <button 
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  activeDropdown === 'services' 
                    ? 'text-[#F24E06] bg-[#FFF0EB]' 
                    : 'text-[#182434] hover:text-[#F24E06] hover:bg-slate-50/80'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#F24E06]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[480px] z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_16px_45px_rgba(24,36,52,0.14)] border border-[#E2EEF5] p-4">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-2">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#5A6D82]">Gym Services & Facilities</span>
                      <span className="text-xs text-[#F24E06] font-semibold">Amravati Studio</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {servicesList.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              setActiveDropdown(null);
                              onOpenModal();
                            }}
                            className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#EAF7FF]/70 transition-all duration-150 cursor-pointer text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#FFF0EB] text-[#F24E06] flex items-center justify-center shrink-0 group-hover/item:bg-[#F24E06] group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#182434] group-hover/item:text-[#F24E06] transition-colors">
                                {service.title}
                              </div>
                              <p className="text-[11px] text-[#5A6D82] line-clamp-2 leading-tight mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programs')}
              onMouseLeave={() => handleMouseLeave('programs')}
            >
              <button 
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  activeDropdown === 'programs' 
                    ? 'text-[#F24E06] bg-[#FFF0EB]' 
                    : 'text-[#182434] hover:text-[#F24E06] hover:bg-slate-50/80'
                }`}
                aria-expanded={activeDropdown === 'programs'}
              >
                <span>Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'programs' ? 'rotate-180 text-[#F24E06]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'programs' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[500px] z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_16px_45px_rgba(24,36,52,0.14)] border border-[#E2EEF5] p-4">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-2">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#5A6D82]">Targeted Fitness Programs</span>
                      <span className="text-xs bg-[#FFF0EB] text-[#F24E06] font-semibold px-2 py-0.5 rounded-full">Guided Results</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {programsList.map((prog, idx) => {
                        const Icon = prog.icon;
                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              setActiveDropdown(null);
                              onOpenModal();
                            }}
                            className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EAF7FF]/70 transition-all duration-150 cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] text-[#182434] group-hover/item:bg-[#F24E06] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-bold text-[#182434] group-hover/item:text-[#F24E06] transition-colors flex items-center gap-2">
                                  <span>{prog.title}</span>
                                  <span className="text-[10px] font-semibold text-[#5A6D82] bg-slate-100 px-1.5 py-0.5 rounded">
                                    {prog.tag}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[#5A6D82] mt-0.5">
                                  {prog.description}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-[#F24E06] opacity-0 group-hover/item:opacity-100 transition-opacity pr-2">
                              Explore →
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#about" 
              className="px-3.5 py-2 text-sm font-semibold text-[#182434] hover:text-[#F24E06] hover:bg-slate-50/80 transition-colors rounded-full"
            >
              About
            </a>

            <a 
              href="#contact" 
              className="px-3.5 py-2 text-sm font-semibold text-[#182434] hover:text-[#F24E06] hover:bg-slate-50/80 transition-colors rounded-full"
            >
              Contact
            </a>

          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Quick Call Link for Desktop */}
            <a 
              href="tel:+919637266663" 
              className="hidden 2xl:inline-flex items-center gap-2 text-xs font-bold text-[#182434] dark:text-white hover:text-[#F24E06] transition-colors bg-white/80 dark:bg-[#141F2D]/85 backdrop-blur-xs hover:bg-white px-3 py-2 rounded-xl border border-white/80 dark:border-white/10 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#F24E06]" />
              <span>+91 96372 66663</span>
            </a>

            {/* Day Mode / Night Mode Toggle Switch */}
            <ThemeToggle />

            {/* Customer Account / Sign In Option */}
            <button
              type="button"
              onClick={onOpenAccountModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/85 dark:bg-[#141F2D]/85 backdrop-blur-md border border-white/90 dark:border-white/10 hover:border-[#F24E06] dark:hover:border-[#F24E06] text-[#182434] dark:text-white shadow-xs hover:text-[#F24E06] dark:hover:text-[#F24E06] transition-all cursor-pointer"
              title={isLoggedIn ? `Account (${user.name})` : "Sign In / Member Account"}
              aria-label={isLoggedIn ? `Account: ${user.name}` : "Member Sign In"}
            >
              {isLoggedIn ? (
                <>
                  <span className="w-5 h-5 rounded-full bg-[#F24E06] text-white text-[10px] flex items-center justify-center font-black">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="max-w-[70px] sm:max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-[#F24E06]" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenModal}
              className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl shadow-[0_4px_14px_rgba(242,78,6,0.35)] hover:shadow-[0_6px_20px_rgba(242,78,6,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Join Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#182434] dark:text-white bg-white/80 dark:bg-[#141F2D]/85 backdrop-blur-xs border border-white/80 dark:border-white/10 hover:bg-white transition-colors cursor-pointer shadow-xs"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#0A0F17]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white dark:bg-[#121B26] text-[#182434] dark:text-[#F1F5F9] h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 animate-in slide-in-from-right duration-200">
            
            {/* Top drawer header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center">
                  <img src="/welliesta-brand-logo.png" alt="Welliesta Fitness" className="h-9 w-auto object-contain" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#182434] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="py-4 space-y-1">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-[#F24E06] bg-[#FFF0EB] dark:bg-[#F24E06]/15"
                >
                  Home
                </a>

                {/* Mobile Services Accordion */}
                <div>
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-[#182434] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#F24E06]' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl my-1">
                      {servicesList.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onOpenModal();
                          }}
                          className="w-full text-left py-1.5 text-xs font-medium text-[#5A6D82] dark:text-slate-400 hover:text-[#F24E06] flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F24E06]" />
                          <span>{service.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Programs Accordion */}
                <div>
                  <button 
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-[#182434] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <span>Programs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? 'rotate-180 text-[#F24E06]' : ''}`} />
                  </button>

                  {mobileProgramsOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl my-1">
                      {programsList.map((prog, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onOpenModal();
                          }}
                          className="w-full text-left py-1.5 text-xs font-medium text-[#5A6D82] dark:text-slate-400 hover:text-[#F24E06] flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#182434] dark:bg-white" />
                          <span>{prog.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[#182434] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  About
                </a>

                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[#182434] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Account & Theme Section */}
              <div className="pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAccountModal();
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#162230] border border-slate-200/80 dark:border-[#223348] text-xs font-bold text-[#182434] dark:text-white hover:border-[#F24E06] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF0EB] dark:bg-[#F24E06]/20 text-[#F24E06] flex items-center justify-center">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span>{isLoggedIn ? user.name : 'Member Sign In / Account'}</span>
                  </div>
                  <span className="text-[#F24E06] text-xs font-bold">{isLoggedIn ? 'Dashboard →' : 'Access →'}</span>
                </button>

                <div className="flex items-center justify-between px-2.5 py-1 text-xs">
                  <span className="font-semibold text-[#5A6D82] dark:text-slate-400">Day / Night Mode</span>
                  <ThemeToggle />
                </div>
              </div>

            </div>

            {/* Bottom Drawer CTAs and Gym Info */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#F24E06] hover:bg-[#D94403] rounded-xl shadow-md"
              >
                Book a Free Trial
              </button>

              <a
                href="tel:+919637266663"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold text-[#182434] dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <Phone className="w-3.5 h-3.5 text-[#F24E06]" />
                <span>Call: +91 96372 66663</span>
              </a>

              <div className="text-[11px] text-[#5A6D82] dark:text-slate-400 pt-2 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#F24E06] shrink-0" />
                  <span className="truncate">Raashi Trinity, Sai Nagar, Amravati</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Open: Mon - Sun (6:00 AM – 10:00 PM)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
