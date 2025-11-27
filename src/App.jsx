import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseSection from './components/WhyChooseSection'
import ShowcaseSection from './components/ShowcaseSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ShowcaseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App