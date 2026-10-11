import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      className={`relative inline-flex items-center h-8 sm:h-9 w-14 sm:w-16 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F24E06] cursor-pointer select-none ${
        isDark 
          ? 'bg-[#182332] border border-[#2D3E54] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]' 
          : 'bg-[#E3EFF7] border border-[#CFDFEC] shadow-[inset_0_2px_4px_rgba(24,36,52,0.06)]'
      } ${className}`}
    >
      {/* Background Icons */}
      <span className="sr-only">Toggle Day/Night Theme</span>
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-[10px]">
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-200 ${isDark ? 'text-slate-500 opacity-40' : 'text-amber-500 opacity-100'}`} />
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-200 ${isDark ? 'text-[#FF844B] opacity-100' : 'text-slate-400 opacity-30'}`} />
      </div>

      {/* Sliding Thumb */}
      <span
        className={`inline-flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 rounded-full transition-transform duration-300 ease-out shadow-sm transform ${
          isDark 
            ? 'translate-x-6 sm:translate-x-7 bg-[#F24E06] text-white shadow-[0_0_10px_rgba(242,78,6,0.6)]' 
            : 'translate-x-0 bg-white text-amber-500 shadow-[0_2px_6px_rgba(24,36,52,0.15)]'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 fill-white/20 stroke-white" />
        ) : (
          <Sun className="w-3.5 h-3.5 fill-amber-400/30 stroke-amber-500" />
        )}
      </span>
    </button>
  );
}
