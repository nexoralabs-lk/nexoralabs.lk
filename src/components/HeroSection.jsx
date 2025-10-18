import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showGlow, setShowGlow] = useState(false)

  useEffect(() => {
    // Start the line sweep animation after a short delay
    const timer = setTimeout(() => {
      setIsRevealed(true)
      // Show glow effect after text is fully revealed
      setTimeout(() => setShowGlow(true), 1000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-900 to-navy"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="relative">
          {/* Company Name with Line Sweep Animation */}
          <div className="relative mb-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-exo font-bold bg-gradient-to-r from-white via-electric-blue to-cyan-glow bg-clip-text text-transparent leading-tight"
              style={{
                clipPath: isRevealed ? 'inset(0 0% 0 0%)' : 'inset(0 100% 0 0%)'
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              Nexora Labs
            </motion.h1>
            
            {/* Line Sweep Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-80"
              initial={{ x: '-100%' }}
              animate={{ x: isRevealed ? '100%' : '-100%' }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
                height: '4px',
                top: '50%',
                transform: 'translateY(-50%)',
                filter: 'blur(1px)'
              }}
            />
          </div>

          {/* Tagline with Line Sweep Animation */}
          <div className="relative mb-8">
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              style={{
                clipPath: isRevealed ? 'inset(0 0% 0 0%)' : 'inset(0 100% 0 0%)'
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              We Power the Digital Retail Revolution
            </motion.p>
            
            {/* Line Sweep Effect for Tagline */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-60"
              initial={{ x: '-100%' }}
              animate={{ x: isRevealed ? '100%' : '-100%' }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.7
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%)',
                height: '2px',
                top: '50%',
                transform: 'translateY(-50%)',
                filter: 'blur(0.5px)'
              }}
            />
          </div>

          {/* Glowing Underline Effect */}
          <motion.div
            className="w-0 h-1 bg-gradient-to-r from-electric-blue to-cyan-glow mx-auto mb-12"
            animate={{
              width: showGlow ? '200px' : '0px',
              opacity: showGlow ? 1 : 0
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1.5
            }}
            style={{
              filter: 'blur(1px)',
              boxShadow: showGlow ? '0 0 20px #00d4ff' : 'none'
            }}
          />

          {/* CTA Button */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isRevealed ? 1 : 0,
              y: isRevealed ? 0 : 20
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 2
            }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-cyan-glow text-navy font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/50">
              <span className="relative z-10">Explore Our Vision</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyan-glow rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
