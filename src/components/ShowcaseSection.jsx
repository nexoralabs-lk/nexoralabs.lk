import { useState, useEffect, useRef } from 'react'

const ShowcaseSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const caseStudies = [
    {
      title: "RetailMax POS System",
      description: "Complete point-of-sale solution with inventory management and customer analytics",
      image: "🛒",
      features: ["Real-time Inventory", "Customer Analytics", "Multi-location Support", "Payment Processing"],
      results: "40% efficiency increase, 25% sales boost"
    },
    {
      title: "CloudSync ERP Platform",
      description: "Enterprise resource planning system for streamlined business operations",
      image: "📊",
      features: ["Financial Management", "Supply Chain", "HR Integration", "Reporting Dashboard"],
      results: "60% reduction in manual processes"
    },
    {
      title: "SmartStore Mobile App",
      description: "Mobile application for inventory management and staff communication",
      image: "📱",
      features: ["Mobile Inventory", "Staff Messaging", "Push Notifications", "Offline Sync"],
      results: "50% faster inventory updates"
    },
    {
      title: "DataViz Analytics Dashboard",
      description: "Comprehensive analytics platform for business intelligence and reporting",
      image: "📈",
      features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Export Options"],
      results: "80% faster decision making"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-cyan-glow/5"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-exo font-bold mb-6 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real solutions delivering real results for our clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Showcase Card */}
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            {/* Background Image/Icon */}
            <div className="absolute top-8 right-8 text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              {caseStudies[currentSlide].image}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <h3 className="text-4xl font-bold mb-4 text-electric-blue group-hover:text-cyan-glow transition-colors duration-300">
                    {caseStudies[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 group-hover:text-white transition-colors duration-300">
                    {caseStudies[currentSlide].description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-electric-blue mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {caseStudies[currentSlide].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Results */}
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-electric-blue mb-2">Results:</h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {caseStudies[currentSlide].results}
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Visual */}
                <div className="relative">
                  <div className="glass rounded-2xl p-8 text-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-9xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {caseStudies[currentSlide].image}
                    </div>
                    <div className="text-2xl font-bold text-electric-blue group-hover:text-cyan-glow transition-colors duration-300">
                      {caseStudies[currentSlide].title}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyan-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 glass rounded-full hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-electric-blue scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 glass rounded-full hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-electric-blue">
              Ready to See What We Can Build for You?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something amazing together
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-electric-blue to-cyan-glow text-navy font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/50">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
