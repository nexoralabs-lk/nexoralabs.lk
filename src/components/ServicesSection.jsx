import { useState, useEffect, useRef } from 'react'

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Retail POS Systems",
      description: "Modern, intuitive point-of-sale systems with inventory management, customer tracking, and analytics.",
      icon: "🛒",
      features: ["Inventory Management", "Customer Analytics", "Payment Processing", "Multi-location Support"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business requirements and workflows.",
      icon: "💻",
      features: ["Custom Applications", "API Development", "Database Design", "Third-party Integrations"],
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Cloud & Integration Services",
      description: "Seamless cloud migration and system integration to modernize your IT infrastructure.",
      icon: "☁️",
      features: ["Cloud Migration", "System Integration", "Data Synchronization", "API Management"],
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "IT Infrastructure & Security",
      description: "Robust IT infrastructure setup and comprehensive security solutions to protect your business.",
      icon: "🔐",
      features: ["Network Setup", "Security Audits", "Data Protection", "24/7 Monitoring"],
      color: "from-red-500 to-orange-400"
    },
    {
      title: "Business Automation",
      description: "Streamline operations with intelligent automation solutions that reduce manual work.",
      icon: "🧠",
      features: ["Process Automation", "Workflow Optimization", "AI Integration", "Performance Analytics"],
      color: "from-indigo-500 to-purple-400"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-cyan-glow/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-r from-electric-blue/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-glow/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-10 w-8 h-8 border border-electric-blue/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-cyan-glow/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-exo font-bold mb-6 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to power your retail business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover:rotate-1 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyan-glow rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-2 w-1 h-1 bg-electric-blue rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Service Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 text-electric-blue group-hover:text-cyan-glow transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 relative z-10">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-2xl border border-electric-blue/20 group-hover:border-electric-blue/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-electric-blue">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-electric-blue to-cyan-glow text-navy font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/50">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
