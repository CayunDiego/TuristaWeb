
'use client';

import HeroSection from '@/components/landing-page/hero-section';
import MainImageSection from '@/components/landing-page/main-image-section';
import AboutMeSection from '@/components/landing-page/about-me-section';
import WhatYoullGetSection from '@/components/landing-page/what-youll-get-section';
import ServicesSection from '@/components/landing-page/services-section';
import PaymentInfoSection from '@/components/landing-page/payment-info-section';
import ReadyToStartSection from '@/components/landing-page/ready-to-start-section';
import DoubtsSection from '@/components/landing-page/doubts-section';

// Button styles and links that are shared
const greenButtonStyle = "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
const darkButtonStyle = "bg-foreground text-primary hover:bg-foreground/90 shadow-md rounded-lg font-bold text-base leading-none tracking-normal";
const masElegidoBadgeStyle = "bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full absolute -top-3 right-[0] -translate-y-1/4 shadow-lg";
const whatsappLink = "https://wa.me/5491123919463?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20dise%C3%B1o%20web%20para%20turismo.";
const demoUrl = "https://shautiau.vercel.app/";

export default function LandingPage() {
  return (
    <div className="flex flex-col text-foreground">
      <HeroSection 
        demoUrl={demoUrl} 
        greenButtonStyle={greenButtonStyle}
        darkButtonStyle={darkButtonStyle}
      />
      <MainImageSection />
      
      <div className="container mx-auto px-4">
        <AboutMeSection />
      </div>

      <WhatYoullGetSection demoUrl={demoUrl} greenButtonStyle={greenButtonStyle} />

      <div className="container mx-auto px-4">
        <ServicesSection
          masElegidoBadgeStyle={masElegidoBadgeStyle}
          greenButtonStyle={greenButtonStyle}
          whatsappLink={whatsappLink}
        />
      </div>

      <ReadyToStartSection 
        whatsappLink={whatsappLink} 
        greenButtonStyle={greenButtonStyle} 
        darkButtonStyle={darkButtonStyle}
        demoUrl={demoUrl} 
      />
      <PaymentInfoSection />

      <div className="container mx-auto px-4">
        <DoubtsSection />
      </div>
    </div>
  );
}
