import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import BMICalculator from './components/BMICalculator';
import OurTraining from './components/OurTraining';
import FacilitiesExperience from './components/FacilitiesExperience';
import Testimonials from './components/Testimonials';
import LeadCTA from './components/LeadCTA';
import LocationContact from './components/LocationContact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FreeTrialModal from './components/FreeTrialModal';
import AccountModal from './components/AccountModal';
import PromotionalPopup from './components/PromotionalPopup';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function MainApp() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsTrialModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTrialModalOpen(false);
  };

  const handleOpenAccountModal = () => {
    setIsAccountModalOpen(true);
  };

  const handleCloseAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#EAF7FF] dark:bg-[#0A0F17] text-[#182434] dark:text-[#F1F5F9] flex flex-col font-sans selection:bg-[#F24E06] selection:text-white transition-colors duration-300">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenModal={handleOpenModal} />

      {/* 2. Main Content Flow */}
      <main className="flex-1">
        {/* Above-the-fold Hero Section with Integrated Transparent Header over Background Slider */}
        <Hero 
          onOpenModal={handleOpenModal} 
          onOpenAccountModal={handleOpenAccountModal} 
        />

        {/* Section 2: Why Choose Welliesta */}
        <WhyChooseUs onOpenModal={handleOpenModal} />

        {/* Section: Interactive BMI Calculator */}
        <BMICalculator onOpenModal={handleOpenModal} />

        {/* Section 3: Our Training Disciplines */}
        <OurTraining onOpenModal={handleOpenModal} />

        {/* Section 4: The Welliesta Experience / Our Facilities */}
        <FacilitiesExperience onOpenModal={handleOpenModal} />

        {/* Section 5: What Our Members Say (Real Google Reviews) */}
        <Testimonials />

        {/* Section 6: High-Impact Lead Generation CTA */}
        <LeadCTA onOpenModal={handleOpenModal} />

        {/* Section 7: Location & Contact */}
        <LocationContact onOpenModal={handleOpenModal} />

        {/* Section 8: Frequently Asked Questions */}
        <FAQ onOpenModal={handleOpenModal} />
      </main>

      {/* 3. Full-Width Premium Website Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Lead Generation & Free Trial Interactive Modal */}
      <FreeTrialModal 
        isOpen={isTrialModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Customer Account / Sign In / Profile Modal */}
      <AccountModal 
        isOpen={isAccountModalOpen} 
        onClose={handleCloseAccountModal} 
      />

      {/* Promotional Popup (Triggers 4-6s after website is opened or refreshed) */}
      <PromotionalPopup 
        onOpenTrialModal={handleOpenModal} 
      />

      {/* Premium Floating WhatsApp Support Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </ThemeProvider>
  );
}
