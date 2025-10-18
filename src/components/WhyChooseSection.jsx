import { useState, useEffect, useRef } from 'react'

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    uptime: 0,
    clients: 0,
    years: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 120, uptime: 99, clients: 85, years: 5 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounters({
        projects: Math.floor(targets.projects * easeOut),
        uptime: Math.floor(targets.uptime * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        years: Math.floor(targets.years * easeOut)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, stepDuration)
  }

  const features = [
    {
      title: "Affordable, Scalable, Reliable",
      description: "Cost-effective solutions that grow with your business and deliver consistent performance.",
      icon: "⚡"
    },
    {
      title: "Built for Retail by IT Experts",
      description: "Deep understanding of retail challenges with solutions designed specifically for your industry.",
      icon: "🎯"
    },
    {
      title: "End-to-End Support & Maintenance",
      description: "Complete support from implementation to ongoing maintenance and updates.",
      icon: "🛠️"
    }
  ]

  const stats = [
    { label: "Projects Delivered", value: `+${counters.projects}`, suffix: "" },
    { label: "Uptime Guarantee", value: `${counters.uptime}`, suffix: "%" },
    { label: "Happy Clients", value: `${counters.clients}`, suffix: "+" },
    { label: "Years Experience", value: `${counters.years}`, suffix: "+" }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-cyan-glow/5 to-electric-blue/10 animate-pulse"></div>
      
      {/* Moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/5 to-transparent transform -skew-y-1"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-exo font-bold mb-6 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
            Why Choose Nexora?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver results that matter to your business
          </p>
        </div>

        {/* Stats Counter */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:neon-glow">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-8 text-center transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue group-hover:text-cyan-glow transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-cyan-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <div className="text-6xl text-electric-blue mb-6">"</div>
            <blockquote className="text-2xl text-gray-300 mb-6 italic">
              "Nexora Labs transformed our retail operations with their innovative POS system. 
              The results speak for themselves - 40% increase in efficiency and 25% boost in sales."
            </blockquote>
            <div className="text-electric-blue font-semibold">
              — Sarah Johnson, CEO of RetailMax
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
