import { useState, useEffect } from 'react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/nexora-labs' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/nexora-labs' },
    { name: 'Email', icon: '📧', url: 'mailto:hello@nexoralabs.com' }
  ]

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-navy to-slate-900 py-16 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-exo font-bold mb-4 bg-gradient-to-r from-electric-blue to-cyan-glow bg-clip-text text-transparent">
                Nexora Labs
              </h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Powering the digital retail revolution with innovative IT solutions. 
                We build smart, scalable systems that drive business growth.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 glass rounded-full hover:neon-glow transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-electric-blue mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-electric-blue transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-electric-blue mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  hello@nexoralabs.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Nexora Labs. All rights reserved.
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 glass rounded-full hover:neon-glow transition-all duration-300 hover:scale-105"
            >
              <span className="text-electric-blue group-hover:text-cyan-glow transition-colors duration-300">
                Back to Top
              </span>
              <svg 
                className="w-4 h-4 text-electric-blue group-hover:text-cyan-glow transition-colors duration-300 group-hover:translate-y-[-2px] transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 right-4">
        <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-4 left-4">
        <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  )
}

export default Footer
