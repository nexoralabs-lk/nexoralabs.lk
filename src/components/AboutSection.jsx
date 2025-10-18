import { useState, useEffect, useRef } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const cards = [
    {
      title: "Affordable IT Services",
      description: "Cost-effective solutions that don't compromise on quality or performance.",
      icon: "💰",
      delay: "0.2s"
    },
    {
      title: "Retail POS Systems",
      description: "Modern point-of-sale systems designed for today's retail environment.",
      icon: "🛒",
      delay: "0.4s"
    },
    {
      title: "ERP Solutions",
      description: "Enterprise resource planning systems to streamline your business operations.",
      icon: "📊",
      delay: "0.6s"
    },
    {
      title: "Web & Software Development",
      description: "Custom web applications and software tailored to your specific needs.",
      icon: "💻",
      delay: "0.8s"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-cyan-glow/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-electric-blue/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-glow/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-exo font-bold mb-6 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
            We're not just developers
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            — we're your digital growth partners.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-8 text-center transition-all duration-700 hover:scale-105 hover:neon-glow relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: card.delay }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-cyan-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-glow rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-electric-blue rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-electric-blue group-hover:text-cyan-glow transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>
              
              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/20 to-cyan-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-electric-blue/0 group-hover:border-electric-blue/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-electric-blue">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe technology should empower businesses, not complicate them. 
              Our mission is to deliver innovative IT solutions that drive growth, 
              efficiency, and success for retail businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
