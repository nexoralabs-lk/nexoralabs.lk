import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Magnetic Glow Button Component
const MagneticGlowButton = ({ children, className = "", onClick, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct * 0.3)
    y.set(yPct * 0.3)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.button
      className={`group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-cyan-glow text-navy font-semibold rounded-full text-lg transition-all duration-300 ${className}`}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {/* Magnetic glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing border glow */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-electric-blue/50"
        animate={{
          boxShadow: isHovered ? [
            '0 0 20px #00d4ff',
            '0 0 40px #00d4ff',
            '0 0 20px #00d4ff'
          ] : '0 0 0px #00d4ff',
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Press effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPressed ? 1 : 0,
          opacity: isPressed ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  )
}

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleContactClick = () => {
    setIsFormVisible(true)
  }

  const handleCloseForm = () => {
    setIsFormVisible(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your interest! We\'ll get back to you soon.')
    setIsFormVisible(false)
  }

  return (
    <>
      <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-cyan-glow/5 to-electric-blue/10"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        

        <div className="container mx-auto relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main CTA Content */}
            <div className="glass rounded-3xl p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-cyan-glow/20 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-exo font-bold mb-6 bg-gradient-to-r from-white via-electric-blue to-cyan-glow bg-clip-text text-transparent">
                  Let's Build Something Powerful Together
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Ready to transform your retail business with cutting-edge technology? 
                  Let's discuss your vision and make it a reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <MagneticGlowButton onClick={handleContactClick}>
                    Let's Build Something Powerful
                  </MagneticGlowButton>
                  
                  <a
                    href="mailto:hello@nexoralabs.com"
                    className="group px-8 py-4 glass rounded-full text-electric-blue font-semibold text-lg transition-all duration-300 hover:neon-glow hover:scale-105"
                  >
                    <span className="group-hover:text-cyan-glow transition-colors duration-300">
                      hello@nexoralabs.com
                    </span>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
                    <h3 className="text-lg font-semibold text-electric-blue mb-2">Fast Response</h3>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                  <div className="group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🎯</div>
                    <h3 className="text-lg font-semibold text-electric-blue mb-2">Free Consultation</h3>
                    <p className="text-gray-400 text-sm">No obligation, just expert advice</p>
                  </div>
                  <div className="group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h3 className="text-lg font-semibold text-electric-blue mb-2">Quick Start</h3>
                    <p className="text-gray-400 text-sm">Begin your project in days, not weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-electric-blue mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-blue">
                  <option value="">Select a service</option>
                  <option value="pos">POS System</option>
                  <option value="custom">Custom Software</option>
                  <option value="cloud">Cloud Services</option>
                  <option value="infrastructure">IT Infrastructure</option>
                  <option value="automation">Business Automation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-cyan-glow text-navy font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CTASection
