import { motion } from 'framer-motion'
import Logo from './Logo'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Logo Positioned Absolute Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <Logo />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building the <span className="text-gradient">Future</span> of <br />
            Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge software solutions that transform businesses.
            From AI-powered analytics to seamless cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              Start Your Project
            </button>
            <button className="btn btn-secondary">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative blurred shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection
