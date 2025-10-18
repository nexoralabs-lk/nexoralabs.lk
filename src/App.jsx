import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseSection from './components/WhyChooseSection'
import ShowcaseSection from './components/ShowcaseSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-slate-900 to-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-electric-blue/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-glow/10 to-electric-blue/10 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-cyan-glow/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-electric-blue/10 to-cyan-glow/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-electric-blue/5 to-cyan-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-glow/5 to-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>
      
      {/* <CursorGlow position={cursorPosition} /> */}
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App